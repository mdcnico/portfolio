import type { PageServerLoad } from './$types';

const projects = [
    { title: "Morpion", image: "/images/projet1.jpg", description: "Description for Morpion", content: "Detailed content about Morpion goes here." },
    { title: "Jeu de Nim", image: "/images/projet2.jpg" },
    { title: "Horloge", image: "/images/projet3.jpg" },
    { title: "Projet 4", image: "/images/projet4.jpg" },
    { title: "Projet 5", image: "/images/projet5.jpg" },
    { title: "Projet 6", image: "/images/projet6.jpg" }
];

export const load: PageServerLoad = ({ params }) => {
    const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === params.name);
    if (!project) {
        throw new Error('Project not found');
    }
    return project;
};
