"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Hind } from "next/font/google";

const mainFont = Hind({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
});

const excursions = [
  {
    title: "Mer d’Émeraude",
    images: [
      "/images/emerald3.jpg",
      "/images/emerald5.jpg",
    
    ],
    shortDesc:
      "Explorez les eaux turquoise cristallines juste au nord de Diego‑Suarez.",
    fullDesc:
      "Cette excursion vous emmène sur la lagune de la Mer d’Émeraude, idéale pour nager, faire du snorkeling et observer les coraux dans un cadre spectaculaire. Vous naviguez depuis Ramena ou Cap d’Ambre, accompagné d’un guide local expérimenté.",
    maxPeople: 5,
    price: 80,
  },
  {
    title: "Tsingy rouge",
    images: ["/images/tsingy1.jpg", "/images/tsingy2.jpg", "/images/tsingy1.jpg"],
    shortDesc:
      "Découvrez les formations rocheuses rouges uniques sculptées par le temps.",
    fullDesc:
      "Le Red Tsingy est une merveille géologique de Madagascar, résultat de l’érosion continue des roches sédimentaires. L’excursion inclut un guide local qui vous montre les passages secrets et panoramas étonnants.",
    maxPeople: 5,
    price: 85,
  },
  {
    title: "Nosy Hara",
    images: ["/images/nosyhara1.jpg", "/images/nosyhara2.jpg", "/images/nosyhara3.jpg"],
    shortDesc:
      "Nosy Hara, joyau du nord de Madagascar, offre des eaux turquoise, des falaises karstiques et une biodiversité marine unique.",
    fullDesc:
      "Les falaises et îlots de l’archipel invitent également à l’exploration et à la randonnée, offrant des panoramas à couper le souffle. Nosy Hara reste un lieu préservé, loin de l’agitation, idéal pour les amoureux de la nature, les photographes et tous ceux qui cherchent une expérience authentique et inoubliable à Madagascar.",
    maxPeople: 7,
    price: 60,
  },
  {
    title: "Montagne d'Ambre",
    images: ["/images/brook1.jpg", "/images/cameleon1.jpg", "/images/mda.jpg"],
    shortDesc:
      "Partez en randonnée dans un parc national riche en cascades, faune et flore.",
    fullDesc:
      "La Montagne d’Ambre est un parc verdoyant à l’intérieur des terres près de Diego‑Suarez. Cette excursion vous fait traverser des forêts tropicales, des cascades naturelles, et des points de vue exceptionnels.",
    maxPeople: 6,
    price: 70,
  },
  {
    title: "Trois baies",
    images: ["/images/baie-des-sakalava2.jpg", "/images/pigeon1.jpg", "/images/pigeon5.jpg"],
    shortDesc:
      "Découvrir les baies des Dunes, baies des Pigeons et Sakalava. ",
    fullDesc:
      "Chaque baie a son charme : idéale pour la baignade, la randonnée ou simplement admirer le panorama. C’est un lieu parfait pour les amateurs de nature, de photos et de moments de détente loin de l’agitation urbaine. Les couchers de soleil y sont particulièrement magnifiques, offrant un décor féerique sur l’océan.",
    maxPeople: 5,
    price: 70,
  },
];

export default function ExcursionsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState<number[]>(excursions.map(() => 0));

  const whatsappNumber = "261328422916";

  // Auto slider pour chaque excursion
  useEffect(() => {
    const intervals = excursions.map((ex, idx) =>
      setInterval(() => {
        setCurrentImage((prev) => {
          const newArr = [...prev];
          newArr[idx] = (newArr[idx] + 1) % ex.images.length;
          return newArr;
        });
      }, 4000 + idx * 800) // décalage pour l'effet "stagger"
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <main className="pt-12 pb-16 bg-white text-gray-800">

      {/* HERO */}
      <section className="relative h-75 rounded-2xl w-full overflow-hidden mb-12">
        <Image
          src="/images/sakatia1.jpg"
          alt="Excursions Diego‑Suarez"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6 py-20">
          <div className={mainFont.className}>
              <h1 className="text-4xl font-extrabold mb-2">
                  Excursions à <span className="text-[#F0C300]">Antsiranana</span>
              </h1>
              <p className="text-lg max-w-2xl mx-auto">
                  Découvrez les plus belles excursions naturelles et culturelles du nord de Madagascar.
              </p>
          </div>
          
        </div>
      </section>

      {/* LISTE EXCURSIONS */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12 px-4">
        {excursions.map((ex, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-500 flex flex-col"
          >
            {/* IMAGE AUTOMATIQUE */}
            <div
              className="relative w-full h-64 sm:h-72 md:h-80 cursor-pointer overflow-hidden"
              onClick={() => setLightboxImg(ex.images[currentImage[idx]])}
            >
              <Image
                src={ex.images[currentImage[idx]]}
                alt={ex.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* CONTENU */}
            <div className="p-5 flex flex-col gap-3">
              <div className="space-y-2">
                <h2 className="text-xl font-bold">{ex.title}</h2>
                <p className="text-gray-700">{ex.shortDesc}</p>

                {expanded === idx && (
                  <p className="text-gray-700">{ex.fullDesc}</p>
                )}
                <button
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                  className="text-[#F0C300] font-semibold hover:underline"
                >
                  {expanded === idx ? "Voir moins" : "Voir plus"}
                </button>
              </div>
              {/* PRIX + PERSONNES */}
              <div className="mt-4 flex justify-between gap-3">
                <div className="flex-1 text-center bg-yellow-100 text-yellow-800 font-semibold py-1 px-3 rounded-full">
                  {ex.price}$/personne
                </div>
                <div className="flex-1 text-center bg-emerald-100 text-emerald-800 font-semibold py-1 px-3 rounded-full">
                  1 à {ex.maxPeople} personnes
                </div>
              </div>

              {/* BOUTON RÉSERVER */}
              <Link
                 href={`/Reservation?Excursions=${encodeURIComponent(ex.title)}`}
                 className="mt-3 text-center bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold py-2 rounded-xl shadow-md transition self-center w-1/2 flex items-center justify-center gap-2"
                >
                 Réserver maintenant
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <Image
            src={lightboxImg}
            alt="Photo agrandie"
            width={1200}
            height={800}
            className="w-full max-w-4xl rounded-xl"
          />
        </div>
      )}
    </main>
  );
}
