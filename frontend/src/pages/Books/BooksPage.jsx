import React, { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import CourseCard from "../../components/FreeCourse/CourseCard.jsx";
import { books } from "../../data/books.js";
import useCart from "../../hooks/useCart.js";

function BooksPage() {
  const { addItem } = useCart();
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState({});
  const [minRating, setMinRating] = useState("any");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(true);

  const categories = useMemo(() => {
    return Array.from(new Set(books.map((book) => book.category))).sort();
  }, []);

  const priceBounds = useMemo(() => {
    const prices = books.map((book) => Number(book.price) || 0);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, []);

  const filteredBooks = useMemo(() => {
    const activeCategories = Object.keys(selectedCategories).filter(
      (key) => selectedCategories[key]
    );
    const minPriceValue =
      priceRange.min === "" ? priceBounds.min : Number(priceRange.min);
    const maxPriceValue =
      priceRange.max === "" ? priceBounds.max : Number(priceRange.max);
    const ratingValue =
      minRating === "any" ? 0 : Number(minRating);

    const filtered = books.filter((book) => {
      const matchesQuery = [book.title, book.author, book.category]
        .join(" ")
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      const matchesCategory =
        activeCategories.length === 0 || activeCategories.includes(book.category);
      const matchesPrice =
        (Number(book.price) || 0) >= minPriceValue &&
        (Number(book.price) || 0) <= maxPriceValue;
      const matchesRating = (Number(book.rating) || 0) >= ratingValue;

      return matchesQuery && matchesCategory && matchesPrice && matchesRating;
    });

    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
      case "price-high":
        return filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
      case "rating":
        return filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "title":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return filtered;
    }
  }, [query, selectedCategories, minRating, priceRange, sortBy, priceBounds]);

  const handleShare = (book) => {
    const url = `${window.location.origin}/books/${book.id}`;
    if (navigator.share) {
      navigator.share({
        title: book.title,
        text: `Check out ${book.title}`,
        url,
      });
      return;
    }
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url);
    }
    window.alert("Link copied to clipboard.");
  };

  const resetFilters = () => {
    setQuery("");
    setSelectedCategories({});
    setMinRating("any");
    setPriceRange({ min: "", max: "" });
    setSortBy("featured");
  };

  return (
    <section id="books" className="font-poppins bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
              Book Catalog
            </span>
            {/* <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Browse every book in our collection
            </h1> */}
            {/* <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Filter by category, price, or rating to find your next favorite read.
            </p> */}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              {filteredBooks.length} results
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <button
              type="button"
              onClick={() => setShowFilters((prev) => !prev)}
              className="w-full flex items-center justify-between text-gray-900 font-semibold"
              aria-expanded={showFilters}
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-pink-500" />
                Filters
              </span>
              <span className="text-sm text-gray-500">
                {showFilters ? "Hide" : "Show"}
              </span>
            </button>

            {showFilters && (
              <>
                <div className="mt-6">
                  <label className="text-sm font-semibold text-gray-800">Search</label>
                  <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Title, author, or genre"
                      className="w-full text-sm outline-none"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-800">Categories</p>
                  <div className="mt-3 space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center justify-between text-sm text-gray-600"
                      >
                        <span>{category}</span>
                        <input
                          type="checkbox"
                          checked={Boolean(selectedCategories[category])}
                          onChange={(event) =>
                            setSelectedCategories((prev) => ({
                              ...prev,
                              [category]: event.target.checked,
                            }))
                          }
                          className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-800">Price Range</p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <input
                      type="number"
                      min={priceBounds.min}
                      max={priceBounds.max}
                      placeholder={`Min $${priceBounds.min}`}
                      value={priceRange.min}
                      onChange={(event) =>
                        setPriceRange((prev) => ({
                          ...prev,
                          min: event.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
                    />
                    <input
                      type="number"
                      min={priceBounds.min}
                      max={priceBounds.max}
                      placeholder={`Max $${priceBounds.max}`}
                      value={priceRange.max}
                      onChange={(event) =>
                        setPriceRange((prev) => ({
                          ...prev,
                          max: event.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-sm font-semibold text-gray-800">
                    Minimum rating
                  </label>
                  <select
                    value={minRating}
                    onChange={(event) => setMinRating(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
                  >
                    <option value="any">Any rating</option>
                    <option value="4.5">4.5+ stars</option>
                    <option value="4.0">4.0+ stars</option>
                    <option value="3.5">3.5+ stars</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label className="text-sm font-semibold text-gray-800">Sort by</label>
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to high</option>
                    <option value="price-high">Price: High to low</option>
                    <option value="rating">Top rated</option>
                    <option value="title">Title: A-Z</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 w-full rounded-xl border border-gray-200 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50"
                >
                  Clear filters
                </button>
              </>
            )}
          </div>

          <div>
            {filteredBooks.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-200 p-10 text-center text-gray-600">
                <p className="text-lg font-semibold text-gray-900">
                  No books match your filters
                </p>
                <p className="mt-2 text-sm">
                  Try adjusting your filters or clearing them to see more results.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white hover:bg-pink-700"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {filteredBooks.map((book) => (
                  <CourseCard
                    key={book.id}
                    course={book}
                    image={book.image}
                    isFavorite={false}
                    onToggleFavorite={() => {}}
                    onAddToCart={() => addItem(book)}
                    detailsHref={`/books/${book.id}`}
                    onShare={() => handleShare(book)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BooksPage;
