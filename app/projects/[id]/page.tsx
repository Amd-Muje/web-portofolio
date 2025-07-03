import Silk from "@/components/Silk/Silk";
import { portfolioList } from "@/data/portfolio";

import { notFound } from "next/navigation";

import React from "react";

type Props = {
	params: Promise<{
		id: string;
	}>;
};

export default async function ProjectPage({ params }: Props) {
    const { id } = await params;
	const projectId = parseInt(id, 10);
	const project = portfolioList.find((p) => p.id === projectId);
	if (!project) {
		notFound();
	}

	return (
		<main className="min-h-screen w-full">
			<Silk
				speed={6}
				scale={1.2}
				color={"#595959"}
				noiseIntensity={2.4}
				rotation={Math.random() * 6.28}
			>
				<div
					className="absolute inset-0 z-0"
					style={{
						background: `linear-gradient(to bottom right, ${project.color1}99, ${project.color2}99)`,
					}}
				/>
				<div className="container mx-auto px-4 sm:px-6 py-4 sm:py-12 h-screen">
					{/* Desktop Grid Layout */}
					<div className="hidden lg:grid grid-cols-6 grid-rows-6 gap-8 h-fit ">
						{/* Section 1 */}
						<div className="col-span-3 row-span-3 rounded-2xl transition-all duration-300 hover:scale-[1.02]">
							<div className="h-full w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 overflow-hidden">
								<img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl" />
							</div>
						</div>

						{/* Section 2 */}
						<div className="col-span-3 row-span-3 col-start-1 row-start-4 transition-all duration-300 hover:scale-[1.02]">
							<div className="h-full w-full bg-white/5 backdrop-blur-md shadow-xl border border-white/10 overflow-hidden rounded-2xl">
								<img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl" />
							</div>
						</div>

						{/* Section 3 */}
						<div className="col-span-3 row-span-6 col-start-4 row-start-1 rounded-2xl transition-all duration-300 hover:scale-[1.02]">
							<div className="h-full w-full bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10 flex flex-col justify-start">
								<h2 className="text-5xl font-bold text-white/90 mb-6">
									{project.title}
								</h2>
								<p className="text-white/70 text-3xl leading-relaxed">Content for section 3</p>
							</div>
						</div>
					</div>

					{/* Mobile/Tablet Flex Layout */}
					<div className="flex flex-col lg:hidden gap-6 sm:gap-8">
						{/* Hero Section */}
						<div className="flex-2 w-full aspect-square sm:aspect-video transition-all duration-300 hover:scale-[1.02]">
							<div className="h-full w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 overflow-hidden">
								<img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl" />
							</div>
						</div>

						{/* Content Section */}
						<div className="flex-1 w-full transition-all duration-300 hover:scale-[1.02]">
							<div className="w-full bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10">
								<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 mb-4 sm:mb-6">
									{project.title}
								</h2>
								<p className="text-white/70 text-lg sm:text-xl md:text-2xl leading-relaxed">
									Content for section 3
								</p>
							</div>
						</div>
					</div>
				</div>
			</Silk>
		</main>
	);
}