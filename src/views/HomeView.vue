<script setup lang="ts">
import Btn from '@/components/Btn.vue';
import NavBarView from './NavBarView.vue';
import Card from '@/components/Card.vue';
import BitcoinIcon from '../assets/icons/bitcoin.png'
import EthereumIcon from '../assets/icons/coin.png'
import StellarIcon from '../assets/icons/stellar-coin.png'
import SolanaIcon from '../assets/icons/solana.png'
import RightArrowPng from '../assets/icons/right-arrow.png'

import { onMounted, onUnmounted, reactive, ref, watchEffect } from 'vue';

interface CardDataProps {
  img: string,
  name: string,
  shortName: string,
  price: string,
  growth: string
}

let CardData: CardDataProps[] = reactive([])

CardData = [{
  img: BitcoinIcon,
  name: "Bitcoin",
  shortName: "BTC",
  price: "67,665.22",
  growth: "+0.86%"
},
{
  img: EthereumIcon,
  name: "Ethereum",
  shortName: "ETH",
  price: "2,481.43",
  growth: "+0.10%"
},
{
  img: StellarIcon,
  name: "Stellar",
  shortName: "XLM",
  price: "0.09",
  growth: "-1.57%"
},
{
  img: SolanaIcon,
  name: "Solana",
  shortName: "SOL",
  price: "174.99",
  growth: "+1.48%"
}
]

// const width = ref(0)

// onMounted(() => {
//     const updateWidth = () => {
//         width.value = window.screen.width
//     }

//     window.addEventListener('resize', updateWidth)

//     onUnmounted(() => {
//         window.removeEventListener('resize', updateWidth)
//     })
// })

// watchEffect(() => {
//     if (width.value > 640) mediumDevice.value = true
//     if (width.value < 640) mediumDevice.value = false
//     if (width.value > 1024) {
//         largeDevice.value = true
//         // mediumDevice.value = false
//     }
//     if (width.value < 1024) {
//         largeDevice.value = false
//         // mediumDevice.value = true
//     }


// })


</script>

<template>

  <NavBarView />
  <main class="bg-heroBackground  relative  bg-cover  bg-left-top md:bg-right-bottom  text-[#ffffff]">
    <div
      class="xl:max-w-6xl flex flex-col gap-8 xl:mx-auto xl:h-[59vh] py-[7rem] px-4 xl:px-[5rem] xl:py-44 font-[Inter Tight] ">
      <h1 class="md:text-5xl text-2xl font-bold leading-tight">Be early to the future of finance</h1>
      <h3 class="md:text-2xl text-lg font-semibold text-balance  xl:font-medium leading-tight">Buy Bitcoin, Ethereum,
        and other leading cryptocurrencies on a
        platform trusted by millions.</h3>

      <div class="flex gap-3 ">
        <input type="text" placeholder="Your email address"
          class="md:w-[40%] text-sm text-white placeholder:text-white bg-white/15 rounded-lg backdrop-blur-md pl-2 md:px-3 py-3">
        <Btn :is-bg="true" :bg="'bg-[#ecf4fe]'" :text="'Sign Up'" :text-color="'text-[#2e67b6]'"
          class="text-sm md:px-6 md:py-3" />
      </div>

    </div>

    <div
      class="absolute  md:-bottom-96 lg:-bottom-48 -bottom-48 flex lg:w-[65rem] w-[100vw]  overflow-x-scroll md:flex-wrap md:overflow-x-hidden scroll-smooth px-8 xl:left-32 2xl:left-96 flex-col items-start gap-5">
      <div class="flex gap-8 md:flex-wrap lg:flex-nowrap">
        <Card v-for="(item, idx) in CardData" :key="idx" :item="item" />
      </div>

      <<router-link to='#'
        class="text-zinc-950 flex items-center sticky start-0 gap-2 hover:text-[#2e67b6] transition-all duration-300 ease-in-out font-[550] text-sm">

        More
        Prices <img :src="RightArrowPng" alt="" class="w-4">
        </router-link>
    </div>

  </main>

</template>
