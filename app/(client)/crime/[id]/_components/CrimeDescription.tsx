const CrimeDescription = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Description</h2>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
        A suspicious activity was reported in the Gulshan area near Road 12.
        Multiple individuals were seen loitering around residential buildings
        during late hours. The suspects were described as wearing dark clothing
        and carrying backpacks. Local residents have reported similar incidents
        in the past week.
      </p>
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-3">
          Additional Details
        </h3>
        <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
          <li className="flex items-start gap-2">
            • Suspects were seen between 1:00 AM and 3:00 AM
          </li>
          <li className="flex items-start gap-2">
            • Approximately 3-4 individuals involved
          </li>
          <li className="flex items-start gap-2">
            • Dark colored vehicle spotted nearby
          </li>
          <li className="flex items-start gap-2">
            • Security cameras in the area may have captured footage
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CrimeDescription;
