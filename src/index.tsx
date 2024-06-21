import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Welcome } from "./components/Welcome";
import { Providers } from "./providers";

const container = document.getElementById("root");
if (!container)
  throw new Error("react root element `#root` does not exist in DOM");

createRoot(container).render(
  <StrictMode>
    <Providers container={container}>
      <Welcome />
    </Providers>
  </StrictMode>,
);
