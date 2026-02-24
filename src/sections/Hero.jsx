import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();   // ✅ FIX

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img
          src="/assets/services/hero-main.jpg"
          className="w-full h-full object-cover opacity-60 scale-110"
          alt="Fixify"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: y2 }} className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
          FIXIFY YOUR <br />
          <span className="text-blue-400">LIFESTYLE</span>
        </h1>

        <button
          onClick={() => navigate("/portfolio")}
          className="px-8 py-3 rounded-xl font-semibold text-white 
          bg-gradient-to-r from-blue-500 to-cyan-400
          hover:from-blue-600 hover:to-cyan-500 transition"
        >
          View Portfolio
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;