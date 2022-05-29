## A Deployed Environment

So far, `my-app` has only been served from a local development server. To open the application for public web traffic, the application has to have a public IP address, the proper configuration with OSI layer-7 programs allowing public web traffic. Chances are you do not want to open your personal computer to public traffic. As well, learning how to provision a operating system level server is a walkthrough in its own. Luckily, there are Platforms-as-a-Service that provide fully-provisioned server space for launching public web applications with ease. One such platform is Heroku.

### Heroku

Heroku provides the public server space `my-app` needs. The Heroku platform offers server-processing in the form of what they call "dynos." Heroku's free-tier includes unlimited dynos and 550 dyno hours per month. Verifying the account with a credit card will increase the number of free dyno hours to 1100. Dynos on the free tier will sleep after 30 minutes of inactivity. Visiting the web address of a sleeping dyno will take longer than usual to render the first request as the dyno is activated from the sleeping state.

When an application is ready for production-level availability, simply upgrade the dyno to a paid tier to have the application accessible 24/7. At the time of this writing, paid tiers start at $7 per month per dyno.

In addition to upgrading application availability, Heroku has an Add-ons marketplace which provides database, cache, and application monitoring services to name a few. These services include industry standard tools specially configured for plug-and-play interfacing with the Heroku platform. Each add-on has it's own tiered pricing system, and there are many with a free tier which match Heroku's free tier on being perfectly suited for learning and prototyping.