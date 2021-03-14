<template>
<!--
nav******
-->
    <Nav :closing="closing" :change_color="change_color" :toggled="toggled" @closed_for_good="layoverClosed" @close_menu="layoverToggle" @open_menu="toggleLayover"/>

<!--
scroll wrappper******
-->
    <div ref="scrolling_element" @scroll="scrolling" class="scroll_wrapper">

<!--
layover******
-->
        <div class="layover" v-if="toggled">
            <a href="/">HOME</a>
            <a @click="closeMobileMenu" href="#about">ABOUT</a>
            <a @click="closeMobileMenu" href="http://shoesters.com/employment/">CAREERS</a> <!-- external link to company's career site --> 
            <a @click="closeMobileMenu" href="#contact">CONTACT</a>
        </div>

<!-- 
hero******
-->
        <section class="hero flex flex_dr_c flex_jc_c">
            <div class="hero_content flex flex_dr_c">
                <!-- contains the nav and image content -->
                <div class="hero_nav">
                    <h1 data-aos="fade-down" data-aos-duration="1000">Purveyors of Comfortable<br>Luxury Footwear</h1>
                    <!-- nav links for desktop only -->
                    <nav data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" class="hero_links flex flex_jc_c">
                        <div @mouseleave="closeNav" @mouseenter="openNav" class="left_nav">
                            <ul>
                                <li><a href="/">HOME</a></li>
                                <li class="link2"><a @click="goToAbout" href="#">ABOUT</a></li>
                            </ul>
                        </div>
                        <div @mouseleave="closeNav" @mouseenter="openNav" class="right_nav">
                            <ul>
                                <li class="link1"><a href="http://shoesters.com/employment/">CAREERS</a></li>
                                <li class="link3"><a @click="goToContact" href="#">CONTACT</a></li>
                            </ul>
                        </div>
                    </nav>
                    <!-- contact button -->
                    <a data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" class="hero_button" @click="goToContact" href="#">LET'S TALK</a>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="900" class="hero_image">
                    <!-- the boot -->
                    <img src="@/assets/images/png/shoe_11.png" aria-label="A single blue boot" alt="One single boot" loading="eager">
                    <div class="shadow"></div>
                </div>
            </div>
        </section>

<!-- 
intro******
-->
        <section class="intro">
            <div class="intro_container">
                <!-- intro title -->
                <div class="title">
                    <h2 class="intro_title">Quality and Comfort Together at Last</h2>
                </div>
                <div class="intro_content flex flex_dr_c flex_ai_c">
                    <div ref="image_left" class="image_left">
                        <!-- background svg -->
                        <svg @mouseover="morph" xmlns="http://www.w3.org/2000/svg" width="364.686" height="368.364" viewBox="0 0 364.686 368.364"><g fill="#ec7e7e"><path id="blob2" class="a" d="M33 0h299a33 33 0 0133 33v302a33 33 0 01-33 33H33a33 33 0 01-33-33V33A33 33 0 0133 0z"/><path id="blob1" d="M364.446 42.282c-3.44-40.92-74.52-51.946-105.733-33.916-29.942 17.3-49.48 43.723-76.7 48.906-23.349 4.846-50.569-6.761-68.111-5.521-3.255.23-32.906.45-50.206 35.721-18.914 38.561 7.137 58.71-4.6 87.9-9.8 32.341-56.5 36.4-58.8 63.329-3.266 32 21.535 29.862 23.833 57.546 0 20.208-18.391 32.848-20.765 45.675a24.185 24.185 0 0019.482 26.437q.053.009 305.536 0a36.318 36.318 0 0036.3-36.337l-.236-289.74z"/></g></svg>
                        <div class="boot_image flex">
                            <!-- boot image -->
                            <img class="boot" src="@/assets/images/png/shoe_2.png" aria-label="A single black boot" alt="One single boot" loading="lazy">
                            <div class="space"></div>
                        </div>
                    </div>
                    <!-- right hand side for text -->
                    <div class="content_right">
                        <p class="intro_p_1">Formerly the  Birkenstock Footprints  shoe store we all knew and loved,  Shoesters  has evolved a little since your last visit…  We have added a couple of other brands to the mix, but remain focused on helping you and your feet be their happiest, A.K.A. most comfortable.  After all, your feet are your foundation right?  If you take care of them, they’ll take care of the rest of you!</p><br>
                        <p class="intro_p_2">We have made it our mission to seek out the world’s most comfortable shoe brands and bring them to you.  Find out why.  We only offer the topmost quality-made footwear that aid your feet to be natural and healthy.  We carry orthopedically correct footwear, but even our fashion brands are the most comfort-conscious out there.</p><br>
                        <p class="intro_p_3">So, if it has been a while since you last visited us, please try again! We sincerely hope that you like our updated concept.</p>
                    </div>
                </div>
            </div>
        </section>

<!-- 
services******
-->
        <section class="services">
            <h2 class="services_title">Our Services  To You</h2>
            <!-- contains all 3 cards -->
            <div class="services_box_container">
                <div class="boxes box_1">
                    <h3>Slip-Resistant Professional<br>Work Shoes</h3>
                </div>
                <!-- this box scales on desktop -->
                <div class="boxes box_2 scale_card">
                    <h3>Full-Service Shoe Fitting</h3>
                </div>
                <div class="boxes box_3">
                    <h3>Wide Representation<br>of Multiple Brands</h3>
                </div>
            </div>
        </section>

<!-- 
about us******
-->
        <section id="about" class="about">
            <div class="about_logo">
                <svg xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 0 267 146"><defs><clipPath id="a"><path d="M0 0h267v146H0z"/></clipPath></defs><g clip-path="url(#a)"><defs><filter id="b" width="400%" height="400%" x="-200%" y="-200%" color-interpolation-filters="sRGB" filterUnits="objectBoundingBox"><feGaussianBlur xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" stdDeviation="7.73"/><feOffset xmlns="http://www.w3.org/2000/svg" dy="10" result="pf_100_offsetBlur"/><feFlood xmlns="http://www.w3.org/2000/svg" flood-color="#000" flood-opacity=".33"/><feComposite xmlns="http://www.w3.org/2000/svg" in2="pf_100_offsetBlur" operator="in" result="pf_100_dropShadow"/><feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="pf_100_dropShadow"/></filter></defs><g filter="url(#b)"><path id="box_1" fill="#fff" d="M20.93 44.43h69.14a4.42 4.42 0 014.42 4.42v69.13a4.42 4.42 0 01-4.42 4.42H20.93a4.42 4.42 0 01-4.42-4.42V48.85a4.42 4.42 0 014.42-4.42z"/></g><defs><filter id="c" width="400%" height="400%" x="-200%" y="-200%" color-interpolation-filters="sRGB" filterUnits="objectBoundingBox"><feGaussianBlur xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" stdDeviation="7.73"/><feOffset xmlns="http://www.w3.org/2000/svg" dy="10" result="pf_100_offsetBlur"/><feFlood xmlns="http://www.w3.org/2000/svg" flood-color="#000" flood-opacity=".33"/><feComposite xmlns="http://www.w3.org/2000/svg" in2="pf_100_offsetBlur" operator="in" result="pf_100_dropShadow"/><feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="pf_100_dropShadow"/></filter></defs><g filter="url(#c)"><path id="box_5"  fill="#fff" d="M223.15 64.92h25.7c.9 0 1.64.74 1.64 1.64v25.7c0 .9-.74 1.64-1.64 1.64h-25.7c-.9 0-1.64-.74-1.64-1.64v-25.7c0-.9.74-1.64 1.64-1.64z"/></g><defs><filter id="d" width="400%" height="400%" x="-200%" y="-200%" color-interpolation-filters="sRGB" filterUnits="objectBoundingBox"><feGaussianBlur xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" stdDeviation="7.73"/><feOffset xmlns="http://www.w3.org/2000/svg" dy="10" result="pf_100_offsetBlur"/><feFlood xmlns="http://www.w3.org/2000/svg" flood-color="#000" flood-opacity=".33"/><feComposite xmlns="http://www.w3.org/2000/svg" in2="pf_100_offsetBlur" operator="in" result="pf_100_dropShadow"/><feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="pf_100_dropShadow"/></filter></defs><g filter="url(#d)"><path id="box_4" fill="#fff" d="M181.2 32.21h41.84c1.48 0 2.68 1.2 2.68 2.67v41.85c0 1.48-1.2 2.68-2.68 2.68H181.2a2.68 2.68 0 01-2.68-2.67V34.88c0-1.48 1.2-2.68 2.67-2.68z"/></g><defs><filter id="e" width="400%" height="400%" x="-200%" y="-200%" color-interpolation-filters="sRGB" filterUnits="objectBoundingBox"><feGaussianBlur xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" stdDeviation="7.73"/><feOffset xmlns="http://www.w3.org/2000/svg" dy="10" result="pf_100_offsetBlur"/><feFlood xmlns="http://www.w3.org/2000/svg" flood-color="#000" flood-opacity=".33"/><feComposite xmlns="http://www.w3.org/2000/svg" in2="pf_100_offsetBlur" operator="in" result="pf_100_dropShadow"/><feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="pf_100_dropShadow"/></filter></defs><g filter="url(#e)"><path id="box_3" fill="#fff" d="M115.93 44.43h69.14a4.42 4.42 0 014.42 4.42v69.13a4.42 4.42 0 01-4.42 4.42h-69.14a4.42 4.42 0 01-4.42-4.42V48.85a4.42 4.42 0 014.42-4.42z"/></g><defs><filter id="f" width="400%" height="400%" x="-200%" y="-200%" color-interpolation-filters="sRGB" filterUnits="objectBoundingBox"><feGaussianBlur xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" stdDeviation="7.73"/><feOffset xmlns="http://www.w3.org/2000/svg" dy="10" result="pf_100_offsetBlur"/><feFlood xmlns="http://www.w3.org/2000/svg" flood-color="#000" flood-opacity=".33"/><feComposite xmlns="http://www.w3.org/2000/svg" in2="pf_100_offsetBlur" operator="in" result="pf_100_dropShadow"/><feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="pf_100_dropShadow"/></filter></defs><g filter="url(#f)"><path id="box_2" fill="#fff" d="M91.96 0h73.97a4.73 4.73 0 014.73 4.73v73.95c0 2.61-2.12 4.73-4.73 4.73H91.96a4.73 4.73 0 01-4.73-4.73V4.73c0-2.61 2.12-4.73 4.73-4.73z"/></g><path id="title" fill="#666161" d="M182.63 49.2h4.52v13.86q0 2.38-1.06 4.16-1.06 1.79-3.07 2.74-2 .95-4.74.95-4.13 0-6.42-2.11-2.29-2.12-2.29-5.8V49.2h4.53v13.11q0 2.48 1 3.64 1 1.16 3.3 1.16 2.22 0 3.22-1.17 1-1.16 1-3.65V49.2zm20.84 16.56q0 2.52-1.75 3.84-1.75 1.31-5.23 1.31-1.8 0-3.05-.24-1.26-.24-2.36-.7v-3.7q1.24.59 2.8.98 1.56.4 2.75.4 2.43 0 2.43-1.4 0-.54-.32-.87-.32-.33-1.11-.74-.8-.42-2.11-.98-1.9-.79-2.78-1.46-.88-.68-1.29-1.55-.4-.87-.4-2.14 0-2.19 1.7-3.38 1.68-1.2 4.79-1.2 2.96 0 5.76 1.3l-1.35 3.22q-1.23-.53-2.3-.87-1.07-.33-2.18-.33-1.98 0-1.98 1.07 0 .6.64 1.04.63.44 2.79 1.3 1.92.78 2.8 1.45.9.67 1.33 1.55.42.88.42 2.1zM88.94 70.62h-4.9l-1.55-5.1h-7.8l-1.56 5.1h-4.9l7.57-21.5h5.55l7.59 21.5zm-13.11-8.9h5.58q-2.16-6.93-2.43-7.84-.27-.91-.39-1.44-.48 1.88-2.77 9.28zm24.56-7.78q2.9 0 4.54 2.26 1.64 2.26 1.64 6.2 0 4.06-1.69 6.29-1.7 2.22-4.6 2.22-2.9 0-4.53-2.1h-.31l-.75 1.81h-3.41v-22.8h4.47v5.31q0 1.01-.18 3.24h.18q1.56-2.43 4.64-2.43zm-1.44 3.57q-1.65 0-2.41 1.02-.76 1.02-.8 3.36v.48q0 2.64.8 3.78.77 1.15 2.47 1.15 1.38 0 2.2-1.27.8-1.27.8-3.69 0-2.41-.81-3.62-.82-1.2-2.25-1.2zm14.87 4.9q0 2.42.8 3.67t2.6 1.25q1.79 0 2.57-1.24.79-1.24.79-3.69 0-2.43-.8-3.64-.79-1.22-2.59-1.22-1.78 0-2.58 1.2-.79 1.22-.79 3.66zm11.33 0q0 4-2.11 6.25t-5.88 2.25q-2.35 0-4.16-1.03-1.8-1.03-2.77-2.96-.96-1.94-.96-4.52 0-4.01 2.1-6.24 2.09-2.22 5.88-2.22 2.36 0 4.16 1.02 1.8 1.03 2.77 2.95.97 1.92.97 4.5zm18.72 8.21h-3.43l-.6-2.1h-.24q-.71 1.15-2.03 1.77-1.32.62-3 .62-2.89 0-4.35-1.54-1.47-1.55-1.47-4.45V54.24h4.47v9.57q0 1.77.63 2.66.63.88 2 .88 1.88 0 2.72-1.25.83-1.25.83-4.15v-7.7h4.47v16.37zm11.58-3.27q1.18 0 2.82-.5v3.32q-1.67.74-4.1.74-2.68 0-3.9-1.35-1.23-1.36-1.23-4.07v-7.9h-2.14v-1.88l2.46-1.5 1.29-3.45h2.86v3.48h4.58v3.36h-4.58v7.9q0 .95.53 1.4.53.45 1.41.45z"/></g></svg>
            </div>
            <article class="about_info">
                <div class="avatar">
                    <!-- onwer picture -->
                    <img src="@/assets/images/png/owner.png" aria-label="The owner of Shoesters" alt="The owner of Shoesters" loading="lazy">
                </div>
                <p>Formerly the Birkenstock Footprints shoe store we all knew and loved, Shoesters has evolved a little since your last visit… We have added a couple of other brands to the mix, but remain focused on helping you and your feet be their happiest, A.K.A. most comfortable. After all, your feet are your foundation right? If you take care of them, they’ll take care of the rest of you!</p><br>
                <p>Shoesters – that is who we are and what we do. We fit and sell the world’s best shoes. We are committed to the health and well-being of our patrons’ feet while constantly remaining aware of their sense of style. We are proud to provide world class customer service and to give every customer the benefit of a proper fit.</p>
            </article>
        </section>

<!-- 
brands******
-->
        <section class="brands">
            <div class="brands_container flex flex_dr_c flex_ai_c">
                <div class="image">
                    <!-- shoe image -->
                    <img class="brands_shoe shoe" src="@/assets/images/png/shoe_3.png" aria-label="A single shoe" alt="One single shoe" loading="lazy">
                    <div class="brands_title flex">
                        <!-- background svg -->
                        <img class="brands_title title" src="@/assets/images/svg/brands.svg" role="presentation" loading="lazy">
                        <div class="space"></div>
                    </div>
                </div>
            </div>
        </section>

<!-- 
list of shoes******
-->
        <section class="shoes">
            <div class="shoes_container">
                <!-- list of all shoes -->
                <img src="@/assets/images/svg/shoes.svg" aria-label="A list of all shoe brands Shoesters is partnered with" alt="A list of all shoe brands Shoesters is partnered with" loading="eager">
            </div>
        </section>

<!-- 
locations******
-->
        <section class="locations">
            <!-- swirl blob -->
            <img class="locations_swirl" src="@/assets/images/svg/swirl.svg" role="presentation">
            <div class="locations_container">
                <div class="logo_container">
                    <!-- location svg logo -->
                    <img src="@/assets/images/svg/location_logo.svg" aria-label="locations"  alt="Locations" loading="lazy">
                </div>
                <div class="locations_map">
                    <!-- google maps -->
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198.43667849469907!2d-76.70722873942897!3d37.271738785250704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b0890bab142381%3A0x2579bc50318b359d!2sShoesters!5e0!3m2!1sen!2sus!4v1614784045014!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    <div class="stores">
                        <!-- store locations for mobile devices -->
                        <div class="mobile_map">
                            <div class="location location-one">
                                <p>
                                    <i class="fas fa-map-marker-alt"></i> 4015<br>
                                    210 2nd Street North, Suite 100<br>
                                    Minneapolis, MN  55401<br>
                                    (612) 836-1121<br><br>
                                </p>
                            </div>
                            <div class="location location-two">
                                <p><i class="fas fa-map-marker-alt"></i> 4036<br>
                                    1062 Grand Avenue, Suite 120 St.<br>
                                    Paul, MN  55105<br>
                                    (651) 292-0739<br><br>
                                </p>
                            </div>
                            <div class="location location-three">
                                <p><i class="fas fa-map-marker-alt"></i> 1126<br>
                                    560 Laskin Road, Suite 160 Virginia<br>
                                    Beach, VA  23451<br>
                                    (757) 428-9311<br><br>
                                </p>
                            </div>
                            <div class="location location-four">
                                <p><i class="fas fa-map-marker-alt"></i> 1101<br>
                                    105 Boundary Street North<br>
                                    Williamsburg, VA  23185<br>
                                    (757) 229-6999<br><br>
                                </p>
                            </div>
                            <h3>Hours</h3>
                            <p>Monday 10:00 am - 6:00 pm</p>
                        </div>
                        <!-- store locations for desktop devices -->
                        <div class="desktop_map">
                            <table>
                                <tr>
                                    <th>Store</th>
                                    <th>Address</th>
                                    <th>Telephone</th>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-map-marker-alt"></i> 4015</td>
                                    <td>210 2nd Street North, Suite 100 Minneapolis, MN  55401</td>
                                    <td>(612) 836-1121</td>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-map-marker-alt"></i> 4036</td>
                                    <td>1062 Grand Avenue, Suite 120 St. Paul, MN  55105</td>
                                    <td>(651) 292-0739</td>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-map-marker-alt"></i> 1126</td>
                                    <td>560 Laskin Road, Suite 160 Virginia Beach, VA  23451</td>
                                    <td>(757) 428-9311</td>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-map-marker-alt"></i> 1101</td>
                                    <td>105 Boundary Street North Williamsburg, VA  23185</td>
                                    <td>(757) 229-6999</td>
                                </tr>
                            </table>
                            <h3>Hours</h3>
                            <p>Monday 10:00 am - 6:00 pm</p>
                        </div>
                    </div>
                </div>
            </div>

<!-- 
contact******
-->
            <form id="contact" class="contact">
                <h2 class="contact_title">Let's Connect</h2>
                <input class="contact_name" name="name" type="text" aria-labelledby="Name" placeholder="Name" required>
                <input class="contact_email" name="email" type="email" aria-labelledby="Email" placeholder="Email" required>
                <input class="contact_zip" name="Zip" type="text" aria-labelledby="Zip Code" placeholder="Zip Code" required>
                <textarea class="contact_message" name="message" aria-labelledby="Message" placeholder="Message" cols="30" rows="4" required></textarea>
                <button class="contact_btn" type="submit" aria-label="Submit">Send</button>
            </form>

<!-- 
copyright******
-->
            <p class="locations_copyright">© 2020-2021 Shoesters. All Rights Reserved</p>
        </section>

    </div>

</template>

<script>
    import Nav from "@/components/Nav"
    import { onMounted, ref } from 'vue'
    import { gsap, Back } from "gsap"
    import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
    import { ScrollTrigger } from "gsap/ScrollTrigger"
    import { ScrollToPlugin } from "gsap/ScrollToPlugin"
    gsap.registerPlugin(ScrollToPlugin)
    gsap.registerPlugin(MorphSVGPlugin)
    gsap.registerPlugin(ScrollTrigger)
    import AOS from 'aos'
    import 'aos/dist/aos.css'
    AOS.init()

    export default {
        name: 'Home',
        components:{Nav},
        setup(props,context){
            const scrolling_element = ref(null) //scroll wrapper element that is being scrolled by user
            const change_color = ref(true) //variable that's passed to nav component for background change
            const toggled = ref(false)
            const closing = ref(false)
            const layoverClosed = ()=>{
                closing.value = false
            }
            const closeMobileMenu = ()=>{
                toggled.value = false
                closing.value = true
            }
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
            const goToAbout = ()=>{
                gsap.to(".scroll_wrapper", {duration: 1, scrollTo: {y: "#about", offsetY: 50}});
            }
            const goToContact = ()=>{
                gsap.to(".scroll_wrapper", {duration: 1.5, scrollTo: {y: "#contact", offsetY: 50}});
            }
            return{toggled,toggleLayover,layoverToggle,scrolling,scrolling_element,change_color,openNav,closeNav,pauseTimeLine,closing,closeMobileMenu,layoverClosed,goToAbout,goToContact}
        },
        mounted: function() {
            this.scrollAnimation();
        },
         methods: { //gsap scroll animations, needs some work
             scrollAnimation() {
                 let tl = gsap.timeline({
                     scrollTrigger: {
                        scroller: ".scroll_wrapper",
                        trigger: ".image_left",
                        start: "top bottom-=300px",
                        onUpdate: self => {
                            this.testing()
                        }
                     }
                 })
                 let tl2 = gsap.timeline({
                     scrollTrigger: {
                        scroller: ".scroll_wrapper",
                        trigger: ".services_title",
                        start: "top bottom-=300px",
                        onUpdate: self => {
                            this.testing()
                        }
                     }
                 })
                 let tl3 = gsap.timeline({
                     scrollTrigger: {
                        scroller: ".scroll_wrapper",
                        trigger: ".about",
                        start: "top bottom-=300px",
                        onUpdate: self => {
                            this.testing()
                        }
                     }
                 })
                 let tl4 = gsap.timeline({
                     scrollTrigger: {
                        scroller: ".scroll_wrapper",
                        trigger: ".brands_shoe",
                        start: "top bottom-=300px",
                        onUpdate: self => {
                            this.testing()
                        }
                     }
                 })
                 let tl5 = gsap.timeline({
                     scrollTrigger: {
                        scroller: ".scroll_wrapper",
                        trigger: ".locations_swirl",
                        start: "top bottom-=300px",
                        onUpdate: self => {
                            this.testing()
                        }
                     }
                 })
                 let tl6 = gsap.timeline({
                     scrollTrigger: {
                        scroller: ".scroll_wrapper",
                        trigger: ".contact_title",
                        start: "top bottom-=300px",
                        onUpdate: self => {
                            this.testing()
                        }
                     }
                 })
                 let tl7 = gsap.timeline({
                     scrollTrigger: {
                        scroller: ".scroll_wrapper",
                        trigger: ".locations_copyright",
                        start: "center bottom",
                        onUpdate: self => {
                            this.testing()
                        }
                     }
                 })

                tl.from('.image_left',{x: -100, opacity: 0, duration: 1, ease: "power2.out"})
                .from('.boot_image',{x: 100, opacity: 0, duration: 1, ease: "power2.out"},"-=0.4")
                .from('.intro_title',{x: -200, opacity: 0, duration: 1, ease: "power2.out"},"-=1")
                .from('.intro_p_1',{x: 200, opacity: 0, duration: 1, ease: "power2.out"},"-=0.8")
                .from('.intro_p_2',{x: 200, opacity: 0, duration: 1, ease: "power2.out"},"-=0.8")
                .from('.intro_p_3',{x: 200, opacity: 0, duration: 1, ease: "power2.out"},"-=0.8")

                tl2.from('.services_title',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1, 0.75)"})
                .from('.box_1',{x: 200, opacity: 0, duration: 1, ease: "elastic.out(1, 0.75)"},"-=0.8")
                .from('.box_2',{x: 200, opacity: 0, duration: 1, ease: "elastic.out(1, 0.75)"},"-=0.8")
                .from('.box_3',{x: 200, opacity: 0, duration: 1, ease: "elastic.out(1, 0.75)"},"-=0.8")
                
                tl3.from('.about',{opacity: 0, duration: 0.5, ease: "none"})
                .from('#box_5',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1.2, 0.75)"})
                .from('#box_4',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1.2, 0.75)"},"-=0.8")
                .from('#box_3',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1.2, 0.75)"},"-=0.8")
                .from('#box_2',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1.2, 0.75)"},"-=0.8")
                .from('#box_1',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1.2, 0.75)"},"-=0.8")
                .from('#title',{x: 100, opacity: 0, duration: 1, ease: "elastic.out(1.2, 0.75)"},"-=0.8")
                .from('.about_info',{scale: 0, opacity: 0, duration: 1.5, ease: "elastic.out(1, 1)"},"-=1.5")

                tl4.from('.brands_shoe',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1, 1)"})
                .from('.brands_title',{x: 20, opacity: 0, duration: 1, ease: "power2.out"},"-=0.5")
                .from('.shoes_container',{y: 100, opacity: 0, duration: 1, ease: "power2.out"},"-=0.5")
                
                tl5.from('.locations_swirl',{opacity: 0, duration: 0.5, ease: "none"})
                .from('.locations',{opacity: 0, duration: 1.5, ease: "none"})
                .from('.locations_map',{scale: 0, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.75)"},"-=1")
                .from('.logo_container',{y: 100, opacity: 0, duration: 1.2, ease: "elastic.out(1, 1)"},"-=1")
                
                tl6.from('.contact_title',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1, 0.5)"})
                .from('.contact_name',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1, 1)"},"-=0.8")
                .from('.contact_email',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1, 1)"},"-=0.8")
                .from('.contact_zip',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1, 1)"},"-=0.8")
                .from('.contact_message',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1, 1)"},"-=0.8")
                .from('.contact_btn',{scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1, 1)"},"-=0.8")
                
                tl7.from('.locations_copyright',{opacity: 0, duration: 1, ease: "elastic.out(1, 1)"})
             },
             testing(){
                gsap.to("#blob2", {delay: 1.2, duration: 1.5, morphSVG:"#blob1"})
             }
         }
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
        overflow-x: hidden; /* hides scroll horizontial */
    }
</style>