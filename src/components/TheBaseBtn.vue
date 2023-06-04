<template>
  <button
    class="btn"
    :class="{
      btn__next: name === 'next' || name === 'next-end',
      'btn__start-end': name === 'next-end' || name === 'prev-start',
      btn__mid: name === 'random',
    }"
  >
    <svg
      v-if="PrevOrNext"
      width="13"
      height="26"
      viewBox="0 0 13 26"
      fill="none"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1L1 13.5L12 25" />
    </svg>
    <svg
      v-if="name === 'prev-start' || name === 'next-end'"
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.70625 7.82031L11.9641 9.78125L11.9641 11.6016L5.21406 8.70312L5.21406 7.46875L6.70625 7.82031ZM11.9641 6.13281L6.69063 8.13281L5.21406 8.44531L5.21406 7.21875L11.9641 4.3125L11.9641 6.13281ZM0.410938 14.375L0.410939 0.890624L1.66875 0.890624L1.66875 14.375L0.410938 14.375Z"
        fill="white"
      />
    </svg>

    <slot />
  </button>
</template>

<script>
export default {
  name: "TheBaseBtn",

  props: {
    name: { type: String, default: "" },
    text: { type: String, default: "" },
  },

  computed: {
    PrevOrNext() {
      return this.name === "prev" || this.name === "next";
    },
  },
};
</script>


<style scoped lang="scss">
.btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f26a15;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  &:hover {
    background: #a3501d;
    transition: 0.3s;
  }
  &:active {
    background: #0a2037;
    opacity: 0.3;
  }
}

.btn__next {
  svg {
    transform: rotateY(180deg);
  }
}
.btn__mid {
  width: 320px;
  padding: 23px;
  border-radius: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  &:active {
    background: white;
    color: #f26a15;
    border: 1px solid #f26a15;
    opacity: 1;
  }
}

.btn__start-end {
  border-radius: 0;
  background: #0a2037;
  &:hover,
  &:active {
    background: #f26a15;
    opacity: 1;
  }
}
</style>