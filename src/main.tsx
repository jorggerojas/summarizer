import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@global-styles/main.css";
import "@global-styles/styles/tailwind.css";

import { Firebase } from "@components/config";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Firebase />
    <section className='grid place-content-center w-full h-screen'>
      <h1 className='text-h1 font-bold'>Summarizer</h1>
    </section>
  </StrictMode>,
);
