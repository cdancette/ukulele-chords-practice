<template>
  <div class="chord-display">
    <div class="empty-chord"></div>
    <div
      class="chord-box current-chord"
      :style="{ backgroundColor: currentChordBackgroundColor }"
    >
      <h2>Current Chord</h2>
      <h3 >{{ getChordsName(currentChord) }}</h3>
      <img v-if="showTab" :src="getChordImageUrl(currentChord)" alt="Current Chord" />
    </div>
    <div class="chord-box next-chord">
      <h2>Coming Next</h2>
      <h3 >{{getChordsName(nextChord) }}</h3>
      <img v-if="showTab" :src="getChordImageUrl(nextChord)" alt="Next Chord" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentChord: {
      type: Object,
      required: true,
    },
    nextChord: {
      type: Object,
      required: true,
    },
    showTab: {
      type: Boolean,
      required: true,
    },
    beatCounter: {
      type: Number,
      required: true,
    },
    repeat: {
      type: Number,
      required: true,
    },
  },

  computed: {
    currentChordBackgroundColor() {
      console.log(this.beatCounter, this.repeat);
      if (this.beatCounter === this.repeat - 1) {
        return '#f5c182';
      }
      return '#D5ED9F';
    },
  },
  methods: {
    getChordImageUrl(chord) {
      const instrument = this.$parent.config.instrument; // Get the instrument from the parent component
      return `https://tombatossals.github.io/react-chords/media/${instrument}/chords/${chord.main}/${chord.variation}/1.svg`;
    },
    getChordsName(chordObj) {
      
      const map = {"major": "", "minor": "m"}
      const variationStr = map[chordObj.variation] || chordObj.variation;

      return chordObj.variation === 'major' ? chordObj.main : `${chordObj.main}${variationStr}`;
    }
  },
};
</script>

<style>
.chord-display {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.empty-chord {
  /* background-color: #f9f9f9; */
  padding: 20px;
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  text-align: center;
  flex: 1;
  width: 100px;
  margin: 10px;
  width: 300px;
}

.chord-box {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1;
  margin: 10px;
  max-width: 300px;
}

.current-chord {
  text-align: center;
  margin-right: auto;
}

.next-chord {
  text-align: center;
  margin-left: auto;
}

.chord-box img {
  width: 250px;
  height: auto;
  margin-top: 0px;
}
.chord-box h3 {
  margin-top: 2px;
  margin-bottom: 2px;
  padding: 0
}
</style>