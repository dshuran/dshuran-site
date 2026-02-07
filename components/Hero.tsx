"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 order-2 md:order-1"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Привет, я{" "}
            <span className="text-primary">Дима</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            Строю продукты, управляю командой и развиваю инженерные процессы.
            Превращаю технические решения в пользовательскую ценность.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-4 pt-4"
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .querySelector("#experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Мой опыт
              <ArrowDown className="size-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact}>
              Связаться
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <Image
            src="/photo.jpeg"
            alt="Дима"
            width={400}
            height={500}
            className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-2xl object-cover object-[center_20%] ring-1 ring-white/10"
            priority
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-muted-foreground"
        >
          <ArrowDown className="size-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
