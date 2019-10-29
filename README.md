# API Documentation

## Table of Contents: ##

<div>
| <a href="#base-api">Base_Api</a> 
| <a href="#auth-endpoints">Auth_Endpoints</a> 
| <a href="#profile-endpoints">Profile_Endpoints</a> 
| <a href="#team-endpoints">Team_Endpoints</a>
| <a href="#favorite-teams-endpoints">Favorite_Teams_Endpoints</a>
| <a href="#contributing">Contributing</a> |
</div>

#### Backend delpoyed at [Heroku](https://bgp-be-staging.herokuapp.com/) <br>

## Base API

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm start or npm server** to start the local server
- **npm test** to start server using testing environment

## Auth Endpoints

### Register ###

> Listed endpoint:
>> POST /api/profiles/create

Creates a new user.

Example request body: 

```
{ 
    "username": "Levi",
    "password": "lambda4ever",
}
```

Successful status (201):
Responds with message "You are registered"

### Login ###

> Listed endpoint:
>> POST /api/profiles/login

Logs user in and provides Authentication token to be stored client-side in local storage.

Example request body:

```
{
    "username": "Levi",
    "password": "lambda4ever"
}
```

Successful status (200):
Responds with:

```
{
    message: "Welcome!",
    id: {user's profile_id},
    token: ${auth_token}
}
```

___
Be sure to save the ${auth_token} to local storage as all requests below this point require it as a header,
ie: (authorization: ${auth_token}) should be part of your req.header in your axiosWithAuth function.
___

## Profile Endpoints

### Get Users ###

> Listed endpoint:
>> GET /api/profiles

Gets an array of all users.

Successful status (200):
Responds with and array of user objects.

### Get User By ID ###

> Listed endpoint:
>> GET /api/profiles/:profile_id

Gets an individual user by their user id.

Successful status (200):
Responds with array containing the specific user object.

ie:

```
{
    "user_id": "6",
    "name": "Levi",
    "password": "lambda4ever",
}
```

## Team Endpoints

### Get All Teams ###

> Listed endpoint:
>> GET /api/teams

Gets an array of all teams.

Successful status (200):
Responds with and array of team objects.

### Get Team By ID ###

> Listed endpoint:
>> GET /api/teams/:team_id

Gets an individual team by their team id.

Successful status (200):
Responds with array containing the specific team object.

ie:

```
{
    "team_id": "19",
    "team_name": "Seattle Mariners",
    "league": "AL",
    "division": "West",
    "logo": "URL" (Not in this release),
    "abbreviation": "SEA"
}
```

### Get Teams By Division ###

> Listed endpoint:
>> GET /api/teams/:league/:division

Gets an array of teams by their division

Successful status (200):
Responds with array containing the team objects.

ie:

```
{
    "team_id": "19",
    "team_name": "Seattle Mariners",
    "league": "AL",
    "division": "West",
    "logo": "URL" (Not in this release),
    "abbreviation": "SEA"
}
```

### Get Teams By League ###

> Listed endpoint:
>> GET /api/teams/:league

Gets an array of teams by their league

Successful status (200):
Responds with array containing the team objects.

ie:

```
{
    "team_id": "19",
    "team_name": "Seattle Mariners",
    "league": "AL",
    "division": "West",
    "logo": "URL" (Not in this release),
    "abbreviation": "SEA"
}
```

## Favorite Team Endpoints

### Get All Favorite Teams ###

> Listed endpoint:
>> GET /api/favoriteTeams

Gets an array of all favorite teams.

Successful status (200):
Responds with and array of team objects.

### Get Favorite Teams By Profile ID ###

> Listed endpoint:
>> GET /api/favoriteTeams/:profile_id

Gets an array of a user's favorite teams based on their profile id.

Successful status (200):
Responds with array containing the team objects.

ie:

```
{
    "team_id": "19",
    "team_name": "Seattle Mariners",
    "league": "AL",
    "division": "West",
    "logo": "URL" (Not in this release),
    "abbreviation": "SEA"
}
```

### Add A New Favorite Team ###

> Listed endpoint:
>> POST /api/favoriteTeams

Adds a favorite team to a user's list of favorite teams.

Example request body:

```
{
    "team_id": "19",
    "team_name": "Seattle Mariners",
    "league": "AL",
    "division": "West",
    "logo": "URL" (Not in this release),
    "abbreviation": "SEA"
}
```

Successful status (200):
Responds with:

```
{
    "favorite_id": "1",
    "profile_id": "6",
    "team_id": "19"
}
```

### Delete A Favorite Team ###

> Listed endpoint:
>> DELETE /api/favoriteTeams/:favorite_id

Deletes a favorite team from a user's list of favorite teams.

Successful status (204):
Responds with nothing.
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
