<template>
    <div class="py-5 bg-white rounded-sm shadow-xl">
        <div class="px-5 py-2 flex-col">
            <div class="text-lg font-thin font-sans tracking-wide">
                <slot name="title"></slot>
            </div>
            <div>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>