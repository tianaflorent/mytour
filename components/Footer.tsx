import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-300 
                       pb-12 
                       md:mt-auto"> {/* md:mt-auto pousse le footer en bas sur desktop */}
      {/* Image de fond */}
      <div
        className="relative  bg-cover bg-center"
        style={{
          backgroundImage:
          `url('/images/emerald2.jpg')`,
        }}
      >
        {/* Overlay sombre */}
        <div className="bg-black/60">
          <div className="px-6 py-8 max-w-6xl mx-auto text-center">

            {/* CONTACT */}
            <div className="mb-8">
              <h3 className="text-white text-xl font-semibold mb-4">
                Contact
              </h3>

              <ul className="space-y-2 text-sm text-gray-200">
                <li className="flex items-center justify-center gap-3">
                  <Phone size={18} />
                  <span>+261 32 84 229 16</span>
                </li>

                <li className="flex items-center justify-center gap-3">
                  <Mail size={18} />
                  <span>tavaratratour@gmail.com</span>
                </li>

                <li className="flex items-center justify-center gap-3">
                  <MapPin size={18} />
                  <span>Diégo Suarez</span>
                </li>
              </ul>
            </div>

            {/* RESEAUX SOCIAUX */}
            <div className="mb-4">
              <h3 className="text-white text-xl font-semibold mb-3">
                Suivez-nous
              </h3>

              <div className="flex justify-center items-center gap-6 text-2xl">
                <a href="https://www.facebook.com/tianaflorent.5" className="transition">
                  <FaFacebookF className="text-blue-600 hover:text-blue-400" />
                </a>
                <a href="https://www.instagram.com/flo_tour_guide/" className="transition">
                  <FaInstagram className="text-pink-500 hover:text-pink-400" />
                </a>
                <a href="https://wa.me/261328422916" className="transition">
                  <FaWhatsapp className="text-green-500 hover:text-green-400" />
                </a>
              </div>
            </div>

            {/* SEPARATEUR */}
            <div className="border-t border-gray-500 pt-4 text-sm text-gray-300">
              © 2026  TavaratraTour. Tous droits réservés.
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
