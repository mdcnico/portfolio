export const load = async () => {
    const projects = [
        { title: "Morpion", image: "/images/premannee/morpion.jpg", link: "/premannee/projects/morpion", description: "Description for Morpion", content: "Detailed content about Morpion goes here." },
        { title: "Jeu de Nim", image: "/images/premannee/jeu_de_nim.jpg", link: "/premannee/projects/jeu-de-nim", description: "Description for Jeu de Nim", content: "Detailed content about Jeu de Nim goes here." },
        { title: "Horloge", image: "/images/premannee/horloge.png", link: "/premannee/projects/horloge", description: "Description for Horloge", content: "Detailed content about Horloge goes here." },
        { title: "Projet 4", image: "/images/premannee/projet4.jpg", link: "/premannee/projects/projet-4", description: "Description for Projet 4", content: "Detailed content about Projet 4 goes here." },
        { title: "Projet 5", image: "/images/premannee/projet5.jpg", link: "/premannee/projects/projet-5", description: "Description for Projet 5", content: "Detailed content about Projet 5 goes here." },
        { title: "Projet 6", image: "/images/premannee/projet6.jpg", link: "/premannee/projects/projet-6", description: "Description for Projet 6", content: "Detailed content about Projet 6 goes here." }
    ];

    return { projects }; // Ensure projects is returned
};
