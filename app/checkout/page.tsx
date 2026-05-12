"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeftIcon, CreditCardIcon, QrCodeIcon, BuildingLibraryIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const PRODUCT_PRICES: Record<string, number> = {
  "Basic VPS": 500000,
  "Pro Server": 1968000,
  "Enterprise Dedicated": 4500000,
  "E-Commerce Website": 4207000,
  "Website Kasir (POS)": 1800000,
  "Website Absensi Karyawan": 2000000,
};

const DOMAIN_PRICES: Record<string, number> = {
  ".com": 150000,
  ".id": 230000,
  ".net": 160000,
  ".co.id": 300000,
  ".org": 175000,
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const name = searchParams.get("name") || "Layanan / Produk";
  
  let numericPrice = 0;
  if (type === "domain") {
    const parts = name.split(".");
    if (parts.length > 1) {
      const tld = "." + parts.slice(1).join(".");
      numericPrice = DOMAIN_PRICES[tld] || 0;
    }
  } else {
    numericPrice = PRODUCT_PRICES[name] || 0;
  }

  const total = numericPrice;

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
      <Link 
        href={type === "domain" ? "/product/domain" : "/product"}
        className="inline-flex items-center text-content/70 hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Kembali
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri: Detail Pembayaran */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">
              Informasi Pemesan
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-content/80">Nama Lengkap</label>
                  <input type="text" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors" placeholder="Masukkan nama" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-content/80">Email</label>
                  <input type="email" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors" placeholder="nama@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-content/80">Nomor WhatsApp</label>
                <input type="tel" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors" placeholder="0812xxxxxx" />
              </div>
            </form>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">
              Metode Pembayaran
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: "transfer", name: "Transfer Bank", icon: <BuildingLibraryIcon className="w-6 h-6" /> },
                { id: "qris", name: "QRIS", icon: <QrCodeIcon className="w-6 h-6" /> },
                { id: "cc", name: "Kartu Kredit", icon: <CreditCardIcon className="w-6 h-6" /> },
              ].map((method) => (
                <label key={method.id} className="relative cursor-pointer">
                  <input type="radio" name="payment" value={method.id} className="peer sr-only" defaultChecked={method.id === "qris"} />
                  <div className="p-4 bg-background border border-white/10 rounded-2xl peer-checked:border-primary peer-checked:bg-primary/10 flex flex-col items-center gap-3 transition-all hover:border-white/30">
                    <div className="text-content/80 peer-checked:text-primary">
                      {method.icon}
                    </div>
                    <span className="font-medium text-white text-center text-sm">{method.name}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Kolom Kanan: Ringkasan Pesanan */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm sticky top-32 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">
              Ringkasan Pesanan
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-start">
                <div className="pr-4">
                  <div className="text-content/80 text-sm mb-1">
                    {type === "domain" ? "Registrasi Domain" : "Layanan"}
                  </div>
                  <div className="font-semibold text-white break-all">{name}</div>
                </div>
                <div className="font-medium text-white whitespace-nowrap">{formatRupiah(numericPrice)}</div>
              </div>

            </div>

            <div className="border-t border-white/10 pt-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white">Total Bayar</span>
                <span className="text-2xl font-bold text-primary">{formatRupiah(total)}</span>
              </div>
            </div>

            <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2">
              <ShieldCheckIcon className="w-6 h-6" />
              Proses Pembayaran
            </button>
            <p className="text-center text-xs text-content/50 mt-4 flex items-center justify-center gap-1">
              Pembayaran aman & terenkripsi
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background text-content selection:bg-primary/30">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <CheckoutContent />
      </Suspense>
      <Footer />
    </div>
  );
}
