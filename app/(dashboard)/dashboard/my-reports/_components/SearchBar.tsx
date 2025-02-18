import { SearchIcon } from "@/components/icons/Icon";

const SearchBar = () => {
  return (
    <div className="flex-1">
      <div className="relative group">
        <input
          type="text"
          placeholder="Search reports..."
          className="w-full px-4 py-3 pl-10 border border-gray-200 bg-white text-gray-900 placeholder-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
        />
        <SearchIcon />
      </div>
    </div>
  );
};
export default SearchBar;
