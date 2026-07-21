import { useState, useEffect } from "react";
import imgLogoAnterior from './assets/logo-anterior.webp';
import imgLogoRedisenio from './assets/logo-redisenio.webp';
import imgAvatar from './assets/avatar.webp';
import imgCaseCarlucci from './assets/case-carlucci.webp';
import imgCaseBatech from './assets/case-batech.webp';
import imgCasePromptday from './assets/case-promptday.webp';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Baloo+2:wght@600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }
  ::selection { background: #C13483; color: #fff; }
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: #F8F8F8; }
  ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #E05453, #C13483, #7A2CA4, #44319A); border-radius: 8px; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }

  body {
    font-family: 'Nunito', sans-serif;
    background: #F8F8F8;
    color: #1A1A2E;
    overflow-x: hidden;
  }


  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; justify-content: space-between; align-items: center;
    padding: 1.25rem 3rem;
    background: rgba(0,0,0,0.25);
    
    border-bottom: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(12px);
    transition: box-shadow 0.3s;
  }
  .nav-brand { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1.05rem; letter-spacing: -0.01em; color: #ffffff; cursor: pointer; }
  .nav-brand span { color: #ffffff; }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links a { font-size: 0.875rem; font-weight: 500; color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s; cursor: pointer; position: relative; }
  .nav-links a::after { content: ''; position: absolute; left: 0; bottom: -4px; width: 0; height: 2px; background: linear-gradient(90deg, #FFD9A0, #FFB4C6); border-radius: 2px; transition: width 0.25s cubic-bezier(0.22,1,0.36,1); }
  .nav-links a:hover { color: #ffffff; }
  .nav-links a:hover::after { width: 100%; }

  .hero {
    min-height: 100vh;
    display: flex; align-items: center;
    padding: 7rem 3rem 4rem;
    position: relative; overflow: hidden;
    background: linear-gradient(160deg, #E05453 0%, #C13483 30%, #7A2CA4 60%, #44319A 90%, #C13483 120%);
    background-size: 200% 200%;
    animation: heroShift 14s ease-in-out infinite alternate;
  }
  @keyframes heroShift { 0% { background-position: 0% 0%; } 100% { background-position: 100% 100%; } }
  .hero-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; animation: blobFloat 10s ease-in-out infinite alternate; }
  @keyframes blobFloat { 0% { transform: translateY(0) scale(1); } 100% { transform: translateY(-30px) scale(1.08); } }
  .hero-content { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .hero-left > * { opacity: 0; animation: riseIn 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
  .hero-left > *:nth-child(1) { animation-delay: 0.05s; }
  .hero-left > *:nth-child(2) { animation-delay: 0.15s; }
  .hero-left > *:nth-child(3) { animation-delay: 0.28s; }
  .hero-left > *:nth-child(4) { animation-delay: 0.4s; }
  .hero-left > *:nth-child(5) { animation-delay: 0.5s; }
  @keyframes riseIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.4); border-radius: 100px; padding: 0.4rem 1rem; font-size: 0.8rem; color: #ffffff; font-weight: 600; margin-bottom: 1.5rem; }
  .hero-badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #22C55E; display: block; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
  .hero h1 { font-family: 'Baloo 2', sans-serif; font-size: clamp(2.8rem, 5vw, 4.2rem); font-weight: 800; line-height: 1.04; letter-spacing: -0.01em; color: #fff; margin-bottom: 1.5rem; }
  .hero h1 em { font-style: normal; background: linear-gradient(90deg, #FFD9A0, #FFB4C6, #FFD9A0); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: shine 5s linear infinite; }
  @keyframes shine { to { background-position: 200% center; } }
  .hero-desc { font-size: 1.05rem; line-height: 1.7; color: rgba(255,255,255,0.7); font-weight: 400; max-width: 440px; margin-bottom: 2.5rem; }
  .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn-primary { background: #E05453; color: #fff; border: none; padding: 0.85rem 2rem; border-radius: 100px; font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 0.9rem; cursor: pointer; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; display: inline-block; }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,85,62,0.35); }
  .btn-outline { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.3); padding: 0.85rem 2rem; border-radius: 100px; font-family: 'Nunito', sans-serif; font-weight: 600; font-size: 0.9rem; cursor: pointer; text-decoration: none; transition: border-color 0.2s, background 0.2s; display: inline-block; }
  .btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
  .hero-stats { display: flex; gap: 1rem; align-items: stretch; }
  .ai-stack-row { display: flex; flex-wrap: wrap; gap: 0.45rem; }
  .ai-pill { font-size: 0.72rem; font-weight: 600; color: #fff; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 100px; padding: 0.3rem 0.7rem; white-space: nowrap; }
  .stat-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 1.5rem 1rem; text-align: center; }
  .stat-num { font-family: 'Nunito', sans-serif; font-size: 2rem; font-weight: 800; color: #fff; }
  .stat-num span { color: #ffffff; }
  .stat-label { font-size: 0.78rem; color: rgba(255,255,255,0.85); margin-top: 0.25rem; font-weight: 400; }
  .hero-tags { margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .tag { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.65); font-size: 0.78rem; padding: 0.35rem 0.9rem; border-radius: 100px; border: 1px solid rgba(255,255,255,0.1); }

  section { padding: 6rem 3rem; }
  .section-inner { max-width: 1100px; margin: 0 auto; }
  .section-label { display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #E05453; margin-bottom: 1rem; }
  .section-title { font-family: 'Baloo 2', sans-serif; font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 800; letter-spacing: -0.01em; color: #1A1A2E; line-height: 1.12; }
  .section-title em { font-style: normal; background: linear-gradient(90deg, #E05453, #C13483); -webkit-background-clip: text; background-clip: text; color: transparent; }

  .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  .cases-grid { display: grid; gap: 2rem; margin-top: 3.5rem; }
  .case-card { display: grid; grid-template-columns: 1fr 1fr; gap: 0; background: #fff; border-radius: 24px; overflow: hidden; border: 1px solid rgba(26,26,46,0.07); transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s; cursor: pointer; text-decoration: none; color: inherit; position: relative; }
  .case-card::after { content: ''; position: absolute; inset: 0; border-radius: 24px; padding: 1.5px; background: linear-gradient(135deg, #E05453, #C13483, #7A2CA4, #44319A); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0; transition: opacity 0.35s; pointer-events: none; }
  .case-card:hover { transform: translateY(-6px); box-shadow: 0 24px 64px rgba(68,49,154,0.16); }
  .case-card:hover::after { opacity: 1; }
  .case-card.reverse { direction: rtl; }
  .case-card.reverse > * { direction: ltr; }
  .case-visual { min-height: 340px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; }
  .case-visual-inner { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 5rem; transition: transform 0.45s cubic-bezier(0.22,1,0.36,1); }
  .case-card:hover .case-visual-inner { transform: scale(1.12); }
  .cv1 { background: linear-gradient(135deg, #1A1A2E, #2D3561); }
  .cv2 { background: linear-gradient(135deg, #7A2CA4, #9B7FDB); }
  .cv3 { background: linear-gradient(135deg, #E05453, #F5A623); }
  .case-body { padding: 2.5rem; display: flex; flex-direction: column; justify-content: center; }
  .case-tag { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.3rem 0.8rem; border-radius: 100px; margin-bottom: 1.25rem; display: inline-block; width: fit-content; }
  .tag-real-estate { background: #FEF0ED; color: #993C1D; }
  .tag-marketing { background: #EEF0FE; color: #3C3489; }
  .tag-event { background: #FEF9ED; color: #854F0B; }
  .case-body h3 { font-family: 'Nunito', sans-serif; font-size: 1.4rem; font-weight: 800; letter-spacing: -0.01em; line-height: 1.2; margin-bottom: 1rem; }
  .case-body p { font-size: 0.92rem; line-height: 1.7; color: #444; font-weight: 400; margin-bottom: 1.75rem; }
  .case-metrics { display: flex; gap: 1.5rem; margin-bottom: 2rem; }
  .metric-num { font-family: 'Nunito', sans-serif; font-size: 1.6rem; font-weight: 800; color: #E05453; }
  .metric-label { font-size: 0.73rem; color: #888; font-weight: 400; }
  .case-link { display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'Nunito', sans-serif; font-size: 0.85rem; font-weight: 700; color: #E05453; text-decoration: none; }
  .case-link svg { transition: transform 0.2s; }
  .case-card:hover .case-link svg { transform: translateX(4px); }

  .linkedin-section { background: #1A1A2E; }
  .linkedin-section .section-title { color: #fff; }
  .linkedin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap: 1.5rem; margin-top: 3rem; }
  .linkedin-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 1.75rem; transition: background 0.2s; }
  .linkedin-card:hover { background: rgba(255,255,255,0.1); }
  .li-visual { width: 100%; height: 140px; border-radius: 12px; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: center; font-size: 3rem; }
  .li1 { background: linear-gradient(135deg, rgba(107,79,187,0.4), rgba(107,79,187,0.1)); }
  .li2 { background: linear-gradient(135deg, rgba(232,85,62,0.4), rgba(232,85,62,0.1)); }
  .linkedin-card h4 { font-family: 'Nunito', sans-serif; font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem; line-height: 1.3; }
  .linkedin-card p { font-size: 0.83rem; color: rgba(255,255,255,0.85); line-height: 1.6; font-weight: 400; margin-bottom: 1.25rem; }
  .li-link { font-size: 0.8rem; font-weight: 600; color: #F5A623; text-decoration: none; display: flex; align-items: center; gap: 0.35rem; }

  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; margin-top: 3rem; }
  .about-text p { font-size: 1rem; line-height: 1.8; color: #444; font-weight: 400; margin-bottom: 1.25rem; }
  .skills-list { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 2rem; }
  .skill-chip { background: #fff; border: 1.5px solid rgba(26,26,46,0.1); border-radius: 100px; padding: 0.45rem 1.1rem; font-size: 0.8rem; font-weight: 500; color: #1A1A2E; }
  .about-card { background: linear-gradient(135deg, #1A1A2E, #2D3561); border-radius: 24px; padding: 2.5rem; color: #fff; }
  .about-card h3 { font-family: 'Nunito', sans-serif; font-size: 1.3rem; font-weight: 800; margin-bottom: 2rem; }
  .timeline-item { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
  .tl-dot { width: 10px; height: 10px; border-radius: 50%; background: #E05453; margin-top: 5px; flex-shrink: 0; }
  .tl-year { font-size: 0.75rem; color: rgba(255,255,255,0.7); margin-bottom: 0.2rem; }
  .tl-title { font-size: 0.9rem; font-weight: 500; color: #fff; }
  .tl-sub { font-size: 0.8rem; color: rgba(255,255,255,0.85); font-weight: 400; }

  .contact-section { background: linear-gradient(135deg, #C13483 0%, #44319A 100%); }
  .contact-inner { max-width: 700px; margin: 0 auto; text-align: center; }
  .contact-inner .section-label { color: rgba(255,255,255,0.7); }
  .contact-inner .section-title { color: #fff; }
  .contact-inner p { font-size: 1rem; color: rgba(255,255,255,0.8); margin: 1.5rem 0 2.5rem; line-height: 1.7; font-weight: 400; }
  .contact-links { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .contact-link { display: flex; align-items: center; gap: 0.6rem; background: rgba(255,255,255,0.15); border: 1.5px solid rgba(255,255,255,0.25); padding: 0.8rem 1.5rem; border-radius: 100px; color: #fff; text-decoration: none; font-size: 0.875rem; font-weight: 500; transition: background 0.2s; }
  .contact-link:hover { background: rgba(255,255,255,0.25); }

  footer { background: #1A1A2E; padding: 2rem 3rem; display: flex; justify-content: space-between; align-items: center; }
  footer p { font-size: 0.8rem; color: rgba(255,255,255,0.65); }
  footer a { color: rgba(255,255,255,0.65); font-size: 0.8rem; text-decoration: none; }

  /* CASE STUDY PAGE */
  .case-page { min-height: 100vh; padding-top: 0; }
  .case-hero {
    min-height: 60vh;
    padding: 8rem 3rem 5rem;
    color: #fff;
    position: relative;
    overflow: hidden;
    background-size: 200% 200% !important;
    animation: heroShift 14s ease-in-out infinite alternate;
  }
  .case-hero-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; pointer-events: none; }
  .case-hero-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; }
  .back-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: rgba(255,255,255,0.12);
    border: 1.5px solid rgba(255,255,255,0.25);
    border-radius: 100px;
    padding: 0.5rem 1.1rem;
    color: rgba(255,255,255,0.85);
    font-size: 0.82rem; font-weight: 600;
    cursor: pointer; margin-bottom: 2.5rem;
    font-family: 'Nunito', sans-serif;
    transition: background 0.2s, border-color 0.2s, color 0.2s;
  }
  .back-btn:hover { background: rgba(255,255,255,0.2); border-color: #fff; color: #fff; }
  .case-hero h1 { font-family: 'Baloo 2', sans-serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 800; letter-spacing: -0.015em; line-height: 1.1; margin-bottom: 1.25rem; }
  .case-hero-desc { font-size: 1.05rem; color: rgba(255,255,255,0.75); max-width: 640px; line-height: 1.7; font-weight: 400; }
  .case-hero-meta { display: flex; gap: 1.25rem; margin-top: 2.5rem; flex-wrap: wrap; }
  .case-meta-item { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 0.75rem 1.25rem; }
  .case-meta-label { font-size: 0.68rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 0.3rem; font-weight: 700; }
  .case-meta-value { font-size: 0.88rem; font-weight: 600; color: #fff; }
  .case-content { max-width: 900px; margin: 0 auto; padding: 4rem 3rem; background: #FAFAF7; }
  .video-block { margin-top: 2rem; background: linear-gradient(135deg, #1A1A2E, #44319A); border-radius: 20px; padding: 1.25rem; position: relative; }
  .video-block::before { content: ''; position: absolute; inset: 0; border-radius: 20px; padding: 1.5px; background: linear-gradient(135deg, #E05453, #C13483, #7A2CA4, #44319A); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
  .video-block .video-frame { background: radial-gradient(ellipse at center, #2D3561 0%, #1A1A2E 100%); }
  .video-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.75); margin: 0.25rem 0 0.85rem 0.35rem; }
  .cs-section { margin-bottom: 4rem; }
  .cs-section h2 { font-family: 'Baloo 2', sans-serif; font-size: 1.6rem; font-weight: 800; letter-spacing: -0.01em; margin-bottom: 1.5rem; color: #1A1A2E; }
  .cs-section h2::after { content: ''; display: block; width: 32px; height: 3px; background: linear-gradient(90deg, #E05453, #C13483); border-radius: 4px; margin-top: 0.5rem; }
  .cs-section p { font-size: 0.98rem; line-height: 1.8; color: #555; font-weight: 400; margin-bottom: 1rem; }
  .problems-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem; }
  .problem-item { display: flex; gap: 0.75rem; align-items: flex-start; background: linear-gradient(135deg, rgba(224,84,83,0.07), rgba(193,52,131,0.07)); border: 1px solid rgba(224,84,83,0.15); border-radius: 12px; padding: 1rem 1.25rem; }
  .problem-icon { color: #E05453; font-size: 1rem; margin-top: 2px; flex-shrink: 0; }
  .problem-text { font-size: 0.88rem; line-height: 1.5; color: #444; font-weight: 400; }
  .goals-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px,1fr)); gap: 1rem; margin-top: 1.5rem; }
  .goal-card { background: #fff; border: 1.5px solid rgba(26,26,46,0.08); border-radius: 16px; padding: 1.25rem; text-align: center; transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
  .goal-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(193,52,131,0.15); border-color: #C13483; }
  .goal-card:hover .goal-icon { transform: scale(1.15) rotate(-4deg); }
  .goal-icon { font-size: 1.5rem; margin-bottom: 0.75rem; transition: transform 0.25s cubic-bezier(0.22,1,0.36,1); display: inline-block; }
  .goal-title { font-family: 'Nunito', sans-serif; font-size: 0.85rem; font-weight: 700; color: #1A1A2E; margin-bottom: 0.3rem; }
  .goal-desc { font-size: 0.78rem; color: #888; font-weight: 400; line-height: 1.4; }
  .phases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 1.5rem; }
  .phase-card { border-radius: 20px; padding: 1.75rem 1.5rem; }
  .phase-num { font-family: 'Nunito', sans-serif; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; }
  .phase-title { font-family: 'Nunito', sans-serif; font-size: 0.95rem; font-weight: 800; margin-bottom: 0.6rem; }
  .phase-months { font-size: 0.75rem; font-weight: 500; opacity: 0.6; margin-bottom: 1rem; }
  .phase-items { font-size: 0.82rem; line-height: 1.7; font-weight: 400; }
  .ph1 { background: linear-gradient(135deg, rgba(68,49,154,0.12), rgba(68,49,154,0.05)); color: #3C3489; border: 1px solid rgba(68,49,154,0.15); }
  .ph2 { background: linear-gradient(135deg, rgba(122,44,164,0.12), rgba(122,44,164,0.05)); color: #5C1E80; border: 1px solid rgba(122,44,164,0.15); }
  .ph3 { background: linear-gradient(135deg, rgba(224,84,83,0.12), rgba(224,84,83,0.05)); color: #993C1D; border: 1px solid rgba(224,84,83,0.15); }
  .pillars-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem; }
  .pilar-card { background: #fff; border: 1.5px solid rgba(26,26,46,0.08); border-radius: 16px; padding: 1.25rem 1.5rem; transition: box-shadow 0.2s; }
  .pilar-card:hover { box-shadow: 0 6px 20px rgba(193,52,131,0.1); }
  .pilar-type { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C13483; margin-bottom: 0.4rem; }
  .pilar-title { font-family: 'Nunito', sans-serif; font-size: 0.95rem; font-weight: 700; color: #1A1A2E; margin-bottom: 0.4rem; }
  .pilar-msg { font-size: 0.82rem; color: #666; font-style: italic; line-height: 1.5; font-weight: 400; }
  .tools-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px,1fr)); gap: 1rem; margin-top: 1.5rem; }
  .tool-item { background: #fff; border: 1.5px solid rgba(26,26,46,0.08); border-radius: 14px; padding: 1.25rem; text-align: center; transition: box-shadow 0.2s, transform 0.2s; }
  .tool-item:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(68,49,154,0.1); }
  .tool-icon { font-size: 1.8rem; margin-bottom: 0.5rem; }
  .tool-name { font-family: 'Nunito', sans-serif; font-size: 0.85rem; font-weight: 700; color: #1A1A2E; margin-bottom: 0.2rem; }
  .tool-use { font-size: 0.75rem; color: #888; font-weight: 400; }
  .results-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px,1fr)); gap: 1.25rem; margin-top: 1.5rem; }
  .result-card { background: linear-gradient(135deg, #1A1A2E, #44319A); border-radius: 20px; padding: 1.75rem 1.5rem; text-align: center; border: 1px solid rgba(255,255,255,0.08); transition: transform 0.2s, box-shadow 0.2s; }
  .result-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(68,49,154,0.3); }
  .result-num { font-family: 'Baloo 2', sans-serif; font-size: 2.4rem; font-weight: 800; color: #ffffff; line-height: 1; }
  .result-label { font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 0.5rem; font-weight: 400; line-height: 1.4; }
  .process-step { display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: flex-start; }
  .step-num { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #E05453, #C13483); display: flex; align-items: center; justify-content: center; font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 0.9rem; color: #fff; flex-shrink: 0; }
  .step-body h4 { font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 1rem; margin-bottom: 0.4rem; color: #1A1A2E; }
  .step-body p { font-size: 0.88rem; color: #555; line-height: 1.6; font-weight: 400; margin: 0; }
  .logo-compare { display: flex; gap: 2rem; align-items: center; margin-top: 1.5rem; flex-wrap: wrap; }
  .logo-box { background: #fff; border-radius: 16px; padding: 2rem; flex: 1; min-width: 200px; text-align: center; border: 1.5px solid rgba(26,26,46,0.08); }
  .logo-box-label { font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 1rem; }
  .logo-old { font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 1.1rem; color: #888; }
  .logo-new { font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1.2rem; color: #1A1A2E; letter-spacing: -0.01em; }
  .logo-new span { color: #E05453; }
  .actions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); gap: 1rem; margin-top: 1.5rem; }
  .action-item { background: #fff; border: 1.5px solid rgba(26,26,46,0.08); border-radius: 12px; padding: 1rem 1.25rem; font-size: 0.88rem; font-weight: 400; color: #444; display: flex; align-items: center; gap: 0.6rem; }
  .action-dot { width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(135deg, #E05453, #C13483); flex-shrink: 0; }
  .final-statement { background: linear-gradient(135deg, #E05453, #C13483, #7A2CA4); background-size: 200% 200%; animation: heroShift 12s ease-in-out infinite alternate; border-radius: 24px; padding: 3rem; color: #fff; text-align: center; margin-top: 1.5rem; box-shadow: 0 20px 48px rgba(193,52,131,0.25); }
  .final-statement h3 { font-family: 'Baloo 2', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem; }
  .final-statement p { font-size: 0.95rem; line-height: 1.7; color: rgba(255,255,255,0.95); font-weight: 400; }
  .academic-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(193,52,131,0.1); border: 1px solid rgba(193,52,131,0.25); border-radius: 100px; padding: 0.4rem 1rem; font-size: 0.8rem; color: #C13483; font-weight: 500; margin-bottom: 1.5rem; }

  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    section { padding: 4rem 1.5rem; }
    .hero { padding: 6rem 1.5rem 3rem; }
    .hero-content { grid-template-columns: 1fr; gap: 2.5rem; }
    .hero-stats { flex-direction: column; }
    .case-card { grid-template-columns: 1fr; }
    .case-card.reverse { direction: ltr; }
    .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .problems-grid, .pillars-grid, .phases-grid { grid-template-columns: 1fr; }
    .case-hero { padding: 3rem 1.5rem 2.5rem; }
    .case-content { padding: 2.5rem 1.5rem; }
    footer { flex-direction: column; gap: 0.5rem; text-align: center; }
  }
`;

const ArrowRight = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

function NavBar({ onGoHome, scrolled }) {
  return (
    <nav style={{ boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none" }}>
      <div className="nav-brand syne" onClick={onGoHome}>FRANCISCO <span>C.</span></div>
      <ul className="nav-links">
        <li><a href="#sobre-mi" onClick={onGoHome}>Sobre mí</a></li>
        <li><a href="#portfolio" onClick={onGoHome}>Casos de estudio</a></li>
        <li><a href="#contacto" onClick={onGoHome}>Contacto</a></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Francisco Carlucci</p>
      <a href="mailto:fjcarlucci.mkt@gmail.com">fjcarlucci.mkt@gmail.com</a>
    </footer>
  );
}

function CaseCarlucci({ onBack }) {
  return (
    <div className="case-page">
      <div className="case-hero" style={{ background: "linear-gradient(160deg, #E05453 0%, #C13483 35%, #7A2CA4 65%, #44319A 100%)" }}>
        <div className="case-hero-blob" style={{width:"400px",height:"400px",background:"#E05453",top:"-100px",right:"-80px"}}/>
        <div className="case-hero-blob" style={{width:"300px",height:"300px",background:"#7A2CA4",bottom:"-60px",left:"10%"}}/>
        <div className="case-hero-inner">
          <div className="case-tag tag-real-estate" style={{ marginBottom: "1.25rem" }}>Real Estate · Marketing Digital</div>
          <h1>De sombra a tendencia: la estrategia que posicionó a Carlucci Propiedades</h1>
          <p className="case-hero-desc">Rebranding estratégico, SEO y contenido de alto impacto para convertir una inmobiliaria de 45 años de trayectoria en referente digital de la Zona Oeste del Gran Buenos Aires.</p>
          <div className="case-hero-meta">
            <div className="case-meta-item"><div className="case-meta-label">Proyecto</div><div className="case-meta-value">Carlucci Propiedades</div></div>
            <div className="case-meta-item"><div className="case-meta-label">Rol</div><div className="case-meta-value">Dirección de Marketing Digital</div></div>
            <div className="case-meta-item"><div className="case-meta-label">Mercado</div><div className="case-meta-value">Ituzaingó · Castelar · Morón</div></div>
          </div>
        </div>
      </div>
      <div className="case-content">
        <div className="cs-section">
          <h2>Contexto y problemática</h2>
          <p>Carlucci Propiedades es una inmobiliaria con más de 45 años de trayectoria en la Zona Oeste del Gran Buenos Aires. Con la digitalización del mercado y el crecimiento de la competencia, la marca se encontraba desactualizada y con visibilidad online casi nula.</p>
          <div className="problems-grid">
            {["Bajos niveles de engagement en redes sociales y problemas de posicionamiento en Google.", "La empresa operaba con un nombre genérico que generaba confusión frente a la competencia.", "Ausencia total de estrategia de contenidos y presencia digital estructurada.", "Identidad visual desactualizada que no proyectaba los 45 años de experiencia en el mercado."].map((p, i) => (
              <div className="problem-item" key={i}><span className="problem-icon">✗</span><span className="problem-text">{p}</span></div>
            ))}
          </div>
        </div>
        <div className="cs-section">
          <h2>Objetivos del proyecto</h2>
          <div className="goals-grid">
            {[{icon:"🎨",t:"Identidad reconocible",d:"Rebranding consistente en todas las comunicaciones"},{icon:"📱",t:"Mayor interacción",d:"+25% de interacción en redes sociales"},{icon:"📈",t:"Aumentar leads",d:"Estrategias de contenido y SEO"},{icon:"🔍",t:"Visibilidad (SEO)",d:"Primeros resultados en Google y Maps"},{icon:"⭐",t:"Reputación online",d:"Reseñas positivas y gestión activa"}].map((g,i)=>(
              <div className="goal-card" key={i}><div className="goal-icon">{g.icon}</div><div className="goal-title">{g.t}</div><div className="goal-desc">{g.d}</div></div>
            ))}
          </div>
        </div>
        <div className="cs-section">
          <h2>El proceso</h2>
          <div className="process-step"><div className="step-num">1</div><div className="step-body"><h4>Renovación de identidad de marca</h4><p>Rediseño del logotipo y manual de marca. Cambio de nombre de "Inmobiliaria Carlucci" a "Carlucci Propiedades" para diferenciarse en el mercado. Actualización de escaparates y cartelería física de la oficina.</p></div></div>
          <div className="logo-compare">
            <div className="logo-box"><div className="logo-box-label">Logo anterior</div><img src={imgLogoAnterior} loading="lazy" decoding="async" width="1470" height="426" alt="Logo anterior Inmobiliaria Carlucci" style={{width:"100%",maxWidth:"260px",height:"auto",objectFit:"contain"}}/></div>
            <div style={{fontSize:"1.5rem",color:"#ccc"}}>→</div>
            <div className="logo-box"><div className="logo-box-label">Rediseño</div><img src={imgLogoRedisenio} loading="lazy" decoding="async" width="856" height="322" alt="Carlucci Propiedades logo" style={{width:"100%",maxWidth:"260px",height:"auto",objectFit:"contain"}}/></div>
          </div>
          <div className="process-step" style={{marginTop:"2rem"}}><div className="step-num">2</div><div className="step-body"><h4>Estrategia SEO integral</h4><p>Implementación de una estrategia orgánica completa: investigación de palabras clave, optimización del sitio web, construcción de reputación online y monitoreo activo de reseñas en Google y Facebook.</p></div></div>
          <div className="actions-grid">
            {["Investigación de palabras clave","Optimización del sitio web","Monitoreo y respuesta a comentarios","Construcción de reputación online"].map((a,i)=>(
              <div className="action-item" key={i}><span className="action-dot"/>{a}</div>
            ))}
          </div>
          <div className="process-step" style={{marginTop:"2rem"}}><div className="step-num">3</div><div className="step-body"><h4>Contenido de valor</h4><p>Plan de marketing con contenido visual y audiovisual estratégico: videos, house tours, fotos profesionales, blog SEO, publicaciones programadas y gestión activa de la comunidad en redes sociales.</p></div></div>
        </div>
        <div className="cs-section">
          <h2>Resultados</h2>
          <div className="results-grid">
            {[{num:"+70%",l:"Aumento en tráfico web orgánico"},{num:"+90%",l:"Incremento en interacciones"},{num:"+25%",l:"Crecimiento en generación de leads"},{num:"#1",l:"Posicionamiento en Google Maps local"}].map((r,i)=>(
              <div className="result-card" key={i}><div className="result-num">{r.num}</div><div className="result-label">{r.l}</div></div>
            ))}
          </div>
          <div className="final-statement" style={{marginTop:"2rem"}}>
            <h3>De nombre olvidado a marca líder</h3>
            <p>Carlucci Propiedades pasó de ser una inmobiliaria tradicional a una marca digital referente en su zona. La combinación de rebranding, SEO y contenido de valor generó un crecimiento sostenido y posicionó la marca en el top de búsquedas locales.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseBatech({ onBack }) {
  return (
    <div className="case-page">
      <div className="case-hero" style={{ background: "linear-gradient(160deg, #44319A 0%, #7A2CA4 40%, #C13483 80%, #E05453 100%)" }}>
        <div className="case-hero-blob" style={{width:"350px",height:"350px",background:"#7A2CA4",top:"-80px",right:"-60px"}}/>
        <div className="case-hero-blob" style={{width:"280px",height:"280px",background:"#C13483",bottom:"-40px",left:"15%"}}/>
        <div className="case-hero-inner">
          <div className="academic-badge">📚 Proyecto académico aplicado · Posgrado UPF / Tecnocampus</div>
          <div className="case-tag tag-marketing" style={{ marginBottom: "1.25rem" }}>Marketing Digital · IA · E-commerce</div>
          <h1>IA y estrategia 360° para escalar una marca de moda tecnológica</h1>
          <p className="case-hero-desc">Plan de marketing digital integral para BATECH, marca catalana de moda masculina tecnológica. Desarrollado como proyecto final del Posgrado en Marketing Digital e Inteligencia Artificial de la Universitat Pompeu Fabra / Tecnocampus.</p>
          <div className="case-hero-meta">
            <div className="case-meta-item"><div className="case-meta-label">Empresa</div><div className="case-meta-value">BATECH (moda tecnológica)</div></div>
            <div className="case-meta-item"><div className="case-meta-label">Contexto</div><div className="case-meta-value">Posgrado UPF / Tecnocampus</div></div>
            <div className="case-meta-item"><div className="case-meta-label">Alcance</div><div className="case-meta-value">Plan 360° — 12 meses</div></div>
            <div className="case-meta-item"><div className="case-meta-label">Mercado</div><div className="case-meta-value">Catalunya → España</div></div>
          </div>
        </div>
      </div>
      <div className="case-content">
        <div className="cs-section">
          <h2>La marca y el desafío</h2>
          <p>BATECH es una marca de moda masculina fundada en 2012 en Cataluña. Diseña ropa con tejidos inteligentes —antiarrugas, transpirables, termorreguladores— producida localmente con enfoque sostenible. Con una propuesta de valor clara y reseñas positivas, la marca carecía de una estrategia digital que la proyectara más allá de su círculo cercano.</p>
          <div className="problems-grid">
            {["Actividad en redes interrumpida desde septiembre 2024, sin estrategia editorial activa.", "SEO técnico crítico: 54.000 URLs indexadas, perfil de backlinks marcado como peligroso por Semrush.", "Tráfico orgánico de apenas 750 visitas/mes, sin campañas de pago activas.", "Sin automatización de email marketing ni CRM, a pesar de tener una base de datos valiosa."].map((p,i)=>(
              <div className="problem-item" key={i}><span className="problem-icon">✗</span><span className="problem-text">{p}</span></div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2>Objetivos estratégicos</h2>
          <div className="goals-grid">
            {[{icon:"🔍",t:"SEO orgánico",d:"De posición 50 a top 7 en 12 meses"},{icon:"📱",t:"Redes sociales",d:"+150 seguidores cualificados/mes en IG"},{icon:"🎯",t:"Leads",d:"60 leads/campaña con código postal"},{icon:"⭐",t:"Reputación",d:"5-10 reseñas/mes, mín. 80% positivas"},{icon:"🛒",t:"Conversión",d:"Tasa del 3% al finalizar las 3 fases"}].map((g,i)=>(
              <div className="goal-card" key={i}><div className="goal-icon">{g.icon}</div><div className="goal-title">{g.t}</div><div className="goal-desc">{g.d}</div></div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2>Plan en 3 fases</h2>
          <div className="phases-grid">
            <div className="phase-card ph1">
              <div className="phase-num">Fase 1</div>
              <div className="phase-title">Activación digital</div>
              <div className="phase-months">Meses 1–4</div>
              <div className="phase-items">Corrección SEO técnico · Optimización web · Activación de redes sociales · Primeras campañas de email · Reputación online</div>
            </div>
            <div className="phase-card ph2">
              <div className="phase-num">Fase 2</div>
              <div className="phase-title">Conversión</div>
              <div className="phase-months">Meses 5–8</div>
              <div className="phase-items">Influencers verticales en LinkedIn · Campañas estacionales · Landing pages · A/B testing · 3.500 visitas orgánicas/mes</div>
            </div>
            <div className="phase-card ph3">
              <div className="phase-num">Fase 3</div>
              <div className="phase-title">Escalado</div>
              <div className="phase-months">Meses 9–12</div>
              <div className="phase-items">UGC y Spark Ads · YouTube Shorts · Fidelización CRM · Expansión nacional · +5.000 visitas/mes</div>
            </div>
          </div>
        </div>

        <div className="cs-section">
          <h2>Estrategia de contenidos</h2>
          <p>Definimos pilares comunicacionales a partir del buyer persona "David": hombre urbano, 30-45 años, activo, con múltiples roles diarios y alto criterio estético. Cada pilar ataca un ángulo de decisión de compra distinto.</p>
          <div className="pillars-grid">
            {[
              {tipo:"Emocional",t:"Estilo de vida activo",m:'"No importa cuántas reuniones tengas: tu imagen sigue impecable sin pensarlo."'},
              {tipo:"Racional",t:"Tecnología textil",m:'"Tecnología que aguanta tu ritmo: sin arrugas, sin olores, sin mantenimiento."'},
              {tipo:"Aspiracional",t:"Imagen profesional",m:'"Tu ropa también comunica. Que cada detalle juegue a tu favor."'},
              {tipo:"Funcional",t:"Practicidad total",m:'"Una prenda que funciona igual en el aeropuerto que en la sala de juntas."'},
              {tipo:"Social",t:"Reputación",m:'"Una camisa que dice: estoy preparado, incluso antes de que hables."'},
              {tipo:"Económico",t:"Sostenibilidad y ahorro",m:'"Compra menos, elige mejor: una prenda BATECH dura más que la moda rápida."'},
            ].map((p,i)=>(
              <div className="pilar-card" key={i}><div className="pilar-type">{p.tipo}</div><div className="pilar-title">{p.t}</div><div className="pilar-msg">{p.m}</div></div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2>Herramientas de IA utilizadas</h2>
          <p>El plan integra inteligencia artificial en múltiples puntos del flujo de trabajo, desde la producción de contenido hasta la automatización de publicaciones y la generación de reportes.</p>
          <div className="tools-grid">
            {[{icon:"🤖",n:"ChatGPT Plus",u:"Copies, newsletters, contenido web"},{icon:"🎨",n:"Canva IA",u:"Diseño y generación visual"},{icon:"⚙️",n:"Make (Integromat)",u:"Automatización de flujos"},{icon:"📊",n:"Metricool",u:"Gestión y analítica de RRSS"},{icon:"🔍",n:"Semrush",u:"Auditoría SEO y competencia"},{icon:"📧",n:"Email marketing",u:"Segmentación y automatización"}].map((t,i)=>(
              <div className="tool-item" key={i}><div className="tool-icon">{t.icon}</div><div className="tool-name">{t.n}</div><div className="tool-use">{t.u}</div></div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2>Proyecciones y metas del plan</h2>
          <div className="results-grid">
            {[{num:"3.500",l:"Visitas orgánicas/mes al mes 8"},{num:"+5.000",l:"Visitas orgánicas/mes al mes 12"},{num:"3%",l:"Tasa de conversión objetivo (fase 3)"},{num:"Top 7",l:"Posición Google en 12 meses"}].map((r,i)=>(
              <div className="result-card" key={i}><div className="result-num">{r.num}</div><div className="result-label">{r.l}</div></div>
            ))}
          </div>
          <div className="final-statement" style={{marginTop:"2rem"}}>
            <h3>Marketing con propósito y datos detrás</h3>
            <p>El plan demuestra que una marca con producto sólido pero presencia digital débil puede revertir su situación con estrategia, consistencia y uso inteligente de herramientas. La combinación de SEO técnico, contenidos por pilares, influencers verticales y automatización con IA construye un ecosistema digital sostenible a largo plazo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CasePromptDay({ onBack }) {
  return (
    <div className="case-page">
      <div className="case-hero" style={{ background: "linear-gradient(160deg, #C13483 0%, #E05453 40%, #7A2CA4 75%, #44319A 100%)" }}>
        <div className="case-hero-blob" style={{width:"400px",height:"400px",background:"#E05453",top:"-100px",right:"-60px"}}/>
        <div className="case-hero-blob" style={{width:"250px",height:"250px",background:"#44319A",bottom:"-50px",left:"20%"}}/>
        <div className="case-hero-inner">
          <div className="case-tag tag-event" style={{ marginBottom: "1.25rem" }}>Evento · Contenido · IA</div>
          <h1>AI PrompT Day 2026: contenido que llenó un cine en Barcelona</h1>
          <p className="case-hero-desc">Producción de contenido y copies para la campaña de comunicación de la segunda edición del evento de marketing e IA más relevante de Barcelona. Dic 2025 – Feb 2026.</p>
          <div className="case-hero-meta">
            <div className="case-meta-item"><div className="case-meta-label">Evento</div><div className="case-meta-value">AI PrompT Day 2026</div></div>
            <div className="case-meta-item"><div className="case-meta-label">Lugar</div><div className="case-meta-value">Cinesa Diagonal Mar, Barcelona</div></div>
            <div className="case-meta-item"><div className="case-meta-label">Fecha</div><div className="case-meta-value">7 febrero 2026</div></div>
            <div className="case-meta-item"><div className="case-meta-label">Asistentes</div><div className="case-meta-value">~300 personas</div></div>
          </div>
        </div>
      </div>
      <div className="case-content">

        <div className="cs-section">
          <h2>El proyecto</h2>
          <p>AI PrompT Day es un evento presencial que reúne a profesionales del marketing y la comunicación en torno a la inteligencia artificial aplicada. Su segunda edición se celebró en el Cinesa Diagonal Mar de Barcelona, organizada por Pedro Rojas y Cristian Costa, con más de una docena de speakers especializados.</p>
          <p>Mi rol abarcó la gestión de canales y la producción de contenido en dos fases diferenciadas: una campaña pre-evento en LinkedIn, Instagram, TikTok y YouTube desde diciembre de 2025 hasta la semana del evento, y la cobertura en vivo el día del evento a través de X.</p>
          <div className="video-block">
            <div className="video-label">▶ Aftermovie oficial · AI PrompT Day 2026</div>
            <div className="video-frame" style={{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",borderRadius:"14px"}}>
              <iframe
                style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0,borderRadius:"14px"}}
                src="https://www.youtube.com/embed/MnpqZdhT6lk?si=My4FxhACZvxgrAPH"
                title="AI PrompT Day 2026 Barcelona"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="cs-section">
          <h2>Qué produje</h2>
          <p>El trabajo se organizó en dos fases: pre-evento y cobertura en directo. En la fase previa gestioné los canales de Instagram, TikTok, LinkedIn y YouTube con contenido adaptado a cada plataforma. El día del evento, cubrí en tiempo real a través de X — publicando desde el lugar, con actualizaciones entre sesiones y mención de ponentes y sponsors.</p>
          <div className="goals-grid">
            {[
              {icon:"💼", t:"LinkedIn", d:"Convocatoria, anuncio de sponsors, urgencia de últimas plazas y carrusel logístico previo al evento."},
              {icon:"📸", t:"Instagram y TikTok", d:"Contenido visual adaptado al formato de cada plataforma para ampliar alcance pre-evento."},
              {icon:"▶️", t:"YouTube", d:"Gestión del canal y materiales en vídeo vinculados a la campaña."},
              {icon:"🐦", t:"X — Cobertura en vivo", d:"Cobertura el día del evento: actualizaciones en tiempo real, citas de ponentes y difusión a quienes no podían asistir."},
            ].map((g,i)=>(
              <div className="goal-card" key={i}><div className="goal-icon">{g.icon}</div><div className="goal-title">{g.t}</div><div className="goal-desc">{g.d}</div></div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2>Enfoque editorial</h2>
          <div className="goals-grid">
            {[
              {icon:"🧠",t:"Argumento, no hype",d:"Cada post explicaba por qué vale la pena ir, no solo que había un evento"},
              {icon:"⏱️",t:"Urgencia real",d:"El copy de últimas plazas usó escasez concreta, no fórmulas genéricas"},
              {icon:"🎯",t:"Tono profesional",d:"Dirigido a directivos y especialistas, sin exceso de emojis ni efectismo"},
              {icon:"🔗",t:"Etiquetado estratégico",d:"Mención de ponentes y sponsors para ampliar el alcance orgánico"},
            ].map((g,i)=>(
              <div className="goal-card" key={i}><div className="goal-icon">{g.icon}</div><div className="goal-title">{g.t}</div><div className="goal-desc">{g.d}</div></div>
            ))}
          </div>
        </div>

        <div className="final-statement">
          <h3>Contenido que convierte cuando el objetivo es llenar butacas</h3>
          <p>La campaña reforzó algo que aplico en cada proyecto: un copy bien argumentado compite de igual a igual con uno visualmente espectacular. Los posts que mejor funcionaron no eran los más elaborados gráficamente, sino los que respondían directamente a la pregunta "¿por qué no puedo dejar de ir a este evento?".</p>
        </div>

      </div>
    </div>
  );
}

export default function Portfolio() {
  const [page, setPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const goHome = () => setPage("home");

  const IMG_AVATAR = imgAvatar;
  const IMG_CARLUCCI = imgCaseCarlucci;
  const IMG_BATECH = imgCaseBatech;

  const CaseImage = ({ src, alt, accent, fit="cover", position="center center" }) => (
    <div style={{width:"100%",height:"100%",position:"relative",overflow:"hidden",minHeight:"340px",background:accent+"22",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <img src={src} alt={alt} loading="lazy" decoding="async" style={{width:"100%",height:"100%",objectFit:fit,objectPosition:position,display:"block"}}/>
      {fit==="cover" && <div style={{position:"absolute",inset:0,background:`linear-gradient(to right, ${accent}33 0%, transparent 60%)`}}/>}
    </div>
  );


  const cases = [
        { id:"promptday", tag:"Evento · Contenido · IA", tagClass:"tag-event", title:"AI PrompT Day 2026: contenido que llenó un cine en Barcelona", desc:"Producción de copies y contenido para la campaña de comunicación pre-evento en LinkedIn. Dic 2025 – Feb 2026.", metrics:[{num:"~300",l:"Asistentes"},{num:"7 feb",l:"Cinesa Diagonal Mar"}], illustration:<CaseImage src={imgCasePromptday} alt="AI PrompT Day 2026 Barcelona" accent="#F5A623" position="center center"/>, reverse:false },
    { id:"carlucci", tag:"Real Estate · Marketing Digital", tagClass:"tag-real-estate", title:"La transformación digital de una inmobiliaria tradicional", desc:"Lideré el rebranding de Carlucci Propiedades, modernizando su identidad visual, unificando redes sociales y construyendo una estrategia SEO que multiplicó su visibilidad orgánica.", metrics:[{num:"+70%",l:"Tráfico web"},{num:"+90%",l:"Interacciones"}], illustration:<CaseImage src={IMG_CARLUCCI} alt="Carlucci Propiedades web" accent="#E05453"/>, reverse:true },
    { id:"batech", tag:"Marketing Digital · IA", tagClass:"tag-marketing", title:"IA y estrategia 360° para una marca de moda tecnológica", desc:"Plan de marketing digital integral para BATECH, marca catalana de tejidos inteligentes. Proyecto académico aplicado del Posgrado en Marketing Digital e IA de la UPF / Tecnocampus.", metrics:[{num:"360°",l:"Estrategia"},{num:"3 fases",l:"12 meses"}], illustration:<CaseImage src={IMG_BATECH} alt="BATECH Plan de Marketing Digital" accent="#7A2CA4"/>, reverse:false },
  ];

  if (page === "carlucci") return (<><style>{styles}</style><NavBar onGoHome={goHome} scrolled={scrolled}/><CaseCarlucci onBack={goHome}/><Footer/></>);
  if (page === "batech") return (<><style>{styles}</style><NavBar onGoHome={goHome} scrolled={scrolled}/><CaseBatech onBack={goHome}/><Footer/></>);
  if (page === "promptday") return (<><style>{styles}</style><NavBar onGoHome={goHome} scrolled={scrolled}/><CasePromptDay onBack={goHome}/><Footer/></>);

  return (
    <>
      <style>{styles}</style>
      <NavBar onGoHome={goHome} scrolled={scrolled}/>

      <a href="#portfolio" className="skip-link" style={{position:"absolute",top:"-100px",left:0,background:"#E05453",color:"#fff",padding:"0.5rem 1rem",zIndex:200,borderRadius:"0 0 8px 0",fontWeight:700,transition:"top 0.2s"}} onFocus={e=>e.target.style.top="0"} onBlur={e=>e.target.style.top="-100px"}>Saltar al contenido</a>
      <div className="hero">
        <div className="hero-blob" style={{width:500,height:500,background:"#C13483",top:"-100px",right:"-100px"}}/>
        <div className="hero-blob" style={{width:400,height:400,background:"#44319A",bottom:"-80px",left:"-80px"}}/>
        <div className="hero-content">
          <div>
            <div className="hero-badge">Disponible para proyectos</div>
            <h1 className="syne">Hola 👋<br/>soy <em>Francisco</em><br/>Carlucci</h1>
            <p className="hero-desc">Social Media Manager y Content Creator con más de 10 años construyendo presencia digital. Trabajo en la intersección entre estrategia, contenido e inteligencia artificial — y sé cómo hacer que eso se note en los resultados.</p>
            <div className="hero-ctas">
              <a href="#portfolio" className="btn-primary">Ver casos de estudio</a>
              <a href="mailto:fjcarlucci.mkt@gmail.com" className="btn-outline">Escríbeme</a>
            </div>
            <div className="hero-tags">
              {["Social Media Manager","Content Creator","Marketing Digital","IA aplicada"].map(t=><span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"0"}}>
            <img src={IMG_AVATAR} alt="Francisco Carlucci" fetchpriority="high" decoding="async" width="395" height="560" style={{width:"280px",height:"auto",objectFit:"contain",marginBottom:"-30px",position:"relative",zIndex:2}}/>
            <div className="hero-stats" style={{position:"relative",zIndex:1,width:"100%"}}>
              <div className="stat-card" style={{flex:"0 0 auto",minWidth:"110px"}}><div className="stat-num">+10</div><div className="stat-label">Años de experiencia</div></div>
              <div className="stat-card ai-stack-card" style={{flex:1}}>
                <div className="stat-label" style={{marginBottom:"0.6rem",fontWeight:600,color:"rgba(255,255,255,0.9)"}}>Stack de IA aplicada</div>
                <div className="ai-stack-row">
                  {["ChatGPT","Gemini","Claude","Copilot","Firefly","Suno","Eleven Labs","HeyGen"].map(tool=>
                    <span className="ai-pill" key={tool}>{tool}</span>
                  )}
                </div>
              </div>
            </div>
            <div style={{marginTop:"1.5rem",background:"rgba(255,255,255,0.06)",borderRadius:"20px",padding:"1.5rem",border:"1px solid rgba(255,255,255,0.1)"}}>
              <p style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.6)",fontWeight:300,lineHeight:1.7,fontStyle:"italic"}}>
                "Llevo más de 10 años en marketing digital, con base en Barcelona y raíces en el sector inmobiliario del Gran Buenos Aires. He gestionado marcas reales —no solo proyectos académicos— y aplico inteligencia artificial como parte natural de mi flujo de trabajo, no como decoración del CV."
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="portfolio" style={{background:"#FAFAF7"}}>
        <div className="section-inner">
          <span className="section-label">Proyectos</span>
          <h2 className="section-title syne">Casos de <em>estudio</em></h2>
          <div className="cases-grid">
            {cases.map((c,i) => (
              <div className={`case-card${c.reverse?" reverse":""}`} key={c.id} onClick={() => setPage(c.id)}>
                <div className="case-visual" style={{position:"relative",overflow:"hidden"}}>{c.illustration}</div>
                <div className="case-body">
                  <span className={`case-tag ${c.tagClass}`}>{c.tag}</span>
                  <h3 className="syne">{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="case-metrics">
                    {c.metrics.map((m,j)=>(
                      <div key={j}><div className="metric-num">{m.num}</div><div className="metric-label">{m.l}</div></div>
                    ))}
                  </div>
                  <span className="case-link" role="link" aria-label={`Leer caso: ${c.title}`}>Leer caso <ArrowRight/></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="linkedin-section">
        <div className="section-inner">
          <span className="section-label" style={{color:"rgba(255,255,255,0.75)"}}>Contenido</span>
          <h2 className="section-title syne">Contribuciones <em style={{color:"#F5A623"}}>en LinkedIn</em></h2>
          <div className="linkedin-grid">
            <div className="linkedin-card">
              <div className="li-visual li1">🍊</div>
              <h4>Google lanza Pomelli: IA + marketing para pymes</h4>
              <p>Carrusel explicando el nuevo experimento de Google Labs que entiende la identidad de marca (colores, tono, estilo) para generar campañas automáticamente, y por qué puede ser una buena noticia para quienes trabajamos en marketing digital.</p>
              <a href="https://www.linkedin.com/posts/franciscocarlucci_ia-tecnologaeda-vaednculoshumanos-ugcPost-7369285686132219905-jf4a" target="_blank" rel="noreferrer" className="li-link">Ver publicación →</a>
            </div>
            <div className="linkedin-card">
              <div className="li-visual li2">💬</div>
              <h4>De qué hablamos cuando hablamos de amor en tiempos de IA</h4>
              <p>Video reflexivo sobre cómo la inteligencia artificial empieza a ocupar espacios emocionales, y por qué la pregunta clave no es si la IA nos "quiere", sino por qué queremos que lo haga.</p>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7394707279264018432" target="_blank" rel="noreferrer" className="li-link">Ver publicación →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" style={{background:"#fff"}}>
        <div className="section-inner">
          <span className="section-label">Sobre mí</span>
          <h2 className="section-title syne">Más de 10 años haciendo<br/><em>que las marcas conecten</em></h2>
          <div className="about-grid">
            <div className="about-text">
              <p>Empecé en marketing digital cuando todavía se discutía si las redes sociales "iban a durar". Desde entonces gestioné la comunicación de Carlucci Propiedades, una inmobiliaria familiar con más de 45 años de historia en la Zona Oeste del Gran Buenos Aires, llevándola de cero presencia digital a referente local en su segmento.</p>
              <p>Hoy vivo en Barcelona, donde sigo trabajando con marcas reales: llevo la comunicación digital de Paraleia (banda indie pop/rock del Gran Buenos Aires) y participé en la estrategia de AI PrompT Day 2026, un evento sobre inteligencia artificial celebrado en el Cinesa Diagonal Mar.</p>
              <p>La IA forma parte de mi flujo de trabajo desde hace tiempo — no como tendencia, sino como herramienta concreta para producir más y mejor contenido. Estoy disponible para posiciones en España y proyectos freelance en marketing, contenidos y redes sociales.</p>
              <div className="skills-list">
                {["Estrategia de contenidos","Rebranding","SEO","Social Media","IA aplicada","Copywriting","Video marketing","Community Management"].map(s=><span className="skill-chip" key={s}>{s}</span>)}
              </div>
            </div>
            <div className="about-card">
              <h3 className="syne">Trayectoria</h3>
              {[{y:"2026",t:"AI PrompT Day",s:"Colaboración en producción de contenido — Barcelona"},{y:"2025",t:"Posgrado Marketing Digital e IA",s:"Universitat Pompeu Fabra"},{y:"2024",t:"The Plan Company",s:"Responsable de cuentas en marketing digital"},{y:"2015–hoy",t:"Carlucci Propiedades",s:"Content Creator / Social Media Manager"},{y:"2015–hoy",t:"Paraleia",s:"Comunicación digital y contenidos"},{y:"2015–2024",t:"Los Marlon Brando",s:"Manager, Community Manager & Content Creator"}].map((t,i)=>(
                <div className="timeline-item" key={i}>
                  <div className="tl-dot"/>
                  <div><div className="tl-year">{t.y}</div><div className="tl-title">{t.t}</div><div className="tl-sub">{t.s}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <div className="contact-inner">
          <span className="section-label">Contacto</span>
          <h2 className="section-title syne">¿Trabajamos juntos?</h2>
          <p>Si tienes un proyecto en mente o buscas un profesional de marketing y contenidos, escríbeme. Disponible para proyectos freelance y posiciones en España.</p>
          <div className="contact-links">
            <a href="mailto:fjcarlucci.mkt@gmail.com" className="contact-link" aria-label="Enviar email a fjcarlucci.mkt@gmail.com">✉️ fjcarlucci.mkt@gmail.com</a>
            <a href="tel:+34615445794" className="contact-link" aria-label="Llamar al +34 615 445 794">📞 +34 615 445 794</a>
            <a href="https://www.linkedin.com/in/franciscocarlucci" target="_blank" rel="noreferrer" className="contact-link" aria-label="Visitar perfil de LinkedIn de Francisco Carlucci">💼 LinkedIn</a>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
