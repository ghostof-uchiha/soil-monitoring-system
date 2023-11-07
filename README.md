# soil-monitoring-system

after cloning

## To start the Project 

``` bash
cd server
npm i
```

then in fronend which is client

```
cd client
npm i
```

for running flask server 

```
cd MlServer
```

Create a Virtual Environment:
Run the following command to create a virtual environment. You can replace venv_name with the name you want to give to your virtual environment.
```
python3 -m venv venv_name
```

For example, to create a virtual environment named "myenv," you can use:
```
python3 -m venv venv
```
This command will create a new directory with the specified name (venv_name) containing the virtual environment files.


Activate the Virtual Environment:
On Windows:
```
venv\Scripts\activate
```

Install Dependencies:
Once the virtual environment is activated, use pip to install the packages listed in the requirements.txt file. Navigate to the directory where requirements.txt is located and run:

```
pip install -r requirements.txt
```

start server by python server
```
python app.py
```


or in root directory (for all server)
```
npm i
npm start
```
you don't need to run and client seperately.

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
   ├─ db\
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