'use client';

import { MessageCircle, Send } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        {/* Основной контент */}
        <div className={styles.content}>
          {/* Бренд */}
          <div className={styles.brand}>
            <h3 className={styles.brandTitle}>Lunessence</h3>
            <p className={styles.brandSubtitle}>Parfumes</p>
            <p className={styles.brandDescription}>
              Твоя коллекция премиальных ароматов в одном приложении
            </p>
          </div>

          {/* Навигация */}
          <div className={styles.navSection}>
            <h4 className={styles.sectionTitle}>Навигация</h4>
            <nav className={styles.nav}>
              <a href="#hero" className={styles.navLink}>
                Главная
              </a>
              <a href="#about" className={styles.navLink}>
                О нас
              </a>
              <a href="#why-us" className={styles.navLink}>
                Преимущества
              </a>
              <a href="#join" className={styles.navLink}>
                Присоединиться
              </a>
            </nav>
          </div>

          {/* Контакты */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Контакты</h4>
            <div className={styles.contacts}>
              <a href="https://t.me/Yury_Kravtsov" className={styles.contactLink}>
                <Send size={18} />
                <span>@Yury_Kravtsov</span>
              </a>
            </div>
          </div>

          {/* Социальные сети */}
          <div className={styles.socialSection}>
            <h4 className={styles.sectionTitle}>Социальные сети</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://t.me/lunessence_parfumes"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className={styles.divider} />

        {/* Копирайт */}
        <div className={styles.copyright}>
          <p>© {currentYear} Lunessence. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
