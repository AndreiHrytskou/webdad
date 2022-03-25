<template>
  <div :class="$style.item">
    <label>
      <input type="radio" :class="$style.itemRadio" name="radio" />
      <span :class="$style.itemText">{{ radio }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    radio: String,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.item {
  margin-right: 1.5625rem;
}
.itemRadio {
  display: none;
}
.itemText {
  cursor: pointer;
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -0.4375rem;
    width: 100%;
    height: 100%;
    border: 0.125rem solid $footerBorder;
    border-radius: 0.625rem;
    padding: 0 0.3125rem;
    opacity: 0;
    transition: 0.2s;
  }
}

.itemRadio:checked + .itemText::after {
  opacity: 1;
}
</style>