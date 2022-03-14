<template>
<div class="content">
		<div class="todo"></div>
		<div class="wrapper">
		<header class="header">
			<h1 class="header__title">to do list</h1>
		</header>
		<div class="container">
				<div class="container__item">
					<span class="checkbox  active"></span>
					<input type="checkbox" name="item" id="item">
					<label for="item">Task 1</label>
					<span class="close"></span>
				</div>
				<div class="container__item">
					<span class="checkbox"></span>
					<input type="checkbox" name="item" id="item2">
					<label for="item2">Task 2</label>
					<span class="close"></span>
				</div>
				<div class="container__item">
					<span class="checkbox"></span>
					<input type="checkbox" name="item" id="item3">
					<label for="item3">Task 3</label>
					<span class="close"></span>
				</div>
		</div>
		<div class="btn">
			<button class="btn__add">Add a new task</button>
		</div>
		<footer class="footer">
			<div class="footer__counter">1/3 left</div>
			<div class="footer__readiness">
				<div class="footer__readiness__item activeTask">All</div>
				<div class="footer__readiness__item">Active</div>
				<div class="footer__readiness__item">Completed</div>
			</div>
		</footer>
		</div>
	</div>
</template>