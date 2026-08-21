"use client";

import React, { useState, useRef, useCallback } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCartIcon,
  TrashIcon,
  MinusIcon,
  PlusIcon,
  ArrowLeftIcon,
  DocumentArrowDownIcon,
  ShieldCheckIcon,
  ExclamationCircleIcon,
  UserIcon,
  PhoneIcon,
  CreditCardIcon,
  QrCodeIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "@/hooks/useCart";
import ReceiptPDF from "@/components/ReceiptPDF";
import { formatRupiah, generateOrderId } from "@/lib/cartStore";

const PAYMENT_METHODS = [
  { id: "transfer", name: "Transfer Bank", icon: <BuildingLibraryIcon className="w-5 h-5" /> },
  { id: "qris", name: "QRIS", icon: <QrCodeIcon className="w-5 h-5" /> },
  { id: "cc", name: "Kartu Kredit", icon: <CreditCardIcon className="w-5 h-5" /> },
];

export default function CartPage() {
  const { items, isLoaded, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("transfer");
  const [isGenerating, setIsGenerating] = useState(false);
  const [orderId] = useState(() => generateOrderId());
  const receiptRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = useCallback(async () => {
    if (!buyerName.trim()) {
      alert("Mohon isi nama pembeli terlebih dahulu.");
      return;
    }
    if (items.length === 0) return;

    setIsGenerating(true);

    try {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const element = receiptRef.current;
      if (!element) return;

      // Make temporarily visible for capture
      element.style.position = "fixed";
      element.style.top = "-9999px";
      element.style.left = "0";
      element.style.visibility = "visible";
      element.style.display = "block";

      await new Promise((r) => setTimeout(r, 300));

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: 620,
        windowWidth: 620,
      });

      element.style.position = "absolute";
      element.style.visibility = "hidden";

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth - 20; // 10mm margin each side
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 10;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight - 20;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight - 20;
      }

      pdf.save(`Nota-Pembelian-${orderId}.pdf`);
    } catch (err) {
      console.error("PDF generation error:", err);
      alert("Gagal membuat PDF. Silakan coba lagi.");
    } finally {
      setIsGenerating(false);
    }
  }, [items, buyerName, orderId]);

  return (
    <div className="min-h-screen bg-background text-content selection:bg-primary/30">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
        <Link
          href="/product"
          className="inline-flex items-center text-content/70 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Produk
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <ShoppingCartIcon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Keranjang Belanja
              </h1>
              <p className="text-content/60 mt-1">
                {isLoaded ? `${totalItems} item` : "Memuat..."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Empty state */}
        {isLoaded && items.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24"
          >
            <div className="p-6 bg-white/5 inline-flex rounded-full mb-6">
              <ShoppingCartIcon className="w-16 h-16 text-content/30" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Keranjang Kosong</h2>
            <p className="text-content/60 mb-8">
              Belum ada produk di keranjang. Yuk pilih produk yang kamu butuhkan!
            </p>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all hover:scale-105"
            >
              Lihat Produk
            </Link>
          </motion.div>
        )}

        {/* Cart content */}
        {isLoaded && items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Items + Buyer Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Item list */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Daftar Produk
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-xs text-content/50 hover:text-red-400 transition-colors flex items-center gap-1"
                  >
                    <TrashIcon className="w-3.5 h-3.5" />
                    Hapus semua
                  </button>
                </div>

                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors"
                      >
                        {/* Item info */}
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-primary/80 font-medium mb-0.5">{item.category}</div>
                          <div className="text-white font-semibold truncate">{item.name}</div>
                          <div className="text-primary font-bold mt-1">{formatRupiah(item.price)}</div>
                        </div>

                        {/* Qty controls */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="p-2 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <MinusIcon className="w-4 h-4 text-content/80" />
                            </button>
                            <span className="px-4 py-2 text-white font-medium text-sm min-w-[2.5rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-white/10 transition-colors"
                            >
                              <PlusIcon className="w-4 h-4 text-content/80" />
                            </button>
                          </div>

                          <div className="text-white font-bold text-sm min-w-[100px] text-right">
                            {formatRupiah(item.price * item.quantity)}
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 rounded-lg hover:bg-red-500/10 text-content/40 hover:text-red-400 transition-colors"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Buyer info form */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <UserIcon className="w-5 h-5 text-primary" />
                  Informasi Pembeli
                  <span className="text-xs font-normal text-content/50 ml-1">(untuk nota PDF)</span>
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-content/70 flex items-center gap-1.5">
                      <UserIcon className="w-4 h-4" />
                      Nama Lengkap <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="Masukkan nama lengkap"
                      className="w-full bg-background border border-white/10 focus:border-primary/50 rounded-xl px-4 py-3 text-white outline-none transition-colors placeholder:text-content/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-content/70 flex items-center gap-1.5">
                      <PhoneIcon className="w-4 h-4" />
                      Nomor WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={buyerPhone}
                      onChange={(e) => setBuyerPhone(e.target.value)}
                      placeholder="0812xxxxxx"
                      className="w-full bg-background border border-white/10 focus:border-primary/50 rounded-xl px-4 py-3 text-white outline-none transition-colors placeholder:text-content/30"
                    />
                  </div>
                </div>
              </div>

              {/* Payment method */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-white mb-6">Metode Pembayaran</h2>
                <div className="grid grid-cols-3 gap-3">
                  {PAYMENT_METHODS.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${
                        paymentMethod === method.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-white/10 bg-background text-content/60 hover:border-white/30"
                      }`}
                    >
                      {method.icon}
                      <span className="text-sm font-medium text-center">{method.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Summary & Download */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm sticky top-32 shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                  Ringkasan Pesanan
                </h2>

                {/* Items summary */}
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div className="text-content/70 flex-1 mr-2 truncate">
                        {item.name}
                        {item.quantity > 1 && (
                          <span className="ml-1 text-primary/70">×{item.quantity}</span>
                        )}
                      </div>
                      <div className="text-white font-medium whitespace-nowrap">
                        {formatRupiah(item.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">Total Bayar</span>
                    <span className="text-2xl font-bold text-primary">{formatRupiah(totalPrice)}</span>
                  </div>
                </div>

                {/* Warning if no name */}
                {!buyerName.trim() && (
                  <div className="flex items-start gap-2 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 mb-4 text-xs text-amber-400">
                    <ExclamationCircleIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Isi nama pembeli agar dapat men-download nota PDF.</span>
                  </div>
                )}

                {/* Download PDF Button */}
                <button
                  onClick={handleDownloadPDF}
                  disabled={isGenerating || !buyerName.trim()}
                  className="w-full py-3.5 mb-3 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Membuat PDF...
                    </>
                  ) : (
                    <>
                      <DocumentArrowDownIcon className="w-5 h-5" />
                      Cetak Struk / Unduh PDF
                    </>
                  )}
                </button>

                {/* Checkout Button */}
                <Link
                  href={`/checkout?type=cart&name=${encodeURIComponent(`${totalItems} Produk`)}`}
                  className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheckIcon className="w-5 h-5" />
                  Proses Pembayaran
                </Link>

                <p className="text-center text-xs text-content/40 mt-3">
                  Pembayaran aman &amp; terenkripsi 🔒
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </main>

      {/* Hidden PDF receipt for capture */}
      <div
        style={{
          position: "absolute",
          visibility: "hidden",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <div ref={receiptRef}>
          <ReceiptPDF
            items={items}
            buyerName={buyerName}
            buyerPhone={buyerPhone}
            paymentMethod={paymentMethod}
            orderId={orderId}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
