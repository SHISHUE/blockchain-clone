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
  [`bg-[${props.bg}]`]: props.isBg,
  [`text-[${props.textColor}]`]: props.isBg,
}));
</script>

<template>
  <Button
    :class="[dynamicClasses, 'border-2 border-[#ffffff] py-2 px-4 text-[#ffffff] rounded-lg font-medium hover:opacity-85']"
  >
    {{ props.text }}
  </Button>
</template>
