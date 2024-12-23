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
        instrument: 'ukulele', // Add instrument property
        tones: {
          natural: true,
          flat: false,
        }, // Add tones property
      },
      chords: {
        natural: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        flat: ['Ab', 'Bb', 'Db', 'Eb', 'Gb'],
        variations: ['major', 'minor', '7', 'maj7', 'm7'],
      },
      currentChord: { main: 'A', variation: 'major' },
      nextChord: { main: 'A', variation: 'minor' },
      beatCounter: 0,
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
      const filteredVariations = [];
      if (major) filteredVariations.push('major');
      if (minor) filteredVariations.push('minor');
      if (seventh) filteredVariations.push('7');
      if (maj7) filteredVariations.push('maj7');
      if (m7) filteredVariations.push('m7');

      let mainChords = [];
      if (this.config.tones.natural) mainChords = mainChords.concat(this.chords.natural);
      if (this.config.tones.flat) mainChords = mainChords.concat(this.chords.flat);

      const randomMainChord = mainChords[Math.floor(Math.random() * mainChords.length)];
      const randomVariation = filteredVariations[Math.floor(Math.random() * filteredVariations.length)];

      this.currentChord = this.nextChord;
      this.nextChord = { main: randomMainChord, variation: randomVariation };
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

