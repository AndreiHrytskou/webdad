<template>
  <div :class="$style.container">
    <Task
      v-for="task in validTasks"
      :key="task.id"
      :text="task.text"
      :isChecked="task.isChecked"
    />
  </div>
</template>

<script>
import Task from "@/components/atoms/Task.vue";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["validTasks"]),

  components: {
    Task,
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