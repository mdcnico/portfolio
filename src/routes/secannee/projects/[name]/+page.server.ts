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
    { title: "Ticketing System", image: "/images/secannee/ticketing.jpg", content: "" },
    { title: "Genti Voisins", image: "/images/premannee/gentivoisins.jpg", content: ""},
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