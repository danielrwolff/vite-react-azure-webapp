# vite-react-azure-webapp
A Vite React application with NodeJS/Express backend, ready to be deployed to Azure App Services as a Web App.

Based on https://github.com/lmachens/vite-boilerplate, but includes the most modern versions of some packages (as of May 2024).

## File structure

| Path | Description |
|---|---|
| `/src/client/*` | React files, bundled by Vite. |
| `/src/server/*` | NodeJS Express files, with an example API route. |
| `/src/shared/*` | A place to store any shared business logic or types for the project. |

## How it works

### Developing

You can run `npm run dev` to start the dev servers for both the client and server, or choose to start the dev servers of each individually using `npm run client:dev` or `npm run server:dev`. 

### Building

You can run `npm run build` to build the whole application, or choose to build the client or server individually by using `npm run client:build` or `npm run server:build`, respectively. Running any of these commands will produce a production build. To test a production build on your local, you can run `npm start` after building.

Vite is configured to build everything within the `/src/client/` folder, pulling in any shared code as needed. It will output the resulting bundle to `/dist/client/`. 

The NodeJS server uses express to host the client source, as well as route any `/api/` queries through the router. There is an example `/api/hello/` API route that simply returns a string.

Both the client and the server have an example of consuming code from the `/shared/` folder.

### Deploying

The easiest way to deploy is to install the `Azure App Service` VSCode extension and deploy directly to your App Service application. It's recommended you let the extension update your `.vscode/settings.json` with your web app details.