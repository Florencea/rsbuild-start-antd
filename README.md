# rsbuild start antd

![CI](https://github.com/Florencea/rsbuild-start-antd/actions/workflows/test.yml/badge.svg)

- This template provides a minimal project with [Rsbuild](https://rsbuild.dev/zh/), [Ant Design](https://ant.design/), [Tailwind CSS](https://tailwindcss.com/) and [TanStack Router](https://tanstack.com/router/latest)

## Env Variables

- Variables prefixed with `PUBLIC_` are [exposed](https://rsbuild.dev/zh/guide/advanced/env-vars) to client code

```sh
# Title of the Website
PUBLIC_TITLE="Rsbuild Start antd"
# Favicon of Website in /public directory
PUBLIC_FAVICON="./src/assets/rsbuild.svg"
# React render root element id
PUBLIC_ELEMENT_ROOT="main"
# Base URL for Deployment
PUBLIC_BASEPATH="/"
# Backend api prefix for proxy server in development mode
PUBLIC_API_PREFIX="/api"
# Primary color for antd and TailwindCSS
PUBLIC_THEME_COLOR_PRIMARY="#722ed1"
# PORT in dev mode
PORT=3000
# Proxy server in development mode
PROXY_SERVER="http://localhost:3000/"
```

## Docs

- [Rsbuild](https://rsbuild.dev/zh/)
- [Ant Design](https://ant.design/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Router](https://tanstack.com/router/latest)
