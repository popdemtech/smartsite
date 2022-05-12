## Authentication
**Authentication** is the process of verifying the identity of an individual. User authentication allows developers of a web application to craft individualized experiences. In practice, this means allowing access to priveleged material such as creating database records and visiting . This ability to deliver dynamic content individualized per visitor session is the general differentiator between a web*site* and a web *application*.

The ability to register a user account with the app, and sign in and out on request is the basis of user authentication. Identity and Access Management systems is a discipline in its own right. It is a foundational component to the interactive internet. Consider the example of a social media platform.

Once a user logs in, the application can display content based on user preferences and saved data. Consider the FaceBook profile page. Every user of FaceBook can navigate to `facebook.com/profile`, and be presented with a profile page. Despite receiving the same webpage template, the page is customized to display the feed and information of the currently logged in user.

Further, if a user *is not* a logged in user of FaceBook, the page does not display and instead redirects to registration form. The ability to gate features is an additional benefit of adding an authentication component to a web application.

### Authorization
**Authorization** is a term closely related to Authentication. Where authentication refers to the ability to verify the user's identity, authorization refers to allowing or restricting a user's access to certain resources.

In the example of a social media network, a user that has *not* authenticated with the server (i.e. not signed in) will likely be blocked from accessing a `/profile` page. Further, even if a user is signed in, certain actions like updating a different user's profile information is likely prohibited. For Software-as-a-Service (SAAS) web applications, authorization comes in the form of allowing and restricting application features based on a user's payment tier.

While the need for authorization is generally universal for web applications, authorization concerns are specific to the "business logic" or domain rules of the application. Questions like how many tiers of user access are necessary and what resources should be available to whom are answered in examination of the real-world business rules the application is built to model.