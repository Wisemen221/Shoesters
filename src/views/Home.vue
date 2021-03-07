<template>
    <Nav />
    Home
</template>

<script>
    import Nav from "@/components/Nav"

    export default {
        name: 'Home',
        components:{Nav}
    }
</script>

<style>
    .home-wrapper{
        position: relative;
        width: 100%;
        max-height: 100%;
        height: 100%;
        overflow-y: auto;
    }
</style>