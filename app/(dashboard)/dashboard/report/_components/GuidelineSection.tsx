import { SmallTickIcon } from "@/components/icons/Icon";

const GuidelineSection = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Reporting Guidelines
      </h2>
      <ul className="space-y-3 text-gray-500">
        <li className="flex items-start gap-2">
          <SmallTickIcon />
          At least one crime scene image is required
        </li>
        <li className="flex items-start gap-2">
          <SmallTickIcon />
          Description will be auto-generated from images, but you can modify it
        </li>
        <li className="flex items-start gap-2">
          <SmallTickIcon />
          If uploading a video, you must provide a manual description
        </li>
        <li className="flex items-start gap-2">
          <SmallTickIcon />
          Provide accurate location details to help authorities
        </li>
      </ul>
    </div>
  );
};
export default GuidelineSection;
