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
						<span class="checkbox active"></span>
						<input type="checkbox">
						<span>Task 1</span>
						<span class="close"></span>
					</label>
				</div>
				<div class="container__item">
					<label>
						<span class="checkbox"></span>
						<input type="checkbox">
						<span>Task 2</span>
						<span class="close"></span>
					</label>
				</div>
				<div class="container__item">
					<label>
						<span class="checkbox"></span>
						<input type="checkbox">
						<span>Task 3</span>
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

