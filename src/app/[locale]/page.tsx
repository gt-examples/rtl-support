import { T } from "gt-next";
import { getLocaleDirection, getLocale, getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import DirectionDemo from "@/components/DirectionDemo";
import RTLShowcase from "@/components/RTLShowcase";

export default async function Home() {
  const locale = await getLocale();
  const dir = await getLocaleDirection();
  const gt = await getGT();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      {/* Example app disclaimer */}
      <div className="bg-amber-900/30 border-b border-amber-700/50 text-amber-200 text-xs text-center py-2 px-4">
        <T>
          This is an example app demonstrating{" "}
          <a
            href="https://generaltranslation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-amber-100"
          >
            General Translation
          </a>{" "}
          RTL support features. It is not a real product.
        </T>
      </div>

      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              <T>RTL Support</T>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/rtl-support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label={gt("View on GitHub")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            <T>Right-to-left language support</T>
          </h2>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed mb-4">
            <T>
              Switch to Arabic or Hebrew using the locale selector above to see
              the entire layout flip to right-to-left. The dir and lang
              attributes on the html element are set automatically using
              getLocaleDirection().
            </T>
          </p>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-neutral-500">
              <T>Server-side direction:</T>
            </span>
            <code
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                dir === "rtl"
                  ? "bg-amber-900/40 text-amber-300 border border-amber-700/50"
                  : "bg-blue-900/40 text-blue-300 border border-blue-700/50"
              }`}
            >
              {dir.toUpperCase()}
            </code>
            <span className="text-neutral-500">
              <T>Locale:</T>
            </span>
            <code className="text-neutral-300">{locale}</code>
          </div>
        </div>

        <div className="space-y-8">
          <DirectionDemo />
          <RTLShowcase />

          <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="text-lg font-semibold text-neutral-100 mb-3">
              <T>How it works</T>
            </h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <p>
                <T>
                  The layout component uses getLocaleDirection() from
                  gt-next/server to set the dir attribute on the html element.
                  This single attribute controls the entire page flow.
                </T>
              </p>
              <p>
                <T>
                  Client components use useLocaleDirection() to access the
                  current direction for conditional styling, such as flipping
                  arrow icons or adjusting component-level layout.
                </T>
              </p>
              <p>
                <T>
                  Both functions accept an optional locale parameter to check the
                  direction of any locale without switching context.
                </T>
              </p>
            </div>
          </div>

          <div className="text-center text-sm text-neutral-500 pt-4">
            <T>
              Learn more about{" "}
              <a
                href="https://generaltranslation.com/en-US/docs/next/api/helpers/locale-direction"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-300"
              >
                locale direction helpers
              </a>{" "}
              and{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/RTL"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-300"
              >
                RTL web development
              </a>{" "}
              in the documentation.
            </T>
          </div>
        </div>
      </main>
    </div>
  );
}
