interface FeatureDetails {
    imageUrl: string;
    title: string;
    description: string;
    link: string;
}

interface Feature {
    id: number;
    name: string;
    details: FeatureDetails;
}

const features: Feature[] = [
    {
        id: 1,
        name: "Compra de Rifas",
        details: {
            imageUrl: "images/rifas.webp",
            title: "Compra Fácil y Rápida",
            description: "Explora nuestra amplia selección de rifas y compra con facilidad. Nuestra interfaz intuitiva te permite adquirir rifas de forma rápida y sencilla, para que puedas participar en los sorteos que más te interesen.",
            link: "#",
        },
    },
    {
        id: 2,
        name: "Oportunidades de Ganar",
        details: {
            imageUrl: "images/premios.webp",
            title: "Premios Increíbles",
            description: "Participa en rifas con premios emocionantes. Descubre oportunidades de ganar premios valiosos y disfruta de una experiencia de compra que te acerca a grandes recompensas.",
            link: "#",
        },
    },
    {
        id: 3,
        name: "Participación Segura",
        details: {
            imageUrl: "images/escudo.png",
            title: "Compra Segura",
            description: "Compra rifas con total seguridad. Nuestra plataforma garantiza una transacción segura y confiable, para que puedas participar en los sorteos con tranquilidad y confianza.",
            link: "#",
        },
    },
];

export default features;
