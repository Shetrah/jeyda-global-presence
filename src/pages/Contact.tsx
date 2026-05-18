import { useState } from "react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    interest: "",
    volume: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = encodeURIComponent(`Export Inquiry from ${form.name} - ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nCountry: ${form.country}\nInterest: ${form.interest}\nVolume: ${form.volume}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:215179755@qq.com?subject=${subject}&body=${body}`;
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest. Our export team will respond within 24 hours.",
    });
    setForm({ name: "", company: "", email: "", phone: "", country: "", interest: "", volume: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full font-body text-sm bg-gradient-to-br from-white/60 to-white/40 border-2 border-primary/20 rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all backdrop-blur-sm";

  return (
    <main className="min-h-screen">
      <SEO
        title="Contact Us — Export Inquiries & OEM Partnerships"
        description="Get in touch with Jeyda Daily Supplies Co. Ltd. for bulk export inquiries, OEM/ODM private label services, and distribution partnerships. Serving 50+ countries worldwide."
        path="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Jeyda Daily Supplies",
          "url": "https://www.jeydasupplies.com/contact",
          "description": "Reach out to Jeyda for export inquiries, OEM services, and distribution partnerships.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Jeyda Daily Supplies Co. Ltd.",
            "email": "215179755@qq.com",
            "telephone": "+254729596868",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Wuyi Rd",
              "addressLocality": "Machakos",
              "addressCountry": "KE"
            }
          }
        }}
      />
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
                <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                <p className="label-tag text-foreground">Contact Us</p>
              </div>
              <h1 className="heading-display text-foreground mb-6">
                Let's Start
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  a Conversation
                </span>
              </h1>
              <p className="text-body text-muted-foreground mb-10 lg:mb-12">
                Whether you're an international distributor, retailer, or seeking OEM/ODM services, our global export team is ready to assist.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "215179755@qq.com" },
                  { icon: Phone, label: "Phone", value: "+254729596868 / +254759898222" },
                  { icon: Globe, label: "Markets", value: "50+ Countries Worldwide" },
                  { icon: MapPin, label: "Address", value: "Wuyi Rd, Machakos, Kenya\nP.O. Box: 1234-00100" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="font-body text-base text-foreground font-semibold whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="premium-card p-5 sm:p-8 md:p-10 rounded-xl">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold leading-tight text-foreground mb-6 sm:mb-8">
                  Export Inquiry Form
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" required className={inputClass} />
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name *" required className={inputClass} />
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required className={inputClass} />
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
                  <input name="country" value={form.country} onChange={handleChange} placeholder="Country / Region *" required className={inputClass} />
                  <select name="interest" value={form.interest} onChange={handleChange} className={inputClass} aria-label="Area of Interest">
                    <option value="">Area of Interest</option>
                    <option value="distribution">Distribution Partnership</option>
                    <option value="oem">OEM / Private Label</option>
                    <option value="bulk">Bulk Purchase</option>
                    <option value="retail">Retail Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <select name="volume" value={form.volume} onChange={handleChange} className={`${inputClass} mb-4`} aria-label="Estimated Monthly Volume">
                  <option value="">Estimated Monthly Volume</option>
                  <option value="1k-5k">1,000 – 5,000 units</option>
                  <option value="5k-20k">5,000 – 20,000 units</option>
                  <option value="20k-100k">20,000 – 100,000 units</option>
                  <option value="100k+">100,000+ units</option>
                </select>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className={`${inputClass} mb-8 resize-none`}
                />
                <button
                  type="submit"
                  className="w-full min-h-12 bg-gradient-to-r from-primary to-secondary text-white font-body text-base font-bold py-3.5 rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-[1.01] active:scale-95"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
