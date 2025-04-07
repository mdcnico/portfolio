import type { PageServerLoad } from './$types';

const projects = [
    { title: "Projet A", image: "/images/projetA.jpg", description: "Description for Projet A", content: "Detailed content about Projet A goes here." },
    { title: "Projet B", image: "/images/projetB.jpg", description: "Description for Projet B", content: "Detailed content about Projet B goes here." },
    { title: "Projet C", image: "/images/projetC.jpg", description: "Description for Projet C", content: "Detailed content about Projet C goes here." },
    { title: "Projet D", image: "/images/projetD.jpg", description: "Description for Projet D", content: "Detailed content about Projet D goes here." },
    { title: "Projet E", image: "/images/projetE.jpg", description: "Description for Projet E", content: "Detailed content about Projet E goes here." },
    { title: "Projet F", image: "/images/projetF.jpg", description: "Description for Projet F", content: "Detailed content about Projet F goes here." },
];

export const load: PageServerLoad = ({ params }) => {
    const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === params.name);
    if (!project) {
        throw new Error('Project not found');
    }
    return project;
};
