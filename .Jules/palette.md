# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-15 - Focus Restoration and Initial Focus in Global Modal Dialogs
**Learning:** Native `<dialog>` elements triggered globally via keyboard shortcuts (such as `Alt+H` for keyboard shortcuts help) require explicit focus management. Capturing `document.activeElement` prior to `dialog.showModal()` and focusing the primary action/close button inside the dialog prevents lost focus context. Attaching a `close` event listener to restore focus back to the saved element upon dismissal ensures seamless keyboard navigation across all pages.
**Action:** Always store `document.activeElement` before opening global modals and listen for the `close` event to return focus to the previously focused element.
