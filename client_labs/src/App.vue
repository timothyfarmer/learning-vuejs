<script>
  import {mapState} from 'vuex'
  import TopMenu from './components/TopMenu'
  import Message from './components/message/Message'
  export default {
    components: {
      TopMenu,
      Message
    },
    created () {
      console.log('I have been created')
      const userObj = JSON.parse(window.localStorage.getItem('authUser'))
      this.$store.dispatch('setUserObject', userObj)
    },
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    }
  }
</script>

<template>
  <div>
    <message></message>
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>
<style lang="sass">
  @import '../node_modules/bootstrap/dist/css/bootstrap.css'
  @import '../node_modules/bootstrap/dist/css/bootstrap-theme.css'
</style>