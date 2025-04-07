<script lang="ts">
    import { page } from '$app/stores';

    export let data: { title: string; image: string; description?: string; content?: string };

    // Access the current route's name parameter
    $: name = $page.params.name;
</script>

<h1 class="text-4xl font-bold text-gray-100 mb-4">{data.title}</h1>
<img src={data.image} alt={data.title} class="w-full h-64 object-cover rounded-lg mb-4" />
<p class="text-gray-300 mb-4">{data.description}</p>
{#if data.content}
    <div class="text-gray-200">{data.content}</div>
{/if}
