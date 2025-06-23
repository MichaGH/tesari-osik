"use client";
import React from "react";
import { motion } from "motion/react";

function ProcessTimeline() {
	const initialDelay = 0.1;
	const entryQueueDelay = 0.6;

	const entryOpacDuration = 2;

	const timelineSteps = [
		{
			title: "Seznámení s objektem a zaměření stavu",
			description:
				"Navštívíme stavbu a zhodnotíme její aktuální stav a potřeby.",
		},
		{
			title: "Projednání požadavků zákazníka",
			description:
				"Probereme vaše očekávání, materiály a možné varianty řešení.",
		},
		{
			title: "Zpracování cenové nabídky a návrh termínu realizace",
			description:
				"Připravíme cenovou kalkulaci včetně předběžného harmonogramu.",
		},
		{
			title: "Schválení nabídky (po upřesnění)",
			description:
				"Po schválení detailů uzavřeme dohodu a připravíme realizaci.",
		},
		{
			title: "Realizace stavby",
			description: "Realizujeme domluvené práce kvalitně a včas.",
		},
	];
	return (
		<section className="bg-white py-20 px-4 sm:px-6 lg:px-20 bg-deev">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-800">
						Jak probíhá spolupráce
					</h2>
					<p className="mt-4 text-gray-600 max-w-xl mx-auto">
						Pět jasně daných kroků od prvního kontaktu po realizaci.
					</p>
				</div>
			</div>
			<div className="grid lg:grid-cols-2 lg:grid-cols lg:grid-rows-1 grid-rows grid-rows-2 max-w-7xl mx-auto">
				{/* TIMELINE */}

				<div className="container  bg-white px-8 py-8 mx-auto">
					<div className="relative border-l border-gray-200">
						{timelineSteps.map((step, index) => (
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{
									opacity: {
										delay: initialDelay + index * entryQueueDelay,
										duration: entryOpacDuration,
									},
								}}
                                key={index}
							>
								<div className="mb-8 ml-4">
									<div className="absolute w-3 h-3 bg-cyan-600 rounded-full  -left-1.5 border border-white"></div>
									<h4 className="text-base font-semibold leading-none text-cyan-600">
										{index + 1}. krok
									</h4>
									<h3 className="text-xl font-semibold text-gray-900">
										{step.title}
									</h3>
									<p className="text-base font-normal text-gray-500">
										{step.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
				{/* Right side: CTA */}
				<div className=" m-16  flex flex-col justify-center items-center bg-cyan-50 rounded-xl shadow-md p-2 text-center">
					<h3 className="text-3xl font-bold text-cyan-700 mb-4">Máte zájem?</h3>
					<p className="text-gray-700 mb-8 max-w-md">
						Nečekejte a kontaktujte nás ještě dnes! Rádi s vámi probereme
						všechny detaily a připravíme individuální nabídku.
					</p>
					<button
						onClick={() => alert("Zavoláme vám brzy!")} // or replace with your real action
						className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
					>
						Kontaktujte nás
					</button>
				</div>
			</div>
		</section>
	);
}

export default ProcessTimeline;
