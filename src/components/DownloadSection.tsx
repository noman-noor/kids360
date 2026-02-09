import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import { FloatingStars } from "./FloatingStars";

export const DownloadSection = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-purple-deep to-background">
      <FloatingStars />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold-bright/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-vibrant/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Emoji decoration */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="text-6xl mb-6"
          >
            🌙
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Start Your Child's
            <br />
            <span className="text-gradient-gold">Islamic Journey?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Download Islam360Kids today and give your children the gift of Islamic knowledge in a fun, engaging way!
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a href="https://play.google.com/store/apps/details?id=com.islam360kids" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  <Smartphone className="w-6 h-6 mr-2" />
                  <div className="text-left">
                    <div className="text-xs font-normal opacity-80">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </Button>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                variant="heroOutline"
                size="xl"
                className="w-full sm:w-auto min-w-[200px] opacity-80 cursor-default"
                disabled
              >
                <Apple className="w-6 h-6 mr-2" />
                <div className="text-left">
                  <div className="text-xs font-normal opacity-80">Coming Soon</div>
                  <div className="font-bold">App Store</div>
                </div>
              </Button>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-card/50 flex items-center justify-center text-3xl">
                📱
              </div>
              <div className="font-display text-2xl font-bold text-foreground">Free</div>
              <div className="text-sm text-muted-foreground">to Download</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-card/50 flex items-center justify-center text-3xl">
                👨‍👩‍👧‍👦
              </div>
              <div className="font-display text-2xl font-bold text-foreground">Family</div>
              <div className="text-sm text-muted-foreground">Friendly</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-card/50 flex items-center justify-center text-3xl">
                🔒
              </div>
              <div className="font-display text-2xl font-bold text-foreground">Safe</div>
              <div className="text-sm text-muted-foreground">& Secure</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-card/50 flex items-center justify-center text-3xl">
                📶
              </div>
              <div className="font-display text-2xl font-bold text-foreground">Offline</div>
              <div className="text-sm text-muted-foreground">Access</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
