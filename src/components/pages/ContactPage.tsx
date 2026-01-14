import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // In production, integrate with EmailJS, Formspree, or your backend API
    console.log('Form submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

 const { scrollYProgress } = useScroll();

const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto px-6 md:px-8 lg:px-0">
        <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-wide">
              Get in Touch
            </h1>
            <p className="font-paragraph font-[500] text-base text-secondary/80">
              Let's discuss how we can help transform your business with innovative IT solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8 tracking-wide">
                Contact Information
              </h2>
              <p className="font-paragraph font-[500] text-base text-secondary/80 mb-12">
                Reach out to us through any of the following channels, or fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground mb-2 tracking-wide">
                      Email
                    </h3>
                    <a
                      href="mailto:info@bitsinetwork.com"
                      className="font-paragraph text-sm text-secondary hover:text-primary transition-colors"
                    >
                      info@bitsinetwork.com
                    </a>
                    <br />
                    {/* <a
                      href="mailto:sales@techvision.com"
                      className="font-paragraph text-sm text-secondary hover:text-primary transition-colors"
                    >
                      sales@techvision.com
                    </a> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground mb-2 tracking-wide">
                      Phone
                    </h3>
                    <a
                      href="tel:+977 9869539234"
                      className="font-paragraph text-sm text-secondary hover:text-primary transition-colors"
                    >
                      +977 9869539234
                    </a>
                    <br />
                    <span className="font-paragraph text-xs text-secondary">
                      Sunday - Friday, 10:00 AM - 6:00 PM NPT
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground mb-2 tracking-wide">
                      Office
                    </h3>
                    <p className="font-paragraph text-sm text-secondary">
                      Bafal, Kathmandu<br />
                      Nepal
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-light-gray/30 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 tracking-wide">
                  Business Hours
                </h3>
                <div className="space-y-2 font-paragraph text-sm text-secondary">
                  <div className="flex justify-between">
                    <span>Sunday - Friday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-background border border-light-gray p-8 rounded-lg shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6 tracking-wide">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                      Message Sent!
                    </h3>
                    <p className="font-paragraph text-base text-secondary">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-paragraph text-xs font-medium text-foreground mb-2 uppercase tracking-wide"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-light-gray rounded-lg font-paragraph text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder=""
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-paragraph text-xs font-medium text-foreground mb-2 uppercase tracking-wide"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-light-gray rounded-lg font-paragraph text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="example@bitsinetwork.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block font-paragraph text-xs font-medium text-foreground mb-2 uppercase tracking-wide"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-light-gray rounded-lg font-paragraph text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-paragraph text-xs font-medium text-foreground mb-2 uppercase tracking-wide"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-light-gray rounded-lg font-paragraph text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-paragraph text-sm font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </button>

                    <p className="font-paragraph text-xs text-secondary text-center">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-24 px-8 bg-light-gray/30">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary/10 rounded-lg overflow-hidden h-96 flex items-center justify-center shadow-sm">
              <div className="text-center p-8">
                <MapPin size={48} className="text-secondary/40 mx-auto mb-4" />
                <p className="font-paragraph text-base text-secondary">
                  Map placeholder - Integrate with Google Maps or similar service
                </p>
                <p className="font-paragraph text-sm text-secondary/60 mt-2">
                  123 Tech Street, Suite 100, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
      </div>
    </div>
  );
}