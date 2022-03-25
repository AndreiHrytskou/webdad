<template>
  <div :class="$style.container">
    <ListItem :item="'Task1'" />
    <ListItem :item="'Task2'" />
    <ListItem :item="'Task3'" />
  </div>
</template>

<script>
import ListItem from "@/components/atoms/ListItem.vue";
export default {
  components: {
    ListItem,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.container {
  max-width: 33.75rem;
  margin: 1.875rem;

  .item:last-child {
    margin-bottom: 0;
  }
}
</style>