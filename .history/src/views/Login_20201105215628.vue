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
                          Log in to Patricia
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
                        <v-form>
                          <v-text-field
                          required

                            v-model="email"
                            label="Email*"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            v-bind:style="{ color: '#0153B4' }"
                          />
                          <v-text-field
                          required

                            v-model="password"
                            id="password"
                            label="password*"
                            name="Password"
                            prepend-icon="lock"
                            type="password"
                            v-bind:style="{ color: '#0153B4' }"
                          />
                        
                        <h3 class="text-center mt-3">
                          Don't have an account
                          <router-link to="/signup"> Signup</router-link> instead
                        </h3>

                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          rounded
                          v-bind:style="{ background: '#0153B4' }"
                          dark
                          @submit="handleLogin"
                          
                          >Login</v-btn
                        >
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
                        <!-- <v-btn rounded outlined="" dark @click="step++">
                          Login
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
export default {
  data: () => ({
    email: '',
    password: ''
  }),
  props: {
    source: String
  },
  methods: {
    handleLogin: function() {
      return alert(JSON.stringify({
        email: this.email,
        password: this.password
      }))
    }

  }
}
</script>



