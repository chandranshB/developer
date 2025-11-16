import { useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Parallax3DCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let mouseX = 0;
    let mouseY = 0;
    let cardX = 0;
    let cardY = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      mouseX = e.clientX - rect.left - rect.width / 1.5;
      mouseY = e.clientY - rect.top - rect.height / 1.5;
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    const animate = () => {
      if (isHovering) {
        cardX += (mouseX * 0.02 - cardX) * 0.1;
        cardY += (mouseY * 0.02 - cardY) * 0.1;
      } else {
        cardX += (0 - cardX) * 0.1;
        cardY += (0 - cardY) * 0.1;
      }

      card.style.transform = `perspective(1000px) rotateY(${cardX}deg) rotateX(${-cardY}deg)`;
      
      const foreground = card.querySelector('.parallax-foreground') as HTMLElement;
      const background = card.querySelector('.parallax-background') as HTMLElement;
      const glare = card.querySelector('.parallax-glare') as HTMLElement;
      
      if (foreground) {
        foreground.style.transform = `translateZ(80px) translate(${mouseX * 0.05}px, ${mouseY * 0.05}px)`;
      }
      if (background) {
        background.style.transform = `translateZ(-20px) translate(${mouseX * 0.02}px, ${mouseY * 0.02}px)`;
      }
      if (glare && isHovering) {
        const glareX = 50 + (mouseX / 10);
        const glareY = 50 + (mouseY / 10);
        glare.style.backgroundPosition = `${glareX}% ${glareY}%`;
      }

      requestAnimationFrame(animate);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    animate();

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="relative rounded-[28px] overflow-hidden aspect-[4/5] shadow-xl"
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Background Layer */}
      <div 
        className="parallax-background absolute"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
          top: '-2%',
          left: '-2%',
          width: '104%',
          height: '104%',
        }}
      >
        <ImageWithFallback
          src="images/background.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foreground Layer */}
      <div 
        className="parallax-foreground absolute"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
          top: '-5%',
          left: '-5%',
          width: '110%',
          height: '110%',
          filter: 'drop-shadow(8px 12px 20px rgba(0, 0, 0, 0.4))',
        }}
      >
        <ImageWithFallback
          src="images/foreground.png"
          alt="Foreground"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Holographic/Glass reflection effect */}
      <div 
        className="parallax-glare absolute inset-0 pointer-events-none"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(120px)',
          background: `
            linear-gradient(115deg, 
              transparent 0%, 
              rgba(255, 255, 255, 0) 20%,
              rgba(255, 255, 255, 0.3) 40%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(255, 255, 255, 0.3) 60%,
              rgba(255, 255, 255, 0) 80%,
              transparent 100%
            )
          `,
          backgroundSize: '200% 200%',
          backgroundPosition: '50% 50%',
          opacity: 0.6,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}