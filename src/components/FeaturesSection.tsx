import { motion } from "framer-motion";
import { BookOpen, Sparkles, Moon, Star, Heart, Headphones } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Noorani Qaida",
    description: "Learn Arabic letters and pronunciation with fun, interactive lessons designed for young learners.",
    color: "from-gold-bright to-gold-warm",
    bgColor: "bg-gold-bright/10",
    iconColor: "text-gold-bright",
  },
  {
    icon: Sparkles,
    title: "Prophet Stories",
    description: "Beautiful animated stories about the prophets that inspire and educate children about Islamic history.",
    color: "from-accent to-green-light",
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Moon,
    title: "Amma Para",
    description: "Memorize the Amma Para with audio recitations, translations, and progress tracking.",
    color: "from-purple-vibrant to-purple-glow",
    bgColor: "bg-purple-vibrant/10",
    iconColor: "text-purple-glow",
  },
  {
    icon: Star,
    title: "Daily Duas",
    description: "Essential duas for everyday activities with audio pronunciation and meaning.",
    color: "from-pink-soft to-purple-light",
    bgColor: "bg-pink-soft/10",
    iconColor: "text-pink-soft",
  },
  {
    icon: Heart,
    title: "Prayer Guide",
    description: "Step-by-step Salah guide with visual aids and audio to help kids learn how to pray.",
    color: "from-blue-sky to-accent",
    bgColor: "bg-blue-sky/10",
    iconColor: "text-blue-sky",
  },
  {
    icon: Headphones,
    title: "Audio Lessons",
    description: "High-quality recitations from renowned reciters to help with proper Tajweed.",
    color: "from-gold-warm to-gold-bright",
    bgColor: "bg-gold-warm/10",
    iconColor: "text-gold-warm",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold-bright/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-vibrant/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything Your Child Needs to
            <br />
            <span className="text-gradient-gold">Learn & Grow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete Islamic learning experience with engaging content designed to make education fun and memorable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-float">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
