import { useState, useEffect } from "react";
import { STR } from "./translations";
import imgLogoAnterior from './assets/logo-anterior.webp';
import imgLogoRedisenio from './assets/logo-redisenio.webp';
import imgAvatar from './assets/avatar.webp';
import imgCaseCarlucci from './assets/case-carlucci.webp';
import imgCaseBatech from './assets/case-batech.webp';
import imgCasePromptday from './assets/case-promptday.webp';
import serpVideo from './assets/serp-carlucci.mp4';
import contenido1 from './assets/contenido-1.mp4';
import contenido2 from './assets/contenido-2.mp4';
import fachadaAntes from './assets/fachada-antes.webp';
import fachadaDespues from './assets/fachada-despues.webp';

const styles = `

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
  .lang-toggle { display: flex; gap: 2px; background: rgba(255,255,255,0.12); border-radius: 999px; padding: 3px; }
  .lang-toggle button { border: 0; background: transparent; color: rgba(255,255,255,0.7); font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.6rem; border-radius: 999px; cursor: pointer; transition: all 0.2s; font-family: inherit; }
  .lang-toggle button:hover { color: #fff; }
  .lang-toggle button.active { background: #fff; color: #C13483; }
  button.case-link { background: none; border: 0; padding: 0; font: inherit; text-align: left; cursor: pointer; }
  button.case-link:focus-visible, .lang-toggle button:focus-visible { outline: 2px solid #E05453; outline-offset: 3px; border-radius: 4px; }
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
  .linkedin-card h3 { font-family: 'Nunito', sans-serif; font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem; line-height: 1.3; }
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
  .step-body h3 { font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 1rem; margin-bottom: 0.4rem; color: #1A1A2E; }
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
  <svg width="16" height="16" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

function NavBar({ onGoHome, scrolled, t, lang, setLang }) {
  return (
    <nav style={{ boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none" }}>
      <div className="nav-brand syne" onClick={onGoHome}>FRANCISCO <span>C.</span></div>
      <ul className="nav-links">
        <li><a href="#sobre-mi" onClick={onGoHome}>{t.nav.about}</a></li>
        <li><a href="#portfolio" onClick={onGoHome}>{t.nav.cases}</a></li>
        <li><a href="#contacto" onClick={onGoHome}>{t.nav.contact}</a></li>
        <li>
          <div className="lang-toggle" role="group" aria-label="Idioma / Language">
            <button type="button" className={lang === "es" ? "active" : ""} aria-pressed={lang === "es"} onClick={() => setLang("es")}>ES</button>
            <button type="button" className={lang === "en" ? "active" : ""} aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          </div>
        </li>
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

function CaseCarlucci({ t }) {
  return (
    <div className="case-page">
      <div className="case-hero" style={{ background: "linear-gradient(160deg, #E05453 0%, #C13483 35%, #7A2CA4 65%, #44319A 100%)" }}>
        <div className="case-hero-blob" style={{width:"400px",height:"400px",background:"#E05453",top:"-100px",right:"-80px"}}/>
        <div className="case-hero-blob" style={{width:"300px",height:"300px",background:"#7A2CA4",bottom:"-60px",left:"10%"}}/>
        <div className="case-hero-inner">
          <div className="case-tag tag-real-estate" style={{ marginBottom: "1.25rem" }}>{t.tag}</div>
          <h1>{t.h1}</h1>
          <p className="case-hero-desc">{t.desc}</p>
          <div className="case-hero-meta">
            {t.meta.map((m, i) => (
              <div className="case-meta-item" key={i}><div className="case-meta-label">{m.label}</div><div className="case-meta-value">{m.value}</div></div>
            ))}
          </div>
        </div>
      </div>
      <div className="case-content">
        <div className="cs-section">
          <h2>{t.contextTitle}</h2>
          <p>{t.contextP}</p>
          <div className="problems-grid">
            {t.problems.map((p, i) => (
              <div className="problem-item" key={i}><span className="problem-icon" aria-hidden="true">✗</span><span className="problem-text">{p}</span></div>
            ))}
          </div>
        </div>
        <div className="cs-section">
          <h2>{t.goalsTitle}</h2>
          <div className="goals-grid">
            {t.goals.map((g,i)=>(
              <div className="goal-card" key={i}><div className="goal-icon" aria-hidden="true">{g.icon}</div><div className="goal-title">{g.t}</div><div className="goal-desc">{g.d}</div></div>
            ))}
          </div>
        </div>
        <div className="cs-section">
          <h2>{t.processTitle}</h2>
          <div className="process-step"><div className="step-num">1</div><div className="step-body"><h3>{t.step1T}</h3><p>{t.step1P}</p></div></div>
          <div className="logo-compare">
            <div className="logo-box"><div className="logo-box-label">{t.logoBefore}</div><img src={imgLogoAnterior} loading="lazy" decoding="async" width="1470" height="426" alt="Logo anterior Inmobiliaria Carlucci" style={{width:"100%",maxWidth:"260px",height:"auto",objectFit:"contain"}}/></div>
            <div style={{fontSize:"1.5rem",color:"#ccc"}}>→</div>
            <div className="logo-box"><div className="logo-box-label">{t.logoAfter}</div><img src={imgLogoRedisenio} loading="lazy" decoding="async" width="856" height="322" alt="Carlucci Propiedades logo" style={{width:"100%",maxWidth:"260px",height:"auto",objectFit:"contain"}}/></div>
          </div>
          <div className="logo-compare" style={{marginTop:"1rem"}}>
            <div className="logo-box"><div className="logo-box-label">{t.officeBefore}</div><img src={fachadaAntes} loading="lazy" decoding="async" width="800" height="600" alt="Fachada anterior de Inmobiliaria Carlucci" style={{width:"100%",maxWidth:"340px",height:"auto",borderRadius:"10px"}}/></div>
            <div style={{fontSize:"1.5rem",color:"#ccc"}}>→</div>
            <div className="logo-box"><div className="logo-box-label">{t.officeAfter}</div><img src={fachadaDespues} loading="lazy" decoding="async" width="800" height="600" alt="Fachada renovada de Carlucci Propiedades" style={{width:"100%",maxWidth:"340px",height:"auto",borderRadius:"10px"}}/></div>
          </div>
          <div className="process-step" style={{marginTop:"2rem"}}><div className="step-num">2</div><div className="step-body"><h3>{t.step2T}</h3><p>{t.step2P}</p></div></div>
          <div className="actions-grid">
            {t.actions.map((a,i)=>(
              <div className="action-item" key={i}><span className="action-dot"/>{a}</div>
            ))}
          </div>
          <div className="process-step" style={{marginTop:"2rem"}}><div className="step-num">3</div><div className="step-body"><h3>{t.step3T}</h3><p>{t.step3P}</p></div></div>
          <div className="video-block" style={{marginTop:"2rem"}}>
            <div className="video-label">{t.contentLabel}</div>
            <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap",marginTop:"0.75rem"}}>
              <video src={contenido1} autoPlay loop muted playsInline preload="metadata" onCanPlay={(e) => { e.target.play().catch(() => {}); }} width="368" height="660" aria-label={t.contentCaption} style={{width:"min(260px, 45%)",height:"auto",borderRadius:"14px",display:"block"}}/>
              <video src={contenido2} autoPlay loop muted playsInline preload="metadata" onCanPlay={(e) => { e.target.play().catch(() => {}); }} width="296" height="526" aria-label={t.contentCaption} style={{width:"min(260px, 45%)",height:"auto",borderRadius:"14px",display:"block"}}/>
            </div>
            <p style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.85)",marginTop:"0.75rem",lineHeight:1.5}}>{t.contentCaption}</p>
          </div>
        </div>
        <div className="cs-section">
          <h2>{t.resultsTitle}</h2>
          <div className="results-grid">
            {t.results.map((r,i)=>(
              <div className="result-card" key={i}><div className="result-num">{r.num}</div><div className="result-label">{r.l}</div></div>
            ))}
          </div>
          <div className="video-block" style={{marginTop:"2rem"}}>
            <div className="video-label">{t.serpLabel}</div>
            <video src={serpVideo} autoPlay loop muted playsInline preload="metadata" onCanPlay={(e) => { e.target.play().catch(() => {}); }} width="768" height="432" aria-label={t.serpCaption} style={{width:"100%",height:"auto",borderRadius:"14px",display:"block",border:"1px solid #eee"}}/>
            <p style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.85)",marginTop:"0.6rem",lineHeight:1.5}}>{t.serpCaption}</p>
          </div>
          <div className="final-statement" style={{marginTop:"2rem"}}>
            <h3>{t.finalT}</h3>
            <p>{t.finalP}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseBatech({ t }) {
  return (
    <div className="case-page">
      <div className="case-hero" style={{ background: "linear-gradient(160deg, #44319A 0%, #7A2CA4 40%, #C13483 80%, #E05453 100%)" }}>
        <div className="case-hero-blob" style={{width:"350px",height:"350px",background:"#7A2CA4",top:"-80px",right:"-60px"}}/>
        <div className="case-hero-blob" style={{width:"280px",height:"280px",background:"#C13483",bottom:"-40px",left:"15%"}}/>
        <div className="case-hero-inner">
          <div className="academic-badge">{t.badge}</div>
          <div className="case-tag tag-marketing" style={{ marginBottom: "1.25rem" }}>{t.tag}</div>
          <h1>{t.h1}</h1>
          <p className="case-hero-desc">{t.desc}</p>
          <div className="case-hero-meta">
            {t.meta.map((m, i) => (
              <div className="case-meta-item" key={i}><div className="case-meta-label">{m.label}</div><div className="case-meta-value">{m.value}</div></div>
            ))}
          </div>
        </div>
      </div>
      <div className="case-content">
        <div className="cs-section">
          <h2>{t.brandTitle}</h2>
          <p>{t.brandP}</p>
          <div className="problems-grid">
            {t.problems.map((p,i)=>(
              <div className="problem-item" key={i}><span className="problem-icon" aria-hidden="true">✗</span><span className="problem-text">{p}</span></div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2>{t.goalsTitle}</h2>
          <div className="goals-grid">
            {t.goals.map((g,i)=>(
              <div className="goal-card" key={i}><div className="goal-icon" aria-hidden="true">{g.icon}</div><div className="goal-title">{g.t}</div><div className="goal-desc">{g.d}</div></div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2>{t.phasesTitle}</h2>
          <div className="phases-grid">
            {t.phases.map((ph,i)=>(
              <div className={`phase-card ph${i+1}`} key={i}>
                <div className="phase-num">{ph.num}</div>
                <div className="phase-title">{ph.title}</div>
                <div className="phase-months">{ph.months}</div>
                <div className="phase-items">{ph.items}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2>{t.contentTitle}</h2>
          <p>{t.contentP}</p>
          <div className="pillars-grid">
            {t.pillars.map((p,i)=>(
              <div className="pilar-card" key={i}><div className="pilar-type">{p.tipo}</div><div className="pilar-title">{p.t}</div><div className="pilar-msg">{p.m}</div></div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2>{t.toolsTitle}</h2>
          <p>{t.toolsP}</p>
          <div className="tools-grid">
            {t.tools.map((tl,i)=>(
              <div className="tool-item" key={i}><div className="tool-icon" aria-hidden="true">{tl.icon}</div><div className="tool-name">{tl.n}</div><div className="tool-use">{tl.u}</div></div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2>{t.projTitle}</h2>
          <div className="results-grid">
            {t.projections.map((r,i)=>(
              <div className="result-card" key={i}><div className="result-num">{r.num}</div><div className="result-label">{r.l}</div></div>
            ))}
          </div>
          <div className="final-statement" style={{marginTop:"2rem"}}>
            <h3>{t.finalT}</h3>
            <p>{t.finalP}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CasePromptDay({ t }) {
  return (
    <div className="case-page">
      <div className="case-hero" style={{ background: "linear-gradient(160deg, #C13483 0%, #E05453 40%, #7A2CA4 75%, #44319A 100%)" }}>
        <div className="case-hero-blob" style={{width:"400px",height:"400px",background:"#E05453",top:"-100px",right:"-60px"}}/>
        <div className="case-hero-blob" style={{width:"250px",height:"250px",background:"#44319A",bottom:"-50px",left:"20%"}}/>
        <div className="case-hero-inner">
          <div className="case-tag tag-event" style={{ marginBottom: "1.25rem" }}>{t.tag}</div>
          <h1>{t.h1}</h1>
          <p className="case-hero-desc">{t.desc}</p>
          <div className="case-hero-meta">
            {t.meta.map((m, i) => (
              <div className="case-meta-item" key={i}><div className="case-meta-label">{m.label}</div><div className="case-meta-value">{m.value}</div></div>
            ))}
          </div>
        </div>
      </div>
      <div className="case-content">

        <div className="cs-section">
          <h2>{t.projectTitle}</h2>
          <p>{t.projectP1}</p>
          <p>{t.projectP2}</p>
          <div className="video-block">
            <div className="video-label">{t.videoLabel}</div>
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
          <h2>{t.producedTitle}</h2>
          <p>{t.producedP}</p>
          <div className="goals-grid">
            {t.channels.map((g,i)=>(
              <div className="goal-card" key={i}><div className="goal-icon" aria-hidden="true">{g.icon}</div><div className="goal-title">{g.t}</div><div className="goal-desc">{g.d}</div></div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <h2>{t.editorialTitle}</h2>
          <div className="goals-grid">
            {t.editorial.map((g,i)=>(
              <div className="goal-card" key={i}><div className="goal-icon" aria-hidden="true">{g.icon}</div><div className="goal-title">{g.t}</div><div className="goal-desc">{g.d}</div></div>
            ))}
          </div>
        </div>

        <div className="final-statement">
          <h3>{t.finalT}</h3>
          <p>{t.finalP}</p>
        </div>

      </div>
    </div>
  );
}

export default function Portfolio() {
  const [page, setPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("lang") === "en" ? "en" : "es"; } catch { return "es"; }
  });

  const t = STR[lang];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch { /* modo privado */ }
  }, [lang]);

  useEffect(() => {
    const base = "Francisco Carlucci · Digital Content Strategist";
    const caseTitles = { carlucci: t.caseCarlucci.h1, batech: t.caseBatech.h1, promptday: t.casePromptday.h1 };
    document.title = page === "home" ? base : `${caseTitles[page]} · Francisco Carlucci`;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t.meta.description);
  }, [page, lang, t]);

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

  const caseIllustrations = {
    promptday: <CaseImage src={imgCasePromptday} alt="AI PrompT Day 2026 Barcelona" accent="#F5A623" position="center center"/>,
    carlucci: <CaseImage src={IMG_CARLUCCI} alt="Carlucci Propiedades web" accent="#E05453"/>,
    batech: <CaseImage src={IMG_BATECH} alt="BATECH Digital Marketing Plan" accent="#7A2CA4"/>,
  };
  const caseTagClasses = { promptday: "tag-event", carlucci: "tag-real-estate", batech: "tag-marketing" };
  const caseOrder = [
    { id: "promptday", reverse: false },
    { id: "carlucci", reverse: true },
    { id: "batech", reverse: false },
  ];
  const cases = caseOrder.map(({ id, reverse }) => ({
    id, reverse,
    tagClass: caseTagClasses[id],
    illustration: caseIllustrations[id],
    ...t.portfolio.cases[id],
  }));

  const navProps = { onGoHome: goHome, scrolled, t, lang, setLang };

  if (page === "carlucci") return (<><style>{styles}</style><NavBar {...navProps}/><main id="contenido" tabIndex={-1}><CaseCarlucci t={t.caseCarlucci}/></main><Footer/></>);
  if (page === "batech") return (<><style>{styles}</style><NavBar {...navProps}/><main id="contenido" tabIndex={-1}><CaseBatech t={t.caseBatech}/></main><Footer/></>);
  if (page === "promptday") return (<><style>{styles}</style><NavBar {...navProps}/><main id="contenido" tabIndex={-1}><CasePromptDay t={t.casePromptday}/></main><Footer/></>);

  return (
    <>
      <style>{styles}</style>
      <NavBar {...navProps}/>

      <a href="#contenido" className="skip-link" style={{position:"absolute",top:"-100px",left:0,background:"#E05453",color:"#fff",padding:"0.5rem 1rem",zIndex:200,borderRadius:"0 0 8px 0",fontWeight:700,transition:"top 0.2s"}} onFocus={e=>e.target.style.top="0"} onBlur={e=>e.target.style.top="-100px"}>{t.skip}</a>
      <main id="contenido" tabIndex={-1}>
      <div className="hero">
        <div className="hero-blob" style={{width:500,height:500,background:"#C13483",top:"-100px",right:"-100px"}}/>
        <div className="hero-blob" style={{width:400,height:400,background:"#44319A",bottom:"-80px",left:"-80px"}}/>
        <div className="hero-content">
          <div>
            <div className="hero-badge">{t.hero.badge}</div>
            <h1 className="syne">{t.hero.hello}<br/>{t.hero.im} <em>Francisco</em><br/>Carlucci</h1>
            <p className="hero-desc">{t.hero.desc}</p>
            <div className="hero-ctas">
              <a href="#portfolio" className="btn-primary">{t.hero.ctaCases}</a>
              <a href="mailto:fjcarlucci.mkt@gmail.com" className="btn-outline">{t.hero.ctaWrite}</a>
            </div>
            <div className="hero-tags">
              {t.hero.tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"0"}}>
            <img src={IMG_AVATAR} alt="Francisco Carlucci" fetchpriority="high" decoding="async" width="395" height="560" style={{width:"280px",height:"auto",objectFit:"contain",marginBottom:"-30px",position:"relative",zIndex:2}}/>
            <div className="hero-stats" style={{position:"relative",zIndex:1,width:"100%"}}>
              <div className="stat-card" style={{flex:"0 0 auto",minWidth:"110px"}}><div className="stat-num">+10</div><div className="stat-label">{t.hero.statYears}</div></div>
              <div className="stat-card ai-stack-card" style={{flex:1}}>
                <div className="stat-label" style={{marginBottom:"0.6rem",fontWeight:600,color:"rgba(255,255,255,0.9)"}}>{t.hero.aiStack}</div>
                <div className="ai-stack-row">
                  {["ChatGPT","Gemini","Claude","Copilot","Firefly","Suno","Eleven Labs","HeyGen"].map(tool=>
                    <span className="ai-pill" key={tool}>{tool}</span>
                  )}
                </div>
              </div>
            </div>
            <div style={{marginTop:"1.5rem",background:"rgba(255,255,255,0.06)",borderRadius:"20px",padding:"1.5rem",border:"1px solid rgba(255,255,255,0.1)"}}>
              <p style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.6)",fontWeight:300,lineHeight:1.7,fontStyle:"italic"}}>
                {t.hero.quote}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="portfolio" style={{background:"#FAFAF7"}}>
        <div className="section-inner">
          <span className="section-label">{t.portfolio.label}</span>
          <h2 className="section-title syne">{t.portfolio.titlePre}<em>{t.portfolio.titleEm}</em></h2>
          <div className="cases-grid">
            {cases.map((c) => (
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
                  <button type="button" className="case-link" aria-label={`${t.portfolio.readCaseAria}: ${c.title}`} onClick={(e) => { e.stopPropagation(); setPage(c.id); }}>{t.portfolio.readCase} <ArrowRight/></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="linkedin-section">
        <div className="section-inner">
          <span className="section-label" style={{color:"rgba(255,255,255,0.75)"}}>{t.linkedin.label}</span>
          <h2 className="section-title syne">{t.linkedin.titlePre}<em style={{color:"#F5A623"}}>{t.linkedin.titleEm}</em></h2>
          <div className="linkedin-grid">
            <div className="linkedin-card">
              <div className="li-visual li1" aria-hidden="true">🍊</div>
              <h3>{t.linkedin.cards[0].title}</h3>
              <p>{t.linkedin.cards[0].desc}</p>
              <a href="https://www.linkedin.com/posts/franciscocarlucci_ia-tecnologaeda-vaednculoshumanos-ugcPost-7369285686132219905-jf4a" target="_blank" rel="noreferrer" className="li-link">{t.linkedin.viewPost}</a>
            </div>
            <div className="linkedin-card">
              <div className="li-visual li2" aria-hidden="true">💬</div>
              <h3>{t.linkedin.cards[1].title}</h3>
              <p>{t.linkedin.cards[1].desc}</p>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7394707279264018432" target="_blank" rel="noreferrer" className="li-link">{t.linkedin.viewPost}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" style={{background:"#fff"}}>
        <div className="section-inner">
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title syne">{t.about.titlePre}<br/><em>{t.about.titleEm}</em></h2>
          <div className="about-grid">
            <div className="about-text">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <div className="skills-list">
                {t.about.skills.map(s=><span className="skill-chip" key={s}>{s}</span>)}
              </div>
            </div>
            <div className="about-card">
              <h3 className="syne">{t.about.timelineTitle}</h3>
              {t.about.timeline.map((item,i)=>(
                <div className="timeline-item" key={i}>
                  <div className="tl-dot"/>
                  <div><div className="tl-year">{item.y}</div><div className="tl-title">{item.t}</div><div className="tl-sub">{item.s}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <div className="contact-inner">
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title syne">{t.contact.title}</h2>
          <p>{t.contact.desc}</p>
          <div className="contact-links">
            <a href="mailto:fjcarlucci.mkt@gmail.com" className="contact-link" aria-label={t.contact.ariaEmail}>✉️ fjcarlucci.mkt@gmail.com</a>
            <a href="tel:+34615445794" className="contact-link" aria-label={t.contact.ariaPhone}>📞 +34 615 445 794</a>
            <a href="https://www.linkedin.com/in/franciscocarlucci" target="_blank" rel="noreferrer" className="contact-link" aria-label={t.contact.ariaLinkedin}>💼 LinkedIn</a>
          </div>
        </div>
      </section>
      </main>

      <Footer/>
    </>
  );
}
