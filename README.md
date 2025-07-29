

# 🧠 tabs-state-sync
[![NPM version](https://img.shields.io/npm/v/tabs-state-sync.svg?style=flat)](https://www.npmjs.com/package/tabs-state-sync) [![NPM downloads](https://img.shields.io/npm/dm/tabs-state-sync.svg?style=flat)](https://npmjs.org/package/tabs-state-sync) 


> Because your tabs should talk behind your back — *constructively*.

---

## 🧐 What is this?

You ever open your app in two tabs and change the theme in one, but the other tab just… doesn’t get it?  
Rude.

**`tabs-state-sync`** is a tiny React hook that makes your app state **instantly sync across tabs**. No Redux. No context. No tears. Just vibes.

```tsx
const [theme, setTheme] = useSyncedState('theme', 'light');
````

---

## 🚀 Why should I care?

Imagine:

* Tab A logs out.
* Tab B still thinks it’s logged in.
* You scream.
* `tabs-state-sync` prevents that scream.

---

## ⚡ Install

```bash
npm install tabs-state-sync
```

> Or `yarn`, if you're into that sort of thing.

---

## 🔮 Usage

```tsx
import { useSyncedState } from 'tabs-state-sync';

function ThemeToggle() {
  const [theme, setTheme] = useSyncedState('theme', 'light');

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Theme: {theme}
    </button>
  );
}
```

Then open another tab. Click the button. Watch it *sync like it’s 1999*.

---


## 🧯 Use Cases (aka excuses to use this)

* Theme toggles 🌒
* Auth state 🔓
* Filter settings 📊
* Cart state 🛒
* That one weird internal tool where people keep opening 6 tabs 🤡

---

## ✨ API

```ts
const [state, setState] = useSyncedState<T>(key: string, defaultValue: T)
```

* `key`: your gossip channel name (aka the storage key)
* `defaultValue`: the fallback for tab #1 or when localStorage is empty

Returns `[state, setState]` — just like `useState`, but it *has friends*.

---

## ⚠️ Caveats (Read or Rage Later)

* **Incognito tabs are loners** — they won’t play along

---

## 📦 What’s Inside?

* React + Hooks 🪝
* TypeScript support 🦾
* `localStorage` wizardry ✨
* Zero dependencies (unless you count trust issues)

---

## 🧘 Philosophy

Simplicity over ceremony.
Zero-config. Zero drama.
Cross-tab peace ✌️ at last.

---

## 🧑‍💻 Author

Built by [cinfinit](https://github.com/cinfinit) — dev, tab hoarder, and certified "why isn’t this syncing?!" survivor.

When not building small libraries to solve oddly specific problems, you can find them:

- Breaking things to learn how they work
- Arguing with `TypeScript` like it’s a sentient roommate
- Forgetting they had another tab open… with the same app , EVERYDAY story , i mean literally everyday
- Writing code that eventually deletes itself (via git rebase)

> Got feedback, feature ideas, or just want to say “yo this is dope”? PRs and DMs are always welcome.
