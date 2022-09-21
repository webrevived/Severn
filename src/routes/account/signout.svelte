<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";
    import { goto } from "$app/navigation"
    import { session } from "$app/stores"
    import { onMount } from "svelte";

    export const load: Load = async ({ fetch }) => {
        await fetch('/api/account/signout')
        return {}
    }
</script>

<script lang="ts">
    onMount( () => {
        $session.user = null
        goto("/login")
    } )
</script>