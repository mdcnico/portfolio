export const load = async () => {
    const normalizeSlug = (title: string) =>
        title
            .toLowerCase()
            .normalize('NFD') // Decompose accents
            .replace(/[\u0300-\u036f]/g, '') // Remove accents
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters

    const rawProjects = [
        { title: "CKOITGROL", image: "/images/troisannee/CKOITGROL1.jpg", description: "Description for Morpion", content: "Detailed content about Morpion goes here." },
    ];

    const projects = rawProjects.map(project => ({
        ...project,
        link: `/troisannee/projects/${normalizeSlug(project.title)}`
    }))

    return { projects }; // Ensure projects is returned
};
