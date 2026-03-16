import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Allow <img> elements (we are using external Unsplash URLs not compatible with next/image without domain config)
      "@next/next/no-img-element": "off",
      // Allow unescaped apostrophes and quotes in JSX text
      "react/no-unescaped-entities": "off",
      // Allow unused vars to be warnings not errors
      "@typescript-eslint/no-unused-vars": "warn",
      // Allow setMounted in useEffect (false positive from react-hooks/purity)
      "react-hooks/purity": "off",
    },
  },
]);

export default eslintConfig;
