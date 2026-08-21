"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface CartToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export default function CartToast({ message, visible, onClose }: CartToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 bg-[#0d0d0d] border border-primary/40 text-white px-5 py-4 rounded-2xl shadow-2xl shadow-primary/20 backdrop-blur-md max-w-sm"
        >
          <div className="flex-shrink-0 p-2 bg-primary/20 rounded-xl">
            <ShoppingCartIcon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white">Ditambahkan ke keranjang!</p>
            <p className="text-xs text-content/60 truncate mt-0.5">{message}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <CheckCircleIcon className="w-5 h-5 text-green-400" />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <XMarkIcon className="w-4 h-4 text-content/50" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
