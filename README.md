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
npm run dev
```

or in root directory 
```
npm i
npm start
```
you don't need to sever and client seperately.

```
soil-monitoring-system
├─ client
│  ├─ .gitignore
│  ├─ .prettierrc
│  ├─ index.html
│  ├─ LICENSE.md
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.cjs
│  ├─ public
│  │  ├─ data.json
│  │  └─ favicon.ico
│  ├─ README.md
│  ├─ src
│  │  ├─ App.tsx
│  │  ├─ common
│  │  │  └─ Loader
│  │  │     └─ index.tsx
│  │  ├─ index.css
│  │  ├─ js
│  │  │  ├─ drag.ts
│  │  │  └─ us-aea-en.js
│  │  ├─ layout
│  │  │  └─ DefaultLayout.tsx
│  │  ├─ lib.d.ts
│  │  ├─ main.tsx
│  │  ├─ pages
│  │  │  ├─ 404
│  │  │  │  └─ NotFound.tsx
│  │  │  ├─ Authentication
│  │  │  │  ├─ SignIn.tsx
│  │  │  │  ├─ SignUp.tsx
│  │  │  │  └─ VerifyForOtp.tsx
│  │  │  ├─ Calendar.tsx
│  │  │  ├─ Chart.tsx
│  │  │  ├─ Dashboard
│  │  │  │  ├─ MachineLearning.tsx
│  │  │  │  └─ Soildata.tsx
│  │  │  ├─ Form
│  │  │  │  ├─ FormElements.tsx
│  │  │  │  └─ FormLayout.tsx
│  │  │  ├─ Home.tsx
│  │  │  ├─ Profile.tsx
│  │  │  ├─ Settings.tsx
│  │  │  ├─ Tables.tsx
│  │  │  └─ UiElements
│  │  │     ├─ Alerts.tsx
│  │  │     └─ Buttons.tsx
│  │  ├─ react-app-env.d.ts
│  │  ├─ routes
│  │  │  └─ index.ts
│  │  └─ satoshi.css
│  ├─ tailwind.config.cjs
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ server
   ├─ controllers
   │  ├─ authentication.js
   │  ├─ profile.js
   │  └─ userOTP.js
   ├─ db
   │  └─ db.js
   ├─ middleware
   │  ├─ apiKeyMiddleware.js
   │  ├─ authMiddleware.js
   │  ├─ uploadMiddleware.js
   │  └─ verifyOTP.js
   ├─ models
   │  ├─ OTPSchema.js
   │  ├─ soilDataModel.js
   │  └─ UserModel.js
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  ├─ cropPredictionRoutes.js
   │  ├─ soilDataRoutes.js
   │  └─ userRoutes.js
   ├─ server.js
   └─ utils
      ├─ cloudinary.js
      └─ nodemailer.js

```