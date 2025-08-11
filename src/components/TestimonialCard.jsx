// src/components/TestimonialCard.jsx
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialCard({ name, text, image, rating, link, linkText, role }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-lg border border-gray-200 rounded-xl overflow-hidden bg-white">
        <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
          {image ? (
            <img
              src={image}
              alt={name}
              loading='lazy'
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <span className="text-3xl">👤</span>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            {role && <p className="text-sm text-gray-500">{role}</p>}
          </div>

          <p className="text-gray-600 text-sm">{text}</p>

          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                fill={i < rating ? "#2563eb" : "none"}
                stroke={i < rating ? "#2563eb" : "#d1d5db"}
              />
            ))}
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm hover:underline"
            >
              {linkText}
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
