import React from "react";
import { Link, useParams } from "react-router-dom";
import bannerImage from "../../assets/banner-image.png";
import { books } from "../../data/books.js";
import useCart from "../../hooks/useCart.js";

function ProductDetails() {
  const { id } = useParams();
  const { addItem } = useCart();
  const book = books.find((item) => item.id === id);

  if (!book) {
    return (
      <section className="font-poppins py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Book not found</h1>
          <p className="mt-3 text-gray-600">
            The book you&apos;re looking for isn&apos;t available right now.
          </p>
          <Link
            to="/#free-courses"
            className="inline-flex mt-6 px-5 py-2 rounded-lg bg-black text-white"
          >
            Back to books
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="font-poppins py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <img
              src={bannerImage}
              alt={book.title}
              className="w-full h-96 object-contain"
            />
          </div>
          <div>
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600">
              {book.category}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              {book.title}
            </h1>
            <p className="mt-2 text-gray-600">by {book.author}</p>
            <p className="mt-6 text-gray-700 text-lg">
              {book.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-gray-900">Rating</p>
                <p className="mt-1">{book.rating} / 5</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-gray-900">Readers</p>
                <p className="mt-1">{book.students.toLocaleString()}</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-gray-900">Length</p>
                <p className="mt-1">{book.duration}</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-gray-900">Price</p>
                <p className="mt-1 text-pink-600 font-semibold">Free</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => addItem(book)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:from-pink-600 hover:to-purple-700 transition"
              >
                Add to cart
              </button>
              <Link
                to="/checkout"
                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
              >
                Go to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
