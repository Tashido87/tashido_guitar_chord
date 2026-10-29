/**
 * Tashido Guitar Chord - Comprehensive Guitar Chord Database
 * Over 240+ accurately voiced acoustic guitar chords with fingerings and barres.
 * Format: frets array [string6(low E), string5(A), string4(D), string3(G), string2(B), string1(high E)]
 * -1 = mute (x), 0 = open (o), 1..n = fret number
 * baseFret: starting fret for higher positions (1 is standard open position)
 * fingers: suggested finger [T/1/2/3/4] for each string (0 is unassigned)
 * barres: array of fret numbers where index finger bars across strings
 */

const CHORD_DATABASE = {
  "C": {"frets": [-1, 3, 2, 0, 1, 0], "baseFret": 1, "fingers": [0, 3, 2, 0, 1, 0]},
  "C#": {"frets": [-1, 4, 3, 1, 2, 1], "baseFret": 1, "barres": [1], "fingers": [0, 4, 3, 1, 2, 1]},
  "Db": {"frets": [-1, 4, 3, 1, 2, 1], "baseFret": 1, "barres": [1], "fingers": [0, 4, 3, 1, 2, 1]},
  "D": {"frets": [-1, -1, 0, 2, 3, 2], "baseFret": 1, "fingers": [0, 0, 0, 1, 3, 2]},
  "D#": {"frets": [-1, -1, 1, 3, 4, 3], "baseFret": 1, "fingers": [0, 0, 1, 2, 4, 3]},
  "Eb": {"frets": [-1, 6, 8, 8, 8, 6], "baseFret": 6, "barres": [6], "fingers": [0, 1, 2, 3, 4, 1]},
  "E": {"frets": [0, 2, 2, 1, 0, 0], "baseFret": 1, "fingers": [0, 2, 3, 1, 0, 0]},
  "F": {"frets": [1, 3, 3, 2, 1, 1], "baseFret": 1, "barres": [1], "fingers": [1, 3, 4, 2, 1, 1]},
  "F#": {"frets": [2, 4, 4, 3, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 3, 4, 2, 1, 1]},
  "Gb": {"frets": [2, 4, 4, 3, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 3, 4, 2, 1, 1]},
  "G": {"frets": [3, 2, 0, 0, 0, 3], "baseFret": 1, "fingers": [2, 1, 0, 0, 0, 3]},
  "G#": {"frets": [4, 6, 6, 5, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 3, 4, 2, 1, 1]},
  "Ab": {"frets": [4, 6, 6, 5, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 3, 4, 2, 1, 1]},
  "A": {"frets": [-1, 0, 2, 2, 2, 0], "baseFret": 1, "fingers": [0, 0, 1, 2, 3, 0]},
  "A#": {"frets": [-1, 1, 3, 3, 3, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 2, 3, 4, 1]},
  "Bb": {"frets": [-1, 1, 3, 3, 3, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 2, 3, 4, 1]},
  "B": {"frets": [-1, 2, 4, 4, 4, 2], "baseFret": 2, "barres": [2], "fingers": [0, 1, 2, 3, 4, 1]},
  "Cm": {"frets": [-1, 3, 5, 5, 4, 3], "baseFret": 3, "barres": [3], "fingers": [0, 1, 3, 4, 2, 1]},
  "C#m": {"frets": [-1, 4, 6, 6, 5, 4], "baseFret": 4, "barres": [4], "fingers": [0, 1, 3, 4, 2, 1]},
  "Dbm": {"frets": [-1, 4, 6, 6, 5, 4], "baseFret": 4, "barres": [4], "fingers": [0, 1, 3, 4, 2, 1]},
  "Dm": {"frets": [-1, -1, 0, 2, 3, 1], "baseFret": 1, "fingers": [0, 0, 0, 2, 3, 1]},
  "D#m": {"frets": [-1, -1, 1, 3, 4, 2], "baseFret": 1, "fingers": [0, 0, 1, 3, 4, 2]},
  "Ebm": {"frets": [-1, -1, 1, 3, 4, 2], "baseFret": 1, "fingers": [0, 0, 1, 3, 4, 2]},
  "Em": {"frets": [0, 2, 2, 0, 0, 0], "baseFret": 1, "fingers": [0, 2, 3, 0, 0, 0]},
  "Fm": {"frets": [1, 3, 3, 1, 1, 1], "baseFret": 1, "barres": [1], "fingers": [1, 3, 4, 1, 1, 1]},
  "F#m": {"frets": [2, 4, 4, 2, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 3, 4, 1, 1, 1]},
  "Gbm": {"frets": [2, 4, 4, 2, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 3, 4, 1, 1, 1]},
  "Gm": {"frets": [3, 5, 5, 3, 3, 3], "baseFret": 3, "barres": [3], "fingers": [1, 3, 4, 1, 1, 1]},
  "G#m": {"frets": [4, 6, 6, 4, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 3, 4, 1, 1, 1]},
  "Abm": {"frets": [4, 6, 6, 4, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 3, 4, 1, 1, 1]},
  "Am": {"frets": [-1, 0, 2, 2, 1, 0], "baseFret": 1, "fingers": [0, 0, 2, 3, 1, 0]},
  "A#m": {"frets": [-1, 1, 3, 3, 2, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 4, 2, 1]},
  "Bbm": {"frets": [-1, 1, 3, 3, 2, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 4, 2, 1]},
  "Bm": {"frets": [-1, 2, 4, 4, 3, 2], "baseFret": 2, "barres": [2], "fingers": [0, 1, 3, 4, 2, 1]},
  "C7": {"frets": [-1, 3, 2, 3, 1, 0], "baseFret": 1, "fingers": [0, 3, 2, 4, 1, 0]},
  "C#7": {"frets": [-1, 4, 3, 4, 2, -1], "baseFret": 1, "fingers": [0, 3, 2, 4, 1, 0]},
  "Db7": {"frets": [-1, 4, 3, 4, 2, -1], "baseFret": 1, "fingers": [0, 3, 2, 4, 1, 0]},
  "D7": {"frets": [-1, -1, 0, 2, 1, 2], "baseFret": 1, "fingers": [0, 0, 0, 2, 1, 3]},
  "D#7": {"frets": [-1, -1, 1, 3, 2, 3], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "Eb7": {"frets": [-1, -1, 1, 3, 2, 3], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "E7": {"frets": [0, 2, 0, 1, 0, 0], "baseFret": 1, "fingers": [0, 2, 0, 1, 0, 0]},
  "F7": {"frets": [1, 3, 1, 2, 1, 1], "baseFret": 1, "barres": [1], "fingers": [1, 3, 1, 2, 1, 1]},
  "F#7": {"frets": [2, 4, 2, 3, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 3, 1, 2, 1, 1]},
  "Gb7": {"frets": [2, 4, 2, 3, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 3, 1, 2, 1, 1]},
  "G7": {"frets": [3, 2, 0, 0, 0, 1], "baseFret": 1, "fingers": [3, 2, 0, 0, 0, 1]},
  "G#7": {"frets": [4, 6, 4, 5, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 3, 1, 2, 1, 1]},
  "Ab7": {"frets": [4, 6, 4, 5, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 3, 1, 2, 1, 1]},
  "A7": {"frets": [-1, 0, 2, 0, 2, 0], "baseFret": 1, "fingers": [0, 0, 2, 0, 3, 0]},
  "A#7": {"frets": [-1, 1, 3, 1, 3, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 1, 4, 1]},
  "Bb7": {"frets": [-1, 1, 3, 1, 3, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 1, 4, 1]},
  "B7": {"frets": [-1, 2, 1, 2, 0, 2], "baseFret": 1, "fingers": [0, 2, 1, 3, 0, 4]},
  "Cm7": {"frets": [-1, 3, 5, 3, 4, 3], "baseFret": 3, "barres": [3], "fingers": [0, 1, 3, 1, 2, 1]},
  "C#m7": {"frets": [-1, 4, 6, 4, 5, 4], "baseFret": 4, "barres": [4], "fingers": [0, 1, 3, 1, 2, 1]},
  "Dbm7": {"frets": [-1, 4, 6, 4, 5, 4], "baseFret": 4, "barres": [4], "fingers": [0, 1, 3, 1, 2, 1]},
  "Dm7": {"frets": [-1, -1, 0, 2, 1, 1], "baseFret": 1, "barres": [1], "fingers": [0, 0, 0, 2, 1, 1]},
  "D#m7": {"frets": [-1, -1, 1, 3, 2, 2], "baseFret": 1, "barres": [2], "fingers": [0, 0, 1, 3, 2, 2]},
  "Ebm7": {"frets": [-1, -1, 1, 3, 2, 2], "baseFret": 1, "barres": [2], "fingers": [0, 0, 1, 3, 2, 2]},
  "Em7": {"frets": [0, 2, 2, 0, 3, 0], "baseFret": 1, "fingers": [0, 1, 2, 0, 3, 0]},
  "Fm7": {"frets": [1, 3, 1, 1, 1, 1], "baseFret": 1, "barres": [1], "fingers": [1, 3, 1, 1, 1, 1]},
  "F#m7": {"frets": [2, 4, 2, 2, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 3, 1, 1, 1, 1]},
  "Gbm7": {"frets": [2, 4, 2, 2, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 3, 1, 1, 1, 1]},
  "Gm7": {"frets": [3, 5, 3, 3, 3, 3], "baseFret": 3, "barres": [3], "fingers": [1, 3, 1, 1, 1, 1]},
  "G#m7": {"frets": [4, 6, 4, 4, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 3, 1, 1, 1, 1]},
  "Abm7": {"frets": [4, 6, 4, 4, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 3, 1, 1, 1, 1]},
  "Am7": {"frets": [-1, 0, 2, 0, 1, 0], "baseFret": 1, "fingers": [0, 0, 2, 0, 1, 0]},
  "A#m7": {"frets": [-1, 1, 3, 1, 2, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 1, 2, 1]},
  "Bbm7": {"frets": [-1, 1, 3, 1, 2, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 1, 2, 1]},
  "Bm7": {"frets": [-1, 2, 4, 2, 3, 2], "baseFret": 2, "barres": [2], "fingers": [0, 1, 3, 1, 2, 1]},
  "Cmaj7": {"frets": [-1, 3, 2, 0, 0, 0], "baseFret": 1, "fingers": [0, 3, 2, 0, 0, 0]},
  "C#maj7": {"frets": [-1, 4, 6, 5, 6, 4], "baseFret": 4, "barres": [4], "fingers": [0, 1, 3, 2, 4, 1]},
  "Dbmaj7": {"frets": [-1, 4, 6, 5, 6, 4], "baseFret": 4, "barres": [4], "fingers": [0, 1, 3, 2, 4, 1]},
  "Dmaj7": {"frets": [-1, -1, 0, 2, 2, 2], "baseFret": 1, "fingers": [0, 0, 0, 1, 2, 3]},
  "D#maj7": {"frets": [-1, 6, 8, 7, 8, 6], "baseFret": 6, "barres": [6], "fingers": [0, 1, 3, 2, 4, 1]},
  "Ebmaj7": {"frets": [-1, 6, 8, 7, 8, 6], "baseFret": 6, "barres": [6], "fingers": [0, 1, 3, 2, 4, 1]},
  "Emaj7": {"frets": [0, 2, 1, 1, 0, 0], "baseFret": 1, "fingers": [0, 3, 1, 2, 0, 0]},
  "Fmaj7": {"frets": [-1, -1, 3, 2, 1, 0], "baseFret": 1, "fingers": [0, 0, 3, 2, 1, 0]},
  "F#maj7": {"frets": [2, 4, 3, 3, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 4, 2, 3, 1, 1]},
  "Gbmaj7": {"frets": [2, 4, 3, 3, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 4, 2, 3, 1, 1]},
  "Gmaj7": {"frets": [3, 2, 0, 0, 0, 2], "baseFret": 1, "fingers": [3, 2, 0, 0, 0, 1]},
  "G#maj7": {"frets": [4, 6, 5, 5, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 4, 2, 3, 1, 1]},
  "Abmaj7": {"frets": [4, 6, 5, 5, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 4, 2, 3, 1, 1]},
  "Amaj7": {"frets": [-1, 0, 2, 1, 2, 0], "baseFret": 1, "fingers": [0, 0, 2, 1, 3, 0]},
  "A#maj7": {"frets": [-1, 1, 3, 2, 3, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 2, 4, 1]},
  "Bbmaj7": {"frets": [-1, 1, 3, 2, 3, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 2, 4, 1]},
  "Bmaj7": {"frets": [-1, 2, 4, 3, 4, 2], "baseFret": 2, "barres": [2], "fingers": [0, 1, 3, 2, 4, 1]},
  "Csus4": {"frets": [-1, 3, 3, 0, 1, 1], "baseFret": 1, "barres": [1], "fingers": [0, 3, 4, 0, 1, 1]},
  "Csus": {"frets": [-1, 3, 3, 0, 1, 1], "baseFret": 1, "barres": [1], "fingers": [0, 3, 4, 0, 1, 1]},
  "C#sus4": {"frets": [-1, 4, 6, 6, 7, 4], "baseFret": 4, "barres": [4], "fingers": [0, 1, 3, 3, 4, 1]},
  "Dbsus4": {"frets": [-1, 4, 6, 6, 7, 4], "baseFret": 4, "barres": [4], "fingers": [0, 1, 3, 3, 4, 1]},
  "Dsus4": {"frets": [-1, -1, 0, 2, 3, 3], "baseFret": 1, "fingers": [0, 0, 0, 1, 3, 4]},
  "Dsus": {"frets": [-1, -1, 0, 2, 3, 3], "baseFret": 1, "fingers": [0, 0, 0, 1, 3, 4]},
  "D#sus4": {"frets": [-1, -1, 1, 3, 4, 4], "baseFret": 1, "fingers": [0, 0, 1, 3, 4, 4]},
  "Ebsus4": {"frets": [-1, -1, 1, 3, 4, 4], "baseFret": 1, "fingers": [0, 0, 1, 3, 4, 4]},
  "Esus4": {"frets": [0, 2, 2, 2, 0, 0], "baseFret": 1, "fingers": [0, 2, 3, 4, 0, 0]},
  "Esus": {"frets": [0, 2, 2, 2, 0, 0], "baseFret": 1, "fingers": [0, 2, 3, 4, 0, 0]},
  "Fsus4": {"frets": [1, 3, 3, 3, 1, 1], "baseFret": 1, "barres": [1], "fingers": [1, 3, 4, 4, 1, 1]},
  "Fsus": {"frets": [1, 3, 3, 3, 1, 1], "baseFret": 1, "barres": [1], "fingers": [1, 3, 4, 4, 1, 1]},
  "F#sus4": {"frets": [2, 4, 4, 4, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 3, 4, 4, 1, 1]},
  "Gbsus4": {"frets": [2, 4, 4, 4, 2, 2], "baseFret": 2, "barres": [2], "fingers": [1, 3, 4, 4, 1, 1]},
  "Gsus4": {"frets": [3, 3, 0, 0, 1, 3], "baseFret": 1, "fingers": [2, 3, 0, 0, 1, 4]},
  "Gsus": {"frets": [3, 3, 0, 0, 1, 3], "baseFret": 1, "fingers": [2, 3, 0, 0, 1, 4]},
  "G#sus4": {"frets": [4, 6, 6, 6, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 3, 4, 4, 1, 1]},
  "Absus4": {"frets": [4, 6, 6, 6, 4, 4], "baseFret": 4, "barres": [4], "fingers": [1, 3, 4, 4, 1, 1]},
  "Asus4": {"frets": [-1, 0, 2, 2, 3, 0], "baseFret": 1, "fingers": [0, 0, 1, 2, 3, 0]},
  "Asus": {"frets": [-1, 0, 2, 2, 3, 0], "baseFret": 1, "fingers": [0, 0, 1, 2, 3, 0]},
  "A#sus4": {"frets": [-1, 1, 3, 3, 4, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 3, 4, 1]},
  "Bbsus4": {"frets": [-1, 1, 3, 3, 4, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 3, 4, 1]},
  "Bsus4": {"frets": [-1, 2, 4, 4, 5, 2], "baseFret": 2, "barres": [2], "fingers": [0, 1, 3, 3, 4, 1]},
  "Bsus": {"frets": [-1, 2, 4, 4, 5, 2], "baseFret": 2, "barres": [2], "fingers": [0, 1, 3, 3, 4, 1]},
  "Csus2": {"frets": [-1, 3, 0, 0, 1, 3], "baseFret": 1, "fingers": [0, 3, 0, 0, 1, 4]},
  "C#sus2": {"frets": [-1, 4, 6, 6, 4, 4], "baseFret": 4, "barres": [4], "fingers": [0, 1, 3, 4, 1, 1]},
  "Dbsus2": {"frets": [-1, 4, 6, 6, 4, 4], "baseFret": 4, "barres": [4], "fingers": [0, 1, 3, 4, 1, 1]},
  "Dsus2": {"frets": [-1, -1, 0, 2, 3, 0], "baseFret": 1, "fingers": [0, 0, 0, 1, 2, 0]},
  "D#sus2": {"frets": [-1, 6, 8, 8, 6, 6], "baseFret": 6, "barres": [6], "fingers": [0, 1, 3, 4, 1, 1]},
  "Ebsus2": {"frets": [-1, 6, 8, 8, 6, 6], "baseFret": 6, "barres": [6], "fingers": [0, 1, 3, 4, 1, 1]},
  "Esus2": {"frets": [0, 2, 4, 4, 0, 0], "baseFret": 1, "fingers": [0, 1, 3, 4, 0, 0]},
  "Fsus2": {"frets": [-1, -1, 3, 0, 1, 1], "baseFret": 1, "barres": [1], "fingers": [0, 0, 3, 0, 1, 1]},
  "F#sus2": {"frets": [2, 4, 4, 1, 2, 2], "baseFret": 1, "fingers": [2, 4, 4, 1, 2, 2]},
  "Gbsus2": {"frets": [2, 4, 4, 1, 2, 2], "baseFret": 1, "fingers": [2, 4, 4, 1, 2, 2]},
  "Gsus2": {"frets": [3, 0, 0, 0, 3, 3], "baseFret": 1, "fingers": [1, 0, 0, 0, 3, 4]},
  "G#sus2": {"frets": [4, 6, 6, 3, 4, 4], "baseFret": 3, "fingers": [2, 4, 4, 1, 2, 2]},
  "Absus2": {"frets": [4, 6, 6, 3, 4, 4], "baseFret": 3, "fingers": [2, 4, 4, 1, 2, 2]},
  "Asus2": {"frets": [-1, 0, 2, 2, 0, 0], "baseFret": 1, "fingers": [0, 0, 1, 2, 0, 0]},
  "A#sus2": {"frets": [-1, 1, 3, 3, 1, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 4, 1, 1]},
  "Bbsus2": {"frets": [-1, 1, 3, 3, 1, 1], "baseFret": 1, "barres": [1], "fingers": [0, 1, 3, 4, 1, 1]},
  "Bsus2": {"frets": [-1, 2, 4, 4, 2, 2], "baseFret": 2, "barres": [2], "fingers": [0, 1, 3, 4, 1, 1]},
  "Cadd9": {"frets": [-1, 3, 2, 0, 3, 3], "baseFret": 1, "fingers": [0, 2, 1, 0, 3, 4]},
  "C#add9": {"frets": [-1, 4, 3, 1, 4, 1], "baseFret": 1, "barres": [1], "fingers": [0, 4, 3, 1, 4, 1]},
  "Dbadd9": {"frets": [-1, 4, 3, 1, 4, 1], "baseFret": 1, "barres": [1], "fingers": [0, 4, 3, 1, 4, 1]},
  "Dadd9": {"frets": [-1, 5, 4, 0, 3, 0], "baseFret": 1, "fingers": [0, 4, 3, 0, 2, 0]},
  "D#add9": {"frets": [-1, 6, 5, 0, 4, 0], "baseFret": 1, "fingers": [0, 4, 3, 0, 2, 0]},
  "Ebadd9": {"frets": [-1, 6, 5, 0, 4, 0], "baseFret": 1, "fingers": [0, 4, 3, 0, 2, 0]},
  "Eadd9": {"frets": [0, 2, 2, 1, 0, 2], "baseFret": 1, "fingers": [0, 2, 3, 1, 0, 4]},
  "Fadd9": {"frets": [-1, -1, 3, 2, 1, 3], "baseFret": 1, "fingers": [0, 0, 3, 2, 1, 4]},
  "F#add9": {"frets": [2, 4, 4, 3, 2, 4], "baseFret": 2, "barres": [2], "fingers": [1, 3, 4, 2, 1, 4]},
  "Gbadd9": {"frets": [2, 4, 4, 3, 2, 4], "baseFret": 2, "barres": [2], "fingers": [1, 3, 4, 2, 1, 4]},
  "Gadd9": {"frets": [3, 2, 0, 2, 0, 3], "baseFret": 1, "fingers": [2, 1, 0, 3, 0, 4]},
  "G#add9": {"frets": [4, 6, 6, 5, 4, 6], "baseFret": 4, "barres": [4], "fingers": [1, 3, 4, 2, 1, 4]},
  "Abadd9": {"frets": [4, 6, 6, 5, 4, 6], "baseFret": 4, "barres": [4], "fingers": [1, 3, 4, 2, 1, 4]},
  "Aadd9": {"frets": [-1, 0, 2, 4, 2, 0], "baseFret": 1, "fingers": [0, 0, 1, 3, 1, 0]},
  "A#add9": {"frets": [-1, 1, 3, 5, 3, 1], "baseFret": 1, "fingers": [0, 1, 2, 4, 2, 1]},
  "Bbadd9": {"frets": [-1, 1, 3, 5, 3, 1], "baseFret": 1, "fingers": [0, 1, 2, 4, 2, 1]},
  "Badd9": {"frets": [-1, 2, 4, 4, 2, 2], "baseFret": 2, "barres": [2], "fingers": [0, 1, 3, 4, 1, 1]},
  "C9": {"frets": [-1, 3, 2, 3, 3, 3], "baseFret": 1, "barres": [3], "fingers": [0, 2, 1, 3, 3, 3]},
  "D9": {"frets": [-1, -1, 0, 2, 1, 0], "baseFret": 1, "fingers": [0, 0, 0, 2, 1, 0]},
  "E9": {"frets": [0, 2, 0, 1, 0, 2], "baseFret": 1, "fingers": [0, 2, 0, 1, 0, 4]},
  "G9": {"frets": [3, 2, 0, 2, 0, 1], "baseFret": 1, "fingers": [3, 2, 0, 4, 0, 1]},
  "A9": {"frets": [-1, 0, 2, 4, 2, 3], "baseFret": 1, "fingers": [0, 0, 1, 3, 1, 2]},
  "B9": {"frets": [-1, 2, 1, 2, 2, 2], "baseFret": 1, "barres": [2], "fingers": [0, 2, 1, 3, 3, 3]},
  "Am9": {"frets": [-1, 0, 2, 4, 1, 0], "baseFret": 1, "fingers": [0, 0, 2, 4, 1, 0]},
  "Em9": {"frets": [0, 2, 0, 0, 0, 2], "baseFret": 1, "fingers": [0, 2, 0, 0, 0, 3]},
  "Dm9": {"frets": [-1, -1, 0, 2, 1, 0], "baseFret": 1, "fingers": [0, 0, 0, 2, 1, 0]},
  "Bm9": {"frets": [-1, 2, 0, 2, 2, 2], "baseFret": 1, "barres": [2], "fingers": [0, 2, 0, 3, 3, 3]},
  "C6": {"frets": [-1, 3, 2, 2, 1, 0], "baseFret": 1, "fingers": [0, 3, 2, 2, 1, 0]},
  "D6": {"frets": [-1, -1, 0, 2, 0, 2], "baseFret": 1, "fingers": [0, 0, 0, 1, 0, 2]},
  "E6": {"frets": [0, 2, 2, 1, 2, 0], "baseFret": 1, "fingers": [0, 2, 3, 1, 4, 0]},
  "F6": {"frets": [-1, -1, 3, 2, 3, 1], "baseFret": 1, "fingers": [0, 0, 2, 1, 3, 1]},
  "G6": {"frets": [3, 2, 0, 0, 0, 0], "baseFret": 1, "fingers": [2, 1, 0, 0, 0, 0]},
  "A6": {"frets": [-1, 0, 2, 2, 2, 2], "baseFret": 1, "barres": [2], "fingers": [0, 0, 1, 1, 1, 1]},
  "B6": {"frets": [-1, 2, 4, 4, 4, 4], "baseFret": 2, "barres": [4], "fingers": [0, 1, 3, 3, 3, 3]},
  "Bb6": {"frets": [-1, 1, 3, 3, 3, 3], "baseFret": 1, "barres": [3], "fingers": [0, 1, 3, 3, 3, 3]},
  "Am6": {"frets": [-1, 0, 2, 2, 1, 2], "baseFret": 1, "fingers": [0, 0, 2, 3, 1, 4]},
  "Dm6": {"frets": [-1, -1, 0, 2, 0, 1], "baseFret": 1, "fingers": [0, 0, 0, 2, 0, 1]},
  "Em6": {"frets": [0, 2, 2, 0, 2, 0], "baseFret": 1, "fingers": [0, 1, 2, 0, 3, 0]},
  "Cdim": {"frets": [-1, -1, 1, 2, 1, 2], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "C#dim": {"frets": [-1, -1, 2, 3, 2, 3], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "Dbdim": {"frets": [-1, -1, 2, 3, 2, 3], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "Ddim": {"frets": [-1, -1, 0, 1, 3, 1], "baseFret": 1, "fingers": [0, 0, 0, 1, 3, 2]},
  "D#dim": {"frets": [-1, -1, 1, 2, 1, 2], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "Ebdim": {"frets": [-1, -1, 1, 2, 1, 2], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "Edim": {"frets": [0, 1, 2, 0, -1, -1], "baseFret": 1, "fingers": [0, 1, 2, 0, 0, 0]},
  "Fdim": {"frets": [-1, -1, 0, 1, 0, 1], "baseFret": 1, "fingers": [0, 0, 0, 1, 0, 2]},
  "F#dim": {"frets": [-1, -1, 1, 2, 1, 2], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "Gbdim": {"frets": [-1, -1, 1, 2, 1, 2], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "Gdim": {"frets": [-1, -1, 2, 3, 2, 3], "baseFret": 2, "fingers": [0, 0, 1, 3, 2, 4]},
  "G#dim": {"frets": [-1, -1, 0, 1, 0, 1], "baseFret": 1, "fingers": [0, 0, 0, 1, 0, 2]},
  "Abdim": {"frets": [-1, -1, 0, 1, 0, 1], "baseFret": 1, "fingers": [0, 0, 0, 1, 0, 2]},
  "Adim": {"frets": [-1, 0, 1, 2, 1, -1], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 0]},
  "A#dim": {"frets": [-1, 1, 2, 3, 2, -1], "baseFret": 1, "fingers": [0, 1, 2, 4, 3, 0]},
  "Bbdim": {"frets": [-1, 1, 2, 3, 2, -1], "baseFret": 1, "fingers": [0, 1, 2, 4, 3, 0]},
  "Bdim": {"frets": [-1, 2, 3, 4, 3, -1], "baseFret": 1, "fingers": [0, 1, 2, 4, 3, 0]},
  "Cdim7": {"frets": [-1, -1, 1, 2, 1, 2], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "C#dim7": {"frets": [-1, -1, 2, 3, 2, 3], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "Ddim7": {"frets": [-1, -1, 0, 1, 0, 1], "baseFret": 1, "fingers": [0, 0, 0, 1, 0, 2]},
  "D#dim7": {"frets": [-1, -1, 1, 2, 1, 2], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "Edim7": {"frets": [0, 1, 2, 0, 2, 0], "baseFret": 1, "fingers": [0, 1, 2, 0, 3, 0]},
  "Fdim7": {"frets": [-1, -1, 0, 1, 0, 1], "baseFret": 1, "fingers": [0, 0, 0, 1, 0, 2]},
  "F#dim7": {"frets": [-1, -1, 1, 2, 1, 2], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "Gdim7": {"frets": [-1, -1, 2, 3, 2, 3], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "G#dim7": {"frets": [-1, -1, 0, 1, 0, 1], "baseFret": 1, "fingers": [0, 0, 0, 1, 0, 2]},
  "Adim7": {"frets": [-1, 0, 1, 2, 1, 2], "baseFret": 1, "fingers": [0, 0, 1, 3, 2, 4]},
  "Bbdim7": {"frets": [-1, 1, 2, 0, 2, 0], "baseFret": 1, "fingers": [0, 1, 2, 0, 3, 0]},
  "Bdim7": {"frets": [-1, 2, 0, 1, 0, 1], "baseFret": 1, "fingers": [0, 2, 0, 1, 0, 3]},
  "Caug": {"frets": [-1, 3, 2, 1, 1, 0], "baseFret": 1, "fingers": [0, 3, 2, 1, 1, 0]},
  "C#aug": {"frets": [-1, 4, 3, 2, 2, -1], "baseFret": 1, "fingers": [0, 3, 2, 1, 1, 0]},
  "Daug": {"frets": [-1, -1, 0, 3, 3, 2], "baseFret": 1, "fingers": [0, 0, 0, 2, 3, 1]},
  "D#aug": {"frets": [-1, -1, 1, 0, 0, 3], "baseFret": 1, "fingers": [0, 0, 1, 0, 0, 3]},
  "Ebaug": {"frets": [-1, -1, 1, 0, 0, 3], "baseFret": 1, "fingers": [0, 0, 1, 0, 0, 3]},
  "Eaug": {"frets": [0, 3, 2, 1, 1, 0], "baseFret": 1, "fingers": [0, 4, 3, 1, 2, 0]},
  "Faug": {"frets": [-1, -1, 3, 2, 2, 1], "baseFret": 1, "fingers": [0, 0, 4, 2, 3, 1]},
  "F#aug": {"frets": [2, -1, 0, 3, 3, 2], "baseFret": 1, "fingers": [1, 0, 0, 3, 4, 2]},
  "Gaug": {"frets": [3, 2, 1, 0, 0, 3], "baseFret": 1, "fingers": [2, 1, 0, 0, 0, 3]},
  "G#aug": {"frets": [4, -1, 2, 1, 1, 0], "baseFret": 1, "fingers": [4, 0, 2, 1, 1, 0]},
  "Abaug": {"frets": [4, -1, 2, 1, 1, 0], "baseFret": 1, "fingers": [4, 0, 2, 1, 1, 0]},
  "Aaug": {"frets": [-1, 0, 3, 2, 2, 1], "baseFret": 1, "fingers": [0, 0, 4, 2, 3, 1]},
  "A#aug": {"frets": [-1, 1, 0, 3, 3, 2], "baseFret": 1, "fingers": [0, 1, 0, 3, 4, 2]},
  "Bbaug": {"frets": [-1, 1, 0, 3, 3, 2], "baseFret": 1, "fingers": [0, 1, 0, 3, 4, 2]},
  "Baug": {"frets": [-1, 2, 1, 0, 0, 3], "baseFret": 1, "fingers": [0, 2, 1, 0, 0, 3]},
  "G/B": {"frets": [-1, 2, 0, 0, 3, 3], "baseFret": 1, "fingers": [0, 1, 0, 0, 3, 4]},
  "C/E": {"frets": [0, 3, 2, 0, 1, 0], "baseFret": 1, "fingers": [0, 3, 2, 0, 1, 0]},
  "C/G": {"frets": [3, 3, 2, 0, 1, 0], "baseFret": 1, "fingers": [3, 4, 2, 0, 1, 0]},
  "C/B": {"frets": [-1, 2, 2, 0, 1, 0], "baseFret": 1, "fingers": [0, 2, 3, 0, 1, 0]},
  "C/F": {"frets": [1, 3, 2, 0, 1, 0], "baseFret": 1, "fingers": [1, 3, 2, 0, 1, 0]},
  "D/F#": {"frets": [2, 0, 0, 2, 3, 2], "baseFret": 1, "fingers": [1, 0, 0, 2, 4, 3]},
  "D/A": {"frets": [-1, 0, 0, 2, 3, 2], "baseFret": 1, "fingers": [0, 0, 0, 1, 3, 2]},
  "D/B": {"frets": [-1, 2, 0, 2, 3, 2], "baseFret": 1, "fingers": [0, 1, 0, 2, 4, 3]},
  "D/C": {"frets": [-1, 3, 0, 2, 3, 2], "baseFret": 1, "fingers": [0, 2, 0, 1, 4, 3]},
  "E/G#": {"frets": [4, 2, 2, 1, 0, 0], "baseFret": 1, "fingers": [4, 2, 3, 1, 0, 0]},
  "E/B": {"frets": [-1, 2, 2, 1, 0, 0], "baseFret": 1, "fingers": [0, 2, 3, 1, 0, 0]},
  "E/D": {"frets": [0, 2, 0, 1, 0, 0], "baseFret": 1, "fingers": [0, 2, 0, 1, 0, 0]},
  "F/A": {"frets": [-1, 0, 3, 2, 1, 1], "baseFret": 1, "barres": [1], "fingers": [0, 0, 3, 2, 1, 1]},
  "F/C": {"frets": [-1, 3, 3, 2, 1, 1], "baseFret": 1, "barres": [1], "fingers": [0, 3, 4, 2, 1, 1]},
  "G/D": {"frets": [-1, -1, 0, 0, 0, 3], "baseFret": 1, "fingers": [0, 0, 0, 0, 0, 3]},
  "G/C": {"frets": [-1, 3, 0, 0, 0, 3], "baseFret": 1, "fingers": [0, 2, 0, 0, 0, 3]},
  "G/F#": {"frets": [2, 2, 0, 0, 0, 3], "baseFret": 1, "fingers": [1, 2, 0, 0, 0, 3]},
  "A/C#": {"frets": [-1, 4, 2, 2, 2, 0], "baseFret": 1, "fingers": [0, 4, 1, 2, 3, 0]},
  "A/E": {"frets": [0, 0, 2, 2, 2, 0], "baseFret": 1, "fingers": [0, 0, 1, 2, 3, 0]},
  "A/G": {"frets": [3, 0, 2, 2, 2, 0], "baseFret": 1, "fingers": [3, 0, 1, 2, 4, 0]},
  "B/D#": {"frets": [-1, 6, 4, 4, 4, -1], "baseFret": 4, "barres": [4], "fingers": [0, 3, 1, 1, 1, 0]},
  "B/F#": {"frets": [2, 2, 4, 4, 4, 2], "baseFret": 2, "barres": [2], "fingers": [1, 1, 2, 3, 4, 1]},
  "Am/G": {"frets": [3, 0, 2, 2, 1, 0], "baseFret": 1, "fingers": [4, 0, 2, 3, 1, 0]},
  "Am/F#": {"frets": [2, 0, 2, 2, 1, 0], "baseFret": 1, "fingers": [2, 0, 3, 4, 1, 0]},
  "Am/E": {"frets": [0, 0, 2, 2, 1, 0], "baseFret": 1, "fingers": [0, 0, 2, 3, 1, 0]},
  "Dm/C": {"frets": [-1, 3, 0, 2, 3, 1], "baseFret": 1, "fingers": [0, 3, 0, 2, 4, 1]},
  "Dm/A": {"frets": [-1, 0, 0, 2, 3, 1], "baseFret": 1, "fingers": [0, 0, 0, 2, 3, 1]},
  "Dm/F": {"frets": [1, -1, 0, 2, 3, 1], "baseFret": 1, "fingers": [1, 0, 0, 2, 4, 1]},
  "Em/D": {"frets": [-1, -1, 0, 0, 0, 0], "baseFret": 1, "fingers": [0, 0, 0, 0, 0, 0]},
  "Em/B": {"frets": [-1, 2, 2, 0, 0, 0], "baseFret": 1, "fingers": [0, 1, 2, 0, 0, 0]},
  "C5": {"frets": [-1, 3, 5, 5, -1, -1], "baseFret": 3, "fingers": [0, 1, 3, 4, 0, 0]},
  "C#5": {"frets": [-1, 4, 6, 6, -1, -1], "baseFret": 4, "fingers": [0, 1, 3, 4, 0, 0]},
  "D5": {"frets": [-1, -1, 0, 2, 3, -1], "baseFret": 1, "fingers": [0, 0, 0, 1, 3, 0]},
  "D#5": {"frets": [-1, 6, 8, 8, -1, -1], "baseFret": 6, "fingers": [0, 1, 3, 4, 0, 0]},
  "Eb5": {"frets": [-1, 6, 8, 8, -1, -1], "baseFret": 6, "fingers": [0, 1, 3, 4, 0, 0]},
  "E5": {"frets": [0, 2, 2, -1, -1, -1], "baseFret": 1, "fingers": [0, 1, 2, 0, 0, 0]},
  "F5": {"frets": [1, 3, 3, -1, -1, -1], "baseFret": 1, "fingers": [1, 3, 4, 0, 0, 0]},
  "F#5": {"frets": [2, 4, 4, -1, -1, -1], "baseFret": 2, "fingers": [1, 3, 4, 0, 0, 0]},
  "G5": {"frets": [3, 5, 5, -1, -1, -1], "baseFret": 3, "fingers": [1, 3, 4, 0, 0, 0]},
  "G#5": {"frets": [4, 6, 6, -1, -1, -1], "baseFret": 4, "fingers": [1, 3, 4, 0, 0, 0]},
  "A5": {"frets": [-1, 0, 2, 2, -1, -1], "baseFret": 1, "fingers": [0, 0, 1, 2, 0, 0]},
  "A#5": {"frets": [-1, 1, 3, 3, -1, -1], "baseFret": 1, "fingers": [0, 1, 3, 4, 0, 0]},
  "Bb5": {"frets": [-1, 1, 3, 3, -1, -1], "baseFret": 1, "fingers": [0, 1, 3, 4, 0, 0]},
  "B5": {"frets": [-1, 2, 4, 4, -1, -1], "baseFret": 2, "fingers": [0, 1, 3, 4, 0, 0]}
};

// Open string MIDI pitches (Standard tuning: E2, A2, D3, G3, B3, E4)
const STANDARD_TUNING_MIDI = [40, 45, 50, 55, 59, 64];

// Chromatic Scale for fallback transpose & harmonic pitch calculations
const DB_CHROMATIC_SCALE = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const DB_FLAT_TO_SHARP = { "Db": "C#", "Eb": "D#", "Gb": "F#", "Ab": "G#", "Bb": "A#" };
const DB_SHARP_TO_FLAT = { "C#": "Db", "D#": "Eb", "F#": "Gb", "G#": "Ab", "A#": "Bb" };

/**
 * Normalizes chord names across common notations and aliases
 * (e.g. "Asus" -> "Asus4", "CM7" -> "Cmaj7", "CΔ" -> "Cmaj7", "C°" -> "Cdim", "C+" -> "Caug")
 */
function normalizeChordName(name) {
  if (!name || typeof name !== "string") return "";
  let n = name.trim();

  // If two chords written with slash like "Cm/Dm", extract the primary chord "Cm"
  if (/^[A-G](?:#|b)?m?\/[A-G](?:#|b)?m?$/i.test(n) && !CHORD_DATABASE[n]) {
    const parts = n.split("/");
    if (parts[1].length > 1 && (parts[1].includes("m") || parts[1].includes("7"))) {
      n = parts[0];
    }
  }

  // Alias: Asus -> Asus4, Dsus -> Dsus4, etc.
  if (/^[A-G](?:#|b)?sus$/i.test(n)) {
    n = n + "4";
  }

  // Alias: M7, maj7, Δ7, Δ -> maj7
  n = n.replace(/([A-G](?:#|b)?)M7$/, "$1maj7");
  n = n.replace(/([A-G](?:#|b)?)[Δ\^]7?$/, "$1maj7");

  // Alias: ° or dim7 -> dim7 / dim
  n = n.replace(/([A-G](?:#|b)?)°7$/, "$1dim7");
  n = n.replace(/([A-G](?:#|b)?)°$/, "$1dim");

  // Alias: + -> aug
  n = n.replace(/([A-G](?:#|b)?)\+$/, "$1aug");

  // Alias: -7 -> m7, min7 -> m7
  n = n.replace(/([A-G](?:#|b)?)-7$/, "$1m7");
  n = n.replace(/([A-G](?:#|b)?)min7$/, "$1m7");
  n = n.replace(/([A-G](?:#|b)?)min$/, "$1m");

  return n;
}

/**
 * Intelligent Chord Lookup with Alias, Enharmonic and Slash Fallbacks
 */
function getChordData(chordName) {
  if (!chordName) return null;
  const raw = chordName.trim();
  if (CHORD_DATABASE[raw]) return CHORD_DATABASE[raw];

  // 1. Try normalized name
  const norm = normalizeChordName(raw);
  if (CHORD_DATABASE[norm]) return CHORD_DATABASE[norm];

  // 2. Try enharmonic equivalent of root (e.g. C#m7 <-> Dbm7, F# <-> Gb)
  const match = norm.match(/^([A-G](?:#|b)?)(.*)$/);
  if (match) {
    const root = match[1];
    const suffix = match[2] || "";
    let altRoot = null;
    if (DB_FLAT_TO_SHARP[root]) altRoot = DB_FLAT_TO_SHARP[root];
    else if (DB_SHARP_TO_FLAT[root]) altRoot = DB_SHARP_TO_FLAT[root];

    if (altRoot) {
      const altChord = altRoot + suffix;
      if (CHORD_DATABASE[altChord]) return CHORD_DATABASE[altChord];
    }

    // 3. Slash chord root / bass enharmonic fallback
    if (suffix.startsWith("/")) {
      const bass = suffix.slice(1);
      const altBass = DB_FLAT_TO_SHARP[bass] || DB_SHARP_TO_FLAT[bass] || bass;
      const altSlash = root + "/" + altBass;
      if (CHORD_DATABASE[altSlash]) return CHORD_DATABASE[altSlash];
      if (altRoot) {
        const altBoth = altRoot + "/" + altBass;
        if (CHORD_DATABASE[altBoth]) return CHORD_DATABASE[altBoth];
      }
    }
  }

  return null;
}

/**
 * Calculates MIDI pitch numbers for guitar audio synthesizer
 */
function getChordMidiPitches(chordName) {
  const data = getChordData(chordName);
  if (data && Array.isArray(data.frets)) {
    const pitches = [];
    data.frets.forEach((fret, stringIdx) => {
      if (fret >= 0) {
        pitches.push(STANDARD_TUNING_MIDI[stringIdx] + fret);
      }
    });
    if (pitches.length > 0) return pitches;
  }

  // Harmonic Fallback: compute realistic acoustic triad / 7th from chord root
  const match = (chordName || "").match(/^([A-G](?:#|b)?)(.*)$/);
  if (!match) return [48, 52, 55, 60]; // default C triad
  let root = match[1];
  const suffix = (match[2] || "").toLowerCase();
  if (DB_FLAT_TO_SHARP[root]) root = DB_FLAT_TO_SHARP[root];
  const rootIdx = DB_CHROMATIC_SCALE.indexOf(root);
  if (rootIdx === -1) return [48, 52, 55, 60];

  const baseMidi = 48 + rootIdx; // around C3
  let intervals = [0, 4, 7]; // Major triad

  if (suffix.includes("m7") || suffix.includes("min7")) intervals = [0, 3, 7, 10];
  else if (suffix.includes("maj7") || suffix.includes("m7")) intervals = [0, 4, 7, 11];
  else if (suffix.includes("m") || suffix.includes("min")) intervals = [0, 3, 7];
  else if (suffix.includes("7")) intervals = [0, 4, 7, 10];
  else if (suffix.includes("sus4")) intervals = [0, 5, 7];
  else if (suffix.includes("sus2")) intervals = [0, 2, 7];
  else if (suffix.includes("add9") || suffix.includes("2")) intervals = [0, 4, 7, 14];
  else if (suffix.includes("dim")) intervals = [0, 3, 6];
  else if (suffix.includes("aug")) intervals = [0, 4, 8];
  else if (suffix.includes("5")) intervals = [0, 7, 12];

  return intervals.map(i => baseMidi + i);
}

/**
 * Generate an elegant SVG diagram for any guitar chord
 */
function renderChordSVG(name, options = {}) {
  const data = getChordData(name);
  const width = options.width || 110;
  const height = options.height || 135;
  const accentColor = options.accentColor || "var(--brand, #3E6B8F)";
  const textColor = options.textColor || "#1C1C1E";

  if (!data) {
    return `
      <svg class="chord-svg" width="${width}" height="${height}" viewBox="0 0 120 145">
        <text x="60" y="24" text-anchor="middle" font-size="15" font-weight="700" fill="${textColor}">${escapeXml(name)}</text>
        <rect x="22" y="40" width="75" height="80" rx="6" fill="#F8F9FA" stroke="#E5E5EA" stroke-width="1"/>
        <text x="60" y="85" text-anchor="middle" font-size="11" font-weight="500" fill="#8A8A8E">No diagram</text>
      </svg>
    `;
  }

  const { frets, baseFret = 1, barres = [] } = data;
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
  svg += `<text x="60" y="22" text-anchor="middle" font-size="15" font-weight="700" fill="${textColor}" letter-spacing="-0.2">${escapeXml(name)}</text>`;

  // Base Fret indicator (e.g. 3fr)
  if (baseFret > 1) {
    svg += `<text x="${startX - 6}" y="${startY + fretDist * 0.72}" text-anchor="end" font-size="10" font-weight="600" fill="#8A8A8E">${baseFret}fr</text>`;
  }

  // Nut (thick) or normal fret line
  if (baseFret === 1) {
    svg += `<line x1="${startX - 1}" y1="${startY}" x2="${endX + 1}" y2="${startY}" stroke="#1C1C1E" stroke-width="3.5" stroke-linecap="round"/>`;
  } else {
    svg += `<line x1="${startX}" y1="${startY}" x2="${endX}" y2="${startY}" stroke="#AEAEB2" stroke-width="1.5"/>`;
  }

  // Fret horizontal lines
  for (let f = 1; f <= numFrets; f++) {
    const y = startY + f * fretDist;
    svg += `<line x1="${startX}" y1="${y}" x2="${endX}" y2="${y}" stroke="#D1D1D6" stroke-width="1.1"/>`;
  }

  // String vertical lines
  for (let s = 0; s < numStrings; s++) {
    const x = startX + s * stringDist;
    const strokeWidth = s < 3 ? 1.4 : 1.0;
    svg += `<line x1="${x}" y1="${startY}" x2="${x}" y2="${endY}" stroke="#8A8A8E" stroke-width="${strokeWidth}"/>`;
  }

  // Barre Chord line visualization (if barres present)
  if (barres && barres.length > 0) {
    barres.forEach(barreFret => {
      const relFret = barreFret - (baseFret - 1);
      if (relFret >= 1 && relFret <= numFrets) {
        let minStr = -1;
        let maxStr = -1;
        frets.forEach((f, s) => {
          if (f === barreFret) {
            if (minStr === -1) minStr = s;
            maxStr = s;
          }
        });
        if (minStr !== -1 && maxStr > minStr) {
          const bx1 = startX + minStr * stringDist;
          const bx2 = startX + maxStr * stringDist;
          const by = startY + (relFret - 0.5) * fretDist;
          svg += `<line x1="${bx1}" y1="${by}" x2="${bx2}" y2="${by}" stroke="${accentColor}" stroke-width="9" stroke-linecap="round" opacity="0.85"/>`;
        }
      }
    });
  }

  // Top indicators: 'x' (mute) or 'o' (open)
  frets.forEach((fret, s) => {
    const x = startX + s * stringDist;
    if (fret === -1) {
      svg += `<text x="${x}" y="${startY - 8}" text-anchor="middle" font-size="11" font-weight="700" fill="#AEAEB2">×</text>`;
    } else if (fret === 0) {
      svg += `<circle cx="${x}" cy="${startY - 9}" r="3.2" fill="none" stroke="${accentColor}" stroke-width="1.4"/>`;
    }
  });

  // Finger dots
  frets.forEach((fret, s) => {
    if (fret > 0) {
      const relFret = fret - (baseFret - 1);
      if (relFret >= 1 && relFret <= numFrets) {
        const x = startX + s * stringDist;
        const y = startY + (relFret - 0.5) * fretDist;
        svg += `<circle cx="${x}" cy="${y}" r="5.2" fill="${accentColor}"/>`;
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
