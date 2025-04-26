"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Jonathan Harrington",
    role: "CEO, Harrington Enterprises",
    quote:
      "LuxuryEstate helped us find our dream home in record time. Their attention to detail and understanding of our needs was remarkable. The entire process was seamless and professional.",
    initial: "JH",
    bgColor: "bg-[#f8e5ca]",
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "Interior Designer",
    quote:
      "Working with LuxuryEstate was an incredible experience. Their portfolio of properties is unmatched, and their team's knowledge of the luxury market is extensive. I highly recommend their services.",
    initial: "SW",
    bgColor: "bg-[#e5cadc]",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    quote:
      "LuxuryEstate understood exactly what I was looking for in an investment property. Their market insights and personalized approach exceeded my expectations. I'll definitely work with them again.",
    initial: "MC",
    bgColor: "bg-[#cae5dc]",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = useCallback(() => {
    setCurrent((current + 1) % testimonials.length);
  }, [current]);

  const prev = useCallback(() => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  }, [current]);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(interval);
  }, [autoplay, next]);

  return (
    <section className="py-20 bg-background relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-medium mb-2 inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-4 tracking-tight">
            Client Experiences
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Hear what our clients have to say about their exceptional
            experiences with LuxuryEstate.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative py-12">
          {/* Quote mark decoration */}
          <div className="absolute -top-2 left-0 md:left-12 text-primary/10 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.01.24-.496.128-.777.237-.843.327-.128.182-.192.414-.192.693 0 .342.06.633.187.853.127.22.321.413.585.578.342.197.724.328 1.151.399.415.071.904.107 1.465.107h.386c.16 0 .365.025.61.075.245.05.383.116.416.193.33.076.050.195.050.358v1.723c0 .703.23.703.69.703.46 0 .69 0 .69-.703v-1.723c0-.945-.192-1.858-.575-2.747zm8.47 0c0-.88-.23-1.618-.69-2.217-.326-.42-.775-.695-1.345-.824-.57-.13-1.086-.136-1.545-.017-.18.032-.53.112-.99.24-.46.128-.74.237-.843.327-.128.182-.192.414-.192.693 0 .342.06.633.187.853.127.22.321.413.585.578.342.197.724.328 1.151.399.415.071.904.107 1.465.107h.386c.16 0 .365.025.61.075.245.05.383.116.416.193.33.076.05.195.05.358v1.723c0 .703.23.703.69.703.46 0 .69 0 .69-.703v-1.723c0-.945-.192-1.858-.575-2.747z"></path>
            </svg>
          </div>

          <div
            className="relative overflow-hidden rounded-lg shadow-xl border border-border"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="overflow-hidden bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-8 md:p-12"
                >
                  <div
                    className={`w-20 h-20 relative rounded-full overflow-hidden mb-6 border-2 border-primary flex items-center justify-center ${testimonials[current].bgColor} text-primary font-bold text-2xl`}
                  >
                    {testimonials[current].initial}
                  </div>

                  <blockquote className="text-center">
                    <p className="text-xl md:text-2xl italic mb-6 max-w-3xl mx-auto leading-relaxed font-heading">
                      "{testimonials[current].quote}"
                    </p>
                    <footer>
                      <p className="font-heading text-lg mb-1">
                        {testimonials[current].name}
                      </p>
                      <p className="text-muted text-sm">
                        {testimonials[current].role}
                      </p>
                    </footer>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex justify-center py-6 gap-3 bg-accent/30 border-t border-border">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? "bg-primary w-10" : "bg-muted"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full bg-white/80 border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-md backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              onClick={next}
              className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full bg-white/80 border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-md backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
