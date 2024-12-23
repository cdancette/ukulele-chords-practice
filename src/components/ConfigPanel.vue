<template>
  <div class="config-panel">
    <div>
      <label>
        Instrument:
        <select v-model="instrument" @change="emitConfigUpdate">
          <option value="ukulele">Ukulele</option>
          <option value="guitar">Guitar</option>
        </select>
      </label>
    </div>
    <div>
      <h4>Tones</h4>
      <label><input type="checkbox" v-model="tones.natural" @change="emitConfigUpdate" /> Natural</label>
      <label><input type="checkbox" v-model="tones.flat" @change="emitConfigUpdate" /> Flat (b)</label>
    </div>
    <h4>Include</h4>
    <div>
      <label><input type="checkbox" v-model="include.major" @change="emitConfigUpdate" /> Major</label>
      <label><input type="checkbox" v-model="include.minor" @change="emitConfigUpdate" /> Minor</label>
      <label><input type="checkbox" v-model="include.seventh" @change="emitConfigUpdate" /> 7</label>
      <label><input type="checkbox" v-model="include.maj7" @change="emitConfigUpdate" /> maj7</label>
      <label><input type="checkbox" v-model="include.m7" @change="emitConfigUpdate" /> m7</label>
    </div>
    <h4>Metronome</h4>
    <div>
      <label>
        {{ bpm }} BPM
        <input type="range" v-model="bpm" min="40" max="200" @input="emitConfigUpdate" />
      </label>
    </div>
    <div>
      <h4>Repeat</h4>
      <label>
        {{ repeat }}
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
      },
      bpm: 90,
      repeat: 4,
      showTab: true,
      instrument: 'ukulele', // Add instrument property
      tones: {
        natural: true,
        flat: false,
      }, // Add tones property
    };
  },
  methods: {
    emitConfigUpdate() {
      this.$emit('updateConfig', {
        include: this.include,
        bpm: this.bpm,
        repeat: this.repeat,
        showTab: this.showTab,
        instrument: this.instrument, // Include instrument in the emitted config
        tones: this.tones, // Include tones in the emitted config
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
.config-panel h4 {
  margin: 10px;
}
label {
  margin-right: 10px;
}
</style>