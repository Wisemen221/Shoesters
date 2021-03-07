<template>
    <!-- ***
    navbar component
    *** -->
    <Nav :toggled="toggled" @close_menu="layoverToggle" @open_menu="toggleLayover"/>

    <!-- ***
    containing everything in webpage in order for the user to scroll.
    For some reason a fixed navbar will not work in Vue 3
    *** -->
    <div class="scroll_wrapper">

        <!-- ***
        mobile menu that appears for mobile devices
        *** -->
        <div ref="layover" class="layover_container" v-if="toggled">

        </div>

        <!-- ***
        the landing page
        *** -->
        <section class="hero_container">

        </section>

    </div>

</template>

<script>
    import Nav from "@/components/Nav"
    import { onUpdated, ref } from 'vue'

    export default {
        name: 'Home',
        components:{Nav},
        setup(props,context){
            const layover = ref(null)
            const toggled = ref(false)
            const toggleLayover = ()=>{ //allows mobile menu to open
                toggled.value = true
            }
            const layoverToggle = ()=>{ //allows mobile menu to close
                toggled.value = false
            }
            console.log(layover)
            const test = onUpdated(()=>{
                if(toggled.value){
                    console.log(true)/// try using watch to see if you add the fade out animation!!**************
                }
            })
            return{toggled,toggleLayover,layoverToggle,layover}
        }
    }
</script>

<style>
    /* ***
    div that contains all that can be scrolled
    *** */
    .scroll_wrapper{
        position: relative;
        max-height: 100%;
        width: 100vw;
        height: 100%;
        overflow-y: auto; /* ***allows the page to scroll*** */
    }
</style>