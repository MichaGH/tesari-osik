import Image from 'next/image';
import React from 'react'

function Services() {
    const services = [
	{
		title: "Montované dřevostavby",
		desc: "Moderní a úsporné dřevostavby na klíč.",
		image: "/images/services/drevostavby.webp",
	},
	{
		title: "Roubenky",
		desc: "Tradiční stavby z masivního dřeva s duší.",
		image: "/images/services/roubenky.webp",
	},
	{
		title: "Stavba střech",
		desc: "Návrh a realizace kompletních střech.",
		image: "/images/services/stavbastrech.webp",
	},
	{
		title: "Zateplování střech",
		desc: "Zvýšení energetické účinnosti vašeho domu.",
		image: "/images/services/zateplenistrech.webp",
	},
	{
		title: "Pokrývačské práce",
		desc: "Kvalitní krytiny a odborné pokrývačské práce.",
		image: "/images/services/pokryvani.webp",
	},
	{
		title: "Pergoly",
		desc: "Zahradní stavby pro pohodlí a estetiku.",
		image: "/images/services/pergoly.webp",
	},
	{
		title: "Rekonstrukce historických staveb",
		desc: "Citlivá obnova historických objektů.",
		image: "/images/services/rekonstrukce.webp",
	},
	{
		title: "Pořez kulatiny",
		desc: "Zpracování dřeva dle vašich potřeb.",
		image: "/images/services/porez.webp",
	},
];
  return (
		<section id="zamereni" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-20">
			<div className="max-w-7xl mx-auto text-center mb-12">
				<h2 className="text-4xl font-extrabold text-center text-cyan-700 mb-16 tracking-tight">Naše Zaměření</h2>
				<p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
					Nabízíme široké spektrum tesařských a pokrývačských služeb s důrazem
					na kvalitu, tradici a detail.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
				{services.map((service, index) => (
	<div
		key={index}
		className="bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden group"
	>
		<div className="relative w-full h-[200px] overflow-hidden">
			<Image
				src={service.image}
				alt={service.title}
				fill
				className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
			/>
		</div>
		<div className="p-5">
			<h3 className="font-semibold text-gray-800 text-lg mb-2">
				{service.title}
			</h3>
			<p className="text-gray-600 text-sm">{service.desc}</p>
		</div>
	</div>
))}
			</div>
		</section>
	);
}

export default Services