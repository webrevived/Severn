<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ fetch }) => {
        await fetch('/api/account/signout')

        return {
            status: 300,
            redirect: "/login"
        }
    }
</script>