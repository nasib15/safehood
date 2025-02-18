import { LocationIcon, MapIcon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";

const LocationCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
      <div className="space-y-4">
        <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
          {/* Replace with actual map component */}
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <MapIcon className="h-8 w-8 text-gray-400" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <LocationIcon className="size-8 mt-1 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p className="text-sm text-gray-500">
                Road 12, Gulshan-1, Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base">
            Get Directions
          </Button>
        </div>
      </div>
    </div>
  );
};
export default LocationCard;
