<script>
  import {mapState} from 'vuex'
  import TopMenu from './components/TopMenu'
  export default {
    components: {
      TopMenu
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
    <pre>{{ userStore }}</pre>
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>
<style lang="sass">
  @import '../node_modules/bootstrap/dist/css/bootstrap.css'
  @import '../node_modules/bootstrap/dist/css/bootstrap-theme.css'
</style>