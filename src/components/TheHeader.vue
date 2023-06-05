<template>
  <div ref="refTitle" class="header__title parallax-heading">
    <h1 class="anim-title">TEST FROM I-ONE WEB AGENCY</h1>
  </div>
</template>

<script>
export default {
  name: "TheHeader",

  mounted() {
    window.addEventListener("scroll", this.parallaxEffect);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.parallaxEffect);
  },

  methods: {
    parallaxEffect() {
      const scrollPosition = window.pageYOffset;
      const parallaxHeading = this.$refs.refTitle;
      parallaxHeading.style.transform = `translateY(${scrollPosition * 0.6}px)`;
    },
  },
};
</script>


<style scoped lang="scss">
.header__title {
  height: 500px;
  position: relative;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 44px;
    line-height: 52px;
    letter-spacing: 0.1em;
    color: #ffffff;
  }

  .anim-title {
    animation-duration: 1.5s;
    animation-name: anim-title;
    animation-direction: alternate;
  }

  @keyframes anim-title {
    from {
      top: 70%;
      opacity: 0;
      transform: translate(-50%, -50%) rotateX(-10deg);
    }
    to {
      top: 50%;
      opacity: 1;
      transform: translate(-50%, -50%) rotateX(0);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.parallax-heading {
  position: relative;
  overflow: hidden;
  text-align: center;
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  line-height: 200px;
  perspective: 100px;
  transform-style: preserve-3d;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(../../public/fon.png);
    background-size: cover;
    background-position: center;
    transform: translateZ(-100px) scale(2);
    z-index: -1;
  }
}
</style>