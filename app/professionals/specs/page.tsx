'use client'
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const specSections = [
    {
        title: 'Progressive Lens Specifications',
        items: [
            { name: 'V SELECT HD', type: 'Standard Digital Progressive', add: '+0.75 to +3.50', index: '1.50 / 1.56 / 1.60 / 1.67 / 1.74', diameter: '70mm round', treatment: 'AR, AR PLUS, BLUE PLUS' },
            { name: 'V FLOW HD', type: 'Advanced Digital Progressive', add: '+0.75 to +3.50', index: '1.50 / 1.56 / 1.60 / 1.67 / 1.74', diameter: '70mm round', treatment: 'AR, AR PLUS, BLUE PLUS, VIZORA DRIVE' },
            { name: 'V ELITE HD', type: 'Premium Customized Progressive', add: '+0.75 to +3.50', index: '1.56 / 1.60 / 1.67 / 1.74', diameter: '70mm round', treatment: 'All coatings' },
            { name: 'V INFINITY 4K', type: 'Ultra-Premium Digital Progressive', add: '+0.75 to +3.50', index: '1.60 / 1.67 / 1.74', diameter: '70mm round', treatment: 'All coatings' },
        ],
    },
];

const coatingSpecs = [
    { name: 'AR Coating', icon: '◈', layers: 'Multi-layer AR stack', hardcoat: '✓ Basic', hydrophobic: '—', oleophobic: '—', blueFilter: '—', reflectance: '<1.5%', transmittance: '>99%' },
    { name: 'AR PLUS', icon: '◉', layers: 'Enhanced multi-layer + hydrophobic', hardcoat: '✓ Enhanced', hydrophobic: '✓', oleophobic: '✓', blueFilter: '—', reflectance: '<1.0%', transmittance: '>99.2%' },
    { name: 'BLUE PLUS', icon: '◎', layers: 'Blue-blocking + AR layers', hardcoat: '✓ Enhanced', hydrophobic: '✓', oleophobic: '✓', blueFilter: '✓', reflectance: '<1.2%', transmittance: '>99%' },
    { name: 'VIZORA DRIVE', icon: '◆', layers: 'Specialized low-light AR stack', hardcoat: '✓ Enhanced', hydrophobic: '✓', oleophobic: '✓', blueFilter: '—', reflectance: '<0.8%', transmittance: '>99.5%' },
];

export default function SpecsPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [activePanel, setActivePanel] = useState(0);

    const activeLens = specSections[0].items[activeTab];

    return (
        <div className="brand-page">
            <style jsx>{`
        .brand-page {
          font-family: var(--font-sans, 'Inter', sans-serif);
          background: #ffffff;
          color: #0a1628;
          min-height: 100vh;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .text-gold {
          background: linear-gradient(135deg, #1565c0, #0097c7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Hero Refined */
        .hero-sec {
          position: relative;
          min-height: 80vh;
          background: #0a1628;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0 5%;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          width: 100%;
          align-items: center;
          gap: 60px;
        }
        .hero-text { flex: 1; }
        .h-badge {
          display: inline-block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #0097c7;
          margin-bottom: 32px;
          font-weight: 700;
          border-bottom: 1px solid rgba(0,151,199,0.5);
          padding-bottom: 8px;
        }
        .h-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 60px;
          line-height: 1;
          margin-bottom: 32px;
          color: #ffffff;
        }
        .h-title span {
          display: block;
          background: linear-gradient(135deg, #ffffff 40%, rgba(255,255,255,0.2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .h-desc {
          color: rgba(255,255,255,0.6);
          font-size: 1.25rem;
          max-width: 500px;
          line-height: 1.6;
          font-weight: 300;
        }


        /* Interactive Tabs for Lenses */
        .tabs-section { padding: 50px 5%; background: #ffffff; }
        .sec-title {
          text-align: center;
          margin-bottom: 80px;
        }
        .sec-title h2 {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 3rem;
          color: #0a1628;
          margin-bottom: 16px;
        }
        .sec-title span {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #0097c7;
          font-weight: 700;
        }
        .tabs-container {
          display: flex;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .tabs-list {
          flex: 0 0 350px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .tab-btn {
          text-align: left;
          padding: 24px 32px;
          background: #ffffff;
          border: 1px solid #e8e8e4;
          cursor: pointer;
          transition: all 0.4s ease;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        }
        .tab-btn::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(135deg, #1565c0, #0097c7);
          transform: scaleY(0);
          transition: transform 0.4s ease;
          transform-origin: bottom;
        }
        .tab-btn:hover {
          border-color: #0097c7;
        }
        .tab-btn.active {
          background: #0a1628;
          color: #ffffff;
          border-color: #0a1628;
          box-shadow: 0 20px 40px rgba(10,22,40,0.15);
        }
        .tab-btn.active::before { transform: scaleY(1); }
        .tab-btn.active .t-sub { color: rgba(255,255,255,0.6); }
        .t-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 4px; display: block; }
        .t-sub { font-size: 0.8rem; color: #4a5568; text-transform: uppercase; letter-spacing: 0.1em; transition: color 0.4s; }

        .tab-content {
          flex: 1;
          background: #f5f5f0;
          padding: 60px;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }
        .tc-header { margin-bottom: 40px; border-bottom: 1px solid #d8d8d2; padding-bottom: 40px; }
        .tc-title { font-family: var(--font-serif, 'Playfair Display', serif); font-size: 3rem; color: #0a1628; margin-bottom: 16px; }
        .tc-add {
          display: inline-block;
          background: #0a1628;
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1.1rem;
        }
        .tc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .tc-item span:first-child { display: block; font-size: 0.75rem; text-transform: uppercase; color: #4a5568; letter-spacing: 0.1em; margin-bottom: 8px; font-weight: 600;}
        .tc-item span:last-child { font-size: 1.2rem; color: #0a1628; font-weight: 500; }

        /* Expanding Column Matrix (No Cards) */
        .coatings-matrix {
            background: #f5f5f0;
            padding: 50px 5%;
            color: #0a1628;
        }
        .cm-header {
            text-align: center;
            margin-bottom: 80px;
        }
        .cm-header span {
            display: block;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            color: #1565c0;
            margin-bottom: 16px;
            font-weight: 700;
        }
        .cm-header h2 {
            font-family: var(--font-serif, 'Playfair Display', serif);
            font-size: 3.5rem;
            color: #0a1628;
        }
        .cm-container {
            display: flex;
            height: 600px;
            max-width: 1400px;
            margin: 0 auto;
            border: 1px solid #d8d8d2;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
        .cm-panel {
            flex: 1;
            position: relative;
            border-right: 1px solid #e8e8e4;
            transition: all 0.7s cubic-bezier(0.25, 1, 0.5, 1);
            cursor: pointer;
            background: #ffffff;
            overflow: hidden;
        }
        .cm-panel:last-child {
            border-right: none;
        }
        .cm-panel.active {
            flex: 4;
            background: #0a1628;
            color: #ffffff;
            cursor: default;
        }
        
        /* Collapsed State */
        .cm-collapsed {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 40px;
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        .cm-panel.active .cm-collapsed {
            opacity: 0;
            pointer-events: none;
        }
        .cm-icon {
            font-size: 2rem;
            color: #0097c7;
            margin-bottom: 60px;
            transition: transform 0.4s ease;
        }
        .cm-panel:hover .cm-icon { transform: scale(1.2); }
        
        .cm-title-vert {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            font-family: var(--font-serif, 'Playfair Display', serif);
            font-size: 2rem;
            letter-spacing: 2px;
            color: #0a1628;
            white-space: nowrap;
            transition: color 0.4s ease;
        }
        .cm-panel:hover .cm-title-vert { color: #0097c7; }

        /* Expanded State */
        .cm-expanded {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            padding: 60px;
            opacity: 0;
            transition: opacity 0.4s ease 0.3s; /* Delay fade in */
            pointer-events: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .cm-panel.active .cm-expanded {
            opacity: 1;
            pointer-events: auto;
        }
        .cme-title {
            font-family: var(--font-serif, 'Playfair Display', serif);
            font-size: 4.5rem;
            margin-bottom: 8px;
            color: #ffffff;
            line-height: 1;
        }
        .cme-sub {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: #0097c7;
            margin-bottom: 40px;
            font-weight: 700;
        }
        
        .cme-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px 40px;
            margin-bottom: 40px;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 40px;
        }
        .cme-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding-bottom: 12px;
        }
        .cme-item span:first-child {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: rgba(255,255,255,0.6);
            font-weight: 600;
        }
        .cme-item span:last-child {
            font-size: 1rem;
            font-weight: 700;
            color: #ffffff;
        }
        .cme-item .muted { color: rgba(255,255,255,0.3); font-weight: 400; }

        .cme-stats {
            display: flex;
            gap: 60px;
            background: rgba(255,255,255,0.05);
            padding: 32px 40px;
            border-radius: 8px;
        }
        .cme-stat {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .cme-stat span:first-child {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: rgba(255,255,255,0.6);
            font-weight: 600;
        }
        .cme-stat span:last-child {
            font-family: var(--font-serif, 'Playfair Display', serif);
            font-size: 3.5rem;
            color: #ffffff;
            font-weight: 700;
            line-height: 1;
        }

            /* Downloads — 2-Col Feature List */
            .dl-sec { padding: 50px 5%; background: #ffffff; }
            .dl-sec-top {
              max-width: 1300px;
              margin: 0 auto 40px auto;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .dl-sec-top h2 {
              font-family: var(--font-serif, 'Playfair Display', serif);
              font-size: clamp(2.5rem, 5vw, 4rem);
              color: #0a1628;
              line-height: 1;
            }
            .dl-sec-top span {
              font-size: 0.78rem;
              text-transform: uppercase;
              letter-spacing: 0.3em;
              color: #0097c7;
              font-weight: 700;
            }
            .dl-2col {
              max-width: 1300px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 0;
            }
            .dl-item {
              display: flex;
              gap: 28px;
              padding: 48px 48px 48px 0;
              border-bottom: 1px solid #f0f0ec;
              text-decoration: none;
              color: inherit;
              position: relative;
              transition: all 0.3s ease;
              align-items: flex-start;
            }
            .dl-item:nth-child(2n) {
              padding-left: 48px;
              padding-right: 0;
              border-left: 1px solid #f0f0ec;
            }
            .dl-item:last-child, .dl-item:nth-last-child(2) { border-bottom: none; }
            .dl-item::after {
              content: '';
              position: absolute;
              bottom: 0; left: 0;
              height: 2px; width: 0;
              background: linear-gradient(90deg, #1565c0, #0097c7);
              transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
            }
            .dl-item:hover::after { width: 100%; }
            .dl-item:nth-child(2n)::after { left: 48px; }
            .dl-item:hover .dl-i-num { color: #0097c7; }
            .dl-i-num {
              font-family: var(--font-serif, 'Playfair Display', serif);
              font-size: 3.5rem;
              color: #e8e8e4;
              line-height: 1;
              flex-shrink: 0;
              transition: color 0.3s;
              font-weight: 700;
            }
            .dl-i-body { flex: 1; }
            .dl-i-title {
              font-family: var(--font-serif, 'Playfair Display', serif);
              font-size: 1.6rem;
              color: #0a1628;
              font-weight: 700;
              margin-bottom: 10px;
              display: block;
            }
            .dl-i-desc {
              font-size: 0.88rem;
              color: #4a5568;
              line-height: 1.6;
              display: block;
              margin-bottom: 24px;
            }
            .dl-i-link {
              font-size: 0.72rem;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              color: #0097c7;
              text-decoration: none;
            }
          color: #0a1628;
          line-height: 1;
        }
        .dl-sec-top span {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #0097c7;
          font-weight: 700;
        }
        .dl-2col {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .dl-item {
          display: flex;
          gap: 28px;
          padding: 48px 48px 48px 0;
          border-bottom: 1px solid #f0f0ec;
          text-decoration: none;
          color: inherit;
          position: relative;
          transition: all 0.3s ease;
          align-items: flex-start;
        }
        .dl-item:nth-child(2n) {
          padding-left: 48px;
          padding-right: 0;
          border-left: 1px solid #f0f0ec;
        }
        .dl-item:last-child, .dl-item:nth-last-child(2) { border-bottom: none; }
        .dl-item::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          height: 2px; width: 0;
          background: linear-gradient(90deg, #1565c0, #0097c7);
          transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .dl-item:hover::after { width: 100%; }
        .dl-item:nth-child(2n)::after { left: 48px; }
        .dl-item:hover .dl-i-num { color: #0097c7; }
        .dl-i-num {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 3.5rem;
          color: #e8e8e4;
          line-height: 1;
          flex-shrink: 0;
          transition: color 0.3s;
          font-weight: 700;
        }
        .dl-i-body { flex: 1; }
        .dl-i-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 1.6rem;
          color: #0a1628;
          font-weight: 700;
          margin-bottom: 10px;
          display: block;
        }
        .dl-i-desc {
          font-size: 0.88rem;
          color: #4a5568;
          line-height: 1.6;
          display: block;
          margin-bottom: 24px;
        }
        .dl-i-link {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #0097c7;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .hero-sec { min-height: 60vh; padding-top: 50px; }
          .hero-content { flex-direction: column; text-align: center; gap: 30px; margin-top: 0; }
          .h-desc { margin: 0 auto; font-size: 1rem; }
          .h-title { font-size: 40px; margin-bottom: 20px; }
          
          .tabs-section, .coatings-matrix, .dl-sec { padding:20px 5%; }
          .sec-title h2 { font-size: 2rem; }
          .tc-title { font-size: 2rem; }
          .cm-header h2 { font-size: 2.2rem; }
          .dl-sec-top h2 { font-size: 2.2rem; }

          .tabs-container { flex-direction: column; gap: 30px; }
          .tabs-list { flex: none; }
          .tab-content { padding: 30px 24px; }
          .tc-grid { grid-template-columns: 1fr; gap: 24px; }
          
          .cm-container { flex-direction: column; height: auto !important; border: 1px solid #d8d8d2; overflow: hidden; }
          .cm-panel { flex: none !important; height: auto !important; border-right: none; border-bottom: 1px solid #e8e8e4; transition: none; background: #ffffff; }
          .cm-panel:last-child { border-bottom: none; }
          .cm-panel.active { background: #0a1628; }
          
          .cm-collapsed { position: relative !important; flex-direction: row; justify-content: flex-start; padding: 0 24px; align-items: center; gap: 20px; height: 80px; width: 100%; top: 0; opacity: 1 !important; pointer-events: auto !important; }
          .cm-panel.active .cm-collapsed { opacity: 1 !important; pointer-events: auto !important; }
          .cm-icon { margin-bottom: 0 !important; font-size: 1.5rem; }
          .cm-title-vert { writing-mode: horizontal-tb !important; transform: none !important; font-size: 1.25rem; }
          .cm-panel.active .cm-title-vert { color: #ffffff; }
          
          .cm-expanded { position: relative !important; justify-content: flex-start; padding: 0 24px 24px 24px !important; top: 0 !important; display: none !important; opacity: 1 !important; pointer-events: auto !important; }
          .cm-panel.active .cm-expanded { display: flex !important; }
          
          .cme-title { font-size: 2rem; margin-bottom: 4px; }
          .cme-sub { font-size: 0.75rem; margin-bottom: 24px; }
          
          .cme-grid { grid-template-columns: 1fr; gap: 12px; margin-bottom: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); }
          .cme-item { padding-bottom: 12px; flex-direction: row; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); }
          .cme-item span:first-child { font-size: 0.75rem; }
          .cme-item span:last-child { font-size: 0.9rem; }
          
          .cme-stats { flex-direction: row; gap: 24px; padding: 20px; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); border-radius: 8px; }
          .cme-stat span:first-child { font-size: 0.65rem; }
          .cme-stat span:last-child { font-size: 2rem; }

          .dl-sec-top { flex-direction: column; align-items: flex-start; gap: 16px; margin-bottom: 40px; padding-bottom: 24px; }
          .dl-2col { grid-template-columns: 1fr; }
          .dl-item { padding: 32px 0; gap: 16px; flex-direction: column; }
          .dl-item:nth-child(2n) { padding-left: 0; border-left: none; border-bottom: 1px solid #f0f0ec; }
          .dl-item:last-child { border-bottom: none; }
          .dl-item:nth-child(2n)::after { left: 0; }
          .dl-i-num { font-size: 2.5rem; }
          .dl-i-title { font-size: 1.4rem; }
        }
      `}</style>

            {/* Hero */}
            <section className="hero-sec">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    >
                        {/* <span className="h-badge">Technical Documentation</span> */}
                        <h1 className="h-title">
                            <span>Specs &</span>
                            <span>Docs.</span>
                        </h1>
                        <p className="h-desc">Explore the definitive technical specifications and product documentation for the entire Vizora Optics lens range.</p>
                    </motion.div>

                </div>
            </section>

            {/* Lenses */}
            <section className="tabs-section">
                <div className="sec-title">
                    <span>Progressive Range</span>
                    <h2>Lens Specifications</h2>
                </div>

                <div className="tabs-container">
                    <div className="tabs-list">
                        {specSections[0].items.map((item, i) => (
                            <div
                                key={i}
                                className={`tab-btn ${activeTab === i ? 'active' : ''}`}
                                onMouseEnter={() => setActiveTab(i)}
                            >
                                <span className="t-title">{item.name}</span>
                                <span className="t-sub">{item.type}</span>
                            </div>
                        ))}
                    </div>

                    <div className="tab-content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="tc-header">
                                    <h3 className="tc-title">{activeLens.name}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <span className="tc-add">{activeLens.add}</span>
                                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4a5568' }}>Addition Range</span>
                                    </div>
                                </div>

                                <div className="tc-grid">

                                    <div className="tc-item">
                                        <span>Refractive Index</span>
                                        <span>{activeLens.index}</span>
                                    </div>
                                    {/* <div className="tc-item">
                                        <span>Base Diameter</span>
                                        <span>{activeLens.diameter}</span>
                                    </div> */}
                                    <div className="tc-item">
                                        <span>Compatible Coatings</span>
                                        <span className="text-gold" style={{ fontWeight: 700 }}>{activeLens.treatment}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Coatings - Interactive Expanding Column Matrix */}
            <section className="coatings-matrix">
                <div className="cm-header">
                    <span>Surface Technology</span>
                    <h2>Coating Specifications</h2>
                </div>

                <div className="cm-container">
                    {coatingSpecs.map((c, i) => (
                        <div
                            key={i}
                            className={`cm-panel ${activePanel === i ? 'active' : ''}`}
                            onMouseEnter={() => setActivePanel(i)}
                            onClick={() => setActivePanel(i)}
                        >
                            {/* Collapsed Vertical Title */}
                            <div className="cm-collapsed">
                                <span className="cm-icon">{c.icon}</span>
                                <span className="cm-title-vert">{c.name}</span>
                            </div>

                            {/* Expanded Data Pane */}
                            <div className="cm-expanded">
                                <h3 className="cme-title">{c.name}</h3>
                                <span className="cme-sub">{c.layers}</span>

                                <div className="cme-grid">
                                    <div className="cme-item">
                                        <span>Durability</span>
                                        <span className={c.hardcoat.includes('✓') ? '' : 'muted'}>{c.hardcoat.replace('✓ ', '')}</span>
                                    </div>
                                    <div className="cme-item">
                                        <span>Water Repellent</span>
                                        <span className={c.hydrophobic === '—' ? 'muted' : ''}>{c.hydrophobic !== '—' ? 'Premium' : 'N/A'}</span>
                                    </div>
                                    <div className="cme-item">
                                        <span>Oil/Smudge Repellent</span>
                                        <span className={c.oleophobic === '—' ? 'muted' : ''}>{c.oleophobic !== '—' ? 'Premium' : 'N/A'}</span>
                                    </div>
                                    <div className="cme-item">
                                        <span>Digital Protection</span>
                                        <span className={c.blueFilter === '—' ? 'muted' : ''}>{c.blueFilter !== '—' ? 'Included' : 'N/A'}</span>
                                    </div>
                                </div>

                                <div className="cme-stats">
                                    <div className="cme-stat">
                                        <span>Max Reflectance</span>
                                        <span>{c.reflectance}</span>
                                    </div>
                                    <div className="cme-stat">
                                        <span>Transmittance</span>
                                        <span>{c.transmittance}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Downloads */}
            <section className="dl-sec">
                <div className="dl-sec-top">
                    <h2>Technical<br />Downloads</h2>
                    <span>Resources</span>
                </div>

                <div className="dl-2col">
                    {[
                        { num: '01', title: 'Lens Data Sheets', desc: 'Full technical data sheets for all progressive lens models.' },
                        { num: '02', title: 'Coating Spec Sheets', desc: 'Detailed specifications for all four coating technologies.' },
                        { num: '03', title: 'Product Brochures', desc: 'Printable and digital brochures for the full product range.' },
                        { num: '04', title: 'Clinical Studies', desc: 'Available clinical evidence and performance data on request.' },
                    ].map((item, i) => (
                        <Link key={i} href="/contact" className="dl-item">
                            <span className="dl-i-num">{item.num}</span>
                            <div className="dl-i-body">
                                <span className="dl-i-title">{item.title}</span>
                                <span className="dl-i-desc">{item.desc}</span>
                                {/* <span className="dl-i-link">Download →</span> */}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}