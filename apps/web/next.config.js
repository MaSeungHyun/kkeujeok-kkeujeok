
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@kkeujeok-kkeujeok/ui"],
    turbopack: {
        // Ensure Turbopack resolves monorepo paths/globs from repo root
        root: path.join(__dirname, "../.."),
    },
};



export default nextConfig;
