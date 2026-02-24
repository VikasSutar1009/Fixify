import { motion } from "framer-motion";
import { BrushReveal } from "../animations/Transitions";

const services = [
  {
    id: 1,
    title: "Cleaning",
    img: "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?q=80&w=870",
    accent: "bg-blue-400",
  },
  {
    id: 2,
    title: "Fabrication",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000",
    accent: "bg-zinc-600",
  },
  {
    id: 3,
    title: "Painting",
    img: "https://images.unsplash.com/photo-1688372199140-cade7ae820fe?q=80&w=1470",
    accent: "bg-orange-500",
  },
  {
    id: 4,
    title: "Electricians",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000",
    accent: "bg-yellow-400",
  },
  {
    id: 5,
    title: "Wall Art",
    img: "https://plus.unsplash.com/premium_photo-1706430433638-b9f3183a496e?q=80&w=870",
    accent: "bg-purple-500",
  },
  {
    id: 6,
    title: "Gardening",
    img: "https://images.unsplash.com/photo-1683316924890-6a8c5ab10d29?q=80&w=871",
    accent: "bg-green-500",
  },
  {
    id: 7,
    title: "Plumbing",
    img: "https://plus.unsplash.com/premium_photo-1726761625778-1d13ba956d13?q=80&w=887",
    accent: "bg-cyan-500",
  },
  {
    id: 8,
    title: "Renovation",
    img: "https://plus.unsplash.com/premium_photo-1675601690595-9b9ff8a6bb2a?q=80&w=870",
    accent: "bg-indigo-500",
  },
  {
    id: 9,
    title: "Windows",
    img: "https://images.unsplash.com/photo-1544347120-e7b25160378a?q=80&w=711",
    accent: "bg-sky-500",
  },
  {
    id: 10,
    title: "Interior",
    img: "https://plus.unsplash.com/premium_photo-1692726042396-ee4ac06818be?q=80&w=406",
    accent: "bg-pink-500",
  },
  {
    id: 11,
    title: "WaterProofing",
    img: "https://plus.unsplash.com/premium_photo-1681589433893-da00988dce64?q=80&w=1374",
    accent: "bg-emerald-500",
  },
  {
    id: 12,
    title: "Many More",
    bg: "bg-gradient-to-br from-yellow-400 to-white",
    noImage: true,
  },
];

const ServicesGrid = () => {
  return (
    <section>
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-4">
          Our Professional{" "}
          <span className="text-blue-600">Portfolio</span>
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore our recent work across multiple home maintenance
          services. We deliver precision, quality, and reliability
          in every project.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className={`group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-lg
              ${service.noImage ? service.bg : ""}
            `}
          >
            {/* Image */}
            {!service.noImage && (
              <motion.div {...BrushReveal} className="w-full h-full">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            )}

            {/* Overlay */}
            {!service.noImage && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            )}

            {/* Content */}
            <div
              className={`absolute bottom-8 left-8 right-8 ${
                service.noImage ? "text-slate-900" : "text-white"
              }`}
            >
              {!service.noImage && (
                <div className={`w-12 h-1 mb-4 ${service.accent}`} />
              )}

              <h3 className="text-3xl font-bold mb-2">
                {service.title}
              </h3>

              {service.noImage ? (
                <button className="mt-4 bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition">
                  View All Services
                </button>
              ) : (
                <button className="border-b border-white/60 pb-1 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  BOOK SERVICE
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;