import { useState } from "react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    "w-full font-body text-sm bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <p className="label-tag mb-3">Contact Us</p>
              <h1 className="heading-display text-foreground mb-6">
                Let's Start
                <br />a Conversation
              </h1>
              <p className="text-body text-muted-foreground mb-10">
                Whether you're an international distributor, retailer, or seeking OEM/ODM services, our global export team is ready to assist.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "215179755@qq.com" },
                  { icon: Phone, label: "Phone", value: "+254729596868 / +254759898222" },
                  { icon: Globe, label: "Markets", value: "50+ Countries Worldwide" },
                  { icon: MapPin, label: "Address", value: "Wuyi Rd, Machakos, Kenya\nP.O. Box: 1234-00100" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-body text-sm text-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
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
                  className={`${inputClass} mb-6 resize-none`}
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-body text-sm font-semibold py-3 rounded-md hover:opacity-90 transition-opacity"
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
