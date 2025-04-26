"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image instead of video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Luxury Estate"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full w-full flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 max-w-4xl tracking-tight"
        >
          Discover Extraordinary
          <br />
          <span className="text-primary">Luxury Properties</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 max-w-2xl font-light tracking-wide"
        >
          Experience the finest selection of premium real estate in the most
          prestigious locations worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/properties"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white transition-colors text-sm uppercase tracking-wider group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full"></span>
            <span className="relative">View Properties</span>
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-white hover:bg-white hover:text-secondary transition-colors text-sm uppercase tracking-wider"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-white text-xs uppercase tracking-widest mb-2">
          Scroll Down
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-9 border-2 border-white rounded-full flex justify-center pt-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
