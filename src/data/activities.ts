export type Category = "Environment" | "Health" | "Education";

export type Activity = {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;      // thumbnail (card image)
  images: string[];   // gallery images (details page)
  category: Category;
};

export const activities: Activity[] = [
  {
    id: "pbr",
    date: "18-May-2020",
    title: "Preparation of People’s Bio-Diversity Register (PBR)",
    description:
      "Survey and documentation of biodiversity zones including flora, fauna, and local natural resources with community participation.",
    image: "/src/assets/images/activities/activity-1.jpg",
    images: [
      "/src/assets/images/activities/activity-1.jpg",
      "/src/assets/images/activities/activity-1-2.jpg",
      "/src/assets/images/activities/activity-1-3.jpg",
    ],
    category: "Environment",
  },
  {
    id: "ayush-yoga",
    date: "29-Feb-2020",
    title: "National AYUSH Mission – Yoga Training for School Teachers",
    description:
      "Yoga training programs for teachers and students to promote physical and mental well-being in schools.",
    image: "/src/assets/images/activities/activity-2.jpg",
    images: [
      "/src/assets/images/activities/activity-2.jpg",
      "/src/assets/images/activities/activity-2-2.jpg",
    ],
    category: "Health",
  },
  {
    id: "ayush-health-camp",
    date: "07-Feb-2020",
    title: "Free AYUSH Health Checkup & Therapeutics Camp",
    description:
      "Health checkups and free medicines provided to people of all age groups through AYUSH medical practices.",
    image: "/src/assets/images/activities/activity-3.jpg",
    images: [
      "/src/assets/images/activities/activity-3.jpg",
      "/src/assets/images/activities/activity-3-2.jpg",
    ],
    category: "Health",
  },
  {
    id: "orchids",
    date: "01-Apr-2024",
    title: "Diversity, Cultural Values & Conservation of Wild Orchids",
    description:
      "Documentation of wild orchid diversity in Kodagu, their cultural significance, threats, and conservation strategies.",
    image: "/src/assets/images/activities/activity-orchids.jpg",
    images: [
      "/src/assets/images/activities/activity-orchids.jpg",
      "/src/assets/images/activities/orchid-2.jpg",
      "/src/assets/images/activities/orchid-3.jpg",
    ],
    category: "Environment",
  },
  {
    id: "ayush-gadag",
    date: "23-Jan-2022",
    title: "AYUSH Seva Gram – Gadag District",
    description:
      "Implementation of AYUSH Seva Gram scheme across multiple taluks focusing on community healthcare.",
    image: "/src/assets/images/activities/activity-ayush-gadag.jpg",
    images: [
      "/src/assets/images/activities/activity-ayush-gadag.jpg",
      "/src/assets/images/activities/activity-ayush-gadag-2.jpg",
    ],
    category: "Health",
  },
  {
    id: "ayush-bagalkot",
    date: "26-Dec-2022",
    title: "AYUSH Seva Gram – Bagalkot District",
    description:
      "Healthcare outreach under AYUSH Seva Gram program covering villages across Bagalkot district.",
    image: "/src/assets/images/activities/activity-ayush-bagalkot.jpg",
    images: [
      "/src/assets/images/activities/activity-ayush-bagalkot.jpg",
      "/src/assets/images/activities/activity-ayush-bagalkot-2.jpg",
    ],
    category: "Health",
  },
  {
    id: "dyslexia",
    date: "08-Mar-2023",
    title: "Dyslexia Awareness Program",
    description:
      "Awareness program on Dyslexia covering identification, support strategies, and government schemes.",
    image: "/src/assets/images/activities/activity-dyslexia.jpg",
    images: [
      "/src/assets/images/activities/activity-dyslexia.jpg",
      "/src/assets/images/activities/activity-dyslexia-2.jpg",
    ],
    category: "Education",
  },
];
