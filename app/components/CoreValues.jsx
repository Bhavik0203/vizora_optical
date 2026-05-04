// components/CoreValues.jsx

const values = [
  { icon: '◈', title: 'Precision', desc: 'Every lens we design and deliver meets the highest standards of optical clarity and accuracy. We do not compromise on quality.', image: "/images/Precision.png" },
  { icon: '◉', title: 'Innovation', desc: 'We continuously invest in next-generation lens technologies to stay ahead of the evolving needs of eye care professionals.', image: "/images/innovation.png" },
  { icon: '◎', title: 'Reliability', desc: 'Our partners trust us for consistent product quality, dependable logistics, and responsive ', image: "/images/Reliability.png" },
  { icon: '◆', title: 'Partnership', desc: 'We build lasting relationships by prioritizing our partners success through competitive pricing, support, and shared growth.', image: "/images/Partnership.png" },
  { icon: '▣', title: 'Excellence', desc: 'We hold ourselves to global quality benchmarks, working with carefully selected international manufacturing partners.', image: "/images/Excellence.png" },
  { icon: '◇', title: 'Integrity', desc: 'Transparent communication, honest pricing, and accountability define how we operate with every stakeholder.', image: "/images/Integrity.png" },
];

export default function CoreValues() {
  return (
    <section  className="" style={{ padding: "4rem 2rem", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#185FA5",
            background: "#E6F1FB",
            padding: "4px 14px",
            borderRadius: 999,
            display: "inline-block",
            marginBottom: 14,
          }}
        >
          Core Values
        </span>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#0f172a",
            margin: "0 0 14px",
          }}
        >
          What We Stand For
        </h2>
        <div
          style={{
            width: 32,
            height: 2,
            background: "#378ADD",
            margin: "0 auto",
            borderRadius: 2,
          }}
        />
      </div>

      {/* Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {values.map((v, i) => {
          const isFlipped = i % 2 !== 0;
          return (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                minHeight: 200,
                borderRadius: 12,
                overflow: "hidden",
                direction: isFlipped ? "rtl" : "ltr",
              }}
            >
              {/* Accent Panel */}
              <div
                style={{
                  backgroundImage: `url(${v.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "40px 24px",
                  position: "relative",
                  overflow: "hidden",
                  direction: "ltr",
                  minHeight: "200px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.filter = "brightness(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter = "brightness(1)";
                }}
              >
                {/* Light Black Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.4)",
                    zIndex: 1,
                  }}
                />
                {/* Ghost Number */}
                <span
                  style={{
                    position: "absolute",
                    fontSize: 96,
                    fontWeight: 700,
                    opacity: 0.12,
                    right: -8,
                    bottom: -18,
                    lineHeight: 1,
                    letterSpacing: -4,
                    color: "#fff",
                    userSelect: "none",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 22, fontWeight: 600, color: "#fff", zIndex: 2, position: "relative", textAlign: "center" }}>
                  {v.title}
                </span>
              </div>

              {/* Text Panel */}
              <div
                style={{
                  background: "#fff",
                  border: "0.5px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  padding: "28px 32px",
                  direction: "ltr",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f8fafc";
                  e.currentTarget.style.borderColor = "#378ADD";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#4a5568",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}