import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

async function requestWakeLock() {
  try {
    const wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', () => {
      console.log('Screen Wake Lock released:', wakeLock.released);
    });
    console.log('Screen Wake Lock acquired:', wakeLock.released);
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
}

requestWakeLock();
