import {
	BanknoteArrowDown,
	SunSnow,
	Wind,
	TreePine,
	Milestone,
} from "lucide-react";

import React from "react";
import CountUp from "react-countup";
import Milestones from "../Milestones";

function WhyWood() {
    const whyWoodItems = [
        {
            icon: <SunSnow className="why-wood-icon"/>,
            title: "Výborný tepelný izolant",
            desc: "Přirozeně reguluje teplotu a udržuje příjemné klima po celý rok."
        },
        {
            icon: <BanknoteArrowDown className="why-wood-icon"/>,
            title: "Úspora energie",
            desc: "Díky výborné izolaci spotřebujete méně energie."
        },
        {
            icon: <Wind className="why-wood-icon"/>,
            title: "Přirozená prodyšnost",
            desc: "Dýchá - vyrovnává vlhkost a pomáhá udržovat zdravé prostředí."
        },
        {
            icon: <TreePine className="why-wood-icon"/>,
            title: "Přirozená krása",
            desc: "Estetika, struktura i vůně dřeva vytvářejí jedinečnou atmosféru."
        },
    ]
	return (
		<section className=" py-20 px-4 sm:px-6 lg:px-20 bg-white bg-deev">
			<div className="max-w-7xl mx-auto h-full grid lg:grid-cols-2 gap-16 items-start">
				{/* LEFT PANEL */}
				<div className="flex items-center h-full">
					<Milestones />
				</div>
				{/* RIGHT PANEL */}
				<div className="flex h-full align-middle items-center">
					<div className="p-8 bg-white rounded-lg h-full mx-auto flex justify-around flex-col">
						<h2 className="text-3xl font-bold text-cyan-600 mb-8 text-center">
							Proč stavět ze dřeva?
						</h2>

						<ul className="why-wood-list">
							<li>
								<SunSnow className="why-wood-icon" />
								<div>
									<h3 className="why-wood-item-title">
										Výborný tepelný izolant
									</h3>
									<p className="why-wood-item-desc">
										Přirozeně reguluje teplotu a udržuje příjemné klima po celý
									</p>
								</div>
							</li>

							<li>
								<BanknoteArrowDown className="why-wood-icon" />
								<div>
									<h3 className="why-wood-item-title">
										Úspora energie
									</h3>
									<p className="why-wood-item-desc">
										Díky výborné izolaci spotřebujete méně energie.
									</p>
								</div>
							</li>

							<li>
								<Wind className="why-wood-icon" />
								<div>
									<h3 className="why-wood-item-title">
										Přirozená prodyšnost
									</h3>
									<p className="why-wood-item-desc">
										Dýchá - vyrovnává vlhkost a pomáhá udržovat zdravé
										prostředí.
									</p>
								</div>
							</li>

							<li>
								<TreePine className="why-wood-icon" />
								<div>
									<h3 className="why-wood-item-title">
										Přirozená krása
									</h3>
									<p className="why-wood-item-desc">
										Estetika, struktura i vůně dřeva vytvářejí jedinečnou
										atmosféru.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyWood;
