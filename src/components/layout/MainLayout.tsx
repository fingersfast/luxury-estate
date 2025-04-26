"use client";

import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import FloatingBooking from "../ui/FloatingBooking";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Elegant loading animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-background z-[9999] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <span className="text-3xl font-heading font-bold text-primary">
                LuxuryEstate
              </span>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="h-[2px] bg-primary"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen pt-24"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* Floating booking widget */}
      <FloatingBooking />
    </>
  );
}
