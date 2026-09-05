"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileTap={{ scale: 0.88 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="بازگشت به بالای صفحه"
          className="fixed bottom-20 left-5 z-40 flex size-11 items-center justify-center rounded-full border border-brand-border bg-white text-brand-primary shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:bottom-6"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
