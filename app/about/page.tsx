import {
  AlertIcon,
  LightningIcon,
  MessageIcon,
  PasteIcon,
  PeopleIcon,
  TGIcon,
  TickIcon,
} from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="py-28">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About SafeHood
        </h1>
        <p className="text-gray-600 max-w-prose mx-auto w-11/12">
          Empowering communities to create safer neighborhoods through
          collaborative crime reporting and prevention.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At SafeHood, we believe in the power of community collaboration to
            create safer environments for everyone. Our platform serves as a
            bridge between citizens and law enforcement, enabling real-time
            crime reporting and fostering community awareness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                <PeopleIcon />
              </div>
              <h3 className="font-semibold text-gray-900">Community First</h3>
              <p className="text-gray-600 text-sm">
                Building stronger, safer communities together
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                <TickIcon />
              </div>
              <h3 className="font-semibold text-gray-900">Safety & Security</h3>
              <p className="text-gray-600 text-sm">
                Advanced security measures to protect user data
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                <LightningIcon />
              </div>
              <h3 className="font-semibold text-gray-900">Real-time Updates</h3>
              <p className="text-gray-600 text-sm">
                Instant alerts and notifications for community safety
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 rounded-lg p-3">
                  <TGIcon />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Real-time Reporting
                </h3>
                <p className="mt-2 text-gray-600">
                  Submit and track crime reports in real-time with our
                  user-friendly interface.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 rounded-lg p-3">
                  <PasteIcon />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Community Dashboard
                </h3>
                <p className="mt-2 text-gray-600">
                  Access comprehensive crime statistics and community updates.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 rounded-lg p-3">
                  <AlertIcon />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Alert System
                </h3>
                <p className="mt-2 text-gray-600">
                  Receive instant notifications about incidents in your area.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 rounded-lg p-3">
                  <MessageIcon />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Community Forum
                </h3>
                <p className="mt-2 text-gray-600">
                  Engage with your community and share safety tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Join Our Community
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Be part of the change. Join SafeHood today and help make your
          community a safer place for everyone.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
