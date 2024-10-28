<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  text: String,
  isBg: Boolean,
  bg: String,
  textColor: String,
  isDisable: Boolean,
});


const dynamicClasses = computed(() => ({
  [`${props.bg}`]: props.isBg,
  [`${props.textColor}`]: props.isBg,
  [`text-[#ffffff] `]: !props.isBg
}));
console.log(dynamicClasses);
</script>

<template>
  <button
    :class="[dynamicClasses, 'border-2 border-[#ffffff] py-2 px-4 rounded-lg font-medium hover:opacity-85']"
  >
    {{ props.text }}
  </button>
</template>
