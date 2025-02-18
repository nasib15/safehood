import GuidelineSection from "./_components/GuidelineSection";
import ReportForm from "./_components/ReportForm";

const ReportCrimePage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="border-b border-gray-200 pb-5 mt-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
          Report a Crime
        </h1>
        <p className="text-gray-500">
          Please provide accurate information about the incident
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
        <ReportForm />
      </div>

      {/* Guidelines */}
      <GuidelineSection />
    </div>
  );
};

export default ReportCrimePage;
