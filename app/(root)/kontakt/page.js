import Link from 'next/link';
import React from 'react'

function contactPage() {
  return (
		<section className="bg-white py-20 px-4 sm:px-6 lg:px-20 text-gray-800">
			<div className="max-w-7xl mx-auto space-y-20">

				{/* Row 1: Contacts + Form */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					
					{/* LEFT: Contacts */}
					<div className="space-y-8">
						<h2 className="text-3xl font-bold text-cyan-700">Rychlý kontakt</h2>

						<div>
							<p className="font-semibold">Král Jindřich</p>
							<p className="text-sm text-gray-600">Zpracování cenových nabídek</p>
							<p className="text-sm">📞 +420 736 472 694</p>
							<p className="text-sm">✉️ <Link href="mailto:jindrich.kral@tesari-osik.cz" className="text-cyan-700 hover:underline">jindrich.kral@tesari-osik.cz</Link></p>
						</div>

						<div>
							<p className="font-semibold">Staněk Martin</p>
							<p className="text-sm text-gray-600">Jednání se zákazníky</p>
							<p className="text-sm">📞 +420 603 874 860</p>
							<p className="text-sm">✉️ <Link href="mailto:martin.stanek@tesari-osik.cz" className="text-cyan-700 hover:underline">martin.stanek@tesari-osik.cz</Link></p>
						</div>

						<div>
							<p className="font-semibold">Stráník Josef</p>
							<p className="text-sm text-gray-600">Pořez kulatiny, prodej materiálu</p>
							<p className="text-sm">📞 +420 736 472 695</p>
							<p className="text-sm">✉️ <Link href="mailto:josef.stranik@tesari-osik.cz" className="text-cyan-700 hover:underline">josef.stranik@tesari-osik.cz</Link></p>
						</div>

						<div>
							<p className="font-semibold">Účetnictví</p>
							<p className="text-sm">✉️ <Link href="mailto:fakturace@tesari-osik.cz" className="text-cyan-700 hover:underline">fakturace@tesari-osik.cz</Link></p>
						</div>

						{/* Company Info */}
						<div className="pt-8 border-t">
							<h3 className="font-semibold text-lg">Firemní údaje</h3>
							<p className="text-sm">Osík 159, 569 67 Osík</p>
							<p className="text-sm">IČO: 28783557</p>
							<p className="text-sm">DIČ: CZ28783557</p>
						</div>
					</div>

					{/* RIGHT: Contact Form */}
					<div>
						<h2 className="text-3xl font-bold text-cyan-700 mb-6">Napište nám</h2>
						<form className="space-y-4">
							<div>
								<label className="block text-sm font-medium mb-1">Jméno</label>
								<input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-cyan-600 outline-none" />
							</div>
							<div>
								<label className="block text-sm font-medium mb-1">E-mail</label>
								<input type="email" className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-cyan-600 outline-none" />
							</div>
							<div>
								<label className="block text-sm font-medium mb-1">Zpráva</label>
								<textarea rows={5} className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-cyan-600 outline-none"></textarea>
							</div>
							<button type="submit" className="bg-cyan-700 text-white px-6 py-2 rounded-xl hover:bg-cyan-800 transition">Odeslat</button>
						</form>
					</div>
				</div>

				{/* Row 2: Map Placeholder */}
				<div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
  <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.691334819531!2d16.293043400000002!3d49.855293499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d932a754b6a7f%3A0x747fc589f4c8c7c6!2zVGVzYcWZaSBPc8Otaw!5e1!3m2!1sen!2ssk!4v1750631391265!5m2!1sen!2ssk"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
			</div>
		</section>
	);
}

export default contactPage