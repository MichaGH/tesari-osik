import Milestones from '@/components/homepage/Milestones';
import Services from '@/components/homepage/sections/Services';
import React from 'react'

function page() {
     return (
    <div className="bg-zinc-50 text-gray-800 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-cyan-700 mb-16 tracking-tight">
          Poctivé řemeslo s tradicí
        </h1>

        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-16">
          {/* Left column */}
          <div className="space-y-10 text-[17px] leading-relaxed">
            
            {/* History / Origin */}
            <div>
              <h2 className="text-xl font-semibold text-cyan-700 mb-2">
                Od srubu k firmě
              </h2>
              <p>
                Tesaři Osík vznikli v roce 1999 jako sdružení tří přátel a mistrů tesařiny.
                Už tehdy jsme věděli, že chceme dělat věci poctivě – od základního trámu až po poslední tašku.
              </p>
              <p className="mt-2 text-gray-600 italic">
                V roce 2010 jsme se proměnili ve společnost s ručením omezeným – ale srdce firmy zůstalo stejné.
              </p>
            </div>

            

            {/* Values */}
            <div>
              <h2 className="text-xl font-semibold text-cyan-700 mb-2">
                Proč my?
              </h2>
              <p>
                Každý projekt bereme osobně. S pokorou k materiálu, pečlivostí k detailu a
                zodpovědností vůči zákazníkovi. Pracujeme podle přísných technologických postupů —
                zvlášť u zateplení, konstrukcí a odvětrávání.
              </p>
              <blockquote className="border-l-4 border-cyan-600 pl-4 italic text-gray-600 mt-4">
                „Řemeslo, které drží pohromadě.“
              </blockquote>
            </div>

            {/* Region */}
            <div>
              <h2 className="text-xl font-semibold text-cyan-700 mb-2">
                Kde nás najdete
              </h2>
              <p>
                Působíme hlavně ve východních Čechách – v okolí Litomyšle, Osíku, Svitav.
                Ale naše práce sahá dál: do Brna, Prahy i po celé republice.
              </p>
            </div>

          </div>

          {/* Right column: Milestones */}
          <div className="">
            <Milestones />
            

          </div>
        </div>
      </div>

      <Services />
    </div>
  );
}

export default page