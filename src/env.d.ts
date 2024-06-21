/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
  readonly PUBLIC_TITLE: string;
  readonly PUBLIC_FAVICON: string;
  readonly PUBLIC_THEME_COLOR_PRIMARY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
