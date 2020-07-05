  <template>
    <div class=" flex h-screen w-full bg-red-800">
      <div class="m-auto w-full px-5 md:w-1/3">
        <div class="pl-1 text-white font-medium text-2xl tracking-wide text-center">
          Inventory System {{email}}
      </div>
      <form>
        <div class="my-2">
        <inputElement
          :labelName="'EMAIL'"
          :labelId="'email'"
          :inputType="'email'"
          :model="email"
          @input="email = $event"
          :disabled="false"
        
        />
        </div>
        <div class="my-2">
          <inputElement
          :labelName="'PASSWORD'"
          :labelId="'password'"
          :inputType="'password'"
          :model="password"
          @input="password = $event"
          :disabled="false"
        
        />
        </div>

        <button type="button" class="
                    transition
                    duration-500
                    ease-in-out
                    bg-red-500
                    rounded-xs
                    w-full
                    py-3
                    text-black
                    font-sans
                    font-bold
                    tracking-wide
                    hover:bg-red-200
                    hover:text-black-400
                    active:outline-none
                    focus:outline-none" @click="login">SIGN IN </button>
      </form>
      </div>
    </div>
  </template>

<script>
    import Logo from '~/components/items/Logo.vue'
    import InputElement from "~/components/items/Input.vue";

  export default{
      transition:{
        name:"inventory",
        mode:"out-in",
        duration: { enter:1000, leave:500},
        enterActiveClass: "animated fadeIn",
        leaveActiveClass: "animated fadeOut"


      },

      components: {
        Logo,
        InputElement 
      },
      data: function(){
        return{
          email: "",
          password: ""

        }
      },
      methods: {
        login: function(){
          this.$router.push("/dashboard")
        }
      }
    }

</script>
