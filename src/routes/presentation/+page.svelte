<script>
    import { fade, slide } from 'svelte/transition';
    import { base } from '$app/paths'; // Import base path for images

    let showGitHubDetails = false;
    let showPresentationDetails = false;
    let showExperienceDetails = false; // New state for the additional card

    function toggleGitHubDetails() {
        showGitHubDetails = !showGitHubDetails;
    }

    function togglePresentationDetails() {
        showPresentationDetails = !showPresentationDetails;
    }

    function toggleExperienceDetails() { // New toggle function
        showExperienceDetails = !showExperienceDetails;
    }
</script>

<main class="relative flex flex-row min-h-screen w-full mx-auto p-6 text-gray-200">
    <!-- Image taking 1/3 of the page -->
    <div class="w-1/3 h-screen">
        <img 
            src="{base}/images/presentation2.jpg" 
            alt="Background" 
            class="w-full h-full object-cover rounded-lg shadow-lg"
        />
    </div>

    <!-- Cards container -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="flex-1 flex flex-col justify-start space-y-8 ml-8">
        <h1 class="text-4xl font-extrabold text-center mt-4 text-gray-100">
            Qui suis-je ?
        </h1>

        <!-- GitHub Card -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div 
            class="flex flex-row items-center cursor-pointer space-x-4" 
            on:click={toggleGitHubDetails}
        >
            <div class="relative w-24 h-24 flex-shrink-0">
                <img 
                    draggable="false" 
                    src="{base}/images/iut_metz.jpg" 
                    alt="Scolarité" 
                    class="w-full h-full object-cover rounded-full"
                />
            </div>
            {#if showGitHubDetails}
                <div 
                    class="flex flex-col bg-gray-800 p-4 rounded-lg w-full" 
                    transition:fade
                >
                    <div class="text-left">
                        <h2 class="text-2xl font-bold text-gray-100">Scolarité</h2>
                        <p class="text-gray-400 mt-2" transition:slide>
                            Actuellement étudiant en BUT Informatique à l'IUT de Metz, troisième année spécialisé en Réalisation d'Applications. Également alternant au Laboratoire Central de la Préfecture de Police de Paris, je suis curieux de découvrir de nouvelles technologies et de nouveaux environnements de travail.
                        </p>
                    </div>
                </div>
            {/if}
        </div>

        <!-- Presentation Card -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div 
            class="flex flex-row items-center cursor-pointer space-x-4 mt-2" 
            on:click={togglePresentationDetails}
        >
            <div class="relative w-24 h-24 flex-shrink-0">
                <img 
                    draggable="false" 
                    src="{base}/images/esport.jpg" 
                    alt="Loisirs" 
                    class="w-full h-full object-cover rounded-full"
                />
            </div>
            {#if showPresentationDetails}
                <div 
                    class="flex flex-col bg-gray-800 p-4 rounded-lg w-full" 
                    transition:fade
                >
                    <div class="text-left">
                        <h2 class="text-2xl font-bold text-gray-100">Loisirs et passions</h2>
                        <p class="text-gray-400 mt-2" transition:slide>
                            Passioné de jeux vidéos et d'informatique, je passe la plupart de mon temps à jouer à des jeux vidéos compétitifs comme League of Legends, Counter-Strike ou encore Rocket League. Également passionné d'esport depuis jeune, je suis un fervent fan de la scène et de son développement, surtout de la structure française, la Karmine Corp.
                        </p>
                    </div>
                </div>
            {/if}
        </div>

        <!-- Experience Card -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div 
            class="flex flex-row items-center cursor-pointer space-x-4 mt-2" 
            on:click={toggleExperienceDetails}
        >
            <div class="relative w-24 h-24 flex-shrink-0">
                <img 
                    draggable="false" 
                    src="{base}/images/travail.jpg" 
                    alt="Expériences professionnelles" 
                    class="w-full h-full object-cover rounded-full"
                />
            </div>
            {#if showExperienceDetails}
                <div 
                    class="flex flex-col bg-gray-800 p-4 rounded-lg w-full" 
                    transition:fade
                >
                    <div class="text-left">
                        <h2 class="text-2xl font-bold text-gray-100">Expériences professionnelles</h2>
                        <p class="text-gray-400 mt-2" transition:slide>
                            J'ai eu l'opportunité de travailler en tant que saisonnier à la SNCF, dans le domaine de l'accueil de clientèle et de la vente. Également à la SNCF, j'ai eu l'occasion de travailler dans le poste d'aiguillage en tant qu'opérateur de sonorisation, responsable des annonces en gare pour la période des Jeux Olympiques 2024 à Versailles. Ces expériences m'ont permis de me forger et de découvrir le monde du travail et les horaires décalés, les postes occupés étant soit en 2/8, soit en 3/8.
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</main>
