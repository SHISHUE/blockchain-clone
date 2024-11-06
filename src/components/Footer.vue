<script lang="ts" setup>
import BlockChainLogo from '../assets/icons/blockchain.png'
import XIcon from '../assets/icons/twitter.png'
import LinkedInIcon from '../assets/icons/linkedin.png'
import InstagramIcom from '../assets/icons/instagram.png'
import FaceBookIcon from '../assets/icons/facebook.png'
import qrCode from '../assets/icons/QR_code_for_mobile.png'
import globe from '../assets/icons/globe-earth.png'
import blockchainIcon from '../assets/icons/bitcoin (1).png'
import downArrow from '../assets/icons/down-arrow.png'

</script>

<template>
    <div class="w-full h-[88vh] flex  justify-center items-center  ">
        <div class="md:w-[60%] w-full h-full md:h-[85%]  ">
            <div class="flex flex-col md:flex-row gap-3 items-center">
                <img :src="BlockChainLogo" alt="logo" class="w-8">
                <h1 class="flex font-bold text-2xl text-[#111]">Blockchain <span class="text-[#666667]">.com</span>
                </h1>

                <div class="h-[0.005rem] ml-4 bg-black w-[50%]"></div>
                <div class="flex gap-4 items-center ml-4">
                    <img :src="XIcon" class="w-10 h-10 aspect-square ">
                    <img :src="LinkedInIcon" class="w-10 h-10 aspect-square">
                    <img :src="InstagramIcom" class="w-10 h-10 aspect-square">
                    <img :src="FaceBookIcon" class="w-10 h-10 aspect-square">


                </div>
            </div>

            <div class="flex flex-col md:flex-row h-full w-full gap-8  ">
                <div class="flex flex-col mx-auto gap-5  md:gap-56">
                    <div class="flex flex-col items-center mt-9" >
                        <div class="px-4 py-4 rounded-md  w-fit">
                            <img :src="qrCode" class="w-28 ">
                        </div>
                        <h2>Scan to Download</h2>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center gap-5 text-black">
                            <img :src="globe" alt="Globe Icon" class="w-8 h-8 aspect-square">
                            <select name="language" id="language" class="text-black focus:outline-none"
                                style="background-color: white;">
                                <option value="English" selected class="bg-transparent">English</option>
                                <option value="Hindi" class="bg-transparent">Hindi</option>
                                <option value="German" class="bg-transparent">German</option>
                            </select>
                        </div>


                        <div class="flex items-center gap-5 text-black">
                            <img :src="blockchainIcon" alt="Blockchain Icon" class="w-8 h-8 aspect-square">
                            <h2 class="text-lg font-semibold">Blockchain.com</h2>
                        </div>
                    </div>

                </div>

                <div class="flex flex-col xl:flex-row  w-full mt-12 gap-4  xl:gap-32 px-5   ">
                    <div>
                        <h1 class="font-semibold flex items-center gap-3 text-black text-xl">Products <span class="xl:hidden"><img :src="downArrow" class="w-5"></span></h1>
                        <div  class="flex-col gap-6 font-[500] hidden xl:flex mt-5 text-[#abafb8]">
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Wallet</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Exchange</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Explorer</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Institutional</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Earn</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Pay</h2>
                        </div>
                    </div>
                    <div>
                        <h1 class="font-semibold flex items-center gap-3 text-black text-xl">Resources <span class="xl:hidden"><img :src="downArrow" class="w-5"></span></h1>
                        <div class=" flex-col gap-6 font-[500] hidden xl:flex mt-5 text-[#abafb8]">
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">APIs</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Blog</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Podcast</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Bitcoin Price</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Ethereum Price</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Solana Price</h2>
                        </div>
                    </div>
                    <div>
                        <h1 class="font-semibold flex items-center gap-3 text-black text-xl">Company <span class="xl:hidden"><img :src="downArrow" class="w-5"></span></h1>
                        <div class=" flex-col gap-6 font-[500] hidden xl:flex mt-5 text-[#abafb8]">
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">About</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Careers</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Prime</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Ventures</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Support</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Legal & Privacy</h2>
                        </div>
                    </div>
                    <div>
                        <h1 class="font-semibold flex items-center gap-3 text-black text-xl">Learn <span class="xl:hidden"><img :src="downArrow" class="w-5"></span></h1>
                        <div class="flex-col gap-6 font-[500] hidden xl:flex mt-5 text-[#abafb8]">
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">What is Bitcoin?</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">What is a crypto wallet?</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">What is a DEX?</h2>
                            <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Learning Portal</h2>
                            <h1 class="font-semibold text-black text-xl">Buying Guides</h1>
                            <div class=" flex-col gap-6 font-[500] hidden xl:flex  mt-5 text-[#abafb8]">
                                <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Buy BTC</h2>
                                <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Buy ETH</h2>
                                <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Buy SOL</h2>
                                <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Buy ZETA</h2>
                                <h2 class="cursor-pointer hover:text-blue-400 transition-all duration-200">Buy XRP</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>