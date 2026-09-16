"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  {
    category: "DOGS",
    title: "Everything your dog needs.",
    description:
      "Healthy food, playful toys, comfy essentials and everyday accessories for your best friend.",
    button: "Shop for Dogs",
    link: "/shop?category=dogs",
    video: "/videos/dog.mp4",
  },
  {
    category: "CATS",
    title: "Make every day special for your cat.",
    description:
      "Discover delightful treats, toys and cozy essentials made for curious little companions.",
    button: "Shop for Cats",
    link: "/shop?category=cats",
    video: "/videos/cat.mp4",
  },
  {
    category: "SMALL PETS",
    title: "Tiny pets. Big personalities.",
    description:
      "Find thoughtful essentials for rabbits, hamsters, guinea pigs and other small companions.",
    button: "Shop Small Pets",
    link: "/shop?category=small",
    video: "/videos/small-pets.mp4",
  },
  {
    category: "FISH",
    title: "Bring a little underwater magic home.",
    description:
      "Everything you need to create a beautiful and comfortable environment for your aquatic friends.",
    button: "Shop for Fish",
    link: "/shop?category=fish",
    video: "/videos/fish.mp4",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === slides.length - 1 ? 0 : previous + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentSlide) {
        video.currentTime = 0;

        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, [currentSlide]);

  const previousSlide = () => {
    setCurrentSlide((previous) =>
      previous === 0 ? slides.length - 1 : previous - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((previous) =>
      previous === slides.length - 1 ? 0 : previous + 1
    );
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            <span className="logo-paw">🐾</span>

            <span>
              paw<span>Google</span>
            </span>
          </Link>

          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="nav-actions">
            <button className="search-button" aria-label="Search">
              ⌕
            </button>

            <Link href="/cart" className="cart-link">
              🛒 Cart
            </Link>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO VIDEO SLIDESHOW
      ====================================================== */}

      <section className="pet-slideshow">
        {slides.map((slide, index) => (
          <div
            key={slide.category}
            className={
              index === currentSlide
                ? "pet-slide active"
                : "pet-slide"
            }
          >
            <video
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              className="pet-slide-video"
              src={slide.video}
              muted
              loop
              playsInline
              preload={index === 0 ? "auto" : "metadata"}
            />

            <div className="pet-video-overlay"></div>

            <div className="pet-slide-content">
              <span className="pet-slide-label">
                {slide.category}
              </span>

              <h1>{slide.title}</h1>

              <p>{slide.description}</p>

              <Link
                href={slide.link}
                className="pet-slide-button"
              >
                {slide.button}

                <span>→</span>
              </Link>
            </div>
          </div>
        ))}

        {/* Previous */}
        <button
          className="pet-slider-arrow pet-slider-prev"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          ←
        </button>

        {/* Next */}
        <button
          className="pet-slider-arrow pet-slider-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>

        {/* Dots */}
        <div className="pet-slider-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.category}
              className={
                index === currentSlide
                  ? "pet-slider-dot active"
                  : "pet-slider-dot"
              }
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to ${slide.category} slide`}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="categories-section">
        <div className="section-container">
          <div className="section-heading-row">
            <div>
              <span className="section-label">
                SHOP BY CATEGORY
              </span>

              <h2>Everything they could wish for.</h2>
            </div>

            <Link href="/shop" className="view-all">
              View all products →
            </Link>
          </div>

          <div className="categories-grid">
            <Link
              href="/shop?category=dogs"
              className="category-card category-dogs"
            >
              <div className="category-icon">🐶</div>

              <div>
                <h3>Dog essentials</h3>
                <p>Food, toys & everyday favourites</p>
              </div>

              <span className="category-arrow">→</span>
            </Link>

            <Link
              href="/shop?category=cats"
              className="category-card category-cats"
            >
              <div className="category-icon">🐱</div>

              <div>
                <h3>Cat favourites</h3>
                <p>Cozy, playful & delicious</p>
              </div>

              <span className="category-arrow">→</span>
            </Link>

            <Link
              href="/shop?category=toys"
              className="category-card category-toys"
            >
              <div className="category-icon">🧸</div>

              <div>
                <h3>Play & toys</h3>
                <p>More play. More happiness.</p>
              </div>

              <span className="category-arrow">→</span>
            </Link>

            <Link
              href="/shop?category=accessories"
              className="category-card category-accessories"
            >
              <div className="category-icon">🎀</div>

              <div>
                <h3>Accessories</h3>
                <p>Little extras they will love</p>
              </div>

              <span className="category-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY PAWGOOGLE
      ====================================================== */}

      <section className="why-section">
        <div className="section-container">
          <div className="why-header">
            <span className="section-label">
              WHY PAWGOOGLE?
            </span>

            <h2>More than a pet shop.</h2>

            <p>A little more love.</p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">💚</div>

              <h3>Pet-approved</h3>

              <p>
                We carefully choose products that bring comfort,
                happiness and fun to your pets.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">✨</div>

              <h3>Quality first</h3>

              <p>
                From everyday essentials to special treats,
                quality always comes first.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">📦</div>

              <h3>Easy shopping</h3>

              <p>
                Find everything your pet needs in one simple,
                friendly and convenient place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="cta-section">
        <div className="cta-container">
          <div>
            <span className="section-label">
              READY TO SPOIL THEM?
            </span>

            <h2>Your pet is going to love this.</h2>

            <p>
              Discover thoughtful products selected for happier,
              healthier and more playful pets.
            </p>
          </div>

          <Link href="/shop" className="cta-button">
            Start shopping
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <Link href="/" className="logo footer-logo">
              <span className="logo-paw">🐾</span>

              <span>
                paw<span>Google</span>
              </span>
            </Link>

            <p>
              Everything your pet needs, chosen with care and
              a whole lot of love.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>

            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h4>Shop</h4>

            <Link href="/shop?category=dogs">Dogs</Link>
            <Link href="/shop?category=cats">Cats</Link>
            <Link href="/shop?category=toys">Toys</Link>
            <Link href="/shop?category=accessories">
              Accessories
            </Link>
          </div>

          <div className="footer-column">
            <h4>Follow us</h4>

            <a href="#" onClick={(e) => e.preventDefault()}>
              Instagram
            </a>

            <a href="#" onClick={(e) => e.preventDefault()}>
              Facebook
            </a>

            <a href="#" onClick={(e) => e.preventDefault()}>
              Pinterest
            </a>

            <a href="#" onClick={(e) => e.preventDefault()}>
              YouTube
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 pawGoogle. Made with 🐾.</p>

          <span>Pet happiness starts here.</span>
        </div>
      </footer>
    </>
  );
}