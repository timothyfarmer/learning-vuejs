<script>
import {mapState} from 'vuex'
import {loginUrl, userUrl, getHeader} from './../config.js'
import {clientId, clientSecret} from './../env'
export default {
  data () {
    return {
      login: {
        email: 'tfarmer4@gmail.com',
        password: 'password'
      }
    }
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore,
      messageStore: state => state.messageStore
    })
  },
  methods: {
    handleLoginFormSubmit () {
      const postData = {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username: this.login.email,
        password: this.login.password,
        scope: ''
      }
      const authUser = {}
      const message = {}
      this.$http.post(loginUrl, postData)
        .then(response => {
          if (response.status === 200) {
            console.log('Oauth Token', response)
            authUser.access_token = response.data.access_token
            authUser.refresh_token = response.data.refresh_token
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            this.$http.get(userUrl, {headers: getHeader()})
              .then(response => {
                console.log('User object ', response)
                authUser.email = response.body.email
                authUser.name = response.body.name
                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                this.$store.dispatch('setUserObject', authUser)
                message.text = 'You have logged in!'
                message.class = 'alert-warning'
                this.$store.dispatch('newMessage', message)
                console.log('message sent')
                this.$router.push({name: 'dashboard'})
              })
          }
        })
    }
  }
}
</script>

<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="wrapper" id="login_wrapper">
    <section class="login">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-heading"><strong>Login</strong></div>
            <div class="panel-body">
              <form v-on:submit.prevent="handleLoginFormSubmit()">
                <div class="form-group">
                  <label>Email Address</label>
                  <input
                          type="text"
                          class="form-control"
                          v-model="login.email"
                          placeholder="Enter Your Email"
                  >
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                          type="password"
                          class="form-control"
                          v-model='login.password'
                          placeholder="Enter Your Password"
                  >
                </div>
                <button class="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="sass">
  #login_wrapper
    margin-top: 50px
</style>