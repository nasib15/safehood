import {
  DangerIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
} from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="py-28">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground max-w-prose mx-auto w-11/12">
          Have questions or concerns? We&apos;re here to help. Reach out to our
          team through any of the channels below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-card border rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <select
                  id="subject"
                  className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a subject</option>
                  <option value="report">Report an Issue</option>
                  <option value="feedback">Feedback</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <div className="bg-destructive/10 border-destructive border rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <DangerIcon />
                <h3 className="text-lg font-semibold text-destructive">
                  Emergency Contact
                </h3>
              </div>
              <p className="text-destructive/80">
                For immediate assistance in case of emergency, please call:
              </p>
              <p className="text-4xl font-bold mt-2 text-destructive">999</p>
              <p className="text-sm text-destructive/70 mt-1">
                Available 24/7 for emergency situations only
              </p>
            </div>

            {/* Office Information */}
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Office Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapIcon />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground mt-1">
                      123 Safety Street
                      <br />
                      Dhaka, Bangladesh 1000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MailIcon />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground mt-1">
                      support@CrimeEye.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground mt-1">
                      +880 1234-567890
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Operating Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-destructive font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
