# soil-monitoring-system

after cloning

## To start the Project 

``` bash
cd server
npm i
npm run dev
```

then in fronend which is client

```
cd client
npm i
npm start
```

```
soil-monitoring-system
├─ client
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  ├─ assets
│  │  │  └─ images
│  │  │     └─ grid.svg
│  │  ├─ index.html
│  │  └─ manifest.json
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ components
│  │  │  ├─ auth
│  │  │  │  ├─ Login.jsx
│  │  │  │  └─ Register.jsx
│  │  │  ├─ common
│  │  │  │  └─ Header.jsx
│  │  │  ├─ ErrorBoundary.jsx
│  │  │  ├─ Home.jsx
│  │  │  ├─ NotFound.jsx
│  │  │  ├─ Sidebar.jsx
│  │  │  └─ Wifi.jsx
│  │  ├─ index.css
│  │  ├─ index.jsx
│  │  └─ middleware
│  │     └─ setupProxy.js
│  └─ tailwind.config.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ server
   ├─ controllers
   │  └─ userController.js
   ├─ db
   │  └─ db.js
   ├─ middleware
   │  ├─ apiKeyMiddleware.js
   │  ├─ authMiddleware.js
   │  └─ authorizeMiddleware.js
   ├─ models
   │  ├─ soilDataModel.js
   │  └─ UserModel.js
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  ├─ cropPredictionRoutes.js
   │  ├─ soilDataRoutes.js
   │  └─ userRoutes.js
   └─ server.js

```