import { FallbackProfilePicture } from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";

const MyProfilePage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="border-b border-gray-200 pb-5 mt-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
          Profile Settings
        </h1>
        <p className="text-gray-500">
          Manage your account settings and profile information
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
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
      </div>

      {/* Account Settings */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Account Settings
        </h2>
        <div className="space-y-4">
          <form className="flex items-center justify-between py-4 border-t border-gray-200">
            <div className="flex-1 max-w-md">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-gray-900 font-medium">Change Password</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Update your account password
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-red-500/30 focus:border-red-500/30 transition-colors duration-200"
                />
                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
                >
                  Update
                </Button>
              </div>
            </div>
          </form>

          <div className="flex items-center justify-between py-4 border-t border-gray-200">
            <div>
              <h3 className="text-red-600 font-medium">Delete Account</h3>
              <p className="text-sm text-gray-500 mt-1">
                Permanently delete your account and all data
              </p>
            </div>
            <Button
              variant="outline"
              className="border-red-500/30 text-red-500 hover:bg-red-50 transition-colors duration-200"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
