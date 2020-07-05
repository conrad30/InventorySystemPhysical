<template>
<div class="flex flex-col">
    <div class="pl-4 cursor-text font-sans font-medium" style="font-size: .55rem;color: #323232;">
        {{labelName}}
    </div>
    <div class="relative">
        <select 
            v-model="inputModel"
            :class="{
                'appearance-none':true,
                'rounded-xs':false,
                'text-gray-600':true,
                'pl-4':true,
                'pt-4':false,
                'pb-2':true,
                'font-sans':true,
                'focus:outline-none':true,
                'active:outline-none':true,
                'tracking-wide':true,
                'border-b':true,
                'shadow-lg':true,
                'cursor-pointer':true,
                'w-full':true,
                'filled':(Object.keys(this.model).length > 0)? true : false,
            }"
            >
            <option disabled value="" selected>Please select one</option>
            <slot name="select-options">
            </slot>
        </select>
        <div class="absolute top-0 right-0 pr-2">
            <i class="fas fa-sort-down text-gray-600"></i>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        labelName: String,
        model: String,
        optionList: Array
    },
    computed:{
        inputModel: {
            get(){
                return this.model;
            },
            set(val){
                this.$emit('select', val);
            }
        }
    }
}
</script>
<style>
.styled-select select{
    padding-top: 10px;
    padding-bottom: 10px; 
}
</style>