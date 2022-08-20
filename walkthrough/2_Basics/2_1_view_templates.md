# View Templates

Static HTML files make up the majority of web pages delivered on the internet. An HTML file is considered "static" because the content is the same regardless of user identity or any other real-time factors. The benefit of a web *application* is that the application layer has the ability to process the user request and deliver a dynamic experience.

The ability to deliver a dynamic experience at the view layer is accomplished by use of **view templating.** This allows developers to create files that are a mix of static content and variables which are determined at the time the template is rendered, e.g. in response to a user request.

A template file is written in a **template language**. Template languages are often HTML-like, and support variable injection and often more complex scripting logic such as `for` loops. Modern web browsers cannot natively read the template language. A **templating engine** handles the conversion of a template and variables to an HTML file which is then delivered to the users' browsers. The application will invoke the template *engine* with which template file to render and what variables to render therein.

A view template may have the content `<p>Hello, {{ user.name }}!</p>`, and a template engine would render `<p>Hello, Alexa!</p>`.

There are several template languages from which to choose, and a given language is usually not specfic to a given application architecture, e.g. Node.js. Therefore, learning the template language once is a transferable skill.

### Resources

Template Engines: [https://expressjs.com/en/guide/using-template-engines.html](https://expressjs.com/en/guide/using-template-engines.html)