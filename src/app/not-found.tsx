"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-heading font-bold text-primary"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-heading mt-4 mb-6"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted max-w-md mb-8"
        >
          The page you're looking for doesn't exist or has been moved. Please
          check the URL or navigate back to our homepage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white transition-colors text-sm uppercase tracking-wider"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </MainLayout>
  );
}
