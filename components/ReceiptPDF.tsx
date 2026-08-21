"use client";

import React from "react";
import { CartItem, formatRupiah, formatDate, generateOrderId } from "@/lib/cartStore";

interface ReceiptPDFProps {
  items: CartItem[];
  buyerName: string;
  buyerPhone: string;
  paymentMethod: string;
  orderId?: string;
}

const PAYMENT_LABEL: Record<string, string> = {
  transfer: "Transfer Bank",
  qris: "QRIS",
  cc: "Kartu Kredit",
};

export default function ReceiptPDF({
  items,
  buyerName,
  buyerPhone,
  paymentMethod,
  orderId,
}: ReceiptPDFProps) {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const id = orderId || generateOrderId();
  const dateStr = formatDate(new Date());

  return (
    <div
      id="receipt-pdf-content"
      style={{
        fontFamily: "'Segoe UI', Arial, sans-serif",
        background: "#fff",
        color: "#1a1a1a",
        width: "600px",
        margin: "0 auto",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "28px", borderBottom: "2px solid #6d28d9", paddingBottom: "20px" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
          marginBottom: "12px",
        }}>
          <span style={{ color: "#fff", fontWeight: "900", fontSize: "22px" }}>MJ</span>
        </div>
        <h1 style={{ margin: "0 0 4px", fontSize: "22px", fontWeight: "800", color: "#1a1a1a", letterSpacing: "-0.5px" }}>
          MUJE DIGITAL &amp; KREATIF
        </h1>
        <p style={{ margin: "0", fontSize: "12px", color: "#6b7280" }}>
          Solusi Digital Terpercaya untuk Bisnis Anda
        </p>
        <div style={{
          display: "inline-block",
          marginTop: "12px",
          padding: "4px 16px",
          background: "#7c3aed",
          color: "#fff",
          borderRadius: "20px",
          fontSize: "11px",
          fontWeight: "700",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}>
          Nota Pembelian
        </div>
      </div>

      {/* Order Info */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
        background: "#f8f4ff",
        border: "1px solid #ede9fe",
        borderRadius: "12px",
        padding: "16px 20px",
        marginBottom: "24px",
        fontSize: "13px",
      }}>
        <div>
          <span style={{ color: "#6b7280", display: "block", marginBottom: "2px" }}>No. Order</span>
          <strong style={{ color: "#1a1a1a" }}>{id}</strong>
        </div>
        <div>
          <span style={{ color: "#6b7280", display: "block", marginBottom: "2px" }}>Tanggal</span>
          <strong style={{ color: "#1a1a1a" }}>{dateStr}</strong>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span style={{ color: "#6b7280", display: "block", marginBottom: "2px" }}>Nama Pembeli</span>
          <strong style={{ color: "#1a1a1a" }}>{buyerName || "—"}</strong>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span style={{ color: "#6b7280", display: "block", marginBottom: "2px" }}>No. WhatsApp</span>
          <strong style={{ color: "#1a1a1a" }}>{buyerPhone || "—"}</strong>
        </div>
      </div>

      {/* Items Table */}
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#6d28d9", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
          Daftar Produk
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
          <thead>
            <tr style={{ background: "#7c3aed", color: "#fff" }}>
              <th style={{ padding: "10px 12px", textAlign: "left", borderRadius: "8px 0 0 0", fontWeight: "600" }}>Produk</th>
              <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: "600" }}>Qty</th>
              <th style={{ padding: "10px 12px", textAlign: "right", fontWeight: "600" }}>Harga Satuan</th>
              <th style={{ padding: "10px 12px", textAlign: "right", borderRadius: "0 8px 0 0", fontWeight: "600" }}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr
                key={item.id}
                style={{ background: idx % 2 === 0 ? "#fff" : "#faf5ff" }}
              >
                <td style={{ padding: "10px 12px", color: "#1a1a1a" }}>
                  <div style={{ fontWeight: "600" }}>{item.name}</div>
                  <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>{item.category}</div>
                </td>
                <td style={{ padding: "10px 12px", textAlign: "center", color: "#374151" }}>{item.quantity}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: "#374151" }}>{formatRupiah(item.price)}</td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: "#1a1a1a", fontWeight: "600" }}>
                  {formatRupiah(item.price * item.quantity)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total */}
      <div style={{
        background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
        borderRadius: "12px",
        padding: "16px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px",
      }}>
        <div>
          <span style={{ color: "#ede9fe", fontSize: "12px", display: "block" }}>Metode Pembayaran</span>
          <strong style={{ color: "#fff", fontSize: "14px" }}>{PAYMENT_LABEL[paymentMethod] || paymentMethod}</strong>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{ color: "#ede9fe", fontSize: "12px", display: "block" }}>Total Bayar</span>
          <strong style={{ color: "#fff", fontSize: "22px", fontWeight: "800" }}>{formatRupiah(total)}</strong>
        </div>
      </div>

      {/* Status */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "#fff7ed",
        border: "1px solid #fed7aa",
        borderRadius: "10px",
        padding: "10px 16px",
        marginBottom: "32px",
        fontSize: "12px",
      }}>
        <span style={{ fontSize: "16px" }}>⏳</span>
        <div>
          <strong style={{ color: "#92400e" }}>Status: Menunggu Pembayaran</strong>
          <p style={{ margin: "2px 0 0", color: "#b45309" }}>
            Silakan selesaikan pembayaran sesuai metode yang dipilih. Hubungi kami via WhatsApp jika ada pertanyaan.
          </p>
        </div>
      </div>

      {/* Signature */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
        {/* Buyer signature */}
        <div style={{
          border: "1px dashed #d1d5db",
          borderRadius: "12px",
          padding: "16px",
          textAlign: "center",
        }}>
          <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#6b7280" }}>Tanda Tangan Pembeli</p>
          <div style={{ height: "70px" }} />
          <p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#374151", borderTop: "1px solid #e5e7eb", paddingTop: "8px" }}>
            {buyerName || "( Pembeli )"}
          </p>
        </div>

        {/* Seller signature */}
        <div style={{
          border: "1px solid #c4b5fd",
          borderRadius: "12px",
          padding: "16px",
          textAlign: "center",
          background: "#f8f4ff",
        }}>
          <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#7c3aed" }}>Tanda Tangan Penjual</p>
          <div style={{ height: "70px" }} />
          <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", color: "#6d28d9", borderTop: "1px solid #c4b5fd", paddingTop: "8px" }}>
            Muje
          </p>
          <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#7c3aed" }}>Muje Digital &amp; Kreatif</p>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #e5e7eb",
        paddingTop: "16px",
        textAlign: "center",
        fontSize: "11px",
        color: "#9ca3af",
      }}>
        <p style={{ margin: "0 0 4px" }}>
          Terima kasih telah mempercayakan kebutuhan digital Anda kepada kami. 🙏
        </p>
        <p style={{ margin: "0", color: "#c4b5fd" }}>
          <strong style={{ color: "#7c3aed" }}>Muje Digital &amp; Kreatif</strong> — mujedigital.id
        </p>
      </div>
    </div>
  );
}
