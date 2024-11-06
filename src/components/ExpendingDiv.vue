<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['title', 'para'])

const isExpended = ref(false)



</script>

<template>
    <div :class="{ 'h-fit': isExpended }"
        class=" flex text-lg cursor-pointer   flex-col gap-1 px-4  h-8 xl:h-14 overflow-hidden transition-all duration-200 rounded-lg"
        @click="isExpended = !isExpended">
        <h1 class="font-[500] xl:py-3">{{ props.title }}</h1>
        <h2 class="text-balance font-[500] py-1">{{ props.para }}</h2>
    </div>
</template>