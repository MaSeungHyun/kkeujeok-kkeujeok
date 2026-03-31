import type { Config } from "tailwindcss";

const sharedConfig: Pick<Config, "theme" | "plugins"> = {
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          500: "rgb(var(--brand-500) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
  // web/ui가 둘 다 Tailwind를 쓰면 reset(프리플라이트) 중복이 종종 문제라,
  // shared 정책으로 둘지, ui만 끌지는 팀 선택입니다.
  // corePlugins: { preflight: false },
};

export default sharedConfig;
