# Capturing User Activity
The strength of a database comes into play when the developer uses it to capture user interaction within the web application. This saved information can then be displayed in a way that enhances the user experience.

## Click Tracker Application
We will be adding a feature that allows any user to click a button and increment a counter. A label will display the total number of times the button has been clicked and the label should display the total number of clicks *of all time.* After a user clicks the button, the label should update with the most up-to-date number of total clicks.

Someone from anywhere on the globe can access this application, click the button, and leave a mark on this little corner of the internet. It's a pretty cool achievement. Further, capturing user interactivity data is the core functionality of *all* SaaS (software-as-a-service) applications. Capturing, storing, and displaying information is *the*  backbone of internet technology.

## Feature Building

The process of building a feature starts with understanding what the desired final state is. This step of the process is enhanced by a visual mockup of the feature. If there is a non-developer stakeholder for the application, align on the visual design before beginning to code a solution.

For the end users of the application, this feature will require:
* a button
* a label displaying how many times the button has been clicked

The next stage of feature development is to understand what application components are needed for the feature.

As developers of the feature, we need to implement:
* a webpage with the button and counter label
* a database table
* a data model
* a web route for modifying the database table

Last, the developer needs to code the functionality into the app. At this point, `smartsite` has standard patterns for responding to user requests using Express. Database table creation and modeling is handled with Sequelize. For this feature, the application must be able to update an already loaded webpage with information from the server.

Up to this time, `smartsite` has handled a user's request for a route, e.g. `/hello-world`, and has responded with a full HTML webpage. For the click tracker, we will need to update the page to show the up-to-date number of clicks without loading a new webpage. This will be handled using conventional front-end JavaScript and familiar Express routing. While the solution for implementing this new ability is simple, it is important at the planning stage of feature building to point out exactly what already exists and what must be built anew.

### Resources

What is Web 2.0?: [https://www.znetlive.com/blog/web-2-0/](https://www.znetlive.com/blog/web-2-0/)