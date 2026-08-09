import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={volverArriba}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Volver al inicio"
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-12
            h-12
            rounded-full
            bg-cyan-400
            text-slate-950
            flex
            items-center
            justify-center
            shadow-[0_0_25px_rgba(34,211,238,.35)]
            hover:bg-cyan-300
            transition-colors
          "
        >
          <ArrowUp size={21} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}