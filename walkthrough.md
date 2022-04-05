## Setting up filesystem watcher for development

### 1. Install nodemon
Because nodemon is a library that is used to initialize a process from the local operating system, it's not considered an application dependency. You can install it globally, but consider including nodemon as a development dependency so any future developers download the library with `npm install`. Since the `npm start` script uses nodemon, it is a required for development.
```bash
$ npm install -g nodemon
# and/or
$ npm install --save-dev nodemon
```
### 2. Use nodemon
Change the start script within `package.json` to use `nodemon` instead of `node` to start the server process.
```javascript
// package.json
{
	...,
	"scripts": {
		"start": "npx nodemon .",
		...
	},
	...
}
```