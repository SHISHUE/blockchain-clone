<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watchEffect } from 'vue';
import BlockChainLogo from '../assets/icons/blockchain.png'
import menuIcon from '../assets/icons/menu.svg'
import Btn from '@/components/Btn.vue';
import SearchIcon from '../assets/icons/searchIcon.svg'
import ThreeDot from '../assets/icons/threeDot.svg'

const mediumDevice = ref(false)
const largeDevice = ref(false)

const width = ref(window.screen.width)

const data = reactive({
    "Products": ['Wallet', 'Exhange', 'Explorer', 'Pay', 'Institutional', 'Earn', 'Card', 'Learn', 'Prices', 'Charts', 'NFT'],
    "Resources": ['APIs', 'Status', 'Open Source', 'Research', 'Legal & Privacy', 'Support', 'Blog', 'Security', 'Podcast'],
    "Company": ['About', 'Careers', 'Press Center', 'Prime', 'Ventures']
})




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
        <nav class="py-4 px-3  xl:max-w-7xl xl:mx-auto  bg-[#121d33] text-[#c1c8d9]">
            <div class="flex justify-between items-center">
                <div class="flex items-center justify-between gap-1  font-[Inter Tight] ">
                    <img :src="BlockChainLogo" alt="logo" class="w-8">
                    <h1 class="flex font-bold text-2xl text-[#ffffff]">Blockchain <span
                            class="text-[#c1c8d9]">.com</span></h1>

                    <div class=" flex items-center gap-6 xl:ml-8 xl:gap-9 ml-8  font-[Inter Tight] font-semibold text-lg"
                        v-if="largeDevice">
                        <router-link to="#"
                            class="hover:bg-white/15 px-[1px] rounded-md w-fit transition-all duration-500">Wallet</router-link>
                        <router-link to="#"
                            class="hover:bg-white/15 px-[1px] rounded-md w-fit transition-all duration-500">Exchange</router-link>

                        <router-link to="#"
                            class="hover:bg-white/15 px-[1px] rounded-md w-fit transition-all duration-500">Explorer</router-link>

                        <router-link to="#"
                            class="hover:bg-white/15 px-[1px]  rounded-md w-fit transition-all duration-500">Pay</router-link>

                        <router-link to="#"
                            class="hover:bg-white/15 px-[1px]  rounded-md w-fit transition-all duration-500">Institutional</router-link>

                        <div
                            class="relative hover:bg-white/15   rounded-md w-fit transition-all duration-500 group flex items-center ">
                            <span class="cursor-pointer">
                                <img :src="ThreeDot" alt="dot-menu">
                            </span>
                            <div
                                class="absolute delay-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 w-[3vw] xl:top-12 h-[3vh] aspect-square rotate-45 bg-[#ffffff] shadow-xl">
                            </div>

                            <div
                                class="absolute  delay-200 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 top-12  -right-64 rounded-xl p-6  shadow-xl bg-[#ffffff]  max-w-[38rem] flex gap-16">
                                <div v-for="(items, keyOfItem) in data" :key="keyOfItem" class="flex flex-col gap-4">
                                    <h1 class="text-zinc-950 font-semibold font-[Inter Tight]">{{ keyOfItem }}</h1>
                                    <div class="flex flex-col gap-4 text-zinc-950/80 font-normal text-nowrap ">
                                        <router-link to="#" v-for="item in items" key="item"
                                            class="hover:bg-zinc-950/10 text-md rounded-md w-fit py-1 pl-1 pr-4 transition-all duration-500">
                                            {{
                                                item }}</router-link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <div class="flex items-center gap-5">
                    <div v-if="mediumDevice" class="flex items-center gap-4">




                        <div
                            class="w-12 h-12 aspect-square hover:bg-white/15 rounded-full bg-[#293448] flex justify-center items-center">
                            <img :src="SearchIcon" alt="s-icon" class="size-8">
                        </div>

                        <div class="flex gap-5">
                            <Btn :text="'Log In'" :is-bg="false" />
                            <Btn :text="'Sign Up'" :is-bg="true" :textColor="'text-[#111]'" :bg="'bg-[#ffffff]'" />

                        </div>

                    </div>
                    <img :src="menuIcon" alt="menu-icon" class="w-7 text-white" v-if="!largeDevice">
                </div>
            </div>
            <!-- search icon color #293448 -->
        </nav>

    </div>
</template>