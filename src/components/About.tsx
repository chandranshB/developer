import { Parallax3DCard } from "./Parallax3DCard";
import { ImageWithFallback } from "./imageFallback/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-32 px-5 md:px-8 bg-white dark:bg-background">
      <div className="max-w-[980px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">About</p>
              <h2 className="text-[40px] md:text-[48px] leading-[1.08] tracking-tight mb-6">
                hi, I'm shanDran
              </h2>
              <div className="space-y-5 text-[19px] text-foreground/80 leading-[1.5] tracking-tight">
                <p>
                  I'm a developer and designer who believes that great products come from understanding both the technical possibilities and human needs.
                </p>
                <p>
                  For the past 5 years, I've been building web applications that blend thoughtful design with clean, efficient code. My work spans from early-stage startups to established companies.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design systems, contributing to open source, or learning about the latest web technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Parallax3DCard />
          </div>

        </div>
      </div>
    </section>
  );
}