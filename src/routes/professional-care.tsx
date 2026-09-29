import { createFileRoute } from "@tanstack/react-router";

import { ProfessionalCareLanding } from "@/professional-care/ProfessionalCareLanding";

export const Route = createFileRoute("/professional-care")({
  head: () => ({
    meta: [
      { title: "Skin & Hair Care for Professionals, Teachers and Students | Sanjay Rithik Hospital" },
      {
        name: "description",
        content:
          "Dermatologist-led acne, pigmentation, hair fall, scars, open pores, skin glow and anti-ageing care for busy professionals, teachers and students in Karur.",
      },
      {
        property: "og:title",
        content: "Skin & Hair Care for Busy Weekdays | Sanjay Rithik Hospital",
      },
      {
        property: "og:description",
        content:
          "Explore consultation-led dermatology and laser care pathways designed for working professionals, teachers and students.",
      },
    ],
  }),
  component: ProfessionalCareLanding,
});
