import HeroImage from "../assets/images/success-stories/hr-team-detail.png";
import EmployeesIcon from "../assets/icons/success-stories/hr-analytics/employees-icon.svg";
import IndustryIcon from "../assets/icons/success-stories/hr-analytics/industry-icon.svg";
import UserRoleIcon from "../assets/icons/success-stories/hr-analytics/userRole-icon.svg";

import ChallengeImage from "../assets/images/success-stories/challenge-img.png";

import CloudIcon from "../assets/icons/success-stories/hr-analytics/cloud-icon.svg";
import EmailIcon from "../assets/icons/success-stories/hr-analytics/email-icon.svg";
import LicenseIcon from "../assets/icons/success-stories/hr-analytics/license-icon.svg";
import ComplianceIcon from "../assets/icons/success-stories/hr-analytics/compliance-icon.svg";

import SolutionImage from "../assets/images/success-stories/solution-img.png";
import FolderIcon from "../assets/icons/success-stories/hr-analytics/folder-icon.svg";
import LayoutIcon from "../assets/icons/success-stories/hr-analytics/layout-icon.svg";
import AnalyticsIcon from "../assets/icons/success-stories/hr-analytics/analytics-icon.svg";

import WarningIcon from "../assets/icons/success-stories/hr-analytics/warning-icon.svg";
import SuccessIcon from "../assets/icons/success-stories/hr-analytics/success-icon.svg";


import TakeawayImage from "../assets/images/success-stories/takeaway-img.png";
import UserIcon from "../assets/icons/success-stories/hr-analytics/user-icon.svg";
import SpeedIcon from "../assets/icons/success-stories/hr-analytics/speed-icon.svg";
import ScaleIcon from "../assets/icons/success-stories/hr-analytics/scale-icon.svg";
import SupportIcon from "../assets/icons/success-stories/hr-analytics/support-icon.svg";
import QuotesIcon from "../assets/icons/success-stories/hr-analytics/quotes-icon.svg";



const caseStudies = [
    {
        slug: "hr-tech-analytics",

        hero: {
            title: {
                before: "How Leading HR Tech Firm Streamlined HR Analytics,",
                highlight: "Cut Reporting Time by 80%,",
                after: "and Gained Full BI Ownership with ScaleBI"
            },
            desc1:
                "A fast-growing HR Tech firm, manages a diverse workforce and multiple HR systems across payroll, attendance, and recruitment. The HR team faced growing complexity in managing data across multiple systems, payroll, attendance, and recruitment, making it difficult to obtain a unified, real-time view of workforce performance and compliance.",
            desc2:
                "As a result, key HR and compliance decisions were often made with incomplete or delayed information.",
            industry: "Industry - HR Tech Firm",
            companySize: "Company Size - 51 to 200 Employees",
            role: "Role Interviewed - Director",
            image: HeroImage,

            icons: {
                industry: IndustryIcon,
                employees: EmployeesIcon,
                role: UserRoleIcon,
            },
        },

        challenge: {
            image: ChallengeImage,
            intro:
                "            Before adopting ScaleBI, the HR tech firm depended largely on Excel spreadsheets and disconnected HR systems for reporting, which led to several key challenges:",
            points: [
                {
                    bold: "High recurring BI costs",
                    text: " from external tools and services",
                },
                {
                    bold: "Lack of ownership",
                    text: " and control over analytics stack",
                },
                {
                    bold: "Manual report creation",
                    text: " prone to human errors and delays",
                },
            ],
            outro:
                "These limitations made it difficult for HR leaders to access reliable, real-time insights on attrition, attendance, and recruitment efficiency.",
        },

        whyScaleBI: {
            subtitle:
                "After evaluating Power BI and Alteryx, HR Tech Firm chose ScaleBI because it offered:",
            cards: [
                {
                    icon: CloudIcon,
                    title: "Full ownership",
                    description:
                        "Full ownership of their BI platform within their own cloud environment",
                },
                {
                    icon: EmailIcon,
                    title: "Enterprise-grade support",
                    description: "Enterprise-grade support and scalability",
                },
                {
                    icon: LicenseIcon,
                    title: "No Recurring License Fees",
                    description:
                        "A one-time setup model with no recurring license fees, ensuring predictable, transparent costs",
                },
                {
                    icon: ComplianceIcon,
                    title: "Data independence and Compliance",
                    description:
                        "Alignment with long-term vision of data independence and compliance",
                },
            ],
        },
        solution: {


            scopeCard: {
                scope: "Internal HR Analytics & Reporting",
                goLive: "Within 3 months",
                description:
                    "Leveraging the ScaleBI framework, our team implemented a comprehensive HR analytics layer built on Apache Superset, fully deployed within company infrastructure for maximum data control.",
            },

            intro: "The process followed this structured flow:",

            steps: [
                {
                    icon: FolderIcon,
                    title: "Data Ingestion",
                    description:
                        "Integrated data from Excel/CSV files, payroll and attendance systems, and the HRMS platform into a single source of truth.",
                },

                {
                    icon: LayoutIcon,
                    title: "Data Modeling",
                    bullets: [
                        "Created centralized datasets: Raw → Cleaned → Augmented → Business Data. Applied validation rules to eliminate duplication and ensure accuracy.",
                        "Applied validation rules to eliminate duplication and ensure accuracy.",
                    ],
                },

                {
                    icon: AnalyticsIcon,
                    title: "Analytics & Visualization",
                    description:
                        "Built HR dashboards across multiple domains:",
                    bullets: [
                        "Talent Acquisition: Time-to-hire, open requisitions, candidate pipeline",
                        "Compliance & Onboarding: Visa, medical, and document tracking",
                        "Workforce Management: Headcount, attendance, overtime analytics",
                        "Compensation & Payroll: Earnings, deductions, reconciliation",
                        "Retention & Learning: Attrition trend and training completion",
                    ],
                },
            ],

            image: SolutionImage,
        },


        results: {


            desc1:
                "The transition to ScaleBI not only automated reporting but also transformed HR analytics from a manual, reactive process into a real-time strategic capability.",

            desc2: {
                before: "The HR team achieved an ",
                highlight1: "80% reduction in manual reporting effort",
                middle: ", significantly improved the ",
                highlight2:
                    "accuracy of audit and board reports, and enhanced transparency across HR and departmental decision-making."
            },

            columns: {
                metric: "Metric",
                traditional: "Traditional Analytics Platforms",
                after: "After ScaleBI"
            },

            icons: {
                warning: WarningIcon,
                success: SuccessIcon

            },

            table: [
                {
                    metric: "Reporting Workflow",
                    traditional: "Manual, Excel-based",
                    after: "Automated HR dashboards",
                },
                {
                    metric: "Data Consolidation",
                    traditional: "4+ systems, inconsistent",
                    after: "Unified, validated data model",
                },
                {
                    metric: "Reports Generated",
                    traditional: "~ 15 static Excel reports",
                    after: "70+ live dashboards consolidated",
                },
                {
                    metric: "Human Error",
                    traditional: "Frequent recalculations",
                    after: "Zero manual error due to automation",
                },
                {
                    metric: "Decision Speed",
                    traditional: "Delayed by days",
                    after: "Real-time insights available anytime",
                },

                
            ],
        }
        ,
        lookingAhead: {
            // title: "Looking Ahead",

            description:
                "HR Tech Firm plans to expand ScaleBI’s coverage to include project tracking and finance, creating an integrated analytics ecosystem.",

            keyTakeawaysTitle: "Key Takeaways",

            keyTakeaways: [
                {
                    icon: UserIcon,
                    text: "Ownership – Full control over infrastructure and data",
                },
                {
                    icon: SpeedIcon,
                    text: "Speed – Deployed and live within 3 months",
                },
                {
                    icon: ScaleIcon,
                    text: "Scale – 70+ reports automated",
                },
                {
                    icon: SupportIcon,
                    text: "Support – Enterprise-grade assistance with zero vendor lock-in",
                },
            ],

            testimonial: {
                role: "Director, HR Tech Firm",
                text:
                    "With ScaleBI, we finally own our analytics solution and still get the enterprise support we need.",
                quotesIcon: QuotesIcon,
            },

            image: TakeawayImage,
        }

    },
];

export default caseStudies;
