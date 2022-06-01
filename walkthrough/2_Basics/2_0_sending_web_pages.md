## Sending Web Pages
Currently, the application is configured to send an HTML string when the root route, `/`, is requested. While this is a valid use of Express route handling, a better approach is to keep end-user presentation and the application logic into separate files.

<dl>
    <dt>Application Logic</dt>
    <dd>The scripted code that handles the request/response cycle</dd>
    <dt>Presentation</dt>
    <dd>The response displayed to the consumer</dd>
</dl>

The separation of concerns between the routing and view layers is standard practice. This technique allows developer to optimize and organize the two areas separately which will become more important as the application grows.

### The Presentation Layer
It is safe to expect web-traffic to be viewed using a internet browsing application such as Chrome or Microsoft Edge. Modern internet broswers are equipped to translate many common web response formats into human usable form. The most familiar of these formats is likely HTML.

To start `smartsite`'s presentation layer, we will send a basic HTML file.

1. Create a file named `index.html` in the root directory.

<div class="filename">index.html</div>

```html
<!DOCTYPE html>
<head>
  <title>SmaRtsite</title>
</head>
<html>
  <body>
    <h1>Welcome to SmaRtsite!</h1>
  </body>
</html>
```

2. Send the `index.html` as the response from `/`.
Modify the route handler of `/` to use `sendFile` instead of `send`.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});
```

`__dirname` is a Node.js variable containing the directory name of the currently executing file. Because we know the location of `index.html` to be in the same directory as `index.js`, simply appending the HTML's filename to `__dirname` yields the correct location for the file.

### Resources
Separation of Concerns: [https://deviq.com/principles/separation-of-concerns](https://deviq.com/principles/separation-of-concerns)

What is HTML?: [https://www.hostinger.com/tutorials/what-is-html](https://www.hostinger.com/tutorials/what-is-html)