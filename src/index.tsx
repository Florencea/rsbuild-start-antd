import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "./providers";
import { routeTree } from "./routeTree.gen";

const container = document.getElementById(
  `${import.meta.env.PUBLIC_ELEMENT_ROOT}`,
);
if (!container)
  throw new Error(
    `react root element \`#${import.meta.env.PUBLIC_ELEMENT_ROOT}\` does not exist in DOM`,
  );

const router = createRouter({
  routeTree,
  basepath: import.meta.env.PUBLIC_BASEPATH,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(container).render(
  <StrictMode>
    <Providers container={container}>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>,
);
