<template>
    <nuxt-link :to="url" class="
        w-56
        py-4
        transition-all
        duration-500
        ease-in-out
        focus:outline-none
        active:outline-none
        "
        >
        <slot name="icon-word"></slot>
    </nuxt-link>
</template>
<script>

export default {
    props:{
        url: String
    }
}
</script>