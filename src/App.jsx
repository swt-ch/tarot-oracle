import { useState } from "react";

const TAROT_CARDS = {
  en: [
    { name: "The Fool", emoji: "🌟", keywords: "New beginnings, freedom, adventure" },
    { name: "The Magician", emoji: "🪄", keywords: "Willpower, skill, manifestation" },
    { name: "The High Priestess", emoji: "🌙", keywords: "Intuition, mystery, inner wisdom" },
    { name: "The Empress", emoji: "🌸", keywords: "Abundance, nurturing, nature" },
    { name: "The Emperor", emoji: "👑", keywords: "Authority, structure, stability" },
    { name: "The Hierophant", emoji: "🕊️", keywords: "Tradition, faith, guidance" },
    { name: "The Lovers", emoji: "💞", keywords: "Love, choice, connection" },
    { name: "The Chariot", emoji: "⚡", keywords: "Willpower, victory, control" },
    { name: "Strength", emoji: "🦁", keywords: "Courage, patience, inner strength" },
    { name: "The Hermit", emoji: "🕯️", keywords: "Introspection, solitude, seeking" },
    { name: "Wheel of Fortune", emoji: "☯️", keywords: "Fate, change, cycles" },
    { name: "Justice", emoji: "⚖️", keywords: "Fairness, truth, cause & effect" },
    { name: "The Hanged Man", emoji: "🌊", keywords: "Pause, surrender, new perspective" },
    { name: "Death", emoji: "🍂", keywords: "Endings, transformation, transition" },
    { name: "Temperance", emoji: "✨", keywords: "Balance, patience, harmony" },
    { name: "The Devil", emoji: "🔗", keywords: "Bondage, obsession, shadow self" },
    { name: "The Tower", emoji: "🌩️", keywords: "Upheaval, chaos, revelation" },
    { name: "The Star", emoji: "⭐", keywords: "Hope, renewal, inspiration" },
    { name: "The Moon", emoji: "🌕", keywords: "Illusion, fear, the subconscious" },
    { name: "The Sun", emoji: "☀️", keywords: "Joy, success, vitality" },
    { name: "Judgement", emoji: "🔔", keywords: "Awakening, redemption, calling" },
    { name: "The World", emoji: "🌍", keywords: "Completion, integration, achievement" },
  ],
  fr: [
    { name: "Le Mat", emoji: "🌟", keywords: "Nouveaux débuts, liberté, aventure" },
    { name: "Le Bateleur", emoji: "🪄", keywords: "Volonté, habileté, manifestation" },
    { name: "La Papesse", emoji: "🌙", keywords: "Intuition, mystère, sagesse intérieure" },
    { name: "L'Impératrice", emoji: "🌸", keywords: "Abondance, bienveillance, nature" },
    { name: "L'Empereur", emoji: "👑", keywords: "Autorité, structure, stabilité" },
    { name: "Le Pape", emoji: "🕊️", keywords: "Tradition, foi, guidance" },
    { name: "Les Amoureux", emoji: "💞", keywords: "Amour, choix, connexion" },
    { name: "Le Chariot", emoji: "⚡", keywords: "Volonté, victoire, maîtrise" },
    { name: "La Force", emoji: "🦁", keywords: "Courage, patience, force intérieure" },
    { name: "L'Hermite", emoji: "🕯️", keywords: "Introspection, solitude, quête" },
    { name: "La Roue de Fortune", emoji: "☯️", keywords: "Destin, changement, cycles" },
    { name: "La Justice", emoji: "⚖️", keywords: "Équité, vérité, cause & effet" },
    { name: "Le Pendu", emoji: "🌊", keywords: "Pause, lâcher-prise, nouvelle perspective" },
    { name: "La Mort", emoji: "🍂", keywords: "Fin, transformation, transition" },
    { name: "La Tempérance", emoji: "✨", keywords: "Équilibre, patience, harmonie" },
    { name: "Le Diable", emoji: "🔗", keywords: "Attachement, obsession, ombre" },
    { name: "La Maison-Dieu", emoji: "🌩️", keywords: "Bouleversement, chaos, révélation" },
    { name: "L'Étoile", emoji: "⭐", keywords: "Espoir, renouveau, inspiration" },
    { name: "La Lune", emoji: "🌕", keywords: "Illusion, peur, inconscient" },
    { name: "Le Soleil", emoji: "☀️", keywords: "Joie, succès, vitalité" },
    { name: "Le Jugement", emoji: "🔔", keywords: "Éveil, rédemption, appel" },
    { name: "Le Monde", emoji: "🌍", keywords: "Accomplissement, intégration, achèvement" },
  ],
  zh: [
    { name: "愚者", emoji: "🌟", keywords: "新开始、自由、冒险" },
    { name: "魔术师", emoji: "🪄", keywords: "意志、技能、创造力" },
    { name: "女祭司", emoji: "🌙", keywords: "直觉、神秘、内在智慧" },
    { name: "皇后", emoji: "🌸", keywords: "丰盛、母性、自然" },
    { name: "皇帝", emoji: "👑", keywords: "权威、结构、稳定" },
    { name: "教皇", emoji: "🕊️", keywords: "传统、信仰、指引" },
    { name: "恋人", emoji: "💞", keywords: "爱、选择、联结" },
    { name: "战车", emoji: "⚡", keywords: "意志、胜利、控制" },
    { name: "力量", emoji: "🦁", keywords: "勇气、耐心、内在力量" },
    { name: "隐者", emoji: "🕯️", keywords: "内省、寻求、孤独" },
    { name: "命运之轮", emoji: "☯️", keywords: "命运、转变、循环" },
    { name: "正义", emoji: "⚖️", keywords: "公平、真相、因果" },
    { name: "吊人", emoji: "🌊", keywords: "暂停、牺牲、新视角" },
    { name: "死神", emoji: "🍂", keywords: "结束、转变、蜕变" },
    { name: "节制", emoji: "✨", keywords: "平衡、耐心、调和" },
    { name: "恶魔", emoji: "🔗", keywords: "束缚、执念、阴影" },
    { name: "塔", emoji: "🌩️", keywords: "突变、混乱、觉醒" },
    { name: "星星", emoji: "⭐", keywords: "希望、更新、灵感" },
    { name: "月亮", emoji: "🌕", keywords: "幻象、恐惧、潜意识" },
    { name: "太阳", emoji: "☀️", keywords: "喜悦、成功、活力" },
    { name: "审判", emoji: "🔔", keywords: "觉醒、救赎、召唤" },
    { name: "世界", emoji: "🌍", keywords: "完成、整合、成就" },
  ],
};

const UI = {
  en: {
    langLabel: "ARCANA ORACLE",
    title: "Tarot Reading",
    subtitle: "The stars are aligned, the cosmos listens.\nBring forth the question that stirs your soul,\nand let the cards reveal what lies ahead.",
    begin: "Begin Reading",
    questionLabel: "YOUR QUESTION",
    questionPlaceholder: "Focus your mind and write your question here…\ne.g. What does the future hold for my career?",
    back: "Back",
    chooseSpread: "Choose Spread →",
    choosingSpread: "CHOOSE YOUR SPREAD",
    spreads: [
      { id: "one", label: "Single Card", desc: "Daily guidance", count: 1 },
      { id: "three", label: "Three Card Spread", desc: "Past · Present · Future", count: 3 },
      { id: "five", label: "Five Card Spread", desc: "Full situation overview", count: 5 },
    ],
    positions: {
      one: ["The Present"],
      three: ["Past", "Present", "Future"],
      five: ["Situation", "Challenge", "Subconscious", "Advice", "Outcome"],
    },
    reversed: "REVERSED",
    readingLabel: "✦ YOUR READING ✦",
    loading: "The stars are aligning…",
    newReading: "✦ New Reading ✦",
    silentStars: "The stars are silent for now. Please try again.",
    promptLang: "English",
  },
  fr: {
    langLabel: "ARCANA ORACLE",
    title: "Tirage de Tarot",
    subtitle: "Les étoiles sont alignées, le cosmos vous écoute.\nConfiez la question qui habite votre âme,\net laissez les cartes révéler ce qui vous attend.",
    begin: "Commencer le Tirage",
    questionLabel: "VOTRE QUESTION",
    questionPlaceholder: "Concentrez-vous et écrivez votre question ici…\nEx : Que me réserve l'avenir sur le plan professionnel ?",
    back: "Retour",
    chooseSpread: "Choisir un Tirage →",
    choosingSpread: "CHOISISSEZ VOTRE TIRAGE",
    spreads: [
      { id: "one", label: "Carte Unique", desc: "Guidance du jour", count: 1 },
      { id: "three", label: "Tirage en Trois", desc: "Passé · Présent · Futur", count: 3 },
      { id: "five", label: "Tirage en Cinq", desc: "Vue d'ensemble complète", count: 5 },
    ],
    positions: {
      one: ["Le Présent"],
      three: ["Passé", "Présent", "Futur"],
      five: ["Situation", "Défi", "Inconscient", "Conseil", "Résultat"],
    },
    reversed: "RENVERSÉ",
    readingLabel: "✦ VOTRE TIRAGE ✦",
    loading: "Les étoiles s'alignent…",
    newReading: "✦ Nouveau Tirage ✦",
    silentStars: "Les étoiles sont silencieuses. Veuillez réessayer.",
    promptLang: "French",
  },
  zh: {
    langLabel: "神秘占卜",
    title: "塔罗占卜",
    subtitle: "星辰排列，命运低语。\n带着你心中的问题，\n让塔罗为你揭示答案。",
    begin: "开始占卜",
    questionLabel: "你的问题",
    questionPlaceholder: "在心中凝聚你的问题，然后写下来…\n例如：我的感情会有怎样的发展？",
    back: "返回",
    chooseSpread: "选择牌阵 →",
    choosingSpread: "选择牌阵",
    spreads: [
      { id: "one", label: "单张牌", desc: "今日指引", count: 1 },
      { id: "three", label: "三张牌", desc: "过去·现在·未来", count: 3 },
      { id: "five", label: "五张牌", desc: "全方位解读", count: 5 },
    ],
    positions: {
      one: ["当下"],
      three: ["过去", "现在", "未来"],
      five: ["现状", "挑战", "潜意识", "建议", "结果"],
    },
    reversed: "逆位",
    readingLabel: "✦ 塔罗解读 ✦",
    loading: "星光正在汇聚…",
    newReading: "✦ 再次占卜 ✦",
    silentStars: "星光暂时沉寂，请稍后再试。",
    promptLang: "Chinese",
  },
};

const LANGUAGES = [
  { code: "en", label: "English", sub: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", sub: "French", flag: "🇫🇷" },
  { code: "zh", label: "中文", sub: "Chinese", flag: "🇨🇳" },
];

function drawCards(lang, count) {
  const cards = TAROT_CARDS[lang];
  const shuffled = [...cards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(card => ({
    ...card,
    reversed: Math.random() > 0.7,
  }));
}

export default function TarotApp() {
  const [lang, setLang] = useState(null);
  const [step, setStep] = useState("lang");
  const [question, setQuestion] = useState("");
  const [spread, setSpread] = useState(null);
  const [cards, setCards] = useState([]);
  const [revealedCards, setRevealedCards] = useState([]);
  const [interpretation, setInterpretation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const t = lang ? UI[lang] : UI.en;

  const selectLang = (code) => {
    setLang(code);
    setStep("intro");
  };

  const startReading = () => {
    if (!question.trim()) return;
    setStep("spread");
  };

  const selectSpread = (s) => {
    setSpread(s);
    setStep("drawing");
    const drawn = drawCards(lang, s.count);
    setCards(drawn);
    setRevealedCards([]);
    drawn.forEach((_, i) => {
      setTimeout(() => {
        setRevealedCards(prev => [...prev, i]);
        if (i === drawn.length - 1) {
          setTimeout(() => getInterpretation(drawn, s), 600);
        }
      }, i * 700 + 400);
    });
  };

  const getInterpretation = async (drawnCards, selectedSpread) => {
    setLoading(true);
    setStep("result");
    setError("");
    const positions = t.spreads.find(s => s.id === selectedSpread.id)
      ? UI[lang].positions[selectedSpread.id]
      : UI.en.positions[selectedSpread.id];

    const cardDesc = drawnCards.map((c, i) =>
      `Position "${positions[i]}": ${c.name} (${c.reversed ? "Reversed" : "Upright"})`
    ).join(", ");

    const prompt = `You are a wise and insightful tarot reader.
The seeker's question is: "${question}"
The cards drawn are: ${cardDesc}
Please provide a thoughtful, poetic, and empowering tarot reading. Requirements:
- Interpret each card in its position
- Weave all cards together into a cohesive narrative
- Speak with warmth and wisdom, like a trusted guide
- Total length: 150-250 words, in clear paragraphs
- Write your response in ${t.promptLang}
- IMPORTANT: Plain text only — no markdown, no headers, no asterisks, no bullet points`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
            "x-api-key": process.env.REACT_APP_ANTHROPIC_KEY || "",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 600,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await response.json();
      if (!response.ok || data.error) {
        setError(data.error?.message || "Request failed");
        setInterpretation(t.silentStars);
      } else {
        setInterpretation(data.content?.map(b => b.text || "").join("").trim());
      }
    } catch (err) {
      setError(err.message);
      setInterpretation(t.silentStars);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setStep("intro");
    setQuestion("");
    setSpread(null);
    setCards([]);
    setRevealedCards([]);
    setInterpretation("");
    setError("");
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0a0015 0%, #0f0025 40%, #050010 100%)",
      color: "#e8d5ff",
      fontFamily: "'Georgia', serif",
      padding: "24px 16px",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Cinzel:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        @keyframes starFloat {
          0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:1;transform:scale(1.3)}
        }
        @keyframes cardReveal {
          from{opacity:0;transform:rotateY(90deg) scale(.8)} to{opacity:1;transform:rotateY(0deg) scale(1)}
        }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)}
        }
        @keyframes shimmer {
          0%{background-position:-200% center} 100%{background-position:200% center}
        }
        @keyframes pulse {
          0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)}
        }
        @keyframes spin {
          from{transform:rotate(0deg)} to{transform:rotate(360deg)}
        }
        @keyframes langFloat {
          0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)}
        }
        .card-reveal{animation:cardReveal .6s ease-out forwards}
        .fade-up{animation:fadeUp .7s ease-out forwards}
        .gold-text{
          background:linear-gradient(135deg,#c9a227,#f5d060,#c9a227);
          background-size:200% auto;
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          animation:shimmer 4s linear infinite;
        }
        .btn-hover{transition:all .25s ease;cursor:pointer}
        .btn-hover:hover{transform:translateY(-2px);filter:brightness(1.15)}
        .btn-hover:active{transform:translateY(0)}
        textarea:focus{outline:none}
        textarea::placeholder{color:rgba(200,170,255,.35);font-style:italic}
        .spread-card{transition:all .25s ease;cursor:pointer}
        .spread-card:hover{transform:translateY(-4px) scale(1.02);border-color:rgba(212,175,55,.4)!important}
        .lang-card{transition:all .3s ease;cursor:pointer}
        .lang-card:hover{transform:translateY(-6px) scale(1.03);border-color:rgba(212,175,55,.5)!important;box-shadow:0 8px 30px rgba(212,175,55,.15)!important}
        .lang-card:active{transform:translateY(-2px)}
      `}</style>

      {/* Stars */}
      {[...Array(30)].map((_, i) => (
        <div key={i} style={{
          position: "fixed", borderRadius: "50%",
          width: i % 5 === 0 ? "3px" : "2px", height: i % 5 === 0 ? "3px" : "2px",
          background: `rgba(${i % 3 === 0 ? "212,175,55" : "200,170,255"},${0.3 + (i % 5) * 0.12})`,
          left: `${(i * 37) % 100}%`, top: `${(i * 23) % 100}%`,
          animation: `starFloat ${3 + (i % 4)}s ease-in-out infinite`,
          animationDelay: `${i * 0.2}s`, pointerEvents: "none",
        }} />
      ))}

      <div style={{ position: "relative", zIndex: 1, maxWidth: "560px", margin: "0 auto" }}>

        {/* LANGUAGE SELECTION */}
        {step === "lang" && (
          <div className="fade-up" style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "48px" }}>
              <div style={{
                fontSize: "11px", letterSpacing: "6px", color: "rgba(212,175,55,0.4)",
                fontFamily: "'Cinzel', serif", marginBottom: "16px",
              }}>ARCANA ORACLE</div>
              <div style={{ fontSize: "52px", marginBottom: "20px", animation: "pulse 3s ease-in-out infinite" }}>🔮</div>
              <div style={{
                width: "60px", height: "1px", margin: "0 auto",
                background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
              }} />
            </div>

            <div style={{
              fontSize: "12px", letterSpacing: "4px", color: "rgba(200,170,255,0.4)",
              fontFamily: "'Cinzel', serif", marginBottom: "28px",
            }}>CHOOSE YOUR LANGUAGE</div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {LANGUAGES.map((l, i) => (
                <div
                  key={l.code}
                  className="lang-card"
                  onClick={() => selectLang(l.code)}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(200,170,255,0.15)",
                    borderRadius: "18px", padding: "22px 28px",
                    display: "flex", alignItems: "center", gap: "20px",
                    animationDelay: `${i * 0.1}s`,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <div style={{ fontSize: "32px" }}>{l.flag}</div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{
                      fontFamily: "'Cinzel', serif", fontSize: "18px",
                      color: "#d4af37", letterSpacing: "1px",
                    }}>{l.label}</div>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: "13px",
                      color: "rgba(200,170,255,0.45)", fontStyle: "italic", marginTop: "2px",
                    }}>{l.sub}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "rgba(212,175,55,0.35)", fontSize: "22px" }}>›</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REST OF APP */}
        {step !== "lang" && (
          <>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{
                fontSize: "11px", letterSpacing: "6px", color: "rgba(212,175,55,0.5)",
                fontFamily: "'Cinzel', serif", marginBottom: "8px",
              }}>{t.langLabel}</div>
              <h1 className="gold-text" style={{
                fontFamily: "'Cinzel', serif", fontSize: "clamp(26px, 7vw, 40px)",
                margin: 0, fontWeight: 500, letterSpacing: "3px",
              }}>{t.title}</h1>
              <div style={{
                width: "80px", height: "1px", margin: "14px auto 0",
                background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
              }} />
              {/* Language switcher */}
              <button onClick={() => { setStep("lang"); setLang(null); }} style={{
                marginTop: "12px", background: "none", border: "none",
                color: "rgba(200,170,255,0.3)", fontSize: "11px",
                letterSpacing: "2px", fontFamily: "'Cinzel', serif",
                cursor: "pointer", transition: "color .2s",
              }}
                onMouseOver={e => e.target.style.color = "rgba(212,175,55,0.6)"}
                onMouseOut={e => e.target.style.color = "rgba(200,170,255,0.3)"}
              >
                {LANGUAGES.find(l => l.code === lang)?.flag} {LANGUAGES.find(l => l.code === lang)?.label} ↩
              </button>
            </div>

            {/* INTRO */}
            {step === "intro" && (
              <div className="fade-up" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "64px", marginBottom: "24px", animation: "pulse 3s ease-in-out infinite" }}>🔮</div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: "19px",
                  color: "rgba(220,200,255,0.8)", lineHeight: 1.9, marginBottom: "36px",
                  fontStyle: "italic", whiteSpace: "pre-line",
                }}>{t.subtitle}</p>
                <button className="btn-hover" onClick={() => setStep("question")} style={{
                  padding: "14px 44px",
                  background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.08))",
                  border: "1px solid rgba(212,175,55,0.4)", borderRadius: "40px",
                  color: "#d4af37", fontSize: "13px", letterSpacing: "3px",
                  fontFamily: "'Cinzel', serif",
                }}>{t.begin}</button>
              </div>
            )}

            {/* QUESTION */}
            {step === "question" && (
              <div className="fade-up">
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(200,170,255,0.15)",
                  borderRadius: "20px", padding: "32px 28px",
                }}>
                  <div style={{
                    fontSize: "11px", letterSpacing: "4px", color: "rgba(200,170,255,0.5)",
                    fontFamily: "'Cinzel', serif", marginBottom: "16px", textAlign: "center",
                  }}>{t.questionLabel}</div>
                  <textarea
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    placeholder={t.questionPlaceholder}
                    rows={4}
                    style={{
                      width: "100%", background: "rgba(200,170,255,0.04)",
                      border: "1px solid rgba(200,170,255,0.15)",
                      borderRadius: "12px", padding: "16px",
                      color: "rgba(230,210,255,0.9)", fontSize: "16px",
                      fontFamily: "'Cormorant Garamond', serif",
                      resize: "none", lineHeight: 1.7,
                    }}
                  />
                  <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                    <button className="btn-hover" onClick={() => setStep("intro")} style={{
                      flex: 1, padding: "12px", background: "transparent",
                      border: "1px solid rgba(200,170,255,0.2)", borderRadius: "12px",
                      color: "rgba(200,170,255,0.5)", fontSize: "13px", fontFamily: "'Cinzel', serif",
                    }}>{t.back}</button>
                    <button className="btn-hover" onClick={startReading} disabled={!question.trim()} style={{
                      flex: 2, padding: "12px",
                      background: question.trim() ? "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.1))" : "transparent",
                      border: `1px solid rgba(212,175,55,${question.trim() ? 0.5 : 0.2})`,
                      borderRadius: "12px",
                      color: question.trim() ? "#d4af37" : "rgba(212,175,55,0.3)",
                      fontSize: "13px", letterSpacing: "2px", fontFamily: "'Cinzel', serif",
                    }}>{t.chooseSpread}</button>
                  </div>
                </div>
              </div>
            )}

            {/* SPREAD */}
            {step === "spread" && (
              <div className="fade-up">
                <div style={{
                  fontSize: "11px", letterSpacing: "4px", color: "rgba(200,170,255,0.5)",
                  fontFamily: "'Cinzel', serif", marginBottom: "20px", textAlign: "center",
                }}>{t.choosingSpread}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {t.spreads.map(s => (
                    <div key={s.id} className="spread-card" onClick={() => selectSpread(s)} style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(200,170,255,0.15)",
                      borderRadius: "16px", padding: "20px 24px",
                      display: "flex", alignItems: "center", gap: "16px",
                    }}>
                      <div style={{
                        width: "48px", height: "48px", borderRadius: "50%",
                        background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "20px", flexShrink: 0,
                      }}>🃏</div>
                      <div>
                        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "15px", color: "#d4af37", marginBottom: "4px" }}>{s.label}</div>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: "rgba(200,170,255,0.6)", fontStyle: "italic" }}>{s.desc}</div>
                      </div>
                      <div style={{ marginLeft: "auto", color: "rgba(212,175,55,0.4)", fontSize: "20px" }}>›</div>
                    </div>
                  ))}
                </div>
                <button className="btn-hover" onClick={() => setStep("question")} style={{
                  width: "100%", marginTop: "16px", padding: "12px",
                  background: "transparent", border: "1px solid rgba(200,170,255,0.15)",
                  borderRadius: "12px", color: "rgba(200,170,255,0.4)",
                  fontSize: "13px", fontFamily: "'Cinzel', serif",
                }}>← {t.back}</button>
              </div>
            )}

            {/* DRAWING & RESULT */}
            {(step === "drawing" || step === "result") && (
              <div>
                <div style={{
                  display: "flex", gap: "10px", justifyContent: "center",
                  flexWrap: "wrap", marginBottom: "28px",
                }}>
                  {cards.map((card, i) => {
                    const isRevealed = revealedCards.includes(i);
                    const positions = UI[lang].positions[spread.id];
                    return (
                      <div key={i} style={{ textAlign: "center", flex: "1 1 90px", maxWidth: "120px" }}>
                        <div style={{
                          fontSize: "9px", letterSpacing: "2px", color: "rgba(200,170,255,0.4)",
                          fontFamily: "'Cinzel', serif", marginBottom: "8px", textTransform: "uppercase",
                        }}>{positions[i]}</div>
                        <div className={isRevealed ? "card-reveal" : ""} style={{
                          opacity: isRevealed ? 1 : 0,
                          background: isRevealed ? "linear-gradient(145deg, #1a0a2e, #0d0520)" : "rgba(255,255,255,0.03)",
                          border: `1px solid rgba(${card.reversed ? "200,100,100" : "212,175,55"},0.35)`,
                          borderRadius: "12px", padding: "16px 8px", minHeight: "130px",
                          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px",
                          transform: card.reversed ? "rotate(180deg)" : "none",
                          boxShadow: isRevealed ? `0 0 20px rgba(${card.reversed ? "200,100,100" : "212,175,55"},0.1)` : "none",
                        }}>
                          <div style={{ fontSize: "26px" }}>{card.emoji}</div>
                          <div style={{
                            fontFamily: "'Cinzel', serif", fontSize: "10px",
                            color: card.reversed ? "rgba(255,150,150,0.9)" : "#d4af37",
                            textAlign: "center", lineHeight: 1.3,
                          }}>{card.name}</div>
                          {card.reversed && (
                            <div style={{ fontSize: "8px", color: "rgba(255,150,150,0.6)", letterSpacing: "1px" }}>{t.reversed}</div>
                          )}
                        </div>
                        {isRevealed && (
                          <div style={{
                            marginTop: "8px", fontSize: "9px", color: "rgba(200,170,255,0.45)",
                            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", lineHeight: 1.4,
                          }}>{card.keywords}</div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {step === "result" && (
                  <div className="fade-up" style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(200,170,255,0.15)",
                    borderRadius: "20px", padding: "28px 24px",
                  }}>
                    <div style={{
                      fontSize: "11px", letterSpacing: "4px", color: "rgba(212,175,55,0.5)",
                      fontFamily: "'Cinzel', serif", marginBottom: "16px", textAlign: "center",
                    }}>{t.readingLabel}</div>
                    {loading ? (
                      <div style={{ textAlign: "center", padding: "24px" }}>
                        <div style={{
                          width: "32px", height: "32px",
                          border: "2px solid rgba(212,175,55,0.2)", borderTop: "2px solid #d4af37",
                          borderRadius: "50%", margin: "0 auto 16px", animation: "spin 1s linear infinite",
                        }} />
                        <div style={{
                          fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                          color: "rgba(200,170,255,0.6)", fontSize: "15px",
                        }}>{t.loading}</div>
                      </div>
                    ) : (
                      <>
                        <div style={{
                          fontFamily: "'Cormorant Garamond', serif", fontSize: "16px",
                          color: "rgba(230,210,255,0.85)", lineHeight: 1.9, whiteSpace: "pre-wrap",
                        }}>{interpretation}</div>
                        {error && (
                          <div style={{
                            marginTop: "12px", fontSize: "11px", color: "rgba(255,120,120,0.6)",
                            fontFamily: "monospace", padding: "8px",
                            background: "rgba(255,0,0,0.05)", borderRadius: "6px",
                          }}>{error}</div>
                        )}
                      </>
                    )}
                  </div>
                )}

                {step === "result" && !loading && (
                  <button className="btn-hover" onClick={reset} style={{
                    width: "100%", marginTop: "20px", padding: "14px",
                    background: "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.06))",
                    border: "1px solid rgba(212,175,55,0.3)", borderRadius: "40px",
                    color: "#d4af37", fontSize: "13px", letterSpacing: "3px",
                    fontFamily: "'Cinzel', serif",
                  }}>{t.newReading}</button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
