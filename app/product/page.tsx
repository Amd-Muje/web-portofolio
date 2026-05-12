"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServerIcon, WindowIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function ProductPage() {
  const products = [
    {
      id: "serverhost",
      title: "Host Server",
      description: "Premium high-performance servers for your business needs. 99.9% uptime guarantee with 24/7 support.",
      icon: <ServerIcon className="w-12 h-12 text-primary" />,
      href: "/product/serverhost",
    },
    {
      id: "website",
      title: "Product Website",
      description: "Custom web development services. We build fast, responsive, and beautiful websites tailored for your brand.",
      icon: <WindowIcon className="w-12 h-12 text-primary" />,
      href: "/product/website",
    },
    {
      id: "domain",
      title: "Domain Name",
      description: "Secure the perfect domain name for your business. Fast registration, easy management, and free WHOIS privacy.",
      icon: <GlobeAltIcon className="w-12 h-12 text-primary" />,
      href: "/product/domain",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };



  return (
    <div className="min-h-screen bg-background text-content selection:bg-primary/30">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-content/80 text-lg max-w-2xl mx-auto">
            Choose the best solution to elevate your digital presence.
            From powerful servers to custom websites and domains, we&apos;ve got you covered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <Link href={product.href} key={product.id}>
              <motion.div
                // variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-primary/10 inline-block rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>

                  <h2 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                    {product.title}
                  </h2>

                  <p className="text-content/70 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Explore {product.title}</span>
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
