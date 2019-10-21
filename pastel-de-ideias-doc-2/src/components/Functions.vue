<template>
    <button 
        @click="$emit('onClick', id)"
        :class="{erase}">
        {{id}}
    </button>
</template>

<script>
export default {
    props: {
        id: {},
        erase: { type: boolean}
    }
}
</script>

<style>

</style>