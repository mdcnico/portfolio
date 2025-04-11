import { base } from '$app/paths';

export const load = async () => {
    const normalizeSlug = (title: string) =>
        title
            .toLowerCase()
            .normalize('NFD') // Decompose accents
            .replace(/[\u0300-\u036f]/g, '') // Remove accents
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters

    const rawProjects = [
        { title: "Ticketing system", image: "/images/secannee/ticketing.png", description: "Description for Morpion", content: "Detailed content about Morpion goes here." },
        { title: "Genti Voisins", image: "/images/secannee/gentivoisins.png", description: "Description for Jeu de Nim", content: "Detailed content about Jeu de Nim goes here." },
    ];

    const projects = rawProjects.map(project => ({
        ...project,
        link: `${base}/secannee/projects/${normalizeSlug(project.title)}`
    }))

    return { projects }; // Ensure projects is returned
};
