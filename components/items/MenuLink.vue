<template>
    <nuxt-link :to="url" :class="{
        'w-56':showMenu,
        'w-16':!showMenu,
        'py-4':true,
        'transition-all':true,
        'duration-500':true,
        'ease-in-out':true,
        'focus:outline-none':true,
        'active:outline-none': true,
        }"
        >
        <slot name="icon-word"></slot>
    </nuxt-link>
</template>
<script>
import { mapState } from 'vuex'

export default {
    props:{
        url: String
    },
    computed:{
        ...mapState({
            showMenu: state=> state.dashboard.showMenu

        })
    },
}
</script>
