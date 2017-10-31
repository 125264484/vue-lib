<template>
    <div class="Test" @click="test">{{msg}}</div>
</template>
<script>
    export default {
        data() {
            return {
                msg: "hi lib"
            }
        },
        methods: {
            test() {
                console.log(this.$ajax);
            }
        }
    }
</script>
<style>

</style>