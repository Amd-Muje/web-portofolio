"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ServerIcon, CheckCircleIcon, CpuChipIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function ServerHostPage() {
  const serverPlans = [
    {
      id: "basic",
      title: "Basic VPS",
      description: "Ideal untuk website pemula, blog pribadi, atau aplikasi skala kecil dengan traffic ringan.",
      icon: <ServerIcon className="w-12 h-12 text-primary" />,
      features: [
        "2 Core CPU",
        "4 GB RAM",
        "60 GB NVMe SSD",
        "Unmetered Bandwidth",
        "Free SSL Certificate"
      ],
      price: "Rp 500.000",
      priceNote: "",
      highlight: false
    },
    {
      id: "pro",
      title: "Pro Server",
      description: "Performa maksimal untuk e-commerce, aplikasi bisnis, dan website dengan traffic menengah ke atas.",
      icon: <CpuChipIcon className="w-12 h-12 text-primary" />,
      features: [
        "6 Core CPU",
        "16 GB RAM",
        "250 GB NVMe SSD",
        "Unmetered Bandwidth",
        "DDoS Protection Basic",
        "Free Setup & Migration"
      ],
      price: "Rp 1.968.000",
      priceNote: "sudah termasuk PPN",
      highlight: true
    },
    {
      id: "enterprise",
      title: "Enterprise Dedicated",
      description: "Infrastruktur super tangguh untuk aplikasi mission-critical dan website dengan jutaan pengunjung.",
      icon: <ShieldCheckIcon className="w-12 h-12 text-primary" />,
      features: [
        "12 Core CPU",
        "32 GB RAM",
        "1 TB NVMe SSD",
        "10 Gbps Port Network",
        "DDoS Protection Advanced",
        "Priority 24/7 Support"
      ],
      price: "Rp 4.500.000",
      priceNote: "",
      highlight: false
    }
  ];

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
            Premium <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">Server Hosting</span>
          </h1>
          <p className="text-content/80 text-lg leading-relaxed">
            Infrastruktur server berkinerja tinggi, aman, dan dapat diandalkan untuk memastikan website atau aplikasi Anda selalu online 24/7 tanpa kendala.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serverPlans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -5 }}
              className={`group flex flex-col h-full p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden backdrop-blur-sm ${
                plan.highlight 
                  ? "bg-primary/10 border-primary/50 shadow-[0_0_30px_rgba(var(--primary),0.15)]" 
                  : "bg-white/5 border-white/10 hover:border-primary/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-tertiary" />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 inline-block rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                    plan.highlight ? "bg-primary/20" : "bg-primary/10"
                  }`}>
                    {plan.icon}
                  </div>
                  {plan.highlight && (
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Terpopuler
                    </span>
                  )}
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {plan.title}
                </h2>
                
                <p className="text-content/70 leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
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
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-content/50 ml-2">/bulan</span>
                  </div>
                  {plan.priceNote && (
                    <span className="text-primary/80 text-xs mt-1 font-medium">{plan.priceNote}</span>
                  )}
                </div>
                <Link 
                  href={`/checkout?type=server&name=${encodeURIComponent(plan.title)}&price=${encodeURIComponent(plan.price)}`}
                  className={`block text-center w-full py-3 rounded-xl font-medium transition-colors ${
                  plan.highlight
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-white/10 hover:bg-primary text-white"
                }`}>
                  Pilih Paket
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
