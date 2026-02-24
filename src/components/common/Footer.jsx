import React from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-24">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            FIXIFY<span className="text-blue-600">.</span>
          </h2>

          <p className="text-slate-500 max-w-md mb-6">
            Premium home & business maintenance services. Fabrication,
            painting, electrical, and repair solutions delivered with care.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>Cleaning Services</li>
            <li>Metal Fabrication</li>
            <li>Painting</li>
            <li>Electrical Works</li>
            <li>Plumbing</li>
            <li>Renovation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>

          <div className="space-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <Mail size={16} />
              hello@fixify.com
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} />
              +91 91308 04848
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} />
              Kolhapur, Maharashtra
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-6 px-6 flex justify-between items-center text-xs text-slate-400">
        <span>
          © {new Date().getFullYear()} Fixify Services. All rights reserved.
        </span>

        <span>
          Powered By - 
          <a
            href="https://syntova.in"
            target="blank"
            className="text-blue-600 transition"
          >
            Syntova
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
