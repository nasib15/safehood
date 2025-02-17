import { SadIcon } from "../../../components/icons/Icon";

const FallbackCrimeFeed = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <SadIcon />
      <p className="text-gray-400 text-lg">No reports found</p>
      <p className="text-gray-500 text-sm mt-2">
        Try adjusting your search or filters
      </p>
    </div>
  );
};
export default FallbackCrimeFeed;
