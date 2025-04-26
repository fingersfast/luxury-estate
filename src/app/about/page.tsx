import MainLayout from "../../components/layout/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-8 text-center">
            About LuxuryEstate
          </h1>
          <div className="max-w-3xl mx-auto text-muted">
            <p className="mb-6">
              LuxuryEstate is a premier real estate agency specializing in
              high-end properties for discerning clients. Founded with a passion
              for exceptional homes and unparalleled service, we have
              established ourselves as leaders in the luxury real estate market.
            </p>
            <p className="mb-6">
              Our team of experienced professionals is dedicated to finding the
              perfect property to match your lifestyle and investment goals.
              With deep local knowledge and global connections, we offer a
              personalized approach to every client relationship.
            </p>
            <p className="mb-6">
              At LuxuryEstate, we understand that purchasing a luxury property
              is more than just a transaction—it's about finding a home that
              reflects your unique taste and aspirations. That's why we
              carefully curate our portfolio to include only the most
              exceptional properties in the most desirable locations.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
