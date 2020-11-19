<template>
  <div class="container">
    <!-- <canvas id="drawCanvas" width="400" height="300"></canvas> -->
    <video id="inputVideo" width="400" height="300" controls>
      <source src="/test.mp4" type="video/mp4" />
    </video>
    <canvas id="drawCanvas" width="400" height="300"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ctracker: new clm.tracker(),
      videoInput: null,
      canvasInput: null,
      cc: null,
    }
  },
  methods: {
    positionLoop() {
      requestAnimationFrame(this.positionLoop)
      var positions = this.ctracker.getCurrentPosition()
      console.log(positions)
    },
    drawLoop() {
      requestAnimationFrame(this.drawLoop)
      this.cc.clearRect(0, 0, this.canvasInput.width, this.canvasInput.height)
      this.ctracker.draw(this.canvasInput)
    },
  },
  mounted() {
    this.videoInput = document.getElementById('inputVideo')
    this.canvasInput = document.getElementById('drawCanvas')
    this.cc = this.canvasInput.getContext('2d')

    // var ctracker = new clm.tracker()
    this.ctracker.init()
    this.ctracker.start(this.videoInput)
    // this.positionLoop()
    this.drawLoop()
  },
}
</script>

<style>
</style>
