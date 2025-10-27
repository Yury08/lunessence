'use client';

import { ArrowRight, Radio, Send, ShoppingBag, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Join.module.css';

export default function Join() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Генерируем фиксированные значения для частиц
  const particles = useMemo(() => {
    const randomValues = [
      { left: 8, delay: 0.2, duration: 12 },
      { left: 32, delay: 0.8, duration: 15 },
      { left: 56, delay: 1.5, duration: 18 },
      { left: 12, delay: 2.1, duration: 14 },
      { left: 78, delay: 0.5, duration: 16 },
      { left: 45, delay: 1.8, duration: 13 },
      { left: 89, delay: 0.9, duration: 19 },
      { left: 23, delay: 1.2, duration: 17 },
      { left: 67, delay: 2.4, duration: 15 },
      { left: 35, delay: 0.7, duration: 20 },
      { left: 91, delay: 1.6, duration: 14 },
      { left: 15, delay: 2.3, duration: 18 },
      { left: 58, delay: 0.4, duration: 16 },
      { left: 82, delay: 1.1, duration: 19 },
      { left: 28, delay: 1.9, duration: 13 },
      { left: 71, delay: 0.6, duration: 17 },
      { left: 42, delay: 2.2, duration: 15 },
      { left: 95, delay: 0.3, duration: 21 },
      { left: 19, delay: 1.4, duration: 14 },
      { left: 64, delay: 1.7, duration: 18 },
      { left: 37, delay: 0.5, duration: 16 },
      { left: 86, delay: 2.0, duration: 13 },
      { left: 51, delay: 0.8, duration: 19 },
      { left: 73, delay: 1.3, duration: 17 },
      { left: 26, delay: 1.8, duration: 15 },
      { left: 93, delay: 0.2, duration: 20 },
      { left: 14, delay: 2.5, duration: 14 },
      { left: 61, delay: 0.9, duration: 16 },
      { left: 48, delay: 1.6, duration: 18 },
      { left: 77, delay: 0.7, duration: 12 },
    ];
    return randomValues;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTelegramChannel = () => {
    window.open('https://t.me/lunessence_parfumes', '_blank');
  };

  const handleTelegramStore = () => {
    window.open('https://t.me/lunessence_parfums_bot/lunessence_parfums', '_blank');
  };

  return (
    <section id="join" ref={sectionRef} className={styles.join}>
      {/* Фоновые эффекты */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
        <div className={styles.particleField}>
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
      </div>

      <div className={styles.container}>
        {/* Декоративный элемент сверху */}
        <div className={`${styles.topDecoration} ${isVisible ? styles.visible : ''}`}>
          <Sparkles className={styles.sparkle1} />
          <Sparkles className={styles.sparkle2} />
          <Sparkles className={styles.sparkle3} />
        </div>

        {/* Контент */}
        <div className={styles.content}>
          <div className={`${styles.badge} ${isVisible ? styles.visible : ''}`}>
            <Send size={20} />
            <span>Присоединяйся</span>
          </div>

          <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>
            Стань частью сообщества <span className={styles.accent}>Lunessence</span>
          </h2>

          <p className={`${styles.subtitle} ${isVisible ? styles.visible : ''}`}>
            Выбери удобный способ для начала работы с нами. Получи доступ к премиальным ароматам
            прямо сейчас!
          </p>

          {/* Кнопки действий */}
          <div className={`${styles.buttonsContainer} ${isVisible ? styles.visible : ''}`}>
            {/* Telegram Channel */}
            <button
              className={`${styles.actionButton} ${styles.telegramBot} ${
                hoveredButton === 'bot' ? styles.hovered : ''
              }`}
              onMouseEnter={() => setHoveredButton('bot')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={handleTelegramChannel}
            >
              <div className={styles.buttonIcon}>
                <Radio size={48} />
                <div className={styles.iconGlow} />
              </div>
              <div className={styles.buttonContent}>
                <h3 className={styles.buttonTitle}>Telegram Канал</h3>
                <p className={styles.buttonDescription}>
                  Будь в курсе новинок и эксклюзивных предложений
                </p>
                <div className={styles.buttonArrow}>
                  <span>Подписаться на канал</span>
                  <ArrowRight size={20} />
                </div>
              </div>
              <div className={styles.buttonGlow} />
            </button>

            {/* Telegram Store */}
            <button
              className={`${styles.actionButton} ${styles.telegramStore} ${
                hoveredButton === 'store' ? styles.hovered : ''
              }`}
              onMouseEnter={() => setHoveredButton('store')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={handleTelegramStore}
            >
              <div className={styles.buttonIcon}>
                <ShoppingBag size={48} />
                <div className={styles.iconGlow} />
              </div>
              <div className={styles.buttonContent}>
                <h3 className={styles.buttonTitle}>Telegram Магазин</h3>
                <p className={styles.buttonDescription}>Покупай ароматы напрямую в Telegram</p>
                <div className={styles.buttonArrow}>
                  <span>Перейти в магазин</span>
                  <ArrowRight size={20} />
                </div>
              </div>
              <div className={styles.buttonGlow} />
            </button>
          </div>

          {/* Дополнительная информация */}
          <div className={`${styles.extraInfo} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>⚡</div>
              <span>Мгновенный доступ</span>
            </div>
            <div className={styles.infoDivider} />
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🔒</div>
              <span>Безопасные платежи</span>
            </div>
            <div className={styles.infoDivider} />
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🚚</div>
              <span>Быстрая доставка</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
