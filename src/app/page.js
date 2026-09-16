"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=2000&q=90",
    title: "Everything your dog needs.",
    description:
      "From nutritious food to playful toys, find everything your best friend loves.",
    button: "Shop for Dogs",
    link: "/shop?category=dogs",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=2000&q=90",
    title: "Make every day special for your cat.",
    description:
      "Comfort, care and fun for your favourite little companion.",
    button: "Shop for Cats",
    link: "/shop?category=cats",
  },
  {
    image:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=2000&q=90",
    title: "Tiny pets. Big personalities.",
    description:
      "Everything your small pet needs for a happy and healthy life.",
    button: "Shop Small Pets",
    link: "/shop?category=small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=2000&q=90",
    title: "Bring a little underwater magic home.",
    description:
      "Beautiful essentials for your colourful aquatic friends.",
    button: "Shop Fish",
    link: "/shop?category=fish",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      {/* =========================
          HEADER
      ========================== */}
      <header className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="logo">
            <span className="logo-paw">🐾</span>
            <span>
              paw<span>Google</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Right side */}
          <div className="nav-actions">
            <button className="search-button" aria-label="Search">
              ⌕
            </button>

            <Link href="/cart" className="cart-button">
              🛒 Cart
            </Link>
          </div>
        </div>
      </header>

      {/* =========================
          HERO IMAGE SLIDESHOW
      ========================== */}
      <section className="pet-slideshow">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={
              index === currentSlide
                ? "pet-slide active"
                : "pet-slide"
            }
          >
            {/* Background image */}
            <img
              className="pet-slide-image"
              src={slide.image}
              alt={slide.title}
            />

            {/* Dark overlay */}
            <div className="pet-video-overlay"></div>

            {/* Slide content */}
            <div className="pet-slide-content">
              <span className="hero-badge">
                Everything your pet deserves
              </span>

              <h1>{slide.title}</h1>

              <p>{slide.description}</p>

              <div className="hero-buttons">
                <Link href={slide.link} className="btn-primary">
                  {slide.button}
                </Link>

                <Link href="/about" className="btn-secondary">
                  Our story
                </Link>
              </div>

              {/* Trust information */}
              <div className="hero-trust">
                <div>
                  <strong>5K+</strong>
                  <span>Happy pets</span>
                </div>

                <div>
                  <strong>100+</strong>
                  <span>Pet products</span>
                </div>

                <div>
                  <strong>4.9★</strong>
                  <span>Pet parents love us</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Previous button */}
        <button
          className="slide-arrow slide-arrow-left"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          ←
        </button>

        {/* Next button */}
        <button
          className="slide-arrow slide-arrow-right"
          onClick={goToNext}
          aria-label="Next slide"
        >
          →
        </button>

        {/* Slide dots */}
        <div className="slide-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              className={
                index === currentSlide
                  ? "slide-dot active"
                  : "slide-dot"
              }
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* =========================
          CATEGORY SECTION
      ========================== */}
      <section className="categories-section">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <span className="section-label">SHOP BY CATEGORY</span>

              <h2>Everything they could wish for.</h2>

              <p>
                Thoughtfully selected products for every kind of
                pet and every kind of pet parent.
              </p>
            </div>

            <Link href="/shop" className="view-all">
              View all products →
            </Link>
          </div>

          <div className="category-grid">
            {/* Dogs */}
            <Link
              href="/shop?category=dogs"
              className="category-card dogs-card"
            >
              <div className="category-icon">🐶</div>

              <div>
                <h3>Dog essentials</h3>
                <p>Food, toys, treats & more</p>
              </div>

              <span className="category-arrow">→</span>
            </Link>

            {/* Cats */}
            <Link
              href="/shop?category=cats"
              className="category-card cats-card"
            >
              <div className="category-icon">🐱</div>

              <div>
                <h3>Cat favourites</h3>
                <p>Comfort, care & play</p>
              </div>

              <span className="category-arrow">→</span>
            </Link>

            {/* Toys */}
            <Link
              href="/shop?category=toys"
              className="category-card toys-card"
            >
              <div className="category-icon">🧸</div>

              <div>
                <h3>Play & toys</h3>
                <p>Fun for curious companions</p>
              </div>

              <span className="category-arrow">→</span>
            </Link>

            {/* Accessories */}
            <Link
              href="/shop?category=accessories"
              className="category-card accessories-card"
            >
              <div className="category-icon">🎀</div>

              <div>
                <h3>Accessories</h3>
                <p>Little extras, big smiles</p>
              </div>

              <span className="category-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          WHY PAWGOOGLE
      ========================== */}
      <section className="why-section">
        <div className="section-container">
          <div className="why-content">
            <div className="why-text">
              <span className="section-label">WHY PAWGOOGLE?</span>

              <h2>
                More than a pet shop.
                <br />
                A little more love.
              </h2>

              <p>
                We believe shopping for your pet should feel as
                joyful as spending time with them. That's why
                every product is chosen with care.
              </p>

              <Link href="/about" className="text-link">
                Learn more about us →
              </Link>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">💚</div>

                <h3>Pet-approved</h3>

                <p>
                  Products selected with your pet's happiness
                  and comfort in mind.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">✨</div>

                <h3>Quality first</h3>

                <p>
                  We focus on products that deliver quality,
                  value and everyday joy.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📦</div>

                <h3>Easy shopping</h3>

                <p>
                  Simple browsing, easy ordering and a smooth
                  experience from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <span className="section-label">READY TO SPOIL THEM?</span>

            <h2>Your pet is going to love this.</h2>

            <p>
              Discover products made for happier, healthier and
              more playful pets.
            </p>

            <Link href="/shop" className="cta-button">
              Start shopping →
            </Link>
          </div>

          <div className="cta-pets">
            <span>🐶</span>
            <span>🐱</span>
            <span>🐹</span>
            <span>🐠</span>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="logo-paw">🐾</span>
              <span>
                paw<span>Google</span>
              </span>
            </Link>

            <p>
              Making pet shopping a little happier, one wag,
              purr and splash at a time.
            </p>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h4>Explore</h4>

            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Shop */}
          <div className="footer-column">
            <h4>Shop</h4>

            <Link href="/shop?category=dogs">
              Dogs
            </Link>

            <Link href="/shop?category=cats">
              Cats
            </Link>

            <Link href="/shop?category=toys">
              Toys
            </Link>

            <Link href="/shop?category=accessories">
              Accessories
            </Link>
          </div>

          {/* Social */}
          <div className="footer-column">
            <h4>Follow us</h4>

            <a href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              Facebook
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              Pinterest
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>© 2026 pawGoogle. Made with 🐾.</p>

          <span>Pet happiness starts here.</span>
        </div>
      </footer>
    </>
  );
}