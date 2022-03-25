<template>
  <div :class="$style.item">
    <label>
      <input type="checkbox" />
      <span :class="$style.checkbox">{{ item }}</span>
    </label>
    <span :class="$style.close"></span>
  </div>
</template>

<script>
export default {
  props: {
    item: String,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.item {
  @include fonts($itemFonts, $fontsColor);
  border: 1px solid $itemColor;
  border-radius: 0.625rem;
  max-width: 30rem;
  height: 3.125rem;
  background-color: $itemColor;
  display: flex;
  align-items: center;
  margin-bottom: 1.5625rem;
  position: relative;

  input {
    display: none;
  }

  .checkbox {
    position: relative;
    display: inline-block;
    top: 0;
    cursor: pointer;

    &::before {
      content: "";
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      border: 0.125rem solid $checkBoxColor;
      border-radius: 0.625rem;
      margin: 0.8125rem 1.25rem;
      vertical-align: middle;
    }

    &::after {
      content: "\2713";
      text-align: center;
      color: $bgColorContainer;
      padding: 1px 0;
      background-color: $checkBoxColor;
      position: absolute;
      top: 0.82rem;
      left: 1.32rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 0.625rem;
      border: 0.0625rem solid $checkBoxColor;
      opacity: 0;
      transition: 0.2s;
    }
  }

  input:checked + .checkbox::after {
    opacity: 1;
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: 1.25rem;
    top: 0.8125rem;
    background-image: url("@/assets/icons/close.svg");
    width: 1.625rem;
    height: 1.625rem;
  }

  .close:hover {
    background-image: url("@/assets/icons/closeHover.svg");
  }
}
</style>