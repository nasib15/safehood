import CrimeDescription from "./_components/CrimeDescription";
import EmergencyContact from "./_components/EmergencyContact";
import ImageGallery from "./_components/ImageGallery";
import LocationCard from "./_components/LocationCard";
import ReportTitle from "./_components/ReportTitle";

const CrimeDetailsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-28">
      {/* Header Section */}
      <ReportTitle />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Left Column - Images and Description */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          <ImageGallery />

          {/* Description */}
          <CrimeDescription />
        </div>

        {/* Right Column - Location and Additional Info */}
        <div className="space-y-6">
          {/* Location Card */}
          <LocationCard />

          {/* Emergency Contacts */}
          <EmergencyContact />
        </div>
      </div>
    </div>
  );
};

export default CrimeDetailsPage;
