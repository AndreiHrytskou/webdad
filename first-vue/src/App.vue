<template>
  <div :class="$style.content">
    <div :class="$style.todo"></div>
    <div :class="$style.wrapper">
      <Title :title="'todo'" />
      <TodoList />
      <Entery />
      <Footer />
    </div>
  </div>
</template>


<script>
import Title from "@/components/atoms/Title.vue";
import TodoList from "@/components/molecules/TasksList.vue";
import Entery from "@/components/atoms/Input.vue";
import Footer from "@/components/organisms/Footer.vue";

export default {
  components: {
    Title,
    TodoList,
    Entery,
    Footer,
  },
};
</script>




<style lang="scss" module>
@import "@/assets/scss/main.scss";

.content {
  .todo {
    position: absolute;
    top: 9%;
    left: 50%;
    background-image: url("./assets/icons/todo.svg");
    background-repeat: no-repeat;
    max-width: 25rem;
    width: 100%;
    height: 32rem;
    z-index: -1;
  }
  .wrapper {
    max-width: 33.75rem;
    width: 100%;
    margin: 6.25rem auto 0 auto;
    background-color: $bgColorContainer;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;

    //  .container {
    //    max-width: 33.75rem;
    //    margin: 1.875rem;

    //    &__item {
    //      @include fonts($itemFonts, $fontsColor);
    //      border: 1px solid $itemColor;
    //      border-radius: 0.625rem;
    //      max-width: 30rem;
    //      height: 3.125rem;
    //      background-color: $itemColor;
    //      display: flex;
    //      align-items: center;
    //      margin-bottom: 1.5625rem;
    //      position: relative;

    //      input {
    //        display: none;
    //      }

    //      .checkbox {
    //        position: relative;
    //        display: inline-block;
    //        top: 0;
    //        cursor: pointer;

    //        &::before {
    //          content: "";
    //          display: inline-block;
    //          width: 1.5rem;
    //          height: 1.5rem;
    //          border: 0.125rem solid $checkBoxColor;
    //          border-radius: 0.625rem;
    //          margin: 0.8125rem 1.25rem;
    //          vertical-align: middle;
    //        }

    //        &::after {
    //          content: "\2713";
    //          text-align: center;
    //          color: $bgColorContainer;
    //          padding: 1px 0;
    //          background-color: $checkBoxColor;
    //          position: absolute;
    //          top: 0.82rem;
    //          left: 1.32rem;
    //          width: 1.5rem;
    //          height: 1.5rem;
    //          border-radius: 0.625rem;
    //          border: 0.0625rem solid $checkBoxColor;
    //          opacity: 0;
    //          transition: 0.2s;
    //        }
    //      }

    //      input:checked + .checkbox::after {
    //        opacity: 1;
    //      }

    //      .close {
    //        cursor: pointer;
    //        position: absolute;
    //        right: 1.25rem;
    //        top: 0.8125rem;
    //        background-image: url("./assets/icons/close.svg");
    //        width: 1.625rem;
    //        height: 1.625rem;
    //      }

    //      .close:hover {
    //        background-image: url("./assets/icons/closeHover.svg");
    //      }
    //    }

    //    &__item:last-child {
    //      margin-bottom: 0;
    //    }
    //  }
    //  .entery {
    //    display: flex;
    //    flex-direction: column;
    //    margin: 0 auto;
    //    max-width: 33.75rem;
    //    margin: 1.875rem;

    //    &__add {
    //      @include fonts($itemFonts, $headerColor);
    //      font-size: 1.25rem;
    //      background-color: $btnColor;
    //      max-width: 30rem;
    //      width: 100%;
    //      height: 3.125rem;
    //      background-image: url("data:image/svg+xml,%3csvg max-width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FFCA93FF' stroke-width='1.5' stroke-dasharray='9' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
    //      border-radius: 0.625rem;
    //      cursor: pointer;
    //      border: none;
    //      text-align: center;
    //    }
    //  }
    //  .footer {
    //    padding: 0 1.875rem;
    //    max-width: 33.75rem;
    //    height: 3.125rem;
    //    background-color: $headerColor;
    //    @include fonts($titleFonts, $footerBorder);
    //    position: relative;
    //    display: flex;
    //    align-items: center;
    //    justify-content: space-between;

    //    .readiness {
    //      display: flex;
    //    }

    //    .item {
    //      margin-right: 1.5625rem;
    //    }
    //    .itemRadio {
    //      display: none;
    //    }
    //    .itemText {
    //      cursor: pointer;
    //      position: relative;
    //      display: inline-block;

    //      &::before {
    //        content: "";
    //        display: block;
    //      }

    //      &::after {
    //        content: "";
    //        position: absolute;
    //        top: 0;
    //        left: -0.4375rem;
    //        width: 100%;
    //        height: 100%;
    //        border: 0.125rem solid $footerBorder;
    //        border-radius: 0.625rem;
    //        padding: 0 0.3125rem;
    //        opacity: 0;
    //        transition: 0.2s;
    //      }
    //    }

    //    .itemRadio:checked + .itemText::after {
    //      opacity: 1;
    //    }
    //  }
  }
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: $headerColor;
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: $headerColor;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: $headerColor;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: $headerColor;
}
@media (max-width: 800px) {
  .content {
    .todo {
      display: none;
    }
  }
}
</style>
