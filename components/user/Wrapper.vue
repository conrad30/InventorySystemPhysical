<template>
  <div>
    <button type="button" class="h-12 w-12 rounded-full overflow-hidden focus:outline-none hover:shadow-2xl md:mr-1 lg:mr-1 xl:mr-1" @click="toggleProfileMenu" >

      <userProfileImg />
      </button>
    <div :class="{
         'transition-all':true,
         'duration-300':true,
         'ease-in-out':true,
         'absolute':true,
         'shadow-xl':true,
         'border':true,
         'bg-white':true,
         'rounded-sm':true,
         'mt-2':true,
         'w-48':profileMenu,
         'w-0':!profileMenu,
         'py-2':true,
         'right-0':true,
         'z-10':true,
         'mr-3':true,
         'md:mr-1':true,
         'lg:mr-1':true,
         'xl:mr-1':true,
         'overflow-hidden':true,
         'flex-shrink-0':true
         }">
      <button type="button" class="
              overflow-x-hidden
              flex
              w-full
              tracking-wide
              font-sans
              justify-center
              items-center
              transition-all
              duration-300
              ease-in-out
              px-4
              py-2
              text-teal-600
              cursor-pointer
              hover:bg-teal-600
              hover:text-white
              focus:outline-none
              active:outline-none"
              @click="signOut();toggleProfileMenu()"
              @mouseleave="toggleProfileMenu">
        <label class="flex-shrink-0 cursor-pointer">Sign out </label>
      </button>
      </div>
    </div>
</template>






<script>
  import UserProfileImg from "~/components/items/UserImage.vue"
  import { mapState, mapMutations, mapActions } from "vuex"

  export default {
    components: {
      UserProfileImg
    },
    computed: {

      ...mapState({
        profileMenu: state=> state.dashboard.profileMenu

      })
    },
    methods: {
      ...mapMutations({
        toggleProfileMenu:  "dashboard/toggleProfileMenu"
      }),
      ...mapActions({
        signOut: "auth/firebaseLogout"
      })

    }


  }
  </script>
