import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Welcome } from "./components/Welcome";
import { Providers } from "./providers";

const container = document.getElementById(
  `${import.meta.env.PUBLIC_ELEMENT_ROOT}`,
);
if (!container)
  throw new Error(
    `react root element \`#${import.meta.env.PUBLIC_ELEMENT_ROOT}\` does not exist in DOM`,
  );

createRoot(container).render(
  <StrictMode>
    <Providers container={container}>
      <Welcome />
    </Providers>
  </StrictMode>,
);
