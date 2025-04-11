<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { page } from '$app/stores';
    import { base } from '$app/paths';

    let projects = [];
    $: projects = $page.data.projects;

    let currentIndex = 0;
    let direction: 'left' | 'right' = 'right';
    let isAnimating = false;

    function nextProject() {
        if (isAnimating) return;
        direction = 'right';
        currentIndex = (currentIndex + 1) % projects.length;
        triggerAnimation();
    }

    function previousProject() {
        if (isAnimating) return;
        direction = 'left';
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        triggerAnimation();
    }

    function triggerAnimation() {
        isAnimating = true;
        setTimeout(() => (isAnimating = false), 300);
    }
</script>

<h1 class="text-center text-4xl mt-8 font-extrabold mb-8 text-gray-100">Troisième année</h1>
<p class="text-center text-lg mb-12 text-gray-300">Voici quelques projets réalisés durant ma troisième année d'études.</p>

<div class="relative flex items-center justify-center">
    <!-- Project Card Container -->
    <div class="relative w-[90%] max-w-4xl h-[60vh] overflow-hidden bg-gray-800 rounded-xl">
        {#key currentIndex}
            <a
                href={projects[currentIndex].link}
                class="absolute inset-0 block bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-250 group"
                in:fly={{ x: direction === 'right' ? 300 : -300, duration: 250 }}
                out:fly={{ x: direction === 'right' ? -300 : 300, duration: 250 }}
            >
                <!-- Image with Grey Veil -->
                <div class="relative w-full h-full">
                    <img src={base}{projects[currentIndex].image} alt={projects[currentIndex].title} class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <!-- Title in the Bottom-Left -->
                <div class="absolute bottom-0 left-0 bg-gray-900 rounded-tr-lg w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <h2 class="text-xl font-semibold text-white px-4 py-2">{projects[currentIndex].title}</h2>
                </div>
                <!-- Title in the Middle -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 class="text-3xl font-bold text-gray-100">{projects[currentIndex].title}</h2>
                </div>
            </a>
        {/key}
    </div>
</div>
