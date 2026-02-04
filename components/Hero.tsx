"use client";
import { useEffect, useRef, useState } from "react";
import ImageSlider from "./ImageSlider";
import { Monitor, Home, Truck } from "lucide-react";



import { Hind } from "next/font/google";

const mainFont = Hind({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
});


const photos = [
  {
    src: "/images/emerald3.jpg", // <-- première image
    title: "Mer d'Emeraude",
    description: "Explorez les eaux turquoise cristallines juste au nord de Diego‑Suarez.",
  },
  {
    src: "/images/tsingy1.jpg", // deuxième image
    title: "Tsingy Rouge",
    description: "Explorez les formations rocheuses uniques du parc national.",
  },
  
  {
    src: "/images/nosyhara3.jpg", // troisième image
    title: "Nosy Hara",
    description: "Nosy Hara, joyau du nord de Madagascar, offre des eaux turquoise, des falaises karstiques et une biodiversité marine unique.",
  },
  {
    src: "/images/mda.jpg", // troisième image
    title: "Montagne d'Ambre",
    description: "Partez en randonnée dans un parc national riche en cascades, faune et flore.",
  },
  {
    src: "/images/pigeon4.jpg", // troisième image
    title: "Trois baies",
    description: "Découvrir les baies des Dunes, baies des Pigeons et Sakalava.",
  },
];

type Service = {
  title: string;
  description: string;
};



export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };



  const services: Service[] = [
    {
      title: "Circuits Sur Mesure",
      description:
        "Créez votre voyage unique selon vos envies et votre rythme.",
    
    },
    {
      title: "Hébergements Sélectionnés",
      description:
        "Des logements confortables et authentiques choisis avec soin.",
      
    },
    {
      title: "Transport Privé",
      description:
        "Véhicules climatisés avec chauffeur pour un voyage en toute sérénité.",
      
    },
    
  ];
  




  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(
    new Array(services.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            // animation avec delay pour stagger
            setTimeout(() => {
              setVisible((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 500); // 200ms de décalage entre chaque
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // déclenche quand 20% de la carte est visible
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);











  return (
    <>
      {/* 1ERE SECTION */}
      

      <section
  className="relative rounded-3xl h-125 md:min-h-screen flex items-start pt-20 overflow-hidden"
>
  {/* Slider arrière-plan */}
  <ImageSlider
    images={[
      
      "/images/nosyhara2.jpg",
      "/images/sakatia2.webp",
      "/images/emerald5.jpg",
    ]}
  />

  {/* Overlay sombre (optionnel) */}
  <div className="absolute inset-0  bg-black/20  z-5"></div>

  {/* Contenu du Hero */}
  <div className="relative z-10 px-4 md:px-16 max-w-2xl pt-8 md:pt-32 text-white">
  <div className={mainFont.className}>
    <h1 className="text-4xl md:text-6xl font-semibold tracking-wide leading-tight">
    Découvrez <span className="text-[#F0C300]">ANTSIRANANA</span>
    </h1>

    <p className="mt-5 text-white text-base md:text-lg leading-loose">
    Partez à la découverte d’Antsiranana, une terre d’exception où la nature règne en maître.
    Entre forêts luxuriantes, baies spectaculaires et plages sauvages, la région abrite
    une faune et une flore uniques, riches en espèces endémiques de Madagascar.
    </p>
  </div>


    <a href="/Contact">
      <button className="mt-8 cursor-pointer bg-[#F0C300] text-black font-medium px-6 py-3 rounded-full hover:bg-[#72ca5c] hover:text-white-900 transition">
        Planifier mon voyage →
      </button>
    </a>
  </div>
      </section>






      {/* GALERIE */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
        
       <h2 className="text-3xl font-medium mb-8 text-center">Excursions</h2>
          
          

          {/* Desktop: slider */}

          <div className="hidden md:block">
    <div className="relative  overflow-hidden ">
    {/* Conteneur des cartes */}
    <div
      className="flex transition-transform duration-500  ease-in-out"
      style={{
        transform: `translateX(-${currentIndex * 320}px)`,
      }}
    >
      {photos.map((photo, index) => (
        <div
          key={index}
          className="shrink-0 w-80 mx-4 bg-white rounded-2xl shadow-lg border border-gray-200"
        >
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-56 object-cover rounded-t-2xl"
          />

          <div className="p-4">
            <h3 className="text-lg font-semibold">{photo.title}</h3>
            <p className="mt-1 text-gray-600 text-sm">
              {photo.description}
            </p>
          </div>
        </div>
      ))}
      
      {/* Carte CTA - Voir toutes les excursions */}
      <a
  href="/Excursions"
  className="shrink-0 w-80 mx-4 rounded-2xl shadow-lg
             overflow-hidden relative group"
>
  {/* Image plein cadre */}
  <img
    src="/images/orangea2.jpg"
    alt="Voir toutes les excursions"
    className="w-full h-full object-cover transition-transform duration-500
               group-hover:scale-110"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition"></div>

  {/* Texte centré */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <div
      className="w-16 h-16 mb-4 rounded-full bg-emerald-600
                 flex items-center justify-center text-white text-3xl
                 group-hover:scale-110 transition"
    >
      →
    </div>

    <span className="text-white font-semibold text-lg tracking-wide">
      Voir toutes les excursions
    </span>
  </div>
      </a>



    </div>

    {/* Boutons desktop */}
    <button
      onClick={prevPhoto}
      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-4 hover:bg-gray-100 transition"
    >

      &#10094;
    </button>

    <button
      onClick={nextPhoto}
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-4 hover:bg-gray-100 transition"
    >

      &#10095;
    </button>
  </div>
          </div>




          {/* Mobile: scroll horizontal */}

          <div className="md:hidden flex space-x-4 overflow-x-auto snap-x snap-mandatory pb-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="shrink-0 w-72 snap-center rounded-xl shadow-lg bg-white"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                  <p className="text-gray-600 mt-1">{photo.description}</p>
                </div>
              </div>
            ))}

          <a
  href="/Excursions"
  className="shrink-0 w-72 snap-center rounded-xl shadow-lg
             overflow-hidden relative"
>
  <img
    src="/images/orangea2.jpg"
    alt="Voir toutes les excursions"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/45"></div>

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <div className="w-14 h-14 mb-3 rounded-full bg-emerald-600
                    flex items-center justify-center text-white text-2xl">
      →
    </div>

    <span className="text-white font-semibold">
      Voir toutes les excursions
    </span>
  </div>
          </a>

          </div>
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      {/* ================= SERVICES ================= */}
<section className="py-10 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-medium md:text-4xl text-center mb-10">
      Nos Services
    </h2>

    <div className="grid gap-10 md:grid-cols-3">
      {services.map((service, index) => {
        // Définir l'icône et la couleur en fonction du service
        let icon;
        let iconColor = "#F0A500"; // couleur par défaut
        let bgGradient = "from-[#F6D7B8] via-[#F3EFEA] to-[#DCEBFF]"; // par défaut

        if (service.title === "Circuits Sur Mesure") {
          icon = <Monitor size={28} />;
          iconColor = "#C53030";
          bgGradient = "from-[#F6D7B8] via-[#F3EFEA] to-[#DCEBFF]";
        } else if (service.title === "Hébergements Sélectionnés") {
          icon = <Home size={28} />;
          iconColor = "#C53030";
          bgGradient = "from-[#F6D7B8] via-[#F3EFEA] to-[#DCEBFF]";
        } else if (service.title === "Transport Privé") {
          icon = <Truck size={28} />;
          iconColor = "#C53030";
          bgGradient = "from-[#F6D7B8] via-[#F3EFEA] to-[#DCEBFF]";
        }

        return (
          <div
  key={index}
  data-index={index}
  ref={(el) => {
    cardsRef.current[index] = el;
  }}
  className={`rounded-3xl p-8 bg-linear-to-br ${bgGradient} backdrop-blur-xl shadow-xl border border-black/10 transition-transform duration-300 ${
    visible[index] ? "opacity-100 animate-fade-up" : "opacity-0"
  }`}
>

            <div
              className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
              style={{ color: iconColor }}
            >
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-black leading-relaxed">{service.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>


    </>
  );
}
