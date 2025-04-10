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
    { title: "Ticketing System", image: "/images/secannee/ticketing.png", content: "L'initiative à l'origine de ce projet est de répondre à un besoin réel présent dans un entreprise qui nous a été présenté par un tuteur externe.\n Dans ce cadre, le besoin exprimé était d'avoir une solution de création, gestion et envoi de tickets.\n\n L'objectif du projet au complet était de déployer une application web pour la partie calldesk dont nous requérions les fonctionnalités suivantes:\n Créer les nouveaux tickets, faire de la maintenance sur les tickets actuellement traités, gérer les effectifs et attribuer aux techniciens les tickets sur lesquels intervenir.\n\n Également, nous avons créer une application mobile pour la partie opérationnelle dont les objectifs étaient de :\nPermettre aux techniciens d'intéragir avec les tickets pour lesquels ils devaient intervenir, accéder à un itinéraire en temps réel, direct vers le lieu d'intervention pour un ticket dit, accéder à un calendrier des interventions à venir et de connaître le sujet de l'intervention tout en régulant leur temps via un compteur.\n\n\n Tout l'enjeu de ce projet était de prendre en main de nouveaux outils (Windows Server, AzureAD, Flutter, Angular) et de réussir à répondre aux attentes tout en sachant qu'il s'agissait d'outils complètement nouveaux." },
    { title: "Genti Voisins", image: "/images/secannee/gentivoisins.png", content: "Le projet Genti Voisins est un projet universitaire demandé dans le cadre de notre apprentissage de nouvelles technologies.\n L'idée initiale de ce projet est de fournir une application mobile qui présente des fonctionnalités proches de LeBonCoin.\n\n Dans ce projet nous avions comme attendus principaux :\n Une interface de commandes, permettant à un utilisateur donné de commander des services ou encore des outils aux personnes de son entourage en se basant sur les utilisateurs enregistrés proches de ses coordonnées GPS. Ces services peuvent être de la location d'outils, de la mise à disposition de services (jardinage, bricolage, etc.) ou encore de la vente d'objets.\n Également, une interface pour les administrateurs du système était demandée et devait permettre de réguler les demandes, les valider ou encore faire des graphes de fréquentations, utilisations et exploitations.\n\n\n\n Cette application a entièrement été développé en tant qu'interface web puis finalement convertie en applicable mobile via la solution Cordova." },
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