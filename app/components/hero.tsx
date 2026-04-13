"use client";
import React from "react";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

export function HeroSparkles() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#080e1a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Full-page sparkles layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <SparklesCore
          id="vizora-hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={90}
          particleColor="#00cfff"
          speed={1.2}
          className="w-full h-full"
        />
      </div>

      {/* Radial vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #080e1a 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 820,
        }}
      >
      

        {/* Headline */}
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#ffffff",
            fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
            lineHeight: 1.08,
            marginBottom: 24,
            fontWeight: 700,
          }}
        >
          Precision Lenses for
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #1e90ff 0%, #00cfff 50%, #7de8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Modern World
          </span>
        </h1>

        {/* Sparkle underline bar */}
        <div
          style={{
            width: "clamp(280px, 50vw, 500px)",
            height: 58,
            position: "relative",
            // marginBottom: 18,
          }}
        >
          {/* Gradient lines */}
          <div
            style={{
              position: "absolute",
              left: "10%",
              right: "10%",
              top: 0,
              height: 2,
              background:
                "linear-gradient(to right, transparent, #00cfff, transparent)",
              filter: "blur(1px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "10%",
              right: "10%",
              top: 0,
              height: 1,
              background:
                "linear-gradient(to right, transparent, #1e90ff, transparent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "30%",
              right: "30%",
              top: 0,
              height: 5,
              background:
                "linear-gradient(to right, transparent, rgba(0,207,255,0.5), transparent)",
              filter: "blur(3px)",
            }}
          />

          <SparklesCore
            id="vizora-hero-bar"
            background="transparent"
            minSize={0.3}
            maxSize={0.9}
            particleDensity={1200}
            particleColor="#00cfff"
            speed={2}
            className="w-full h-full"
          />

          {/* Mask sharp edges */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 50% 80% at 50% 0%, transparent 20%, #080e1a 100%)",
            }}
          />
        </div>

        {/* Subheading */}
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8,
            maxWidth: 760,
            marginBottom: 28,
          }}
        >
          At Vizora Optics, we combine advanced lens engineering with
          cutting-edge coating technologies to deliver premium ophthalmic
          solutions for discerning eye care professionals.
        </p>

       

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href="/products/lenses"
            id="hero-sparkles-cta-products"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 36px",
              background: "linear-gradient(135deg, #1565c0, #0097c7)",
              color: "#ffffff",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Explore Products
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          <Link
            href="/contact"
            id="hero-sparkles-cta-contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 36px",
              border: "1px solid rgba(0,180,255,0.45)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#00cfff";
              e.currentTarget.style.color = "#00cfff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,180,255,0.45)";
              e.currentTarget.style.color = "rgba(255,255,255,0.8)";
            }}
          >
            Partner With Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
     
    </section>
  );
}