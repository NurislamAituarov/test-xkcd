<template>
  <div class="wrapper">
    <div class="header__title">
      <h1>TEST FROM I-ONE WEB AGENCY</h1>
      <img src="@/public/fon.png" alt="фоновое изображение" />
    </div>

    <div class="main">
      <div class="container">
        <h2>Bad Map Projection: Liquid Resize</h2>
        <div class="comic__nav">
          <TheBaseBtn name="prev-start" />
          <TheBaseBtn name="prev" />
          <TheBaseBtn name="random">Random</TheBaseBtn>
          <TheBaseBtn name="next" />
          <TheBaseBtn name="next-end" />
        </div>
        <div class="comic__main">main</div>
        <div class="comic__nav">nav</div>
      </div>
    </div>
  </div>
</template>


<script>
import TheBaseBtn from "@/src/components/TheBaseBtn.vue";

export default {
  name: "ComicPage",

  components: { TheBaseBtn },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 1920px;
  margin: 0 auto;
}

.header__title {
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.main {
  height: 100vh;
  background: #0e2f51;
  position: relative;
  top: -5px;
  .container {
    max-width: 780px;
    margin: 0 auto;
    padding-top: 83px;
    padding-bottom: 106px;
    h2 {
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 31px;
    }
    .comic__nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .comic__main {
      margin: 45px 0;
    }
  }
}
</style>