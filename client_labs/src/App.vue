<template>
  <div class="wrapper" id="app">
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

<script>
export default {
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  components: {
  }
}
</script>
<style lang="sass">
  @import '../node_modules/bootstrap/dist/css/bootstrap.css'
  @import '../node_modules/bootstrap/dist/css/bootstrap-theme.css'
</style>
