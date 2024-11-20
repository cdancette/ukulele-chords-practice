<template>
  <div class="config-panel">
    <h3>Include</h3>
    <div>
      <label><input type="checkbox" v-model="include.major" @change="emitConfigUpdate" /> Major</label>
      <label><input type="checkbox" v-model="include.minor" @change="emitConfigUpdate" /> Minor</label>
      <label><input type="checkbox" v-model="include.seventh" @change="emitConfigUpdate" /> 7</label>
      <label><input type="checkbox" v-model="include.maj7" @change="emitConfigUpdate" /> maj7</label>
      <label><input type="checkbox" v-model="include.m7" @change="emitConfigUpdate" /> m7</label>
      <label><input type="checkbox" v-model="include.sharp" @change="emitConfigUpdate" /> #</label>
    </div>
    <div>
      <label>
        Metronome: {{ bpm }} BPM
        <input type="range" v-model="bpm" min="40" max="200" @input="emitConfigUpdate" />
      </label>
    </div>
    <div>
      <label>
        Repeat chord: {{ repeat }}
        <input type="range" v-model="repeat" min="1" max="10" @input="emitConfigUpdate" />
      </label>
    </div>
    <div>
      <label><input type="checkbox" v-model="showTab" @change="emitConfigUpdate" /> Show Tab</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    emitConfigUpdate() {
      this.$emit('updateConfig', {
        include: this.include,
        bpm: this.bpm,
        repeat: this.repeat,
        showTab: this.showTab,
      });
    },
  },
};
</script>

<style>
.config-panel {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}
label {
  margin-right: 10px;
}
</style>