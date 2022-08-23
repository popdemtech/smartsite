# Other Common Environments
The **Basics** section of `smartsite` implements a development environment and a deployed environment which we call "production." As the application grows, testing standards and production release standards will become more stringent as developers and business owners seek to increase reliability and stability of the application.

Part of the process of scaling an application to robust form is the introduction of new environments. A testing environment is necessary as an environment for regularly testing code changes. A test suite and its environment ensure new development in the codebase does not cause regression in previously working features. A staging environment allows developers and stakeholders of the application to review the quality of new code and features in a production-like environment without causing an impact to customers of the application. Multiple testing and staging steps may be implemented as required.

## A Testing Environment
In the schools of software engineering and for an enterprise application, software testing is a must. The code that a developer writes should be tested in functionality and integration. A well-written test suite provides a form of self-documentation for the code.

For a web application with stricter testing requirements, a testing environment is a necessity. This environment would likely be configured to connect to a special testing database among other environment specific configurations. In the spirit of highlighting the foundational building blocks to user-interaction, `smartsite` does not add a testing environment in the **Basics** section.

## A Staging Environment
A staging environment is a deployed environment meant to be similar to production, but not user-facing. Using a staging environment allows developers to test their changes in a deployed environment without affecting live users. This helps avoid the common issue of dissimilar configuration in local and deployed environments causing an issue that can only be determined upon deployment.

<div style="text-align:center;padding:20px 0;">
<img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/smartsite/works-on-my-machine.jpeg?raw=true" alt="it works on my machine meme bart simpson comic" style="width:66%;" />
<p style="font-size:.8em;" class="image-caption">An issue so common, it's a meme</p>
</div>

For a web application with stricter production release practices, a staging environment is used. `smartsite` does not add a staging environment in the **Basics** section.