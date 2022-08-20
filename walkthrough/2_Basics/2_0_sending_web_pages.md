# Sending Web Pages
Currently, the application is configured to send an HTML string when the root route, `/`, is requested. While this is a valid use of Express route handling, a better approach is to keep end-user presentation and the application logic in separate files.

<dl>
    <dt>Application Logic</dt>
    <dd>The scripted code that handles the request/response cycle</dd>
    <dt>Presentation</dt>
    <dd>The response that is displayed to the consumer</dd>
</dl>

The separation of concerns between the routing and view layers is standard practice. This technique allows developer to optimize and organize the two areas separately which will become more important as the application grows.

## The Presentation Layer
It is safe to expect web-traffic to be viewed using a internet browsing application such as Chrome or Microsoft Edge. Modern internet browsers are equipped to translate many common web response formats into human-usable form. The most familiar of these formats is HTML.

To start `smartsite`'s presentation layer, we will send a basic HTML file.

### 1. Create a file named `index.html` in the root directory.

<div class="filename">index.html</div>

```html
<!DOCTYPE html>
<head>
  <title>SmaRtsite</title>
</head>
<html>
  <body>
    <h1>Welcome to SmaRtsite!</h1>
    <p>It's a website with computation power!</p>
  </body>
</html>
```

### 2. Send the `index.html` as the response from `/`.
Modify the route handler of `/` to use `sendFile` instead of `send`, and send the newly created HTML file.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});
```

`__dirname` is a Node.js variable containing the directory name of the currently executing file. Because we know the location of `index.html` to be in the same directory as `index.js`, simply appending the HTML's filename to `__dirname` yields the correct location for the file.

### 3. Visit in the browser
Ensure that the application server is running (`npm run start`), and visit `localhost:3000`. The screen should now show the heading and the paragraph defined in the HTML file. The broswer tab should also read "SmaRtsite" as specified in the HTML's `<title>` tag.

### 4. Git commit the changes
This was a significant unit of development. A development library was added, and it's functionality was fully implemented. `git commit` the changes to signify the completion of this development.

<div class="filename">command line</div>

```
$ git add .
$ git commit -m 'Send webpage'
```


### Resources
Separation of Concerns: [https://deviq.com/principles/separation-of-concerns](https://deviq.com/principles/separation-of-concerns)

What is HTML?: [https://www.hostinger.com/tutorials/what-is-html](https://www.hostinger.com/tutorials/what-is-html)