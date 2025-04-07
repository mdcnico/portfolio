<title>{currentRoute}</title>


<header class="bg-gray-800 text-white p-4 flex justify-between items-center relative">
    <div class="absolute left-4 flex items-center">
        <button class="menu-button mr-4" on:click={() => showMenu = !showMenu}>
            ☰
        </button>
    </div>
    <h1 class="text-lg font-bold mx-auto">{currentRoute}</h1>
</header>

<!-- svelte-ignore a11y_click_events_have_key_events -->
{#if showMenu}
<div class="menu-overlay" on:click={() => showMenu = false} on:keydown={(e) => e.key === 'Enter' && (showMenu = false)} role="button" tabindex="0" aria-label="Close menu" 
    in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
    <!-- svelte-ignore a11y_interactive_supports_focus -->
    <div class="menu bg-gray-800 text-white p-4 fixed top-0 left-0 h-full w-64" on:click|stopPropagation role="dialog" aria-label="Menu" 
        in:slide={{ duration: 300 }} out:slide={{ duration: 300 }}>
        <button class="link-button block mt-20 mb-4" on:click={() => { showMenu = false; window.location.href = '/' }}>Accueil</button>
        <button class="link-button block mb-4" on:click={() => { showMenu = false; window.location.href = '/premannee' }}>Première Année</button>
        <button class="link-button block mb-4" on:click={() => { showMenu = false; window.location.href = '/secannee' }}>Seconde Année</button>
        <button class="link-button block" on:click={() => { showMenu = false; window.location.href = '/troisannee' }}>Troisième Année</button>
    </div>
</div>
{/if}

<script>
    import "../app.css";
    import { page } from '$app/stores';
    import { fade, slide } from 'svelte/transition'; // Import transitions
    export let children; // Properly declare children as a prop
    let showMenu = false;

    // @ts-ignore
    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    $: currentRoute = capitalizeFirstLetter(
        $page.url.pathname === '/' 
            ? 'Accueil' 
            : $page.url.pathname === '/premannee' 
            ? 'Première Année' 
            : $page.url.pathname === '/secannee' 
            ? 'Seconde Année' 
            : $page.url.pathname === '/troisannee' 
            ? 'Troisième Année'
            : $page.url.pathname.split('/').filter(Boolean).pop()
    );
</script>

<style>
    .menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10;
    }
    .menu {
        z-index: 20; /* Ensure the menu starts after the button */
        /* Removed transform: translateX(-100%) to avoid conflict with slide transition */
    }
    .menu-button {
        z-index: 30; /* Ensure the button stays above the menu */
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0; /* Remove padding for icon-only button */
    }
    .link-button {
        background: none;
        border: none;
        color: white;
        text-align: left;
        cursor: pointer;
        font-size: inherit;
        text-decoration: underline;
        padding: 0;
    }
    .link-button:hover {
        color: #d1d5db; /* hover:text-gray-300 equivalent */
    }

    :global(html, body) {
        height: 100%;
        overflow: hidden;
    }

    :global(body::before) {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, #333333, #121e3a, #000000, #121e3a, #333333);
        background-size: 300% 300%;
        animation: gradientAnimation 10s ease infinite;
        z-index: -1; /* Ensure it stays behind all content */
    }

    @keyframes gradientAnimation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>

{@render children()}
