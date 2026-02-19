"use client";

import { useLocaleDirection, useLocale } from "gt-next";

const sampleLocales = [
  { code: "en", name: "English" },
  { code: "ar", name: "Arabic" },
  { code: "he", name: "Hebrew" },
  { code: "fr", name: "French" },
  { code: "ja", name: "Japanese" },
];

export default function DirectionDemo() {
  const currentLocale = useLocale();
  const currentDir = useLocaleDirection();

  return (
    <div className="space-y-8">
      <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
        <h3 className="text-lg font-semibold text-neutral-100 mb-4">
          Current layout direction
        </h3>
        <div className="flex items-center gap-4">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
              currentDir === "rtl"
                ? "bg-amber-900/40 text-amber-300 border border-amber-700/50"
                : "bg-blue-900/40 text-blue-300 border border-blue-700/50"
            }`}
          >
            {currentDir.toUpperCase()}
          </span>
          <span className="text-sm text-neutral-400">
            Locale: <code className="text-neutral-300">{currentLocale}</code>
          </span>
        </div>
        <p className="mt-3 text-sm text-neutral-500">
          This value comes from{" "}
          <code className="text-neutral-400">useLocaleDirection()</code> in a
          client component.
        </p>
      </div>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
        <h3 className="text-lg font-semibold text-neutral-100 mb-4">
          Direction by locale
        </h3>
        <p className="text-sm text-neutral-500 mb-4">
          <code className="text-neutral-400">
            useLocaleDirection(locale)
          </code>{" "}
          returns the direction for any locale, without switching.
        </p>
        <div className="grid gap-2">
          {sampleLocales.map(({ code, name }) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const dir = useLocaleDirection(code);
            return (
              <div
                key={code}
                className={`flex items-center justify-between rounded px-4 py-2 text-sm ${
                  code === currentLocale
                    ? "bg-neutral-800 border border-neutral-700"
                    : "bg-neutral-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <code className="text-neutral-300 w-8">{code}</code>
                  <span className="text-neutral-400">{name}</span>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    dir === "rtl"
                      ? "bg-amber-900/40 text-amber-300"
                      : "bg-blue-900/40 text-blue-300"
                  }`}
                >
                  {dir}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
