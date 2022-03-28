<template>
  <header :class="$style.header">
    <h1 :class="$style.title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.header {
  text-align: center;
  max-width: 33.75rem;
  width: 100%;
  height: 3.125rem;
  background-color: $headerColor;

  .title {
    font-family: $titleFonts;
    color: $fontsColor;
  }
}
</style>