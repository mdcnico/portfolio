<script lang="ts">
    import { base } from '$app/paths';
</script>

<h1 class="text-center text-4xl font-extrabold mb-8 mt-8 text-gray-100">Deuxième année</h1>
<p class="text-center text-lg mb-12 text-gray-300">Explorez les différentes sections de ma deuxième année d'études.</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
    <!-- Projects Card -->
    <a
        href="{base}/secannee/projects"
        class="block bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-250 group"
    >
        <div class="relative w-full h-64">
            <img src="{base}/images/secannee/projects.jpg" alt="Projects" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-100 group-hover:text-gray-400 transition-colors duration-300">Projets</h2>
            <p class="text-gray-400 mt-2">Découvrez les projets réalisés durant ma deuxième année.</p>
        </div>
    </a>

    <!-- Competences Card -->
    <a
        href="{base}/secannee/competences"
        class="block bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-250 group"
    >
        <div class="relative w-full h-64">
            <img src="{base}/images/secannee/competences.jpg" alt="Competences" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-100 group-hover:text-gray-400 transition-colors duration-300">Compétences</h2>
            <p class="text-gray-400 mt-2">Découvrez les compétences acquises durant ma deuxième année.</p>
        </div>
    </a>

    <a
        href="{base}/secannee/stage"
        class="block bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-250 group"
    >
        <div class="relative w-full h-64">
            <img src="{base}/images/secannee/stage.jpg" alt="Stage" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-100 group-hover:text-gray-400 transition-colors duration-300">Stage</h2>
            <p class="text-gray-400 mt-2">Travail réalisé lors de mon stage de fin d'année.</p>
        </div>
    </a>
</div>
