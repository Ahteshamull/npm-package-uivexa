# uivexa

**Lightweight UI helpers for modern frontends (React/Vue compatible)**

`uivexa` is a minimal JavaScript library providing ready-to-use UI utilities such as toast notifications, modal dialogs, and loaders.  
It works in vanilla JS or with frameworks like React/Vue.

---

## Features

- ✅ Toast notifications
- ✅ Modal dialogs
- ✅ Loader spinner
- ✅ Framework agnostic (works with plain JS)
- ✅ Tiny and lightweight

---

## Installation

```bash
npm install uivexa
```

## Usage

```javascript
import { showToast, showModal, showLoader, hideLoader } from "uivexa";

// Toast
showToast("Hello World!");

// Modal
showModal("Welcome", "This is a uivexa modal!");

// Loader
showLoader();
setTimeout(hideLoader, 3000);
```

---

## License

MIT © Ahteshamul Hasan
