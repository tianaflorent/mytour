"use client";

import Image from "next/image";
import { useState } from "react";

import { Hind } from "next/font/google";

import { Noto_Sans_JP } from "next/font/google";

const japon = Noto_Sans_JP({
  weight: ["400", "500", "700"],
});


const mainFont = Hind({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
});

const albums = [
  {
    title: " Tsingy rouge",
    photos: [
      "/images/28.jpg",
      "/images/29.jpg",
      "/images/tsingy1.jpg",
      "/images/tsingy2.jpg",
      "/images/8.jpg",

    ],
  },
  {
    title: "Montagne d'Ambre",
    photos: [
      "/images/38.jpg",
      "/images/36.jpg",
      "/images/37.jpg",
      "/images/16.jpg",
      "/images/17.jpg",
      "/images/18.jpg",
      "/images/19.jpg",
      "/images/20.jpg",
      "/images/21.jpg",
    ],
  },
  {
    title: "Tour de ville",
    photos: [
      "/images/9.jpg",
      "/images/10.jpg",
      "/images/11.jpg",
      "/images/12.jpg",
      "/images/15.jpg",
      "/images/14.jpg",
      "/images/23.jpg",
      "/images/24.jpg",
      "/images/25.jpg",
      "/images/26.jpg",
      "/images/27.jpg",
      "/images/7.jpg",
      "/images/30.jpg",
    ],
  },
  {
    title: "Ramena beach",
    photos: [
      "/images/ramena1.jpg",
      "/images/34.jpg",
      "/images/ramena3.jpg",
      "/images/6.jpg",
      "/images/ramena2.jpg",
      "/images/baobab.jpg",
      "/images/ramena4.jpg",
      "/images/22.jpg",
      "/images/nosylonjo.jpg",
      
    ],
  },
  {
    title: "Trois baies",
    photos: [
      "/images/13.jpg",
      "/images/31.jpg",
      "/images/orangea.jpg",
      "/images/baie-des-sakalava.jpg",
    ],
  },
];

const PREVIEW_COUNT = 3;

export default function GaleriesPage() {
  const [expandedAlbums, setExpandedAlbums] = useState<number[]>([]);
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  const toggleAlbum = (index: number) => {
    setExpandedAlbums((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <main className="pt-10 pb-20 px-6 max-w-7xl mx-auto relative">
      {/* Page title */}
      
      {/* <section className="relative h-[200px]   rounded-2xl  overflow-hidden mb-1">
        <div className="absolute" />
        <div className="text-center  text-black px-15 py-20">
          <h1 className="text-4xl font-extrabold mb-2">
            Notre<span className="text-[#F0C300]">GALERIE</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            
          </p>
        </div>
      </section> */}
      {/* Section HERO plein largeur */}
<section className="relative h-80 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
  {/* Image de fond */}
  <Image
    src="/images/4.jpg"
    alt="Galerie Madagascar"
    fill
    priority
    className="object-cover rounded-3xl "
  />

  {/* Overlay */}
  <div className="absolute inset-0 rounded-3xl bg-black/60" />

  {/* Contenu centré */}
  <div className="relative z-10 h-full flex items-center justify-center">
    <div className="text-center px-6">
      <div className={mainFont.className}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
            Notre <span className="text-[#F0C300]">GALERIE</span>
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Découvrez en images les paysages et trésors du nord de Madagascar
          </p>
      </div>
    </div>
  </div>
</section>






      {/* Albums */}
      <div className="space-y-10">
        {albums.map((album, albumIndex) => {
          const isExpanded = expandedAlbums.includes(albumIndex);
          const photosToShow = isExpanded
            ? album.photos
            : album.photos.slice(0, PREVIEW_COUNT);

          const extraCount = album.photos.length - PREVIEW_COUNT;

          return (
            <section key={albumIndex}>
              {/* Album header */}
              <div className="flex items-center  justify-center  mt-8 mb-4">
                  <div className={japon.className}>
                      <h2 className="text-2xl font-bold text-black  ">
                        {album.title}
                      </h2>
                  </div>
                
              </div>

              {/* Photos grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {photosToShow.map((photo, photoIndex) => (
                  <div
                    key={photoIndex}
                    className="group relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
                    onClick={() => setLightboxPhoto(photo)}
                  >
                    <Image
                      src={photo}
                      alt={album.title}
                      width={400}
                      height={300}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}

                {/* Bouton Voir plus avec 4ᵉ photo en fond */}
                {!isExpanded && extraCount > 0 && album.photos[PREVIEW_COUNT] && (
                  <div
                    className="relative h-48 w-full cursor-pointer overflow-hidden rounded-xl"
                    onClick={() => toggleAlbum(albumIndex)}
                  >
                    <Image
                      src={album.photos[PREVIEW_COUNT]}
                      alt="Voir plus"
                      width={400}
                      height={300}
                      className="h-48 w-full object-cover brightness-75"
                    />
                    {/* Overlay + texte */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        +{extraCount}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bouton Voir moins */}
              {isExpanded && album.photos.length > PREVIEW_COUNT && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => toggleAlbum(albumIndex)}
                    className="text-sm font-semibold text-[#F0C300] hover:underline"
                  >
                    Voir moins
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setLightboxPhoto(null)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <Image
              src={lightboxPhoto}
              alt="Photo agrandie"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setLightboxPhoto(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

















