import Silk from "@/components/Silk/Silk";
import { portfolioList } from "@/data/portfolio";

import { notFound } from "next/navigation";

import React from "react";

type Props = {
	params: {
		id: string;
	};
};

export default function ProjectPage({ params }: Props) {
	const projectId = parseInt(params.id, 10);
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
				<div className="container mx-auto px-6 py-12 h-screen">
					<div className="grid grid-cols-6 grid-rows-6 gap-8 h-full">
						{/* Section 1 */}
						<div className="col-span-3 row-span-3 rounded-2xl transition-all duration-300 hover:scale-[1.02]">
							<div className="h-full w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/10">
								<img src={project.image} alt="" className="rounded-2xl" />
							</div>
						</div>

						{/* Section 2 */}
						<div className="col-span-3 row-span-3 col-start-1 row-start-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]">
							<div className="h-full w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/10">
								<img src={project.image} alt="" className="rounded-2xl" />
							</div>
						</div>

						{/* Section 3 */}
						<div className="col-span-3 row-span-6 col-start-4 row-start-1 rounded-2xl transition-all duration-300 hover:scale-[1.02]">
							<div className="h-full w-full bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10">
								<h2 className="text-2xl font-bold text-white/90 mb-4">
									{project.title}
								</h2>
								<p className="text-white/70">Content for section 3</p>
							</div>
						</div>
					</div>
				</div>
			</Silk>
		</main>
	);
}
