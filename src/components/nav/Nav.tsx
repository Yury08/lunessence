'use client';

import { Menu, ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Главная', href: '#hero' },
  { label: 'О нас', href: '#about' },
  { label: 'Преимущества', href: '#why-us' },
  { label: 'Присоединиться', href: '#join' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Определяем активную секцию
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    setIsMobileMenuOpen(false);
  };

  const handleTelegramLink = () => {
    window.open('https://t.me/lunessence_parfumes', '_blank');
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${
          isMobileMenuOpen ? styles.menuOpen : ''
        }`}
      >
        <div className={styles.container}>
          {/* Логотип */}
          <a
            href="#hero"
            onClick={e => handleNavClick(e, '#hero')}
            className={styles.logo}
            aria-label="Lunessence Parfumes"
          >
            <span className={styles.logoText}>Lunessence</span>
            <span className={styles.logoSublog}>Parfumes</span>
          </a>

          {/* Навигационные ссылки - Desktop */}
          <ul className={styles.navLinks}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  className={activeSection === link.href ? styles.active : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Иконки действий */}
          <div className={styles.actions}>
            <button
              className={styles.iconButton}
              onClick={handleTelegramLink}
              aria-label="Присоединиться"
            >
              <ShoppingBag size={20} />
              <span className={styles.buttonLabel}>Присоединиться</span>
            </button>

            {/* Гамбургер-меню */}
            <button
              className={styles.mobileToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Меню"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={activeSection === link.href ? styles.active : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay для мобильного меню */}
      {isMobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
