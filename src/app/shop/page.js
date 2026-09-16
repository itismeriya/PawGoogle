import Link from "next/link";
import { products } from "../products";
import "./shop.css";

const categories = [
  { slug: "all", label: "All Products", icon: "🐾" },
  { slug: "dogs", label: "Dogs", icon: "🐶" },
  { slug: "cats", label: "Cats", icon: "🐱" },
  { slug: "small", label: "Small Pets", icon: "🐹" },
  { slug: "fish", label: "Fish", icon: "🐠" },
  { slug: "reptile", label: "Reptiles", icon: "🦎" },
  { slug: "bird", label: "Birds", icon: "🦜" },
];

export default async function ShopPage({ searchParams }) {
  const params = await searchParams;
  const category = params?.category?.toLowerCase() || "all";

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  const activeCategory =
    categories.find((item) => item.slug === category) || categories[0];

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <div className="shop-hero-content">
          <span className="shop-eyebrow">PAWGOOGLE SHOP</span>

          <h1>
            Everything your
            <span> pet loves.</span>
          </h1>

          <p>
            Discover carefully selected food, treats, toys and everyday
            essentials for your favorite companions.
          </p>

          <div className="shop-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Shop</span>
          </div>
        </div>

        <div className="shop-hero-pets" aria-hidden="true">
          <span>🐶</span>
          <span>🐱</span>
          <span>🐰</span>
        </div>
      </section>

      <section className="shop-content">
        <aside className="shop-sidebar">
          <div className="filter-heading">
            <span>Shop by pet</span>
          </div>

          <nav className="category-list">
            {categories.map((item) => (
              <Link
                key={item.slug}
                href={
                  item.slug === "all"
                    ? "/shop"
                    : `/shop?category=${item.slug}`
                }
                className={
                  category === item.slug
                    ? "category-link active"
                    : "category-link"
                }
              >
                <span className="category-icon">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <div className="shop-main">
          <div className="shop-toolbar">
            <div>
              <p className="results-label">
                Showing <strong>{filteredProducts.length}</strong>{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </p>

              <h2>{activeCategory.label}</h2>
            </div>

            <Link href="/shop" className="clear-filter">
              View all
            </Link>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <Link
                  href={`/shop/${product.slug}`}
                  key={product.id}
                  className="product-card"
                >
                  <div className="product-image">
                    {product.badge && (
                      <span className={`product-badge ${product.badge.toLowerCase()}`}>
                        {product.badge}
                      </span>
                    )}

                    <span className="product-emoji" aria-hidden="true">
                      {product.emoji}
                    </span>

                    <span className="view-product">
                      View product
                    </span>
                  </div>

                  <div className="product-info">
                    <span className="product-type">
                      {product.type}
                    </span>

                    <h3>{product.name}</h3>

                    <div className="product-price">
                      <span>${product.price.toFixed(2)}</span>

                      {product.oldPrice && (
                        <del>${product.oldPrice.toFixed(2)}</del>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty-products">
              <span>🐾</span>
              <h2>No products found</h2>
              <p>Try another pet category.</p>
              <Link href="/shop">View all products</Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}