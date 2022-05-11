## View Templates

Static HTML files make up the majority of web pages delivered on the internet. An HTML file is considered "static" because the content is the same regardless of user identity or any other real-time factors. The benefit of a web *application* is that the application layer has the ability to process the user request and deliver a dynamic experience.

The ability to deliver a dynamic experience at the view layer is accomplished by use of **view templating.** This allows developers to create files that are a mix of static content and variables which are determined at the time the template is rendered, e.g. in response to a user request.

A template file is written in a **template language**. Template languages are often HTML-like, and support variable injection and often more complex scripting logic such as `for` loops. Modern web browsers cannot natively read the template language. A **templating engine** handles the conversion of a template and variables to an HTML file which is then delivered to the users' browsers.

A view template may have the content `<p>Hello, {{ user.name }}!</p>`, and a template engine would render `<p>Hello, Alexa!</p>`.

There are several template languages from which to choose. Because of the separation of presentational concerns from application logic, a given language is usually not specfic to a given application architecture, e.g. Node.js. Learning the template language once is transferrable  The application logic will invoke the template *engine* with parameters for which template file to render and what variables should be rendered therein, so it is important to choose a language with a respective template engine compatible with the application.

Given the ubiquity of view templating across all web server architectures, the problem of compatibility is not generally a concern. Many architectures come with built-in template rendering and a default templating language, and a developer can customize away from the default by adding a new rendering library.

### Resources

Template Engines: [https://expressjs.com/en/guide/using-template-engines.html](https://expressjs.com/en/guide/using-template-engines.html)