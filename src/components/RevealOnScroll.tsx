
import { useEffect, useRef } from 'react';

type RevealOnScrollProps = {
  children: React.ReactNode;
  threshold?: number;
};

const RevealOnScroll = ({ children, threshold = 0.1 }: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold, // Trigger when 10% of the element is visible
      }
    );

    const current = ref.current;

    if (current) {
      scrollObserver.observe(current);
    }

    return () => {
      if (current) {
        scrollObserver.unobserve(current);
      }
    };
  }, [threshold]);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

export default RevealOnScroll;
