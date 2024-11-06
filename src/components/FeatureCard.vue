<script setup lang="ts">
import { onMounted, watchEffect, onUnmounted, ref } from 'vue';
import Btn from './Btn.vue';
import ExpendingDiv from './ExpendingDiv.vue';
const props = defineProps(['content'])
const { btnContent,
    title,
    img,
    bgImg,
    isRight,
    content,
    btn,
    bgColor,
    textColor,
    btnBgColor,
    btnTextColor,
    featureBtnBg,
    contentBorder } = props.content

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
    <div
        :class="[bgColor, textColor, 'xl:mt-[5rem]', 'sm:first:mt-[25rem]', 'first:mt-[13rem]', 'mt-[3rem]', 'sm:max-w-7xl', 'w-[96%]', 'mx-auto', 'h-[65vh]', 'sm:h-[90vh]', 'rounded-3xl']">
        <div v-if="isRight" class="flex sm:flex-row flex-col gap-5 h-full relative">
            <!-- left  -->
            <div class="sm:w-1/2 relative flex flex-col sm:justify-center  h-full px-3 py-4 xl:py-20 xl:pl-28">
                <div class="sm:py-3 sm:px-6 px-3 py-2 rounded-2xl flex items-center gap-2 w-fit " :class="featureBtnBg">
                    <img :src="btnContent.iconImg" alt="" :class="textColor" class="w-[36px] h-[36px]">
                    <span class="font-bold">{{ btnContent.text }}</span>
                </div>

                <h1 class="font-semibold sm:text-balance sm:my-10 my-5 sm:text-5xl text-2xl">{{ title }}</h1>

                <div v-if="typeof content == 'object'" class="flex flex-col gap-4 mb-14">
                    <ExpendingDiv v-for="(item, idx) of content" :key="idx" :title="item.title" :para="item.pera"
                        class="border-2 border-opacity-35" :class="bgColor, textColor, contentBorder" />
                </div>

                <div v-else>
                    {{ content }}
                </div>

                <div class="absolute bottom-2  sm:bottom-10">
                    <Btn :text="btn" :is-bg="true" :bg="btnBgColor" :text-color="btnTextColor"
                        class="text-xl sm:px-5 sm:py-3"></Btn>
                </div>

            </div>

            <!-- Right  -->
            <div v-if="mediumDevice" class="sm:w-1/2 sm:my-12 flex justify-center items-center"
                :class="{ 'absolute h-[80%] -right-[5.5rem]': btn === 'Explore now' }"
                :style="{ backgroundImage: `url(${bgImg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }">
                <img :src="img" />
            </div>

        </div>

        <div v-else class="flex gap-5 h-full">
            <!-- left  -->
            <div v-if="mediumDevice" class="w-1/2  mb-12 flex justify-center items-center"
                :style="{ backgroundImage: `url(${bgImg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }">
                <img :src="img" />
            </div>

            <!-- right  -->
            <div class="sm:w-1/2 relative h-full py-3 px-4 xl:py-20 xl:pr-28">
                <div class=" py-3 sm:px-6 px-4 rounded-2xl flex items-center gap-2 bg-blue-400/15 w-fit">
                    <img :src="btnContent.iconImg" alt="" :class="textColor" class="w-[36px] h-[36px] aspect-square">
                    <span class="font-bold">{{ btnContent.text }}</span>
                </div>

                <h1 class="font-semibold text-balance sm:my-10 my-5 text-2xl sm:text-5xl">{{ title }}</h1>

                <div class="flex flex-col gap-4 mb-10">
                    <ExpendingDiv v-for="(item, idx) of content" :key="idx" :title="item.title" :para="item.pera"
                        class="border-2 border-opacity-35" :class="bgColor, textColor, contentBorder" />
                </div>


                <div class="absolute bottom-4 sm:bottom-10">
                    <Btn :text="btn" :is-bg="true" :bg="btnBgColor" :text-color="btnTextColor" class="text-xl"></Btn>
                </div>

            </div>

        </div>
    </div>
</template>