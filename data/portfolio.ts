import { IconType } from "react-icons";
import { FaReact, FaCss3, FaCcStripe, FaEthereum, FaLaravel   } from "react-icons/fa";
import {
	SiTailwindcss,
	SiUnity,
	SiAdonisjs,
	SiTypescript 
} from "react-icons/si";
import { RiGeminiFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { MdOutlineMovie } from "react-icons/md";

export type TechStack = {
	name: string;
	icon: IconType;
	color: string;
};

export type Portfolio = {
	id: number;
	title: string;
	description: string;
	tech: TechStack[];
	image: string;
	image2: string;
	color1: string;
	detail: string[];
	color2: string;
	link: string;
};

export const portfolioList: Portfolio[] = [
	{
		id: 1,
		title: "Google Gemini Clone",
		description:
			"Gemini – Clone adalah replika antarmuka Gemini menggunakan React, CSS native, dan Gemini API. Fokus pada integrasi API dan pengelolaan state.",
		tech: [
			{ name: "React", icon: FaReact, color: "#66dbfb" },
			{ name: "Css", icon: FaCss3, color: "#2863ea" },
			{ name: "Gemini API", icon: RiGeminiFill, color: "#2863ea" },
		],
		detail: [
			"Membuat UI menyerupai Gemini dengan pendekatan komponen modular.",
			"Mengintegrasikan Gemini API untuk interaksi pengguna secara real-time.",
			"Mengelola state menggunakan hook React seperti `useState` dan `useEffect`.",
			"Responsive design dengan CSS native tanpa framework tambahan.",
			"Fokus pada fungsionalitas mirip chatbot dengan tata letak intuitif.",
		],
		image: "/projects/Gemini-clone.png",
		image2: "/projects/gem-clone-mocup.jpg",
		color1: "#da8cf1",
		color2: "#8bb1f2",
		link: "https://gemini-clone-phi-ashen.vercel.app/",
	},
	{
		id: 2,
		title: "Steamix",
		description:
			"Steamix adalah platform database film menggunakan React, Tailwind CSS, dan TMDB API. Fokus pada pencarian film, detail, dan trailer secara praktis",
		tech: [
			{ name: "React", icon: FaReact, color: "#61DAFB" },
			{ name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
			{ name: "TMDB API", icon: MdOutlineMovie, color: "#fffff" },
		],
		detail: [
			"Menggunakan TMDB API untuk menampilkan daftar dan detail film terkini.",
			"Menerapkan sistem pencarian dan filter judul secara real-time.",
			"Desain antarmuka dinamis dengan Tailwind CSS.",
			"Mengelola routing halaman film dengan React Router.",
		],
		image: "/projects/Streamix.png",
		image2: "/projects/streamix-mockup.jpg",
		color1: "#6b90ff",
		color2: "#6b90ff",
		link: "https://streamix-tau.vercel.app/",
	},
	{
		id: 3,
		title: "Nexhop ecommerce with Stripe",
		description:
			"Website e-commerce sederhana dengan checkout produk dari stripe.",
		tech: [
			{ name: "NextJs", icon: RiNextjsFill, color: "#ffffff" },
			{ name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
			{ name: "Stripe", icon: FaCcStripe, color: "#685fff" },
		],
		detail: [
			"Memanfaatkan Next.js untuk server-side rendering dan performa tinggi.",
			"Checkout pembayaran terintegrasi langsung dengan Stripe API.",
			"Desain responsif dengan Tailwind CSS.",
			"Menyediakan keranjang belanja sederhana dan proses pembayaran nyata.",
			"Mengelola data produk secara statis dan dinamis.",
		],
		image: "/projects/nexhop.png",
		image2: "/projects/nexhop-mockup.jpg",
		color1: "#ffa16b",
		color2: "#ff843d",
		link: "https://nexhop-rho.vercel.app/",
	},
	{
		id: 4,
		title: "Funtogether",
		description:
			"Website Untuk Melakukan Crowd Funding dengan Transparansi Transaksi yang Jelas.",
		tech: [
			{ name: "React", icon: FaReact, color: "#61DAFB" },
			{ name: "AdonisJs", icon: SiAdonisjs, color: "#6115e6" },
			{ name: "BlockChain", icon: FaEthereum , color: "#bababa" },
		],
		detail: [
			"Menampilkan proyek-proyek yang sedang menggalang dana dengan informasi lengkap.",
			"Menggunakan AdonisJS sebagai backend untuk pengelolaan transaksi.",
			"Integrasi dengan teknologi blockchain untuk transparansi dan kepercayaan.",
			"Antarmuka dinamis yang menampilkan status donasi secara real-time.",
			"Menggunakan midtrans sebagai gateway transaksi.",
		],
		image: "/projects/fundtogether.jpg",
		image2: "/projects/funtogether-mockup.jpg",
		color1: "#e0b1f0",
		color2: "#c9c2ff",
		link: "https://github.com/Amd-Muje/tubes-api",
	},
	{
		id: 5,
		title: "SoundCloud Clone",
		description:
			"Clone dari SoundCloud menggunakan React, Laravel dan Tailwind CSS untuk antarmuka pengguna yang responsif.",
		tech: [
			{ name: "React", icon: FaReact, color: "#61DAFB" },
			{ name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
			{ name: "Laravel", icon: FaLaravel , color: "#ff3b3b" },
		],
		detail: [
			"Meniru antarmuka dan fungsi utama SoundCloud.",
			"Laravel digunakan sebagai backend untuk autentikasi dan data musik.",
			"Frontend dibangun dengan React dan Tailwind untuk desain cepat dan modern.",
			"Fitur upload, play, dan komentar musik dasar disediakan.",
			"Fokus pada pengembangan sistem pemutar musik berbasis streaming.",
		],
		image: "/projects/SoundCloud.jpg",
		image2: "/projects/sondklod-mockup.jpg",
		color1: "#ffcda3",
		color2: "#ffead9",
		link: "https://github.com/Amd-Muje/soundcloud_clone",
	},
	{
		id: 6,
		title: "Tebakin",
		description: "Tebakin adalah aplikasi quiz sederhana",
		tech: [
			{ name: "React", icon: FaReact, color: "#61DAFB" },
			{ name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
			{ name: "Typescript", icon: SiTypescript , color: "#06B6D4" },
		],
		detail: [
			"Menggunakan React dan TypeScript untuk struktur data yang aman.",
			"Desain minimalis dan ringan menggunakan Tailwind.",
			"Mengelola skor dan hasil akhir kuis secara lokal.",
		],
		image: "/projects/Tebakin.jpg",
		image2: "/projects/Tebakin-mockup.jpg",
		color1: "#ff9191",
		color2: "#ffffff",
		link: "https://tebakin.vercel.app/",
	},
	{
		id: 7,
		title: "Kitchen Chaos",
		description:
			"Game bertema seperti Game overcooked, suasana dapur yang sibuk dengan berbagai tantangan memasak.",
		tech: [
			{ name: "Unity", icon: SiUnity, color: "#ffffff" },
			{ name: "C#", icon: TbBrandCSharp, color: "#ffffff" },
		],
		detail: [
			"Terinspirasi dari game Overcooked, dengan gameplay dapur kooperatif.",
			"Dirancang dengan Unity dan pemrograman menggunakan C#.",
			"Menerapkan sistem pesanan, waktu, dan interaksi antar objek.",
			"Level meningkat dengan kesulitan yang dinamis.",
			"Animasi karakter dan item dibuat untuk meningkatkan pengalaman bermain.",
		],
		image: "/projects/Kitchen-Chaos.jpg",
		image2: "/projects/Kitchen-Chaos-Mockup.png",
		color1: "#91afff",
		color2: "#ffffff",
		link: "https://github.com/Amd-Muje/MyFirstGame",
	},
	{
		id: 8,
		title: "2.5 D RPG Game",
		description: "Game RPG 2.5D dengan elemen petualangan dan eksplorasi. seperti game Suikoden.",
		tech: [
			{ name: "Unity", icon: SiUnity, color: "#ffffff" },
			{ name: "C#", icon: TbBrandCSharp, color: "#ffffff" },
		],
		detail: [
			"Game RPG dengan elemen petualangan dalam perspektif 2.5D.",
			"Penggunaan Unity untuk environment dan animasi karakter.",
			"Scripting dengan C# untuk logika misi dan pertempuran.",
			"Terinspirasi dari gameplay klasik seperti Suikoden.",
		],
		image: "/projects/25D-rpg-game.jpg",
		image2: "/projects/rpg-mockup.png",
		color1: "#b7e0ad",
		color2: "#1f8a04",
		link: "https://github.com/Amd-Muje/2.5D-game",
	},
];
