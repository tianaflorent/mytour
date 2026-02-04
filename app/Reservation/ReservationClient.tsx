"use client";

import { useState, useEffect } from "react";
import {
  Send,
  CheckCircle,
  Tag,
  Wallet,
  HelpCircle,
  MessageCircle,
  Mail,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Noto_Sans_KR } from "next/font/google";

const mainFont = Noto_Sans_KR({
  weight: ["400", "500", "700"],
});


export default function ReservationClient() {
  const searchParams = useSearchParams();
  const excursionParam = searchParams.get("excursion");

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    excursion: "",
    date: "",
    adultes: 1,
    enfants: 0,
    message: "",
  });

  useEffect(() => {
    if (excursionParam) {
      setFormData((prev) => ({ ...prev, excursion: excursionParam }));
    }
  }, [excursionParam]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? parseInt(value || "0", 10)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Réservation envoyée !");
  };

  return (
    <main className="pt-28 pb-16 bg-linear-to-br from-orange-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className={mainFont.className}>
            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
               Réserver votre excursion
            </h1>
        </div>
        

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg p-8 space-y-5"
        >
          {/* Nom */}
          <div>
            <label className="font-semibold text-gray-700">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom complet"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className="font-semibold text-gray-700">Téléphone</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Votre numéro"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {/* Excursion */}
          <div>
            <label className="font-semibold text-gray-700">Excursion</label>
            <select
              name="excursion"
              value={formData.excursion}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              required
            >
              <option value="">Choisir une excursion</option>
              <option value="Tsingy rouge">Tsingy rouge</option>
              <option value="Trois baies">Trois baies</option>
              <option value="Ramena">Ramena</option>
              <option value="Montagne d’Ambre">Montagne d’Ambre</option>
              <option value="Nosy Hara">Nosy Hara</option>
              <option value="Mer d’Émeraude">Mer d’Émeraude</option>
              <option value="Tour de ville">Tour de ville</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="font-semibold text-gray-700">
              Date souhaitée
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {/* Adultes / Enfants */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-gray-700">
                Nombre d'adultes
              </label>
              <input
                type="number"
                min={1}
                max={7}
                name="adultes"
                value={formData.adultes}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">
                Nombre d'enfants
              </label>
              <input
                type="number"
                min={0}
                max={7}
                name="enfants"
                value={formData.enfants}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Allergies, préférences, besoins spéciaux..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* Bouton WhatsApp */}
          <button
            type="button"
            onClick={() => {
              const message = `Bonjour, je souhaite réserver l'excursion *${formData.excursion}*.\n\nNom: ${formData.nom}\nEmail: ${formData.email}\nTéléphone: ${formData.telephone}\nDate: ${formData.date}\nAdultes: ${formData.adultes}\nEnfants: ${formData.enfants}\nDemandes spéciales: ${formData.message}`;
              const whatsappURL = `https://wa.me/261328422916?text=${encodeURIComponent(
                message
              )}`;
              window.open(whatsappURL, "_blank");
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold py-3 rounded-2xl shadow-md transition text-lg"
          >
            <Send size={20} /> Envoyer la réservation
          </button>
        </form>

        {/* INFOS */}
        <div className="mt-10 space-y-6">
          {/* INCLUS */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="flex items-center gap-3 text-xl font-bold mb-4 text-gray-800">
              <CheckCircle className="text-emerald-600" />
              Ce qui est inclus
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Repas selon l’excursion</li>
              <li>Eau potable</li>
              <li>Entrée des parcs</li>
              <li>Voiture (Starex ou 4x4)</li>
              <li>Guide local francophone & anglophone</li>
            </ul>
          </div>

          {/* TARIFS */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="flex items-center gap-3 text-xl font-bold mb-4 text-gray-800">
              <Tag className="text-yellow-500" />
              Tarifs
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>5 à 12 ans : Demi-tarif</li>
              <li>-5 ans : Gratuit</li>
              <li>+12 ans : Tarif adulte</li>
              <li>Groupes (4+ pers) : Tarifs spéciaux</li>
              <li>Solo : Sur demande</li>
            </ul>
          </div>

          {/* PAIEMENT */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="flex items-center gap-3 text-xl font-bold mb-4 text-gray-800">
              <Wallet className="text-emerald-600" />
              Moyens de paiement
            </h2>
            <div className="flex gap-4">
              <div className="bg-orange-100 px-4 py-3 rounded-xl font-semibold text-orange-800">
                📱 Orange Money
              </div>
              <div className="bg-gray-100 px-4 py-3 rounded-xl font-semibold text-gray-800">
                💵 Espèces
              </div>
            </div>
          </div>

          {/* AIDE */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="flex items-center gap-3 text-xl font-bold mb-3 text-gray-800">
              <HelpCircle className="text-blue-600" />
              Besoin d’aide ?
            </h2>
            <p className="text-gray-600 mb-4">
              Notre équipe est disponible pour répondre à toutes vos questions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/261328422916"
                target="_blank"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-4 py-2 rounded-xl shadow transition"
              >
                <MessageCircle /> WhatsApp
              </a>
              <a
                href="mailto:tavaratratour@gmail.com"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-xl shadow transition"
              >
                <Mail /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
