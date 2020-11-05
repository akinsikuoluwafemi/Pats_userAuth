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
                        <h1 class="text-center display-2 teal--text text--accent-3">Sign in to Patricia</h1>
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
                          <v-text-field label="Email" name="Email" prepend-icon="email" type="text" color="teal accent-3"/>
                          <v-text-field id="password" label="password" name="Password" prepend-icon="lock" type="password" color="teal accent"/>
                          <v-text-field label="Email" name="Email" prepend-icon="email" type="text" color="teal accent-3"/>

                        </v-form>
                        <h1 class="text-center mt-3">Forget your password ?</h1>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4"></v-col>

                  </v-row>

                </v-window-item>
                <v-window-item :value="2">
               

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
    step: 1
  }),
  props: {
    source: String
  }
}
</script>