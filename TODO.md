# Fix BackToTop Smooth Scroll

- [x] Create this TODO.md
- [x] Update `amanda/app/(public)/components/backaToTop.jsx`: Replaced window.scrollTo with document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); added throttled RAF scroll listener.
- [x] Test: Run `npm run dev`, scroll >300px, click button (check console).
- [x] Production test: `npm run build && npm run start`.
- [x] Mark complete + attempt_completion.


