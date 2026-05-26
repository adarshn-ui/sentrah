import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 30, // Optimized default delay (ms) for ultra-smooth cascade
  duration = 1.0, // Optimized default duration
  ease = 'power4.out', // Snappier, premium ease
  splitType = 'chars', // 'chars' | 'words'
  from = { opacity: 0, y: 30 },
  to = { opacity: 1, y: 0 },
  threshold = 0.15, // Higher threshold for more reliable trigger
  rootMargin = '-50px',
  textAlign = 'center',
  tag = 'h2', // Optimized default tag for headings
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);

  // Keep callback ref updated
  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useGSAP(
    () => {
      if (!ref.current || !text) return;
      if (animationCompletedRef.current) return;
      
      const el = ref.current;
      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      // Select target elements for animation
      const targets = el.querySelectorAll(
        splitType === 'chars' ? '.split-char' : '.split-word'
      );

      if (targets.length === 0) return;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
            anticipatePin: 0.2
          },
          onComplete: () => {
            animationCompletedRef.current = true;
            onCompleteRef.current?.();
          },
          willChange: 'transform, opacity',
          force3D: true
        }
      );

      return () => {
        // Cleanup ScrollTrigger instances bound to this element on unmount
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill();
        });
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin
      ],
      scope: ref
    }
  );

  const renderContent = () => {
    if (!text) return null;

    const lines = text.split('\n');
    let highlightActive = false;

    return lines.map((line, lineIdx) => {
      const words = line.split(' ');
      const lineContent = words.map((word, wordIdx) => {
        let cleanWord = word;
        let startHighlight = false;
        let endHighlight = false;

        if (cleanWord.startsWith('**')) {
          startHighlight = true;
          cleanWord = cleanWord.substring(2);
          highlightActive = true;
        }

        if (cleanWord.endsWith('**')) {
          endHighlight = true;
          cleanWord = cleanWord.substring(0, cleanWord.length - 2);
        }

        const isHighlighted = highlightActive;

        if (endHighlight) {
          highlightActive = false;
        }

        const wordClass = `split-word ${isHighlighted ? 'text-indigo-700 font-extrabold' : ''}`;

        const wordElement = splitType === 'words'
          ? (
              <span
                key={wordIdx}
                className={wordClass}
                style={{ display: 'inline-block', willChange: 'transform, opacity' }}
              >
                {cleanWord}
                {wordIdx < words.length - 1 ? '\u00A0' : ''}
              </span>
            )
          : (
              <span
                key={wordIdx}
                className={wordClass}
                style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
              >
                {cleanWord.split('').map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className="split-char"
                    style={{ display: 'inline-block', willChange: 'transform, opacity' }}
                  >
                    {char}
                  </span>
                ))}
                {wordIdx < words.length - 1 ? '\u00A0' : ''}
              </span>
            );

        return wordElement;
      });

      return (
        <React.Fragment key={lineIdx}>
          {lineContent}
          {lineIdx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  const style = {
    textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
  };
  
  const classes = `split-parent ${className}`;
  const Tag = tag;

  return (
    <Tag ref={ref} style={style} className={classes}>
      {renderContent()}
    </Tag>
  );
};

export default SplitText;
