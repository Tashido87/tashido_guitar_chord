/**
 * Tashido Guitar Chord - Comprehensive Guitar Chord Database
 * Format: frets array [string6(low E), string5(A), string4(D), string3(G), string2(B), string1(high E)]
 * -1 = mute (x), 0 = open (o), 1..n = fret number
 * baseFret: starting fret for higher positions (1 is standard open position)
 * fingers: suggested finger [T/1/2/3/4] for each string (-1 or 0 is null)
 * barres: array of fret numbers where index finger bars across strings
 */

const CHORD_DATABASE = {
  // Major Chords
  "C": { frets: [-1, 3, 2, 0, 1, 0], baseFret: 1, fingers: [0, 3, 2, 0, 1, 0] },
  "C#": { frets: [-1, 4, 3, 1, 2, 1], baseFret: 1, fingers: [0, 4, 3, 1, 2, 1], barres: [1] },
  "Db": { frets: [-1, 4, 3, 1, 2, 1], baseFret: 1, fingers: [0, 4, 3, 1, 2, 1], barres: [1] },
  "D": { frets: [-1, -1, 0, 2, 3, 2], baseFret: 1, fingers: [0, 0, 0, 1, 3, 2] },
  "D#": { frets: [-1, -1, 1, 3, 4, 3], baseFret: 1, fingers: [0, 0, 1, 2, 4, 3] },
  "Eb": { frets: [-1, -1, 1, 3, 4, 3], baseFret: 1, fingers: [0, 0, 1, 2, 4, 3] },
  "E": { frets: [0, 2, 2, 1, 0, 0], baseFret: 1, fingers: [0, 2, 3, 1, 0, 0] },
  "F": { frets: [1, 3, 3, 2, 1, 1], baseFret: 1, fingers: [1, 3, 4, 2, 1, 1], barres: [1] },
  "F#": { frets: [2, 4, 4, 3, 2, 2], baseFret: 2, fingers: [1, 3, 4, 2, 1, 1], barres: [2] },
  "Gb": { frets: [2, 4, 4, 3, 2, 2], baseFret: 2, fingers: [1, 3, 4, 2, 1, 1], barres: [2] },
  "G": { frets: [3, 2, 0, 0, 0, 3], baseFret: 1, fingers: [2, 1, 0, 0, 0, 3] },
  "G#": { frets: [4, 6, 6, 5, 4, 4], baseFret: 4, fingers: [1, 3, 4, 2, 1, 1], barres: [4] },
  "Ab": { frets: [4, 6, 6, 5, 4, 4], baseFret: 4, fingers: [1, 3, 4, 2, 1, 1], barres: [4] },
  "A": { frets: [-1, 0, 2, 2, 2, 0], baseFret: 1, fingers: [0, 0, 1, 2, 3, 0] },
  "A#": { frets: [-1, 1, 3, 3, 3, 1], baseFret: 1, fingers: [0, 1, 2, 3, 4, 1], barres: [1] },
  "Bb": { frets: [-1, 1, 3, 3, 3, 1], baseFret: 1, fingers: [0, 1, 2, 3, 4, 1], barres: [1] },
  "B": { frets: [-1, 2, 4, 4, 4, 2], baseFret: 2, fingers: [0, 1, 2, 3, 4, 1], barres: [2] },

  // Minor Chords
  "Cm": { frets: [-1, 3, 5, 5, 4, 3], baseFret: 3, fingers: [0, 1, 3, 4, 2, 1], barres: [3] },
  "C#m": { frets: [-1, 4, 6, 6, 5, 4], baseFret: 4, fingers: [0, 1, 3, 4, 2, 1], barres: [4] },
  "Dbm": { frets: [-1, 4, 6, 6, 5, 4], baseFret: 4, fingers: [0, 1, 3, 4, 2, 1], barres: [4] },
  "Dm": { frets: [-1, -1, 0, 2, 3, 1], baseFret: 1, fingers: [0, 0, 0, 2, 3, 1] },
  "D#m": { frets: [-1, -1, 1, 3, 4, 2], baseFret: 1, fingers: [0, 0, 1, 3, 4, 2] },
  "Ebm": { frets: [-1, -1, 1, 3, 4, 2], baseFret: 1, fingers: [0, 0, 1, 3, 4, 2] },
  "Em": { frets: [0, 2, 2, 0, 0, 0], baseFret: 1, fingers: [0, 2, 3, 0, 0, 0] },
  "Fm": { frets: [1, 3, 3, 1, 1, 1], baseFret: 1, fingers: [1, 3, 4, 1, 1, 1], barres: [1] },
  "F#m": { frets: [2, 4, 4, 2, 2, 2], baseFret: 2, fingers: [1, 3, 4, 1, 1, 1], barres: [2] },
  "Gbm": { frets: [2, 4, 4, 2, 2, 2], baseFret: 2, fingers: [1, 3, 4, 1, 1, 1], barres: [2] },
  "Gm": { frets: [3, 5, 5, 3, 3, 3], baseFret: 3, fingers: [1, 3, 4, 1, 1, 1], barres: [3] },
  "G#m": { frets: [4, 6, 6, 4, 4, 4], baseFret: 4, fingers: [1, 3, 4, 1, 1, 1], barres: [4] },
  "Abm": { frets: [4, 6, 6, 4, 4, 4], baseFret: 4, fingers: [1, 3, 4, 1, 1, 1], barres: [4] },
  "Am": { frets: [-1, 0, 2, 2, 1, 0], baseFret: 1, fingers: [0, 0, 2, 3, 1, 0] },
  "A#m": { frets: [-1, 1, 3, 3, 2, 1], baseFret: 1, fingers: [0, 1, 3, 4, 2, 1], barres: [1] },
  "Bbm": { frets: [-1, 1, 3, 3, 2, 1], baseFret: 1, fingers: [0, 1, 3, 4, 2, 1], barres: [1] },
  "Bm": { frets: [-1, 2, 4, 4, 3, 2], baseFret: 2, fingers: [0, 1, 3, 4, 2, 1], barres: [2] },

  // Dominant 7th Chords
  "C7": { frets: [-1, 3, 2, 3, 1, 0], baseFret: 1, fingers: [0, 3, 2, 4, 1, 0] },
  "D7": { frets: [-1, -1, 0, 2, 1, 2], baseFret: 1, fingers: [0, 0, 0, 2, 1, 3] },
  "E7": { frets: [0, 2, 0, 1, 0, 0], baseFret: 1, fingers: [0, 2, 0, 1, 0, 0] },
  "F7": { frets: [1, 3, 1, 2, 1, 1], baseFret: 1, fingers: [1, 3, 1, 2, 1, 1], barres: [1] },
  "F#7": { frets: [2, 4, 2, 3, 2, 2], baseFret: 2, fingers: [1, 3, 1, 2, 1, 1], barres: [2] },
  "G7": { frets: [3, 2, 0, 0, 0, 1], baseFret: 1, fingers: [3, 2, 0, 0, 0, 1] },
  "A7": { frets: [-1, 0, 2, 0, 2, 0], baseFret: 1, fingers: [0, 0, 2, 0, 3, 0] },
  "B7": { frets: [-1, 2, 1, 2, 0, 2], baseFret: 1, fingers: [0, 2, 1, 3, 0, 4] },
  "Bb7": { frets: [-1, 1, 3, 1, 3, 1], baseFret: 1, fingers: [0, 1, 3, 1, 4, 1], barres: [1] },

  // Minor 7th Chords
  "Cm7": { frets: [-1, 3, 5, 3, 4, 3], baseFret: 3, fingers: [0, 1, 3, 1, 2, 1], barres: [3] },
  "Dm7": { frets: [-1, -1, 0, 2, 1, 1], baseFret: 1, fingers: [0, 0, 0, 2, 1, 1], barres: [1] },
  "Em7": { frets: [0, 2, 0, 0, 0, 0], baseFret: 1, fingers: [0, 2, 0, 0, 0, 0] },
  "F#m7": { frets: [2, 4, 2, 2, 2, 2], baseFret: 2, fingers: [1, 3, 1, 1, 1, 1], barres: [2] },
  "Gm7": { frets: [3, 5, 3, 3, 3, 3], baseFret: 3, fingers: [1, 3, 1, 1, 1, 1], barres: [3] },
  "Am7": { frets: [-1, 0, 2, 0, 1, 0], baseFret: 1, fingers: [0, 0, 2, 0, 1, 0] },
  "Bm7": { frets: [-1, 2, 4, 2, 3, 2], baseFret: 2, fingers: [0, 1, 3, 1, 2, 1], barres: [2] },

  // Major 7th Chords
  "Cmaj7": { frets: [-1, 3, 2, 0, 0, 0], baseFret: 1, fingers: [0, 3, 2, 0, 0, 0] },
  "Dmaj7": { frets: [-1, -1, 0, 2, 2, 2], baseFret: 1, fingers: [0, 0, 0, 1, 2, 3] },
  "Emaj7": { frets: [0, 2, 1, 1, 0, 0], baseFret: 1, fingers: [0, 3, 1, 2, 0, 0] },
  "Fmaj7": { frets: [-1, -1, 3, 2, 1, 0], baseFret: 1, fingers: [0, 0, 3, 2, 1, 0] },
  "Gmaj7": { frets: [3, 2, 0, 0, 0, 2], baseFret: 1, fingers: [3, 2, 0, 0, 0, 1] },
  "Amaj7": { frets: [-1, 0, 2, 1, 2, 0], baseFret: 1, fingers: [0, 0, 2, 1, 3, 0] },
  "Bmaj7": { frets: [-1, 2, 4, 3, 4, 2], baseFret: 2, fingers: [0, 1, 3, 2, 4, 1], barres: [2] },

  // Suspended & Add Chords
  "Csus4": { frets: [-1, 3, 3, 0, 1, 1], baseFret: 1, fingers: [0, 3, 4, 0, 1, 1], barres: [1] },
  "Dsus4": { frets: [-1, -1, 0, 2, 3, 3], baseFret: 1, fingers: [0, 0, 0, 1, 3, 4] },
  "Dsus2": { frets: [-1, -1, 0, 2, 3, 0], baseFret: 1, fingers: [0, 0, 0, 1, 3, 0] },
  "Esus4": { frets: [0, 2, 2, 2, 0, 0], baseFret: 1, fingers: [0, 2, 3, 4, 0, 0] },
  "Gsus4": { frets: [3, 3, 0, 0, 1, 3], baseFret: 1, fingers: [2, 3, 0, 0, 1, 4] },
  "Asus2": { frets: [-1, 0, 2, 2, 0, 0], baseFret: 1, fingers: [0, 0, 1, 2, 0, 0] },
  "Asus4": { frets: [-1, 0, 2, 2, 3, 0], baseFret: 1, fingers: [0, 0, 1, 2, 3, 0] },
  "Cadd9": { frets: [-1, 3, 2, 0, 3, 3], baseFret: 1, fingers: [0, 2, 1, 0, 3, 4] },
  "Gadd9": { frets: [3, 2, 0, 2, 0, 3], baseFret: 1, fingers: [2, 1, 0, 3, 0, 4] },

  // Slash / Inverted Chords
  "G/B": { frets: [-1, 2, 0, 0, 3, 3], baseFret: 1, fingers: [0, 1, 0, 0, 3, 4] },
  "C/E": { frets: [0, 3, 2, 0, 1, 0], baseFret: 1, fingers: [0, 3, 2, 0, 1, 0] },
  "D/F#": { frets: [2, 0, 0, 2, 3, 2], baseFret: 1, fingers: [1, 0, 0, 2, 4, 3] },
  "F/A": { frets: [-1, 0, 3, 2, 1, 1], baseFret: 1, fingers: [0, 0, 3, 2, 1, 1] },
  "Am/G": { frets: [3, 0, 2, 2, 1, 0], baseFret: 1, fingers: [4, 0, 2, 3, 1, 0] }
};

// Open string MIDI pitches (Standard tuning: E2, A2, D3, G3, B3, E4)
const STANDARD_TUNING_MIDI = [40, 45, 50, 55, 59, 64];

/**
 * Calculates MIDI pitch numbers for a given chord frets array
 */
function getChordMidiPitches(chordName) {
  const data = CHORD_DATABASE[chordName];
  if (!data) return [48, 52, 55, 60]; // default C triad
  const pitches = [];
  data.frets.forEach((fret, stringIdx) => {
    if (fret >= 0) {
      pitches.push(STANDARD_TUNING_MIDI[stringIdx] + fret);
    }
  });
  return pitches;
}

/**
 * Generate an SVG diagram for any chord
 */
function renderChordSVG(name, options = {}) {
  const data = CHORD_DATABASE[name];
  const width = options.width || 120;
  const height = options.height || 145;

  if (!data) {
    return `
      <svg class="chord-svg" width="${width}" height="${height}" viewBox="0 0 120 145">
        <text x="60" y="24" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">${escapeXml(name)}</text>
        <text x="60" y="80" text-anchor="middle" font-size="11" fill="#94a3b8">No diagram</text>
      </svg>
    `;
  }

  const { frets, baseFret = 1 } = data;
  const numFrets = 4;
  const numStrings = 6;
  const startX = 22;
  const startY = 40;
  const stringDist = 15;
  const fretDist = 20;
  const endX = startX + (numStrings - 1) * stringDist;
  const endY = startY + numFrets * fretDist;

  let svg = `<svg class="chord-svg" width="${width}" height="${height}" viewBox="0 0 120 145">`;
  
  // Chord Title
  svg += `<text x="60" y="22" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">${escapeXml(name)}</text>`;

  // Base Fret indicator (e.g. 3fr)
  if (baseFret > 1) {
    svg += `<text x="${startX - 6}" y="${startY + fretDist * 0.7}" text-anchor="end" font-size="10" font-weight="600" fill="#64748b">${baseFret}fr</text>`;
  }

  // Nut or top line
  if (baseFret === 1) {
    // Thick nut line
    svg += `<line x1="${startX - 1}" y1="${startY}" x2="${endX + 1}" y2="${startY}" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>`;
  } else {
    // Normal line
    svg += `<line x1="${startX}" y1="${startY}" x2="${endX}" y2="${startY}" stroke="#94a3b8" stroke-width="1.5"/>`;
  }

  // Fret horizontal lines
  for (let f = 1; f <= numFrets; f++) {
    const y = startY + f * fretDist;
    svg += `<line x1="${startX}" y1="${y}" x2="${endX}" y2="${y}" stroke="#cbd5e1" stroke-width="1.2"/>`;
  }

  // String vertical lines
  for (let s = 0; s < numStrings; s++) {
    const x = startX + s * stringDist;
    const strokeWidth = s < 3 ? 1.5 : 1.1; // lower strings slightly thicker
    svg += `<line x1="${x}" y1="${startY}" x2="${x}" y2="${endY}" stroke="#64748b" stroke-width="${strokeWidth}"/>`;
  }

  // Top indicators: 'x' or 'o'
  frets.forEach((fret, s) => {
    const x = startX + s * stringDist;
    if (fret === -1) {
      // Mute (X)
      svg += `<text x="${x}" y="${startY - 8}" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8">×</text>`;
    } else if (fret === 0) {
      // Open (O)
      svg += `<circle cx="${x}" cy="${startY - 10}" r="3.5" fill="none" stroke="#2563eb" stroke-width="1.5"/>`;
    }
  });

  // Finger dots
  frets.forEach((fret, s) => {
    if (fret > 0) {
      const relFret = fret - (baseFret - 1);
      if (relFret >= 1 && relFret <= numFrets) {
        const x = startX + s * stringDist;
        const y = startY + (relFret - 0.5) * fretDist;
        // Accent dot with subtle shadow
        svg += `<circle cx="${x}" cy="${y}" r="5.5" fill="#2563eb"/>`;
      }
    }
  });

  svg += `</svg>`;
  return svg;
}

function escapeXml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}
