<template>
<!--
nav******
-->
    <Nav :change_color="change_color" :toggled="toggled" @close_menu="layoverToggle" @open_menu="toggleLayover"/>

<!--
scroll wrappper******
-->
    <!-- containing everything in webpage in order for the user to scroll. For some reason a fixed navbar will not work in Vue 3 -->
    <div ref="scrolling_element" @scroll="scrolling" class="scroll_wrapper">

<!--
layover******
-->
        <!-- mobile menu that appears for mobile devices -->
        <div class="layover" v-if="toggled">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">CAREERS</a> <!-- external link to company's career site --> 
            <a href="#">CONTACT</a>
        </div>

<!-- 
hero******
-->
        <!-- the landing page -->
        <section class="hero">
            <div class="hero_content">
                <!-- contains the nav and image content -->
                <div class="hero_nav">
                    <h1>Purveyors of Comfortable<br>Luxury Footwear</h1>
                    <!-- nav links for desktop only -->
                    <!-- animated nav section with gsap animations -->
                    <nav class="hero_links flex flex_jc_c">
                        <div @mouseleave="closeNav" @mouseenter="openNav" class="left_nav">
                            <ul>
                                <!-- using gsap to animate the nav -->
                                <li><a href="#">HOME</a></li>
                                <li class="link2"><a href="#">ABOUT</a></li>
                            </ul>
                        </div>
                        <div @mouseleave="closeNav" @mouseenter="openNav" class="right_nav"> <!-- animated border that splits the nav -->
                            <ul>
                                <li class="link1"><a href="#">CAREERS</a></li>
                                <li class="link3"><a href="#">CONTACT</a></li>
                            </ul>
                        </div>
                    </nav>
                    <!-- button link that goes to the contact section -->
                    <a class="hero_button" href="#">LET'S TALK</a>
                </div>
                <div class="hero_image">
                    <!-- the boot -->
                    <img src="@/assets/images/png/shoe_11.png" aria-label="A single blue boot" alt="One single boot">
                    <div class="shadow"></div>
                </div>
            </div>
            <!-- bottom border -->
            <img class="hero_border" src="@/assets/images/svg/border_1.svg" role="presentation">
        </section>

    </div>

</template>

<script>
    import Nav from "@/components/Nav"
    import { onMounted, ref } from 'vue'
    import { gsap, Back } from "gsap"

    export default {
        name: 'Home',
        components:{Nav},
        setup(props,context){
            const scrolling_element = ref(null) //scroll wrapper element that is being scrolled by user
            const change_color = ref(true) //variable that's passed to nav component for background change
            const toggled = ref(false)
            const toggleLayover = ()=>{ //allows mobile menu to open
                toggled.value = true
            }
            const layoverToggle = ()=>{ //allows mobile menu to close
                toggled.value = false
            }
            const scrolling = ()=>{ //detecting if the user scrolled to the top of page
                if(scrolling_element.value.scrollTop >= 80){
                    //scrolls down
                    change_color.value = false
                }else if(scrolling_element.value.scrollTop <= 80){
                    //scrolls up
                    change_color.value = true
                }
            }
            //using gsap to animate nav on the desktop
            let tl = gsap.timeline({defaults:{ease: Back.easeOut.config(1)}})
            const pauseTimeLine = onMounted(()=>{ //setup the gsap animation and pauses it
                tl.paused(true)
                tl.to(".left_nav",{duration: 0.7, height: 100})
                .to(".right_nav",{duration: 0.7, height: 100},"-=0.7")
                .to(".link1",{x: 0, opacity: 1},"-=0.5")
                .to(".link2",{x: 0, opacity: 1},"-=0.4")
                .to(".link3",{x: 0, opacity: 1},"-=0.3")
            })
            const openNav = ()=>{ //run the open nav animation using gsap
                tl.play()
            }
            const closeNav = ()=>{ //run the close nav animation using gsap
                tl.reverse()
            }
            return{toggled,toggleLayover,layoverToggle,scrolling,scrolling_element,change_color,openNav,closeNav,pauseTimeLine}
        },
    }
</script>

<style>
    /* div that contains all that can be scrolled */
    .scroll_wrapper{
        position: relative;
        max-height: 100%;
        width: 100vw;
        height: 100%;
        overflow-y: auto; /* allows the page to scroll */
    }
</style>