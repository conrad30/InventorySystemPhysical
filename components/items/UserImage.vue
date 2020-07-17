<template>
    <img :srcset="imgURL?imgURL:'../img/user.png'" class="p-1 w-full h-full object-cover">
</template>
<script>
import { mapState } from "vuex";

export default {
    computed:{
        ...mapState({
            imgURL : state => state.auth.user.imgUrl
        })
    }
}
</script>