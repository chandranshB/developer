import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const testimonials = [
  {
    quote: "shanDran's ability to translate complex requirements into elegant, functional designs is exceptional. A true professional.",
    author: "shanDran",
    role: "I love my work tbh",
  },
  {
    quote: "Working with shanDran was a game-changer for our project. The attention to detail and technical expertise is unmatched.",
    author: "ChandranshB",
    role: "the GOAT",
  },
  {
    quote: "Not only did shanDran deliver beyond expectations, but the collaborative process made the entire project enjoyable.",
    author: "Vipul Panwar",
    role: "Founder, SeetaNarayan Travels",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 px-5 md:px-8 bg-white dark:bg-background">
      <div className="max-w-[980px] mx-auto">
        <div className="text-center mb-20">
          <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">Testimonials</p>
          <h2 className="text-[40px] md:text-[48px] leading-[1.08] tracking-tight mb-4">
            What people say
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-[28px] glass-card hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-[17px] leading-[1.5] mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-[15px] mb-0.5">{testimonial.author}</p>
                <p className="text-[13px] text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative p-8 rounded-[28px] glass-card"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-[17px] leading-[1.5] mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <p className="text-[15px] mb-0.5">{testimonials[currentIndex].author}</p>
                  <p className="text-[13px] text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full glass-card hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full glass-card hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}