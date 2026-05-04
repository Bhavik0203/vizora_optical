import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <style>{`
        /* Mobile Styles for About Vision Mission Component */
        @media (max-width: 768px) {
          .mission-section {
            padding: 32px 20px !important;
            min-height: auto !important;
          }
          
          .mission-section > div {
            flex-direction: column !important;
            gap: 24px !important;
          }
          
          .mission-section .content-card {
            padding: 32px 24px !important;
            max-width: none !important;
            margin: 0 !important;
          }
          
          .mission-section .content-card h2 {
            font-size: 24px !important;
            line-height: 1.3 !important;
            margin-bottom: 16px !important;
          }
          
          .mission-section .content-card p {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
          
          .mission-section .content-card p:first-child {
            font-size: 10px !important;
            margin-bottom: 12px !important;
          }
          
          .mission-section .image-container {
            height: 280px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            order: 2 !important;
          }
          
          .vision-section {
            padding: 32px 20px !important;
            min-height: auto !important;
          }
          
          .vision-section > div {
            flex-direction: column !important;
            gap: 24px !important;
          }
          
          .vision-section .content-card {
            padding: 32px 24px !important;
            max-width: none !important;
            margin: 0 !important;
          }
          
          .vision-section .content-card h2 {
            font-size: 24px !important;
            line-height: 1.3 !important;
            margin-bottom: 16px !important;
          }
          
          .vision-section .content-card p {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
          
          .vision-section .content-card p:first-child {
            font-size: 10px !important;
            margin-bottom: 12px !important;
          }
          
          .vision-section .image-container {
            height: 280px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            order: 1 !important;
          }
        }
        
        @media (max-width: 480px) {
          .mission-section,
          .vision-section {
            padding: 24px 16px !important;
          }
          
          .mission-section .content-card,
          .vision-section .content-card {
            padding: 24px 20px !important;
          }
          
          .mission-section .content-card h2,
          .vision-section .content-card h2 {
            font-size: 20px !important;
          }
          
          .mission-section .image-container,
          .vision-section .image-container {
            height: 220px !important;
          }
        }
      `}</style>

      {/* Section 1 - Image Right, Content Left */}
      <section
        className="mission-section"
        style={{
          background: "#c3d6ee",
          padding: "40px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "360px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* White Content Card */}
          <div
            className="content-card"
            style={{
              background: "#ffffff",
              padding: "48px 44px",
              maxWidth: "560px",
              width: "100%",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              position: "relative",
              zIndex: 2,
              borderRadius: "4px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#6b8cae",
                textTransform: "uppercase",
                margin: "0 0 14px 0",
              }}
            >
              Our Mission
            </p>

            <h2
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "#0d1b2a",
                lineHeight: 1.2,
                margin: "0 0 20px 0",
                letterSpacing: "-0.5px",
              }}
            >
             Empowering Eye Care Through Precision
              <br />
             
            </h2>

            <p
              style={{
                fontSize: "14px",
                color: "#4a5568",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
                 At Vizora Optics, our mission is to empower optical retailers and distributors with superior,
                precision-engineered lens solutions that enhance customer satisfaction and drive business growth.
                We are committed to combining advanced technology with dependable service and competitive value.
              </p>
          </div>

          {/* Right Image */}
          <div
            className="image-container"
            style={{
              flex: 1,
              height: "540px",
              marginLeft: "-56px",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/images/image1.jpg"
              alt="Growth chart"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Image Left, Content Right */}
      <section
        className="vision-section"
        style={{
           background: "#c3d6ee",
          padding: "60px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "360px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Left Image */}
          <div
            className="image-container"
            style={{
              flex: 1,
              height: "440px",
              marginRight: "-56px",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/images/image2.jpg"
              alt="Solar leads illustration"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* White Content Card */}
          <div
            className="content-card"
            style={{
              background: "#ffffff",
              padding: "48px 44px",
              maxWidth: "560px",
              width: "100%",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              position: "relative",
              zIndex: 2,
              borderRadius: "4px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#6b8cae",
                textTransform: "uppercase",
                margin: "0 0 14px 0",
              }}
            >
             Our Vision
            </p>

            <h2
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "#0d1b2a",
                lineHeight: 1.2,
                margin: "0 0 20px 0",
                letterSpacing: "-0.5px",
              }}
            >
           A Trusted Name in Optical Excellence
              <br />
              {/* Real Results */}
            </h2>

            <p
              style={{
                fontSize: "14px",
                color: "#4a5568",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
             With a customer-first approach and a commitment to continuous improvement, Vizora Optics aims
                to become a globally recognized trusted name in the optical industry - known for precision,
                partnership, and unwavering dedication to quality.
              </p>
          </div>
        </div>
      </section>
    </>
  );
}