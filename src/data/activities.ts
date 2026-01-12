export type Category = "Environment" | "Health" | "Education";

export type ActivitySection = {
  title: string;
  paragraphs?: string[];
  points?: string[];
};

export type Activity = {
  id: string;
  title: string;
  description: string;
  sections: ActivitySection[];
  image: string;
  images: string[];
  category: Category;
};


export const activities: Activity[] = [
  {
    id: "pbr",
    title: "Preparation of People’s Bio-Diversity Register (PBR)",
    description:
      "Survey and documentation of biodiversity zones including flora, fauna, and local natural resources with community participation.",
    category: "Environment",
    image: "/images/activities/activity-1.jpeg",
    images: [
      "/images/activities/activity-1.jpeg",
      "/images/activities/activity-1-1.jpeg",
      "/images/activities/activity-1-2.jpeg",
      "/images/activities/activity-1-3.jpeg",
      "/images/activities/activity-1-4.jpeg",
      "/images/activities/activity-1-5.jpeg",
      "/images/activities/activity-1-6.jpeg",
      "/images/activities/activity-1-7.jpeg",
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "The Preparation of the People’s Bio-Diversity Register (PBR) is a legally mandated, community-centric initiative under the Biological Diversity Act, 2002, aimed at systematically documenting the biological resources and associated traditional knowledge of a specific geographical area.",
          "The initiative plays a critical role in biodiversity conservation by creating an authentic record of local flora, fauna, microorganisms, and agrobiodiversity, while ensuring the recognition and protection of indigenous and community-held knowledge systems.",
          "By involving local stakeholders directly, the PBR process strengthens grassroots environmental governance and promotes sustainable use of biological resources."
        ],
      },
      {
        title: "Field Surveys and Documentation",
        paragraphs: [
          "Extensive field surveys are conducted across diverse ecosystems including forests, agricultural lands, wetlands, rivers, grazing areas, and village commons to comprehensively document biological diversity.",
          "The surveys focus on identifying plant species, animal life, microbial diversity, traditional crop varieties, medicinal plants, and economically significant biological resources.",
          "Data collection follows standardized formats prescribed by the National Biodiversity Authority (NBA) to ensure accuracy, consistency, and long-term usability."
        ],
      },
      {
        title: "Community Participation",
        paragraphs: [
          "Community participation forms the backbone of the PBR preparation process. Local farmers, fisherfolk, traditional healers, elders, women self-help groups, and youth actively contribute their knowledge and observations.",
          "Participatory methods such as village meetings, household surveys, focus group discussions, biodiversity mapping exercises, and seasonal calendars are employed to capture both scientific and experiential knowledge."
        ],
      },
      {
        title: "Key Components",
        points: [
          "Identification and mapping of biodiversity-rich and ecologically sensitive zones",
          "Documentation of seasonal and climatic variations in biodiversity",
          "Recording traditional practices related to conservation, agriculture, and sustainable resource use",
          "Assessment of threats such as deforestation, pollution, climate change, and habitat degradation"
        ],
      },
      {
        title: "Outcomes and Impact",
        paragraphs: [
          "The finalized PBR is validated by the local Biodiversity Management Committee (BMC) and compiled in accordance with NBA and State Biodiversity Board guidelines.",
          "The register serves as a vital reference document for conservation planning, environmental impact assessments, and sustainable development initiatives.",
          "It also safeguards community intellectual property rights and supports equitable benefit-sharing mechanisms."
        ],
      },
    ]
    
  },

  {
    id: "ayush-yoga",
    title: "National AYUSH Mission – Yoga Training for School Teachers",
    description:
      "Yoga training programs for teachers and students to promote physical and mental well-being in schools.",
    category: "Health",
    image: "/images/activities/activity-2.jpeg",
    images: [
      "/images/activities/activity-2.jpeg",
      "/images/activities/activity-2-2.jpeg",
      "/images/activities/activity-2-3.jpeg",
      "/images/activities/activity-2-4.jpeg",
      "/images/activities/activity-2-5.jpeg",
    ],
    sections: [
      {
        title: "Program Overview",
        paragraphs: [
          "The National AYUSH Mission – Yoga Training Program aims to integrate yoga and holistic wellness practices into the school education system to promote physical, mental, and emotional well-being.",
          "The program focuses on capacity building of school teachers, enabling them to act as wellness facilitators and ensure the long-term sustainability of yoga practices within educational institutions."
        ],
      },
      {
        title: "Training Components",
        paragraphs: [
          "Certified yoga instructors conduct structured and systematic training sessions for teachers, covering yogasanas, pranayama, meditation, relaxation techniques, and yogic lifestyle principles.",
          "The curriculum is designed to be age-appropriate, inclusive, and adaptable, enabling teachers to effectively guide students across different age groups."
        ],
      },
      {
        title: "Health and Wellness Focus",
        points: [
          "Stress reduction and improved mental well-being",
          "Enhanced physical fitness, flexibility, and posture",
          "Improved concentration, memory, and academic performance",
          "Promotion of emotional balance and healthy lifestyle habits"
        ],
      },
      {
        title: "Impact",
        paragraphs: [
          "The program contributes to healthier school environments by fostering mindfulness, discipline, and emotional resilience.",
          "It instills lifelong wellness habits among teachers and students, supporting preventive healthcare and overall quality of life."
        ],
      },
      
    ],
  },

  {
    id: "ayush-gadag",
    title: "AYUSH Seva Gram",
    description:
      "Health checkups and free medicines provided to people of all age groups through AYUSH medical practices.",
    category: "Health",
    image: "/images/activities/activity-3.jpg",
    images: [
      "/images/activities/activity-3.jpg",
      "/images/activities/activity-3-2.jpg",
      "/images/activities/activity-3-3.jpg",
      "/images/activities/activity-3-4.jpg",
      "/images/activities/activity-3-5.jpg",
      "/images/activities/activity-3-6.jpg",
      "/images/activities/activity-3-7.jpeg",
      "/images/activities/activity-3-8.jpeg",
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "AYUSH Seva Gram is a community-based healthcare initiative designed to deliver accessible, affordable, and holistic medical services in rural and underserved areas.",
          "The program emphasizes preventive healthcare and the promotion of traditional systems of medicine including Ayurveda, Yoga, Unani, Siddha, and Homeopathy."
        ],
      },
      {
        title: "Medical Services",
        paragraphs: [
          "Qualified AYUSH medical practitioners conduct regular health camps providing diagnosis, consultation, treatment, and free distribution of medicines.",
          "The services cater to people of all age groups and address common ailments, chronic conditions, and lifestyle-related disorders."
        ],
      },
      {
        title: "Preventive Healthcare",
        points: [
          "Health education on balanced diet and daily routines",
          "Promotion of yoga, pranayama, and natural remedies",
          "Lifestyle modification counseling for long-term wellness"
        ],
      },
      {
        title: "Community Impact",
        paragraphs: [
          "The initiative reduces dependency on expensive medical treatments and strengthens primary healthcare delivery in rural areas.",
          "It enhances community awareness about preventive health practices and improves overall well-being through holistic approaches."
        ],
      },
      
    ],
  },

  {
    id: "orchids",
    title: "Diversity, Cultural Values & Conservation of Wild Orchids",
    description:
      "Documentation of wild orchid diversity, cultural significance, and conservation strategies.",
    category: "Environment",
    image: "/images/activities/orchids.jpeg",
    images: [
      "/images/activities/orchids.jpeg",
      "/images/activities/orchids-2.jpeg",
      "/images/activities/orchids-3.jpeg",
      "/images/activities/orchids-4.jpeg",
      "/images/activities/orchids-5.jpeg",
      "/images/activities/orchids-6.jpeg",
      "/images/activities/orchids-7.jpeg",
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This initiative focuses on documenting the diversity, ecological significance, and cultural values associated with wild orchid species in the Kodagu region.",
          "Wild orchids serve as indicators of forest health and play a vital role in maintaining ecological balance."
        ],
      },
      {
        title: "Research and Documentation",
        paragraphs: [
          "Detailed field surveys are conducted to identify orchid species, their habitats, flowering periods, pollination mechanisms, and ecological interactions.",
          "Scientific documentation is complemented with photographic records and habitat assessments."
        ],
      },
      {
        title: "Cultural Significance",
        paragraphs: [
          "Traditional knowledge related to orchids, including their use in indigenous medicine, rituals, and folklore, is documented through community interactions.",
          "This helps preserve cultural heritage associated with biodiversity."
        ],
      },
      {
        title: "Conservation Focus",
        points: [
          "Assessment of threats such as habitat loss, climate change, and over-exploitation",
          "Community awareness and conservation planning initiatives",
          "Promotion of sustainable forest management practices"
        ],
      },
      
    ],
  },

  {
    id: "dyslexia",
    title: "Dyslexia Awareness Program",
    description:
      "Awareness program focusing on identification, inclusive education, and support strategies for dyslexia.",
    category: "Education",
    image: "/images/activities/activity-dyslexia.jpg",
    images: [
      "/images/activities/activity-dyslexia.jpg",
      "/images/activities/activity-dyslexia-2.jpg",
      "/images/activities/activity-dyslexia-3.jpg",
      "/images/activities/activity-dyslexia-4.jpg",
      "/images/activities/activity-dyslexia-5.jpg",
      "/images/activities/activity-dyslexia-6.jpg",
      "/images/activities/activity-dyslexia-7.jpg",
    ],
    sections: [
      {
        title: "Program Overview",
        paragraphs: [
          "The Dyslexia Awareness Program aims to promote early identification and appropriate support for children with learning difficulties.",
          "The initiative focuses on reducing stigma and improving understanding of dyslexia among educators, parents, and school administrators."
        ],
      },
      {
        title: "Awareness and Training",
        paragraphs: [
          "Training sessions are conducted to help teachers and parents recognize early signs of dyslexia and other learning differences.",
          "The program emphasizes inclusive teaching methodologies and classroom adaptations."
        ],
      },
      {
        title: "Support Strategies",
        points: [
          "Inclusive and child-centered classroom practices",
          "Parental guidance and home-based learning support",
          "Access to government schemes, assessments, and special education resources"
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "The program fosters inclusive educational environments and empowers schools to support children with dyslexia effectively.",
          "It contributes to improved academic confidence, emotional well-being, and long-term educational outcomes."
        ],
      },
      
    ],
  },
];

