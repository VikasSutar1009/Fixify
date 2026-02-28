// import React, { useState } from "react";
// import {
//   Instagram,
//   Facebook,
//   Menu,
//   X,
//   MessageCircle,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import BookingModal from "../Booking/BookingModal";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openBooking, setOpenBooking] = useState(false);

//   return (
//     <>
//       <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[60%] max-w-7xl">
//         <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full flex items-center justify-between shadow-lg">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-1 cursor-pointer">
//             <img
//             src="/fixify-logo.png"
//             alt="Fixify Logo"
//             className="w-16 h-16 object-contain"
//             />

//             <div className="leading-tight">
//               <div className="text-xl font-black text-slate-900">
//                 FIXIFY
//               </div>
//               <div className="text-sm text-slate-500">
//                 At your service
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link
//               to="/"
//               className="text-sm font-medium text-slate-600 hover:text-blue-600 transition"
//             >
//               Services
//             </Link>

//             <Link
//               to="/reviews"
//               className="text-sm font-medium text-slate-600 hover:text-blue-600 transition"
//             >
//               Reviews
//             </Link>

//             <a
//               href="https://wa.me/919130804848?text=Hello%20I%20want%20to%20book%20a%20service"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
//             >
//               Book Service
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="hidden md:flex items-center gap-4 text-slate-400">
//             <a href="https://www.instagram.com/fixify_atyourservice?igsh=NTVpb21ocXpxZXBt" target="_blank" rel="noreferrer">
//               <Instagram size={18} className="hover:text-pink-500" />
//             </a>
//             <a href="https://www.facebook.com/share/1FnVSgXz7Q/" target="_blank" rel="noreferrer">
//               <Facebook size={18} className="hover:text-blue-600" />
//             </a>
            
//             <a href="https://wa.me/919130804848" target="_blank" rel="noreferrer">
//               <MessageCircle size={18} className="hover:text-green-500" />
//             </a>
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             className="md:hidden text-slate-700"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="mt-3 bg-white rounded-2xl shadow-lg py-4 px-6 md:hidden">
//             <Link
//               to="/"
//               className="block py-2 text-slate-700 font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Services
//             </Link>

//             <Link
//               to="/reviews"
//               className="block py-2 text-slate-700 font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               Reviews
//             </Link>

//             <button
//               onClick={() => {
//                 setOpenBooking(true);
//                 setIsOpen(false);
//               }}
//               className="w-full mt-3 bg-slate-900 text-white py-2 rounded-full font-semibold"
//             >
//               Book Service
//             </button>
//           </div>
//         )}
//       </nav>

//       <BookingModal
//         open={openBooking}
//         onClose={() => setOpenBooking(false)}
//       />
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import {
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[1100px]">
      <div className="bg-white/90 backdrop-blur-md px-10 py-4 rounded-full flex items-center justify-between shadow-lg">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="/fixify-logo.png"
            alt="Fixify Logo"
            className="w-14 h-14 object-contain"
          />

          <div className="leading-tight">
            <div className="text-xl font-black text-slate-900">
              FIXIFY
            </div>
            <div className="text-sm text-slate-500">
              At your service
            </div>
          </div>
        </Link>

        {/* Always Visible Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition"
          >
            Services
          </Link>

          <Link
            to="/reviews"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition"
          >
            Reviews
          </Link>

          <a
            href="https://wa.me/919130804848?text=Hello%20I%20want%20to%20book%20a%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Book Service
          </a>
        </div>

        {/* Social Icons Always Visible */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://www.instagram.com/fixify_atyourservice?igsh=NTVpb21ocXpxZXBt"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={18} className="hover:text-pink-500" />
          </a>

          <a
            href="https://www.facebook.com/share/1FnVSgXz7Q/"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook size={18} className="hover:text-blue-600" />
          </a>

          <a
            href="https://wa.me/919130804848"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} className="hover:text-green-500" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;