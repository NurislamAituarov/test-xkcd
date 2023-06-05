<template>
  <div class="comic__content">
    <transition name="fade">
      <img :src="src" alt="" />
    </transition>
  </div>
</template>


<script>
export default {
  name: "TheComicContent",

  props: {
    src: { type: String, default: "" },
  },
};
</script>

<style scoped >
.comic__content {
  margin: 45px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>