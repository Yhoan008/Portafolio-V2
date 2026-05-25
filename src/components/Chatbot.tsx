import { useState, useEffect } from "react";
import { DeepChat } from "deep-chat-react";
import comportamiento from "./comportamiento.ts";

function CharacterSVG({
  size = 40,
  waving = false,
}: {
  size?: number;
  waving?: boolean;
}) {
  return (
    <div
      className={waving ? "animate-float-y" : ""}
      style={{ width: size, height: size, lineHeight: 0 }}
    >
      <svg width={size} height={size} viewBox="0 0 120 120">
        <defs>
          <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bb82ff" />
            <stop offset="100%" stopColor="#1bc3ff" />
          </linearGradient>

          {/* Animación CSS para la antena */}
          <style>{`
        @keyframes antenaGiro {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
          100% { transform: rotate(0deg); }
        }
        .animar-antena {
          animation: antenaGiro 2s ease-in-out infinite;
          transform-origin: 60px 30px; /* Punto de pivote en la base de la antena */
        }
      `}</style>
        </defs>

        {/* --- LA ANTENA (Con clase de animación) --- */}
        <g className="animar-antena">
          {/* Palo de la antena */}
          <line
            x1="60"
            y1="30"
            x2="60"
            y2="12"
            stroke="url(#avatarGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Bolita de la antena */}
          <circle cx="60" cy="10" r="5" fill="#1bc3ff" />
        </g>

        {/* --- CUERPO / DETALLES DEL ROBOT --- */}
        {/* Oreja Izquierda */}
        <rect x="12" y="55" width="8" height="16" rx="3" fill="#bb82ff" />
        {/* Oreja Derecha */}
        <rect x="100" y="55" width="8" height="16" rx="3" fill="#1bc3ff" />

        {/* Cabeza del Robot (Rectángulo redondeado en lugar de círculo) */}
        <rect
          x="18"
          y="28"
          width="84"
          height="70"
          rx="18"
          fill="url(#avatarGrad)"
        />

        {/* --- CARA --- */}
        {/* Ojo Izquierdo */}
        <circle cx="44" cy="58" r="5" fill="white" />
        {/* Ojo Derecha */}
        <circle cx="76" cy="58" r="5" fill="white" />

        {/* Boca (Línea digital estilo robot) */}
        <path
          d="M 40 78 L 80 78"
          stroke="white"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCTA, setShowCTA] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowCTA(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  function toggleChat() {
    setIsOpen((prev) => !prev);
    setShowCTA(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showCTA && !isOpen && (
        <div className="relative animate-cta-in  ">
          <div className="whitespace-nowrap rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/85 backdrop-blur-md">
            ¡Hola! Soy YhoBot, pregúntame lo que quieras 👋
          </div>
          <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-white/10 bg-white/5" />
        </div>
      )}

      {isOpen && (
        <div className="flex h-120 w-95 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e2b]/95 shadow-2xl shadow-black/30 backdrop-blur-2xl max-sm:h-[80vh] max-sm:w-[calc(100vw-48px)]">
          <div className="flex shrink-0 items-center gap-3 border-b border-white/10 px-4 py-3">
            <CharacterSVG size={36} waving />
            <div className="flex-1  ">
              <p className="text-sm font-medium text-white/90">YhoBot</p>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#00c9ff] shadow-[0_0_6px_rgba(0,201,255,0.6)]" />
                <span className="text-xs text-white/55">En línea</span>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/55 transition-colors hover:bg-white/10 hover:text-white/90"
              aria-label="Cerrar chat"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="min-h-0 flex-1">
            <DeepChat
              directConnection={{
                gemini: {
                  key: import.meta.env.VITE_API_GEMINI,
                  system_prompt: comportamiento,
                },
              }}
              chatStyle={{
                backgroundColor: "transparent",
                height: "100%",
                width: "100%",
                borderRadius: "0",
                display: "block",
                border: "2px solid transparent",
              }}
              inputAreaStyle={{
                backgroundColor: "transparent",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                padding: "12px",
              }}
              textInput={{
                styles: {
                  container: {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "8px 12px",
                  },
                  text: {
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "14px",
                    fontFamily: "inherit",
                  },
                  focus: {
                    border: "1px solid rgba(255,255,255,0.25)",
                  },
                },
                placeholder: {
                  text: "Escribe un mensaje...",
                  style: {
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "inherit",
                  },
                },
              }}
              submitButtonStyles={{
                submit: {
                  container: {
                    default: {
                      background: "linear-gradient(135deg, #bb82ff, #1bc3ff)",
                      borderRadius: "50%",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      border: "none",
                    },
                    hover: { transform: "scale(1.05)" },
                    click: { transform: "scale(0.95)" },
                  },
                  svg: {
                    styles: { default: { color: "black" } },
                  },
                },
                disabled: {
                  container: { default: { cursor: "default" } },
                },
                alwaysEnabled: true,
              }}
              messageStyles={{
                default: {
                  shared: {
                    outerContainer: { marginBottom: "4px" },
                    bubble: {
                      borderRadius: "16px",
                      padding: "10px 16px",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      maxWidth: "85%",
                      wordBreak: "break-word",
                    },
                  },
                  ai: {
                    bubble: {
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.85)",
                      borderTopLeftRadius: "4px",
                    },
                  },
                  user: {
                    bubble: {
                      background: "linear-gradient(135deg, #bb82ff, #1bc3ff)",
                      border: "none",
                      color: "black",
                      borderBottomRightRadius: "4px",
                    },
                  },
                },
              }}
              avatars={{
                ai: { styles: { container: { display: "none" } } },
                user: { styles: { container: { display: "none" } } },
              }}
              names={{
                ai: {
                  text: "YhoBot",
                  style: {
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "13px",
                    fontWeight: "500",
                  },
                  position: "start",
                },
                user: {
                  text: "Tú",
                  style: { color: "rgba(255,255,255,0.55)", fontSize: "13px" },
                  position: "end",
                },
              }}
              introMessage={{
                text: "¡Hola! Soy YhoBot 🤖\n\nSoy el asistente virtual de Yhoan. Puedes preguntarme sobre sus proyectos, servicios, o cualquier cosa relacionada con su trabajo.",
              }}
              auxiliaryStyle={`
                deep-chat-message { padding: 4px 16px !important; }
                deep-chat-message[role="user"] { justify-content: flex-end !important; }
                deep-chat-message[role="ai"] { justify-content: flex-start !important; }
                ::-webkit-scrollbar { width: 4px !important; }
                ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1) !important; border-radius: 999px !important; }
                ::-webkit-scrollbar-track { background: transparent !important; }
              `}
            />
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:scale-110 active:scale-95 ${!isOpen && showCTA ? "animate-cta-pulse" : ""}`}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
        {isOpen ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-white/85"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <CharacterSVG size={36} waving={showCTA} />
        )}
      </button>
    </div>
  );
}
