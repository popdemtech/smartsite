# Dynamically Render Content

A benefit of using view templates is the ability to add content to be rendered at the point of a user request. Within a Liquid template, use the syntax `{{ variable_name }}` to indicate a value passed at render time should be rendered into the placeholder. In addition, Liquid's `if/else` syntax, offers basic logical switching to determine what block of content to render based on whether the variable is defined and evaluates to `true` at render time.

```
{% if variable_name %}
  ...
{% else %}
  ...
{% endif %}
```

To directly render a variable, use the double curly brace syntax, `{{ }}`. To script non-rendered view logic, use the curly brace and percent sign syntax, `{% %}`.

### 1. Modify the view to respond to dynamically injected variables
Add a section to `index.liquid` that renders passed in variables. 

<div class="filename">views/index.liquid</div>

```html
<!DOCTYPE html>
<head>
  <title>SmaRtsite</title>
</head>
<html>
  <body>
    <h1>Welcome to SmaRtsite!</h1>
    <p>This application is running in the <b>{{ nodeEnv }}</b> environment.</p>
    {% if debug %}
      <p><b>Debug Information</b></p>
      <p>Node version: {{ nodeVersion }}</p>
      <p>Server Time: {{ serverTime }}</p>
    {% endif %}
  </body>
</html>
```

Notice that the "Debug Information" section will only render if the `debug` variable is defined. If you navigate to the page at `localhost:3000`, there will be no visible difference. We need to render the page with at least the `debug` variable.

### 2. Render the template with variables
Modify the `/` route handler to define the variables `debug`, `nodeVersion`, and `serverTime`, and pass them in as the second parameter to `response.render`.

<div class="filename">index.js</div>

```javascript
app.get('/', function(request, response) {
  const debug = request.query.debug;
  const nodeVersion = process.version;
  const serverTime = new Date();
  response.render('index', { debug, nodeVersion, serverTime });
});
```

Notice the definition of the `debug` variable: `request.query.debug`. The `query` property of Express `Request` objects returns the query parameters section of the requested URL string. By default, query parameters found at `request.query` are formatted as a JavaScript object. For example, the query string of `?debug=true&limit=10` will be of the form `{ debug: 'true', limit: '10' }`.

<div class="informational">
<b>Note:</b> Query string values are necessarily coerced to string for HTTP transport. While a developer may intend to use a boolean or number value from the query string, Express provides the values as strings that must be type cast for use as a boolean or number, etc.
</div>

### 3. Load the page
With the above changes in place, loading the page at `localhost:3000` renders the same landing page.

To see the new changes, request the page with a `debug` query string parameter: `localhost:3000?debug=true`. The page should now display a section of "Debug Information."

<div style="text-align:center;padding:20px 0;">
<img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/smartsite/dynamic_content_debug.png?raw=true" alt="browser screenshot of welcome to smartsite heading" style="width:66%;" />
</div>

### 4. `git commit`
Dynamically rendering the index view within `smartsite` is a significant unit of development. This is a perfect time to save state to version control.

<div class="filename">command line</div>

```
$ git status
$ git add .
$ git commit -m 'Dynamically render index.liquid'
```

## Review

Dynamic display content must be located in the `/views` directory with a file extension of `.liquid`. The files may contain static or dynamic content. If the content should be dynamically rendered, provide an object of local variables as the second parameter `response.render` within the route handler.

The Liquid template language provides additional functiontality to the HTML specification in the form of flow control (`if/else`), iteration, and many more advanced operations. Visit the Liquid reference guide in **Resources** section to explore Liquid's full feature set.

### Resources
Liquid Template Language: [https://shopify.github.io/liquid/](https://shopify.github.io/liquid/)