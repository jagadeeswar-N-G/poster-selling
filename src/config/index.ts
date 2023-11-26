export const PRODUCT_CATOGORIES = [
    {
        label: "Hollyhood",
        value: "hollywood" as const, //this is like a keyword, that we can put in any url
        featured: [
            {
                name: "Oppenheimer",
                href: "#",
                imageSrc: '/nav/Hollyhood/oppenheimer.jpg',
            },
            {
                name: "Interstallar",
                href: "#",
                imageSrc: '/nav/Hollyhood/interstallar.jpg',
            },
            {
                name: "Inception",
                href: "#",
                imageSrc: '/nav/Hollyhood/inception.jpg',
            },
        ]
    },
    {
        label: "Bollyhood",
        value: "bollyhood" as const, //this is like a keyword, that we can put in any url
        featured: [
            {
                name: "Animal",
                href: "#",
                imageSrc: '/nav/Bollyhood/animal.jpg',
            },
            {
                name: "Devdas",
                href: "#",
                imageSrc: '/nav/Bollyhood/devdas.jpg',
            },
            {
                name: "Sholay",
                href: "#",
                imageSrc: '/nav/Bollyhood/sholay.jpg',
            }
        ]
    },
]