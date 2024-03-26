import React, { useEffect, useRef, useCallback } from "react";
import { useColorMode } from "@docusaurus/theme-common";

function Comment() {
  const containerRef = useRef<HTMLIFrameElement | null>(null);
  const utterancesRef = useRef<HTMLIFrameElement | null>(null);

  const { colorMode } = useColorMode();
  const utterancesTheme = colorMode === "dark" ? "github-dark" : "github-light";

  const createUtterancesEl = useCallback(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "seobie/seobie.github.io");
    script.setAttribute("issue-term", "title");
    script.setAttribute("label", "comment");
    script.setAttribute("theme", utterancesTheme);
    script.crossOrigin = "anonymous";
    script.async = true;
    script.onload = () => {
      utterancesRef.current = document.querySelector(".utterances-frame");
    };
    containerRef.current?.appendChild(script);
  }, [utterancesTheme]);

  useEffect(() => {
    createUtterancesEl();
  }, [createUtterancesEl]);

  useEffect(() => {
    if (!utterancesRef.current) return;
    const message = {
      type: "set-theme",
      theme: utterancesTheme,
    };

    utterancesRef.current.contentWindow?.postMessage(
      message,
      "https://utteranc.es"
    );
  }, [utterancesTheme]);

  return <div ref={containerRef} />;
}

export default Comment;
