import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Bell, BarChart3, Users, RefreshCw, Mail } from "lucide-react";

const PrivacyPolicy = () => {
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
                🔒 Privacy Policy
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Privacy Policy – <span className="text-gradient-gold">Islam360Kids</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Islam360Kids is developed and managed by International Technology Mission. We are committed to protecting the privacy and safety of children and families.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Intro */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy explains how Islam360Kids handles user data and what permissions are required to provide core app features. Islam360Kids does not collect, store, or share any personal information from its users. By using the Islam360Kids app, you agree to the terms of this Privacy Policy.
                </p>
              </div>

              {/* Section 1 */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-bright/20 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-gold-bright" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">1. Information We Collect</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Islam360Kids is designed as a safe and educational Islamic learning app for children. The app does not collect any personal data such as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Names</li>
                  <li>Email addresses</li>
                  <li>Phone numbers</li>
                  <li>Photos</li>
                  <li>Contacts</li>
                  <li>Any identifiable personal information</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The app only uses minimal device permissions required to provide essential features.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">2. Permissions Used in the App</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Islam360Kids may request certain permissions from the device only to enable core functionality of the app. These permissions are used solely for providing app features such as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Accurate prayer timings</li>
                  <li>Qibla direction</li>
                  <li>Islamic reminders and notifications</li>
                  <li>Educational content updates</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                  All permissions are used strictly within the app. No personal data is collected, stored, or transmitted to any external server.
                </p>
              </div>

              {/* Section 3 */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-vibrant/20 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-purple-glow" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">3. App Analytics</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Islam360Kids may use Google Firebase analytics services to collect anonymous usage data such as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Number of installs</li>
                  <li>Device type and model</li>
                  <li>App performance statistics</li>
                  <li>Crash reports</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This information is completely anonymous and is used only to improve the quality and performance of the app. No personal or identifiable information is collected through analytics.
                </p>
              </div>

              {/* Section 4 */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-soft/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-pink-soft" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">4. How We Use Information</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Islam360Kids does not collect or store any personal information. All user preferences such as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Notification settings</li>
                  <li>App preferences</li>
                  <li>Downloaded content</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  are saved only on the user's device and are not uploaded to any server.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-sky/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-sky" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">5. Data Sharing</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Islam360Kids follows a strict <span className="font-semibold text-foreground">No Data Sharing</span> policy. We do NOT share any user data with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Third-party companies</li>
                  <li>Advertising platforms</li>
                  <li>Social media services</li>
                  <li>External vendors</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  General anonymous statistics may be used internally for app improvement, but these never contain personal information.
                </p>
              </div>

              {/* Section 6 */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-warm/20 flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-gold-warm" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">6. Third-Party Services</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Islam360Kids may use trusted third-party services such as Google Firebase only for crash reporting, app analytics, and performance monitoring. These services do not collect personal user data.
                </p>
              </div>

              {/* Section 7 */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">7. Children's Privacy</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Islam360Kids is built especially for children and families. To ensure child safety:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>No account creation is required</li>
                  <li>No personal data is collected</li>
                  <li>No chat or social features are included</li>
                  <li>No targeted advertising is shown</li>
                  <li>No tracking of individual users is performed</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Parents and guardians can confidently allow children to use the app without privacy concerns.
                </p>
              </div>

              {/* Section 8 */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-vibrant/20 flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-purple-glow" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">8. Privacy Policy Changes</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  International Technology Mission reserves the right to update this Privacy Policy at any time. Any changes will be reflected within the app and on the app store listing. Continued use of the app after changes indicates acceptance of the updated Privacy Policy.
                </p>
              </div>

              {/* Section 9 */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-bright/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold-bright" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">9. Contact Us</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions or concerns regarding this Privacy Policy, please contact us:
                </p>
                <p className="text-foreground font-semibold">
                  📧 islam360kidshelpcenter@gmail.com
                </p>
              </div>

              {/* Commitment */}
              <div className="bg-gradient-to-br from-purple-vibrant/20 to-gold-bright/20 rounded-3xl p-6 md:p-8 border border-border/50 text-center">
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Commitment to Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Islam360Kids is committed to providing a safe, secure, and privacy-friendly Islamic learning experience for children around the world.
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

export default PrivacyPolicy;
