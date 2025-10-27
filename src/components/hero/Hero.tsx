'use client';

import { ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Генерируем фиксированные значения для частиц
  const particles = useMemo(() => {
    const randomValues = [
      { left: 12, delay: 0.5, duration: 15 },
      { left: 45, delay: 1.2, duration: 18 },
      { left: 78, delay: 0.8, duration: 22 },
      { left: 23, delay: 1.8, duration: 14 },
      { left: 67, delay: 0.3, duration: 20 },
      { left: 34, delay: 1.5, duration: 16 },
      { left: 89, delay: 0.7, duration: 19 },
      { left: 15, delay: 1.1, duration: 17 },
      { left: 56, delay: 1.9, duration: 13 },
      { left: 92, delay: 0.4, duration: 21 },
      { left: 28, delay: 1.3, duration: 15 },
      { left: 71, delay: 0.9, duration: 18 },
      { left: 41, delay: 1.6, duration: 20 },
      { left: 84, delay: 0.6, duration: 14 },
      { left: 19, delay: 1.4, duration: 22 },
      { left: 63, delay: 1.0, duration: 16 },
      { left: 37, delay: 1.7, duration: 19 },
      { left: 76, delay: 0.2, duration: 17 },
      { left: 52, delay: 1.8, duration: 21 },
      { left: 95, delay: 0.8, duration: 13 },
    ];
    return randomValues;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const progress = Math.min((scrollY / windowHeight) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleTelegramLink = () => {
    window.open('https://t.me/lunessence_parfums_bot', '_blank');
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Анимированный фон с эффектом стекла */}
      <div className={styles.glassEffect}>
        <div
          className={styles.mouseLight}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Плавающие частицы */}
      <div className={styles.particles}>
        {particles.map((particle, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Градиентный оверлей */}
      <div className={styles.gradientOverlay} />

      {/* Основной контент */}
      <div className={styles.content}>
        {/* Верхние элементы с золотым текстом */}
        <div className={styles.topElements}>
          <div className={styles.badge}>
            <Sparkles size={16} />
            <span>Premium Collection</span>
          </div>
        </div>

        {/* Центральная часть с анимацией */}
        <div className={styles.mainContent}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.mainTitle}>
              <span className={styles.titleLine}>Эмоция</span>
              <span className={styles.titleLine}>В Каждом</span>
              <span className={styles.titleAccent}>Аромате</span>
            </h1>
          </div>

          <p className={styles.subtitle}>
            Откройте мир премиальных ароматов. Твоя коллекция в одном приложении.
          </p>

          {/* CTA кнопки */}
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton} onClick={handleTelegramLink}>
              <span>Открыть коллекцию</span>
              <div className={styles.buttonGlow} />
            </button>
            <button className={styles.secondaryButton} onClick={handleScrollDown}>
              Узнать больше
            </button>
          </div>

          {/* Статистика */}
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10К+</div>
              <div className={styles.statLabel}>Ароматов</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statIcon}>🚚</div>
              <div className={styles.statLabel}>Быстрая доставка по всей России</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Брендов</div>
            </div>
          </div>
        </div>

        {/* Нижний элемент с кнопкой скролла */}
        <div className={styles.bottomElement}>
          <button className={styles.scrollButton} onClick={handleScrollDown}>
            <ChevronDown size={24} />
            <span>Листайте вниз</span>
          </button>
        </div>
      </div>

      {/* Прогресс скролла */}
      <div className={styles.scrollProgress}>
        <div className={styles.scrollProgressBar} style={{ width: `${scrollProgress}%` }} />
      </div>
    </section>
  );
}
