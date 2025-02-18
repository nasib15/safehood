import { FallbackProfilePicture } from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";

const ProfileUpdateForm = () => {
  return (
    <form className="space-y-8">
      {/* Profile Picture */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative group">
          <div className="h-32 w-32 rounded-full bg-gray-50 border-2 border-gray-200 flex items-center justify-center overflow-hidden">
            <FallbackProfilePicture />
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-500 hover:file:bg-red-100 file:transition-colors file:duration-200"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
            placeholder="Enter your email"
            disabled
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Role */}
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Account Type
          </label>
          <input
            type="text"
            id="role"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
            disabled
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
        >
          Update Profile
        </Button>
      </div>
    </form>
  );
};
export default ProfileUpdateForm;
