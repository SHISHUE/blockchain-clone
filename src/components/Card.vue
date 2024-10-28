<script setup lang="ts">
const props = defineProps(['item'])
console.log(props.item);
</script>

<template>
    <div
        class="bg-[#ffffff] group transition-all duration-300 ease-in-out hover:bg-zinc-950/70 hover:shadow-blue-200 backdrop-blur-md flex md:w-56 w-64 rounded-md ml- px-4 py-5 shadow-lg flex-col">

        <div class="flex justify-between ">
            <img :src="props.item.img" alt="" class="w-10">
            <div class="flex gap-3 font-[550] text-sm">
                <h1 class="bg-[#efecfd] p-1 px-2 h-fit rounded-md text-[#4e32a2]">Buy</h1>
                <h1 class="bg-[#e4faea] p-1 px-2 h-fit rounded-md text-[#248551]">Trade</h1>
            </div>
        </div>

        <div class="flex gap-2 mt-2 mb-1">
            <h1 class="text-zinc-950 group-hover:text-white  transition-all duration-300   font-[550]">
                {{ props.item.name }}</h1>
            <h1 class="text-[#359770] font-[550] group-hover:text-green-200  transition-all duration-300 ease-in-out ">
                {{ props.item.shortName }}</h1>
        </div>

        <div class="flex gap-2 mb-2">
            <h1 class="text-zinc-950 group-hover:text-white  transition-all duration-300  font-[550]">${{
                props.item.price }}</h1>
            <h1 :class="{ 'text-red-500 group-hover:text-red-500 transition-all duration-300 ease-in-out ': props.item.growth[0] == '-' }"
                class="text-[#359770]  transition-all duration-300 ease-in-out  group-hover:text-green-200 font-medium">
                {{ props.item.growth }}</h1>
        </div>
    </div>
</template>