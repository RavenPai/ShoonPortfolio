import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import './BounceCards.css';

interface BounceCardsProps {
  className?: string;
  items: { image: string; text?: string }[];
  containerWidth?: number;   // max width (default 500)
  containerHeight?: number;  // base height (default 400)
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
  onItemClick?: (index: number) => void;
}

export default function BounceCards({
  className = '',
  items = [],
  containerWidth = 500,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [],
  onItemClick,
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const transformsRef = useRef<string[]>([]);

  const [isMobile, setIsMobile] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [focusedIdx, setFocusedIdx] = useState<number | null>(null);

  // ==================== RESPONSIVE HELPERS ====================
  const generateDefaultTransforms = useCallback((numItems: number, mobile: boolean, baseWidth: number): string[] => {
    const maxAngle = mobile ? 10 : 15;
    const maxTranslateBase = mobile ? 110 : 220;
    // Adjust spread based on container width
    const adjustedMaxTranslate = maxTranslateBase * Math.min(1, baseWidth / 500);

    const angleStep = (maxAngle * 2) / Math.max(1, numItems - 1);
    const translateStep = (adjustedMaxTranslate * 2) / Math.max(1, numItems - 1);

    return Array.from({ length: numItems }, (_, i) => {
      const angle = -maxAngle + i * angleStep;
      const tx = -adjustedMaxTranslate + i * translateStep;
      return `rotate(${angle}deg) translate(${tx}px)`;
    });
  }, []);

  const scaleTransformString = (transform: string, factor: number): string => {
    if (factor === 1) return transform;
    return transform.replace(/translate\(([-+]?[\d.]+)px\)/g, (_, px) => {
      return `translate(${parseFloat(px) * factor}px)`;
    });
  };

  const effectiveTransforms = useMemo(() => {
    let base = transformStyles.length === items.length
      ? transformStyles
      : generateDefaultTransforms(items.length, isMobile, containerWidth);

    return base.map(t => scaleTransformString(t, scaleFactor));
  }, [transformStyles, items.length, isMobile, scaleFactor, containerWidth, generateDefaultTransforms]);

  useEffect(() => {
    transformsRef.current = effectiveTransforms;
  }, [effectiveTransforms]);

  // ==================== RESPONSIVE SETUP ====================
  useEffect(() => {
    const updateLayout = () => {
      const mobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768;
      setIsMobile(mobile);

      if (containerRef.current) {
        const currentWidth = containerRef.current.clientWidth || window.innerWidth;
        // Scale factor ensures cards shrink to fit small screens
        const factor = Math.max(0.5, Math.min(1, currentWidth / 500));
        setScaleFactor(factor);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // ==================== GSAP ANIMATIONS ====================
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.card',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  const pushSiblings = (activeIdx: number) => {
    if (!containerRef.current) return;
    const q = gsap.utils.selector(containerRef.current);
    const baseOffset = (isMobile ? 60 : 130) * scaleFactor;

    items.forEach((_, i) => {
      const target = q(`.card-${i}`);
      const baseTransform = transformsRef.current[i] ?? 'none';

      if (i === activeIdx) {
        const noRot = baseTransform.replace(/rotate\([^)]+\)/, 'rotate(0deg)');
        gsap.to(target, {
          transform: `${noRot} scale(1.15)`,
          zIndex: 50,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else {
        const offsetX = i < activeIdx ? -baseOffset : baseOffset;
        const regex = /translate\(([-+]?[\d.]+)px\)/;
        const match = baseTransform.match(regex);
        const currentTx = match ? parseFloat(match[1]) : 0;
        const newTransform = baseTransform.replace(regex, `translate(${currentTx + offsetX}px)`);

        gsap.to(target, {
          transform: newTransform,
          zIndex: 1,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!containerRef.current) return;
    const q = gsap.utils.selector(containerRef.current);
    items.forEach((_, i) => {
      gsap.to(q(`.card-${i}`), {
        transform: transformsRef.current[i],
        zIndex: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.inOut',
        overwrite: 'auto',
      });
    });
  };

  // ==================== HANDLERS ====================
  const handleCardClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMobile) {
      if (focusedIdx === idx) {
        onItemClick?.(idx);
      } else {
        setFocusedIdx(idx);
        pushSiblings(idx);
      }
    } else {
      resetSiblings();
      onItemClick?.(idx);
    }
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setFocusedIdx(null);
      resetSiblings();
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: containerWidth,
        height: containerHeight * scaleFactor,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto'
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`card card-${idx} ${focusedIdx === idx ? 'focused' : ''}`}
          style={{
            position: 'absolute',
            transform: effectiveTransforms[idx],
            width: `${180 * scaleFactor}px`,
            height: `${260 * scaleFactor}px`,
          }}
          onMouseEnter={() => !isMobile && pushSiblings(idx)}
          onMouseLeave={() => !isMobile && resetSiblings()}
          onClick={(e) => handleCardClick(idx, e)}
        >
          <img className="image" src={item.image} alt={item.text || 'card'} />

          {isMobile && focusedIdx === idx && (
            <div className="mobile-overlay">
              <button className="view-more-btn">View More</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}