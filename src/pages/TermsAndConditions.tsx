import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, Users, Mic, BookOpen, Shield, AlertCircle, RefreshCw, Globe, Mail, Lock } from "lucide-react";

const TermsAndConditions = () => {
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
                📋 Terms &amp; Conditions
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Terms &amp; Conditions – <span className="text-gradient-gold">Islam360Kids</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Effective: June 2026 &nbsp;|&nbsp; ITM Private Limited &nbsp;|&nbsp; Karachi, Pakistan
              </p>
            </div>

            <div className="space-y-8">
              {/* Intro */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  Please read these Terms &amp; Conditions carefully before using Islam360Kids. By downloading or using
                  this app, a parent or legal guardian agrees to these terms on behalf of the child. If you do not
                  agree, please do not use this application.
                </p>
              </div>

              {/* Section 1 — Definitions */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-bright/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-gold-bright" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">1. Definitions</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In these Terms &amp; Conditions, the following meanings apply:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><span className="font-semibold text-foreground">"App"</span> means the Islam360Kids mobile application.</li>
                  <li><span className="font-semibold text-foreground">"We / Us / Our"</span> refers to ITM Private Limited, the developer and owner of Islam360Kids.</li>
                  <li><span className="font-semibold text-foreground">"User"</span> means the parent or legal guardian who installs and manages the App on behalf of a child.</li>
                  <li><span className="font-semibold text-foreground">"Child"</span> means the minor for whom the App is being used.</li>
                  <li><span className="font-semibold text-foreground">"Device"</span> means the mobile or tablet device on which the App is installed.</li>
                  <li><span className="font-semibold text-foreground">"Service"</span> means all features, content, and functionality provided through the App, including Noorani Qaida lessons and pronunciation assessment.</li>
                </ul>
              </div>

              {/* Section 2 — Parental Consent */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">2. Parental Consent &amp; Eligibility</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Islam360Kids is designed exclusively for children under the supervision of a parent or legal guardian.
                  By using this App, you confirm that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>You are the parent or legal guardian of the child using this App.</li>
                  <li>You have reviewed these Terms &amp; Conditions and accept them on the child's behalf.</li>
                  <li>You are aware that the App uses voice input from the child for pronunciation assessment purposes.</li>
                  <li>You take full responsibility for supervising your child's use of this App.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not knowingly collect any personal data directly from children. All account-related
                  interactions are intended to be managed by parents or guardians.
                </p>
              </div>

              {/* Section 3 — Licence */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-vibrant/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-purple-glow" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">3. Licence to Use the App</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We grant you a personal, limited, non-exclusive, non-transferable, and non-sublicensable licence to
                  install and use Islam360Kids on a single Device for private, non-commercial, educational purposes
                  only.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2 font-medium">You may not:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Copy, distribute, sell, or reproduce the App or any part of it.</li>
                  <li>Modify, decompile, disassemble, or reverse-engineer the App.</li>
                  <li>Use the App for any commercial purpose or on behalf of any third party.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  All rights not expressly granted herein are reserved by ITM Private Limited.
                </p>
              </div>

              {/* Section 4 — AI Pronunciation */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-soft/20 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-pink-soft" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">4. AI-Powered Pronunciation Assessment</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Islam360Kids includes an AI-powered Noorani Qaida feature that uses voice recognition technology
                  to assess the child's Quranic pronunciation. This feature is powered by Microsoft Azure AI Speech
                  Services.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2 font-medium">
                  By using the pronunciation assessment feature, you acknowledge and agree that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Voice audio recorded during exercises is transmitted to Microsoft Azure servers solely for the purpose of real-time pronunciation evaluation.</li>
                  <li>We do not store or retain voice recordings on our own servers after processing is complete.</li>
                  <li>Audio data is processed in accordance with Microsoft Azure's data processing terms and privacy policies.</li>
                  <li>This feature requires an active internet connection to function.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 italic">
                  Note: The pronunciation assessment feature is intended as an educational aid only. It does not
                  constitute a formal religious ruling (fatwa) on the correctness of recitation.
                </p>
              </div>

              {/* Section 5 — Islamic Content */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-warm/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-gold-warm" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">5. Islamic Content &amp; Accuracy</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We strive to ensure that all Islamic content within Islam360Kids — including Quranic text, Noorani
                  Qaida lessons, Arabic diacritical marks (harakat), and transliterations — is accurate and
                  religiously sound. However:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>All content is provided for educational purposes and should be supplemented by guidance from a qualified Quran teacher (Ustadh/Ustadha).</li>
                  <li>We welcome corrections or feedback on any content that may be inaccurate. Please contact us at the address provided below.</li>
                  <li>We reserve the right to update or correct any content at any time without prior notice.</li>
                </ul>
              </div>

              {/* Section 6 — Acceptable Use */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-sky/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-sky" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">6. Acceptable Use</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use this App only for its intended educational purpose. You must not use the App to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations.</li>
                  <li>Attempt to gain unauthorised access to any part of the App or its systems.</li>
                  <li>Transmit any harmful, offensive, or malicious content or code.</li>
                  <li>Misrepresent your identity or your relationship to the child using the App.</li>
                </ul>
              </div>

              {/* Section 7 — Privacy */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">7. Privacy &amp; Data</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your privacy and the privacy of your child are important to us. Our collection and use of any data
                  is governed by our Privacy Policy, which forms part of these Terms &amp; Conditions.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>We collect only the minimum data necessary to operate the Service.</li>
                  <li>We do not sell or share personal data with third parties for marketing purposes.</li>
                  <li>Voice data processed through Azure AI Speech is subject to Microsoft's privacy terms and is not retained by us.</li>
                  <li>The App may require certain device permissions (microphone, internet access) to function correctly.</li>
                </ul>
              </div>

              {/* Section 8 — Disclaimer */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-soft/20 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-pink-soft" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">8. Disclaimer &amp; Limitation of Liability</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The App and all content and services are provided <span className="font-semibold text-foreground">"as is"</span> and{" "}
                  <span className="font-semibold text-foreground">"as available"</span> without warranty of any kind, express or implied.
                  We do not warrant that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>The App will be uninterrupted, error-free, or free from viruses or harmful components.</li>
                  <li>The pronunciation assessment results will be perfectly accurate in all cases.</li>
                  <li>The App will meet all of your specific requirements.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To the maximum extent permitted by applicable law, ITM Private Limited shall not be liable for any
                  direct, indirect, incidental, or consequential damages arising from your use of or inability to use
                  the App.
                </p>
              </div>

              {/* Section 9 — Updates */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-vibrant/20 flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-purple-glow" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">9. Updates &amp; Modifications</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to update, modify, or discontinue the App or any part of its Service at any
                  time without prior notice. We may also update these Terms &amp; Conditions from time to time.
                  Continued use of the App after any such changes constitutes your acceptance of the new terms.
                </p>
              </div>

              {/* Section 10 — Governing Law */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-bright/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-gold-bright" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">10. Governing Law</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of the
                  Islamic Republic of Pakistan. Any disputes arising from the use of this App shall be subject to
                  the jurisdiction of the courts of Karachi, Pakistan.
                </p>
              </div>

              {/* Section 11 — Contact */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-bright/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold-bright" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">11. Contact Us</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions, concerns, or feedback regarding these Terms &amp; Conditions or the App,
                  please contact us at:
                </p>
                <p className="text-foreground font-semibold">ITM Private Limited</p>
                <p className="text-muted-foreground">Karachi, Pakistan</p>
                <p className="text-foreground font-semibold mt-1">
                  📧 islam360kidshelpcenter@gmail.com
                </p>
              </div>

              {/* Footer note */}
              <div className="bg-gradient-to-br from-purple-vibrant/20 to-gold-bright/20 rounded-3xl p-6 md:p-8 border border-border/50 text-center">
                <p className="text-muted-foreground leading-relaxed">
                  © 2026 ITM Private Limited. All rights reserved.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  By using this App, you confirm that you have read, understood, and agree to be bound by these
                  Terms &amp; Conditions.
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

export default TermsAndConditions;
