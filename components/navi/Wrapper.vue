<template>
    <div class="flex shadow-xl bg-white w-full items-center justify-between">
        <div class="flex">
        <menuLink :url="'/dashboard'" class="text-white bg-teal-600 hover:bg-teal-700">
        <template v-slot:icon-word>
            <div class="flex items-center justify-start text-lg overflow-x-hidden">
                <i class= "fab fa-canadian-maple-leaf ml-6 mr-4"></i>
                <label class ="ml-2 font-medium font-sans tracking-wide"> LEAD </label>
            </div>
        </template>
        </menuLink>
            
        <naviButton
                class="hover:bg-gray-300 hover:text-gray-600 mx-1">
            <template v-slot:button-icon>
                <i class="fas fa-bars"></i>
            </template>
        </naviButton>
        </div>
    </div>
</template>
<script>
    import NaviButton from "~/components/items/NaviButton.vue";
    import MenuLink from "~/components/items/MenuLink.vue";
    export default{
        components:{
            NaviButton,
            MenuLink
        }

    }
</script>
