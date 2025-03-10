<template>
  <div class="access">
    <div class="Illegal">
      <h1 :style="{ color: '#fff' }">Illegal access</h1>
      <h4 :style="{ color: '#fff' }">
        You've illegally accessed and misused confidential security files.
      </h4>
    </div>
    <div class="moon">
      <div class="crater"></div>
    </div>

    <div class="footprints">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="astronaut">
      <div class="backpack"></div>
      <div class="head">
        <div class="helmet"></div>
      </div>

      <div class="neck"></div>

      <div class="body"></div>

      <div class="arm right">
        <div class="top"></div>
        <div class="bot"></div>
        <div class="hand"></div>
      </div>

      <div class="arm left">
        <div class="top"></div>
        <div class="bot"></div>
        <div class="hand"></div>
      </div>

      <div class="leg right">
        <div class="top"></div>
        <div class="bot"></div>
        <div class="foot"></div>
      </div>

      <div class="leg left">
        <div class="top"></div>
        <div class="bot"></div>
        <div class="foot"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.access {
  position: fixed;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #080808;
  overflow: hidden;
  background-image: radial-gradient(1px 1px at 5% 98%, #ffffff, #fff0),
  radial-gradient(1px 1px at 18% 79%, #ffffff, #fff0),
  radial-gradient(2px 1px at 26% 52%, #ffffff, #fff0),
  radial-gradient(1px 2px at 31% 20%, #e6e6e6, #fff0),
  radial-gradient(1px 1px at 41% 44%, #e8e8e8, #fff0),
  radial-gradient(1px 2px at 47% 6%, #ffffff, #fff0),
  radial-gradient(1px 1px at 50% 71%, #f5f5f5, #fff0),
  radial-gradient(2px 1px at 65% 50%, #e2e2e2, #fff0),
  radial-gradient(1px 1px at 54% 26%, #ffffff, #fff0),
  radial-gradient(2px 2px at 79% 54%, #efefef, #fff0),
  radial-gradient(1px 1px at 10% 32%, #ececec, #fff0),
  radial-gradient(1px 2px at 84% 60%, #ffffff, #fff0),
  radial-gradient(1px 1px at 87% 13%, #eaeaea, #fff0),
  radial-gradient(1px 1px at 69% 21%, #efefef, #fff0),
  radial-gradient(1px 2px at 62% 83%, #efefef, #fff0),
  radial-gradient(2px 1px at 81% 74%, #efefef, #fff0),
  radial-gradient(1px 1px at 36% 62%, #efefef, #fff0),
  radial-gradient(1px 1px at 94% 68%, #efefef, #fff0),
  radial-gradient(2px 1px at 98% 50%, #efefef, #fff0),
  radial-gradient(1px 1px at 95% 21%, #efefef, #fff0),
  linear-gradient(45deg, #000 5%, #000313 65%, #111 100%);
  background-repeat: repeat;
  background-size: 25% 25%, 33.33% 33.33%, 50% 50%, 20% 20%, 33.33% 33.33%,
  25% 18%, 33.33% 19%, 33.33% 21%, 23% 27%, 27.33% 35.33%, 18.33% 32.33%,
  28.33% 34.33%, 33.33% 30.33%, 25.33% 29.33%, 29.33% 31.33%, 20.33% 29.33%,
  30.33% 27.33%, 22.33% 33.33%, 15.33% 32.33%, 33.33% 22.33%, 100% 100%;
}

.Illegal {
  position: absolute;
  color: #ffffff;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.Illegal h1 {
  margin-top: 8%;
  font-size: 55px;
  letter-spacing: 4px;
}

.Illegal h1,
h4 {
  width: 100%;
  text-align: center;
}

.Illegal h4 {
  margin-top: 20px;
}

*:before,
*:after {
  content: "";
  position: absolute;
}

.access::before {
  width: 15vmax;
  height: 15vmax;
  background: radial-gradient(circle at 50% 100%, #000 0 50%, #fff0),
  radial-gradient(circle at 121% 39%, green 0 18%, #fff0 20%),
  radial-gradient(ellipse at 111% 26%, green 0 18%, #fff0 20%),
  radial-gradient(ellipse at 100% 15%, green 0 18%, #fff0 20%),
  radial-gradient(circle at 38% -15%, #ffffffb3 0 16%, #fff0 20%),
  radial-gradient(circle at 50% 100%, #000 0 50%, #008eff);
  border-radius: 100%;
  left: 10vmax;
  top: 10vmax;
  box-shadow: 0 -0.5vmax 1vmax -0.25vmax #9999ff45;
}

.moon {
  position: absolute;
  width: 250vmax;
  height: 100vmax;
  z-index: 1;
  border-radius: 100%;
  background: radial-gradient(
      circle at 50% 50%,
      #fdfdfd 0% 5vmax,
      #ffffff00 10vmax 100%
  ),
  #fff;
  box-shadow: 0 0 10vmax 1vmax #6493a9, 0 0 5vmax 5vmax #adadad80 inset,
  0 0 2vmax 1vmax #fdfdfd;
  left: calc(50% - 125vmax);
  top: 45vmax;
}

.moon:before {
  content: "";
  background: radial-gradient(
      circle at 100% 60%,
      #ffffff00 0% 60%,
      #dddddd 75% 100%
  );
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  border-radius: 100%;
}

.crater {
  content: "";
  position: absolute;
  width: 25vmax;
  height: 20vmax;
  border-radius: 100%;
  transform: rotateX(50deg) rotateY(-10deg) rotateZ(15deg);
  border: 1px dotted #404040;
  background: linear-gradient(225deg, #000000, #eaeaea99);
  box-shadow: 0 0 3vmax 1vmax #585858, 0 0 0.5vmax 0.5vmax #5d5d5d,
  2vmax 5vmax 5.5vmax 3.5vmax #484848, 0 0 5vmax 0.5vmax #444444,
  1vmax 3.5vmax 1.5vmax 0.5vmax #ababab;
  left: calc(50% - 25vmax);
  opacity: 0.35;
  bottom: calc(50% + 25vmax);
}

/*** ASTRONAUT ***/

.astronaut {
  width: 20vmax;
  height: 30vmax;
  right: -20vmax;
  position: absolute;
  top: 30vmax;
  z-index: 2;
  animation: walk-left 20s cubic-bezier(0.05, -0.01, 0.61, 0.99) 0s infinite,
  walk-up 5s cubic-bezier(0.35, 0.14, 1, 1) 1.5s infinite;
  margin-top: -10%;
}

@keyframes walk-left {
  0% {
    right: -20%;
  }

  20% {
    right: 10%;
  }

  45% {
    right: 40%;
  }

  70% {
    right: 70%;
  }

  100% {
    right: 100%;
  }
}

@keyframes walk-up {
  0%,
  100% {
    top: 30vmax;
  }

  20%,
  80% {
    top: 31vmax;
  }

  50% {
    top: 35vmax;
  }
}

.astronaut * {
  position: absolute;
}

.astronaut:before {
  background: #8a8a8a85;
  width: 13vmax;
  height: 7vmax;
  top: 105%;
  left: 22%;
  border-radius: 100%;
  filter: blur(10px);
  animation: shadow 5s cubic-bezier(0.35, 0.14, 1, 1) 1.5s infinite;
  opacity: 0.35;
}

@keyframes shadow {
  0%,
  100% {
    top: 105%;
    left: 25%;
  }

  20%,
  80% {
    top: 100%;
    left: 23%;
  }

  50% {
    top: 85%;
    left: 22%;
    height: 3vmax;
  }
}

.backpack {
  background: linear-gradient(
      91deg,
      #343535 0% 55%,
      #4b4e50 58% 75%,
      #6e7071 77% 88%,
      #c6c6c6 92% 100%
  );
  width: 30%;
  height: 38%;
  left: 57%;
  top: 20%;
  border-radius: 10% 17% 60% 10%;
  border-top: 0.2vmax solid #4b4e50;
}

.head {
  background: #b8b8b8;
  width: 46%;
  height: 27%;
  border-radius: 50%;
  left: 31%;
  top: 4%;
  border-bottom: 1vmax solid #9b9b9b;
  transform: rotate(-4deg);
  z-index: 3;
}

.head:before {
  width: 75%;
  height: 69%;
  border-radius: 50% 50% 0 0;
  left: 9%;
  top: 3%;
  border-top: 0.65vmax solid #c6c6c6;
  border-right: 0.15vmax solid transparent;
  border-left: 0.15vmax solid transparent;
  transform: rotate(9deg);
}

.head:after {
  background: radial-gradient(
      circle at 45% 25%,
      #2b2b2b 0 57%,
      #252525 58% 100%
  );
  width: 80%;
  height: 83%;
  border-radius: 50%;
  left: 5%;
  top: 13%;
  border: 0.25vmax solid #000;
  box-sizing: border-box;
}

.helmet {
  background: radial-gradient(circle at 8% 33%, #343434 0 5%, #fff0 6% 100%),
  radial-gradient(circle at 94% 42%, #343434 0 5%, #fff0 6% 100%),
  radial-gradient(circle at 25% 75%, #2b2b2b 0 35%, #fff0 36% 100%),
  radial-gradient(circle at 35% 70%, #2b2b2b 0 35%, #fff0 36% 100%),
  radial-gradient(circle at 45% 67%, #2b2b2b 0 35%, #fff0 36% 100%),
  radial-gradient(circle at 55% 69%, #2b2b2b 0 35%, #fff0 36% 100%),
  radial-gradient(circle at 65% 77%, #2b2b2b 0 35%, #fff0 36% 100%),
  radial-gradient(circle at 75% 87%, #2b2b2b 0 35%, #fff0 36% 100%),
  radial-gradient(circle at 85% 96%, #2b2b2b 0 35%, #fff0 36% 100%),
  radial-gradient(circle at 96% 49%, #2b2b2b 0 5%, #fff0 6% 100%),
  radial-gradient(circle at 4% 40%, #2b2b2b 0 5%, #fff0 6% 100%);
  width: 50%;
  height: 50%;
  border-radius: 100%;
  z-index: 3;
  left: 15%;
  top: 22%;
  transform: rotate(-16deg);
  color: #343434;
  color: #5d5d5d;
  background-color: #343434;
}

.helmet:before {
  background: #343434;
  width: 98%;
  height: 36%;
  border-radius: 100%;
  left: 2%;
  top: 25%;
  transform: rotate(5deg);
}

.helmet:after {
  background: #5d5d5d;
  width: 18%;
  height: 16%;
  border-radius: 100%;
  left: 58%;
  top: 14%;
  transform: rotate(27deg);
  box-shadow: -1.15vmax 0.35vmax 0vmax -0.2vmax #7a7a7a,
  -1.05vmax 0.25vmax 0vmax -0.2vmax #7a7a7a;
}

.neck {
  background: radial-gradient(
      circle at 43.95% 15%,
      transparent 0 61%,
      #666b6e 62% 100%
  );
  width: 48%;
  height: 10%;
  top: 17%;
  left: 30%;
  border-radius: 50% 50% 100% 100%;
  transform: rotate(3deg);
  z-index: 3;
}

.body {
  background: radial-gradient(
      circle at 50% -75%,
      #c6c6c6 0 80%,
      #5f5f5f 81% 85%,
      #c6c6c6 86% 100%
  );
  width: 45%;
  height: 30%;
  left: 32%;
  top: 31%;
  border-radius: 19% 23% 34% 37%;
  transform: rotate(-1deg);
  z-index: 2;
  border-right: 2vmax solid #888d90;
  box-sizing: border-box;
  border-bottom: 1vmax solid #888d90;
}

.body:before {
  background: radial-gradient(ellipse at 38% 65%, #888d90 0 13%, #fff0 15% 100%),
  radial-gradient(ellipse at 33% 65%, #888d90 0 13%, #fff0 15% 100%),
  radial-gradient(ellipse at 28% 65%, #888d90 0 13%, #fff0 15% 100%),
  radial-gradient(ellipse at 38% 30%, #666b6e 0 13%, #fff0 15% 100%),
  radial-gradient(ellipse at 33% 30%, #666b6e 0 13%, #fff0 15% 100%),
  radial-gradient(ellipse at 28% 30%, #666b6e 0 13%, #fff0 15% 100%),
  radial-gradient(ellipse at 41% 69%, #555555 0 13%, #fff0 15% 100%),
  radial-gradient(ellipse at 33% 69%, #555555 0 13%, #fff0 15% 100%),
  radial-gradient(ellipse at 28% 69%, #555555 0 13%, #fff0 15% 100%),
  radial-gradient(ellipse at 41% 34%, #444444 0 13%, #fff0 15% 100%),
  radial-gradient(ellipse at 33% 34%, #444444 0 13%, #fff0 15% 100%),
  radial-gradient(ellipse at 28% 34%, #444444 0 13%, #fff0 15% 100%),
  radial-gradient(circle at 74% 30%, #f50000 0 10%, #fff0 12% 100%),
  radial-gradient(circle at 74% 65%, #4562ff 0 10%, #fff0 12% 100%),
  radial-gradient(circle at 76% 32%, #790000 0 10%, #fff0 12% 100%),
  radial-gradient(circle at 76% 67%, #06166f 0 10%, #fff0 12% 100%), #d7d7d7;
  width: 65%;
  height: 44%;
  border-radius: 20%;
  top: 15%;
  left: 19%;
  transform: rotate(3deg);
  border-right: 0.35vmax solid #b1b1b1;
  border-bottom: 0.35vmax solid #adadad;
  border-left: 0.1vmax solid #b8b8b8;
  border-top: 0.15vmax solid #b8b8b8;
  box-sizing: border-box;
}

/*** ARMS ***/

.arm {
  width: 40%;
  height: 18%;
  top: 25%;
  transform-origin: right center;
}

.arm.right {
  z-index: 0;
  left: -5%;
  transform: rotate(20deg);
  top: 27%;
  animation: arm-right 20s ease-out 0s infinite;
}

@keyframes arm-right {
  0% {
    transform: rotate(5deg);
  }

  20% {
    transform: rotate(-95deg);
  }

  45% {
    transform: rotate(5deg);
  }

  70% {
    transform: rotate(-95deg);
  }

  100% {
    transform: rotate(5deg);
  }
}

.arm.left {
  left: 31%;
  transform: rotate(-145deg);
  top: 28%;
  z-index: 4;
  animation: arm-left 20s ease-out 0s infinite;
}

@keyframes arm-left {
  0% {
    transform: rotate(-145deg);
  }

  20% {
    transform: rotate(-45deg);
  }

  45% {
    transform: rotate(-145deg);
  }

  70% {
    transform: rotate(-45deg);
  }

  100% {
    transform: rotate(-145deg);
  }
}

.arm .top {
  background: #0000ff70;
  width: 55%;
  height: 45%;
  right: 0;
  top: 33%;
  transform-origin: right center;
  transform: rotate(-13deg);
  border-radius: 40%;
  background: linear-gradient(-3deg, #888d90 0 40%, #c6c6c6 43% 100%);
}

.arm .bot {
  width: 55%;
  height: 45%;
  top: 53%;
  left: 15%;
  transform-origin: right center;
  transform: rotate(25deg);
  border-radius: 40%;
  background: radial-gradient(circle at 100% 51%, #888d90 0 7%, #fff0 8% 100%),
  linear-gradient(-3deg, #888d90 0 40%, #c6c6c6 43% 100%);
}

.arm > div:before {
  background: #666b6e;
  height: 1.75vmax;
  width: 1vmax;
  right: 5%;
  border-radius: 80% 70% 35% 30%;
  transform: rotate(-15deg);
  top: -20%;
}

.arm > div:after {
  background: #666b6e;
  height: 1.5vmax;
  width: 1vmax;
  top: 40%;
  right: 1%;
  transform: rotate(0deg);
  border-radius: 30% 30% 80% 70%;
}

.arm.right .top:before {
  transform: rotate(10deg);
  right: -2%;
  height: 1.5vmax;
  top: -3%;
}

.arm.left .top:before {
  transform: rotate(-2deg);
  left: 78%;
  right: 1%;
  top: -10%;
}

.arm.left .top:after {
  top: 45%;
  right: -1%;
  width: 21%;
}

/*** HANDS ***/

.hand {
  background: #888d90;
  width: 33%;
  height: 53%;
  border-radius: 55%;
  top: 19%;
  transform: rotate(22deg);
  left: 2%;
}

.hand:before {
  top: -5% !important;
  right: -0.25vmax !important;
  transform: rotate(-5deg) !important;
}

.hand:after {
  top: 45% !important;
  right: -0.3vmax !important;
  transform: rotate(-5deg) !important;
}

/*** LEGS ***/

.leg {
  width: 25%;
  height: 36%;
  top: 54%;
  left: 28%;
  transform-origin: center top;
}

.leg.right {
  animation: leg-right 20s ease-out 0s infinite;
}

@keyframes leg-right {
  0% {
    transform: rotate(-45deg);
  }

  20% {
    transform: rotate(10deg);
  }

  45% {
    transform: rotate(-45deg);
  }

  70% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(-45deg);
  }
}

.leg.left {
  transform: rotate(-30deg);
  animation: leg-left 20s ease-out 0s infinite;
  transform-origin: 70% top;
  left: 45%;
  transform: rotate(-25deg);
  top: 56%;
  z-index: 2;
}

@keyframes leg-left {
  0% {
    transform: rotate(15deg);
  }

  20% {
    transform: rotate(-30deg);
  }

  45% {
    transform: rotate(15deg);
  }

  70% {
    transform: rotate(-30deg);
  }

  100% {
    transform: rotate(15deg);
  }
}

.leg .top,
.leg .bot {
  width: 75%;
  height: 32%;
  left: -16%;
  top: -5%;
  transform-origin: right center;
  transform: rotate(-79deg);
  border-radius: 25% 10% 10% 25%;
  background: linear-gradient(-3deg, #888d90 0 65%, #c6c6c6 67% 100%);
}

.leg .bot {
  top: 25%;
  transform: rotate(-97deg);
  left: -28%;
  height: 31%;
}

.leg > div:before {
  background: #666b6e;
  height: 65%;
  width: 1vmax;
  right: -5%;
  border-radius: 80% 70% 35% 30%;
  transform: rotate(25deg);
  top: -6%;
}

.leg > div:after {
  background: #666b6e;
  height: 65%;
  width: 1vmax;
  top: 40%;
  right: 1%;
  transform: rotate(-10deg);
  border-radius: 30% 30% 80% 70%;
}

/*** FEET ***/

.foot {
  background: linear-gradient(45deg, #888d90 0 55%, #c6c6c6 60% 100%);
  width: 55%;
  height: 45%;
  bottom: -10%;
  transform: rotate(-99deg);
  border-radius: 25% 55% 30% 30%;
  left: 20%;
  border-left: 0.65vmax solid #505050;
  box-sizing: border-box;
}

.foot:before {
  height: 50% !important;
  left: 78%;
  top: 22% !important;
  transform: rotate(13deg) !important;
}

.foot:after {
  height: 50% !important;
  left: 70%;
  top: 52% !important;
  transform: rotate(-5deg) !important;
  border-radius: 83% 25% 80% 70% !important;
}

.footprints {
  width: 100%;
  height: 15vmax;
  position: absolute;
  top: 50vmax;
  z-index: 1;
}

.footprints span {
  width: 4.5vmax;
  height: 2vmax;
  position: absolute;
  left: 74%;
  top: 2%;
  border-radius: 40% 30% 30% 40%;
  transform: rotateX(20deg) rotateZ(-2deg);
  background: repeating-linear-gradient(
      90deg,
      #c3c3c3 0 0.5vmax,
      #bdbdbd 0 1vmax
  );
  filter: blur(1px);
  opacity: 0.5;
  opacity: 0;
  animation: footprint 20s linear 0s infinite;
}

.footprints span + span {
  animation-delay: 5s;
  left: 45.75%;
  top: 3%;
}

.footprints span + span + span {
  animation-delay: 10s;
  left: 14.05%;
  top: 2%;
}

@keyframes footprint {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  21% {
    opacity: 0.5;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
  }
}
</style>
