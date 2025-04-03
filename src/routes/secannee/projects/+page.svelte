<script lang="ts">
    import { page } from '$app/stores';

    export let params: { name: string };

    type Project = {
        title: string;
        image: string;
        description: string;
    };

    const projects: Project[] = [
        // ...existing code...
    ];

    function findProjectBySlug(slug: string): Project | undefined {
        return projects.find(project => slug === project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
    }

    const project = findProjectBySlug(params.name);

    if (!project) {
        throw new Error(`Project not found for slug: ${params.name}`);
    }
</script>

<h1 class="text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
<img src={project.image} alt={project.title} class="w-full h-64 object-cover rounded-lg mb-4">
<p class="text-lg text-gray-600">{project.description}</p>
