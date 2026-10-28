/**
 * Tashido Guitar Chord - Application Logic
 */

// Initial Sample Songs
const DEFAULT_SONGS = [
  {
    id: "s-hpyay-lhwut",
    title: "ဖြေလွှတ်ပစ်လိုက်တဲ့ကြိုး",
    artist: "စိုးလွင်လွင်",
    genre: "Myanmar Classic",
    language: "my",
    key: "G",
    capo: 0,
    bpm: 78,
    year: "1980s",
    fav: true,
    createdAt: 1700000000,
    lyrics: `Intro:
[G] [Em] [Am] [D]
[G] [Em] [Am] [D]

Verse 1:
[G]ကိုယ် ရေးခဲ့သော [Em]သီချင်းတွေ ကြုံတွေ့ခဲ့သော [Am]အဖြစ်တွေ [D]
[Bm]ကိုယ် လျှောက်ခဲ့သော [E]လမ်းတွေ ကိုယ် ချစ်ခဲ့သော [Am]မိန်းကလေးတွေ [D]
[G]ပျံသန်းနေတဲ့ငှက်တွေ [Em] ငုံဖူးနေသော [Am]ပန်းတွေ [D] အစဉ်စီးနေတဲ့ [Bm]မြစ်တွေ [Em]
[Am]တိမ်တိုက်အုပ်ထဲက မှိတ်တုတ် ကြယ်ကလေးတွေ [G] [Em] [E7]

Verse 2:
[Am]မှောက်လဲတဲ့ အရက်ခွက်တွေ [D] ကုန်ဆုံးတဲ့ [Bm]သက္ကရာဇ်တွေ [E] ပြိုသွားတဲ့ [Am]
အိပ်မက်တွေကို [D] နှုတ်ဆက်နေ ဖြတ်ခနဲ [G]လု [Em] ဒုက္ခတွေ [Am]ဝင်သက်လဲ [D] [Bm]
ထွက်သက်လဲ [E] ကိုယ် လွှင့်ပစ်ခဲ့တဲ့ [Am] ဆေးလိပ်တို [D] လေးတွေ [G] [D]

Verse 3:
[G]ကိုယ် ရေးခဲ့သော [Em]သီချင်းတွေ ကိုယ်ပြောခဲ့သော [Am]စကားတွေ [D]
[Bm]ကိုယ် လုပ်ခဲ့သော [E]အလုပ်တွေ ကိုယ်ရှိခဲ့တုန်းက [Am]အကြောင်းတွေ [D]
[G]သံယောဇဉ် အတ္တတွေ [Em] ကြံဆ လှုပ်ရှားမှု[Am]တွေ [D] အာယူအာသာ [Bm]ဆန္ဒတွေ [Em]
[Am]ဖြေလွှတ်ပစ်လိုက်တဲ့ [D] ကိုယ့်ဘဝရဲ့ကြိုးတွေ [G] [D] [G] [E7]

Solo:
[G] [Em] [Am] [D]
[G] [Em] [Am] [D]
[Bm] [Em] [Am] [D]
[G] [Em] [Am] [D]
[G] [Em] [Am] [D]
[G] [Em] [Am] [D]

Outro:
[Am]တိမ်တိုက်အုပ်ထဲက မှိတ်တုတ် ကြယ်ကလေးတွေ [G] [Em]
[Am]ကိုယ် လွှင့်ပစ်ခဲ့တဲ့ ဆေးလိပ်တို [D] လေးတွေ [G]

Ending:
[G] [Em] [Am] [D]
[Bm] [E] [Am] [D]`
  },
  {
    id: "s-morning-light",
    title: "Morning Light",
    artist: "Original Acoustic",
    genre: "Acoustic",
    language: "en",
    key: "C",
    capo: 0,
    bpm: 85,
    year: "2024",
    fav: true,
    createdAt: 1700000001,
    lyrics: `Intro:
[C]  [G]  [Am]  [F]

Verse 1:
[C]Morning light is [G]falling on my [Am]window
[F]Soft and golden, [C]quiet and [G]slow
[C]All the night has [G]finally let me [Am]go now
[F]And there's a [C]peace I [G]used to [C]know

Chorus:
[F]So lift your [G]eyes to the [C]morning [Am]light
[F]Everything is [G]gonna be al[C]right
[F]Hold this [G]moment, [Em]let it [Am]shine so bright
[F]In the [G]morning [C]light

Verse 2:
[C]Coffee steam and [G]footsteps in the [Am]hallway
[F]A brand new [C]story starts to[G]day
[Em]Every heart can [Am]learn to find its [F]own way
[Dm]When the [C]darkness [G]fades a[C]way

Outro:
[F]  [G]  [C]`
  },
  {
    id: "s-stand-by-me",
    title: "Stand By Me",
    artist: "Ben E. King",
    genre: "Classic",
    language: "en",
    key: "A",
    capo: 0,
    bpm: 118,
    year: "1961",
    fav: true,
    createdAt: 1700000002,
    lyrics: `Intro:
[A]  [F#m]  [D]  [E]  [A]

Verse 1:
When the [A]night has come, [F#m]and the land is dark
And the [D]moon is the [E]only light we'll [A]see
No, I [A]won't be afraid, no, I [F#m]won't be afraid
Just as [D]long as you [E]stand, stand by [A]me

Chorus:
So darling, darling, [A]stand by me, oh [F#m]stand by me
Oh [D]stand, [E]stand by me, [A]stand by me

Verse 2:
If the [A]sky that we look upon [F#m]should tumble and fall
Or the [D]mountain should [E]crumble to the [A]sea
I won't [A]cry, I won't cry, no, I [F#m]won't shed a tear
Just as [D]long as you [E]stand, stand by [A]me

Chorus:
And darling, darling, [A]stand by me, oh [F#m]stand by me
Oh [D]stand, [E]stand by me, [A]stand by me`
  },
  {
    id: "s-let-it-be",
    title: "Let It Be",
    artist: "The Beatles",
    genre: "Classic Rock",
    language: "en",
    key: "C",
    capo: 0,
    bpm: 72,
    year: "1970",
    fav: false,
    createdAt: 1700000003,
    lyrics: `Intro:
[C]  [G]  [Am]  [F]
[C]  [G]  [F]   [C]

Verse 1:
When I [C]find myself in [G]times of trouble, [Am]Mother Mary [F]comes to me
[C]Speaking words of [G]wisdom, let it [F]be [C]
And [C]in my hour of [G]darkness she is [Am]standing right in [F]front of me
[C]Speaking words of [G]wisdom, let it [F]be [C]

Chorus:
Let it [Am]be, let it [G]be, let it [F]be, let it [C]be
[C]Whisper words of [G]wisdom, let it [F]be [C]

Verse 2:
And [C]when the broken [G]hearted people [Am]living in the [F]world agree
[C]There will be an [G]answer, let it [F]be [C]
For [C]though they may be [G]parted there is [Am]still a chance that [F]they will see
[C]There will be an [G]answer, let it [F]be [C]`
  },
  {
    id: "s-alwan-pyay",
    title: "အလွမ်းပြေဆုတောင်း (Wish)",
    artist: "Myanmar Acoustic Sample",
    genre: "Acoustic Pop",
    language: "my",
    key: "C",
    capo: 0,
    bpm: 76,
    year: "2023",
    fav: true,
    createdAt: 1700000004,
    lyrics: `Intro:
[C]  [Em]  [Am]  [F]  [G]

Verse 1:
[C]ညနေခင်းရဲ့ [Em]လေပြည်အေးလေးထဲမှာ
[Am]သတိရမိတဲ့ [Em]အတိတ်ကပုံရိပ်များ
[F]ဘယ်ဆီကို [G]ရောက်နေပါစေ [Em]မင်းလေး [Am]ပျော်နေဖို့
[Dm]အဝေးကနေ [G]ဆုတောင်းပေးနေ[C]တယ်

Chorus:
[F]ရင်ထဲက [G]မေတ္တာတွေ [Em]မင်းအတွက် [Am]အမြဲတမ်းပါ
[F]ဘယ်တော့မှ [G]မပြောင်းလဲတဲ့ [C]အချစ်များနဲ့
[F]အလွမ်းပြေ [G]သီချင်းလေး [Em]ဆိုရင်းနဲ့ [Am]မျှော်နေမယ်
[Dm]တစ်နေ့နေ့တော့ [G]ပြန်ဆုံကြဦး[C]မယ်`
  },
  {
    id: "s-perfect",
    title: "Perfect",
    artist: "Ed Sheeran",
    genre: "Pop",
    language: "en",
    key: "G",
    capo: 1,
    bpm: 63,
    year: "2017",
    fav: false,
    createdAt: 1700000005,
    lyrics: `Intro:
[G]

Verse 1:
I found a [G]love for [Em]me
Darling, just [C]dive right in and follow my [D]lead
Well, I found a [G]girl, beautiful and [Em]sweet
Oh, I never [C]knew you were the someone waiting for [D]me

Pre-Chorus:
'Cause we were just kids when we [G]fell in love
Not knowing [Em]what it was
I will not [C]give you up this [G]ti[D]me
But darling, just [G]kiss me slow, your heart is [Em]all I own
And in your [C]eyes, you're holding [D]mine

Chorus:
Baby, [Em]I'm [C]dancing in the [G]dark with [D]you between my [Em]arms
[C]Barefoot on the [G]grass, [D]listening to our [Em]favorite song
When you [C]said you looked a [G]mess, I whispered [D]underneath my [Em]breath
But you [C]heard it, darling, [G]you look [D]perfect to[G]night`
  }
];

// Local Storage Key
const STORAGE_KEY = "tashido_guitar_chordbook_v2";

// State
let songs = [];
let currentSongId = null;
let currentView = "all"; // 'all', 'fav', 'recent', 'my', 'en', 'artists'
let currentAppView = "home"; // 'home' or 'song'
let homeFilter = "all"; // 'all', 'my', 'en', 'fav'
let homeCatalogPage = 0; // All Songs page, 30 songs per side (60 per page)
let homeCatalogShowAll = false; // Display all songs instead of paging
let homeCatalogSort = "recent"; // All Songs sort: recent (default) or name
let artistsPage = 0; // Artists list page, 30 names per side (60 per page)
let artistsShowAll = false; // Display all artists instead of paging
let artistsSort = "name"; // Artists sort: name (default) or recent
let artistDetailSort = "name"; // Artist detail songs sort: name (default) or recent
let selectedArtist = null; // Artists view: null = artist list, name = that artist's songs
let recentPracticedIds = [];
try {
  recentPracticedIds = JSON.parse(localStorage.getItem("tashido_recent_played") || "[]");
} catch (e) {
  recentPracticedIds = [];
}
// Real song queue: starts empty. A song enters ONLY via Add to Queue.
let queueIds = [];
try {
  queueIds = JSON.parse(localStorage.getItem("tashido_queue") || "[]");
  if (!Array.isArray(queueIds)) queueIds = [];
} catch (e) {
  queueIds = [];
}
let transposeSteps = 0;
let isAutoScrolling = false;
let scrollIntervalId = null;
let scrollSpeed = 3;
let editingSongId = null;
let showChords = true;
let isTwoColumns = true;

// Apple Music Style Gradient Covers & Glyphs
const COVER_GRADIENTS = [
  "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
  "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
  "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
  "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
  "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
  "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
];

function getSongGradient(song) {
  if (!song || !song.title) return COVER_GRADIENTS[0];
  let hash = 0;
  for (let i = 0; i < song.title.length; i++) {
    hash = (hash << 5) - hash + song.title.charCodeAt(i);
    hash |= 0;
  }
  return COVER_GRADIENTS[Math.abs(hash) % COVER_GRADIENTS.length];
}

function getSongCoverGlyph(song) {
  const lang = getSongLanguage(song);
  if (lang === "my") return "🇲🇲";
  return "🎸";
}

function recordSongPracticed(id) {
  if (!id) return;
  recentPracticedIds = [id, ...recentPracticedIds.filter(x => x !== id)].slice(0, 16);
  try {
    localStorage.setItem("tashido_recent_played", JSON.stringify(recentPracticedIds));
  } catch (e) {}
}

function saveQueue() {
  try {
    localStorage.setItem("tashido_queue", JSON.stringify(queueIds));
  } catch (e) {}
}

function getQueueSongs() {
  return queueIds.map(id => songs.find(s => s.id === id)).filter(Boolean);
}

function updateQueueAddBtn() {
  const btn = $("queueAddBtn");
  if (!btn) return;
  const inQueue = currentSongId && queueIds.includes(currentSongId);
  btn.textContent = inQueue ? "\u2713" : "\uff0b";
  btn.title = inQueue ? "Already in queue" : "Add to queue";
  btn.classList.toggle("active", !!inQueue);
}

function addToQueue(id) {
  if (!id || queueIds.includes(id)) return;
  if (!songs.find(s => s.id === id)) return;
  queueIds.push(id);
  saveQueue();
  updateQueueAddBtn();
  renderSongList();
}

function removeFromQueue(id) {
  queueIds = queueIds.filter(x => x !== id);
  saveQueue();
  updateQueueAddBtn();
  renderSongList();
}

function clearQueue() {
  queueIds = [];
  saveQueue();
  updateQueueAddBtn();
  renderSongList();
}

// Audio Context (Web Audio API)
let audioCtx = null;
let isMetronomePlaying = false;
let metronomeTimer = null;
let metronomeBeat = 0;
let metronomeBpm = 80;
let activeTunerOsc = null;

// Musical constants
const CHROMATIC_SCALE = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLAT_TO_SHARP = { "Db": "C#", "Eb": "D#", "Gb": "F#", "Ab": "G#", "Bb": "A#" };

// DOM Helper
const $ = id => document.getElementById(id);

/**
 * Initialize Web Audio Context on user gesture
 */
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Transpose a single chord string (e.g. "Am", "F#m7", "G/B", "Cadd9")
 */
function transposeChord(chord, steps) {
  if (!steps || !chord) return chord;

  // Handle slash chords (e.g., G/B -> transpose G and B separately)
  if (chord.includes("/")) {
    const parts = chord.split("/");
    return parts.map(p => transposeChord(p, steps)).join("/");
  }

  const match = chord.match(/^([A-G](?:#|b)?)(.*)$/);
  if (!match) return chord;

  let root = match[1];
  const suffix = match[2] || "";

  // Normalize flat to sharp for chromatic lookup
  if (FLAT_TO_SHARP[root]) {
    root = FLAT_TO_SHARP[root];
  }

  const idx = CHROMATIC_SCALE.indexOf(root);
  if (idx === -1) return chord;

  const newIdx = (idx + steps % 12 + 12) % 12;
  return CHROMATIC_SCALE[newIdx] + suffix;
}

/**
 * Acoustic Pluck Sound Generator using Web Audio API
 */
function playAcousticPluck(ctx, freq, startTime, duration = 1.8, velocity = 0.8) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  // Warm acoustic guitar harmonic profile (triangle wave + resonant cutoff)
  osc.type = "triangle";
  osc.frequency.setValueAtTime(freq, startTime);

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(freq * 4.2, startTime);
  filter.frequency.exponentialRampToValueAtTime(freq * 1.1, startTime + duration);
  filter.Q.value = 2.0;

  gain.gain.setValueAtTime(velocity * 0.35, startTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

/**
 * Play a full guitar chord strum
 */
function playChordAudio(chordName, downstrum = true) {
  try {
    const ctx = getAudioContext();
    const pitches = getChordMidiPitches(chordName);
    const now = ctx.currentTime;
    const strumDuration = 0.035; // 35ms between string plucks for natural strum

    const orderedPitches = downstrum ? pitches : [...pitches].reverse();

    orderedPitches.forEach((midiNote, idx) => {
      const freq = 440 * Math.pow(2, (midiNote - 69) / 12);
      const stringTime = now + idx * strumDuration;
      playAcousticPluck(ctx, freq, stringTime, 2.0, 0.7);
    });
  } catch (err) {
    console.error("Audio playback error:", err);
  }
}

/**
 * Play single pitch for Guitar Tuner
 */
function playTunerTone(freq, duration = 2.5) {
  const ctx = getAudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, ctx.currentTime);

  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + duration);
}

/**
 * Metronome Sound Click
 */
function playMetronomeClick(isAccent = false) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(isAccent ? 1200 : 800, ctx.currentTime);

    gain.gain.setValueAtTime(isAccent ? 0.4 : 0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    // audio not initialized yet
  }
}

/**
 * Toggle Metronome
 */
function toggleMetronome() {
  isMetronomePlaying = !isMetronomePlaying;
  const btn = $("metronomeToggleBtn");

  if (isMetronomePlaying) {
    getAudioContext();
    btn.textContent = "Stop Metronome";
    btn.classList.add("btn-danger");
    metronomeBeat = 0;
    const intervalMs = (60 / metronomeBpm) * 1000;

    metronomeTimer = setInterval(() => {
      metronomeBeat = (metronomeBeat % 4) + 1;
      playMetronomeClick(metronomeBeat === 1);

      // Update visual dots
      for (let i = 1; i <= 4; i++) {
        const dot = $("beatDot" + i);
        if (dot) {
          if (i === metronomeBeat) {
            dot.classList.add("active");
          } else {
            dot.classList.remove("active");
          }
        }
      }
    }, intervalMs);
  } else {
    clearInterval(metronomeTimer);
    btn.textContent = "Start Metronome";
    btn.classList.remove("btn-danger");
    for (let i = 1; i <= 4; i++) {
      const dot = $("beatDot" + i);
      if (dot) dot.classList.remove("active");
    }
  }
}

/**
 * Load Songs from LocalStorage
 */
function loadSongs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      songs = JSON.parse(raw);
    }
  } catch (err) {
    console.warn("Could not read songs from localStorage:", err);
  }

  if (!Array.isArray(songs) || songs.length === 0) {
    songs = [...DEFAULT_SONGS];
    saveSongs();
  } else {
    // If user has existing songs from previous session, ensure "ဖြေလွှတ်ပစ်လိုက်တဲ့ကြိုး" is added
    if (!songs.some(s => s.id === "s-hpyay-lhwut")) {
      songs.unshift(DEFAULT_SONGS[0]);
      saveSongs();
    }
  }

  currentSongId = songs[0].id;
}

/**
 * Save Songs to LocalStorage
 */
function saveSongs() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
}

/**
 * Get current selected song
 */
function getCurrentSong() {
  return songs.find(s => s.id === currentSongId) || songs[0];
}

/**
 * Extract all unique chord tokens from song lyrics
 */
function getUniqueChords(song) {
  if (!song || !song.lyrics) return [];
  const chords = [];
  const matches = song.lyrics.match(/\[([^\]]+)\]/g) || [];

  matches.forEach(token => {
    const name = token.slice(1, -1).trim();
    if (
      name &&
      !/^(intro|verse|chorus|bridge|outro|solo|pre-chorus)/i.test(name) &&
      !chords.includes(name)
    ) {
      chords.push(name);
    }
  });

  return chords;
}

/**
 * Parse one line of lyrics containing [Chord] tags
 */
function parseLyricsLine(rawLine) {
  const parts = [];
  const regex = /\[([^\]]+)\]/g;
  let lastIndex = 0;
  let match;
  let pendingChord = "";

  while ((match = regex.exec(rawLine)) !== null) {
    const textBefore = rawLine.slice(lastIndex, match.index);
    parts.push({
      chord: pendingChord,
      text: textBefore
    });
    pendingChord = match[1];
    lastIndex = regex.lastIndex;
  }

  parts.push({
    chord: pendingChord,
    text: rawLine.slice(lastIndex)
  });

  return parts
    .map(p => {
      const transChord = p.chord ? transposeChord(p.chord, transposeSteps) : "";
      const chordHtml = transChord
        ? `<span class="chord-tag" onclick="playChordAudio('${escapeXml(transChord)}')" title="Click to hear ${escapeXml(transChord)} chord">${escapeXml(transChord)}</span>`
        : "";
      return `<span class="chord-lyric-pair"><span class="chord-holder">${chordHtml}</span><span class="lyric-text">${escapeXml(p.text || " ")}</span></span>`;
    })
    .join("");
}

/**
 * Render lyrics with section pill badges
 */
function renderLyrics() {
  const song = getCurrentSong();
  const container = $("lyricsContainer");
  if (!song || !song.lyrics) {
    container.innerHTML = `<p style="color:var(--ink-muted);text-align:center;padding:40px;">No lyrics available.</p>`;
    return;
  }

  let html = "";
  let insideSection = false;

  song.lyrics.split("\n").forEach(raw => {
    const trimmed = raw.trim();
    const isSectionHeading = /^(intro|verse|chorus|bridge|outro|pre-chorus|solo)[^:]*:?$/i.test(trimmed);

    if (isSectionHeading) {
      if (insideSection) html += `</div>`;
      const title = trimmed.replace(/:$/, "");
      html += `<div class="lyrics-section"><span class="section-pill">${escapeXml(title)}</span>`;
      insideSection = true;
      return;
    }

    if (!insideSection) {
      html += `<div class="lyrics-section">`;
      insideSection = true;
    }

    if (!trimmed) {
      html += `<div style="height:12px"></div>`;
      return;
    }

    html += `<div class="lyrics-line">${parseLyricsLine(raw.trimEnd())}</div>`;
  });

  if (insideSection) html += `</div>`;
  container.innerHTML = html;
}

/**
 * Language Helper: Detect if text contains Myanmar (Burmese) Unicode
 */
function detectSongLanguage(title, lyrics) {
  const combined = (title || "") + " " + (lyrics || "");
  return /[\u1000-\u109F]/.test(combined) ? "my" : "en";
}

function getSongLanguage(s) {
  if (!s) return "en";
  return s.language || detectSongLanguage(s.title, s.lyrics);
}

/**
 * Search match: title, artist, genre, key, and lyrics (partial lyric search)
 */
function normalizeSearchText(text) {
  return (text || "")
    .normalize("NFC")
    .replace(/\[[^\]]*\]/g, "")
    .replace(/[\s\u200b-\u200d]+/g, "")
    .toLowerCase();
}

function songMatchesQuery(s, query) {
  if (!query) return true;
  const hay = normalizeSearchText(s.title + " " + (s.artist || "") + " " + (s.genre || "") + " " + (s.key || "") + " " + (s.lyrics || ""));
  return hay.includes(normalizeSearchText(query));
}

function getSongArtists(s) {
  const raw = (s.artist || "").trim();
  if (!raw) return ["Unknown Artist"];
  const parts = raw.split(/\s*(?:,|&|\/|\+|feat\.?|ft\.)\s*/i).map(p => p.trim()).filter(Boolean);
  return parts.length ? parts : ["Unknown Artist"];
}

function searchMatchRank(s, query) {
  const q = normalizeSearchText(query);
  if (!q) return 0;
  if (normalizeSearchText(s.title).includes(q)) return 0;
  if (normalizeSearchText(s.artist || "").includes(q)) return 1;
  return 2;
}

function highlightLyricMatch(line, query) {
  const clean = line.replace(/\[[^\]]*\]/g, "").trim();
  const normClean = clean.normalize("NFC");
  let norm = "";
  const map = [];
  for (let i = 0; i < normClean.length; i++) {
    const ch = normClean[i];
    if (/\s/.test(ch) || ch === "\u200b" || ch === "\u200c" || ch === "\u200d") continue;
    norm += ch.toLowerCase();
    map.push(i);
  }
  const q = normalizeSearchText(query);
  const idx = q ? norm.indexOf(q) : -1;
  if (idx === -1) return escapeXml(clean);
  const start = map[idx];
  const end = map[idx + q.length - 1] + 1;
  return escapeXml(normClean.slice(0, start)) + "<mark>" + escapeXml(normClean.slice(start, end)) + "</mark>" + escapeXml(normClean.slice(end));
}

function getLyricSnippet(s, query) {
  if (!query || !s.lyrics) return "";
  const q = normalizeSearchText(query);
  if (!q) return "";
  const lines = s.lyrics.split("\n");
  const isHeader = line => /^(intro|verse|chorus|bridge|outro|pre-chorus|interlude|solo|refrain)\b/i.test(line.replace(/\[[^\]]*\]/g, "").trim());
  let matchIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    const clean = lines[i].replace(/\[[^\]]*\]/g, "").trim();
    if (!clean || isHeader(lines[i])) continue;
    if (normalizeSearchText(clean).includes(q)) { matchIdx = i; break; }
  }
  if (matchIdx === -1) return "";
  const snippetLines = [highlightLyricMatch(lines[matchIdx], query)];
  for (let j = matchIdx + 1; j < lines.length && snippetLines.length < 2; j++) {
    const clean = lines[j].replace(/\[[^\]]*\]/g, "").trim();
    if (!clean || isHeader(lines[j])) continue;
    snippetLines.push(escapeXml(clean));
  }
  return `<div class="home-card-snippet">${snippetLines.map(l => `<div class="snippet-line">${l}</div>`).join("")}</div>`;
}

/**
 * Filter songs according to search input and active view
 */
function getFilteredSongs() {
  const query = ($("searchInput")?.value || "").trim().toLowerCase();
  let list = [...songs];

  if (currentView === "my") {
    list = list.filter(s => getSongLanguage(s) === "my");
  } else if (currentView === "en") {
    list = list.filter(s => getSongLanguage(s) === "en");
  } else if (currentView === "fav") {
    list = list.filter(s => s.fav);
  } else if (currentView === "recent") {
    const orderMap = new Map();
    recentPracticedIds.forEach((id, idx) => orderMap.set(id, idx));
    list.sort((a, b) => {
      const idxA = orderMap.has(a.id) ? orderMap.get(a.id) : 9999;
      const idxB = orderMap.has(b.id) ? orderMap.get(b.id) : 9999;
      return idxA - idxB;
    });
  } else if (currentView === "artists") {
    list.sort((a, b) => (a.artist || "").localeCompare(b.artist || ""));
  }

  if (query) {
    list = list.filter(
      s =>
        songMatchesQuery(s, query)
    );
  }

  return list;
}

/**
 * Render Apple Music Style Home Card
 */
function renderHomeCard(s) {
  const grad = getSongGradient(s);
  const glyph = getSongCoverGlyph(s);
  const lang = getSongLanguage(s);
  const flag = lang === "my" ? "🇲🇲" : "🇬🇧";
  const key = s.key || "C";
  const cardQuery = ($("searchInput")?.value || "").trim();
  const snippet = cardQuery ? getLyricSnippet(s, cardQuery) : "";
  return `
    <div class="home-card${snippet ? " has-snippet" : ""}" data-id="${s.id}">
      <div class="home-card-cover" style="background:${grad}">
        <span>${glyph}</span>
        <div class="home-card-play-overlay">
          <div class="home-card-play-btn">▶</div>
        </div>
      </div>
      <div class="home-card-info">
        <div class="home-card-title" title="${escapeXml(s.title)}">${escapeXml(s.title)}</div>
        <div class="home-card-artist">${flag} ${escapeXml(s.artist || "Unknown Artist")}</div>
        <div class="home-card-meta">
          <span class="home-meta-badge">Key ${escapeXml(key)}</span>
          ${s.capo ? `<span class="home-meta-badge">Capo ${s.capo}</span>` : ""}
          ${s.fav ? `<span style="color:var(--rose);font-size:0.8rem;margin-left:auto;">♥</span>` : ""}
        </div>
        ${snippet}
      </div>
      <button class="queue-add-btn" data-id="${s.id}" title="Add to queue">+</button>
    </div>
  `;
}

/**
 * Render Apple Music Style Home View
 */
function renderHomeView() {
  const homeView = $("homeView");
  if (!homeView) return;

  // Filter Pills active state
  document.querySelectorAll(".home-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.homeFilter === homeFilter);
  });

  const query = ($("searchInput")?.value || "").trim().toLowerCase();

  // 1. Recently Added (newest first, 10 songs)
  const recentSection = $("homeRecentSection");
  const recentGrid = $("homeRecentGrid");
  if (recentSection && recentGrid) {
    let recentSongs = [...songs].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

    if (homeFilter === "my") recentSongs = recentSongs.filter(s => getSongLanguage(s) === "my");
    else if (homeFilter === "en") recentSongs = recentSongs.filter(s => getSongLanguage(s) === "en");
    else if (homeFilter === "fav") recentSongs = recentSongs.filter(s => s.fav);

    if (query) {
      recentSongs = recentSongs.filter(s => songMatchesQuery(s, query));
    }

    if (recentSongs.length === 0) {
      recentSection.style.display = "none";
    } else {
      recentSection.style.display = "block";
      recentGrid.innerHTML = recentSongs.slice(0, 10).map(renderHomeCard).join("");
    }
  }

  // 2. Myanmar Acoustic
  const myanmarSection = $("homeMyanmarSection");
  const myanmarGrid = $("homeMyanmarGrid");
  if (myanmarSection && myanmarGrid) {
    if (homeFilter === "en") {
      myanmarSection.style.display = "none";
    } else {
      let myanmarSongs = songs.filter(s => getSongLanguage(s) === "my");
      if (homeFilter === "fav") myanmarSongs = myanmarSongs.filter(s => s.fav);
      if (query) {
        myanmarSongs = myanmarSongs.filter(s => songMatchesQuery(s, query));
      }
      if (myanmarSongs.length === 0) {
        myanmarSection.style.display = "none";
      } else {
        myanmarSection.style.display = "block";
        myanmarGrid.innerHTML = myanmarSongs.slice(0, 6).map(renderHomeCard).join("");
      }
    }
  }

  // 3. English Acoustic
  const englishSection = $("homeEnglishSection");
  const englishGrid = $("homeEnglishGrid");
  if (englishSection && englishGrid) {
    if (homeFilter === "my") {
      englishSection.style.display = "none";
    } else {
      let englishSongs = songs.filter(s => getSongLanguage(s) === "en");
      if (homeFilter === "fav") englishSongs = englishSongs.filter(s => s.fav);
      if (query) {
        englishSongs = englishSongs.filter(s => songMatchesQuery(s, query));
      }
      if (englishSongs.length === 0) {
        englishSection.style.display = "none";
      } else {
        englishSection.style.display = "block";
        englishGrid.innerHTML = englishSongs.slice(0, 6).map(renderHomeCard).join("");
      }
    }
  }

  // 4. All Songs Catalog (Smart slice for hundreds of songs)
  const allSection = $("homeAllSection");
  const allGrid = $("homeAllGrid");
  const catalogCount = $("homeCatalogCount");
  const catalogSummary = $("homeCatalogSummary");
  const loadMoreBox = $("homeLoadMoreBox");

  if (allSection && allGrid) {
    allSection.style.display = "block";
    let catalogSongs = [...songs];
    if (homeFilter === "my") catalogSongs = catalogSongs.filter(s => getSongLanguage(s) === "my");
    else if (homeFilter === "en") catalogSongs = catalogSongs.filter(s => getSongLanguage(s) === "en");
    else if (homeFilter === "fav") catalogSongs = catalogSongs.filter(s => s.fav);

    if (query) {
      catalogSongs = catalogSongs.filter(s =>
        songMatchesQuery(s, query)
      );
    }

    if (homeCatalogSort === "name") {
      catalogSongs.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else {
      catalogSongs.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    }
    if (query) {
      catalogSongs.sort((a, b) => searchMatchRank(a, query) - searchMatchRank(b, query));
    }

    if (catalogCount) catalogCount.textContent = catalogSongs.length;
    // All Songs: 30 per side in 2 side-by-side tables (60 per page), or all at once.
    const pageSize = 60;
    const maxPage = Math.max(0, Math.ceil(catalogSongs.length / pageSize) - 1);
    if (homeCatalogPage > maxPage) homeCatalogPage = maxPage;
    if (homeCatalogPage < 0) homeCatalogPage = 0;
    const visibleSongs = homeCatalogShowAll
      ? catalogSongs
      : catalogSongs.slice(homeCatalogPage * pageSize, homeCatalogPage * pageSize + pageSize);

    if (catalogSummary) {
      if (homeCatalogShowAll) {
        catalogSummary.textContent = `Showing all ${catalogSongs.length} songs`;
      } else if (catalogSongs.length === 0) {
        catalogSummary.textContent = `Showing 0 of 0 songs`;
      } else {
        const start = homeCatalogPage * pageSize + 1;
        const end = Math.min(homeCatalogPage * pageSize + visibleSongs.length, catalogSongs.length);
        catalogSummary.textContent = `Showing ${start}-${end} of ${catalogSongs.length} songs`;
      }
    }
    const pageInfo = $("homeCatalogPageInfo");
    if (pageInfo) {
      pageInfo.textContent = homeCatalogShowAll ? "All songs" : `Page ${homeCatalogPage + 1} of ${maxPage + 1}`;
    }
    const prevBtn = $("homeCatalogPrevBtn");
    if (prevBtn) prevBtn.disabled = homeCatalogShowAll || homeCatalogPage <= 0;
    const nextBtn = $("homeCatalogNextBtn");
    if (nextBtn) nextBtn.disabled = homeCatalogShowAll || homeCatalogPage >= maxPage;
    const showAllBtn = $("homeCatalogShowAllBtn");
    if (showAllBtn) showAllBtn.textContent = homeCatalogShowAll ? "Show 60 per page" : "Display all songs";
    const sortRecentBtn = $("homeCatalogSortRecentBtn");
    if (sortRecentBtn) {
      sortRecentBtn.style.fontWeight = homeCatalogSort === "recent" ? "700" : "400";
      sortRecentBtn.style.background = homeCatalogSort === "recent" ? "#FFFFFF" : "";
      sortRecentBtn.style.boxShadow = homeCatalogSort === "recent" ? "0 1px 3px rgba(0,0,0,.12)" : "";
    }
    const sortNameBtn = $("homeCatalogSortNameBtn");
    if (sortNameBtn) {
      sortNameBtn.style.fontWeight = homeCatalogSort === "name" ? "700" : "400";
      sortNameBtn.style.background = homeCatalogSort === "name" ? "#FFFFFF" : "";
      sortNameBtn.style.boxShadow = homeCatalogSort === "name" ? "0 1px 3px rgba(0,0,0,.12)" : "";
    }

    if (visibleSongs.length === 0) {
      allGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--ink-muted);">No songs match this filter.</div>`;
    } else {
      // Two real tables: first half left, second half right, fixed columns align both.
      const half = Math.ceil(visibleSongs.length / 2);
      const leftHtml = visibleSongs.slice(0, half).map(renderHomeCard).join("");
      const rightHtml = visibleSongs.slice(half).map(renderHomeCard).join("");
      allGrid.innerHTML = `<div class="all-table-col">${leftHtml}</div><div class="all-table-col">${rightHtml}</div>`;
    }

    if (loadMoreBox) {
      loadMoreBox.style.display = "block";
    }
  }

  // Home shows the All Songs library only: hide Recently Added, Myanmar, English sections.
  if ($("homeRecentSection")) $("homeRecentSection").style.display = "none";
  if ($("homeMyanmarSection")) $("homeMyanmarSection").style.display = "none";
  if ($("homeEnglishSection")) $("homeEnglishSection").style.display = "none";

  // Artists view: names only, in order. Tap a name to see only their songs.
  const artistsSection = $("homeArtistsSection");
  const artistsGrid = $("homeArtistsGrid");
  if (currentView !== "artists") selectedArtist = null;
  if (artistsSection) {
    if (currentView === "artists" && artistsGrid) {
      if ($("homeRecentSection")) $("homeRecentSection").style.display = "none";
      if ($("homeMyanmarSection")) $("homeMyanmarSection").style.display = "none";
      if ($("homeEnglishSection")) $("homeEnglishSection").style.display = "none";
      if (allSection) allSection.style.display = "none";
      if (loadMoreBox) loadMoreBox.style.display = "none";
      artistsSection.style.display = "block";
      artistsGrid.classList.toggle("detail", !!selectedArtist);
      const backBtn = $("homeArtistsBackBtn");
      const titleEl = $("homeArtistsTitle");
      const countEl = $("homeArtistsCount");
      const artistsSortBox = $("homeArtistsSortBox");
      const artistsNavBox = $("homeArtistsNavBox");
      const artistDetailSortBox = $("homeArtistDetailSortBox");
      if (selectedArtist) {
        if (backBtn) backBtn.style.display = "inline-flex";
        if (titleEl) titleEl.textContent = selectedArtist;
        if (artistsSortBox) artistsSortBox.style.display = "none";
        if (artistsNavBox) artistsNavBox.style.display = "none";
        if (artistDetailSortBox) artistDetailSortBox.style.display = "flex";
        let artistSongs = songs.filter(s => getSongArtists(s).includes(selectedArtist));
        if (query) {
          artistSongs = artistSongs.filter(s => songMatchesQuery(s, query));
        }
        const sortDetailSongs = list => {
          if (artistDetailSort === "recent") {
            list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
          } else {
            list.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
          }
          if (query) {
            list.sort((a, b) => searchMatchRank(a, query) - searchMatchRank(b, query));
          }
          return list;
        };
        const soloSongs = sortDetailSongs(artistSongs.filter(s => getSongArtists(s).length === 1));
        const collabSongs = sortDetailSongs(artistSongs.filter(s => getSongArtists(s).length > 1));
        const detailSortNameBtn = $("homeArtistDetailSortNameBtn");
        if (detailSortNameBtn) {
          detailSortNameBtn.style.fontWeight = artistDetailSort === "name" ? "700" : "400";
          detailSortNameBtn.style.background = artistDetailSort === "name" ? "#FFFFFF" : "";
          detailSortNameBtn.style.boxShadow = artistDetailSort === "name" ? "0 1px 3px rgba(0,0,0,.12)" : "";
        }
        const detailSortRecentBtn = $("homeArtistDetailSortRecentBtn");
        if (detailSortRecentBtn) {
          detailSortRecentBtn.style.fontWeight = artistDetailSort === "recent" ? "700" : "400";
          detailSortRecentBtn.style.background = artistDetailSort === "recent" ? "#FFFFFF" : "";
          detailSortRecentBtn.style.boxShadow = artistDetailSort === "recent" ? "0 1px 3px rgba(0,0,0,.12)" : "";
        }
        if (countEl) countEl.textContent = artistSongs.length + " songs";
        if (artistSongs.length === 0) {
          artistsGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--ink-muted);">No songs for this artist.</div>`;
        } else {
          const groupHtml = (title, list) => {
            if (!list.length) return "";
            const half = Math.ceil(list.length / 2);
            const leftHtml = list.slice(0, half).map(renderHomeCard).join("");
            const rightHtml = list.slice(half).map(renderHomeCard).join("");
            return `<div class="artist-group"><div class="artist-group-title">${title} (${list.length})</div><div class="artist-group-tables"><div class="all-table-col">${leftHtml}</div><div class="all-table-col">${rightHtml}</div></div></div>`;
          };
          artistsGrid.innerHTML = groupHtml("Solo", soloSongs) + groupHtml("Collaborations", collabSongs);
        }
      } else {
        if (backBtn) backBtn.style.display = "none";
        if (titleEl) titleEl.textContent = "Artists";
        if (artistsSortBox) artistsSortBox.style.display = "flex";
        if (artistsNavBox) artistsNavBox.style.display = "block";
        if (artistDetailSortBox) artistDetailSortBox.style.display = "none";
        let artistNames = [...new Set(songs.flatMap(s => getSongArtists(s)))];
        if (artistsSort === "recent") {
          const newest = {};
          songs.forEach(s => {
            getSongArtists(s).forEach(name => {
              newest[name] = Math.max(newest[name] || 0, s.createdAt || 0);
            });
          });
          artistNames.sort((a, b) => (newest[b] || 0) - (newest[a] || 0) || a.localeCompare(b));
        } else {
          artistNames.sort((a, b) => a.localeCompare(b));
        }
        if (query) {
          artistNames = artistNames.filter(name => normalizeSearchText(name).includes(normalizeSearchText(query)) || songs.some(s => getSongArtists(s).includes(name) && songMatchesQuery(s, query)));
          const qNorm = normalizeSearchText(query);
          artistNames.sort((a, b) => (normalizeSearchText(a).includes(qNorm) ? 0 : 1) - (normalizeSearchText(b).includes(qNorm) ? 0 : 1));
        }
        if (countEl) countEl.textContent = artistNames.length + " artists";
        const artistsPageSize = 60;
        const artistsMaxPage = Math.max(0, Math.ceil(artistNames.length / artistsPageSize) - 1);
        if (artistsPage > artistsMaxPage) artistsPage = artistsMaxPage;
        if (artistsPage < 0) artistsPage = 0;
        const indexedNames = artistNames.map((name, idx) => ({ name, idx }));
        const visibleArtists = artistsShowAll ? indexedNames : indexedNames.slice(artistsPage * artistsPageSize, artistsPage * artistsPageSize + artistsPageSize);
        const artistsPageInfo = $("homeArtistsPageInfo");
        if (artistsPageInfo) {
          artistsPageInfo.textContent = artistsShowAll ? "All artists" : `Page ${artistsPage + 1} of ${artistsMaxPage + 1}`;
        }
        const artistsPrevBtn = $("homeArtistsPrevBtn");
        if (artistsPrevBtn) artistsPrevBtn.disabled = artistsShowAll || artistsPage <= 0;
        const artistsNextBtn = $("homeArtistsNextBtn");
        if (artistsNextBtn) artistsNextBtn.disabled = artistsShowAll || artistsPage >= artistsMaxPage;
        const artistsShowAllBtn = $("homeArtistsShowAllBtn");
        if (artistsShowAllBtn) artistsShowAllBtn.textContent = artistsShowAll ? "Show 60 per page" : "Display all artists";
        const artistsSortNameBtn = $("homeArtistsSortNameBtn");
        if (artistsSortNameBtn) {
          artistsSortNameBtn.style.fontWeight = artistsSort === "name" ? "700" : "400";
          artistsSortNameBtn.style.background = artistsSort === "name" ? "#FFFFFF" : "";
          artistsSortNameBtn.style.boxShadow = artistsSort === "name" ? "0 1px 3px rgba(0,0,0,.12)" : "";
        }
        const artistsSortRecentBtn = $("homeArtistsSortRecentBtn");
        if (artistsSortRecentBtn) {
          artistsSortRecentBtn.style.fontWeight = artistsSort === "recent" ? "700" : "400";
          artistsSortRecentBtn.style.background = artistsSort === "recent" ? "#FFFFFF" : "";
          artistsSortRecentBtn.style.boxShadow = artistsSort === "recent" ? "0 1px 3px rgba(0,0,0,.12)" : "";
        }
        if (visibleArtists.length === 0) {
          artistsGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--ink-muted);">No artists found.</div>`;
        } else {
          const half = Math.ceil(visibleArtists.length / 2);
          const rowHtml = item => {
            const count = songs.filter(s => getSongArtists(s).includes(item.name)).length;
            return `<button class="artist-row" data-idx="${item.idx}"><span class="artist-row-name">${escapeXml(item.name)}</span><span class="artist-row-count">${count} songs</span></button>`;
          };
          const leftHtml = visibleArtists.slice(0, half).map(rowHtml).join("");
          const rightHtml = visibleArtists.slice(half).map(rowHtml).join("");
          artistsGrid.innerHTML = `<div class="all-table-col">${leftHtml}</div><div class="all-table-col">${rightHtml}</div>`;
        }
        artistsGrid.querySelectorAll(".artist-row").forEach(row => {
          row.onclick = () => {
            selectedArtist = artistNames[parseInt(row.dataset.idx, 10)];
            renderHomeView();
          };
        });
      }
    } else {
      artistsSection.style.display = "none";
    }
  }

  // Attach card click handlers across all grids
  homeView.querySelectorAll(".home-card").forEach(card => {
    card.onclick = () => {
      const id = card.dataset.id;
      if (id) openSongView(id);
    };
  });
  // Add to Queue buttons on cards (must not open the song)
  homeView.querySelectorAll(".queue-add-btn").forEach(btn => {
    btn.onclick = e => {
      e.stopPropagation();
      addToQueue(btn.dataset.id);
      btn.textContent = "\u2713";
    };
  });
}

/**
 * Switch to Apple Music Style Home View
 */
function openHomeView() {
  currentAppView = "home";
  const homeView = $("homeView");
  const songView = $("songView");
  const appContainer = document.querySelector(".app-container");

  if (homeView) homeView.style.display = "flex";
  if (songView) songView.style.display = "none";
  if (appContainer) appContainer.classList.add("home-mode");

  // Highlight active nav item
  document.querySelectorAll(".nav-item[data-view]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === currentView);
  });

  renderHomeView();
  renderSongList();
}

/**
 * Switch to Song Practice View (Lyrics & Chords)
 */
function openSongView(songId) {
  currentAppView = "song";
  if (songId) {
    currentSongId = songId;
    recordSongPracticed(songId);
    transposeSteps = 0;
    if ($("trVal")) $("trVal").textContent = "0";
  }

  const homeView = $("homeView");
  const songView = $("songView");
  const appContainer = document.querySelector(".app-container");

  if (homeView) homeView.style.display = "none";
  if (songView) songView.style.display = "flex";
  if (appContainer) appContainer.classList.remove("home-mode");

  render();
  const lyricsBox = $("lyricsCard");
  if (lyricsBox) lyricsBox.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Render Sidebar Song List (Apple Music Queue with Drag & Drop Reorder)
 */
function renderSongList() {
  // Queue only: never the whole library. Sidebar search filters the queue.
  const query = ($("searchInput")?.value || "").trim().toLowerCase();
  let list = getQueueSongs();
  if (query) {
    list = list.filter(s => songMatchesQuery(s, query));
  }
  const container = $("songList");
  if (!container) return;

  if (!list.length) {
    container.innerHTML = `<div style="color:var(--ink-faint);font-size:0.8rem;text-align:center;padding:20px 0;">Queue is empty. Tap + Add to Queue on a song.</div>`;
  } else {
    container.innerHTML = list
      .map((s, idx) => {
        const isActive = currentAppView === "song" && s.id === currentSongId;
        const grad = getSongGradient(s);
        const glyph = getSongCoverGlyph(s);
        const lang = getSongLanguage(s);
        const flag = lang === "my" ? "🇲🇲" : "🇬🇧";
        return `
          <button class="song-item-btn ${isActive ? "active" : ""}" draggable="true" data-id="${s.id}" data-index="${idx}" title="Drag to reorder queue">
            <div class="song-item-thumb" style="background:${grad}">
              <span>${glyph}</span>
            </div>
            <div class="song-item-content">
              <div class="song-item-title">${escapeXml(s.title)}</div>
              <div class="song-item-artist">${flag} ${escapeXml(s.artist || "Unknown")} • Key ${escapeXml(s.key || "C")}</div>
            </div>
            ${
              isActive
                ? `<div class="playing-bars"><span></span><span></span><span></span></div>`
                : s.fav
                ? '<span style="color:var(--rose);font-size:0.8rem;margin-left:4px;">♥</span>'
                : ""
            }
            <span class="queue-remove" data-id="${s.id}" title="Remove from queue">\u00d7</span>
          </button>
        `;
      })
      .join("");

    // Remove-one-song control inside each queue row
    container.querySelectorAll(".queue-remove").forEach(el => {
      el.onclick = e => {
        e.stopPropagation();
        removeFromQueue(el.dataset.id);
      };
    });

    // Click handler to open song
    container.querySelectorAll(".song-item-btn").forEach(btn => {
      btn.onclick = () => {
        openSongView(btn.dataset.id);
      };

      // HTML5 Drag and Drop for Queue Reordering
      btn.ondragstart = e => {
        btn.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", btn.dataset.index);
      };

      btn.ondragend = () => {
        btn.classList.remove("dragging");
        container.querySelectorAll(".song-item-btn").forEach(b => b.classList.remove("drag-over"));
      };

      btn.ondragover = e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        btn.classList.add("drag-over");
      };

      btn.ondragleave = () => {
        btn.classList.remove("drag-over");
      };

      btn.ondrop = e => {
        e.preventDefault();
        btn.classList.remove("drag-over");
        const fromIdx = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const toIdx = parseInt(btn.dataset.index, 10);

        if (!isNaN(fromIdx) && !isNaN(toIdx) && fromIdx !== toIdx) {
          const sourceSong = list[fromIdx];
          const targetSong = list[toIdx];
          if (sourceSong && targetSong) {
            // Reorder the queue only, never the library order.
            const qFrom = queueIds.indexOf(sourceSong.id);
            const qTo = queueIds.indexOf(targetSong.id);
            if (qFrom !== -1 && qTo !== -1) {
              const [moved] = queueIds.splice(qFrom, 1);
              queueIds.splice(qTo, 0, moved);
              saveQueue();
              renderSongList();
            }
          }
        }
      };
    });
  }

  // Update counts
  if ($("countAll")) $("countAll").textContent = songs.length;
  if ($("countMyanmar")) $("countMyanmar").textContent = songs.filter(s => getSongLanguage(s) === "my").length;
  if ($("countEnglish")) $("countEnglish").textContent = songs.filter(s => getSongLanguage(s) === "en").length;
  if ($("countFav")) $("countFav").textContent = songs.filter(s => s.fav).length;

  // Render Genre Chips
  const genres = {};
  songs.forEach(s => {
    const g = (s.genre || "").trim();
    if (!g) return;
    genres[g] = (genres[g] || 0) + 1;
  });

  const genreContainer = $("genreTags");
  if (genreContainer) {
    genreContainer.innerHTML = Object.entries(genres)
      .map(
        ([g, count]) => `
          <button class="tag-chip" data-genre="${escapeXml(g)}">
            ${escapeXml(g)} (${count})
          </button>
        `
      )
      .join("");

    genreContainer.querySelectorAll(".tag-chip").forEach(chip => {
      chip.onclick = () => {
        $("searchInput").value = chip.dataset.genre;
        const clearBtn = $("searchClearBtn");
        if (clearBtn) clearBtn.style.display = "block";
        currentView = "all";
        renderSongList();
        if (currentAppView === "home") renderHomeView();
      };
    });
  }
}

/**
 * Render Chord SVG Diagrams for this song
 */
function renderChordGrid() {
  const song = getCurrentSong();
  const container = $("chordGrid");
  if (!song || !container) return;

  const chords = getUniqueChords(song);
  if (!chords.length) {
    container.innerHTML = `<div style="color:var(--ink-faint);font-size:0.8rem;grid-column:1/-1;text-align:center;padding:14px 0;">No chords in this song.</div>`;
    return;
  }

  container.innerHTML = chords
    .map(c => {
      const trans = transposeChord(c, transposeSteps);
      return `
        <div class="chord-card" onclick="playChordAudio('${escapeXml(trans)}')" title="Click to hear ${escapeXml(trans)} chord strum">
          <span class="chord-play-indicator">▶</span>
          ${renderChordSVG(trans, { width: 110, height: 135 })}
        </div>
      `;
    })
    .join("");
}

/**
 * Master Render
 */
function render() {
  const song = getCurrentSong();
  if (!song) return;

  // Hero Card Data
  if ($("heroTitle")) $("heroTitle").textContent = song.title;
  if ($("heroArtist")) $("heroArtist").textContent = song.artist || "Unknown Artist";
  if ($("heroGenre")) $("heroGenre").textContent = song.genre || "";
  if ($("heroYear")) $("heroYear").textContent = song.year || "2024";
  if ($("heroCapo")) $("heroCapo").textContent = `Capo ${song.capo || 0}`;
  if ($("capoVal")) $("capoVal").textContent = song.capo || 0;

  if ($("heroCover")) {
    $("heroCover").style.background = getSongGradient(song);
    $("heroCover").textContent = getSongCoverGlyph(song);
  }

  const lang = getSongLanguage(song);
  if ($("heroLang")) $("heroLang").textContent = lang === "my" ? "🇲🇲 Myanmar" : lang === "en" ? "🇬🇧 English" : "🌐 Other";

  const currentKey = transposeChord(song.key || "C", transposeSteps);
  if ($("heroKey")) $("heroKey").textContent = `Key ${currentKey}`;

  // Favorite button
  const favBtn = $("favBtn");
  if (favBtn) {
    if (song.fav) {
      favBtn.textContent = "♥";
      favBtn.classList.add("active");
    } else {
      favBtn.textContent = "♡";
      favBtn.classList.remove("active");
    }
  }

  // Add to Queue button state for this song
  updateQueueAddBtn();

  // Floating Bar Data
  if ($("barTitle")) $("barTitle").textContent = song.title;
  if ($("barArtist")) $("barArtist").textContent = song.artist || "Unknown";

  renderSongList();
  if (currentAppView === "home") renderHomeView();
  renderLyrics();
  renderChordGrid();
}

/**
 * Smooth Auto-scroll Engine (Only scrolls lyrics box)
 */
function toggleAutoScroll(forceState) {
  isAutoScrolling = typeof forceState === "boolean" ? forceState : !isAutoScrolling;

  const playBtn = $("heroPlayBtn");
  const barPlayBtn = $("barPlayBtn");
  const scrollSwitch = $("scrollSwitch");
  const lyricsCard = $("lyricsCard");

  if (isAutoScrolling) {
    playBtn.textContent = "⏸";
    barPlayBtn.textContent = "⏸";
    scrollSwitch.classList.add("active");

    clearInterval(scrollIntervalId);
    scrollIntervalId = setInterval(() => {
      if (lyricsCard) {
        lyricsCard.scrollTop += scrollSpeed;
        if (lyricsCard.scrollTop + lyricsCard.clientHeight >= lyricsCard.scrollHeight - 6) {
          toggleAutoScroll(false);
        }
      }
    }, 40);
  } else {
    playBtn.textContent = "▶";
    barPlayBtn.textContent = "▶";
    scrollSwitch.classList.remove("active");
    clearInterval(scrollIntervalId);
  }
}

// ==========================================================================
// FIREBASE CLOUD FIRESTORE INTEGRATION
// ==========================================================================
let firebaseApp = null;
let firestoreDb = null;
let isFirebaseConnected = false;
let unsubscribeFirestore = null;
const FIREBASE_CONFIG_KEY = "tashido_firebase_config_v1";

function getStoredFirebaseConfig() {
  try {
    const raw = localStorage.getItem(FIREBASE_CONFIG_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function updateCloudStatusUI(connected, text) {
  const dot = $("cloudStatusDot");
  const label = $("cloudStatusText");
  const disconnectBtn = $("disconnectFirebaseBtn");
  if (dot) dot.classList.toggle("connected", connected);
  if (label) label.textContent = connected ? `☁️ ${text || "Cloud Synced"}` : "☁️ Firebase Cloud Sync";
  if (disconnectBtn) disconnectBtn.style.display = connected ? "inline-block" : "none";
}

function initFirebase(config) {
  if (!config || !config.projectId || typeof firebase === "undefined") {
    updateCloudStatusUI(false);
    return false;
  }

  try {
    if (!firebase.apps.length) {
      firebaseApp = firebase.initializeApp(config);
    } else {
      firebaseApp = firebase.app();
    }
    firestoreDb = firebase.firestore();
    isFirebaseConnected = true;
    updateCloudStatusUI(true, "Cloud Synced");
    listenToFirestoreSongs();
    return true;
  } catch (err) {
    console.error("Firebase connection error:", err);
    updateCloudStatusUI(false, "Connection Error");
    return false;
  }
}

function listenToFirestoreSongs() {
  if (!firestoreDb || !isFirebaseConnected) return;
  if (unsubscribeFirestore) unsubscribeFirestore();

  try {
    unsubscribeFirestore = firestoreDb.collection("songs").onSnapshot(
      snapshot => {
        if (!snapshot.empty) {
          const cloudList = [];
          snapshot.forEach(doc => {
            cloudList.push({ id: doc.id, ...doc.data() });
          });
          if (cloudList.length > 0) {
            cloudList.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
            songs = cloudList;
            if (!songs.some(s => s.id === currentSongId)) {
              currentSongId = songs[0].id;
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
            render();
            updateCloudStatusUI(true, `${songs.length} Songs Synced`);
          }
        } else {
          uploadAllLocalSongsToFirestore();
        }
      },
      err => {
        console.warn("Firestore listener warning:", err);
      }
    );
  } catch (e) {
    console.warn("Could not listen to Firestore:", e);
  }
}

async function saveSongToFirebase(song) {
  if (!firestoreDb || !isFirebaseConnected || !song) return;
  try {
    await firestoreDb.collection("songs").doc(song.id).set(song, { merge: true });
    updateCloudStatusUI(true, "Saved to Cloud");
  } catch (err) {
    console.error("Failed to save to Firestore:", err);
  }
}

async function deleteSongFromFirebase(songId) {
  if (!firestoreDb || !isFirebaseConnected || !songId) return;
  try {
    await firestoreDb.collection("songs").doc(songId).delete();
  } catch (err) {
    console.error("Failed to delete from Firestore:", err);
  }
}

async function uploadAllLocalSongsToFirestore() {
  if (!firestoreDb || !isFirebaseConnected || !songs.length) return;
  try {
    const batch = firestoreDb.batch();
    songs.forEach(s => {
      const docRef = firestoreDb.collection("songs").doc(s.id);
      batch.set(docRef, s, { merge: true });
    });
    await batch.commit();
    updateCloudStatusUI(true, `${songs.length} Songs Synced`);
  } catch (err) {
    console.error("Batch upload to Firestore error:", err);
  }
}

// ==========================================================================
// GEMINI AI INTEGRATION & CHORD SHEET OCR
// ==========================================================================
const DEFAULT_GEMINI_KEY = (typeof atob !== "undefined")
  ? atob("QVEuQWI4Uk42SWtOSVY4Z1dzNFZZM0RucGczMWJUNi1oV2JadHRpV0g4XzJhX21vYnB3dFE=")
  : "";
const GEMINI_MODEL = "gemini-flash-latest";

function getGeminiApiKey() {
  return localStorage.getItem("tashido_gemini_api_key") || DEFAULT_GEMINI_KEY;
}

function setGeminiApiKey(key) {
  if (key && key.trim()) {
    localStorage.setItem("tashido_gemini_api_key", key.trim());
  } else {
    localStorage.removeItem("tashido_gemini_api_key");
  }
}

/**
 * Transcribe Chord Sheet Photo using Gemini Flash Multimodal API
 */
async function processChordSheetImage(file) {
  const apiKey = getGeminiApiKey();
  const dropContent = $("dropzoneContent");
  const scanningState = $("aiScanningState");
  const scanPreview = $("aiScanPreview");

  // Show loading spinner
  dropContent.style.display = "none";
  scanPreview.style.display = "none";
  scanningState.style.display = "flex";

  try {
    const reader = new FileReader();
    const dataUrl = await new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    const mimeType = file.type || "image/png";
    const base64Data = dataUrl.split(",")[1];

    const promptText = `You are an expert guitar music transcriber. Transcribe this guitar chord sheet image accurately into structured song data.

CRITICAL INSTRUCTIONS:
1. Ignore and DISCARD all watermarks (e.g. 'NT LYRIC & CHORD', website URLs, channel names, watermarks in the background).
2. Ignore and DISCARD any unrelated scribbles, page numbers, decorative drawings, ads, logos, or 'Fade Out' notes.
3. Identify:
   - title: Song title (e.g. ဖြေလွှတ်ပစ်လိုက်တဲ့ကြိုး)
   - artist: Singer or composer (e.g. စိုးလွင်လွင်)
   - key: Key (e.g. G)
   - capo: 0 unless specified
4. Format the lyrics with inline guitar chords in brackets [Chord] placed EXACTLY right before the Burmese/English syllable or word that the chord aligns with vertically.
   Example:
   [G]ကိုယ် ရေးခဲ့သော [Em]သီချင်းတွေ ကြုံတွေ့ခဲ့သော [Am]အဖြစ်တွေ [D]
5. Preserve song sections with clean headers like:
   Intro:
   [G] [Em] [Am] [D]
   Verse 1:
   ...
   Verse 2:
   ...
   Chorus:
   ...
   Solo:
   ...
   Ending:

Return STRICT JSON format:
{
  "title": "...",
  "artist": "...",
  "key": "...",
  "capo": 0,
  "lyrics": "..."
}`;

    const payload = {
      contents: [{
        parts: [
          { text: promptText },
          {
            inline_data: {
              mime_type: mimeType,
              data: base64Data
            }
          }
        ]
      }],
      generationConfig: {
        response_mime_type: "application/json"
      }
    };

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson?.error?.message || `Gemini API request failed (${res.status})`);
    }

    const data = await res.json();
    const rawJsonText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawJsonText) throw new Error("No response text from Gemini");

    const cleanJson = rawJsonText.replace(/^```json\s*/, "").replace(/\s*```$/, "").trim();
    const parsed = JSON.parse(cleanJson);

    // Populate form fields
    if (parsed.title) $("fTitle").value = parsed.title;
    if (parsed.artist) $("fArtist").value = parsed.artist;
    /* Genre is never auto-filled: the user types it, or leaves it empty. */
    if (parsed.key) $("fKey").value = parsed.key;
    if (typeof parsed.capo === "number") $("fCapo").value = parsed.capo;
    if (parsed.lyrics) $("fLyrics").value = parsed.lyrics;

    const detectedLang = parsed.language || detectSongLanguage(parsed.title, parsed.lyrics);
    if ($("fLanguage")) $("fLanguage").value = detectedLang;

    // Show preview & success
    $("aiThumbImg").src = dataUrl;
    $("aiScanMeta").textContent = `${parsed.title || "Song"} • Key ${parsed.key || "C"} • Chords extracted`;
    scanningState.style.display = "none";
    scanPreview.style.display = "flex";

    // Switch to Visual Aligner mode so user can review and nudge chord positions
    switchEditorTab("visual");
    renderVisualAligner();
  } catch (err) {
    console.error("Gemini Scan Error:", err);
    alert("Gemini Scan Error: " + err.message);
    scanningState.style.display = "none";
    dropContent.style.display = "flex";
  }
}

// ==========================================================================
// VISUAL CHORD ALIGNER & NUDGE ENGINE
// ==========================================================================
let activeEditorMode = "text"; // 'text' or 'visual'

function switchEditorTab(mode) {
  activeEditorMode = mode;
  const isVisual = mode === "visual";
  $("tabTextMode").classList.toggle("active", !isVisual);
  $("tabVisualMode").classList.toggle("active", isVisual);
  $("textModeContainer").style.display = isVisual ? "none" : "block";
  $("visualModeContainer").style.display = isVisual ? "block" : "none";

  if (isVisual) {
    renderVisualAligner();
  }
}

function parseLineForAligner(line) {
  const trimmed = line.trim();
  const isSection = /^(intro|verse|chorus|bridge|outro|solo|ending|pre-chorus)[^:]*:?$/i.test(trimmed);
  if (isSection) {
    return { isSection: true, text: trimmed };
  }

  const regex = /\[([^\]]+)\]/g;
  let match;
  let plainText = "";
  let lastIndex = 0;
  const chords = [];

  while ((match = regex.exec(line)) !== null) {
    const textSegment = line.slice(lastIndex, match.index);
    plainText += textSegment;
    chords.push({
      chord: match[1],
      index: plainText.length
    });
    lastIndex = regex.lastIndex;
  }
  plainText += line.slice(lastIndex);

  return { isSection: false, plainText, chords };
}

function serializeLineFromAligner(plainText, chords) {
  const sorted = [...chords].sort((a, b) => a.index - b.index);
  let result = "";
  let currentIdx = 0;

  sorted.forEach(item => {
    const targetIdx = Math.max(0, Math.min(item.index, plainText.length));
    result += plainText.slice(currentIdx, targetIdx);
    result += `[${item.chord}]`;
    currentIdx = targetIdx;
  });
  result += plainText.slice(currentIdx);
  return result;
}

function renderVisualAligner() {
  const board = $("visualAlignerBoard");
  const rawText = $("fLyrics").value;
  const rawLines = rawText.split("\n");

  let html = "";
  rawLines.forEach((line, lineIdx) => {
    if (!line.trim()) {
      html += `<div style="height:10px"></div>`;
      return;
    }

    const parsed = parseLineForAligner(line);
    if (parsed.isSection) {
      html += `
        <div class="aligner-line">
          <span class="aligner-line-section">${escapeXml(parsed.text)}</span>
        </div>
      `;
      return;
    }

    // Chords row
    const chordPills = parsed.chords
      .map(
        (c, cIdx) => `
          <div class="aligner-chord-pill" data-line="${lineIdx}" data-cidx="${cIdx}">
            <button type="button" class="nudge-btn" onclick="nudgeChord(${lineIdx}, ${cIdx}, -1)" title="Nudge Left (ဘယ်ဘက်သို့ ၁ လုံးရွေ့)">◂</button>
            <span class="chord-name-tag" onclick="editChordName(${lineIdx}, ${cIdx})" title="Click to rename chord">${escapeXml(c.chord)}</span>
            <button type="button" class="nudge-btn" onclick="nudgeChord(${lineIdx}, ${cIdx}, 1)" title="Nudge Right (ညာဘက်သို့ ၁ လုံးရွေ့)">▸</button>
            <button type="button" class="remove-chord-btn" onclick="removeChord(${lineIdx}, ${cIdx})" title="Delete Chord">✕</button>
          </div>
        `
      )
      .join("");

    html += `
      <div class="aligner-line" data-line="${lineIdx}">
        <div class="aligner-chord-row">
          ${chordPills}
          <button type="button" class="aligner-add-chord-btn" onclick="addChordToLine(${lineIdx})">+ Chord</button>
        </div>
        <div class="aligner-text-row">${escapeXml(parsed.plainText || " ")}</div>
      </div>
    `;
  });

  board.innerHTML = html || `<p style="color:var(--ink-muted);text-align:center;padding:24px;">No lyrics yet. Upload an image above or type in the Text Editor tab.</p>`;
}

// Global functions for inline onclick handlers in visual aligner
window.nudgeChord = function(lineIdx, chordIdx, delta) {
  const rawLines = $("fLyrics").value.split("\n");
  const parsed = parseLineForAligner(rawLines[lineIdx]);

  if (parsed.chords[chordIdx]) {
    const chord = parsed.chords[chordIdx];
    chord.index = Math.max(0, Math.min(parsed.plainText.length, chord.index + delta));
    rawLines[lineIdx] = serializeLineFromAligner(parsed.plainText, parsed.chords);
    $("fLyrics").value = rawLines.join("\n");
    renderVisualAligner();
  }
};

window.editChordName = function(lineIdx, chordIdx) {
  const rawLines = $("fLyrics").value.split("\n");
  const parsed = parseLineForAligner(rawLines[lineIdx]);

  if (parsed.chords[chordIdx]) {
    const oldName = parsed.chords[chordIdx].chord;
    const newName = prompt("Rename chord:", oldName);
    if (newName && newName.trim()) {
      parsed.chords[chordIdx].chord = newName.trim();
      rawLines[lineIdx] = serializeLineFromAligner(parsed.plainText, parsed.chords);
      $("fLyrics").value = rawLines.join("\n");
      renderVisualAligner();
    }
  }
};

window.removeChord = function(lineIdx, chordIdx) {
  const rawLines = $("fLyrics").value.split("\n");
  const parsed = parseLineForAligner(rawLines[lineIdx]);

  parsed.chords.splice(chordIdx, 1);
  rawLines[lineIdx] = serializeLineFromAligner(parsed.plainText, parsed.chords);
  $("fLyrics").value = rawLines.join("\n");
  renderVisualAligner();
};

window.addChordToLine = function(lineIdx) {
  const chordName = prompt("Enter chord name (e.g. G, Em, Am, D, C):", "G");
  if (!chordName || !chordName.trim()) return;

  const rawLines = $("fLyrics").value.split("\n");
  const parsed = parseLineForAligner(rawLines[lineIdx]);

  parsed.chords.push({
    chord: chordName.trim(),
    index: 0
  });

  rawLines[lineIdx] = serializeLineFromAligner(parsed.plainText, parsed.chords);
  $("fLyrics").value = rawLines.join("\n");
  renderVisualAligner();
};

/**
 * Modal Management (Add / Edit Song)
 */
function openSongModal(songToEdit = null) {
  editingSongId = songToEdit ? songToEdit.id : null;
  $("modalTitle").textContent = songToEdit ? "Edit Song" : "Add New Song";

  $("fTitle").value = songToEdit ? songToEdit.title : "";
  $("fArtist").value = songToEdit ? songToEdit.artist || "" : "";
  $("fGenre").value = songToEdit ? songToEdit.genre || "" : "";
  $("fKey").value = songToEdit ? songToEdit.key || "C" : "C";
  $("fCapo").value = songToEdit ? songToEdit.capo || 0 : 0;
  $("fBpm").value = songToEdit ? songToEdit.bpm || 80 : 80;
  $("fYear").value = songToEdit ? songToEdit.year || "" : "";
  $("fLyrics").value = songToEdit ? songToEdit.lyrics : "";
  if ($("fLanguage")) $("fLanguage").value = songToEdit ? getSongLanguage(songToEdit) : "my";

  // Reset Dropzone UI
  $("dropzoneContent").style.display = "flex";
  $("aiScanningState").style.display = "none";
  $("aiScanPreview").style.display = "none";
  $("geminiApiKeyInput").value = getGeminiApiKey();

  // Reset tab to text mode
  switchEditorTab("text");

  // Show/Hide Delete Button inside Modal (only show when editing an existing song)
  const modalDeleteBtn = $("modalDeleteSongBtn");
  if (modalDeleteBtn) {
    modalDeleteBtn.style.display = songToEdit ? "inline-flex" : "none";
  }

  $("songModal").classList.add("open");
}

function closeSongModal() {
  $("songModal").classList.remove("open");
}

function saveSongFromModal() {
  const title = $("fTitle").value.trim();
  if (!title) {
    alert("Please enter a song title.");
    return;
  }

  const lyrics = $("fLyrics").value;
  const language = $("fLanguage") ? $("fLanguage").value : detectSongLanguage(title, lyrics);

  const songData = {
    title,
    artist: $("fArtist").value.trim() || "Unknown",
    genre: $("fGenre").value.trim(),
    language,
    key: $("fKey").value.trim() || "C",
    capo: parseInt($("fCapo").value, 10) || 0,
    bpm: parseInt($("fBpm").value, 10) || 80,
    year: $("fYear").value.trim() || "2024",
    lyrics
  };

  if (editingSongId) {
    const existing = songs.find(s => s.id === editingSongId);
    if (existing) {
      Object.assign(existing, songData);
      saveSongToFirebase(existing);
    }
  } else {
    const newSong = {
      id: "song-" + Date.now(),
      fav: false,
      createdAt: Date.now(),
      ...songData
    };
    songs.unshift(newSong);
    currentSongId = newSong.id;
    homeCatalogPage = 0;
    saveSongToFirebase(newSong);
  }

  saveSongs();
  closeSongModal();
  transposeSteps = 0;
  $("trVal").textContent = "0";
  render();
}

/**
 * Delete Current Song with Burmese Confirmation
 */
function deleteCurrentSong() {
  const s = editingSongId ? songs.find(x => x.id === editingSongId) : getCurrentSong();
  if (!s) return;

  if (songs.length <= 1) {
    alert("သီချင်းအားလုံးကို မဖျက်နိုင်ပါ။ စာရင်းထဲတွင် အနည်းဆုံး သီချင်းတစ်ပုဒ် ရှိရပါမည်။");
    return;
  }

  const confirmed = confirm(`သီချင်း "${s.title}" ကို အပြီးတိုင် ဖျက်မှာ သေချာပါသလား?\n\nဖျက်ပြီးပါက ပြန်လည်ရယူနိုင်မည် မဟုတ်ပါ။`);
  if (confirmed) {
    const idToDelete = s.id;
    songs = songs.filter(x => x.id !== idToDelete);
    queueIds = queueIds.filter(x => x !== idToDelete);
    saveQueue();
    currentSongId = songs[0].id;
    saveSongs();
    deleteSongFromFirebase(idToDelete);
    closeSongModal();
    transposeSteps = 0;
    $("trVal").textContent = "0";
    render();
  }
}

/**
 * Export Library to JSON
 */
function exportLibrary() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(songs, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `tashido_chords_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * Import Library from JSON
 */
function importLibrary(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported) && imported.length > 0) {
        songs = imported;
        currentSongId = songs[0].id;
        saveSongs();
        render();
        alert(`Successfully imported ${imported.length} songs!`);
      } else {
        alert("Invalid file format. Expected a list of songs.");
      }
    } catch (err) {
      alert("Error reading JSON file: " + err.message);
    }
  };
  reader.readAsText(file);
}

/**
 * Step through songs (Next / Previous)
 */
function stepSong(direction) {
  const idx = songs.findIndex(s => s.id === currentSongId);
  currentSongId = songs[(idx + direction + songs.length) % songs.length].id;
  transposeSteps = 0;
  $("trVal").textContent = "0";
  render();
  const lyricsBox = $("lyricsCard");
  if (lyricsBox) lyricsBox.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Strum all chords in current song for practice
 */
function strumAllSongChords() {
  const song = getCurrentSong();
  const chords = getUniqueChords(song);
  if (!chords.length) return;

  chords.forEach((c, i) => {
    setTimeout(() => {
      const trans = transposeChord(c, transposeSteps);
      playChordAudio(trans);
    }, i * 650);
  });
}

/**
 * Event Bindings Setup
 */
function setupEventListeners() {
  // Navigation tabs (All, Favorites, Recent, Artists)
  document.querySelectorAll(".nav-item[data-view]").forEach(btn => {
    btn.onclick = () => {
      currentView = btn.dataset.view;
      if (currentView === "all" || currentView === "fav") {
        homeFilter = currentView;
      }
      document.querySelectorAll(".nav-item[data-view]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      openHomeView();
    };
  });

  // Categories Sub-menu Toggle
  const catBtn = $("categoriesToggleBtn");
  const catMenu = $("categoriesSubMenu");
  const catArrow = $("categoriesArrow");
  if (catBtn && catMenu) {
    catBtn.onclick = () => {
      catMenu.classList.toggle("open");
      if (catArrow) catArrow.textContent = catMenu.classList.contains("open") ? "▴" : "▾";
    };
  }

  // Sub-categories items (English, Myanmar)
  document.querySelectorAll(".sub-nav-item[data-view]").forEach(btn => {
    btn.onclick = () => {
      const v = btn.dataset.view;
      currentView = v;
      homeFilter = v;
      openHomeView();
    };
  });

  // Apple Music Home View Filter Pills
  document.querySelectorAll(".home-pill[data-home-filter]").forEach(pill => {
    pill.onclick = () => {
      homeFilter = pill.dataset.homeFilter;
      homeCatalogPage = 0;
      renderHomeView();
    };
  });

  // Artists view: back from an artist's songs to the artist list
  if ($("homeArtistsBackBtn")) {
    $("homeArtistsBackBtn").onclick = () => {
      selectedArtist = null;
      renderHomeView();
    };
  }

  // All Songs navigation: Prev / Next pages, Display all songs
  if ($("homeCatalogPrevBtn")) {
    $("homeCatalogPrevBtn").onclick = () => {
      if (homeCatalogPage > 0) homeCatalogPage--;
      renderHomeView();
    };
  }
  if ($("homeCatalogNextBtn")) {
    $("homeCatalogNextBtn").onclick = () => {
      homeCatalogPage++;
      renderHomeView();
    };
  }
  if ($("homeCatalogShowAllBtn")) {
    $("homeCatalogShowAllBtn").onclick = () => {
      homeCatalogShowAll = !homeCatalogShowAll;
      renderHomeView();
    };
  }
  if ($("homeCatalogSortRecentBtn")) {
    $("homeCatalogSortRecentBtn").onclick = () => {
      homeCatalogSort = "recent";
      homeCatalogPage = 0;
      renderHomeView();
    };
  }
  if ($("homeCatalogSortNameBtn")) {
    $("homeCatalogSortNameBtn").onclick = () => {
      homeCatalogSort = "name";
      homeCatalogPage = 0;
      renderHomeView();
    };
  }
  // Artists navigation and sort, like All Songs
  if ($("homeArtistsPrevBtn")) {
    $("homeArtistsPrevBtn").onclick = () => {
      if (artistsPage > 0) artistsPage--;
      renderHomeView();
    };
  }
  if ($("homeArtistsNextBtn")) {
    $("homeArtistsNextBtn").onclick = () => {
      artistsPage++;
      renderHomeView();
    };
  }
  if ($("homeArtistsShowAllBtn")) {
    $("homeArtistsShowAllBtn").onclick = () => {
      artistsShowAll = !artistsShowAll;
      renderHomeView();
    };
  }
  if ($("homeArtistsSortNameBtn")) {
    $("homeArtistsSortNameBtn").onclick = () => {
      artistsSort = "name";
      artistsPage = 0;
      renderHomeView();
    };
  }
  if ($("homeArtistsSortRecentBtn")) {
    $("homeArtistsSortRecentBtn").onclick = () => {
      artistsSort = "recent";
      artistsPage = 0;
      renderHomeView();
    };
  }
  // Artist detail songs sort: Name (default) or Recently Added
  if ($("homeArtistDetailSortNameBtn")) {
    $("homeArtistDetailSortNameBtn").onclick = () => {
      artistDetailSort = "name";
      renderHomeView();
    };
  }
  if ($("homeArtistDetailSortRecentBtn")) {
    $("homeArtistDetailSortRecentBtn").onclick = () => {
      artistDetailSort = "recent";
      renderHomeView();
    };
  }

  // Back to Library button from Song View
  if ($("heroBackBtn")) {
    $("heroBackBtn").onclick = () => openHomeView();
  }

  // Queue controls: Clear Queue in the sidebar header, Add to Queue in song view
  if ($("clearQueueBtn")) {
    $("clearQueueBtn").onclick = () => clearQueue();
  }
  if ($("queueAddBtn")) {
    $("queueAddBtn").onclick = () => {
      if (currentSongId) addToQueue(currentSongId);
    };
  }

  // Brand logo click navigates to Home
  const brandLogo = document.querySelector(".brand");
  if (brandLogo) {
    brandLogo.style.cursor = "pointer";
    brandLogo.onclick = () => openHomeView();
  }

  // Search input + clear button
  if ($("searchInput")) {
    $("searchInput").oninput = () => {
      homeCatalogPage = 0;
      artistsPage = 0;
      const clearBtn = $("searchClearBtn");
      if (clearBtn) clearBtn.style.display = $("searchInput").value ? "block" : "none";
      renderSongList();
      if (currentAppView === "home") renderHomeView();
    };
  }
  if ($("searchClearBtn")) {
    $("searchClearBtn").onclick = () => {
      $("searchInput").value = "";
      homeCatalogPage = 0;
      artistsPage = 0;
      $("searchClearBtn").style.display = "none";
      renderSongList();
      if (currentAppView === "home") renderHomeView();
      $("searchInput").focus();
    };
  }

  // Add / Edit Song Buttons
  $("addSongBtn").onclick = () => openSongModal(null);
  $("editSongBtn").onclick = () => openSongModal(getCurrentSong());
  if ($("deleteSongBtn")) $("deleteSongBtn").onclick = deleteCurrentSong;

  // Delete button inside Modal
  if ($("modalDeleteSongBtn")) {
    $("modalDeleteSongBtn").onclick = deleteCurrentSong;
  }

  $("cancelModalBtn").onclick = closeSongModal;
  $("closeModalX").onclick = closeSongModal;
  $("saveSongModalBtn").onclick = saveSongFromModal;

  $("songModal").addEventListener("click", e => {
    if (e.target.id === "songModal") closeSongModal();
  });

  // Editor Tabs (Text vs Visual Chord Aligner)
  $("tabTextMode").onclick = () => switchEditorTab("text");
  $("tabVisualMode").onclick = () => switchEditorTab("visual");

  // Gemini Photo Dropzone & File Input
  const dropzone = $("aiDropzone");
  const fileInput = $("chordImgInput");

  dropzone.onclick = e => {
    // Only trigger if not clicking inside reUpload button
    if (e.target.id !== "reUploadBtn") {
      fileInput.click();
    }
  };

  $("reUploadBtn").onclick = e => {
    e.stopPropagation();
    fileInput.click();
  };

  fileInput.onchange = e => {
    if (e.target.files && e.target.files[0]) {
      processChordSheetImage(e.target.files[0]);
    }
  };

  dropzone.ondragover = e => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  };

  dropzone.ondragleave = () => {
    dropzone.classList.remove("dragover");
  };

  dropzone.ondrop = e => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processChordSheetImage(e.dataTransfer.files[0]);
    }
  };

  // Clipboard Paste support (Ctrl+V / Cmd+V)
  window.addEventListener("paste", e => {
    if (!$("songModal").classList.contains("open")) return;
    const items = e.clipboardData?.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          processChordSheetImage(file);
          break;
        }
      }
    }
  });

  // Gemini API Key Settings Toggle & Save
  $("toggleApiKeyBtn").onclick = () => {
    const el = $("aiKeySettings");
    el.style.display = el.style.display === "none" ? "block" : "none";
  };

  $("saveApiKeyBtn").onclick = () => {
    setGeminiApiKey($("geminiApiKeyInput").value);
    alert("Gemini API Key updated successfully!");
    $("aiKeySettings").style.display = "none";
  };

  // Favorite Button
  $("favBtn").onclick = () => {
    const s = getCurrentSong();
    s.fav = !s.fav;
    saveSongs();
    render();
  };

  // Play / Auto-scroll Buttons
  $("heroPlayBtn").onclick = () => toggleAutoScroll();
  $("barPlayBtn").onclick = () => toggleAutoScroll();
  $("scrollSwitch").onclick = () => toggleAutoScroll();

  // Next / Prev Buttons
  $("nextSongBtn").onclick = () => stepSong(1);
  $("prevSongBtn").onclick = () => stepSong(-1);

  // Auto-scroll Speed Control (Synchronized between panel & bottom bar)
  function handleSpeedChange(newVal) {
    scrollSpeed = parseInt(newVal, 10);
    if ($("speedVal")) $("speedVal").textContent = scrollSpeed + "x";
    if ($("panelSpeedVal")) $("panelSpeedVal").textContent = scrollSpeed + "x";
    if ($("scrollSpeedInput")) $("scrollSpeedInput").value = scrollSpeed;
    if ($("panelScrollSpeedInput")) $("panelScrollSpeedInput").value = scrollSpeed;
    if (isAutoScrolling) {
      toggleAutoScroll(true);
    }
  }

  if ($("scrollSpeedInput")) $("scrollSpeedInput").oninput = e => handleSpeedChange(e.target.value);
  if ($("panelScrollSpeedInput")) $("panelScrollSpeedInput").oninput = e => handleSpeedChange(e.target.value);

  // Transpose Controls
  $("trMinus").onclick = () => {
    transposeSteps--;
    $("trVal").textContent = transposeSteps;
    render();
  };
  $("trPlus").onclick = () => {
    transposeSteps++;
    $("trVal").textContent = transposeSteps;
    render();
  };

  // Capo Controls
  $("capoMinus").onclick = () => {
    const s = getCurrentSong();
    s.capo = Math.max(0, (parseInt(s.capo, 10) || 0) - 1);
    saveSongs();
    render();
  };
  $("capoPlus").onclick = () => {
    const s = getCurrentSong();
    s.capo = Math.min(12, (parseInt(s.capo, 10) || 0) + 1);
    saveSongs();
    render();
  };

  // Font Size Slider
  $("fontSizeInput").oninput = e => {
    const val = e.target.value + "px";
    $("fontSizeVal").textContent = val;
    $("lyricsContainer").style.fontSize = val;
  };

  // Show/Hide Chords Switch
  $("chordsSwitch").onclick = () => {
    showChords = !showChords;
    $("chordsSwitch").classList.toggle("active", showChords);
    $("lyricsContainer").classList.toggle("hide-chords", !showChords);
  };

  // Two Column Layout Switch
  $("colToggleBtn").onclick = () => {
    isTwoColumns = !isTwoColumns;
    $("lyricsCard").classList.toggle("two-columns", isTwoColumns);
    $("colToggleBtn").classList.toggle("active", isTwoColumns);
  };

  // Metronome Controls
  $("metronomeToggleBtn").onclick = toggleMetronome;
  $("metronomeBpmInput").oninput = e => {
    metronomeBpm = parseInt(e.target.value, 10);
    $("bpmVal").textContent = metronomeBpm;
    if (isMetronomePlaying) {
      toggleMetronome();
      toggleMetronome();
    }
  };

  // Guitar Tuner Buttons
  const TUNER_FREQS = {
    E2: 82.41,
    A2: 110.0,
    D3: 146.83,
    G3: 196.0,
    B3: 246.94,
    E4: 329.63
  };

  document.querySelectorAll(".tuner-btn[data-note]").forEach(btn => {
    btn.onclick = () => {
      const note = btn.dataset.note;
      const freq = TUNER_FREQS[note];
      if (freq) {
        btn.classList.add("sounding");
        playTunerTone(freq, 2.5);
        setTimeout(() => btn.classList.remove("sounding"), 2500);
      }
    };
  });

  // Strum Practice Button (if present)
  if ($("strumPracticeBtn")) $("strumPracticeBtn").onclick = strumAllSongChords;

  // Print Button
  $("printBtn").onclick = () => window.print();

  // Export / Import
  if ($("exportBtn")) $("exportBtn").onclick = exportLibrary;
  if ($("importFileInput")) $("importFileInput").onchange = importLibrary;

  // Firebase Cloud Modal Event Bindings
  const fbModal = $("firebaseModal");
  if ($("openFirebaseModalBtn")) {
    $("openFirebaseModalBtn").onclick = () => {
      const stored = getStoredFirebaseConfig();
      if (stored) {
        $("firebaseConfigInput").value = JSON.stringify(stored, null, 2);
      }
      fbModal.classList.add("open");
    };
  }

  if ($("closeFirebaseModalX")) $("closeFirebaseModalX").onclick = () => fbModal.classList.remove("open");
  if ($("cancelFirebaseModalBtn")) $("cancelFirebaseModalBtn").onclick = () => fbModal.classList.remove("open");
  if (fbModal) {
    fbModal.onclick = e => { if (e.target.id === "firebaseModal") fbModal.classList.remove("open"); };
  }

  if ($("saveFirebaseConfigBtn")) {
    $("saveFirebaseConfigBtn").onclick = async () => {
      const raw = $("firebaseConfigInput").value.trim();
      if (!raw) {
        alert("Please paste your Firebase configuration.");
        return;
      }
      try {
        let configObj;
        try {
          configObj = JSON.parse(raw);
        } catch (jsonErr) {
          const cleaned = raw.replace(/^const\s+firebaseConfig\s*=\s*/, "").replace(/;$/, "");
          configObj = new Function(`return (${cleaned});`)();
        }

        if (!configObj || !configObj.projectId) {
          alert("Invalid Firebase config. Missing projectId.");
          return;
        }

        localStorage.setItem(FIREBASE_CONFIG_KEY, JSON.stringify(configObj));
        const ok = initFirebase(configObj);
        if (ok) {
          await uploadAllLocalSongsToFirestore();
          alert("Firebase Cloud Database Connected! All songs are synced with your cloud Firestore database.");
          fbModal.classList.remove("open");
        } else {
          alert("Could not connect to Firebase with this configuration. Please check your credentials.");
        }
      } catch (e) {
        alert("Error parsing Firebase configuration: " + e.message);
      }
    };
  }

  if ($("disconnectFirebaseBtn")) {
    $("disconnectFirebaseBtn").onclick = () => {
      if (confirm("Disconnect Firebase Cloud? Your songs will still be preserved locally in your browser.")) {
        localStorage.removeItem(FIREBASE_CONFIG_KEY);
        if (unsubscribeFirestore) unsubscribeFirestore();
        isFirebaseConnected = false;
        updateCloudStatusUI(false);
        fbModal.classList.remove("open");
        alert("Disconnected from Firebase.");
      }
    };
  }
}

// Initial Boot
window.addEventListener("DOMContentLoaded", () => {
  loadSongs();
  setupEventListeners();
  openHomeView();

  // Set default font size to 15px
  if ($("lyricsContainer")) $("lyricsContainer").style.fontSize = "15px";

  // Try auto-connecting stored Firebase
  const storedConfig = getStoredFirebaseConfig();
  if (storedConfig) {
    initFirebase(storedConfig);
  }
});
