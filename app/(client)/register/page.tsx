import Image from "next/image";
import RegisterForm from "../_components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <Image
            src="/logo3.png"
            alt="SafeHood Logo"
            width={48}
            height={48}
            className="mx-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join SafeHood and help make your community safer
          </p>
        </div>

        {/* Register Form Component */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
