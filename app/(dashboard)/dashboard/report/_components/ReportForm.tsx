import { Button } from "@/components/ui/button";
import Image from "next/image";

const ReportForm = () => {
  return (
    <form className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="col-span-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Report Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
            placeholder="Enter a descriptive title"
          />
        </div>

        {/* Division */}
        <div>
          <label
            htmlFor="division"
            className="block text-sm font-medium text-gray-700"
          >
            Division
          </label>
          <select
            id="division"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
          >
            <option value="" className="bg-white">
              Select division
            </option>
            <option value="dhaka" className="bg-white">
              Dhaka
            </option>
            <option value="khulna" className="bg-white">
              Khulna
            </option>
            <option value="barisal" className="bg-white">
              Barisal
            </option>
            <option value="chittagong" className="bg-white">
              Chittagong
            </option>
            <option value="rajshahi" className="bg-white">
              Rajshahi
            </option>
            <option value="sylhet" className="bg-white">
              Sylhet
            </option>
            <option value="rangpur" className="bg-white">
              Rangpur
            </option>
          </select>
        </div>

        {/* District */}
        <div>
          <label
            htmlFor="district"
            className="block text-sm font-medium text-gray-700"
          >
            District
          </label>
          <select
            id="district"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
          >
            <option value="" className="bg-white">
              Select district
            </option>
            <option value="dhaka" className="bg-white">
              Dhaka
            </option>
            <option value="khulna" className="bg-white">
              Khulna
            </option>
            <option value="barisal" className="bg-white">
              Barisal
            </option>
            <option value="chittagong" className="bg-white">
              Chittagong
            </option>
            <option value="rajshahi" className="bg-white">
              Rajshahi
            </option>
            <option value="sylhet" className="bg-white">
              Sylhet
            </option>
            <option value="rangpur" className="bg-white">
              Rangpur
            </option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Incident
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
          />
        </div>

        {/* Time */}
        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Time of Incident
          </label>
          <input
            type="time"
            id="time"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
          />
        </div>

        {/* Images Upload */}
        <div className="col-span-2">
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Crime Scene Images (Required)
          </label>
          <input
            type="file"
            id="images"
            multiple
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-500 hover:file:bg-red-100 file:transition-colors file:duration-200"
            required
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="relative">
              <Image
                src={
                  "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={`Preview`}
                className="w-full h-32 object-cover rounded-lg"
                width={100}
                height={100}
              />
              <button
                type="button"
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Video Upload */}
        <div className="col-span-2">
          <label
            htmlFor="video"
            className="block text-sm font-medium text-gray-700"
          >
            Crime Scene Video (Optional)
          </label>
          <input
            type="file"
            id="video"
            accept="video/*"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-500 hover:file:bg-red-100 file:transition-colors file:duration-200"
          />
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-sm text-gray-500">Selected: Demo Video</span>
            <button
              type="button"
              className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <div className="relative">
            <textarea
              id="description"
              rows={6}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
              placeholder={
                "Description will be auto-generated from the uploaded image. You can modify it after generation."
              }
            ></textarea>
            {/* Loading Generating Description */}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          className="border-red-500/30 text-red-500 hover:bg-red-50 transition-colors duration-200"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
        >
          Submit Report
        </Button>
      </div>
    </form>
  );
};
export default ReportForm;
