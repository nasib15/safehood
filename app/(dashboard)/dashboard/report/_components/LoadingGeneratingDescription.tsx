import { LoadingIcon } from "@/components/icons/Icon";

const LoadingGeneratingDescription = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#1a0000]/50 rounded-md">
      <div className="flex items-center space-x-2">
        <LoadingIcon />
        <span className="text-white">Generating description...</span>
      </div>
    </div>
  );
};
export default LoadingGeneratingDescription;
