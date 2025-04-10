import type { PageServerLoad } from './$types';

// Utility function to normalize slugs
const normalizeSlug = (title: string) =>
    title
        .toLowerCase()
        .normalize('NFD') // Decompose accents
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters

const projects = [
    { title: "CKOITGROL", image: ["/images/troisannee/CKOITGROL1.jpg", "/images/troisannee/CKOITGROL2.jpg", "/images/troisannee/CKOITGROL3.jpg"], content: "Le projet CKOITGROL émane de la pensée de 4 collaborateurs, collègues et amis qui ont pour seule demande : réaliser une solution mobile de reconnaissance d'images par IA avec un modèle entraîné à la main. \n L'objectif de ce projet, comprendre et s'initier au monde de l'intelligence artificielle grâce à un sujet libre de notre choix et en totale autonomie quant au choix des technologies et solutions mises en place. \n Mon groupe, constitué avec 3 de mes amis, s'était fixé comme objectif de créer une plateforme style réseau social, avec pour but de partager avec des amis, quel style de chaussures nous avions au pied et ce grâce à une reconnaissance par IA. \n\n Notre choix pour les technologies fut le suivant :\n Mobile : Flutter, un outil que nous avons déjà prit en main à plusieurs occasions et dont un membre du groupe est très familier.\n Database: Firebase, un outil nouveau, jamais manipulé par notre part auparavant qui permet d'instauré de l'authentification et des données dynamiques en temps réel dans notre APK.\n Modèle IA : Yolov5, c'était le modèle avec lequel nous avions le plus de facilité et celui qui était le plus performant pour répondre à notre sujet. Bien que des essais ai été effectués avec Yolov11 et Yolov7, ceux-ci ne répondait pas à nos attentes et prenait trop de temps machine.\n\n Le résultat final était celui escompté, nous étions en capacité de reconnaître à 90% de précision quel type de chaussures l'utilisateur portait, que cela soit en temps réel, en photo ou à partir de la galerie. Si toutefois nous en étions incapable, l'utilisateur mentionnait une erreur du modèle et via notre backend nous entraînions le modèle avec les nouvelles données fournies, images et labels." },
];

export const load: PageServerLoad = ({ params }) => {
    const currentIndex = projects.findIndex(
        p => normalizeSlug(p.title) === params.name
    );
    if (currentIndex === -1) {
        throw new Error('Project not found');
    }

    const project = projects[currentIndex];
    const nextProject = projects[(currentIndex + 1) % projects.length]; // Circular navigation
    return {
        ...project,
        next: normalizeSlug(nextProject.title)
    };
};