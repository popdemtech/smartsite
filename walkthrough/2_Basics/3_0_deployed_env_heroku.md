# A Deployed Environment

So far, `smartsite` has only been served from a local development server. To open the application for public web traffic, the application has to have a public IP address. While the task is accomplishable with your local computer, chances are you do not want to open your personal computer to public traffic. When allowing public traffic, the host computer requires need-to-have and nice-to-have security and facilitation applications. These programs solve problems ranging from the common security practice of network firewalls to more advanced needs such as reverse proxying, caching, load balancing, et cetera.

A Platform-as-a-Service is a software that provides hardware and software services such as the need for remote web hosting. The service we need is fully-provisioned server space for launching public web applications with ease. One such platform is **Heroku.**

## Heroku

Heroku describes themselves as "a cloud platform that lets companies build, deliver, monitor and scale apps — we're the fastest way to go from idea to URL, bypassing all those infrastructure headaches." This is just what our `smartsite` needs. Their homepage is found at [www.heroku.com.](https://www.heroku.com/)

The Heroku platform offers server-processing in the form of what they call "dynos." Heroku's free-tier includes unlimited dynos and 550 dyno hours per month. You can "verify" your account with a credit card and will increase the number of free dyno hours to 1100. Dynos on the free tier will sleep after 30 minutes of inactivity. Visiting the web address of a sleeping dyno will take longer than usual to render the first request as the dyno is activated from the sleeping state.

Upgrade the dyno to a paid tier to have the application accessible without going "to sleep." Without the sleeping state, the response to all requests is performed at the speed of light. At the time of this writing, paid tiers start at $7 per month per dyno.

In addition to upgrading application availability, Heroku has an Add-ons marketplace which provides database, cache, and application monitoring add-ons to name a few. These services include industry standard tools specially configured for plug-and-play interfacing with the Heroku platform. Each add-on has it's own tiered pricing system, and there are many with a free tier which match Heroku's free tier on being perfectly suited for learning and prototyping, and simple-to-upgrade for high-traffic and high-availablity situations.