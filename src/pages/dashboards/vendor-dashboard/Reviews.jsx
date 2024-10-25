const reviews = [
  {
    id: 1,
    name: "Irene",
    review: "TradeView made managing our ads so much easier! Highly recommend.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sam",
    review: "Great platform! User-friendly and efficient.",
    rating: 4,
  },
  {
    id: 3,
    name: "Jemima",
    review: "The filtering and search options are fantastic. A+ for usability!",
    rating: 5,
  },
  {
    id: 4,
    name: "Khalid",
    review: "Customer support is responsive and helpful. Love the platform!",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        User Reviews
      </h1>
      <div className="reviews-bg min-h-screen bg-gray-100 py-10 flex justify-center px-4">
        <div className="w-full max-w-4xl">
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white shadow-md rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <span className="h-12 w-12 rounded-full bg-blue-500 text-white text-xl flex items-center justify-center">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div className="sm:ml-4 text-center sm:text-left">
                    <h2 className="text-lg font-medium">{review.name}</h2>
                    <div className="text-yellow-500">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-center sm:text-left">
                  {review.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
