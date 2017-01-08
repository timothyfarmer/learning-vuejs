<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        text: state => state.messageStore.message.text
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
    <div class="alert alert-success" v-if="text">
      {{text}}
      <button class="close pull-right" aria-label="Close" @click="removeMessage">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>