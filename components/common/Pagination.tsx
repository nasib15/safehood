const Pagination = () => {
  return (
    <nav className="flex items-center justify-center space-x-2">
      {/* Previous Button */}
      <button
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-white text-gray-500 hover:bg-gray-50 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        <button
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-red-600 text-white hover:bg-red-700`}
        >
          1
        </button>
        <button
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-white text-gray-700 hover:bg-gray-50 border border-gray-200`}
        >
          2
        </button>
        <button
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-white text-gray-700 hover:bg-gray-50 border border-gray-200`}
        >
          3
        </button>
        <span className="px-3 py-2 text-gray-500">...</span>
        <button
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-white text-gray-700 hover:bg-gray-50 border border-gray-200`}
        >
          8
        </button>
      </div>

      {/* Next Button */}
      <button
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-white text-gray-500 hover:bg-gray-50 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};
export default Pagination;
