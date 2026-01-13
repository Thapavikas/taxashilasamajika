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
          "The finalized People’s Bio-Diversity Register (PBR) is validated by the local Biodiversity Management Committee (BMC) and compiled in accordance with statutory biodiversity guidelines.",
          "The register serves as a vital reference document for conservation planning, environmental impact assessments, academic research, and sustainable development initiatives.",
          "It supports research activities and acts as an important source document for patent applications and policy decisions of the Indian Government, while safeguarding community knowledge and promoting equitable benefit-sharing."
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
      "/images/activities/orchids-2.jpeg",
      "/images/activities/orchids-6.jpeg",
      "/images/activities/orchids-7.jpeg",
      "/images/activities/orchids-8.jpeg",
      "/images/activities/orchids-9.jpeg",
      "/images/activities/orchids-10.jpeg",
      "/images/activities/orchids-12.jpeg",
      "/images/activities/orchids-13.jpeg",
      "/images/activities/orchids-14.jpeg",
      "/images/activities/orchids-15.jpeg",
      "/images/activities/orchids-16.jpeg",
    

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
          "We have been conducting Dyslexia Awareness Programs for the past four years for NCC cadets, MSW and Sociology students, and the general public.",
          "These programs promote social responsibility, community awareness, and active civic participation through interactive and practical learning approaches."
        ],
      },
      {
        title: "Awareness and Training",
        paragraphs: [
          "The sessions focus on identifying dyslexia, understanding learning differences, and building empathy toward children with learning challenges.",
          "Participants are introduced to inclusive education practices, appropriate classroom strategies, and positive behavioral approaches."
        ],
      },
      {
        title: "Support Strategies",
        points: [
          "Inclusive and child-centered teaching methodologies",
          "Empathy-building and stigma reduction practices",
          "Guidance on appropriate treatment and referral systems",
          "Promotion of dignity, respect, and non-punitive approaches for affected children"
        ],
      },
      {
        title: "Dyslexia Activities Outcomes",
        paragraphs: [
          "The awareness programs reached over 500 participants, where initial awareness about dyslexia was only 1%.",
          "The program significantly improved understanding of dyslexia, promoted empathy, and enhanced knowledge of appropriate treatment and inclusive teaching methods.",
          "Participants pledged to treat affected children with dignity and committed to avoiding shaming, verbal abuse, or physical punishment, resulting in positive behavioral and attitudinal changes."
        ],
      },
    ],
    
  },
  {
    id: "street-tree-taxonomy",
    title: "Street Tree Taxonomy",
    description:
      "Systematic documentation and classification of urban street trees to support biodiversity conservation and sustainable urban planning.",
    category: "Environment",
    image: "/images/activities/street-tree.jpeg",
    images: [
      "/images/activities/street-tree.jpeg",
      "/images/activities/street-tree-2.jpeg",
      "/images/activities/street-tree-3.jpeg",
      "/images/activities/street-tree-4.jpeg",
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "The Street Tree Taxonomy initiative, adopted from the BBMP Street Tree Taxonomy Project, is an urban biodiversity documentation effort aimed at systematically recording and classifying street trees within a defined geographical area.",
          "The initiative supports urban environmental conservation by creating an authentic record of tree species, their distribution, and ecological value, while contributing to informed planning and sustainable management of urban green spaces."
        ],
      },
      {
        title: "Field Surveys and Data Collection",
        paragraphs: [
          "Extensive field surveys are conducted along city streets, avenues, and public road networks to document street trees in a structured and scientific manner.",
          "The surveys focus on identifying tree species, recording scientific and common names, noting physical characteristics, assessing tree health, and capturing geographic coordinates in alignment with BBMP taxonomy standards."
        ],
      },
      {
        title: "Community and Stakeholder Participation",
        paragraphs: [
          "Community participation plays an important role in the documentation process. Local residents, students, environmental volunteers, and citizen groups contribute through field observations and data support activities.",
          "Participatory approaches such as on-site surveys, geo-tagging, collaborative data validation, and awareness interactions help ensure accuracy and inclusiveness in the documentation process."
        ],
      },
      {
        title: "Key Components",
        points: [
          "Identification, classification, and mapping of street tree species",
          "Documentation of tree health, canopy cover, and ecological benefits",
          "Alignment with BBMP street tree taxonomy and documentation standards",
          "Assessment of maintenance needs and environmental stress factors",
          "Compilation of structured and verifiable street tree records"
        ],
      },
      {
        title: "Outcomes and Impact",
        paragraphs: [
          "The compiled street tree records are reviewed and validated in accordance with BBMP guidelines and urban forestry best practices.",
          "The outcomes support tree conservation efforts, urban planning processes, environmental assessments, and long-term sustainability of urban green infrastructure."
        ],
      },
    ],
  },
  {
    id: "traditional-veterinary-practitioners",
    title: "Identification of Traditional Veterinary Practitioners with Skills",
    description:
      "Identification and documentation of traditional veterinary practitioners possessing indigenous knowledge and skills related to animal healthcare.",
    category: "Environment",
    image: "/images/activities/veterinary-2.jpeg",
    images: [
      "/images/activities/veterinary-1.jpeg",
      "/images/activities/veterinary-2.jpeg",
      "/images/activities/veterinary-3.jpeg",
      "/images/activities/veterinary-4.jpeg",
     
    ],
    sections: [
      {
        title: "Activity Highlights",
        paragraphs: [],
        points: [],
      },
    ],
  }
  
];

