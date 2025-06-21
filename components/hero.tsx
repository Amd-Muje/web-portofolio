"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="min-h-screen relative overflow-hidden bg-black">
			<div className="max-w-7xl mx-auto px-6 pt-32">
				<div className="flex flex-col lg:flex-row items-center gap-16">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, ease: "easeOut" }}
						className="relative group lg:w-1/2"
					>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4"
						>
							Software
							<br />
							<motion.span
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.8 }}
								className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent"
							>
								Engineer
							</motion.span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 1.2 }}
							className="text-xl text-content/80 mb-8"
						>
							Web designer & developer yang fokus pada clean UI, high
							performance, dan seamless user experience menggunakan React untuk
							web dan Flutter untuk mobile.
						</motion.p>

						<motion.button
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 1.2 }}
							whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							className="relative overflow-hidden px-8 py-4 rounded-full bg-surface border border-white/10 hover:border-primary/30 transition-all group"
						>
							<span className="text-content group-hover:text-primary transition-colors">
								Explore Work
							</span>
							<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity " />
						</motion.button>
					</motion.div>
					{/* Image section */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
						className="lg:w-1/2 relative"
					>
						<div className="relative w-full aspect-square group">
                        <motion.div
                        initial={{scale: 0.95 }}
                        animate={{scale: 1}}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                        className="absoulte inset-0 rounded-3xl
                                    bg-gradient-to-r from-primary/30
                                via-secondary/30 to-tertiary/30
                                 opacity-50"
                        />
							{/* Floating Animation */}
							<motion.div
								animate={{ y: [0, -20, 0] }}
								transition={{
									duration: 6,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="realtive w-full aspect-square 
                                rounded-3xl overflow-hidden
                                border border-white/10 bg-surface 
                                backdrop-blur-sm"
							>
								<Image
									src="/1.png"
									alt="avater"
									fill
									className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
								/>
                                <div
                                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                />
                                <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{delay: 0.6}}
                                className="absolute bottom-8 left-8"
                                >
                                    <div className="text-2xl font-bold text-content">
                                    Based in
                                    <motion.span
                                    animate={{backgroundPosition: ["0% 50%", "100% 50%"]}}
                                    transition={{ duration: 3, repeat: Infinity, repeatType: "mirror"  }}
                                    style={{
                                        backgroundSize:"200% 200%",
                                    }}
                                    className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                                    >
                                        Palu, Indonesia
                                    </motion.span>
                                    </div>
                                </motion.div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
