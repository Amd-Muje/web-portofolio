"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, GlobeAltIcon, MagnifyingGlassIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function DomainPage() {
  const [search, setSearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<{ domain: string; tld: string; available: boolean; price: string }[]>([]);

  const tldPrices = [
    { tld: ".com", price: "Rp 150.000", available: true },
    { tld: ".id", price: "Rp 250.000", available: true },
    { tld: ".net", price: "Rp 160.000", available: false }, // Simulasikan ada yang tidak tersedia
    { tld: ".co.id", price: "Rp 300.000", available: true },
    { tld: ".org", price: "Rp 175.000", available: true },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;

    setIsSearching(true);
    setHasSearched(false);

    // Ambil nama dasar tanpa ekstensi jika user mengetik ekstensi
    const baseName = search.trim().toLowerCase().split('.')[0].replace(/[^a-z0-9-]/g, '');

    // Simulasi loading pencarian domain
    setTimeout(() => {
      const mockResults = tldPrices.map(item => ({
        domain: `${baseName}${item.tld}`,
        tld: item.tld,
        available: item.available,
        price: item.price
      }));
      
      setResults(mockResults);
      setIsSearching(false);
      setHasSearched(true);
    }, 1000);
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

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-4 bg-primary/10 inline-block rounded-2xl mb-6">
              <GlobeAltIcon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cari <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">Nama Domain</span> Anda
            </h1>
            <p className="text-content/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Identitas digital Anda dimulai dari sini. Cari nama domain yang tepat untuk bisnis, blog, atau portofolio Anda.
            </p>
            
            {/* Search Box */}
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-12">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-2 focus-within:border-primary/50 focus-within:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all">
                <div className="pl-4 pr-2 text-content/50">
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Ketik nama domain (misal: bisnisku)"
                  className="flex-1 bg-transparent border-none outline-none text-white py-3 px-2 placeholder:text-content/40"
                  required
                />
                <button 
                  type="submit"
                  disabled={isSearching || !search.trim()}
                  className="px-6 py-3 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary text-white rounded-full font-semibold transition-all flex items-center justify-center min-w-[120px]"
                >
                  {isSearching ? (
                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    "Cari Domain"
                  )}
                </button>
              </div>
            </form>

            {/* Default TLD Pricing (if not searched) */}
            {!hasSearched && !isSearching && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
              >
                {[
                  { tld: ".com", price: "Rp 150.000" },
                  { tld: ".id", price: "Rp 250.000" },
                  { tld: ".co.id", price: "Rp 300.000" },
                  { tld: ".net", price: "Rp 160.000" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <div className="text-2xl font-bold text-white mb-2">{item.tld}</div>
                    <div className="text-primary font-medium">{item.price}<span className="text-content/50 text-sm">/thn</span></div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Search Results */}
            <AnimatePresence>
              {hasSearched && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-8 flex flex-col gap-4 text-left"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">Hasil Pencarian</h3>
                  {results.map((result, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl border ${
                        result.available 
                          ? "bg-white/5 border-white/10 hover:border-primary/50" 
                          : "bg-red-500/5 border-red-500/20"
                      } transition-colors`}
                    >
                      <div className="flex items-center gap-4 mb-4 sm:mb-0">
                        {result.available ? (
                          <CheckCircleIcon className="w-8 h-8 text-green-400" />
                        ) : (
                          <XCircleIcon className="w-8 h-8 text-red-400" />
                        )}
                        <div>
                          <div className="text-xl font-bold text-white flex items-center gap-2">
                            {result.domain}
                            {!result.available && (
                              <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full">Diambil</span>
                            )}
                          </div>
                          {result.available && (
                            <div className="text-content/70 text-sm">Domain tersedia untuk didaftarkan!</div>
                          )}
                        </div>
                      </div>

                      {result.available ? (
                        <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{result.price}</div>
                            <div className="text-content/50 text-xs">/tahun</div>
                          </div>
                          <Link 
                            href={`/checkout?type=domain&name=${result.domain}&price=${result.price}`}
                            className="px-6 py-2 bg-white/10 hover:bg-primary text-white rounded-xl font-medium transition-colors inline-block text-center"
                          >
                            Beli
                          </Link>
                        </div>
                      ) : (
                        <button disabled className="px-6 py-2 bg-white/5 text-content/40 rounded-xl font-medium cursor-not-allowed">
                          Tidak Tersedia
                        </button>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
