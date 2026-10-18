## 2025-05-18 - Accessible Icon-Only Buttons
**Learning:** Using raw Unicode text symbols (such as "✕") inside icon-only buttons with `aria-label` can cause screen readers to speak the symbol name (e.g. "multiplication symbol") alongside or instead of the label.
**Action:** Replace raw text glyphs in icon buttons with explicit SVG icons (`Icono`) marked with `aria-hidden="true"`.
