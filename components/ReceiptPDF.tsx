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
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        background: "#ffffff",
        color: "#333333",
        width: "700px", // Fixed width to ensure consistent capture
        minHeight: "990px", // A4 aspect ratio
        margin: "0 auto",
        padding: "20px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{
        border: "1px solid #1e3a8a",
        padding: "20px",
        height: "100%",
        boxSizing: "border-box",
      }}>

        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #1e3a8a", paddingBottom: "15px", marginBottom: "15px" }}>
          <div>
            <h1 style={{ margin: "0 0 5px 0", fontSize: "22px", color: "#1e3a8a", fontWeight: "bold", textTransform: "uppercase" }}>INVOICE</h1>
            <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>No. Invoice: <strong style={{ color: "#333" }}>{id}</strong></p>
            <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>Tanggal: <strong style={{ color: "#333" }}>20 - Juni - 2026</strong></p>
          </div>
          <div style={{ textAlign: "right" }}>
            <h2 style={{ margin: "0 0 5px 0", fontSize: "18px", color: "#1e3a8a", fontWeight: "bold" }}>Muje Digital & Kreatif</h2>
            <p style={{ margin: "0", fontSize: "11px", color: "#666" }}>Layanan Pembuatan Website & Hosting</p>
            <p style={{ margin: "0", fontSize: "11px", color: "#666" }}>muje.me/muje.my.id</p>
          </div>
        </div>

        {/* Customer & Payment Info */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <div style={{ width: "48%", border: "1px solid #e5e7eb", padding: "10px" }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#1e3a8a", textTransform: "uppercase", borderBottom: "1px solid #e5e7eb", paddingBottom: "5px" }}>Ditagihkan Kepada:</h3>
            <p style={{ margin: "0 0 4px 0", fontSize: "12px", fontWeight: "bold" }}>{buyerName || "—"}</p>
            <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>No. WA: {buyerPhone || "—"}</p>
          </div>

          <div style={{ width: "48%", border: "1px solid #e5e7eb", padding: "10px" }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#1e3a8a", textTransform: "uppercase", borderBottom: "1px solid #e5e7eb", paddingBottom: "5px" }}>Informasi Pembayaran:</h3>
            <table style={{ width: "100%", fontSize: "12px" }}>
              <tbody>
                <tr>
                  <td style={{ color: "#666", paddingBottom: "4px" }}>Metode Pembayaran:</td>
                  <td style={{ fontWeight: "bold", textAlign: "right", paddingBottom: "4px" }}>{PAYMENT_LABEL[paymentMethod] || paymentMethod}</td>
                </tr>
                <tr>
                  <td style={{ color: "#666" }}>Status Tagihan:</td>
                  <td style={{ fontWeight: "bold", textAlign: "right", color: "#16a34a" }}>LUNAS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Itemized Table */}
        <div style={{ marginBottom: "20px", minHeight: "250px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
            <thead>
              <tr style={{ backgroundColor: "#1e3a8a", color: "#ffffff" }}>
                <th style={{ padding: "8px", textAlign: "center", border: "1px solid #1e3a8a", width: "5%" }}>No</th>
                <th style={{ padding: "8px", textAlign: "left", border: "1px solid #1e3a8a", width: "45%" }}>Deskripsi Layanan</th>
                <th style={{ padding: "8px", textAlign: "center", border: "1px solid #1e3a8a", width: "10%" }}>Qty</th>
                <th style={{ padding: "8px", textAlign: "right", border: "1px solid #1e3a8a", width: "20%" }}>Harga Satuan</th>
                <th style={{ padding: "8px", textAlign: "right", border: "1px solid #1e3a8a", width: "20%" }}>Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "8px", textAlign: "center", borderLeft: "1px solid #e5e7eb", borderRight: "1px solid #e5e7eb" }}>{index + 1}</td>
                  <td style={{ padding: "8px", borderRight: "1px solid #e5e7eb" }}>
                    <div style={{ fontWeight: "bold", color: "#333" }}>{item.name}</div>
                    <div style={{ fontSize: "10px", color: "#666", marginTop: "2px" }}>{item.category}</div>
                  </td>
                  <td style={{ padding: "8px", textAlign: "center", borderRight: "1px solid #e5e7eb" }}>{item.quantity}</td>
                  <td style={{ padding: "8px", textAlign: "right", borderRight: "1px solid #e5e7eb" }}>{formatRupiah(item.price)}</td>
                  <td style={{ padding: "8px", textAlign: "right", borderRight: "1px solid #e5e7eb", fontWeight: "bold" }}>{formatRupiah(item.price * item.quantity)}</td>
                </tr>
              ))}
              {Array.from({ length: Math.max(0, 5 - items.length) }).map((_, idx) => (
                <tr key={`filler-${idx}`} style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "8px", borderLeft: "1px solid #e5e7eb", borderRight: "1px solid #e5e7eb" }}>&nbsp;</td>
                  <td style={{ padding: "8px", borderRight: "1px solid #e5e7eb" }}>&nbsp;</td>
                  <td style={{ padding: "8px", borderRight: "1px solid #e5e7eb" }}>&nbsp;</td>
                  <td style={{ padding: "8px", borderRight: "1px solid #e5e7eb" }}>&nbsp;</td>
                  <td style={{ padding: "8px", borderRight: "1px solid #e5e7eb" }}>&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals Section */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "30px" }}>
          <div style={{ width: "40%", fontSize: "12px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "8px", textAlign: "right", fontWeight: "bold", border: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>Subtotal:</td>
                  <td style={{ padding: "8px", textAlign: "right", border: "1px solid #e5e7eb" }}>{formatRupiah(total)}</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", textAlign: "right", fontWeight: "bold", border: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>PPN (0%):</td>
                  <td style={{ padding: "8px", textAlign: "right", border: "1px solid #e5e7eb" }}>Rp 0</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 8px", textAlign: "right", fontWeight: "bold", border: "1px solid #1e3a8a", backgroundColor: "#1e3a8a", color: "#fff", fontSize: "14px" }}>TOTAL TAGIHAN:</td>
                  <td style={{ padding: "10px 8px", textAlign: "right", border: "1px solid #1e3a8a", fontWeight: "bold", fontSize: "14px", color: "#1e3a8a" }}>{formatRupiah(total)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Signatures */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto", paddingTop: "20px" }}>
          <div style={{ width: "30%", textAlign: "center" }}>
            <p style={{ margin: "0 0 50px 0", fontSize: "12px", color: "#333" }}>Hormat Kami,</p>
            <div style={{ borderBottom: "1px solid #333", margin: "0 auto", width: "80%" }}></div>
            <p style={{ margin: "5px 0 0 0", fontSize: "12px", fontWeight: "bold" }}>Muje</p>
            <p style={{ margin: "0", fontSize: "10px", color: "#666" }}>Muje Digital & Kreatif</p>
          </div>
        </div>

        {/* Footer Note */}
        <div style={{ marginTop: "30px", borderTop: "1px solid #e5e7eb", paddingTop: "10px", textAlign: "center" }}>
          <p style={{ margin: "0", fontSize: "10px", color: "#666", fontStyle: "italic" }}>
            * Invoice ini sah dan di-generate otomatis oleh sistem Muje Digital & Kreatif.
          </p>
        </div>

      </div>
    </div>
  );
}
