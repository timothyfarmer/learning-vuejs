<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        text: state => state.messageStore.message.text
      })
    },
    data () {
      return {
        isHidden: false
      }
    },
    methods: {
      hide () {
        this.isHidden = true
      }
    }
  }
</script>

<template>
  <div class="message_wrapper">
    <div class="alert alert-success alert-dismissible" v-if="text && !isHidden">
      <ul>
        <li>
          {{text}}
          <button class="close pull-right" aria-label="Close" @click="hide">
            <span aria-hidden="true">&times;</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>