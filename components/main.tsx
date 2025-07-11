"use client";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { portfolioList } from "@/data/portfolio";
import { IoMdLink } from "react-icons/io";

export default function Main() {
	const router = useRouter();
	const handleClick = (id: number) => {
		router.push(`/projects/${id}`);
	};

	return (
		<section className="py-32 relative " id="work">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="flex flex-col items-center mb-20"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
						My Work
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
				</motion.div>
				{/* Work Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
					{portfolioList.map((portfolio, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							whileHover={{ y: -10, transition: { duration: 0.2 } }}
							className="group relative h-[550px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer"
						>
							{/* tempat gambar */}
							<motion.div
								className="h-[250px] relative"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.2 }}
							>
								<Image
									src={portfolio.image}
									alt={portfolio.title}
									fill
									sizes="(max-width: 768px) 100vw, 33vw"
									className="object-cover"
									priority
								/>
							</motion.div>
							{/* tempat contentnya */}
							<motion.div
								className="p-6 h-[25px] bg-surface"
								transition={{ duration: 0.3 }}
							>
								<div className="flex justify-between items-start mb-4 group/title">
									<h3 className="text-2xl font-bold text-content">
										{portfolio.title}
									</h3>
									<ArrowUpRightIcon
										key={i}
										onClick={() => handleClick(portfolio.id)}
										className="w-6 h-6 text-content/50 group-hover/title:text-primary transition-colors duration-300"
									/>
								</div>
								<p className="text-content/80 mb-4">{portfolio.description}</p>
								<div className="flex flex-wrap gap-2">
									{portfolio.tech.map((tech, j) => (
										<span
											key={j}
											className="px-3 py-1 rounded-full bg-white/5 text-content/80
                                            text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5 group/tech"
										>
											<tech.icon
												style={{ color: tech.color }}
												className="w-4 h-4 transition-colors"
											/>
											<span className="group-hover/tech:text-content transition-colors">
												{tech.name}
											</span>
										</span>
									))}
								</div>
								<div className=" py-4 inline-flex">
									<span className="flex items-center gap-2 border rounded-full bg-surface border-white/10 hover:border-primary/30 transition-all group px-5 py-2 text-content group-hover:text-primary">
										{" "}
										<IoMdLink className="w-6 h-6" />
										<a href={portfolio.link}>Visit Project</a>
									</span>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
				{/* view more */}
				{/* <motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="flex justify-center mt-20 relative z-[5]"
				>
					<button className="relative px-8 py-3 rounded-full bg-surface border border-white/10 hover:border-primary/10 transition-all group">
						<span className="text-content transition-colors relative z-[1]">
							View All Project
						</span>
						<div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
					</button>
				</motion.div> */}
			</div>
		</section>
	);
}
