import React, { useEffect, useMemo, useState } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  ArrowLeft,
  Share2,
  BookOpen,
  Clock,
  User,
  Calendar,
  ChevronRight,
  Bookmark,
  Eye,
  Tag,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { books } from "../../data/books.js";
import useCart from "../../hooks/useCart.js";

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [currentSlide, setCurrentSlide] = useState(0);

  const product = useMemo(
    () => books.find((item) => item.id === id) || books[0],
    [id]
  );

  const productImages = useMemo(() => {
    if (!product) return [];
    if (Array.isArray(product.images) && product.images.length > 0) {
      return product.images;
    }
    if (product.image) {
      return [product.image];
    }
    return [];
  }, [product]);

  useEffect(() => {
    setActiveImage(0);
    setCurrentSlide(0);
  }, [product?.id]);

  const relevantBooks = useMemo(() => {
    if (!product) return [];
    return books.filter((item) => item.id !== product.id);
  }, [product]);

  const priceValue = Number.isFinite(product?.price) ? product.price : 0;
  const oldPriceValue = Number.isFinite(product?.oldPrice) ? product.oldPrice : null;
  const discountPercent =
    Number.isFinite(product?.discountPercent)
      ? product.discountPercent
      : Number.isFinite(product?.discount)
        ? product.discount
        : null;
  const totalSlides = Math.max(1, Math.ceil(relevantBooks.length / 3));

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = (count, autoCloseMs) => {
    if (!product) return;
    const safeCount = Number.isFinite(count) && count > 0 ? count : 1;
    addItem(product, {
      quantity: safeCount,
      open: true,
      autoCloseMs,
    });
  };

  const handleBuyNow = () => {
    addToCart(quantity, 1000);
    navigate("/checkout");
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    const heart = document.getElementById("wishlist-heart");
    if (heart) {
      heart.classList.add("scale-125");
      setTimeout(() => heart.classList.remove("scale-125"), 300);
    }
  };

  const handleShare = () => {
    if (!product) return;
    const url = `${window.location.origin}/books/${product.id}`;
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out ${product.title}`,
        url,
      });
      return;
    }
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url);
    }
    window.alert("Link copied to clipboard.");
  };

  const scrollToRelevant = () => {
    const section = document.getElementById("relevant-books");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleBooks = relevantBooks.slice(currentSlide * 3, currentSlide * 3 + 3);

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Store</span>
            </a>
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToRelevant}
                className="hidden md:flex items-center gap-2 text-sm text-gray-600 hover:text-pink-600 transition-colors group"
              >
                <span>You may also like</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div> */}
        {/* <div className="margin mt-10"></div> */}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 to-blue-50 p-8 shadow-lg hover:shadow-xl transition-shadow duration-500">
              <div className="absolute top-4 left-4 flex gap-2">
                {product.bestseller && (
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full animate-pulse">
                    Bestseller
                  </span>
                )}
                {product.inStock && (
                  <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xs font-semibold rounded-full">
                    In Stock
                  </span>
                )}
              </div>

              <div className="flex justify-center items-center min-h-[400px]">
                <img
                  src={productImages[activeImage] || product.image}
                  alt={product.title}
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-700 cursor-zoom-in max-h-[400px] object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex justify-center gap-4 mt-6">
                {productImages.map((img, index) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 transform hover:scale-110 ${
                      activeImage === index
                        ? "border-pink-500 scale-110 ring-2 ring-pink-200"
                        : "border-gray-200 hover:border-pink-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-16 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleWishlist}
                className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  isWishlisted
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-200"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600 hover:shadow-md"
                }`}
              >
                <Heart
                  id="wishlist-heart"
                  className={`w-5 h-5 transition-transform ${
                    isWishlisted ? "fill-current" : ""
                  }`}
                />
                <span className="font-medium">
                  {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                </span>
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="flex-1 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Share</span>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
              <a href="/" className="hover:text-pink-600 transition-colors">
                Home
              </a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <a href="/books" className="hover:text-pink-600 transition-colors">
                Books
              </a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-700 font-medium">{product.category}</span>
            </div>

            {/* Title & Author */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-fade-in">
                {product.title}
              </h1>
              <div className="flex items-center gap-2 text-xl text-gray-600 mb-4">
                <User className="w-5 h-5 text-pink-500" />
                <span className="hover:text-pink-600 transition-colors cursor-pointer">
                  {product.author}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 font-semibold">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">
                  {Number(product.reviews || 0).toLocaleString()} reviews
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-100">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${priceValue.toFixed(2)}
                </span>
                {oldPriceValue && (
                  <span className="text-lg text-gray-500 line-through">
                    ${oldPriceValue.toFixed(2)}
                  </span>
                )}
                {discountPercent !== null && (
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                    Save {discountPercent}%
                  </span>
                )}
              </div>
              {product.shippingNote && (
                <p className="text-green-600 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {product.shippingNote}
                </p>
              )}
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white border border-gray-100 rounded-xl hover:border-pink-200 hover:shadow-md transition-all duration-300 group">
                <BookOpen className="w-6 h-6 text-pink-500 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-gray-600">Pages</div>
                <div className="font-semibold text-gray-900">{product.pages}</div>
              </div>
              <div className="p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                <Calendar className="w-6 h-6 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-gray-600">Published</div>
                <div className="font-semibold text-gray-900">{product.published}</div>
              </div>
              <div className="p-4 bg-white border border-gray-100 rounded-xl hover:border-purple-200 hover:shadow-md transition-all duration-300 group">
                <Bookmark className="w-6 h-6 text-purple-500 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-gray-600">Language</div>
                <div className="font-semibold text-gray-900">{product.language}</div>
              </div>
              <div className="p-4 bg-white border border-gray-100 rounded-xl hover:border-green-200 hover:shadow-md transition-all duration-300 group">
                <Eye className="w-6 h-6 text-green-500 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-gray-600">Format</div>
                <div className="font-semibold text-gray-900">{product.format}</div>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={decrementQuantity}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-3 font-semibold text-gray-900 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(quantity)}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 hover:shadow-lg hover:shadow-pink-200 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart - ${(priceValue * quantity).toFixed(2)}
                </button>
              </div>

              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-xl font-semibold hover:bg-gray-900 hover:text-white hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Buy Now
              </button>
            </div>

            {/* Tags */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                {(product.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-sm font-medium hover:from-pink-50 hover:to-pink-100 hover:text-pink-700 transition-all duration-300 cursor-pointer hover:scale-105 flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {["description", "details", "reviews", "shipping"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 font-medium text-sm border-b-2 transition-all duration-300 ${
                    activeTab === tab
                      ? "border-pink-500 text-pink-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && (
                    <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Takeaways
                    </h4>
                    <ul className="space-y-2">
                      {(product.keyTakeaways || []).map((item) => (
                        <li key={item} className="flex items-center gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Why Read This Book
                    </h4>
                    <ul className="space-y-2">
                      {(product.whyRead || []).map((item) => (
                        <li key={item} className="flex items-center gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "details" && (
              <div className="space-y-4 animate-fade-in">
                <ul className="space-y-2">
                  {(product.details || []).map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="space-y-4 animate-fade-in">
                {(product.reviewsList || []).map((review, index) => (
                  <div
                    key={`${review.name}-${index}`}
                    className="p-4 bg-white border border-gray-100 rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(review.rating || 0)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{review.text}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "shipping" && (
              <div className="space-y-4 animate-fade-in">
                <ul className="space-y-2">
                  {(product.shippingInfo || []).map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Relevant Books Section */}
        <div id="relevant-books" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                You May Also Like
              </h2>
              <p className="text-gray-600">
                Readers who enjoyed this book also loved these titles
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all duration-300"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleBooks.map((book) => (
              <div
                key={book.id}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-pink-200 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex gap-4">
                  <div className="relative">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-24 h-32 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                    {(book.discountPercent ?? book.discount) && (
                      <div className="absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-full">
                        -{book.discountPercent ?? book.discount}%
                      </div>
                    )}
                    {book.bestseller && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full">
                        Bestseller
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{book.author}</p>

                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(book.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{book.rating}</span>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="font-bold text-gray-900">
                        ${Number(book.price || 0).toFixed(2)}
                      </div>
                      <button className="px-4 py-2 text-sm bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg hover:from-pink-50 hover:to-pink-100 hover:text-pink-600 hover:shadow-md transition-all duration-300 group/btn">
                        <span className="flex items-center gap-2">
                          <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          Add
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full">
                      {book.category}
                    </span>
                    <Link
                      to={`/books/${book.id}`}
                      className="text-sm text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1 group/link"
                    >
                      View Details
                      <ChevronRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Additional Styling for Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default ProductDetailsPage;
