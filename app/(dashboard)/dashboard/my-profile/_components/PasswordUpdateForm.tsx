import { Button } from "@/components/ui/button";

const PasswordUpdateForm = () => {
  return (
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
  );
};
export default PasswordUpdateForm;
