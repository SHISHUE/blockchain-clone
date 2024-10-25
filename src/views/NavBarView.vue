<script setup lang="ts">
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import BlockChainLogo from '../assets/icons/blockchain.png'
import menuIcon from '../assets/icons/menu.svg'
import Btn from '@/components/Btn.vue';
import SearchIcon from '../assets/icons/searchIcon.svg'
import ThreeDot from '../assets/icons/threeDot.svg'

const mediumDevice = ref(false)
const largeDevice = ref(false)

const width = ref(window.screen.width)

onMounted(() => {
    const updateWidth = () => {
        width.value = window.screen.width
    }

    window.addEventListener('resize', updateWidth)

    onUnmounted(() => {
        window.removeEventListener('resize', updateWidth)
    })
})

watchEffect(() => {
    if (width.value > 640) mediumDevice.value = true
    if (width.value < 640) mediumDevice.value = false
    if (width.value > 1024) {
        largeDevice.value = true
        // mediumDevice.value = false
    }
    if (width.value < 1024) {
        largeDevice.value = false
        // mediumDevice.value = true
    }


})

</script>
<template>
    <div class="bg-[#121d33] border-b-[1px] border-[#c1c8d963]">
        <nav class="py-4 px-3 xl:max-w-7xl xl:mx-auto bg-[#121d33] text-[#c1c8d9]">
            <div class="flex justify-between items-center">
                <div class="flex items-center justify-between gap-1  font-[Inter Tight] ">
                    <img :src="BlockChainLogo" alt="logo" class="w-8">
                    <h1 class="flex font-bold text-2xl text-[#ffffff]">Blockchain <span
                            class="text-[#c1c8d9]">.com</span></h1>
                    <!-- Links -->
                    <div class=" flex items-center gap-6 xl:ml-8 xl:gap-9 ml-8  font-[Inter Tight] font-semibold text-lg"
                        v-if="largeDevice">
                        <router-link to="#">Wallet</router-link>
                        <router-link to="#">Exchange</router-link>

                        <router-link to="#">Explorer</router-link>

                        <router-link to="#">Pay</router-link>

                        <router-link to="#">Institutional</router-link>

                        <div class="relative flex items-center">
                            <span>
                                <img :src="ThreeDot" alt="dot-menu">
                            </span>
                            <div class="absolute top-10 w-[3vw] xl:top-12 h-[3vh] aspect-square rotate-45 bg-[#ffffff] shadow-xl"></div>

                            <div class="absolute  top-12 -right-56 text-nowrap rounded-xl p-3 shadow-xl bg-[#ffffff]  w-[50vw]">hello</div>

                        </div>
                    </div>
                </div>


                <div class="flex items-center gap-5">
                    <div v-if="mediumDevice" class="flex items-center gap-4">



                        <!-- search icon  -->
                        <div class="w-12 h-12 aspect-square rounded-full bg-[#293448] flex justify-center items-center">
                            <img :src="SearchIcon" alt="s-icon" class="size-8">
                        </div>

                        <div class="flex gap-5">
                            <Btn :text="'Log In'" :is-bg="false" />
                            <Btn :text="'Sign Up'" :is-bg="true" :bg="'#ffffff'" :text-color="'#121d33'" />

                        </div>

                    </div>
                    <img :src="menuIcon" alt="menu-icon" class="w-7 text-white" v-if="!largeDevice">
                </div>
            </div>
            <!-- search icon color #293448 -->
        </nav>

    </div>
</template>