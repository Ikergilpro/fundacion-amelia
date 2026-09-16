import type { GrowthModality } from "@/types/content";

export const growthModelEn: GrowthModality[] = [
  {
    title: "Our own services",
    description: "Actions that AMELIA coordinates and offers directly.",
    examples: [
      "Guidance",
      "Workshops",
      "Family accompaniment",
      "Communication",
      "Training",
    ],
    icon: "home",
  },
  {
    title: "Programs in partnership",
    description:
      "Initiatives that grow alongside existing institutions and spaces.",
    examples: [
      "Sport",
      "Teacher training",
      "Research",
      "Universities",
    ],
    icon: "handshake",
  },
  {
    title: "Referral network",
    description:
      "Specialties that are coordinated when the family needs them.",
    examples: [
      "Neurology",
      "Psychiatry",
      "Psychology",
      "Nutrition",
      "Occupational therapy",
      "Complementary specialties",
    ],
    icon: "route",
  },
];
