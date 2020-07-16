<template>
    <div class="flex flex-col">
        <contentCard class="mt-2 mb-4">
            <template v-slot:title>
                PRODUCT CALCULATION
            </template>
            <template v-slot:content>
                <div class="flex grid grid-cols-1 md:grid-cols-3 items-center pt-4 justify-center">
                    <div class="items-center my-2">
                        <div class="font-sans text-sm font-thin tracking-wide text-teal-700 text-center">
                            BEANS WEIGHT <br/>
                            BEFORE ROAST (KG)
                        </div>
                        <div class="font-sans font-medium text-3xl tracking-wide text-teal-600 text-center">
                            {{weightBeforeRoast?weightBeforeRoast: 0.0}}
                        </div>
                    </div>
                

                <div class="items-center my-2">
                    <div class="font-sans text-sm font-thin tracking-wide text-teal-700 text-center">
                        BEANS WEIGHT <br/>
                        AFTER ROAST (KG)
                    </div>
                    <div class="font-sans font -medium text-3xl tracking-wide text-teal-600 text-center">
                        {{weightAfterRoast?weightAfterRoast: 0.0}}
                    </div>
                </div>

                <div class="items-center my-2">
                    <div class="font-sans tezt-sm font-thin tracking-wide text-teal-700 text-center">
                        WATER LOSS (%)
                    </div>
                    <div class="font-sans text-sm font-medium text-3xl tracking-wide text-teal-600 text-center">
                        {{waterLose()| prettyAmount}}%
                    </div>
                </div>
                <div class="items-center my-2">
                    <div class="font-sans text-sm font-thin tracking-wide text-teal-700 text-center">
                       STOCK PRICE <br/>
                       PER KG (MYR)
                    </div>
                    <div class="font-sans text-sm font-medium text-3xl tracking-wide text-teal-600 text-center">
                       {{stockPerKg() | prettyAmount}}
                    </div>
                </div>
                <div class="items-center my-2">
                      <div class="font-sans text-sm font-thin tracking-wide text-teal-700 text-center">
                             ROASTED BEANS COST <br/>
                             PER KG (MYR)
                       </div>
                      <div class="font-sans text-sm font-medium text-3xl tracking-wide text-teal-600 text-center">
                             {{roastedBeanPerKG() | prettyAmount}}
                      </div>
                </div>
                <div class="items-center my-2">
                   <div class="font-sans text-sm font-thin tracking-wide text-teal-700 text-center">
                        BEANS COST PER PACK <br/> (MYR BY{{weightPerpack? weightPerpack:0}}GRAM)
                    </div>
                    <div class="font-sans text-sm font-medium text-3xl tracking-wide text-teal-600 text-center">
                       {{roastedBeanPerPack() | prettyAmount}}
                    </div>
                </div>
            </div>
            </template>
        </contentCard>
        <contentCard class="mt-2 mb-4">
            <template v-slot:title>
                New Bean
            </template>
            <template v-slot:content>
                <form class="flex grid grid-cols-1 md:grid-cols-4">
                    <div class="my-2 mx-2 relative md:col-span-2">
                        <inputElement
                            :labelName="'Bean Name'"
                            :labelId="'beanName'"
                            :inputType="'text'"
                            :model="bean"
                            @input="setBean($event)"
                            :disable="false"
                            />
                    <i class="fas fa-globe-asia absolute top-0 text-gray-500 right-0-p-3"></i>
                    </div>
                    <div class="my-2 mx-2 relative md:col-span-2">
                        <selectElement
                            :labelName="'ROAST LEVEL'"
                            :model="roastLevel"
                            @select="setRoastLevel($event)">
                            <template v-slot:select-options>
                                <option v-for="roast in roastLevelList" :key="roast" :value="roast">
                                        {{ roast }}
                                </option>
                            </template>
                        </selectElement>
                    </div>
                    <div class="my-2 mx-2 relative md:col-span-2">
                        <inputElement
                            :labelName="'WEIGHT PER PACK (GRAM)'"
                            :labelId="'weightPerpack'"
                            :inputType="'text'"
                            :model="weightPerpack"
                            @input="setWeightPerpack($event)"
                            :disabled="false"
                        />
                    <i class="fas fa-globe-asia absolute top-0 text-gray-500 right-0 p-3"></i>
                    </div>
                    <div class="my-2 mx-2 relative md:col-span-2">
                        <inputElement
                            :labelName="'WEIGHT BEFORE ROAST (KILOGRAM)'"
                            :labelId="'weightBeforeRoast'"   
                            :inputType="'text'"
                            :model="'weightBeforeRoast'"
                            @input="setWeightBeforeRoast($event)"
                            :disabled="false"
                        /> 
                    <i class="fas fa-globe-asia absolute top-0 text-gray-500 right-0 p-3"></i>
                </div>
                   <div class="my-2 mx-2 relative md:col-span-2">
                        <inputElement
                            :labelName="'WEIGHT AFTER ROAST (KILOGRAM)'"
                            :labelId="'weightAfterRoast'"   
                            :inputType="'text'"
                            :model="'weightAfterRoast'"
                            @input="setWeightAfterRoast($event)"
                            :disabled="false"
                        /> 
                    <i class="fas fa-globe-asia absolute top-0 text-gray-500 right-0 p-3"></i>
                </div>
                <div class="my-2 mx-2 relative md:col-span-2">
                    <inputElement
                        :labelName="'COFFEE PROFILE'"
                        :labelID="'profile'"
                        :inputType="'text'"
                        :model="profile"
                        @input="profile = $event"
                        :disabled="false"
                        /> 
                    <i class="fas fa-globe-asia absolute top-0 text-gray-500 right-0 p-3"></i>
                </div>
                <div class="my-2 mx-4 md:col-span-2">
                    <button class="
                                transition
                                duration-500
                                ease-in-out
                                bg-teal-600
                                font-sans
                                text-white
                                py-2
                                px-4
                                rounded-sm
                                shadow-xl
                                hover:bg-teal-700
                                focus:outline-none
                                active:outline-none
                                w-full
                                " type="button" @click="createProduct">New Product
                    </button>
                </div>
                </form>
            </template>
        </contentCard>

    </div>
</template>
<script>
    import ContentCard from "~/components/items/ContentCard.vue";
    import InputElement from "~/components/items/Input.vue";
    import SelectElement from "~/components/items/Select.vue";
    import { mapState, mapMutations, mapActions } from 'vuex';
    export default {
        layout:"dashboard",
        components:{
            ContentCard,
            InputElement,
            SelectElement
        },
        computed:{
            ...mapState({ bean: state => state.product.bean,
            roastLevel: state => state.product.roastLevel,
            roastLevelList: state => state.product.roastLevelList,
            weightPerpack: state => state.product.weightPerpack,      
            weightBeforeRoast: state => state.product.weightBeforeRoast,
            weightAfterRoast: state => state.product.weightAfterRoast,
            profile: state => state.product.profile,
            selectedStock: state => state.product.selectedStock
            })
        },
        /*data () 
            return{
                bean: '',
                roastLevel: '',
                roastLevelList:['Light Roast', 'Medium Roast','Dark Roast'],
                weightPerpack:'',
                weightBeforeRoast:'',
                weightAfterRoast:'',
                profile:'',
                selectedStock:{
                    price:500,
                    purchasedStock: 15
                }
            }
        },*/
      
           

        filters:{
            prettyAmount (amount){
                return parseFloat(amount).toFixed(2)
            }
        },
    methods: {
      ...mapMutations({
        resetStore: 'product/resetStore',
        setBean: 'product/setBean',
        setRoastLevel: 'product/setRoastLevel',
        setWeightPerpack: 'product/setWeightPerpack',
        setWeightBeforeRoast: 'product/setWeightBeforeRoast',
        setWeightAfterRoast: 'product/setWeightAfterRoast',
        setProfile: 'product/setProfile',
      }),

      ...mapActions({
        createProduct: 'product/createProduct'
      }),

            waterLose(){
                let wL = this.weightAfterRoast && this.weightBeforeRoast ?
            (1-(this.weightAfterRoast/this.weightBeforeRoast)) *100 : 0.0
            
                return wL

            },
            stockPerKg() {
                let spKG = Object.keys(this.selectedStock).length > 0 ?
                this.selectedStock.price/this.selectedStock.purchasedStock : 0.0
                return spKG
            },
            roastedBeanPerKG () {
            let rBKG = Object.keys(this.selectedStock).length > 0 &&
                this.weightAfterRoast? (this.weightBeforeRoast/this.weightAfterRoast)
                * (this.selectedStock.price/this.selectedStock.purchasedStock) : 0.0
                return rBKG

            },
            roastedBeanPerPack () {
            let rbPP = Object.keys(this.selectedStock).length > 0 &&
            this.weightAfterRoast && this.weightPerpack ?
            ((this.weightBeforeRoast/this.weightAfterRoast) *
            (this.selectedStock.price/this.selectedStock.purchasedStock))/this.calculatePack() : 0.0
                return rbPP
                },
                calculatePack:function(){
                    let packs = parseInt(this.weightAfterRoast/(this.weightPerpack/1000))
                    return packs
                }
           
    },
    beforeDestroy() {
      this.resetStore();
    }

  }
    
</script>
