<template>
  <article class="clock">
    <div class="hours-container">
      <div class="hours"></div>
    </div>
    <div class="minutes-container">
      <div class="minutes"></div>
    </div>
    <div class="seconds-container">
      <div class="seconds"></div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'clock',
  mounted () {
    // Get the local time using JS
    let date = new Date()
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()

    // Create an object with each hand and it's angle in degrees
    let hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6)
      },
      {
        hand: 'seconds',
        angle: (seconds * 6)
      }
    ]
    // Loop through each of these hands to set their angle
    for (let j = 0; j < hands.length; j++) {
      let elements = document.querySelectorAll('.' + hands[j].hand)
      for (let k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)'
        elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)'
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle)
        }
      }
    }
  }
}
</script>

<style scoped>
  .clock {
    border-radius: 50%;
    background: #fff url('../../assets/clock.svg') no-repeat center;
    background-size: 88%;
    height: 70px;
    margin-top: 14px;
    position: relative;
    width: 70px;
  }

  .clock:after {
    background: #000;
    border-radius: 50%;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 5px;
    height: 5px;
    z-index: 10;
  }

  .minutes-container, .hours-container, .seconds-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .hours {
    background: #000;
    height: 20%;
    left: 48.75%;
    position: absolute;
    top: 30%;
    transform-origin: 50% 100%;
    width: 2.5%;
    border-radius: 1px;
    z-index: 9;
  }

  .minutes {
    background: #000;
    height: 40%;
    left: 49%;
    position: absolute;
    top: 10%;
    transform-origin: 50% 100%;
    width: 2%;
    z-index: 10;
  }

  .seconds {
    background: red;
    height: 45%;
    left: 49%;
    position: absolute;
    top: 14%;
    transform-origin: 50% 80%;
    width: 2%;
    z-index: 8;
  }

  @keyframes rotate {
    100% {
      transform: rotateZ(360deg);
    }
  }

  .hours-container {
    animation: rotate 43200s infinite linear;
  }

  .minutes-container {
    animation: rotate 3600s infinite steps(60);
  }

  .seconds-container {
    animation: rotate 60s infinite steps(60);
  }

</style>
