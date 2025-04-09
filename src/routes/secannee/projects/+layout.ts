export const load = async () => {
    const normalizeSlug = (title: string) =>
        title
            .toLowerCase()
            .normalize('NFD') // Decompose accents
            .replace(/[\u0300-\u036f]/g, '') // Remove accents
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters

    const projects = [
        { title: "Ticketing system", image: "/images/secannee/ticketing.jpg", link: `/secannee/projects/${normalizeSlug("Ticketing system")}`, description: "Description for Morpion", content: "Detailed content about Morpion goes here." },
        { title: "Genti Voisins", image: "/images/secannee/gentivoisins.jpg", link: `/secannee/projects/${normalizeSlug("Genti Voisins")}`, description: "Description for Jeu de Nim", content: "Detailed content about Jeu de Nim goes here." },
    ];

    return { projects }; // Ensure projects is returned
};
