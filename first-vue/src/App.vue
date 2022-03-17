<template>
<div class="content">
		<div class="todo"></div>
		<div class="wrapper">
		<header class="header">
			<h1 class="header__title">to do list</h1>
		</header>
		<div class="container">
				<div class="container__item">
					<label>
						<input type="checkbox">
						<span class="checkbox">Task 1</span>
						<span class="close"></span>
					</label>
				</div>
				<div class="container__item">
					<label>
						<input type="checkbox">
						<span class="checkbox">Task 2</span>
						<span class="close"></span>
					</label>
				</div>
				<div class="container__item">
					<label>
						<input type="checkbox">
						<span class="checkbox">Task 3</span>
						<span class="close"></span>
					</label>
				</div>
		</div>
		<div class="entery">
			<input type="text" class="entery__add" placeholder="Add a new task">
		</div>
		<footer class="footer">
			<div class="footer__counter">1/3 left</div>
			<div class="footer__readiness">
				<div class="footer__readiness__item">
					<label>
						<input type="radio" class="footer__readiness__item-radio" name="radio">
						<span class="footer__readiness__item-text">All</span>
					</label>
				</div>
				<div class="footer__readiness__item">
					<label>
						<input type="radio" class="footer__readiness__item-radio" name="radio">
						<span class="footer__readiness__item-text">Active</span>
					</label>
				</div>
				<div class="footer__readiness__item">
					<label>
						<input type="radio" class="footer__readiness__item-radio" name="radio">
						<span class="footer__readiness__item-text">Completed</span>
					</label>
				</div>
			</div>
		</footer>
		</div>
	</div>
</template>
<!--
<style lang="scss">
// @import "@/assest/scss/main.scss"
.header {
   text-align: center;
   max-width: 54rem;
   width: 100%;
   height: 5rem;
   background-color: $headerColor;

   &__title {
      font-family: $titleFonts;
      color: $fontsColor;
   }
}
.container {
   max-width: 54rem;
   margin: 3rem;

   &__item {
      @include fonts($itemFonts, $fontsColor);
      border: 1px solid $itemColor;
      border-radius: 1rem;
      max-width: 48rem;
      height: 5rem;
      background-color: $itemColor;
      display: flex;
      align-items: center;
      margin-bottom: 2.5rem;
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
            width: 2.4rem;
            height: 2.4rem;
            border: 0.2rem solid $checkBoxColor;
            border-radius: 1rem;
            margin: 1.3rem 2rem;
            vertical-align: middle;
         }

         &::after {
            content: "\2713";
            text-align: center;
            color: $bgColorContainer;
            padding: 1px 0;
            background-color: $checkBoxColor;
            position: absolute;
            top: 1.3rem;
            left: 2.1rem;
            width: 2.4rem;
            height: 2.4rem;
            border-radius: 1rem;
            border: 0.1rem solid $checkBoxColor;
            opacity: 0;
            transition: 0.2s;
         }
      }

      input:checked+.checkbox::after {
         opacity: 1;
      }

      .close {
         cursor: pointer;
         position: absolute;
         right: 2rem;
         top: 1.3rem;
         background-image: url("../icons/close.svg");
         width: 2.6rem;
         height: 2.6rem;
      }

      .close:hover {
         background-image: url("../icons/closeHover.svg");

      }
   }

   &__item:last-child {
      margin-bottom: 0;
   }
}
.entery {
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   max-width: 54rem;
   margin: 3rem;

   &__add {
      @include fonts($itemFonts, $headerColor);
      font-size: 2rem;
      background-color: $btnColor;
      max-width: 48rem;
      width: 100%;
      height: 5rem;
      background-image: url("data:image/svg+xml,%3csvg max-width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FFCA93FF' stroke-width='1.5' stroke-dasharray='9' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
      border-radius: 1rem;
      cursor: pointer;
      border: none;
      text-align: center;
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
ooter {
   padding: 0 3rem;
   max-width: 54rem;
   height: 5rem;
   background-color: $headerColor;
   @include fonts($titleFonts, $footerBorder);
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;


   &__readiness {
      display: flex;

      &__item {
         margin-right: 2.5rem;

         &-radio {
            display: none;
         }

         &-text {
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
               left: -0.7rem;
               width: 100%;
               height: 100%;
               border: 0.2rem solid $footerBorder;
               border-radius: 1rem;
               padding: 0 0.5rem;
               opacity: 0;
               transition: 0.2s;
            }
         }

         &-radio:checked+&-text::after {
            opacity: 1;
         }

      }

   }
}
</style>-->