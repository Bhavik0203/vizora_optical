// components/VizoraStory.tsx

const bannerItems = [
  { label: "Founded", value: "Pittsburgh, PA" },
  { label: "Offices", value: "2 Locations" },
  { label: "Specialty", value: "Ophthalmic Lenses" },
  { label: "Focus", value: "Eye Care Professionals" },
  { label: "Values", value: "Precision · Innovation · Reliability" },
];

const facts = [
  { label: "Core Values", value: "Precision, Innovation, Reliability" },
  { label: "Headquarters", value: "Pittsburgh, PA 15288" },
  { label: "Communication Office", value: "Wood Ridge, NJ 07075" },
  { label: "Specialty", value: "Premium Ophthalmic Lenses & Coatings" },
  { label: "Focus", value: "Eye Care Professionals & Distributors" },
];

export default function VizoraStory() {
  return (
    <section className="section bg-white" style={{ marginTop: '10px' }}>
      <style>{`
        /* Mobile Styles for VizoraStory */
        @media (max-width: 768px) {
          .vizora-story-banner {
            padding: 16px 20px !important;
            gap: 16px !important;
          }
          
          .vizora-story-banner > div {
            gap: 16px !important;
          }
          
          .vizora-story-banner .divider {
            height: 24px !important;
          }
          
          .vizora-story-main-grid {
            grid-template-columns: 1fr !important;
          }
          
          .vizora-story-content {
            padding: 32px 20px !important;
          }
          
          .vizora-story-content h2 {
            font-size: 24px !important;
          }
          
          .vizora-story-content p {
            font-size: 0.9rem !important;
          }
          
          .vizora-story-fact {
            padding: 20px 20px !important;
            border-left: none !important;
            border-bottom: 0.5px solid #e2e8f0 !important;
          }
          
          .vizora-story-fact .ghost-number {
            font-size: 48px !important;
            right: 12px !important;
          }
          
          .vizora-story-fact .fact-label {
            font-size: 9px !important;
            margin-bottom: 6px !important;
          }
          
          .vizora-story-fact .fact-value {
            font-size: 13px !important;
            max-width: 200px !important;
          }
        }
        
        @media (max-width: 480px) {
          .vizora-story-banner {
            padding: 12px 16px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          
          .vizora-story-banner > div {
            gap: 12px !important;
            width: 100% !important;
          }
          
          .vizora-story-banner .divider {
            display: none !important;
          }
          
          .vizora-story-content {
            padding: 24px 16px !important;
          }
          
          .vizora-story-content h2 {
            font-size: 20px !important;
          }
          
          .vizora-story-content p {
            font-size: 0.85rem !important;
          }
          
          .vizora-story-fact {
            padding: 16px 16px !important;
          }
          
          .vizora-story-fact .ghost-number {
            font-size: 36px !important;
            right: 8px !important;
          }
          
          .vizora-story-fact .fact-label {
            font-size: 8px !important;
            margin-bottom: 4px !important;
          }
          
          .vizora-story-fact .fact-value {
            font-size: 12px !important;
            max-width: 180px !important;
          }
        }
      `}</style>
      <div className="container" style={{ padding: 0 }}>

        {/* Top Banner */}
        <div
          className="vizora-story-banner"
          style={{
            background: "#0C1F3F",
            padding: "20px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          {bannerItems.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#85B7EB",
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>
                  {item.value}
                </div>
              </div>
              {i < bannerItems.length - 1 && (
                <div
                  className="divider"
                  style={{
                    width: "0.5px",
                    height: 36,
                    background: "rgba(255,255,255,0.15)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="vizora-story-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

          {/* Left: Story */}
          <div
            className="vizora-story-content"
            style={{
              padding: "52px 44px 52px 36px",
              background: "#fff",
              border: "0.5px solid #e2e8f0",
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#185FA5",
                background: "#E6F1FB",
                padding: "3px 12px",
                borderRadius: 999,
                display: "inline-block",
                marginBottom: 20,
              }}
            >
              The Vizora Story
            </span>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "#0f172a",
                margin: "0 0 8px",
                lineHeight: 1.35,
              }}
            >
              Built on a Foundation
              <br />
              of Precision
            </h2>
            <div
              style={{
                width: 32,
                height: 2,
                background: "#378ADD",
                margin: "0 0 24px",
                borderRadius: 2,
              }}
            />
            <p
              style={{
                fontSize: "0.84rem",
                color: "#4a5568",
                lineHeight: 1.9,
                marginBottom: 14,
              }}
            >
              Vizora Optics was born from a deep understanding of what optical
              professionals truly need - premium quality products, dependable
              service, and a partner who shares their commitment to customer
              satisfaction.
            </p>
            <p
              style={{
                fontSize: "0.84rem",
                color: "#4a5568",
                lineHeight: 1.9,
                marginBottom: 14,
              }}
            >
              From our offices in Pittsburgh, PA and Wood Ridge, NJ, we have
              built a brand that stands for consistency, innovation, and
              integrity in every lens delivered.
            </p>
            <p
              style={{
                fontSize: "0.84rem",
                color: "#4a5568",
                lineHeight: 1.9,
              }}
            >
              Our story is one of careful growth - expanding our product
              portfolio, deepening manufacturing partnerships, and continuously
              raising the bar on what optical professionals can expect.
            </p>
          </div>

          {/* Right: Facts */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {facts.map((fact, i) => (
              <div
                key={i}
                className="vizora-story-fact"
                style={{
                  flex: 1,
                  padding: "28px 32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderBottom: i < facts.length - 1 ? "0.5px solid #e2e8f0" : "none",
                  borderLeft: "0.5px solid #e2e8f0",
                  position: "relative",
                  overflow: "hidden",
                  background: i % 2 === 0 ? "#fff" : "#F8FAFC",
                }}
              >
                {/* Ghost Number */}
                <span
                  className="ghost-number"
                  style={{
                    position: "absolute",
                    right: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: 72,
                    fontWeight: 700,
                    color: "#e2e8f0",
                    lineHeight: 1,
                    letterSpacing: -3,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className="fact-label"
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#378ADD",
                    marginBottom: 8,
                  }}
                >
                  {fact.label}
                </div>
                <div
                  className="fact-value"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0f172a",
                    lineHeight: 1.5,
                    maxWidth: 240,
                  }}
                >
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
