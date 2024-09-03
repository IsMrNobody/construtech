<template>
  <div class="red">
    <v-container>
      <v-row>
        <v-col cols sm="6">
          <v-card>
            <v-card-title class="text-h5 bg-grey-lighten-3">
              STEEL & JOYNERY WORKS
            </v-card-title>
            <v-card-text>
              We thrive on jobs that other metal contractors avoid. From simple
              embeds to the most complex curved stair assemblies and challenging
              structural steel, we have what it takes to get the job done.
            </v-card-text>
          </v-card>
          <v-col>
            <nuxt-link to="/"><p>email@email.com</p></nuxt-link>
            <nuxt-link to="/"><p>email@email.com</p></nuxt-link>
            <nuxt-link to="/"><p>email@email.com</p></nuxt-link>
          </v-col>
        </v-col>

        <v-col>
          <v-card class="mx-auto" color="transparent" flat>
            <v-card-title class="text-h5 bg-grey-lighten-3">
              Contact
            </v-card-title>
            <v-form ref="form" v-model="isValid" class="pa-4 pt-6">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="phone"
                    color="primary"
                    label="Name"
                    variant="filled"
                    class="mr-3"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="phone"
                    color="primary"
                    label="Phone"
                    variant="filled"
                    class="mr-3"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    :rules="[rules.email]"
                    color="primary"
                    label="Email"
                    type="email"
                    variant="filled"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-textarea
                v-model="bio"
                color="primary"
                label="Message"
                rows="1"
                variant="filled"
                auto-grow
              ></v-textarea>
            </v-form>
            <!-- <v-divider></v-divider> -->
            <v-card-actions>
              <v-btn
                variant="outlined"
                size="x-large"
                color="primary"
                @click="form.reset()"
              >
                Send message
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    bio: "Quiero mandar a hacer la torre del señor de los anillos para una parrillera, pueden?",
    dialog: false,
    email: undefined,
    isValid: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: (v) =>
        !!(v || "").match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
        ) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: (v) => !!v || "This field is required",
    },
  }),
};
</script>

<style scoped>
.red {
  /* background-color: #ff8fd4; */
}
</style>
