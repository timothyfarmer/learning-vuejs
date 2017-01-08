<script>
  /*
   * Message is used to give the user one-time status messages on
   * certain events such as "You have logged in"
   */
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        message: state => state.messageStore.message
      })
    },
    methods: {
      removeMessage () {
        const message = {}
        message.text = ''
        this.$store.dispatch('removeMessage', message)
      }
    }
  }
</script>

<template>
  <div class="message_wrapper">
    <div class="alert alert-success" v-if="message.text">
      {{message.text}}
      <button class="close pull-right" aria-label="Close" @click="removeMessage">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>