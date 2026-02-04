"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

import { Hind } from "next/font/google";

const mainFont = Hind({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
});

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const whatsappNumber = "261328422916"; // ton numéro WhatsApp

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    // Préparer le message WhatsApp
    const text = `Bonjour, je m'appelle ${name}___Email: ${email}___Téléphone: ${phone}___Message: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Petite pause pour montrer l'animation
    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
    }, 800); // 0,8s
  };

  return (
    <main className="pb-10 bg-linear-to-br from-orange-50 via-white to-blue-50">

      {/* HERO */}
      <section className="relative h-75 mt-12 rounded-3xl overflow-hidden border border-gray-300 shadow-md">
        <img
          src="/images/2.jpg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 text-white">
          <div className={mainFont.className}>
            <h1 className="text-3xl font-bold mb-2">Contactez-nous</h1>
            <p className="text-sm leading-relaxed max-w-sm">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section className="mx-4 mt-6 bg-white rounded-3xl p-5 border border-gray-300 shadow-md">
        <h2 className="text-lg font-semibold text-center mb-4">Envoyez-nous un message</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="font-serif">Nom</h3>
          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <h3 className="font-serif">Adresse email</h3>
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <h3 className="font-serif">Numéro de téléphone</h3>
          <input
            type="tel"
            placeholder="Votre téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <h3 className="font-serif">Message</h3>
          <textarea
            placeholder="Votre message..."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full cursor-pointer bg-emerald-600 hover:bg-emerald-700 transition text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md ${
              loading ? "opacity-70 scale-95" : "opacity-100"
            }`}
          >
            {loading ? (
              <>
                <span className="animate-pulse">Préparation...</span>
              </>
            ) : (
              <>
                Envoyer <Send size={18} />
              </>
            )}
          </button>
        </form>
      </section>

      {/* INFOS CONTACT */}
      <section className="mx-4 mt-8 space-y-4">
        <InfoCard icon={<Phone />} title="Téléphone" subtitle="+261 32 84 229 16" note="Lundi - Samedi : 8h - 18h" />
        <InfoCard icon={<Mail />} title="Email" subtitle="tavaratratour@gmail.com" note="Réponse rapide garantie" />
        <InfoCard icon={<MapPin />} title="Adresse" subtitle="Diégo Suarez" note="Venez nous rencontrer" />
        <InfoCard icon={<Clock />} title="Heures d'ouverture" subtitle="Lundi - Samedi : 8h - 18h" note="Dimanche : 14h - 18h" />
      </section>

      {/* BOUTON CONTACT FLOTTANT */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        className="fixed right-4 bottom-28 z-50 w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center shadow-xl"
      >
        <Phone className="text-white" />
      </a>
    </main>
  );
}

/* ===== CARTE INFO ===== */
function InfoCard({
  icon,
  title,
  subtitle,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  note: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 flex gap-4 cursor-pointer items-start border border-gray-300 shadow-sm">
      <div className="w-12 h-12 rounded-full text-white bg-emerald-600 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-700">{subtitle}</p>
        <p className="text-xs text-gray-500">{note}</p>
      </div>
    </div>
  );
}












