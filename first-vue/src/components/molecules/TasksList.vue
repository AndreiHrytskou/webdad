<template>
  <div :class="$style.container">
    <Task
      v-for="task in tasks"
      :key="task.id"
      :text="task.text"
      :isChecked="task.isChecked"
    />
  </div>
</template>

<script>
import Task from "@/components/atoms/Task.vue";
export default {
  data() {
    return {
      tasks: [
        { id: 1, text: "Task 1", isChecked: false },
        { id: 2, text: "Task 2", isChecked: true },
        { id: 3, text: "Task 3", isChecked: false },
      ],
    };
  },
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