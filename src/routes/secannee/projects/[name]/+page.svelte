<script lang="ts">
    import { page } from '$app/stores';
    import { base } from '$app/paths';

    export let data: { title: string; image: string; description?: string; content?: string; next?: string };

    $: name = $page.params.name;
</script>

<div class="flex flex-wrap md:flex-nowrap p-4">
    <div class="w-full md:w-1/2 flex flex-col items-center mb-4">
        <img src={data.image} alt={data.title} 
             class="w-full h-auto object-cover rounded-lg mb-4 opacity-90 aspect-video" />
        <h1 class="text-4xl font-bold text-gray-100 mb-4 text-center">{data.title}</h1>
    </div>
    <div class="w-full md:w-1/2 p-4">
        <p class="text-gray-300 mb-4">{data.description}</p>
        {#if data.content}
            <div class="text-gray-200">
                {@html data.content.replace(/\n/g, '<br>')}
            </div>
        {/if}
        {#if data.next}
            <a href={`${base}/secannee/projects/${data.next}`} 
               class="fixed bottom-4 right-4 w-36 h-12 bg-blue-500 text-white flex items-center justify-between px-4 rounded-lg shadow-lg hover:bg-blue-600">
                <span class="text-sm font-medium">Next Project</span>
                <div class="w-0 h-0 border-t-6 border-b-6 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>
            </a>
        {/if}
    </div>
</div>
