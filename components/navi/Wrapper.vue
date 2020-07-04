<template>
    <div>
        <menuLink :url="'/dashboard'">
        <template v-slot:icon-word>
            LEAD
        </template>
        </menuLink>

        <naviButton>
            <template v-slot:button-icon>
                <i class="fas fa-bars"></i>
            </template>
        </naviButton>

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
