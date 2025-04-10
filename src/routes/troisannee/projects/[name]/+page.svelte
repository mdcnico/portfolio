<script lang="ts">
    import { page } from '$app/stores';

    export let data: { title: string; image: string; description?: string; content?: string; next?: string };

    // Access the current route's name parameter
    $: name = $page.params.name;
</script>

<div class="flex flex-wrap md:flex-nowrap p-4">
    <div class="w-full flex flex-col items-center mb-4 md:w-1/2">
        <div class="flex space-x-4 w-full">
            <img src={data.image[0]} alt={data.title} 
                 class="w-1/3 h-auto object-cover rounded-lg opacity-90" />
            <img src={data.image[1]} alt={data.title} 
                 class="w-1/3 h-auto object-cover rounded-lg opacity-90" />
            <img src={data.image[2]} alt={data.title} 
                 class="w-1/3 h-auto object-cover rounded-lg opacity-90" />
        </div>
        <h1 class="text-4xl font-bold text-gray-100 mt-2 text-center">{data.title}</h1>
    </div>
    <div class="w-full md:w-1/2 pl-8">
        <p class="text-gray-300 mb-4">{data.description}</p>
        {#if data.content}
            <div class="text-gray-200">
                {@html data.content.replace(/\n/g, '<br>')}
            </div>
        {/if}
    </div>
</div>
