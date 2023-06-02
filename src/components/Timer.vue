<template>
  <div>
    <div class="timerbox">
      <h2>{{ displayTime }}</h2>
    </div>
    <div class="controls">
      <b-button variant="outline-light" v-on:click="playTimer()">
        <img src="../images/play.png" />
      </b-button>
      <b-button variant="outline-light" v-on:click="pauseTimer()">
        <img src="../images/pause.png" />
      </b-button>
      <b-button variant="outline-light" v-on:click="restartTimer()">
        <img src="../images/replay.png" />
      </b-button>
    </div>
  </div>
</template>

<script>
import moment from "moment";

let intervalId = null;
let paused = false;

export default {
  name: "Navigation",
  props: {
    // time is in minutes
    time: Number,
  },
  data: function () {
    return { seconds: moment(60 * 1000 * this.time) };
  },
  computed: {
    displayTime: function () {
      return this.seconds.format("mm:ss");
    },
  },
  mounted: function () {
    intervalId = setInterval(() => {
      this.seconds = moment(this.seconds.subtract(1, "seconds"));
    }, 1000);
  },
  methods: {
    pauseTimer() {
      paused = true;
      clearInterval(intervalId);
    },

    playTimer() {
      if (paused) {
        intervalId = setInterval(() => {
          this.seconds = moment(this.seconds.subtract(1, "seconds"));
        }, 1000);
      }
    },

    restartTimer() {
      this.seconds = moment(60 * 1000 * this.time);
    },
  },
};
</script>

<style scoped>
.timerbox {
  background-color: #776c58;
  color: white;
  width: 20rem;
  height: 10rem;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  margin: 1rem;
}

.timerbox h2 {
  padding: 0;
  margin: 0;
  font-size: 7rem;
}
</style>
