/* Tashido's ChordBook — Calm behaviour (2026-10-28). No app.js logic changed.
   1) Tools drawer toggle in the song hero. 2) Each tool panel collapses
   by tapping its title. 3) Strip flag emojis from rendered artist lines
   (app.js still generates them; this only cleans the visible text). */
(function () {
  var container = document.querySelector('.app-container');
  var toggle = document.getElementById('toolsToggleBtn');
  if (container && toggle) {
    toggle.addEventListener('click', function () {
      var collapsed = container.classList.toggle('tools-collapsed');
      toggle.textContent = collapsed ? '‹' : '›';
      toggle.title = collapsed ? 'Show tools' : 'Hide tools';
    });
  }
  document.querySelectorAll('.tool-panel .panel-title').forEach(function (title) {
    title.title = 'Tap to collapse / expand';
    title.addEventListener('click', function () {
      title.closest('.tool-panel').classList.toggle('collapsed');
    });
  });
  /* Hero actions keep their original visible icons (the thin ✎/⎙ glyphs
     rendered almost invisibly in Opera, so do not replace them). */
  /* Chords in Song starts collapsed by default; tap its title to expand. */
  var chordGrid = document.getElementById('chordGrid');
  if (chordGrid) {
    var chordPanel = chordGrid.closest('.tool-panel');
    if (chordPanel) chordPanel.classList.add('collapsed');
  }
  function cleanFlags(root) {
    root.querySelectorAll('.home-card-artist, .song-item-artist, #heroLang').forEach(function (el) {
      if (el.textContent.indexOf('🇲🇲') >= 0 || el.textContent.indexOf('🇬🇧') >= 0 || el.textContent.indexOf('🌐') >= 0) {
        el.textContent = el.textContent.replace(/🇲🇲|🇬🇧|🌐/g, '').replace(/^\s+/, '');
      }
    });
  }
  cleanFlags(document);
  var observer = new MutationObserver(function () { cleanFlags(document); });
  observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  /* FIX 2026-10-28: never close a modal by clicking outside it.
     app.js closes songModal / firebaseModal when the click target IS the
     overlay itself (app.js ~line 1818, 2029), with no unsaved-change check,
     so one stray click discarded the whole edit. This window capture
     listener runs before those bubble handlers and stops the event, so
     only the explicit ✕ / Cancel / Save buttons can close the modal.
     Clicks INSIDE the dialog have a different target and pass through. */
  window.addEventListener('click', function (e) {
    if (e.target && (e.target.id === 'songModal' || e.target.id === 'firebaseModal')) {
      e.stopPropagation();
    }
  }, true);
})();
