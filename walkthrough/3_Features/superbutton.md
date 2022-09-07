# User Profiles

Within the Basics, `smartsite` implemented the authorization portion of user identity and access management. This first feature will be a deeper dive into **authorization**, i.e. the ability to grant or restrict access to web resources based on user attributes. After the Basics, `smartsite`'s user management is handled via Auth0, a third-party service. We will augment the Auth0's user management with a custom data solution within `smartsite`.

<div class="informational">
<b>Note:</b> As with all things software, there are multiple approaches that can be taken to implement a solution. A different approach than the self-managed custom table is to use Auth0's User Profile and <code>user_metadata</code> offerings. For the purposes of gaining web development fundamentals, the authors of Build a Smartsite decided to create this feature using a custom data modeling and data storage since this approach is more a more general solution, applicable and reusable for more full-stack features. If you are interested in how an implementation using Auth0's service would look, see the <b>Resources</b> for official documentation.
</div>

[mockup]

## Desired State

The desired final state of the User Profile feature consists of the following units of completion:

For each registered user in the application, there exists a custom webpage. The webpage should list the user's profile information -- a name, year of birth, and favorite weblink.

A logged in user should be able to navigate to their own profile page and update their profile information.

A logged in user should be able to access a different user's profile page, but should not be able to edit the information.

A logged in user should be able to navigate to a page which lists all of the user profiles on the site.

An non-authenticated user should not be able to access any user profile, and should instead be shown a page that requests they log in.

A non-authenticated user should not have access to the list of profiles, and should instead be redirected to a page that requests they log in.

## Application Components

`smartsite` has standard patterns for rendering webpages with template variables. There will be no new components in the front-end of the application. We will need to add back-side application logic which determines what pages and variables to render.

To save user profiles, there will need to be a new database table and database model representing a user profile.

We will need a reusable function which determines if the logged in user is authorized -- i.e. allowed -- to perform the action they are requesting. This component will be used to disallow users from editing another's profile.

We will need a reusable function which determines if a non-authenticated user can access the requested resource. This component will be used to redirect users that are not logged in to a page which requests log in.

### Resources

Auth0 User Metadata *(alternative implementation)*: [https://auth0.com/docs](https://auth0.com/docs/manage-users/user-accounts/metadata)