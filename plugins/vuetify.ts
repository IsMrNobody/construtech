import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      dark: false,
      defaultTheme: 'darkTheme',
      themes: {
        darkTheme: {
          colors: {
            primary: '#FF80AB', // color primario oscuro
            secondary: '#BDBDBD', // color secundario oscuro
            background: '#212121', // fondo oscuro
            surface: '#333333', // superficie oscura
            error: '#FF5252', // color de error oscuro
            info: '#64B5F6', // color de información oscuro
            success: '#8BC34A', // color de éxito oscuro
            warning: '#FFC107', // color de advertencia oscuro
          },
        },
        lightTheme: {
          colors: {
            background: '#FFFFFF',
            surface: '#FFFFFF',
            primary: '#6200EE',
            'primary-darken-1': '#3700B3',
            secondary: '#03DAC6',
            'secondary-darken-1': '#018786',
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
      },
    }
  })
  nuxtApp.vueApp.use(vuetify)
})