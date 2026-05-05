// ═══════════════════════════════════════════════════════════
//  my little corner of the internet ✦
// ═══════════════════════════════════════════════════════════

import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────
//  CONTENT
// ─────────────────────────────────────────────────────────
const ME = {
  name: "gabriela",
  tagline: "cs and bba student · crafter · cozy game enthusiast",
  intro: "i make things with code and thread. i like understanding how stuff works and how it feels. this is my little internet home.",

  // the "right now" strip at the top
  now: {
    feeling: "somewhere between inspired and overwhelmed, mostly in a good way",
    listening: "jovem dionisio on loop",
    playing: "stardew valley (year 7, perfect farm!)",
    reading: "the psychology of dexter — been obsessed lately",
    making: "a mario magnet set!",
  },

  // songs + a small note on why each matters
  music: [
    { title: "Último Romance", artist: "Los Hermanos", note: "touches my heart in a special way" },
    { title: "Lilás", artist: "Terno Rei", note: "actually listening to it while typing this" },
    { title: "Ontem", artist: "Jovem Dionisio", note: "discovered it from tiktok and been obsessed ever since" },
    { title: "Duro Igual Concreto", artist: "1Kilo", note: "singin' with my eyes closed" },
    { title: "Lisboa", artist: "ANAVITÓRIA and Lenine", note: "can't contain my tears every single time" },
    { title: "Sparks", artist: "Coldplay", note: "surprisingly the only international one" },
  ],

  // crafts, little projects, things i'm making physically or digitally
  making: [
    { title: "mario magnet set",               type: "cross-stitch", done: false, note: "saw on Pinterest and fell in love with it" },
    { title: "star wars magnet set",           type: "cross-stitch", done: true, note: "a gift for a friend" },
    { title: "supermarket pricing dashboard",  type: "code",         done: false,  note: "almost done i hope" },
    { title: "this website",                   type: "code",         done: false, note: "always in progress" },
  ],

  // games i return to, with an honest note
  games: [
    { name: "Stardew Valley",    emoji: "🌾", note: "my brain's default rest mode" },
    { name: "Minecraft",         emoji: "🧱", note: "really just love doing way too big projects for hours on end" },
    { name: "The Sims 2",        emoji: "🏠", note: "a way of calming my controlling needs" },
  ],

  // books — status: "read" | "reading" | "want"
  books: [
    { title: "The Enigma of Room 622",       author: "Joël Dicker",          status: "read",       note: "i'm very obsessed with this author" },
    { title: "A Little Life",                author: "Hanya Yanagihara",     status: "want",       note: "been on my list forever" },
    { title: "1984",                         author: "George Orwell",        status: "read",       note: "couldn't stop thinking about it for weeks" },
    { title: "The Psychology of Dexter",     author: "Bella DePaulo",        status: "reading",    note: "trying to learn more about psychology" },
    { title: "The Midnight Library",         author: "Matt Haig",            status: "read",       note: "really struck with me" },
    { title: "The Only One Left",            author: "Riley Sager",          status: "reading",    note: "anxiously waiting for the plot twist" },
  ],

  // code/personal projects — framed as things, not portfolio entries
  projects: [
    {
      name: "supermarket pricing dashboard",
      blurb: "taking basic products directly from the supermarkets' websites and turning into visual and valuable data",
      tags: ["python", "panda", "data"],
      note: "an extension from a random class presentation i did a while ago",
      link: "https://github.com/gabrielajamhour/Supermarket-Pricing-Dashboard",
    },
    {
      name: "my web portfolio",
      blurb: "a more 'me' way of showcasing my work and habilities",
      tags: ["html", "css", "professional"],
      note: "made it because i wanted to display my work in a more interesting way",
      link: "gabrielajamhour.github.io ",
    },
    {
      name: "this site",
      blurb: "my personal homepage. a living document. always being fiddled with.",
      tags: ["react", "personal"],
      note: "you're looking at it",
      link: "#",
    },
  ],

  // things occupying mental space lately
  obsessions: [
    { thing: "the mind of a psychopath", note: "have been watching waaay too much dexter lately" },
    { thing: "tiny handmade objects",    note: "the feeling of holding something of your own creation" },
    { thing: "old personal websites",    note: "when the internet felt like people's actual homes" },
    { thing: "cozy game world-building", note: "the peace of organizing fictional spaces" },
    { thing: "the color green",          note: "not really 'lately', i would say maybe always" },
  ],

  // short things i keep coming back to — beliefs, reminders, notes to self
  notes: [
    "in the right eyes you will be art",
    "time will pass no matter how you spend it",
    "only put energy into what feels right, and then things will align",
    "it's okay to build things just for yourself",
    "don't lose this moment searching for another",
    "but we cannot simply sit and stare at out wounds forever",
  ],

  // guestbook entries (static — you can make this dynamic later with a backend)
  guestbook: [
    //{ name: "",          msg: "",                date: "may 2026" },
  ],

  // links out — your other internet homes
  links: [
    { label: "github",     emoji: "🐙",  url: "https://github.com/gabrielajamhour" },
    { label: "spotify",    emoji: "🎵",  url: "https://open.spotify.com/user/gabijamhour?si=4a0ef5477aff4d9e" },
    { label: "skoob",      emoji: "📚",  url: "https://skoob.com.br/profile/6919915-gabi" },
    { label: "are.na",     emoji: "🗂️",  url: "#" },
    { label: "instagram",  emoji: "📸",  url: "https://www.instagram.com/gabijamhour?igsh=MTlydXl0Ymt5aWl2bw%3D%3D&utm_source=qr" },
  ],
};


// ─────────────────────────────────────────────────────────
//  DESIGN TOKENS — tweak colors and fonts here
// ─────────────────────────────────────────────────────────
const C = {
  bg:             "#F8F4EE",   // warm cream page background
  paper:          "#FFFEFB",   // card / surface white
  ink:            "#2B2520",   // near-black text
  muted:          "#7C7570",   // secondary text
  faint:          "#CDC8C1",   // borders, dividers
  tagBg:          "#EDEBE5",   // tag pill background
  // accent palette — one per "mood zone"
  green:          "#7DAF8B",
  greenSoft:      "#E6F2EB",
  rose:           "#D9889A",
  roseSoft:       "#FBEFF2",
  yellow:         "#E8C86A",
  yellowSoft:     "#FEF7E0",
  lavender:       "#A89CC8",
  lavenderSoft:   "#F0EEF9",
  sky:            "#87B8D0",
  skySoft:        "#EAF3F8",
  sage:           "#8FAF9A",
  sageSoft:       "#E8F0EB",
};

// font stack names — map to Google Fonts loaded in useEffect
const F = {
  display: "'Fraunces', Georgia, serif",           // warm serif for headings
  body:    "'Nunito', system-ui, sans-serif",      // rounded, friendly body
  hand:    "'Caveat', 'Comic Sans MS', cursive",   // handwritten feel for notes
  mono:    "'JetBrains Mono', monospace",          // tiny metadata labels
};


// ─────────────────────────────────────────────────────────
//  BASE COMPONENTS
// ─────────────────────────────────────────────────────────

// Paper card — the basic card container
const Card = ({ children, style = {} }) => (
  <div style={{
    background: C.paper,
    border: `1.5px solid ${C.faint}`,
    borderRadius: 14,
    padding: "20px 22px",
    ...style,
  }}>
    {children}
  </div>
);

// Sticky note — pastel card, slightly rotated, for crafty sections
const Sticky = ({ children, color, border, rotate = 0, style = {} }) => (
  <div style={{
    background: color,
    border: `1.5px solid ${border}`,
    borderRadius: 10,
    padding: "14px 16px",
    transform: `rotate(${rotate}deg)`,
    ...style,
  }}>
    {children}
  </div>
);

// Small tag pill
const Tag = ({ label }) => (
  <span style={{
    fontFamily: F.mono,
    fontSize: "0.6rem",
    letterSpacing: "0.06em",
    background: C.tagBg,
    color: C.muted,
    padding: "2px 8px",
    borderRadius: 10,
    display: "inline-block",
    whiteSpace: "nowrap",
  }}>
    {label}
  </span>
);

// Section header with an emoji and optional handwritten subtitle
const SHead = ({ icon, title, sub }) => (
  <div style={{ marginBottom: "1.4rem", textAlign: "center" }}>
    <div style={{ fontSize: 22, lineHeight: 1, marginBottom: 6 }}>{icon}</div>
    <h2 style={{
      fontFamily: F.display,
      fontSize: "1.55rem",
      fontWeight: 600,
      color: C.ink,
      margin: 0,
      lineHeight: 1.15,
    }}>
      {title}
    </h2>
    {sub && (
      <p style={{
        fontFamily: F.hand,
        fontSize: "1rem",
        color: C.muted,
        margin: "4px 0 0",
      }}>
        {sub}
      </p>
    )}
  </div>
);

// A thin dashed horizontal rule between sections
const Divider = () => (
  <hr style={{
    border: "none",
    borderTop: `1.5px dashed ${C.faint}`,
    margin: "3rem 0",
  }} />
);


// ─────────────────────────────────────────────────────────
//  SECTIONS
// ─────────────────────────────────────────────────────────

// ── header / hero ────────────────────────────────────────
function Hero() {
  return (
    <header style={{ padding: "2rem 0 1.2rem", textAlign: "center" }}>
      <p style={{
        fontFamily: F.hand,
        fontSize: "1.15rem",
        color: C.muted,
        margin: "0 0 10px",
      }}>
        welcome to my little corner ✦
      </p>
      <h1 style={{
        fontFamily: F.display,
        fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
        fontWeight: 600,
        color: C.ink,
        margin: "0 0 14px",
        lineHeight: 1.0,
      }}>
        {ME.name}
      </h1>
      <p style={{
        fontFamily: F.body,
        fontSize: "1.05rem",
        color: C.muted,
        textAlign: "center",
        margin: "0 auto 8px",
        lineHeight: 1.6,
        maxWidth: 520,
      }}>
        {ME.tagline}
      </p>
      <p style={{
        fontFamily: F.body,
        fontSize: "1rem",
        color: C.muted,
        textAlign: "center",
        maxWidth: 480,
        lineHeight: 1.7,
        margin: "12px auto 0",
        paddingTop: 0,
        borderTop: `1px solid ${C.faint}`,
      }}>
        {ME.intro}
      </p>
    </header>
  );
}

// ── status / now panel ───────────────────────────────────
function NowPanel() {
  const fields = [
    { icon: "✦", label: "feeling",   val: ME.now.feeling   },
    { icon: "🎵", label: "listening", val: ME.now.listening },
    { icon: "🎮", label: "playing",   val: ME.now.playing   },
    { icon: "📖", label: "reading",   val: ME.now.reading   },
    { icon: "🧵", label: "making",    val: ME.now.making    },
  ];
  return (
    <section id="now">
      <div style={{
        background: C.greenSoft,
        border: `1.5px solid ${C.green}`,
        borderRadius: 16,
        padding: "20px 24px",
      }}>
        <p style={{
          fontFamily: F.mono,
          fontSize: "0.65rem",
          textAlign: "center",
          color: C.sage,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          margin: "0 0 14px",
        }}>
          ● right now
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {fields.map(({ icon, label, val }) => (
            <div key={label} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 14, minWidth: 20, marginTop: 2 }}>{icon}</span>
              <div>
                <span style={{
                  fontFamily: F.mono,
                  fontSize: "0.6rem",
                  color: C.sage,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginRight: 6,
                }}>
                  {label}
                </span>
                <span style={{
                  fontFamily: F.body,
                  fontSize: "0.9rem",
                  color: C.ink,
                }}>
                  {val}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── sounds of lately ─────────────────────────────────────
function MusicSection() {
  return (
    <section id="music">
      <SHead icon="🎵" title="sounds of lately" sub="songs living rent-free in my head" />
      <div>
        {ME.music.map((t, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            padding: "12px 0",
            borderBottom: `1px solid ${C.faint}`,
          }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{
                fontFamily: F.mono,
                fontSize: "0.65rem",
                color: C.faint,
                minWidth: 18,
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p style={{ fontFamily: F.body, fontWeight: 700, fontSize: "0.9rem", color: C.ink, margin: 0 }}>
                  {t.title}
                </p>
                <p style={{ fontFamily: F.body, fontSize: "0.78rem", color: C.muted, margin: 0 }}>
                  {t.artist}
                </p>
              </div>
            </div>
            <p style={{
              fontFamily: F.hand,
              fontSize: "0.9rem",
              color: C.muted,
              margin: 0,
              textAlign: "right",
              maxWidth: 200,
              lineHeight: 1.3,
            }}>
              {t.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── little things i'm making ──────────────────────────────
function MakingSection() {
  // alternating sticky colors
  const palettes = [
    { color: C.yellowSoft,   border: C.yellow   },
    { color: C.roseSoft,     border: C.rose     },
    { color: C.lavenderSoft, border: C.lavender },
    { color: C.skySoft,      border: C.sky      },
    { color: C.sageSoft,     border: C.green    },
  ];
  // slight rotations for the handmade feel
  const rotations = [-1.5, 1.2, -0.8, 1.8, -1.2];

  return (
    <section id="making">
      <SHead icon="🧵" title="little things i'm making" sub="mostly cross-stitch, sometimes code" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(168px, 1fr))",
        gap: 12,
        /* extra padding so rotated cards don't clip */
        padding: "6px",
      }}>
        {ME.making.map((item, i) => {
          const p = palettes[i % palettes.length];
          const rot = rotations[i % rotations.length];
          return (
            <Sticky key={i} color={p.color} border={p.border} rotate={rot}>
              <p style={{
                fontFamily: F.mono,
                fontSize: "0.58rem",
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                margin: "0 0 6px",
                textAlign: "center",
              }}>
                {item.type}
              </p>
              <p style={{ fontFamily: F.body, fontWeight: 700, fontSize: "0.88rem", color: C.ink, margin: "0 0 5px", textAlign: "center" }}>
                {item.title}
              </p>
              <p style={{
                fontFamily: F.hand,
                fontSize: "0.88rem",
                color: item.done ? C.green : C.yellow,
                margin: "0 0 6px",
                textAlign: "center",
              }}>
                {item.done ? "✓ done" : "in progress..."}
              </p>
              {item.note && (
                <p style={{ fontFamily: F.hand, fontSize: "0.82rem", color: C.muted, margin: 0, lineHeight: 1.4, textAlign: "center" }}>
                  {item.note}
                </p>
              )}
            </Sticky>
          );
        })}
      </div>
    </section>
  );
}

// ── games i keep coming back to ──────────────────────────
function GamesSection() {
  return (
    <section id="games">
      <SHead icon="🎮" title="games i keep coming back to" sub="cozy builders and world-makers" />
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {ME.games.map((g, i) => (
          <div key={i} style={{
            display: "flex",
            gap: 14,
            padding: "14px 18px",
            background: C.blue,
            border: `1.5px solid ${C.sky}`,
            borderRadius: 12,
            alignItems: "flex-start",
          }}>
            <span style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              width: 28,
              fontSize: 24,
              lineHeight: 1,
              marginTop: 2,
            }}>
              {g.emoji}
            </span>
            <div>
              <p style={{ fontFamily: F.body, fontWeight: 700, fontSize: "0.95rem", color: C.ink, margin: 0 }}>
                {g.name}
              </p>
              <p style={{ fontFamily: F.hand, fontSize: "0.9rem", color: C.muted, margin: "4px 0 0" }}>
                {g.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── reading corner ───────────────────────────────────────
function BooksSection() {
  // colored spine indicator by status
  const spineColor = (s) =>
    s === "reading" ? C.yellow : s === "want" ? C.lavender : C.green;

  return (
    <section id="books">
      <SHead icon="📚" title="reading corner" sub="dog-eared and annotated" />
      <div>
        {ME.books.map((b, i) => (
          <div key={i} style={{
            display: "flex",
            gap: 12,
            padding: "12px 0",
            borderBottom: `1px solid ${C.faint}`,
            alignItems: "flex-start",
          }}>
            {/* coloured "book spine" bar */}
            <div style={{
              width: 5,
              alignSelf: "stretch",
              background: spineColor(b.status),
              borderRadius: 3,
              flexShrink: 0,
            }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: F.body, fontWeight: 700, fontSize: "0.88rem", color: C.ink, margin: 0 }}>
                {b.title}
              </p>
              <p style={{ fontFamily: F.body, fontSize: "0.76rem", color: C.muted, margin: "2px 0" }}>
                {b.author}
              </p>
              {b.note && (
                <p style={{ fontFamily: F.hand, fontSize: "0.83rem", color: C.muted, margin: "4px 0 0" }}>
                  ✦ {b.note}
                </p>
              )}
            </div>
            <span style={{
              fontFamily: F.mono,
              fontSize: "0.58rem",
              color: C.muted,
              background: C.tagBg,
              padding: "2px 7px",
              borderRadius: 8,
              whiteSpace: "nowrap",
              alignSelf: "flex-start",
              marginTop: 2,
              flexShrink: 0,
            }}>
              {b.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── project shelf ────────────────────────────────────────
function ProjectsSection() {
  return (
    <section id="projects">
      <SHead icon="🗂️" title="project shelf" sub="things i built" />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {ME.projects.map((p, i) => (
          <Card key={i} style={{ borderLeft: `3px solid ${C.yellow}`, borderRadius: "0 14px 14px 0" }}>
            <p style={{ fontFamily: F.display, fontSize: "1.1rem", fontWeight: 600, color: C.ink, margin: "0 0 6px" }}>
              {p.name}
            </p>
            <p style={{ fontFamily: F.body, fontSize: "0.85rem", color: C.muted, margin: "0 0 8px", lineHeight: 1.55 }}>
              {p.blurb}
            </p>
            {p.note && (
              <p style={{ fontFamily: F.hand, fontSize: "0.88rem", color: C.muted, margin: "0 0 10px" }}>
                → {p.note}
              </p>
            )}
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {p.tags.map((t) => <Tag key={t} label={t} />)}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

// ── current obsessions ───────────────────────────────────
function ObsessionsSection() {
  return (
    <section id="obsessions">
      <SHead icon="✨" title="current obsessions" sub="things taking up mental space lately" />
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 12,
      }}>
        {ME.obsessions.map((o, i) => (
          <div key={i} style={{
            flex: "0 0 220px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: 150,
            background: C.roseSoft,
            border: `1.5px solid ${C.rose}`,
            borderRadius: 12,
            padding: "16px 18px",
          }}>
            <p style={{ fontFamily: F.body, fontWeight: 700, fontSize: "0.88rem", color: C.ink, margin: "0 0 6px", textAlign: "center" }}>
              {o.thing}
            </p>
            <p style={{ fontFamily: F.hand, fontSize: "0.9rem", color: C.muted, margin: 0, lineHeight: 1.45, textAlign: "center" }}>
              {o.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── notes to self ────────────────────────────────────────
function NotesSection() {
  const palettes = [
    { color: C.yellowSoft,   border: C.yellow   },
    { color: C.greenSoft,    border: C.green    },
    { color: C.roseSoft,     border: C.rose     },
    { color: C.lavenderSoft, border: C.lavender },
    { color: C.skySoft,      border: C.sky      },
    { color: C.sageSoft,     border: C.sage     },
  ];
  const rotations = [-1.2, 1.5, -0.7, 1.0, -1.8, 0.8];

  return (
    <section id="notes">
      <SHead icon="📝" title="notes to self" sub="things i keep returning to" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 14,
        padding: "6px", // breathing room for rotated items
      }}>
        {ME.notes.map((note, i) => {
          const p = palettes[i % palettes.length];
          return (
            <Sticky key={i} color={p.color} style={{ display: "flex", justifyContent: "center", alignItems: "center" }} border={p.border} rotate={rotations[i % rotations.length]}>
              <p style={{
                fontFamily: F.hand,
                fontSize: "1.08rem",
                color: C.ink,
                textAlign: "center",
                margin: 0,
                lineHeight: 1.5,
              }}>
                "{note}"
              </p>
            </Sticky>
          );
        })}
      </div>
    </section>
  );
}

// ── guestbook ────────────────────────────────────────────
function GuestbookSection() {
  return (
    <section id="guestbook">
      <SHead icon="💬" title="guestbook" sub="nice things people have left" />
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {ME.guestbook.map((e, i) => (
          <Card key={i} style={{ padding: "14px 18px" }}>
            <p style={{
              fontFamily: F.hand,
              fontSize: "1rem",
              color: C.ink,
              margin: "0 0 10px",
              lineHeight: 1.5,
            }}>
              "{e.msg}"
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: F.mono, fontSize: "0.62rem", color: C.muted }}>— {e.name}</span>
              <span style={{ fontFamily: F.mono, fontSize: "0.62rem", color: C.faint }}>{e.date}</span>
            </div>
          </Card>
        ))}
        <p style={{ fontFamily: F.hand, fontSize: "0.9rem", color: C.faint, margin: "4px 0 0", textAlign: "center" }}>
          (want to leave a note? reach out somewhere in the portals)
        </p>
      </div>
    </section>
  );
}

// ── portals / links ──────────────────────────────────────
function PortalsSection() {
  return (
    <section id="portals">
      <SHead icon="🔗" title="portals" sub="other places i live on the internet" />
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center"}}>
        {ME.links.map((l, i) => (
          <a key={i} href={l.url}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "9px 18px",
              background: C.paper,
              border: `1.5px solid ${C.faint}`,
              borderRadius: 24,
              fontFamily: F.body,
              fontSize: "0.85rem",
              fontWeight: 700,
              color: C.ink,
              textDecoration: "none",
              transition: "border-color 0.15s, transform 0.1s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.green;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = C.faint;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span style={{ fontSize: 16 }}>{l.emoji}</span>
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
//  ROOT APP
// ─────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    // load Google Fonts
    if (!document.getElementById("ps-fonts")) {
      const link = document.createElement("link");
      link.id = "ps-fonts";
      link.rel = "stylesheet";
      link.href = [
        "https://fonts.googleapis.com/css2?",
        "family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400",
        "&family=Nunito:wght@400;600;700",
        "&family=Caveat:wght@400;600",
        "&family=JetBrains+Mono:wght@400",
        "&display=swap",
      ].join("");
      document.head.appendChild(link);
    }
    document.body.style.background = "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1631519952398-5b1d76b946e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  return (
    <>
      {/* global styles + responsive rules */}
      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }

        /* two-column grid collapses to one on narrow screens */
        @media (max-width: 680px) {
          .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>

      <main style={{ 
        maxWidth: 900, 
        margin: "40px auto", 
        padding: "0 24px 80px",
        background: "rgba(248, 244, 238, 0.95)",
        borderRadius: 20,
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
      }}>

        {/* ── hero ─────────────────────────── */}
        <Hero />

        <Divider />

        {/* ── now panel ────────────────────── */}
        <NowPanel />

        <Divider />

        {/* ── music + making : two columns ─── */}
        <div
          className="two-col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem" }}
        >
          <MusicSection />
          <MakingSection />
        </div>

        <Divider />

        {/* ── games ────────────────────────── */}
        <GamesSection />

        <Divider />

        {/* ── books + projects : two columns ─ */}
        <div
          className="two-col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem" }}
        >
          <BooksSection />
          <ProjectsSection />
        </div>

        <Divider />

        {/* ── obsessions ───────────────────── */}
        <ObsessionsSection />

        <Divider />

        {/* ── notes to self ────────────────── */}
        <NotesSection />

        <Divider />

        {/* ── guestbook + portals : two cols ─ */}
        <div
          className="two-col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem" }}
        >
          <GuestbookSection />
          <PortalsSection />
        </div>

        {/* ── footer ───────────────────────── */}
        <footer style={{
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: `1.5px dashed ${C.faint}`,
          textAlign: "center",
        }}>
          <p style={{ fontFamily: F.hand, fontSize: "1.1rem", color: C.muted, margin: "0 0 6px" }}>
            made with 🧵 and too many browser tabs
          </p>
          <p style={{ fontFamily: F.mono, fontSize: "0.62rem", color: C.faint }}>
            {ME.name} · {new Date().getFullYear()}
          </p>
        </footer>

      </main>
    </>
  );
}
