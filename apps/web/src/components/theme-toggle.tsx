"use client";

import type { ReactElement } from "react";
import { useEffect, useEffectEvent, useState } from "react";
import { THEME_STORAGE_KEY, type ThemeMode } from "@/lib/theme";

const OPTIONS: Array<{
  description: string;
  icon: ReactElement;
  label: string;
  value: ThemeMode;
}> = [
  {
    value: "light",
    label: "Light",
    description: "ใช้โทนสว่างตลอดเวลา",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path
          d="M12 3v2.25M12 18.75V21M5.636 5.636l1.591 1.591M16.773 16.773l1.591 1.591M3 12h2.25M18.75 12H21M5.636 18.364l1.591-1.591M16.773 7.227l1.591-1.591M15.75 12A3.75 3.75 0 1 1 8.25 12a3.75 3.75 0 0 1 7.5 0Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    value: "dark",
    label: "Dark",
    description: "ใช้โทนมืดตลอดเวลา",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path
          d="M21 12.8A8.95 8.95 0 0 1 11.2 3a9 9 0 1 0 9.8 9.8Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    value: "auto",
    label: "Auto",
    description: "ตามค่าระบบของอุปกรณ์",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path
          d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 1-2.25 2.25H13.5l1.5 3h-6l1.5-3H6.75A2.25 2.25 0 0 1 4.5 13.25v-6.5Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
];

function isThemeMode(value: string | null): value is ThemeMode {
  return value === "light" || value === "dark" || value === "auto";
}

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const resolvedTheme =
    mode === "auto"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : mode;

  root.dataset.themeMode = mode;
  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;
}

export function ThemeToggle() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("auto");

  const syncWithSystem = useEffectEvent(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const nextTheme = isThemeMode(savedTheme) ? savedTheme : "auto";
    setThemeMode(nextTheme);
    applyTheme(nextTheme);
  });

  useEffect(() => {
    syncWithSystem();

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", syncWithSystem);

    return () => media.removeEventListener("change", syncWithSystem);
  }, [syncWithSystem]);

  const handleThemeChange = (nextTheme: ThemeMode) => {
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setThemeMode(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <div className="rounded-full border border-line bg-surface/90 p-1.5 shadow-[0_12px_32px_rgba(15,23,42,0.10)] backdrop-blur">
      <div className="flex items-center gap-1">
        {OPTIONS.map((option) => {
          const isActive = themeMode === option.value;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isActive}
              aria-label={option.description}
              onClick={() => handleThemeChange(option.value)}
              className={[
                "inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition sm:min-w-21",
                isActive
                  ? "bg-foreground text-background shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
                  : "text-muted hover:bg-background/80 hover:text-foreground",
              ].join(" ")}
            >
              {option.icon}
              <span className="hidden sm:inline">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
