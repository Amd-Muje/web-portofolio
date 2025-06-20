"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Navbar() {
	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="fixed w-full z-50 bg-background/50 backdrop-blur-2xl transition-all duration-300 ease-out"
		>
			<div className="max-w-7xl mx-auto px-6 py-3">
				<div className="flex items-center justify-between">
					{/* <motion.div
						whileHover={{ scale: 1.05 }}
						className="flex items-center gap-2 group"
					> */}
						<div className="relative h-8 w-8 rounded-full overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
							<div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
								<span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
									MJ
								</span>
							</div>
						</div>
						<span className="font-semibold text-content/90 group-hover:text-primary transition-colors">
							Ahmad Mujahid
						</span>
					{/* </motion.div> */}
				</div>
			</div>
		</motion.nav>
	);
}
