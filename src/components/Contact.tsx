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
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:chandranshbinjola@outlook.com?subject=${subject}&body=${body}`;
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-5 md:px-8 dark:bg-background relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent" />
      
      <div className="max-w-[980px] mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">Contact</p>
          <h2 className="text-[40px] md:text-[48px] leading-[1.08] tracking-tight mb-4">
            Let's work together
          </h2>
          <p className="text-[21px] text-muted-foreground max-w-[700px] mx-auto leading-[1.4]">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="glass-strong rounded-[32px] p-8 md:p-12 shadow-2xl border border-black/5 dark:border-white/10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[15px]">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 px-4 rounded-[16px] bg-muted/50 dark:bg-background/50 border-black/10 dark:border-white/10 focus:border-primary transition-all text-[17px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[15px]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 px-4 rounded-[16px] bg-muted/50 dark:bg-background/50 border-black/10 dark:border-white/10 focus:border-primary transition-all text-[17px]"
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-8">
              <Label htmlFor="message" className="text-[15px]">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="px-4 py-3 rounded-[16px] bg-muted/50 dark:bg-background/50 border-black/10 dark:border-white/10 focus:border-primary transition-all resize-none text-[17px] leading-[1.6]"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full h-12 rounded-full text-[17px] bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Send message
              <Mail className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}