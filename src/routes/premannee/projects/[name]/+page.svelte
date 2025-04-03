<script lang="ts">
    export let params: { name: string };

    type Project = {
        title: string;
        image: string;
        description: string;
    };

    const projects: Project[] = [
        { title: "Morpion", image: "/images/projet1.jpg", description: "Description for Morpion" },
        { title: "Jeu de Nim", image: "/images/projet2.jpg", description: "Description for Jeu de Nim" },
        { title: "Horloge", image: "/images/projet3.jpg", description: "Description for Horloge" },
        { title: "Projet 4", image: "/images/projet4.jpg", description: "Description for Projet 4" },
        { title: "Projet 5", image: "/images/projet5.jpg", description: "Description for Projet 5" },
        { title: "Projet 6", image: "/images/projet6.jpg", description: "Description for Projet 6" }
    ];

    function findProjectBySlug(slug: string): Project | undefined {
        return projects.find(project => 
            slug === project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        );
    }

    const project = findProjectBySlug(params.name);

    if (!project) {
        throw new Error(`Project not found for slug: ${params.name}`);
    }
</script>

<h1 class="text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
<img src={project.image} alt={project.title} class="w-full h-64 object-cover rounded-lg mb-4">
<p class="text-lg text-gray-600">{project.description}</p>
