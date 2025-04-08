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
    { title: "Morpion", image: "/images/premannee/morpion.jpg", content: "Création d'un morpion dans une interface console.\n L'objectif de ce projet était de créer un jeu de morpion jouable à deux dans une console et avec des inputs dans celle-ci pour les commandes.\n La conception entière de ce jeu s'est réalisée en C et a été notre initiation à ce langage." },
    { title: "Jeu de Nim", image: "/images/premannee/jeu_de_nim.jpg", content: "Création d'un jeu de nim dans une interface console. \n L'objectif du projet était de créer, au sein d'une console, une solution pour jouer à une forme de jeu de nim. \n La principale complexité était de mettre en place une structure de données permissive permettant de mettre en place ce jeu.\n La conception de celui-ci a permis d'approfondir notre compréhension du langage C et de voir plus en profondeur ce qui était possible avec les tableaux imbriqués."},
    { title: "Horloge", image: "/images/premannee/horloge.png", content:"Création d'une horloge dans une console.\n L'attendu pour ce projet était une horloge projeté dans une console, cependant nous étions libre d'ajouter ce que nous souhaitions à celle-ci pour ajouter des fonctionnalités.\n Le but était de comprendre et apprendre l'assembleur 8086 au travers d'un projet intéressant et libre." },
    { title: "Bdd Agricole", image: "/images/premannee/dbcereales.jpg", content:"Réalisation d'une base de données complexe en SQL.\n Le but principal était de créer une base de données solide afin de permettre à une organisation agricole de gérer ses flux entrants et sortants, ses stocks, ses ventes, et même de gérer ce qui était bénéfique ou non.\n Ce projet s'étend sur l'année entière et visait à nous mettre en jambes dans l'usage de SQL et de nous initier à tous ses concepts, requêtes, triggers, procédures stockées, etc..." },
    { title: "Projet 5", image: "/images/premannee/projet5.jpg" },
    { title: "Projet 6", image: "/images/premannee/projet6.jpg" }
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