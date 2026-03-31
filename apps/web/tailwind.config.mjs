import sharedConfig from "@kkeujeok-kkeujeok/tailwind-config";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('tailwindcss').Config} */
export default {
  presets: [sharedConfig],
  content: [
    path.join(__dirname, "app/**/*.{ts,tsx}"),
    path.join(__dirname, "../../packages/ui/src/**/*.{ts,tsx}"),
    path.join(__dirname, "node_modules/@kkeujeok-kkeujeok/ui/src/**/*.{ts,tsx}"),
  ],
};

