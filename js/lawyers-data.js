// Centralized Lawyer Photo Database
const lawyersData = {
    frankfurt: [
        {
            name: "Dr. Andrea Hoffmann",
            photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_banking"
        },
        {
            name: "Michael Becker",
            photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_merger"
        },
        {
            name: "Julia Richter",
            photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_compliance"
        }
    ],
    munich: [
        {
            name: "Dr. Klaus Müller",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_criminal_specialist",
            specialText: "Fachanwalt für Strafrecht" // Fallback for non-English
        },
        {
            name: "Dr. Sabine Weber",
            photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_corporate"
        },
        {
            name: "Thomas Schneider",
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_tax"
        }
    ],
    berlin: [
        {
            name: "Alexander Falkenstein",
            photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_criminal_specialist",
            specialText: "Fachanwalt für Strafrecht" // Fallback for non-English
        },
        {
            name: "Dr. Nina Hartmann",
            photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_ip"
        },
        {
            name: "Stefan Berger",
            photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_merger"
        }
    ],
    istanbul: [
        {
            name: "Mehmet Yılmaz",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_international"
        },
        {
            name: "Ayşe Demir",
            photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_real_estate"
        },
        {
            name: "Can Özdemir",
            photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_corporate"
        }
    ],
    paris: [
        {
            name: "Sophie Dubois",
            photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_ip"
        },
        {
            name: "Pierre Martin",
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_litigation"
        },
        {
            name: "Marie Lefebvre",
            photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_labor"
        }
    ],
    london: [
        {
            name: "James Thompson",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_banking"
        },
        {
            name: "Victoria Clarke",
            photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_litigation"
        },
        {
            name: "Oliver Bennett",
            photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_tax"
        }
    ],
    hongkong: [
        {
            name: "Li Wei",
            photo: "https://images.unsplash.com/photo-1598550487031-0d6eaf2d4c0b?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_merger"
        },
        {
            name: "Chen Zhang",
            photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_international"
        },
        {
            name: "Wang Mei",
            photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_ip"
        }
    ],
    newyork: [
        {
            name: "Robert Mitchell",
            photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_corporate"
        },
        {
            name: "Sarah Williams",
            photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_real_estate"
        },
        {
            name: "David Anderson",
            photo: "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_compliance"
        }
    ],
    bogota: [
        {
            name: "Carlos Rodríguez",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_labor"
        },
        {
            name: "María González",
            photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_family"
        },
        {
            name: "Luis Martínez",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_criminal"
        }
    ],
    barcelona: [
        {
            name: "Isabel Ramírez",
            photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_corporate"
        },
        {
            name: "Antonio Serrano",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_real_estate"
        },
        {
            name: "Carmen Vega",
            photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_litigation"
        }
    ],
    mexicocity: [
        {
            name: "Diego Hernández",
            photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_banking"
        },
        {
            name: "Sofía Morales",
            photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_compliance"
        },
        {
            name: "Roberto Castillo",
            photo: "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_tax"
        }
    ],
    moscow: [
        {
            name: "Dmitry Volkov",
            photo: "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_banking"
        },
        {
            name: "Olga Petrova",
            photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_litigation"
        },
        {
            name: "Ivan Sokolov",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop&q=80",
            specialization: "spec_tax"
        }
    ]
};
