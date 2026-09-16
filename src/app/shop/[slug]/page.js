import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../products";
import "./product.css";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="product-page">
      <div className="product-breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/shop">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <section className="product-detail">
        <div className="product-detail-image">
          {product.badge && (
            <span
              className={`detail-badge ${product.badge.toLowerCase()}`}
            >
              {product.badge}
            </span>
          )}

          <span>{product.emoji}</span>
        </div>

        <div className="product-detail-content">
          <span className="detail-category">
            {product.categoryLabel} / {product.type}
          </span>

          <h1>{product.name}</h1>

          <div className="detail-rating">
            <span>★★★★★</span>
            <small>4.9 · 24 reviews</small>
          </div>

          <div className="detail-price">
            <strong>${product.price.toFixed(2)}</strong>

            {product.oldPrice && (
              <del>${product.oldPrice.toFixed(2)}</del>
            )}
          </div>

          <p className="detail-description">
            {product.description}
          </p>

          <div className="detail-benefits">
            <div>
              <span>✓</span>
              Quality pet essentials
            </div>

            <div>
              <span>✓</span>
              Fast U.S. delivery
            </div>

            <div>
              <span>✓</span>
              Easy returns
            </div>
          </div>

          <div className="product-actions">
            <button type="button">
              Add to cart
            </button>

            <Link href="/shop">
              Continue shopping
            </Link>
          </div>

          <div className="product-meta">
            <p>
              <strong>Category:</strong>{" "}
              {product.categoryLabel}
            </p>

            <p>
              <strong>Product type:</strong>{" "}
              {product.type}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}