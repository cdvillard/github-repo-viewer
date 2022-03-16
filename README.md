# Github Repo Viewer

This Github repo viewer is a simple user lookup tool that returns a paginated list of a selected user's repos. It's built using React and bundled using Parcel.

## App Dependencies

- React
- React DOM
- React Router
- React Error Boundary

## Running Locally

To run the application locally, clone the repo to your computer and install all dependencies.

``` bash
git clone git@github.com:cdvillard/github-repo-viewer.git
npm install
```

To run this application smoothly and avoid the Github API's rate limiting, you'll need to generate a personal access token using a Github account to authenticate and authorize this app. [Github provides instructions for generating a PAT in their docs here.](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Once you've generated a token for this project, create a new `.env` file using the variable in `.env-example`.

```shell
# .env-example

GITHUB_AUTH_TOKEN=PUT_YOUR_GITHUB_TOKEN_HERE
```

Once that's saved, you can start the application by going to your console and entering `npm start`. The application should be viewable at [https://localhost:1234](http://localhost:1234).
