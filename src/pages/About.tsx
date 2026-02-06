import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eye, Target, BookOpen, Shield, Heart, Sparkles, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✨ About Us
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                About Us – <span className="text-gradient-gold">Islam360Kids</span>
              </h1>
              <p className="text-lg text-gold-bright font-semibold">
                Building a Generation Connected to Islam
              </p>
            </div>

            {/* Intro */}
            <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Islam360Kids is an educational Islamic learning platform specially designed for children. Our mission is to help young Muslims learn, understand, and love Islam in a simple, engaging, and child-friendly way.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Developed by <span className="font-semibold text-foreground">International Technology Mission</span>, Islam360Kids brings together modern technology and authentic Islamic knowledge to create a safe digital environment where children can grow spiritually and morally.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Our Vision */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-bright/20 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-gold-bright" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To nurture a generation of children who are strongly connected to the Quran, Sunnah, and Islamic values through interactive and meaningful digital learning.
                </p>
              </div>

              {/* Our Mission */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our mission is to make Islamic education easy, fun, and accessible for children around the world by providing:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>High-quality Islamic learning content</li>
                  <li>Kid-friendly interactive lessons</li>
                  <li>Safe and distraction-free environment</li>
                  <li>Engaging tools to learn Quran, Duas, and Islamic manners</li>
                  <li>Digital solutions that support parents in raising confident Muslim children</li>
                </ul>
              </div>

              {/* What We Offer */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-vibrant/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-purple-glow" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">What We Offer</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Islam360Kids provides a variety of educational features designed specifically for young learners, including:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-gold-bright">📖</span> Noorani Qaida for learning Quran recitation
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-accent">🕌</span> Short Surahs and Amma Para
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-blue-sky">🤲</span> Daily Duas and Islamic supplications
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-pink-soft">📚</span> Islamic stories and moral lessons
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-purple-glow">🙏</span> Prayer learning tools
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-gold-warm">✨</span> Interactive and child-friendly interface
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Everything inside Islam360Kids is carefully designed to make learning Islam enjoyable and easy for children.
                </p>
              </div>

              {/* Safe for Children */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-sky/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-sky" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">Safe for Children</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We understand the importance of child safety. Islam360Kids is built with strong privacy principles:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>No personal data collection</li>
                  <li>No advertisements</li>
                  <li>No social interaction features</li>
                  <li>Completely safe and secure environment</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Parents can confidently allow their children to use the app without any concerns.
                </p>
              </div>

              {/* Why Islam360Kids */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-soft/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-soft" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">Why Islam360Kids?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In today's digital world, children need a platform that teaches Islamic values in a modern way. Islam360Kids bridges that gap by combining:
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-background/50 rounded-xl px-4 py-3 text-center">
                    <span className="text-muted-foreground text-sm">Authentic Islamic content</span>
                  </div>
                  <div className="bg-background/50 rounded-xl px-4 py-3 text-center">
                    <span className="text-muted-foreground text-sm">Simple language</span>
                  </div>
                  <div className="bg-background/50 rounded-xl px-4 py-3 text-center">
                    <span className="text-muted-foreground text-sm">Attractive design</span>
                  </div>
                  <div className="bg-background/50 rounded-xl px-4 py-3 text-center">
                    <span className="text-muted-foreground text-sm">Interactive learning</span>
                  </div>
                  <div className="bg-background/50 rounded-xl px-4 py-3 text-center">
                    <span className="text-muted-foreground text-sm">Positive screen time</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our goal is to help children develop a lifelong love for Islam.
                </p>
              </div>

              {/* Our Commitment */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-warm/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-gold-warm" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">Our Commitment</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to continuously improving Islam360Kids with new features, better content, and innovative learning tools so that Muslim children everywhere can benefit from authentic Islamic education.
                </p>
              </div>

              {/* Contact Us */}
              <div className="bg-gradient-to-br from-purple-vibrant/20 to-gold-bright/20 rounded-3xl p-6 md:p-8 border border-border/50 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-bright/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold-bright" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">Contact Us</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions, suggestions, or feedback, feel free to reach out to us:
                </p>
                <p className="text-foreground font-semibold text-lg">
                  📧 islam360kidshelpcenter@gmail.com
                </p>
                <p className="text-gold-bright font-display font-bold mt-6">
                  Islam360Kids – Learning Islam the Fun Way 🌙
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
