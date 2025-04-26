import MainLayout from "../../components/layout/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-8 text-center">
            Contact Us
          </h1>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">
            Get in touch with our team of luxury real estate experts to discuss
            your requirements or schedule a viewing.
          </p>

          <div className="max-w-3xl mx-auto bg-background border border-border p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white transition-colors text-sm uppercase tracking-wider"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
