install:
	npm install

lint:
	# npx stylelint ./app/css/*.css
	npx stylelint ./app/scss/**/*.scss
	# npx htmlhint ./app/*.html
	pug-lint ./app/pages/*.pug

lint-fix:
	npx stylelint ./app/scss/**/*.scss --fix

deploy:
	npx surge ./build/

