<template>
</template>

<script>
import {mapState,mapActions} from'vuex'
export default {
    ...mapState('account',['user']),
    created(){
        this.logout()
    },
    methods:{
        ...mapActions('account',['logout']),
    },
}
</script>

<style>

</style>