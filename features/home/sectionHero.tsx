"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section
      id="hero-home-page"
      className="
        relative w-full overflow-hidden isolate text-white
        min-h-[85dvh] flex items-center justify-center
        px-12
        bg-[linear-gradient(110deg,#6A4BE0_0%,#7B5CF1_36%,#41C7B5_100%)]
      "
    >
      {/* overlay de contraste (solo mobile) */}
      <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />

      {/* =========================
          BACKGROUND: curvas grandes + líneas (SVG)
          ========================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Curvas grandes con degradados (tipo mockup) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 720"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="bgBandA" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7B5CF1" stopOpacity="0.0" />
              <stop offset="28%" stopColor="#7B5CF1" stopOpacity="0.22" />
              <stop offset="62%" stopColor="#41C7B5" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#41C7B5" stopOpacity="0.0" />
            </linearGradient>

            <linearGradient id="bgBandB" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7B5CF1" stopOpacity="0.0" />
              <stop offset="35%" stopColor="#ffffff" stopOpacity="0.10" />
              <stop offset="75%" stopColor="#41C7B5" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#41C7B5" stopOpacity="0.0" />
            </linearGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 0.9 0"
              />
            </filter>
          </defs>

          {/* Banda grande (curva principal) */}
          <path
            d="M-40,120 C260,10 560,40 820,150 C1100,270 1240,260 1480,170 L1480,260 C1240,360 1100,360 820,280 C560,190 260,170 -40,260 Z"
            fill="url(#bgBandA)"
            filter="url(#softGlow)"
          />

          {/* Banda secundaria (debajo) */}
          <path
            d="M-60,280 C240,160 540,180 820,290 C1120,410 1240,420 1500,330 L1500,410 C1240,500 1120,520 820,420 C540,320 240,320 -60,420 Z"
            fill="url(#bgBandB)"
            opacity="0.9"
          />

          {/* Curva inferior suave (hacia blanco) */}
          <path
            d="M-40,610 C360,520 740,520 1020,600 C1240,660 1360,670 1500,640 L1500,720 L-40,720 Z"
            fill="#EFF6F8"
            opacity="0.95"
          />
        </svg>

        {/* Líneas/arcos finos (no puntos) */}
        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          viewBox="0 0 1440 720"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.0" />
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.18" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
            </linearGradient>

            <filter id="lineBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.6" />
            </filter>
          </defs>

          <path
            d="M-80,210 C240,60 620,80 920,220 C1220,360 1320,360 1520,260"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="2"
            filter="url(#lineBlur)"
          />
          <path
            d="M-120,360 C220,210 620,210 960,360 C1240,485 1330,500 1540,430"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1.6"
            opacity="0.8"
            filter="url(#lineBlur)"
          />
          <path
            d="M-140,520 C260,380 680,390 980,520 C1200,620 1320,640 1560,590"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1.4"
            opacity="0.7"
            filter="url(#lineBlur)"
          />
        </svg>

        {/* Glows puntuales controlados (no “burbuja blanca”) */}
        <div className="absolute -top-36 -left-28 h-96 w-96 rounded-full bg-[#8f73ff]/35 blur-3xl" />
        <div className="absolute -bottom-52 -right-28 h-136 w-136 rounded-full bg-[#67e2cf]/28 blur-3xl" />
      </div>

      {/* =========================
          CONTENT
          ========================= */}
      <div className="relative z-10 flex w-full min-h-full justify-between max-w-350">
        {/* Left */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="items-start flex flex-col gap-4 lg:gap-8 w-full mt-8 md:mt-0"
          >
            <span
              className="
                text-[10px] lg:text-xs uppercase text_teal font-medium
                border border-[#41C7B5] rounded-2xl px-2 py-0.5 tracking-wide
                bg-[linear-gradient(90deg,rgba(65,199,181,0.50),rgba(65,199,181,0.10))]
              "
            >
              Financiamiento responsable
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold tracking-wider">
              Ordena tu deuda
              <br />
              Recupera el{" "}
              <span className="text_teal underline underline-offset-8">control</span>
            </h2>

            {/* Mobile image (misma estética que desktop) */}
            <div className="flex md:hidden w-full mt-2">
              <HeroCurvedImage />
            </div>

            <p className="hidden md:flex text-lg lg:text-xl italic text-default-200">
              Unificamos tus compromisos
              <br /> en un solo plan claro y sostenible
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full text-center -mb-8 md:mb-0 z-150">
              <Link
                href="/simulator"
                className="
                  bg-[#a69af7] 
                  text-white px-6 py-2 w-full lg:w-auto
                  rounded-full font-bold hover:opacity-70 transition-opacity duration-300
                "
              >
                Evaluar mi caso
              </Link>

              <Link
                href={"/"}
                className="
                  bg-[#7B5CF1]/60 text-white inset-shadow-sm inset-shadow-[#7B5CF1]
                  px-4 py-1.5 rounded-full border border-white/70
                  hover:bg-white/15 transition-colors duration-300
                  w-full lg:w-auto
                "
              >
                ¿Como funciona?
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right (desktop) */}
        <div className="hidden md:flex w-full lg:w-1/2 items-center justify-center">
          <div className="relative w-full h-100 flex items-center justify-center">
            <HeroCurvedImage />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Imagen con “marco curvo editorial” usando SVG:
 * - fondo curvo (degradado)
 * - líneas/arcos finos encima
 * - recorte de la foto con clipPath (curva grande)
 * - sombra suave premium (no caja blanca)
 */
function HeroCurvedImage() {
  return (
    <div className="relative w-full max-w-160 aspect-16/10">
      {/* Sombra base */}
      <div className="absolute inset-0 hero-curve-shadow" />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* Marco exterior suave (degradado) */}
          <linearGradient id="frameGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7B5CF1" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#41C7B5" stopOpacity="0.35" />
          </linearGradient>

          {/* Fondo del “panel” detrás de la foto */}
          <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7B5CF1" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#41C7B5" stopOpacity="0.18" />
          </linearGradient>

          {/* Clip curvo tipo mockup (gran óvalo/curva horizontal) */}
          <clipPath id="heroClip">
            <path d="M150,110 C230,40 570,40 650,110 C720,170 720,330 650,390 C570,460 230,460 150,390 C80,330 80,170 150,110 Z" />
          </clipPath>

          {/* Glow del marco */}
          <filter id="frameGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.85 0"
            />
          </filter>
        </defs>

        {/* Líneas curvas sutiles sobre el panel */}
        <path
          d="M70,140 C220,40 580,50 740,165"
          fill="none"
          stroke="url(#arcLine)"
          strokeWidth="2"
          opacity="0.55"
        />
        <path
          d="M55,310 C240,205 560,220 760,330"
          fill="none"
          stroke="url(#arcLine)"
          strokeWidth="1.6"
          opacity="0.45"
        />

        {/* “Halo” interno detrás del recorte */}
        <path
          d="M150,110 C230,40 570,40 650,110 C720,170 720,330 650,390 C570,460 230,460 150,390 C80,330 80,170 150,110 Z"
          fill="rgba(255,255,255,0.10)"
        />

        {/* Imagen recortada con clipPath */}
        <foreignObject
          x="80"
          y="40"
          width="640"
          height="420"
          clipPath="url(#heroClip)"
        >
          <div className="relative w-full h-full">
            <Image
              src={"/assets/home/banner.avif"}
              alt="Banner Image"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </foreignObject>

      </svg>
    </div>
  );
}