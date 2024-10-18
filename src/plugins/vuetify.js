import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        primary: '#1e88e5', 
        secondary: '#ff9800', 
        accent: '#9c27b0', 
        error: '#f44336', 
        info: '#2196f3', 
        success: '#4caf50', 
        warning: '#ff5722' 
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
