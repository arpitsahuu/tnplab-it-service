import { Code, Smartphone, Cloud, Briefcase } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "About us",
        href: "/about",
    },
    {
        title: "Services",
        href: "/services",
        menu: [
            {
                title: "Web Development",
                tagline: "Create stunning, responsive websites tailored to your brand.",
                href: "/services/service/0",
                icon: Code,
            },
            {
                title: "App Development",
                tagline: "Transform your ideas into powerful mobile applications.",
                href: "/services/service/1",
                icon: Smartphone,
            },
            {
                title: "Cloud Solutions",
                tagline: "Gain insights into who is clicking your links.",
                href: "/services/service/2",
                icon: Cloud,
            },
            {
                title: "IT Consulting",
                tagline: "Optimize your IT strategy and infrastructure with",
                href: "/services/service/8",
                icon: Briefcase,
            },
            
        ],
    },
    
        {
            title: "Why tnpLab",
            href: "/why",
        },

    // {
    //     title: "Resources",
    //     href: "/resources",
    //     menu: [
    //         {
    //             title: "Blog",
    //             tagline: "Read articles on the latest trends in tech.",
    //             href: "/resources/blog",
    //             icon: NewspaperIcon,
    //         },
    //         {
    //             title: "Help",
    //             tagline: "Get answers to your questions.",
    //             href: "/resources/help",
    //             icon: HelpCircleIcon,
    //         },
    //     ]
    // },
    {
        title: "Contact Us",
        href: "/contact",
    },
];


