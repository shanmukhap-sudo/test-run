export interface ContentBlock {
  type: 'header' | 'paragraph' | 'list' | 'image' | 'quote';
  level?: 1 | 2 | 3;
  text?: string;
  items?: string[];
  url?: string;
  alt?: string;
}

export const DEFAULT_CONFIG = {
  company: {
    name: "Services",
    tagline: "WhatsApp automation for leads & bookings.",
    logoUrl: "https://storage.googleapis.com/runops-images/final1.png",
    favicon: "https://storage.googleapis.com/runops-images/final1.png",
    whatsappNumber: "919739202351",
  },

  assets: {
    heroBackground: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1600",
    workflowArchitecture: "https://images.pexels.com/photos/8086373/pexels-photo-8086373.jpeg",
    aboutAgency: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
  },

  navigation: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],

  pages: {
    services: {
      title: "Operational Engines",
      subtitle: "Turn technical complexity into operational autopilot with our specialized automation systems.",
      items: [
        {
          id: 'whatsapp',
          title: 'WhatsApp Automation',
          image: 'https://storage.googleapis.com/runops-images/whatsapp-automation.png',
          desc: 'Scale your communication without scaling your headcount.',
          problem: 'Businesses struggle to keep up with incoming WhatsApp inquiries, leading to slow response times and lost sales. Manual follow-ups are inconsistent and time-consuming.',
          how: [
            'Automated Greeting & Routing',
            'Smart Auto-Replies for FAQs',
            'Broadcast Marketing Campaigns',
            'CRM Integration for instant logging',
          ],
          benefits: ['100% response rate', 'Increase sales conversion', 'No manual data entry'],
        },
        {
          id: 'chatbots',
          title: 'AI Chatbots',
          image: 'https://storage.googleapis.com/runops-images/chatbot.png',
          desc: 'Intelligent agents that sound like your best sales rep.',
          problem: 'Traditional website bots are clunky and frustrate users. Customers want instant, accurate answers 24/7 without waiting for a human agent.',
          how: [
            'LLM-powered natural language conversation',
            'Knowledge base training on your data',
            'Instant lead qualification',
            'Seamless human hand-off for final closing',
          ],
          benefits: ['Reduce support tickets by 70%', 'Capture leads while you sleep', 'Consistent brand voice'],
        },
        {
          id: 'crm',
          title: 'CRM Systems',
          image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
          desc: 'Automated infrastructure for high-growth operations.',
          problem: 'Spreadsheets break and manual CRMs are rarely updated. Vital lead info falls through the cracks, and management has no real-time visibility.',
          how: [
            'Automated custom CRM architecture',
            'Real-time data synchronization across apps',
            'Trigger-based workflows and follow-ups',
            'Automated performance dashboards',
          ],
          benefits: ['Zero data loss', 'Better team accountability', 'Clear ROI tracking'],
        },
        {
          id: 'leadgen',
          title: 'Lead Generation Systems',
          image: 'https://storage.googleapis.com/runops-images/lead-management.png',
          desc: 'Predictable sales pipelines fueled by AI.',
          problem: 'Finding the right leads is expensive and inconsistent. Most outbound efforts are cold and untargeted, resulting in a low ROI.',
          how: [
            'AI-powered lead scraping and filtering',
            'Automated multi-channel outreach',
            'Smart personalization at scale',
            'Automated follow-up sequences',
          ],
          benefits: ['Consistent flow of qualified leads', 'Lower customer acquisition cost', 'Higher meeting book rate'],
        },
        {
          id: 'reviews',
          title: 'Review Automation',
          image: 'https://storage.googleapis.com/runops-images/google%20review-automation.png',
          desc: 'Social proof that works for you automatically.',
          problem: 'Happy customers forget to leave reviews, while unhappy ones are loud. Manual review gathering is awkward and often neglected.',
          how: [
            'Automated Email review requests after purchase',
            'Smart filtering to handle concerns privately',
            'Auto-posting of top reviews to social media',
            'Instant alerts for management on new feedback',
          ],
          benefits: ['Higher Google Ranking', 'Build instant trust', 'Protect brand reputation'],
        },
        {
          id: 'workflow',
          title: 'Workflow Architecture',
          image: 'https://images.pexels.com/photos/7605981/pexels-photo-7605981.jpeg',
          desc: 'Turn technical complexity into operational autopilot.',
          problem: 'Disjointed systems and manual data handling create invisible overhead. Most businesses lack a unified automation architecture to handle scale.',
          how: [
            'Logic Flow Engineering',
            'Cross-Platform Data Sync',
            'Error Handling & Fail-safes',
            'Real-time Audit Logs',
          ],
          benefits: ['Zero operational leakage', 'Infinite scalability', 'Real-time oversight'],
        },
      ]
    },

    home: {
      heroTitle: "Automate Customer Communication",
      heroSubtitle: "RunOps AI helps businesses manage leads, bookings, follow-ups and customer communication through structured WhatsApp automation systems.",
      heroButtonText: "Request Automation Plan",
      heroImage: "https://images.pexels.com/photos/4132538/pexels-photo-4132538.jpeg",
      
      nextPhase: {
        title: "Next Phase Initiation",
        subtitle: "Ready to put your business on Autopilot?",
        desc: "Join dozens of forward-thinking businesses scaling with RunOps AI. Book your strategy session today.",
        metrics: [
          { label: "Implementation", value: "1 week" },
          { label: "Avg. ROI", value: "90%" },
          { label: "Support", value: "24/7 Node" }
        ]
      },

      steps: [
        {
          num: '01',
          title: 'Process Audit & Requirement Mapping',
          desc: 'We analyze your current lead flow, response handling, booking process and follow-up gaps to identify where automation is required.'
        },
        {
          num: '02',
          title: 'System Setup & Integration',
          desc: 'We configure WhatsApp Business API, CRM workflows, automation flows, lead tracking and follow-up systems tailored to your business.'
        },
        {
          num: '03',
          title: 'Deployment & Monitoring',
          desc: 'Your system goes live within 3–7 days. We monitor and optimize performance continuously.'
        }
      ],

      services: [
        {
          label: 'WA',
          title: 'WhatsApp Business Automation',
          desc: 'Automated replies, booking flows and customer communication using WhatsApp.',
          image: 'https://images.pexels.com/photos/16349338/pexels-photo-16349338.jpeg'
        },
        {
          label: 'CRM',
          title: 'Lead Management System',
          desc: 'Track and manage all leads with a structured pipeline.',
          image: 'https://images.pexels.com/photos/34968182/pexels-photo-34968182.jpeg'
        },
        {
          label: 'RE',
          title: 'Lead Reactivation',
          desc: 'Reconnect with old customers through automated messaging.',
          image: 'https://images.pexels.com/photos/6214835/pexels-photo-6214835.jpeg'
        },
        {
          label: 'REV',
          title: 'Review Automation',
          desc: 'Collect customer feedback and improve online reputation.',
          image: 'https://storage.googleapis.com/runops-images/google%20review-automation.png'
        },
        {
          label: 'ADS',
          title: 'Lead Generation Systems',
          desc: 'Predictable sales pipelines fueled by AI.',
          image: 'https://images.pexels.com/photos/5356230/pexels-photo-5356230.jpeg'
        }
      ],

      extraContent: [
        {
          type: 'header',
          level: 2,
          text: 'Operational Problems We Solve'
        },
        {
          type: 'list',
          items: [
            'Missed or delayed responses to customer inquiries',
            'Leads not properly tracked or followed up',
            'Low conversion from ads',
            'Manual workload for repetitive tasks',
            'Lack of structured communication system'
          ]
        },
        {
          type: 'header',
          level: 2,
          text: 'System Capabilities'
        },
        {
          type: 'list',
          items: [
            '24/7 WhatsApp auto-replies',
            'Lead capture and tracking',
            'Automated follow-ups and reminders',
            'Booking automation',
            'Customer feedback and review collection'
          ]
        }
      ]
    },

    about: {
      title: "Business Information",
      subtitle: "Official business identity and operational details.",
      heroImage: "https://images.pexels.com/photos/8512133/pexels-photo-8512133.jpeg",
      content: [
        {
          type: 'header',
          level: 2,
          text: 'Registered Details'
        },
        {
          type: 'list',
          items: [
            'Business Name: RunOps Services',
            'Owner: Shanmukha P',
            'Business Type: Proprietorship',
            'GST Number: 29ARHPP7007J1ZE',
            'Country: India',
            'Phone: +91 9739202351',
            'Email: support@runops.in'
          ]
        },
        {
          type: 'header',
          level: 2,
          text: 'Nature of Service'
        },
        {
          type: 'paragraph',
          text: 'RunOps AI provides WhatsApp-based automation systems to help businesses manage customer communication, leads, bookings and follow-ups efficiently.'
        }
      ]
    },

    contact: {
      title: "Contact & Support",
      subtitle: "Reach out for automation setup or support.",
      extraContent: [
        {
          type: 'list',
          items: [
            'Phone: +91 9739202351',
            'Email: support@runops.in',
            'WhatsApp: Available on request',
            'Support response time: Within 24 hours'
          ]
        },
        {
          type: 'paragraph',
          text: 'For data-related requests, contact: support@runops.in'
        }
      ]
    },

    privacy: {
      title: "Privacy Policy",
      content: [

        {
          type: 'header',
          level: 2,
          text: '1. Information We Collect'
        },
        {
          type: 'list',
          items: [
            'Customer contact details (name, phone number)',
            'Messages exchanged via WhatsApp',
            'Lead and interaction data',
            'Automation workflow data',
            'System logs'
          ]
        },

        {
          type: 'header',
          level: 2,
          text: '2. Purpose of Data Usage'
        },
        {
          type: 'list',
          items: [
            'Automate communication',
            'Manage leads and bookings',
            'Send notifications and follow-ups',
            'Improve system performance',
            'Provide support'
          ]
        },

        {
          type: 'header',
          level: 2,
          text: '3. User Consent & Opt-In'
        },
        {
          type: 'paragraph',
          text: 'Messages are sent only to users who have explicitly opted in through forms, ads, QR scans or direct interaction.'
        },

        {
          type: 'header',
          level: 2,
          text: '4. Opt-Out Mechanism'
        },
        {
          type: 'paragraph',
          text: 'Users can stop receiving messages anytime by replying STOP or contacting the business directly.'
        },

        {
          type: 'header',
          level: 2,
          text: '5. Data Storage & Security'
        },
        {
          type: 'paragraph',
          text: 'Data is stored securely and access is restricted to authorized personnel only.'
        },

        {
          type: 'header',
          level: 2,
          text: '6. Data Sharing'
        },
        {
          type: 'paragraph',
          text: 'Data is not sold. It may be processed through service providers required for system functionality.'
        },

        {
          type: 'header',
          level: 2,
          text: '7. Data Retention'
        },
        {
          type: 'paragraph',
          text: 'Data is retained only as long as required for service delivery.'
        },

        {
          type: 'header',
          level: 2,
          text: '8. Data Controller Role'
        },
        {
          type: 'paragraph',
          text: 'RunOps AI acts as a service provider. The client business is responsible for how customer data is collected and used.'
        }
      ]
    },

    terms: {
      title: "Terms of Service",
      content: [

        {
          type: 'header',
          level: 2,
          text: '1. Service Scope'
        },
        {
          type: 'paragraph',
          text: 'RunOps AI provides automation setup and support for WhatsApp-based workflows.'
        },

        {
          type: 'header',
          level: 2,
          text: '2. Setup Charges'
        },
        {
          type: 'paragraph',
          text: 'One-time setup charges are non-refundable once work begins.'
        },

        {
          type: 'header',
          level: 2,
          text: '3. Subscription Refund Policy'
        },
        {
          type: 'paragraph',
          text: 'If cancelled within 15 days, subscription fee is fully refundable. Setup charges are excluded.'
        },

        {
          type: 'header',
          level: 2,
          text: '4. Customer Responsibilities'
        },
        {
          type: 'list',
          items: [
            'Provide accurate information',
            'Use system legally',
            'Avoid spam or misuse'
          ]
        },

        {
          type: 'header',
          level: 2,
          text: '5. WhatsApp Compliance'
        },
        {
          type: 'paragraph',
          text: 'Usage must comply with WhatsApp Business policies.'
        },

        {
          type: 'header',
          level: 2,
          text: '6. Prohibited Usage'
        },
        {
          type: 'list',
          items: [
            'Spam messaging',
            'Fraud or misuse',
            'Policy violations'
          ]
        },

        {
          type: 'header',
          level: 2,
          text: '7. Limitation of Liability'
        },
        {
          type: 'paragraph',
          text: 'RunOps AI is not responsible for losses due to misuse or external factors.'
        }
      ]
    },

    compliance: {
      title: "Data Deletion Policy",
      introduction: "Process for requesting and executing data deletion.",
      sections: [
        {
          title: '01. Scope',
          content: 'Includes all stored customer and system data.'
        },
        {
          title: '02. Request',
          content: 'Send request to support@runops.in with verification details.'
        },
        {
          title: '03. Verification',
          content: 'Requests are verified before processing.'
        },
        {
          title: '04. Timeline',
          content: 'Deletion completed within 7 working days.'
        },
        {
          title: '05. Completion',
          content: 'Data permanently removed from systems.'
        }
      ]
    }
  },

  footer: {
    address: "India",
    phone: "+91 9739202351",
    email: "support@runops.in"
  }
};

export type SiteConfig = typeof DEFAULT_CONFIG;
