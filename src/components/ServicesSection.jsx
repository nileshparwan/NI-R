import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Brush, CheckCircle2, Sparkles } from "lucide-react";
import { useAccordion } from "@/context";
import { useTranslation } from "react-i18next";
import CollisionRepair from '../assets/collisionRepair.jpeg';
import PaintingAndRestoration from '../assets/paintingAndRestoration.jpeg';
import MechanicalWork from '../assets/mechanicalWork.jpeg';
import MaintenanceAndServicing from '../assets/maintenanceAndServicing.jpeg';

const services = [
  {
    id: 1,
    titleKey: "services.collision.title",
    descriptionKey: "services.collision.description",
    icon: Brush,
    imageUrl: CollisionRepair,
  },
  {
    id: 2,
    titleKey: "services.painting.title",
    descriptionKey: "services.painting.description",
    icon: CheckCircle2,
    imageUrl: PaintingAndRestoration,
  },
  {
    id: 3,
    titleKey: "services.mechanical.title",
    descriptionKey: "services.mechanical.description",
    icon: Sparkles,
    imageUrl: MechanicalWork,
  },
  {
    id: 4,
    titleKey: "services.maintenance.title",
    descriptionKey: "services.maintenance.description",
    icon: Sparkles,
    imageUrl: MaintenanceAndServicing,
  },
];

export default function ServicesSection() {
  const { openItem, setOpenItem } = useAccordion();
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="bg-[#0B1C3F] text-white py-16 px-6 md:px-16 lg:px-32 mb-4"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight">
          {t("services.heading1")} <span className="text-[#F4C300]">{t("services.heading2")}</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#F4C300]/80">
          {t("services.description")}
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        value={openItem}
        className="space-y-4 max-w-7xl mx-auto"
        onValueChange={(val) => setOpenItem(val || "")}
      >
        {services.map(({ id, titleKey, descriptionKey, icon: Icon, imageUrl }) => (
          <AccordionItem
            key={id}
            value={`item-${id}`}
            className="border border-[#D62828]/50 rounded-xl bg-[#0F294D]"
          >
            <AccordionTrigger className="flex items-center gap-4 text-white text-xl font-semibold px-6 py-4 hover:bg-[#D62828]/20 rounded-xl">
              <div className="p-2 bg-[#D62828] rounded-full text-white inline-flex">
                <Icon className="w-6 h-6" />
              </div>
              {t(titleKey)}
            </AccordionTrigger>

            <AccordionContent className="px-6 py-4 text-[#F4C300]/90">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={imageUrl}
                  alt={t(titleKey)}
                  loading="lazy"
                  className="w-full max-w-sm rounded-lg shadow-lg object-cover"
                />
                <div>
                  <p>{t(descriptionKey)}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
