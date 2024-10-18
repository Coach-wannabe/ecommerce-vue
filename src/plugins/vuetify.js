import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        primary: '#1e88e5', // Custom primary color
        secondary: '#ff9800', // Custom secondary color
        accent: '#9c27b0', // Custom accent color
        error: '#f44336', // Error color
        info: '#2196f3', // Info color
        success: '#4caf50', // Success color
        warning: '#ff5722' // Warning color
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
});

export default vuetify;
