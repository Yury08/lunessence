'use client';

import { Atom, Check, Heart, Package, Percent, Search, Sparkles, Truck, Waves } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styles from './Benefits.module.css';

export default function Benefits() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Percent,
      title: 'Доступные цены',
      description: 'Элитные ароматы по демократичным ценам',
      color: '#d4af37',
      position: 'top-left',
    },
    {
      icon: Truck,
      title: 'Быстрая доставка',
      description: 'Доставляем в любой город за 5-6 дней',
      color: '#3498db',
      position: 'top-right',
    },
    {
      icon: Search,
      title: 'Большой выбор',
      description: 'Более 10 000 ароматов и 100+ брендов',
      color: '#9b59b6',
      position: 'bottom-left',
    },
    {
      icon: Check,
      title: 'Гарантия подлинности',
      description: '100% оригинальная продукция',
      color: '#2ecc71',
      position: 'bottom-right',
    },
    {
      icon: Heart,
      title: 'Экспертный подбор',
      description: 'Персональные рекомендации',
      color: '#ff6b9d',
      position: 'center',
    },
  ];

  return (
    <section id="why-us" ref={sectionRef} className={styles.benefits}>
      {/* Фоновые эффекты */}
      <div className={styles.backgroundEffects}>
        <div className={styles.waveContainer}>
          <Waves className={styles.wave1} />
          <Waves className={styles.wave2} />
          <Waves className={styles.wave3} />
        </div>
        <div className={styles.molecules}>
          <Atom className={styles.molecule1} />
          <Atom className={styles.molecule2} />
          <Atom className={styles.molecule3} />
        </div>
        <div className={styles.sparkles}>
          <Sparkles className={styles.sparkle1} />
          <Sparkles className={styles.sparkle2} />
          <Sparkles className={styles.sparkle3} />
        </div>
      </div>

      <div className={styles.container}>
        {/* Заголовок секции */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <Package size={20} />
            <span>Преимущества</span>
          </div>
          <h2 className={styles.title}>
            Почему выбирают <span className={styles.accent}>Lunessence</span>
          </h2>
          <p className={styles.subtitle}>
            Мы создали сервис, который делает премиальные ароматы доступными каждому
          </p>
        </div>

        {/* Креативная сетка преимуществ */}
        <div className={styles.benefitsLayout}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`${styles.benefitItem} ${styles[benefit.position]} ${
                  isVisible ? styles.visible : ''
                } ${isActive ? styles.active : ''}`}
                style={
                  {
                    animationDelay: `${index * 0.15}s`,
                    '--benefit-color': benefit.color,
                  } as React.CSSProperties
                }
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Иконка с кольцами */}
                <div className={styles.iconRing}>
                  <div className={styles.ring1} />
                  <div className={styles.ring2} />
                  <div className={styles.iconContainer}>
                    <Icon size={40} className={styles.icon} />
                  </div>
                </div>

                {/* Контент */}
                <div className={styles.content}>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>

                {/* Декоративные линии */}
                <div className={styles.decorativeLines}>
                  <div className={styles.line1} />
                  <div className={styles.line2} />
                  <div className={styles.line3} />
                </div>

                {/* Светящийся эффект */}
                <div className={styles.glowBall} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
