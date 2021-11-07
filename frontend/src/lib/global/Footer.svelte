<script>
    import FooterItem from "$lib/global/FooterItem.svelte";
</script>

<footer
    class = "w-full bg-white-300"
    p="x-7 md:x-30 t-15 b-8"
    transition="~ all"
>
    <h1 
        class="heading-2 font-semibold mb-11" 
        text="black-600"
    >Saven ®</h1>

    <div 
        class="gap-10"
        m="b-10 md:b-18.5"
        flex="~ wrap"
    >
        <FooterItem title = "Shop">
            <a class="FooterText" href="/shop">Shop all</a>
            <a class="FooterText" href="/category/Premium Candles">Premium Candles</a>
            <a class="FooterText" href="/category/Mens Self Care">Mens Self Care</a>
            <a class="FooterText" href="/category/Womens Self Care">Womens Self Care</a>
        </FooterItem>

        <FooterItem title = "About">
            <a class="FooterText" href="/">Our Story</a>
            <a class="FooterText" href="/">My Account</a>
            <a class="FooterText" href="/contact">Contact Us</a>
            <a class="FooterText" href="/">Register Now</a>
        </FooterItem>

        <FooterItem title = "Customer Care">
            <a class="FooterText" href="/contact">Contact Us</a>
            <a class="FooterText" href="/faq">FAQS</a>
            <a class="FooterText" href="/return">Return & Exchanges</a>
            <a class="FooterText" href="/">Customer Support</a>
        </FooterItem>

        <FooterItem title = "Miscellaneous">
            <a class="FooterText" href="/terms">Terms & Conditions</a>
            <a class="FooterText" href="/privacy">Privacy Policy</a>
        </FooterItem>
    </div>

    <p class="FooterText">© 2021 Saven Company. All Rights Reserved.</p>
</footer>

<style>
    .FooterText {
        @apply text-1 text-brown-1200;
    }
</style>