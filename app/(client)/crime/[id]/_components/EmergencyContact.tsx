import { Button } from "@/components/ui/button";

const EmergencyContact = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Emergency Contacts
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900 text-sm sm:text-base">
              Police Station
            </p>
            <p className="text-xs sm:text-sm text-gray-500">Gulshan Thana</p>
          </div>
          <Button
            variant="outline"
            className="text-red-600 border-red-200 hover:bg-red-50 text-sm"
          >
            Call Now
          </Button>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900 text-sm sm:text-base">
              Emergency Hotline
            </p>
            <p className="text-xs sm:text-sm text-gray-500">999</p>
          </div>
          <Button
            variant="outline"
            className="text-red-600 border-red-200 hover:bg-red-50 text-sm"
          >
            Call Now
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EmergencyContact;
