import React from "react";
import { GithubIcon, LinkedInIcon } from "./social-icons";
import { EnvelopeIcon } from "@heroicons/react/16/solid";

export default function Footer() {
	return (
		<footer className="bg-gray-900 border-t border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">About</h3>
						<p className="text-gray-400">
							Building Digital Solutions with a focus on clean UI, high
							performance, and seamless user experience.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Links</h3>
						<ul className="space-y-2">
							<li>
								<a
									className="text-gray-400 hover:text-white transition-colors"
									href="#projects"
								>
									Projects
								</a>
							</li>
							<li>
								<a
									className="text-gray-400 hover:text-white transition-colors"
									href="#about"
								>
									About
								</a>
							</li>
							<li>
								<a
									className="text-gray-400 hover:text-white transition-colors"
									href="#contact"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
						<ul className="space-y-2">
							<li>
								<a
									className="text-gray-400 hover:text-white transition-colors"
									href="#privacy"
								>
									Privacy
								</a>
							</li>
							<li>
								<a
									className="text-gray-400 hover:text-white transition-colors"
									href="#terms"
								>
									Terms
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
						<ul className="space-x-4 flex">
							<GithubIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors" />
							<LinkedInIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors" />
							<EnvelopeIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors" />
						</ul>
					</div>
					<div className="border-t border-gray-800 mt-12 pt-8 text-center">
						<p className="text-gray-400 text-sm">
							Ahmad Mujahid © {new Date().getFullYear()}. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
