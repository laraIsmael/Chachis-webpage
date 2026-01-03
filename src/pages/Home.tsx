import React from "react";
import ServiceCard from "../components/ServiceCard";

const Home: React.FC = () => {
  return (
    <div className="bg-orange-50">
      {/* Hero / Intro Section */}
      <section className="bg-orange-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="src/utils/profile-photo.jpeg"
              alt="Holistic bodywork session"
              className="rounded-lg shadow-md w-full max-w-md object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h1 className="text-yellow-700 text-4xl font-bold mb-6">
              Holistic Bodywork & End-of-Life Support
            </h1>

            <p className="border-t border-teal-800 text-yellow-900 pt-6">
              Offering compassionate, trauma-informed care through massage
              therapy and end-of-life support. Each session is guided by
              presence, respect, and deep listening.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-orange-50 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-teal-900 text-3xl font-semibold mb-10 text-center">
          Services Offered
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard
            title="Death Doula Support"
            duration="Customized sessions"
            price="By consultation"
            description="Emotional, spiritual, and practical support for individuals and families navigating end-of-life transitions."
          />

          <ServiceCard
            title="Thai Massage"
            duration="60–90 minutes"
            price="$90–$130"
            description="A full-body, floor-based practice combining assisted stretching, acupressure, and mindful touch."
          />

          <ServiceCard
            title="Craniosacral Therapy"
            duration="60 minutes"
            price="$85"
            description="A gentle, hands-on technique that supports the nervous system and encourages deep relaxation and healing."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
