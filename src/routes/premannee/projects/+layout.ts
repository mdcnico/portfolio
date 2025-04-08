export const load = async () => {
    const normalizeSlug = (title: string) =>
        title
            .toLowerCase()
            .normalize('NFD') // Decompose accents
            .replace(/[\u0300-\u036f]/g, '') // Remove accents
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters

    const projects = [
        { title: "Morpion", image: "/images/premannee/morpion.jpg", link: `/premannee/projects/${normalizeSlug("Morpion")}`, description: "Description for Morpion", content: "Detailed content about Morpion goes here." },
        { title: "Jeu de Nim", image: "/images/premannee/jeu_de_nim.jpg", link: `/premannee/projects/${normalizeSlug("Jeu de Nim")}`, description: "Description for Jeu de Nim", content: "Detailed content about Jeu de Nim goes here." },
        { title: "Horloge", image: "/images/premannee/horloge.png", link: `/premannee/projects/${normalizeSlug("Horloge")}`, description: "Description for Horloge", content: "Detailed content about Horloge goes here." },
        { title: "Bdd Agricole", image: "/images/premannee/projet4.jpg", link: `/premannee/projects/${normalizeSlug("Bdd Agricole")}`, description: "Description for Projet 4", content: "Detailed content about Projet 4 goes here." },
        { title: "Projet 5", image: "/images/premannee/projet5.jpg", link: `/premannee/projects/${normalizeSlug("Projet 5")}`, description: "Description for Projet 5", content: "Detailed content about Projet 5 goes here." },
        { title: "Projet 6", image: "/images/premannee/projet6.jpg", link: `/premannee/projects/${normalizeSlug("Projet 6")}`, description: "Description for Projet 6", content: "Detailed content about Projet 6 goes here." }
    ];

    return { projects }; // Ensure projects is returned
};
