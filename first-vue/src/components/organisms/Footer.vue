<template>
  <footer :class="$style.footer">
    <div :class="$style.counter">1/3 left</div>
    <div :class="$style.readiness">
      <Radio
        v-for="item in items"
        :key="item.id"
        :text="item.text"
        :isChecked="item.isChecked"
      />
    </div>
  </footer>
</template>

<script>
import Radio from "@/components/atoms/Radio.vue";
export default {
  data() {
    return {
      items: [
        { id: 1, text: "All", isChecked: true },
        { id: 2, text: "Active", isChecked: false },
        { id: 3, text: "Comlpeted", isChecked: false },
      ],
    };
  },
  components: {
    Radio,
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