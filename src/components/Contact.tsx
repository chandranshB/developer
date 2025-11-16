import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-5 md:px-8">
      <div className="max-w-[980px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">Contact</p>
              <h2 className="text-[40px] md:text-[48px] leading-[1.08] tracking-tight mb-4">
                Let's work together
              </h2>
              <p className="text-[19px] text-muted-foreground leading-[1.5]">
                Have a project in mind? I'd love to hear about it. Send me a message and let's create something great.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[13px] text-muted-foreground mb-0.5">Email</p>
                  <p className="text-[17px]">chandranshbinjola@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[13px] text-muted-foreground mb-0.5">Location</p>
                  <p className="text-[17px]">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-8 md:p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[13px]">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-12 rounded-xl border-black/10 focus:border-primary/50 focus:ring-primary/20 text-[17px]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[13px]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-12 rounded-xl border-black/10 focus:border-primary/50 focus:ring-primary/20 text-[17px]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[13px]">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="rounded-xl border-black/10 focus:border-primary/50 focus:ring-primary/20 text-[17px] resize-none"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full h-12 rounded-full text-[17px] bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
