<script setup lang="ts">
import Btn from '@/components/Btn.vue';
import NavBarView from './NavBarView.vue';
import Card from '@/components/Card.vue';
import BitcoinIcon from '../assets/icons/bitcoin.png'
import EthereumIcon from '../assets/icons/coin.png'
import StellarIcon from '../assets/icons/stellar-coin.png'
import SolanaIcon from '../assets/icons/solana.png'
import RightArrowPng from '../assets/icons/right-arrow.png'
import MobiIcon from '../assets/icons/mobiIcon.svg'
import FeatureOneImg from '../assets/icons/app-ease.png'
import FeatureOneBackground from '../assets/icons/homepage-app-shapes-bg.png'
import ProdExchangeIcon from '../assets/icons/prod-exchange-fiat-currencies.png'
import FeatureExchangeIcon from '../assets/icons/homepage-exchange-shapes-bg.png'
import ExchangeIcon from '../assets/icons/exchange-icon.png'
import InstitutionalImg from '../assets/icons/homepage-institutional-shapes-bg.png'
import InstitutionalIcon from '../assets/icons/bank.png'
import ExploreBg from '../assets/icons/homepage-explorer-shapes-bg.png'
import ProdExploreImg from '../assets/icons/prod-explore-blockchains.png'
import ExploreIcon from '../assets/icons/explore.svg'


import { reactive } from 'vue';
import FeatureCard from '@/components/FeatureCard.vue';
import Footer from '@/components/Footer.vue';

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


interface FeatureCardContentProp {
  btnContent: {
    iconImg: string;
    text: string;
  };
  title: string;
  img: string | null;
  bgImg: string;
  isRight: boolean;
  content: {
    title: string | null;
    pera: string;
  }[] | string;
  btn: string;
  bgColor: string;
}

let FEATURECARDCONTENT: FeatureCardContentProp[] = reactive([
  {
    btnContent: {
      iconImg: MobiIcon,
      text: "Wallet"
    },
    title: "The only crypto wallet you’ll ever need",
    img: FeatureOneImg,
    bgImg: FeatureOneBackground,
    isRight: true,
    content: [
      {
        title: "Buy, sell, and swap with ease",
        pera: "Use a card or bank account to buy BTC, ETH, stablecoins, and other assets."
      },
      {
        title: "Earn rewards on your crypto",
        pera: "Get up to 10% in annual rewards by putting your crypto to work."
      },
      {
        title: "Self-custody your crypto",
        pera: "Sleep better at night knowing only you can access your funds."
      },
      {
        title: "Connect to DeFi",
        pera: "Use dapps, collect NFTs, and unlock the power of web3."
      },
    ],
    btn: "Get started",
    bgColor: "bg-[#f7f6fe]",
    textColor: "text-[#724ce8]",
    btnBgColor: 'bg-[#724ce8]',
    btnTextColor: 'text-[#ffffff]',
    contentBorder: 'border-[#724ce8]',
    featureBtnBg: 'bg-[#734ce81a]'
  },
  {
    btnContent: {
      iconImg: ExchangeIcon,
      text: "Exchange"
    },
    title: "Lightning-fast crypto trading",
    img: ProdExchangeIcon,
    bgImg: FeatureExchangeIcon,
    isRight: false,
    content: [
      {
        title: "Trade in 3 fiat currencies",
        pera: "The Exchange supports USD, EUR, and GBP."
      },
      {
        title: "A matching engine that can keep up with you",
        pera: "The world’s fastest crypto matching engine, built by and for traders."
      },
      {
        title: "24/7 live chat support",
        pera: "Chat with customer support directly in the Exchange, anytime."
      },
      {
        title: "Margin Trading",
        pera: "Integrated margin trading tools"
      },
    ],
    btn: "Trade Now",
    bgColor: "bg-[#f7f6fe]",
    textColor: "text-[#724ce8]",
    btnBgColor: 'bg-[#724ce8]',
    btnTextColor: 'text-[#ffffff]',
    contentBorder: 'border-[#724ce8]'
  },
  {
    btnContent: {
      iconImg: InstitutionalIcon,
      text: "Institutional"
    },
    title: "High-touch crypto solutions for institutions",
    img: null,
    bgImg: InstitutionalImg,
    isRight: true,
    content: "Spot OTC, derivatives, structured products, and margin lending.",
    btn: "Become a client",
    bgColor: "bg-[#f1f2f7]",
    textColor: "text-[#131c34]",
    btnBgColor: 'bg-[#667186]',
    btnTextColor: 'text-[#ffffff]',
    featureBtnBg: 'bg-[#dfe3ec]',
    contentBorder: 'border-[#131c34]'
  },
  {
    btnContent: {
      iconImg: ExploreIcon,
      text: "Explore"
    },
    title: "Blockchain data is in our DNA",
    img: ProdExploreImg,
    bgImg: ExploreBg,
    isRight: true,
    content: [{
      title: 'Explore the top blockchains',
      pera: 'Confirm transactions, analyze the market, or simply learn more about crypto.'
    },
    {
      title: 'Powerful Blockchain Data API',
      pera: 'We’ve powered exchanges, data analysts, enthusiasts, and more.'
    },
    {
      title: 'Industry leading charts',
      pera: 'From hashrate, to block details, to mining information, and more.'
    },
    {
      title: 'Real-time crypto prices',
      pera: 'Get the latest prices and charts along with key market signals.'
    }],
    btn: "Explore now",
    bgColor: "bg-[#fff7f2]",
    textColor: "text-[#f28b23]",
    btnBgColor: 'bg-[#f28b24]',
    btnTextColor: 'text-[#ffffff]',
    featureBtnBg: 'bg-[#fff1e4]',
    contentBorder: 'border-[#f28b23]'
  }
]);





</script>

<template>

  <NavBarView />
  <!-- Hero Section  -->
  <main
    class="bg-[url('../assets/icons/home-hero-gradient.svg')]  relative xl:py-14 bg-cover  bg-left-top md:bg-right-bottom  text-[#ffffff]">
    <div
      class="xl:max-w-6xl flex flex-col gap-8 xl:mx-auto xl:h-[47vh] py-[7rem] px-4 xl:px-[5rem] xl:py-28 font-[Inter Tight] ">
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
      class="absolute  md:-bottom-96 lg:-bottom-32 -bottom-48 flex lg:w-[65rem] w-[100vw]  overflow-x-scroll md:flex-wrap md:overflow-x-hidden scroll-smooth px-8 xl:left-[12rem] no-scrollbar 2xl:left-[27rem] flex-col items-start gap-5 lg:gap-0">
      <div class="flex gap-6 md:flex-wrap lg:flex-nowrap">
        <Card v-for="(item, idx) in CardData" :key="idx" :item="item" class="cursor-pointer" />
      </div>

      <<router-link to='#'
        class="text-zinc-950 flex items-center sticky start-0 gap-2 hover:text-[#2e67b6] transition-all duration-300 ease-in-out font-[550] text-sm">

        More
        Prices <img :src="RightArrowPng" alt="" class="w-4">
        </router-link>
    </div>

  </main>


  <!-- Features section  -->
  <section class="xl:max-w-7xl xl:mx-auto " >
    <FeatureCard v-for="(item, idx) in FEATURECARDCONTENT" :key="idx" :content="item" />
  </section>

  <div class="bg-[#131d33] flex flex-col xl:flex-row justify-center items-center gap-5 py-10 sm:py-24 my-10 bg-[url('../assets/icons/Untitled-1.svg')] bg-no-repeat bg-auto ">
    <h1 class="sm:text-5xl text-2xl px-4 font-bold text-[#ffffff]">Let us take you from zero to crypto</h1>
    <Btn :is-bg="true" :bg="'bg-[#ffffff]'" :text="'Get started'" :text-color="'text-[#4b86ea]'" class="sm:px-6 sm:text-lg sm:py-4 font-semibold"></Btn>
  </div>

  <Footer />


</template>
