<template>
  <div class="metronome">
    <h3>Metronome</h3>
    <p>BPM: {{ bpm }}</p>
    <button @click="toggleMetronome">
      {{ isPlaying ? 'Stop Metronome' : 'Start Metronome' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    bpm: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isPlaying: false,
      intervalId: null,
      tickAudio: null,
      upTickAudio: null,
      beatCounter: 0,
    };
  },
  methods: {
    toggleMetronome() {
      if (this.isPlaying) {
        clearInterval(this.intervalId);
        this.isPlaying = false;
      } else {
        this.tickAudio = new Audio(
          'https://cdn.freesound.org/previews/250/250552_4570971-lq.mp3'
        );
        this.upTickAudio = new Audio(
          'https://cdn.freesound.org/previews/250/250551_4570971-lq.mp3'
        );
        const interval = (60 / this.bpm) * 1000;
        this.intervalId = setInterval(() => {
          this.playTick();
        }, interval);
        this.isPlaying = true;
      }
    },
    playTick() {
      if (this.beatCounter === this.$parent.config.repeat - 1) {
        this.upTickAudio.currentTime = 0;
        this.upTickAudio.play();
      } else {
        this.tickAudio.currentTime = 0;
        this.tickAudio.play();
      }
      this.$emit('tick');
      this.beatCounter = (this.beatCounter + 1) % this.$parent.config.repeat;
    },
  },
  watch: {
    bpm(newBpm) {
      if (this.isPlaying) {
        clearInterval(this.intervalId);
        const interval = (60 / newBpm) * 1000;
        this.intervalId = setInterval(() => {
          this.playTick();
        }, interval);
      }
    },
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>

<style>
.metronome {
  margin-top: 20px;
}
button {
  margin-top: 10px;
}
</style>