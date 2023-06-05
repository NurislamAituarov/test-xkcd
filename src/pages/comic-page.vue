<template>
  <div class="wrapper">
    <TheHeader />

    <div class="main">
      <div class="container">
        <h2>{{ comic.title }}</h2>
        <TheComicNav
          :id="comic.num"
          @get-random-comic="getRandomComic"
          @get-comic-next="getComicNext"
          @get-comic-prev="getComicPrev"
        />
        <TheComicContent :src="comic.img" />
        <TheComicNav
          :id="comic.num"
          @get-comic-next="getComicNext"
          @get-comic-prev="getComicPrev"
          @get-random-comic="getRandomComic"
        />
      </div>
    </div>
  </div>
</template>


<script>
import TheComicContent from "../components/TheComicContent.vue";
import TheComicNav from "../components/TheComicNav.vue";
import TheHeader from "../components/TheHeader.vue";
import { getRandomComicId, getComicId } from "../lib/methods";

export default {
  name: "ComicPage",
  components: { TheComicNav, TheComicContent, TheHeader },

  data() {
    return {
      comic: [],
    };
  },

  created() {
    this.getRandomComic();
  },

  methods: {
    getRandomComicId,
    getComicId,

    getRandomComic() {
      this.getRandomComicId()
        .then((data) => (this.comic = data))
        .catch((e) => console.error(e));
    },

    getComicNext({ id, end }) {
      const idGenerate = end ? 2784 : id + 1;
      this.getComicId(idGenerate)
        .then((data) => (this.comic = data))
        .catch((e) => console.error(e));
    },

    getComicPrev({ id, start }) {
      const idGenerate = start ? 1 : id - 1;
      this.getComicId(idGenerate)
        .then((data) => (this.comic = data))
        .catch((e) => console.error(e));
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 1920px;
  margin: 0 auto;
}

.main {
  height: 100%;
  min-height: 100vh;
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
  }
}
</style>