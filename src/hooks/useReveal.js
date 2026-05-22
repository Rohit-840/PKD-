import { useEffect, useRef, useState } from 'react';
export const useReveal = ({ threshold = 0.15, once = true } = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold, once]);

  return [ref, visible];
};
