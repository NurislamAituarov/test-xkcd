<template>
  <div class="comic__nav">
    <TheBaseBtn
      name="prev-start"
      @click="$emit('get-comic-prev', { id: +id, start: true })"
    />
    <TheBaseBtn
      name="prev"
      @click="$emit('get-comic-prev', { id: +id })"
      :disabled="id == 1"
    />
    <TheBaseBtn name="random" @click="$emit('get-random-comic')"
      >Random</TheBaseBtn
    >
    <TheBaseBtn
      name="next"
      @click="$emit('get-comic-next', { id: +id })"
      :disabled="id == 2784"
    />
    <TheBaseBtn
      name="next-end"
      @click="$emit('get-comic-next', { id: +id, end: true })"
    />
  </div>
</template>


<script>
import TheBaseBtn from "./TheBaseBtn.vue";

export default {
  name: "TheComicNav",
  components: { TheBaseBtn },
  props: {
    id: { type: [String, Number], default: "" },
  },
  emits: ["get-comic-next", "get-comic-prev", "get-random-comic"],
};
</script>

<style scoped lang="scss">
.comic__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>