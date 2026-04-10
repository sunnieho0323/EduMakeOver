"use client";

import { useEffect } from "react";

export function StudioLayoutClient() {
  useEffect(() => {
    const body = document.body;
    const toggle = document.getElementById("sidebar-toggle");
    const closeBtn = document.getElementById("sidebar-close");
    const backdrop = document.getElementById("sidebar-backdrop");

    const openSidebar = () => body.classList.add("sidebar-open");
    const closeSidebar = () => body.classList.remove("sidebar-open");

    toggle?.addEventListener("click", openSidebar);
    closeBtn?.addEventListener("click", closeSidebar);
    backdrop?.addEventListener("click", closeSidebar);

    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) closeSidebar();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSidebar();
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      toggle?.removeEventListener("click", openSidebar);
      closeBtn?.removeEventListener("click", closeSidebar);
      backdrop?.removeEventListener("click", closeSidebar);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}

