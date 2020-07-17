<template>
    <div class="flex">
      <div class="md:w-1/2">
        <contentCard class="col-span-4">
          <template v-slot:title>
            ROASTED BEANS
            </template>
          <template v-slot:content>
            <div class="flex grid grid-cols-8">
              <div class="col-span-2 p-2 font-sans text-teal-700 font-thin text-sim">BEANS</div>
              <div class="col-span-2 p-2 font-sans text-teal-700 font-thin text-sim">ROAST LVL</div>
              <div class="col-span-4 p-2 font-sans text-teal-700 font-thin text-sim">Profile</div>
              </div>
            <div class="flex grid grid-cols-8" v-for="product in existProduct" :key="product.id">
              <div class="col-span-2 p-2 font-sans text-gray-700 text-sm">{{product.bean}}</div>
              <div class="col-span-2 p-2 font-sans text-gray-700 text-sm">{{product.roastLevel}}</div>
              <div class="col-span-4 p-2 font-sans text-gray-700 text-sm">{{product.profile}}</div>
            </div>

</template>
        </contentCard>
      </div>
    </div>
</template>
<script>
  import ContentCard from "~/components/items/ContentCard.vue";
  import { mapState, mapActions } from 'vuex';

    export default{
    layout: "dashboard",
    components: {
      ContentCard
    },
    computed: {
      ...mapState({
          existProduct: state => state.product.existProduct
      })
    },
    methods: {
      ...mapActions({
        getProduct : "product/getProduct"

      })

    },
    async mounted() {
        await this.getProduct()

    }
    }
</script>
