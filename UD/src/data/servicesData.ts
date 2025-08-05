import { Monitor, Megaphone, Users, Headphones, BarChart3, FileText } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface ServiceData {
  id: string
  slug: string
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  extendedDescription: string
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  caseStudy?: {
    title: string
    description: string
    results: string[]
  }
  pricing?: {
    starter: string
    professional: string
    enterprise: string
  }
}

export const servicesData: ServiceData[] = [
 {
  id: '1',
  slug: 'software-services',
  title: 'Software Services',
  description: 'Tailored software solutions designed to accelerate digital transformation, improve system performance, and streamline business operations.',
  features: [
  'Custom Software Development',
  'Cloud-Native Application Development',   
  'Enterprise System Integration',
  'Full-Stack Development (MERN & More)',   
  'Application Modernization',
  'Scalable API Development'
],
icon: Monitor,
  extendedDescription: 'Our Software Services team delivers end-to-end software development and modernization solutions that empower businesses to innovate rapidly and operate efficiently. We focus on building secure, scalable, and future-ready systems using the latest technologies and development practices.',
  benefits: [
    'Accelerated time-to-market for digital products',
    'Reduced technical debt and legacy maintenance costs',
    'Improved scalability and performance of core applications',
    'Seamless integration with third-party platforms and tools',
    'Robust security baked into the development lifecycle',
    '24/7 application monitoring and support services'
  ],
  process: [
    {
      title: 'Requirements Discovery',
      description: 'Collaborative workshops to identify business goals, user needs, and technical requirements for software development.'
    },
    {
      title: 'Solution Architecture',
      description: 'Design of scalable, maintainable, and secure software systems tailored to your organization’s specific needs.'
    },
    {
      title: 'Agile Development & Testing',
      description: 'Iterative development using modern frameworks, continuous integration, and automated testing for faster delivery.'
    },
    {
      title: 'Deployment & Support',
      description: 'Managed deployment pipelines, monitoring, and ongoing support to ensure system stability and business continuity.'
    }
  ],
  caseStudy: {
    title: 'Logistics Platform Rebuild for Supply Chain Optimization',
    description: 'Redeveloped a logistics tracking platform for a national supply chain company, integrating real-time data and automating key workflows.',
    results: [
      '50% reduction in manual operations through automation',
      'Improved delivery accuracy with real-time updates',
      '2x faster system performance under load',
      'Streamlined integration with partners via APIs'
    ]
  }
},

  {
    id: '2',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that drive engagement, increase brand visibility, and generate qualified leads.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Advertising',
      'Social Media Management',
      'Content Marketing Strategy',
      'Email Marketing Campaigns',
      'Analytics & Performance Tracking'
    ],
    icon: Megaphone,
    extendedDescription: 'Our Digital Marketing team crafts data-driven strategies that amplify your brand presence across all digital channels. From SEO optimization to social media management, we help businesses connect with their target audience and drive measurable growth.',
    benefits: [
      'Increased online visibility and brand awareness',
      'Higher quality lead generation',
      'Improved conversion rates and ROI',
      'Enhanced customer engagement',
      'Comprehensive analytics and reporting',
      'Multi-channel marketing coordination'
    ],
    process: [
      {
        title: 'Market Research & Analysis',
        description: 'In-depth analysis of your market, competitors, and target audience to identify opportunities.'
      },
      {
        title: 'Strategy Development',
        description: 'Creation of comprehensive digital marketing strategy tailored to your business goals.'
      },
      {
        title: 'Campaign Execution',
        description: 'Implementation of multi-channel campaigns with continuous optimization for best results.'
      },
      {
        title: 'Performance Monitoring',
        description: 'Regular tracking, analysis, and reporting of campaign performance with actionable insights.'
      }
    ],
    caseStudy: {
      title: 'E-commerce Brand Growth Campaign',
      description: 'Executed comprehensive digital marketing strategy for an emerging e-commerce brand.',
      results: [
        '300% increase in organic traffic',
        '250% improvement in conversion rate',
        '400% growth in social media engagement',
        '$2M+ in additional revenue generated'
      ]
    }
  },
  {
    id: '3',
    slug: 'hr-recruitment',
    title: 'HR & Recruitment',
    description: 'Professional human resource solutions to help you attract, retain, and develop top talent for your organization.',
    features: [
      'Executive Search & Recruitment',
      'Talent Acquisition Strategy',
      'HR Policy Development',
      'Employee Training Programs',
      'Performance Management Systems',
      'Compensation & Benefits Consulting'
    ],
    icon: Users,
    extendedDescription: 'Our HR & Recruitment services provide comprehensive human capital solutions that help organizations build high-performing teams. We specialize in executive search, talent development, and HR strategy consulting to drive organizational success.',
    benefits: [
      'Access to top-tier talent pool',
      'Reduced time-to-hire by 50%',
      'Improved employee retention rates',
      'Enhanced organizational culture',
      'Compliance with employment regulations',
      'Strategic HR planning and development'
    ],
    process: [
      {
        title: 'Needs Assessment',
        description: 'Understanding your organizational structure, culture, and specific talent requirements.'
      },
      {
        title: 'Talent Sourcing',
        description: 'Leveraging our extensive network and advanced sourcing techniques to identify candidates.'
      },
      {
        title: 'Screening & Selection',
        description: 'Comprehensive evaluation process including interviews, assessments, and background checks.'
      },
      {
        title: 'Onboarding Support',
        description: 'Assistance with integration and ongoing talent development programs.'
      }
    ],
    caseStudy: {
      title: 'Tech Startup Team Building',
      description: 'Helped a fast-growing tech startup build their leadership team and scale their workforce.',
      results: [
        'Filled 15 key positions in 3 months',
        '95% candidate satisfaction rate',
        '85% retention rate after 12 months',
        'Reduced recruitment costs by 30%'
      ]
    }
  },
  {
    id: '4',
    slug: 'customer-support',
    title: 'Customer Support',
    description: 'World-class customer service solutions that enhance customer satisfaction and build lasting relationships.',
    features: [
      '24/7 Multi-channel Support',
      'Live Chat & Phone Support',
      'Help Desk Management',
      'Customer Success Programs',
      'Quality Assurance & Training',
      'CRM Integration & Management'
    ],
    icon: Headphones,
    extendedDescription: 'Our Customer Support solutions deliver exceptional service experiences that build lasting customer relationships. We provide comprehensive support infrastructure, from 24/7 helpdesk operations to customer success programs that drive retention and growth.',
    benefits: [
      'Improved customer satisfaction scores',
      'Reduced response and resolution times',
      'Increased customer retention rates',
      'Enhanced brand reputation',
      'Scalable support operations',
      'Comprehensive analytics and insights'
    ],
    process: [
      {
        title: 'Support Strategy Design',
        description: 'Development of customer support strategy aligned with your business objectives and customer needs.'
      },
      {
        title: 'Team Training & Setup',
        description: 'Comprehensive training of support teams and implementation of support infrastructure.'
      },
      {
        title: 'Multi-channel Deployment',
        description: 'Launch of integrated support channels including phone, chat, email, and social media.'
      },
      {
        title: 'Continuous Optimization',
        description: 'Regular performance monitoring and optimization to ensure exceptional service delivery.'
      }
    ],
    caseStudy: {
      title: 'SaaS Platform Support Transformation',
      description: 'Transformed customer support operations for a growing SaaS platform.',
      results: [
        '40% improvement in customer satisfaction',
        '60% reduction in average response time',
        '25% increase in customer retention',
        '50% reduction in support ticket escalations'
      ]
    }
  },
  {
    id: '5',
    slug: 'sales-and-marketing-solution',
    title: 'Sales And Marketing Solution ',
    description: 'A Sales and Marketing Solution is a strategy or toolset designed to attract, engage, and convert customers for business growth..',
    features: [
      'Lead Generation & Management',
      'Customer Relationship Management (CRM)',
      'Analytics & Reporting',
      'Multi-Channel Campaign Management',
      'Content Management ',
      'Mobile Access '
    ],
    icon: BarChart3,
    extendedDescription: 'A Sales and Marketing Solution is an integrated system designed to streamline, automate, and optimize the processes involved in attracting potential customers, converting leads, and nurturing long-term customer relationships..',
    benefits: [
      'Increased Lead Conversion - Helps capture, qualify, and nurture leads more effectively.',
      'Higher sales - Convert leads faster and more efficiently.',
      'Time-saving - Automate tasks and reduce manual work.',
      'Stronger relationships – Keep customers engaged and loyal.',
      'Smart decisions – Use data to improve strategies.',
      'Business growth – Scale your efforts as you grow.'
    ],
    process: [
      {
        title: 'Lead Generation',
        description: 'Attract potential customers through ads, content, social media, SEO, or email campaigns.'
      },
      {
        title: 'Lead Capture',
        description: 'Collect lead information using forms, landing pages, or chatbots.'
      },
      {
        title: 'Lead Qualification',
        description: 'Score and segment leads based on interest, behavior, or fit (using CRM tools).'
      },
      {
        title: 'Customer Onboarding',
        description: 'Welcome new customers with guides, support, or demos to ensure a smooth start.'
      }
    ],
    caseStudy: {
      title: 'Sales and Marketing Automation',
  description: 'Deployed an end-to-end sales and marketing automation solution for a mid-sized B2B SaaS company.',
  results: [
    '60% increase in qualified lead conversions',
    '40% reduction in customer acquisition cost',
    '3x improvement in email campaign engagement',
    '50% faster sales cycle from lead to close'
  ]
    }
  },
{
  id: '6',
  slug: 'financial-advisor-services',
  title: 'Financial Advisor Services',
  description: 'Financial Advisor Services offer expert assistance and end-to-end support in managing personal and business finance-related tasks, legal registrations, and compliance activities.',
  features: [
    'GST Registration & Return Filing',
    'Income Tax Return (ITR) Filing',
    'Accounting & Auditing Services',
    'PAN Card Services',
    'UDYAM Registration',
    'Rent Agreement Drafting & Registration',
    'Shop Act License Registration',
    'Food License (FSSAI)',
    'Driving License Assistance'
  ],
  icon: FileText, // (You can replace with a relevant icon)
  extendedDescription: 'Our Financial Advisor Services provide individuals and small businesses with professional support for financial management, regulatory compliance, and essential government documentation. From tax filings to business registrations, we ensure everything is handled accurately and on time.',
  benefits: [
    'Compliance Made Easy – Stay aligned with tax and legal requirements.',
    'Time-Saving – Let experts handle documentation and filings.',
    'Error-Free Submissions – Minimize risks of penalties and delays.',
    'Affordable & Transparent Pricing – No hidden charges or surprises.',
    'One-Stop Solution – All financial and registration services under one roof.',
    'Peace of Mind – Reliable and verified support for your needs.'
  ],
  process: [
    {
      title: 'Consultation & Requirement Gathering',
      description: 'Understand your needs, documents required, and applicable services.'
    },
    {
      title: 'Document Collection & Verification',
      description: 'Collect and verify the necessary documents for submission.'
    },
    {
      title: 'Application Filing',
      description: 'File applications with the relevant government or legal authority.'
    },
    {
      title: 'Status Tracking & Support',
      description: 'Track progress and provide updates until completion.'
    }
  ],
  caseStudy: {
    title: 'Full-Service Compliance Support for a Startup',
    description: 'Assisted a growing startup with complete financial and regulatory documentation setup.',
    results: [
      'Completed GST, PAN, UDYAM, and Shop License in 10 business days',
      '100% accurate ITR filing for the first financial year',
      'Saved over 80 hours of manual effort for the founder',
      'Helped secure FSSAI and Rent Agreement for office within a week'
    ]
  }
}

 
]
 


export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug)
}

export const getAllServiceSlugs = (): string[] => {
  return servicesData.map(service => service.slug)
}