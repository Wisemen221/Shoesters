<template>
<!--
nav******
-->
    <Nav :change_color="change_color" :toggled="toggled" @close_menu="layoverToggle" @open_menu="toggleLayover"/>

<!--
scroll wrappper******
-->
    <div ref="scrolling_element" @scroll="scrolling" class="scroll_wrapper">

<!--
layover******
-->
        <div class="layover" v-if="toggled">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">CAREERS</a> <!-- external link to company's career site --> 
            <a href="#">CONTACT</a>
        </div>

<!-- 
hero******
-->
        <section class="hero flex flex_dr_c flex_jc_c">
            <div class="hero_content flex flex_dr_c">
                <!-- contains the nav and image content -->
                <div class="hero_nav">
                    <h1>Purveyors of Comfortable<br>Luxury Footwear</h1>
                    <!-- nav links for desktop only -->
                    <nav class="hero_links flex flex_jc_c">
                        <div @mouseleave="closeNav" @mouseenter="openNav" class="left_nav">
                            <ul>
                                <li><a href="#">HOME</a></li>
                                <li class="link2"><a href="#">ABOUT</a></li>
                            </ul>
                        </div>
                        <div @mouseleave="closeNav" @mouseenter="openNav" class="right_nav">
                            <ul>
                                <li class="link1"><a href="#">CAREERS</a></li>
                                <li class="link3"><a href="#">CONTACT</a></li>
                            </ul>
                        </div>
                    </nav>
                    <!-- contact button -->
                    <a class="hero_button" href="#">LET'S TALK</a>
                </div>
                <div class="hero_image">
                    <!-- the boot -->
                    <img src="@/assets/images/png/shoe_11.png" aria-label="A single blue boot" alt="One single boot" loading="eager">
                    <div class="shadow"></div>
                </div>
            </div>
            <!-- border bottom -->
            <img class="hero_border" src="@/assets/images/svg/border_1.svg" role="presentation" loading="eager">
        </section>

<!-- 
intro******
-->
        <!-- <section class="intro"> -->
            <!-- <div class="intro_container"> -->
                <!-- intro title -->
                <!-- <h2>Quality and Comfort Together at Last</h2> -->
                <!-- contains the images and paragraph content -->
                <!-- <div class="intro_content flex flex_dr_c flex_ai_c"> -->
                    <!-- left hand side for image -->
                    <!-- <div class="image_left"> -->
                        <!-- boot image -->
                        <!-- <img class="boot" src="@/assets/images/png/shoe_2.png" aria-label="A single black boot" alt="One single boot" loading="lazy"> -->
                        <!-- svg background blob -->
                        <!-- <img class="background" src="@/assets/images/svg/bk_blob.svg" role="presentation" loading="lazy"> -->
                    <!-- </div> -->
                    <!-- right hand side for text -->
                    <!-- <div class="content_right"> -->
                        <!-- <p>Formerly the  Birkenstock Footprints  shoe store we all knew and loved,  Shoesters  has evolved a little since your last visit…  We have added a couple of other brands to the mix, but remain focused on helping you and your feet be their happiest, A.K.A. most comfortable.  After all, your feet are your foundation right?  If you take care of them, they’ll take care of the rest of you!</p> -->
                        <!-- <p>We have made it our mission to seek out the world’s most comfortable shoe brands and bring them to you.  Find out why.  We only offer the topmost quality-made footwear that aid your feet to be natural and healthy.  We carry orthopedically correct footwear, but even our fashion brands are the most comfort-conscious out there.</p> -->
                        <!-- <p>So, if it has been a while since you last visited us, please try again! We sincerely hope that you like our updated concept.</p> -->
                    <!-- </div> -->
                <!-- </div> -->
            <!-- </div> -->
        <!-- </section> -->


        <section class="intro">
            <div class="intro_container">
                <!-- intro title -->
                <h2>Quality and Comfort Together at Last</h2>
                <!-- contains the images and paragraph content -->
                <div class="business-info-images flex">
                    <div class="business-info-image-stack">
                        <div class="business-info-item business-info-item-top">
                        <img src="@/assets/images/png/shoe_2.png" alt="A woman walking with new sandles">
                        </div>
                        <div class="business-info-item business-info-item-bottom">
                        <img src="@/assets/images/svg/bk_blob.svg" alt="A man sitting on a stairs with new slippers">
                        </div>
                    </div>
                    </div>
            </div>
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