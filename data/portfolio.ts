import { IconType } from "react-icons";
import { FaReact, FaCss3, FaCcStripe } from "react-icons/fa";
import {
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiTailwindcss,
	SiUnity,
    
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
	color1: string;
	color2: string;
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
		image: "/projects/Gemini-clone.png",
		color1: "#da8cf1",
        color2: "#8bb1f2",
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
		image: "/projects/Streamix.png",
		color1: "#b44aff",
        color2: "#6100a6",
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
        image: "/projects/nexhop.png",
        color1: "#ffffff",
        color2: "$#fffff",
    },
	{
		id: 7,
		title: "2.5D Turn-Based Game",
		description:
			"Game strategi berbasis giliran dengan tampilan 2.5D dan karakter visual buatan sendiri.",
		tech: [
			{ name: "Unity", icon: SiUnity, color: "#000000" },
			{ name: "C#", icon: TbBrandCSharp, color: "#239120" },
		],
		image: "/projects/images.png",
		color1: "#ffffff",
        color2: "$#fffff",
	},
	{
		id: 5,
		title: "Connect 4 Game in React",
		description:
			"Game Connect 4 berbasis web dengan logika permainan menggunakan React dan tampilan interaktif.",
		tech: [
			{ name: "React", icon: FaReact, color: "#61DAFB" },
			{ name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
		],
		image: "/projects/images.png",
		color1: "#ffffff",
        color2: "$#fffff",
	},
	{
		id: 6,
		title: "Collaborative Website Project",
		description:
			"Website hasil kerja sama tim menggunakan Git untuk kolaborasi dan manajemen kode sumber.",
		tech: [
			{ name: "HTML", icon: SiHtml5, color: "#E34F26" },
			{ name: "CSS", icon: SiCss3, color: "#1572B6" },
			{ name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
		],
		image: "/projects/images.png",
		color1: "#ffffff",
        color2: "$#fffff",
	},
];
