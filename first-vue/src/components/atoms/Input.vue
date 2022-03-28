<template>
  <div :class="$style.entery">
    <input
      type="text"
      :class="$style.entery__add"
      placeholder="Add a new task"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.entery {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 33.75rem;
  margin: 1.875rem;

  &__add {
    @include fonts($itemFonts, $headerColor);
    font-size: 1.25rem;
    background-color: $btnColor;
    max-width: 30rem;
    width: 100%;
    height: 3.125rem;
    background-image: url("data:image/svg+xml,%3csvg max-width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FFCA93FF' stroke-width='1.5' stroke-dasharray='9' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
    border-radius: 0.625rem;
    cursor: pointer;
    border: none;
    text-align: center;
  }
}
</style>