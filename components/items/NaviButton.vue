<template>
    <button @click="callback"
        class="
            transition
            duration-300
            ease-in-out
            py-4
            px-6
            text-center
            focus:outline-none
            active:outline-none
        "
    >
        <slot name="button-icon"></slot>
    </button>
</template>
<script>
export default {
    props:{
        callback: Function
    }
}
</script>