"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Leaf, ShieldCheck, SlidersHorizontal } from "lucide-react";

import { Hind } from "next/font/google";

const mainFont = Hind({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
});


const heroImages = [
  "/images/3.jpg",
  "/images/15.jpg",
  "/images/5.jpg",
];

export default function AproposPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-10 pb-16 bg-white text-gray-800">

      {/* ===== HERO ANIMÉ (MODIFIÉ SEULEMENT ICI) ===== */}
      <section className="relative h-80 w-full rounded-3xl overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="À propos Tavaratra Tour"
              fill
              className={`object-cover transition-transform duration-6000 ${
                index === current ? "scale-105" : "scale-100"
              }`}
              priority={index === 0}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <div className={mainFont.className}>
            <h1 className="text-4xl font-extrabold mb-3">
              À propos de{" "}
            <span className="text-[#F0C300]">Tavaratra Tour</span>
              </h1>
            <p className="max-w-2xl text-lg">
              Votre agence locale experte des excursions et voyages
              au nord de Madagascar.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MISSION (CONSERVÉ) ===== */}
      
      <section className="max-w-4xl mx-auto mt-12 px-6">
  <div className="bg-white rounded-2xl p-6 md:p-8 text-center space-y-4
                  border border-gray-300 shadow-md">
    <h2 className="text-2xl font-bold">
      Notre Mission
    </h2>

    <p className="text-gray-700 leading-relaxed">
      Chez Tavaratra Tour, nous mettons notre passion et notre expertise
      à votre service pour vous faire découvrir les merveilles naturelles,
      culturelles et historiques du nord de Madagascar.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Chaque voyage est conçu pour offrir une expérience authentique,
      personnalisée et inoubliable.
    </p>
  </div>
</section>


      {/* ===== VALEURS (CONSERVÉ) ===== */}
      {/* ===== VALEURS (AVEC ICÔNES) ===== */}
<section className="mt-1 py-12 px-6">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        title: "Authenticité",
        desc: "Des expériences profondément enracinées dans la culture malgache.",
        icon: Leaf,
      },
      {
        title: "Sécurité",
        desc: "Des excursions organisées avec professionnalisme et rigueur.",
        icon: ShieldCheck,
      },
      {
        title: "Personnalisation",
        desc: "Des voyages sur mesure selon vos envies et votre budget.",
        icon: SlidersHorizontal,
      },
    ].map((item, index) => {
      const Icon = item.icon;
      return (
        <div
          key={index}
          className="bg-white rounded-2xl p-5 flex gap-4 items-start
                     border border-gray-300 shadow-sm hover:shadow-md
                     transition cursor-pointer"
        >
          {/* ICON */}
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <Icon size={22} />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</section>



      {/* ===== CHIFFRES (CONSERVÉ) ===== */}
      <section className="mt-1 px-6">
  <div className="max-w-4xl mx-auto bg-white rounded-2xl
                  border border-gray-300 shadow-md
                  p-6 md:p-8 text-center">

    <h2 className="text-2xl font-bold mb-6">
      En quelques chiffres
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {[
        { value: "200+", label: "Excursions organisées" },
        { value: "5+", label: "Années d'expérience" },
        { value: "100%", label: "Clients satisfaits" },
      ].map((item, index) => (
        <div key={index} className="space-y-2">
          <p className="text-4xl font-extrabold text-[#F0C300]">
            {item.value}
          </p>
          <p className="text-gray-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>

  </div>
      </section>


      {/* ===== ÉQUIPE (CONSERVÉ) ===== */}
      <section className="mt-14 px-6">
  <div className="max-w-6xl mx-auto bg-white
                  border border-gray-300 shadow-md
                  rounded-2xl p-6 md:p-8">

    <h2 className="text-2xl font-bold text-center mb-8">
      Notre équipe
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          name: "Florent",
          role: "Fondateur & Guide",
          img: "/images/33.jpg",
        },
        {
          name: "Florent",
          role: "Responsable Excursions",
          img: "/images/38.jpg",
        },
        {
          name: "Sylvia",
          role: "Service Client",
          img: "/images/esme.jpg",
        },
      ].map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-xl
                     border border-gray-200
                     shadow-lg overflow-hidden
                     text-center
                     hover:shadow-xl transition"
        >
          <div className="relative h-48">
            <Image
              src={member.img}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-4">
            <h3 className="font-bold text-lg">
              {member.name}
            </h3>
            <p className="text-gray-600">
              {member.role}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
      </section>


      {/* ===== CTA (CONSERVÉ) ===== */}
      <section className="mt-16 px-6">
  <div className="max-w-5xl mx-auto bg-white
                  border border-gray-300 shadow-md
                  rounded-2xl p-8 text-center">

    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Prêt à vivre une expérience inoubliable ?
    </h2>

    <p className="text-gray-700 max-w-3xl mx-auto mb-8">
      Explorez les plus beaux sites du nord de Madagascar avec une agence locale
      passionnée. Que ce soit pour une excursion d’une journée ou un voyage sur
      mesure, nous vous accompagnons à chaque étape.
    </p>

    {/* === ACTIONS === */}
    <div className="grid grid-cols-1  md:grid-cols-2 gap-6">

      {/* Voir excursions */}
      <a
        href="/Excursions"
        className="group bg-linear-to-br from-[#F6D7B8] via-[#F3EFEA] to-[#DCEBFF]
                   border border-gray-200 rounded-xl p-2
                   shadow-md hover:shadow-xl transition text-left"
      >
        <div className="flex items-center justify-center gap-4 ">
          <span className="text-2xl">🗺️</span>
          <h3 className="text-xl font-semibold  text-black">
            Voir nos excursions
          </h3>
        </div>
      </a>

      {/* Contact WhatsApp */}
      <a
        href="https://wa.me/261328422916"
        target="_blank"
        className=" bg-[#25D366]
                   text-white rounded-xl p-2
                   shadow-md hover:shadow-xl transition text-left"
      >
        <div className="flex items-center justify-center gap-4">
          <span className="text-2xl">💬</span>
          <h3 className="text-xl font-semibold">
            Contactez-nous
          </h3>
        </div>
      </a>

    </div>
  </div>
</section>


    </main>
  );
}
