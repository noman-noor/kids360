import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingStars } from "./FloatingStars";
import { Play, Download } from "lucide-react";
import heroCharacter from "@/assets/hero-character.png";

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-gradient-to-br from-purple-vibrant via-purple-rich to-purple-deep"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--gold-bright)/0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--purple-glow)/0.3)_0%,_transparent_50%)]" />
      
      {/* Floating Stars */}
      <FloatingStars />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gold-bright/20 border border-gold-bright/40 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gold-bright animate-pulse" />
              <span className="text-gold-bright font-semibold text-sm">
                #1 Islamic Learning App for Kids
              </span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Make Learning Islam
              <br />
              <span className="text-gradient-gold">Fun & Easy!</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Interactive Quran learning, Prophet stories, and Islamic education designed specially for your little ones. 🌙
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                <Download className="w-5 h-5 mr-2" />
                Download Free
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

          </motion.div>

          {/* Right Content - Character */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-vibrant/30 via-transparent to-transparent rounded-full blur-3xl" />
            
            {/* Character Image */}
            <motion.img
              src={heroCharacter}
              alt="Islam360Kids Character"
              className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Feature Badges floating around character */}
            <motion.div
              className="absolute top-20 left-0 bg-card/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-card border border-border/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <span className="font-display font-bold text-gold-bright">📖 Qaida</span>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-0 bg-card/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-card border border-border/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="font-display font-bold text-accent">📚 Stories</span>
            </motion.div>

            <motion.div
              className="absolute bottom-32 left-10 bg-card/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-card border border-border/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <span className="font-display font-bold text-pink-soft">🕌 Amma Para</span>
            </motion.div>

            <motion.div
              className="absolute bottom-20 right-5 bg-card/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-card border border-border/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            >
              <span className="font-display font-bold text-blue-sky">🤲 Duas</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="hsl(270 50% 12%)"
          />
        </svg>
      </div>
    </section>
  );
};
