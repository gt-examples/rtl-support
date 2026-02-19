"use client";

import { useLocaleDirection } from "gt-next";
import { T, Var } from "gt-next";

export default function RTLShowcase() {
  const dir = useLocaleDirection();
  const isRTL = dir === "rtl";

  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
      <h3 className="text-lg font-semibold text-neutral-100 mb-4">
        <T>Layout showcase</T>
      </h3>
      <p className="text-sm text-neutral-500 mb-6">
        <T>
          Notice how these elements automatically flip when viewing in an RTL
          locale. The navigation, alignment, and flow all reverse.
        </T>
      </p>

      <div className="space-y-4">
        {/* Simulated nav bar */}
        <div className="flex items-center justify-between rounded bg-neutral-800 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-neutral-600" />
            <span className="text-sm text-neutral-300">
              <T>Navigation</T>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500">
              <T>Menu</T>
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={`text-neutral-500 ${isRTL ? "rotate-180" : ""}`}
            >
              <path d="M6 3l5 5-5 5V3z" />
            </svg>
          </div>
        </div>

        {/* Simulated card with icon + text */}
        <div className="flex items-start gap-4 rounded bg-neutral-800 px-4 py-3">
          <div className="mt-0.5 h-8 w-8 shrink-0 rounded-full bg-neutral-600" />
          <div className="flex-1">
            <p className="text-sm font-medium text-neutral-200">
              <T>
                User profile section with <Var>{dir.toUpperCase()}</Var> text
                direction
              </T>
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              <T>
                Text alignment, padding, and margins all respect the document
                direction attribute.
              </T>
            </p>
          </div>
        </div>

        {/* Simulated list */}
        <div className="rounded bg-neutral-800 divide-y divide-neutral-700">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between px-4 py-2.5"
            >
              <span className="text-sm text-neutral-300">
                <T>
                  List item <Var>{i}</Var>
                </T>
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                className={`text-neutral-600 ${isRTL ? "rotate-180" : ""}`}
              >
                <path d="M6 3l5 5-5 5V3z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
