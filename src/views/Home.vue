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
        <section class="intro">
            <div class="intro_container">
                <!-- intro title -->
                <div class="title">
                    <h2>Quality and Comfort Together at Last</h2>
                </div>
                <div class="intro_content flex flex_dr_c flex_ai_c">
                    <div class="image_left">
                        <!-- background svg -->
                        <svg @mouseover="test" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="365" height="369" viewBox="0 0 365 369">
                            <defs>
                                <clipPath id="clip-path">
                                    <rect id="Rectangle_2" data-name="Rectangle 2" width="365" height="369"/>
                                </clipPath>
                            </defs>
                            <g id="bk_blob" clip-path="url(#clip-path)">
                                <path ref="blob1" id="Path_2" data-name="Path 2" d="M364.6,42.6C361.16,1.68,290.08-9.346,258.867,8.684c-29.942,17.3-49.48,43.723-76.7,48.906-23.349,4.846-50.569-6.761-68.111-5.521-3.255.23-32.906.45-50.206,35.721-18.914,38.561,7.137,58.71-4.6,87.9-9.8,32.341-56.5,36.4-58.8,63.329-3.266,32,21.535,29.862,23.833,57.546,0,20.208-18.391,32.848-20.765,45.675A24.185,24.185,0,0,0,23,368.677q.053.009,305.536,0A36.318,36.318,0,0,0,364.84,332.34Q364.6,42.606,364.6,42.6Z" fill="#ec7e7e"/>
                            </g>
                        </svg>
                        <div class="boot_image flex">
                            <img class="boot" src="@/assets/images/png/shoe_2.png" aria-label="A single black boot" alt="One single boot" loading="lazy">
                            <div class="space"></div>
                        </div>
                    </div>
                    <!-- right hand side for text -->
                    <div class="content_right">
                        <p>Formerly the  Birkenstock Footprints  shoe store we all knew and loved,  Shoesters  has evolved a little since your last visit…  We have added a couple of other brands to the mix, but remain focused on helping you and your feet be their happiest, A.K.A. most comfortable.  After all, your feet are your foundation right?  If you take care of them, they’ll take care of the rest of you!</p><br>
                        <p>We have made it our mission to seek out the world’s most comfortable shoe brands and bring them to you.  Find out why.  We only offer the topmost quality-made footwear that aid your feet to be natural and healthy.  We carry orthopedically correct footwear, but even our fashion brands are the most comfort-conscious out there.</p><br>
                        <p>So, if it has been a while since you last visited us, please try again! We sincerely hope that you like our updated concept.</p>
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
    import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
    gsap.registerPlugin(MorphSVGPlugin)

    export default {
        name: 'Home',
        components:{Nav},
        setup(props,context){
            const blob1 = ref(null)
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
            const test = ()=>{
                // console.log(blob1.value)  //reserved for morphing svg animation
                
            }
            return{toggled,toggleLayover,layoverToggle,scrolling,scrolling_element,change_color,openNav,closeNav,pauseTimeLine,test,blob1}
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