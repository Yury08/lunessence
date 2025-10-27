'use client';

import { Award, Heart, Sparkles, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Heart,
      title: 'Твоя коллекция',
      description: 'Собери все любимые ароматы в одном месте',
      color: '#ff6b9d',
    },
    {
      icon: Users,
      title: 'Сообщество',
      description: 'Присоединяйся к нашему ТГ-сообществу',
      color: '#d4af37',
    },
    {
      icon: Award,
      title: 'Экспертиза',
      description: 'Получи персональные рекомендации',
      color: '#9b59b6',
    },
    // {
    //   icon: Sparkles,
    //   title: 'Инновации',
    //   description: 'Используй виртуальный тестер новых ароматов',
    //   color: '#3498db',
    // },ы
  ];

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      {/* Декоративные элементы фона */}
      <div className={styles.backgroundElements}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.circle3} />
      </div>

      <div className={styles.container}>
        {/* Заголовок секции */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <Sparkles size={20} />
            <span>О Lunessence</span>
          </div>
          <h2 className={styles.title}>
            Все ароматы в одном <span className={styles.accent}>месте</span>
          </h2>
          <p className={styles.subtitle}>
            Lunessence — ваш проводник в мире изысканных ароматов. Открывайте, коллекционируйте и
            наслаждайтесь премиальной парфюмерией в атмосфере утонченного стиля.
          </p>
        </div>

        {/* Основной контент */}
        <div className={styles.content}>
          {/* Текстовая часть */}
          <div className={`${styles.textContent} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.textBlock}>
              <h3 className={styles.textTitle}>Идея бренда</h3>
              <p className={styles.textDescription}>
                Мы создали платформу, где каждая человек может найти свой уникальный аромат. Будь то
                классический парфюм от известного дома моды или нишевое творение — мы собрали все в
                одном месте.
              </p>
            </div>

            <div className={styles.textBlock}>
              <h3 className={styles.textTitle}>Почему мы?</h3>
              <p className={styles.textDescription}>
                Lunessence — это магазин оригинальной парфюмерии с быстрой доставкой. Мы предлагаем
                огромный выбор: от тестеров и духов на разлив до больших флаконов от ведущих мировых
                брендов
              </p>
            </div>
          </div>

          {/* Блок с фичами */}
          <div className={styles.features}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`${styles.featureCard} ${isVisible ? styles.visible : ''}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={styles.iconWrapper}
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                      borderColor: feature.color,
                    }}
                  >
                    <Icon size={32} className={styles.icon} style={{ color: feature.color }} />
                  </div>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDescription}>{feature.description}</p>
                  {hoveredCard === index && (
                    <div
                      className={styles.glowEffect}
                      style={{
                        background: `radial-gradient(circle, ${feature.color}20, transparent 70%)`,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Статистика */}
        <div className={`${styles.stats} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>10К+</div>
            <div className={styles.statLabel}>Ароматов в коллекции</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>Премиальных брендов</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>Доступность онлайн</div>
          </div>
        </div>
      </div>
    </section>
  );
}
