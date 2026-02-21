# RTL Support

Demonstrates right-to-left (RTL) language support using `getLocaleDirection()` and `useLocaleDirection()` from General Translation.

**[Live Demo](https://rtl-support.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app shows how to build a fully RTL-aware Next.js application using General Translation's locale direction helpers. Switch between Arabic, Hebrew, and LTR languages to see the entire layout flip automatically — including navigation, text alignment, and icon direction.

## GT Features Used

- `<T>` — JSX translation
- `<Var>` — Dynamic values inside translations
- `getLocaleDirection` — Server-side direction detection
- `useLocaleDirection` — Client-side direction detection
- `<LocaleSelector>` — Language picker
- `getGT` / `useGT` — String translations
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/rtl-support.git
cd rtl-support
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
