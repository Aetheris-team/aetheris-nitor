## 2026-03-31 - Reusable Clipboard Action Feedback Pattern

**Learning:** Action buttons that copy dynamic content (like embed iframe code or view permalinks) benefit from dual visual and screen reader feedback: full `aria-label` context for screen readers, `title` hover tooltips for desktop, and a temporary 2-second visual label transition ("¡Copiado!" + `text-accent border-accent/50`) accompanied by `role="status"` live region announcements.

**Action:** When adding or updating copy/export action buttons across components, apply `aria-label={`Copiar [recurso]: ${titulo}`}`, add a hover `title`, and use the standard 2-second visual highlight transition.
