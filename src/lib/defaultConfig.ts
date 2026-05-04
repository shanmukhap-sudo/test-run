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
    name: "RunOps AI",
    tagline: "WhatsApp-Based Automation Systems for Lead Management, Booking and Customer Communication",
    logoUrl: '/images/logo.png'
    favicon: "",
  },

  navigation: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],

  pages: {

    home: {
      heroTitle: "Automate Customer Communication on WhatsApp",
      heroSubtitle: "RunOps AI helps businesses manage leads, bookings, follow-ups and customer communication through structured WhatsApp automation systems.",
      heroButtonText: "Request Automation Plan",

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
          image: '/images/whatsapp-automation.jpg'
        },
        {
          label: 'CRM',
          title: 'Lead Management System',
          desc: 'Track and manage all leads with a structured pipeline.',
          image: '/images/lead-management.jpg'
        },
        {
          label: 'RE',
          title: 'Lead Reactivation',
          desc: 'Reconnect with old customers through automated messaging.',
          image: '/images/lead-reactivation.jpg'
        },
        {
          label: 'REV',
          title: 'Review Automation',
          desc: 'Collect customer feedback and improve online reputation.',
          image: '/images/review-automation.jpg'
        },
        {
          label: 'ADS',
          title: 'Ad Lead Automation',
          desc: 'Automatically respond and nurture leads from ads.',
          image: '/images/ad-automation.jpg'
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
      content: [
        {
          type: 'header',
          level: 2,
          text: 'Registered Details'
        },
        {
          type: 'list',
          items: [
            'Business Name: RunOps AI',
            'Owner: Shanmukha P',
            'Business Type: Proprietorship',
            'GST Number: (ADD VALID GST NUMBER)',
            'Country: India',
            'Phone: +91 9663383491',
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
            'Phone: +91 9663383491',
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
    phone: "+91 9663383491",
    email: "support@runops.in"
  }
};

export type SiteConfig = typeof DEFAULT_CONFIG;