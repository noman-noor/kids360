import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between rounded-2xl bg-card/80 backdrop-blur-lg border border-border/50 px-6 py-3">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <img src={logo} alt="Islam360Kids" className="w-10 h-10 rounded-xl" />
            <span className="font-display text-xl font-bold text-foreground">
              Islam360<span className="text-gold-bright">Kids</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
              Features
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
              About
            </a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
              Download
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="hero" size="lg">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 rounded-2xl bg-card/95 backdrop-blur-lg border border-border/50 p-4"
          >
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-foreground font-semibold py-2" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
              <a href="#about" className="text-foreground font-semibold py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#download" className="text-foreground font-semibold py-2" onClick={() => setIsMenuOpen(false)}>
                Download
              </a>
              <Button variant="hero" size="lg" className="w-full mt-2">
                Download App
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
