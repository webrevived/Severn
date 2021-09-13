<script>
    import 'virtual:windi.css'
</script>

<slot />

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
    
    @font-face {
        font-family: "Tiempos";
        src: url("/fonts/TiemposHeadline-Light.otf") format("opentype");
        font-weight: 300;
    }

    @font-face {
        font-family: "Tiempos";
        src: url("/fonts/TiemposHeadline-Regular.otf") format("opentype");
        font-weight: 400;
    }

    @font-face {
        font-family: "Tiempos";
        src: url("/fonts/TiemposHeadline-Semibold.otf") format("opentype");
        font-weight: 600;
    }

    @font-face {
        font-family: "Tiempos";
        src: url("/fonts/TiemposHeadline-Bold.otf") format("opentype");
        font-weight: 700;
    }

    @font-face {
        font-family: "Tiempos";
        src: url("/fonts/TiemposHeadline-Black.otf") format("opentype");
        font-weight: 900;
    }
</style>