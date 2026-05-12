"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ShoppingCartIcon, BanknotesIcon, ClockIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WebsitePage() {
  const readyMadeProducts = [
    {
      id: "ecommerce",
      title: "E-Commerce Website",
      description: "Platform toko online siap pakai dengan fitur keranjang belanja, manajemen produk, dan integrasi payment gateway.",
      icon: <ShoppingCartIcon className="w-12 h-12 text-primary" />,
      features: [
        "Manajemen Produk & Stok",
        "Keranjang Belanja & Checkout",
        "Integrasi Payment Gateway",
        "Laporan Penjualan"
      ],
      price: "Rp 4.207.000",
      priceNote: "sudah termasuk PPN"
    },
    {
      id: "kasir",
      title: "Website Kasir (POS)",
      description: "Sistem Point of Sales berbasis web untuk mengelola transaksi, cetak struk, dan memantau stok barang secara real-time.",
      icon: <BanknotesIcon className="w-12 h-12 text-primary" />,
      features: [
        "Transaksi Cepat & Cetak Struk",
        "Manajemen Data Barang",
        "Multi-User (Admin & Kasir)",
        "Laporan Harian & Bulanan"
      ],
      price: "Rp 1.800.000",
      priceNote: ""
    },
    {
      id: "absensi",
      title: "Website Absensi Karyawan",
      description: "Aplikasi pencatatan kehadiran karyawan dengan fitur lokasi (GPS), pengajuan cuti, dan rekap gaji bulanan.",
      icon: <ClockIcon className="w-12 h-12 text-primary" />,
      features: [
        "Absensi dengan GPS & Foto",
        "Manajemen Cuti & Izin",
        "Rekapitulasi Jam Kerja",
        "Export Laporan ke Excel"
      ],
      price: "Rp 2.000.000",
      priceNote: ""
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };



  return (
    <div className="min-h-screen bg-background text-content selection:bg-primary/30">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
        <Link
          href="/product"
          className="inline-flex items-center text-content/70 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Produk <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">Website Siap Pakai</span>
          </h1>
          <p className="text-content/80 text-lg leading-relaxed">
            Pilih dari koleksi aplikasi berbasis web kami yang sudah jadi dan siap digunakan untuk mempercepat operasional bisnis Anda.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {readyMadeProducts.map((product) => (
            <motion.div
              key={product.id}
              // variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group flex flex-col h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex-grow">
                <div className="mb-6 p-4 bg-primary/10 inline-block rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>

                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {product.title}
                </h2>

                <p className="text-content/70 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm text-content/80">
                      <CheckCircleIcon className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10 mt-auto">
                <div className="flex flex-col mb-6">
                  <span className="text-content/60 text-sm mb-1">Mulai dari</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">{product.price}</span>
                  </div>
                  {product.priceNote && (
                    <span className="text-primary/80 text-xs mt-1 font-medium">{product.priceNote}</span>
                  )}
                </div>
                <button className="w-full py-3 bg-white/10 hover:bg-primary text-white rounded-xl font-medium transition-colors">
                  Lihat Demo
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
