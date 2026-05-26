import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 1.5, // Optimized default duration for sleek, quick B2B feedback
  className = '',
  startWhen = true,
  separator = '',
  prefix = '',
  suffix = '',
  onStart,
  onEnd
}) {
  const ref = useRef(null);

  const getDecimalPlaces = num => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  useEffect(() => {
    if (!ref.current || !startWhen) return;
    const el = ref.current;
    const startVal = direction === 'down' ? to : from;
    const endVal = direction === 'down' ? from : to;

    const obj = { val: startVal };

    const formatValue = val => {
      const hasDecimals = maxDecimals > 0;
      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };
      const formatted = Intl.NumberFormat('en-US', options).format(val);
      const replaced = separator ? formatted.replace(/,/g, separator) : formatted;
      return `${prefix}${replaced}${suffix}`;
    };

    el.textContent = formatValue(startVal);

    let anim;

    // Utilize IntersectionObserver to ensure the count-up only starts when the number is actually revealed
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anim = gsap.to(obj, {
            val: endVal,
            duration,
            delay,
            ease: 'power2.out',
            onStart: () => {
              if (typeof onStart === 'function') onStart();
            },
            onUpdate: () => {
              el.textContent = formatValue(obj.val);
            },
            onComplete: () => {
              el.textContent = formatValue(endVal);
              if (typeof onEnd === 'function') onEnd();
            }
          });
          observer.unobserve(el);
        }
      },
      {
        rootMargin: '0px 0px -50px 0px', // Triggers when the number enters at least 50px into the viewport
        threshold: 0.05
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (anim) anim.kill();
    };
  }, [to, from, direction, delay, duration, startWhen, separator, prefix, suffix, maxDecimals]);

  return <span className={className} ref={ref} />;
}
