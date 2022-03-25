<template>
  <footer :class="$style.footer">
    <div :class="$style.counter">1/3 left</div>
    <div :class="$style.readiness">
      <ItemRadio :radio="'All'" />
      <ItemRadio :radio="'Active'" />
      <ItemRadio :radio="'Comlpeted'" />
    </div>
  </footer>
</template>

<script>
import ItemRadio from "@/components/atoms/ItemRadio.vue";
export default {
  components: {
    ItemRadio,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.footer {
  padding: 0 1.875rem;
  max-width: 33.75rem;
  height: 3.125rem;
  background-color: $headerColor;
  @include fonts($titleFonts, $footerBorder);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .readiness {
    display: flex;
  }
}
</style>