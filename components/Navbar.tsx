
// "use client";

// import Link from "next/link";
// import { Home, MapPin, Image, Info, Phone, Sun, Moon } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const navItems = [
//   { name: "Accueil", href: "/", icon: Home },
//   { name: "Excursions", href: "/Excursions", icon: MapPin },
//   { name: "Galeries", href: "/Galeries", icon: Image },
//   { name: "À propos", href: "/Apropos", icon: Info },
//   { name: "Contact", href: "/Contact", icon: Phone },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <header
//       className=" bg-black  fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm transition-colors
        
//       "
//     >
//       <nav className="max-w-7xl bg-black mx-auto flex items-center justify-between px-4 py-3 md:py-4">
//         {/* Logo */}
//         <h1
//           className="text-2xl text-[#F0C300] font-extrabold flex-shrink-0 transition-colors" 
            
//         >
//           AVARATRA TOUR
//         </h1>

//         {/* Menu desktop only */}
//         <div className="hidden lg:flex text-white flex-1 justify-center items-center gap-4 lg:gap-6">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             const active = pathname === item.href;

//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`flex items-center gap-2 px-3 py-1 rounded-xl transition-all duration-300 ${
//                   active ? "" : "font-semibold"
//                 }`}
//               >
//                 <Icon
//                   size={20}
//                   className={`transition-transform duration-300 ${
//                     active ? "text-[#F0C300] scale-110" : ""
//                   }`}
//                 />
//                 <span className={active ? "text-[#F0C300] font-bold" : ""}>
//                   {item.name}
//                 </span>
//               </Link>
//             );
//           })}
//         </div>

//         {/* Dark/Light mode button - always visible */}
      
        
//       </nav>
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import { Home, MapPin, Image, Info, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Aref_Ruqaa } from "next/font/google";

const logoFont = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: "400",
});

const navItems = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Excursions", href: "/Excursions", icon: MapPin },
  { name: "Galeries", href: "/Galeries", icon: Image },
  { name: "À propos", href: "/Apropos", icon: Info },
  { name: "Contact", href: "/Contact", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm transition-colors">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-1">
        
        {/* Logo + texte */}
        <Link
          href="/"
          className="flex items-center gap-3 lg:gap-4 mx-auto lg:mx-0"
        >
          <img
            src="/images/logo1.png"
            alt="Tavaratra Tour Logo"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
          />
          <h1
            className={`${logoFont.className} text-2xl md:text-3xl lg:text-4xl text-[#F0C300] font-bold`}
          >
            Tavaratra Tour
          </h1>
        </Link>

        {/* Menu desktop */}
        <div className="hidden lg:flex text-white flex-1 justify-center items-center gap-4 lg:gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-1 rounded-xl transition-all duration-300 ${
                  active ? "" : "font-semibold"
                }`}
              >
                <Icon
                  size={20}
                  className={`transition-transform duration-300 ${
                    active ? "text-[#F0C300] scale-110" : ""
                  }`}
                />
                <span className={active ? "text-[#F0C300] font-bold" : ""}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

      </nav>
    </header>
  );
}












