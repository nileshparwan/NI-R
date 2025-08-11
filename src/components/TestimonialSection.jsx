// src/components/TestimonialSection.jsx
import { useTranslation } from "react-i18next";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const { t } = useTranslation();

  // Get testimonials from translations
  const testimonials = t("testimonials", { returnObjects: true });

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t("testimonial_section.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              name={t.name}
              text={t.text}
              rating={t.rating || 5}
              link={t.link || "https://www.facebook.com/nirautomotive/reviews"}
              linkText={t.link_text || t.linkText || t.link_text}
              role={t.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
