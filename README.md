# Getting Started with Create React App
??
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Keep the Render backend awake (Prevent 15-min Sleep / Cold Starts)

Render's free tier spins down web services after 15 minutes of inactivity. When a request comes in after spin-down, it takes 40–60 seconds to boot up.

We have set up multiple mechanisms to keep your backend awake 24/7:

### Option 1: Standalone Script (Local or CI)
You can ping or keep the service awake anytime using the included script:

```bash
# Single ping to wake up the backend (tries /health and falls back to /)
node scripts/ping-render.js https://yritsolutions.onrender.com

# From backend directory:
cd backend
npm run ping

# Run continuously as a background daemon (pings every 10 minutes)
node scripts/ping-render.js --continuous --interval 10
# OR:
cd backend && npm run keep-alive
```

### Option 2: GitHub Actions Workflow
The workflow at `.github/workflows/render-wake.yml` automatically executes the ping script every 10 minutes.

1. Go to your GitHub repository: **Settings** → **Secrets and variables** → **Actions**.
2. Under **Repository secrets** (or **Repository variables**), click **New repository secret**.
3. Name: `RENDER_URL`
4. Value: `https://yritsolutions.onrender.com` (or your active Render backend URL).
5. In the **Actions** tab of GitHub, ensure Actions are enabled. You can click **"Wake Render service"** → **"Run workflow"** to trigger a test run anytime.

### Option 3: Free 24/7 External Pinger (Recommended for 100% Zero-Downtime)
GitHub Actions cron schedules are subject to GitHub runner queues and may occasionally be delayed by 15–30 minutes, and GitHub pauses scheduled workflows if a repository has no commits for 60 days.

For guaranteed 24/7 uptime with zero maintenance:
1. Create a free account at [cron-job.org](https://cron-job.org) or [uptimerobot.com](https://uptimerobot.com).
2. Create a new monitor / cronjob:
   - **URL**: `https://yritsolutions.onrender.com/` (or `/health`)
   - **Execution interval**: Every 5 or 10 minutes.
   - **Request Method**: `GET`
3. Save. This pings your Render server reliably around the clock for free.
