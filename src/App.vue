<template>
  <div id="app">
    <ConfigPanel @updateConfig="handleConfigUpdate" />
    <Metronome :bpm="config.bpm" @tick="handleTick" ref="metronome" />
    <div class="chord-display">
      <ChordDisplay
        :currentChord="currentChord"
        :nextChord="nextChord"
        :showTab="config.showTab"
        :beatCounter="beatCounter"
        :repeat="config.repeat"
      />
    </div>
  </div>
</template>

<script>
import ConfigPanel from './components/ConfigPanel.vue';
import ChordDisplay from './components/ChordDisplay.vue';
import Metronome from './components/MetronomeDisplay.vue';

export default {
  components: {
    ConfigPanel,
    ChordDisplay,
    Metronome,
  },
  data() {
    return {
      config: {
        include: {
          major: true,
          minor: true,
          seventh: false,
          maj7: false,
          m7: false,
          sharp: false,
        },
        bpm: 90,
        repeat: 4,
        showTab: true,
      },
      chords: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'Am', 'Bm', 'Cm', 'Dm', 'Em', 'Fm', 'Gm',
        'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7',
        'Amaj7', 'Bmaj7', 'Cmaj7', 'Dmaj7', 'Emaj7', 'Fmaj7', 'Gmaj7',
        'Am7', 'Bm7', 'Cm7', 'Dm7', 'Em7', 'Fm7', 'Gm7',
        // 'A#', 'C#', 'D#', 'F#', 'G#', // Add more chords as needed
      ], // Add more chords as needed
      currentChord: 'A',
      nextChord: 'Am',
      beatCounter: 0, // Track beats to change chords
    };
  },
  methods: {
    handleConfigUpdate(newConfig) {
      this.config = newConfig;
    },
    handleTick() {
      this.beatCounter += 1;
      if (this.beatCounter >= this.config.repeat) {
        this.beatCounter = 0;
        this.updateNextChord();
      }
    },
    updateNextChord() {
      const { major, minor, seventh, maj7, m7 } = this.config.include;
      const filteredChords = this.chords.filter(chord => {
        if (major && /^[A-G]$/.test(chord)) return true;
        if (minor && /^[A-G]m$/.test(chord)) return true;
        if (seventh && /^[A-G]7$/.test(chord)) return true;
        if (maj7 && /^[A-G]maj7$/.test(chord)) return true;
        if (m7 && /^[A-G]m7$/.test(chord)) return true;
        return false;
      });

      this.currentChord = this.nextChord;
      this.nextChord = filteredChords[Math.floor(Math.random() * filteredChords.length)];
    },
    toggleMetronome() {
      this.$refs.metronome.toggleMetronome();
    },
    handleKeydown(event) {
      if (event.code === 'Space') {
        this.toggleMetronome();
      }
    },
    async releaseWakeLock() {
      if (this.wakeLock) {
        await this.wakeLock.release();
        this.wakeLock = null;
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    this.releaseWakeLock();
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}
.chord-display {
  margin-top: 20px;
}
</style>

