import { Button } from "@/components/ui/button";
import PasswordUpdateForm from "./_components/PasswordUpdateForm";
import ProfileUpdateForm from "./_components/ProfileUpdateForm";

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
        <ProfileUpdateForm />
      </div>

      {/* Account Settings */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Account Settings
        </h2>
        <div className="space-y-4">
          <PasswordUpdateForm />

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
