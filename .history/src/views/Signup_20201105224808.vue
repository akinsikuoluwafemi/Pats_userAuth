<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="stop">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2"
                          v-bind:style="{ color: '#0153B4' }"
                        >
                          Sign up to Patricia
                        </h1>
                        <div class="text-center" mt-4>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mlt-4">Register with email</h4>
                        <v-form @submit.prevent="handleSignup" id="check-signup-form">
                          <v-text-field
                            v-model="username"
                            required

                            label="Username*"
                            name="username"
                            prepend-icon="email"
                            type="text"
                            v-bind:style="{ color: '#0153B4' }"
                          />
                        
                          <v-text-field
                          v-model="email"
                            required

                            label="Email*"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            v-bind:style="{ color: '#0153B4' }"
                          />

                            <v-text-field
                            v-model="password"
                            required
                            id="password"
                            label="password*"
                            name="Password"
                            prepend-icon="lock"
                            type="password"
                            v-bind:style="{ color: '#0153B4' }"
                          />

                        <h3 class="text-center mt-3">
                          Already have an account
                          <router-link to="/login"> Login</router-link> instead
                        </h3>

                       
                        </v-form>


                      </v-card-text>
                      <div class="text-center mt-3">
                         <v-btn
                         type="submit"
                         form="check-signup-form"
                          rounded
                          v-bind:style="{ background: '#0153B4' }"
                          dark
                          >Sign Up
                          
                          </v-btn>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      class=""
                      v-bind:style="{ background: '#0153B4' }"
                    >
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, there</h1>
                        <h5 class="text-center">
                          Enter your personal details and start your journey
                          with us
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <!-- <v-btn 
                        rounded
                        dark 
                        v-bind:style="{ background: '#fff', color: '#0153B4' }"


                        >
                          SIGN UP
                        </v-btn> -->
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
             
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  computed: mapGetters(['allUsers']),
  created
  data: () => ({
    email: '',
    password: '',
    username: '',
    authPassword: 'password',
    userArr: [],
    
  }),
  props: {
    source: String
  },
  methods: {
    ...mapActions(['fetchUsers']),

       handleSignup: function() {
         let user = {
        email: this.email,
        password: this.password,
        username: this.username
      }

      localStorage.setItem('user', JSON.stringify(user))
      this.addUser(user)
      localStorage.setItem('allUsers', JSON.stringify(this.userArr))

      alert('you have successfully Signed in')
      this.$router.push('/')
      window.location.reload(true)

      this.email = "",
      this.password = "",
      this.username = ""
      alert(JSON.stringify(this.userArr))

      
    },
    addUser: function(entry){
      return this.userArr.push(entry)
    }
  }
}
</script>
