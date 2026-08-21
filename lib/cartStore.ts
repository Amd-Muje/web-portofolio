export interface CartItem {
  id: string;
  name: string;
  type: "server" | "website" | "domain";
  category: string;
  price: number;
  quantity: number;
}

const CART_KEY = "muje_cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function generateOrderId(): string {
  const date = new Date();
  const dateStr =
    date.getFullYear().toString() +
    String(date.getMonth() + 1).padStart(2, "0") +
    String(date.getDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `MJD-${dateStr}-${rand}`;
}

export const PRODUCT_PRICES: Record<string, number> = {
  "Basic VPS": 500000,
  "Pro Server": 1968000,
  "Enterprise Dedicated": 4500000,
  "E-Commerce Website": 4207000,
  "Website Kasir (POS)": 1800000,
  "Website Absensi Karyawan": 2000000,
};

export const DOMAIN_PRICES: Record<string, number> = {
  ".com": 150000,
  ".id": 230000,
  ".net": 160000,
  ".co.id": 300000,
  ".org": 175000,
};

export function formatRupiah(num: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
