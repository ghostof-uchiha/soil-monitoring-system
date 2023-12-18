# soil-monitoring-system

after cloning

## To start the Project 


### Install server dependencies
``` bash
cd server
npm i
```

### install frontend dependencies
```
cd client
npm i
```

### Setup Your Flask Server

```
cd MlServer
```

#### Create a Virtual Environment:
Run the following command to create a virtual environment. You can replace venv_name with the name you want to give to your virtual environment.
```
python3 -m venv venv_name
```

For example, to create a virtual environment named "myenv," you can use:
```
python3 -m venv venv
```
This command will create a new directory with the specified name (venv_name) containing the virtual environment files.


#### Activate the Virtual Environment:
On Windows:
```
venv\Scripts\activate
```

#### Install Dependencies:
Once the virtual environment is activated, use pip to install the packages listed in the requirements.txt file. Navigate to the directory where requirements.txt is located and run:

```
pip install -r requirements.txt
```

start server by python server
```
python app.py
```

## Start Project
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
│  │  ├─ components
│  │  │  ├─ Breadcrumb.tsx
│  │  │  ├─ CardFour.tsx
│  │  │  ├─ CardOne.tsx
│  │  │  ├─ CardThree.tsx
│  │  │  ├─ CardTwo.tsx
│  │  │  ├─ ChartFour.tsx
│  │  │  ├─ ChartOne.tsx
│  │  │  ├─ ChartThree.tsx
│  │  │  ├─ ChartTwo.tsx
│  │  │  ├─ ChatCard.tsx
│  │  │  ├─ CheckboxFive.tsx
│  │  │  ├─ CheckboxFour.tsx
│  │  │  ├─ CheckboxOne.tsx
│  │  │  ├─ CheckboxThree.tsx
│  │  │  ├─ CheckboxTwo.tsx
│  │  │  ├─ Crophead.tsx
│  │  │  ├─ DarkModeSwitcher.tsx
│  │  │  ├─ DataStats.tsx
│  │  │  ├─ DeleteConfirmationModal.tsx
│  │  │  ├─ DropdownDefault.tsx
│  │  │  ├─ DropdownMessage.tsx
│  │  │  ├─ DropdownNotification.tsx
│  │  │  ├─ DropdownUser.tsx
│  │  │  ├─ Header.tsx
│  │  │  ├─ HomeDropdown.tsx
│  │  │  ├─ MapOne.tsx
│  │  │  ├─ ModalSettings.tsx
│  │  │  ├─ ourBestRecipes
│  │  │  │  ├─ BestRecipes.css
│  │  │  │  ├─ BestRecipes.test.js
│  │  │  │  ├─ BestRecipes.tsx
│  │  │  │  ├─ Post
│  │  │  │  │  ├─ PostRecipe.css
│  │  │  │  │  ├─ RecipePost.test.js
│  │  │  │  │  ├─ RecipePost.tsx
│  │  │  │  │  └─ ResponsiveCardRecipe.css
│  │  │  │  └─ ResponsiveRecipes.css
│  │  │  ├─ PassOtp.tsx
│  │  │  ├─ Processing.tsx
│  │  │  ├─ ResetPassword.tsx
│  │  │  ├─ scrolltoTop.tsx
│  │  │  ├─ SearchBar.tsx
│  │  │  ├─ Sidebar.tsx
│  │  │  ├─ SidebarLinkGroup.tsx
│  │  │  ├─ SoilBarGraph.tsx
│  │  │  ├─ SoilDataTable.tsx
│  │  │  ├─ SucessMessage.tsx
│  │  │  ├─ SwitcherFour.tsx
│  │  │  ├─ SwitcherOne.tsx
│  │  │  ├─ SwitcherThree.tsx
│  │  │  ├─ SwitcherTwo.tsx
│  │  │  ├─ TableOne.tsx
│  │  │  ├─ TableSettings.tsx
│  │  │  ├─ TableThree.tsx
│  │  │  ├─ TableTwo.tsx
│  │  │  └─ TaskHeader.tsx
│  │  ├─ fonts
│  │  │  ├─ Satoshi-Black.eot
│  │  │  ├─ Satoshi-Black.ttf
│  │  │  ├─ Satoshi-Black.woff
│  │  │  ├─ Satoshi-Black.woff2
│  │  │  ├─ Satoshi-BlackItalic.eot
│  │  │  ├─ Satoshi-BlackItalic.ttf
│  │  │  ├─ Satoshi-BlackItalic.woff
│  │  │  ├─ Satoshi-BlackItalic.woff2
│  │  │  ├─ Satoshi-Bold.eot
│  │  │  ├─ Satoshi-Bold.ttf
│  │  │  ├─ Satoshi-Bold.woff
│  │  │  ├─ Satoshi-Bold.woff2
│  │  │  ├─ Satoshi-BoldItalic.eot
│  │  │  ├─ Satoshi-BoldItalic.ttf
│  │  │  ├─ Satoshi-BoldItalic.woff
│  │  │  ├─ Satoshi-BoldItalic.woff2
│  │  │  ├─ Satoshi-Italic.eot
│  │  │  ├─ Satoshi-Italic.ttf
│  │  │  ├─ Satoshi-Italic.woff
│  │  │  ├─ Satoshi-Italic.woff2
│  │  │  ├─ Satoshi-Light.eot
│  │  │  ├─ Satoshi-Light.ttf
│  │  │  ├─ Satoshi-Light.woff
│  │  │  ├─ Satoshi-Light.woff2
│  │  │  ├─ Satoshi-LightItalic.eot
│  │  │  ├─ Satoshi-LightItalic.ttf
│  │  │  ├─ Satoshi-LightItalic.woff
│  │  │  ├─ Satoshi-LightItalic.woff2
│  │  │  ├─ Satoshi-Medium.eot
│  │  │  ├─ Satoshi-Medium.ttf
│  │  │  ├─ Satoshi-Medium.woff
│  │  │  ├─ Satoshi-Medium.woff2
│  │  │  ├─ Satoshi-MediumItalic.eot
│  │  │  ├─ Satoshi-MediumItalic.ttf
│  │  │  ├─ Satoshi-MediumItalic.woff
│  │  │  ├─ Satoshi-MediumItalic.woff2
│  │  │  ├─ Satoshi-Regular.eot
│  │  │  ├─ Satoshi-Regular.ttf
│  │  │  ├─ Satoshi-Regular.woff
│  │  │  ├─ Satoshi-Regular.woff2
│  │  │  ├─ Satoshi-Variable.eot
│  │  │  ├─ Satoshi-Variable.ttf
│  │  │  ├─ Satoshi-Variable.woff
│  │  │  ├─ Satoshi-Variable.woff2
│  │  │  ├─ Satoshi-VariableItalic.eot
│  │  │  ├─ Satoshi-VariableItalic.ttf
│  │  │  ├─ Satoshi-VariableItalic.woff
│  │  │  └─ Satoshi-VariableItalic.woff2
│  │  ├─ hooks
│  │  │  ├─ fireToast.tsx
│  │  │  ├─ useColorMode.tsx
│  │  │  └─ useLocalStorage.tsx
│  │  ├─ images
│  │  │  ├─ brand
│  │  │  │  ├─ brand-01.svg
│  │  │  │  ├─ brand-02.svg
│  │  │  │  ├─ brand-03.svg
│  │  │  │  ├─ brand-04.svg
│  │  │  │  └─ brand-05.svg
│  │  │  ├─ cards
│  │  │  │  ├─ cards-01.png
│  │  │  │  ├─ cards-02.png
│  │  │  │  ├─ cards-03.png
│  │  │  │  ├─ cards-04.png
│  │  │  │  ├─ cards-05.png
│  │  │  │  └─ cards-06.png
│  │  │  ├─ country
│  │  │  │  ├─ country-01.svg
│  │  │  │  ├─ country-02.svg
│  │  │  │  ├─ country-03.svg
│  │  │  │  ├─ country-04.svg
│  │  │  │  ├─ country-05.svg
│  │  │  │  └─ country-06.svg
│  │  │  ├─ cover
│  │  │  │  └─ cover-01.png
│  │  │  ├─ cropImages
│  │  │  ├─ favicon.ico
│  │  │  ├─ home
│  │  │  │  └─ home.png
│  │  │  ├─ icon
│  │  │  │  ├─ icon-arrow-down.svg
│  │  │  │  ├─ icon-calendar.svg
│  │  │  │  ├─ icon-copy-alt.svg
│  │  │  │  ├─ icon-moon.svg
│  │  │  │  ├─ icon-sun.svg
│  │  │  │  ├─ key.svg
│  │  │  │  └─ test.svg
│  │  │  ├─ logo
│  │  │  │  ├─ add-white.png
│  │  │  │  ├─ add.png
│  │  │  │  ├─ crop.png
│  │  │  │  ├─ crop2.png
│  │  │  │  ├─ Login.svg
│  │  │  │  ├─ LoginDark.svg
│  │  │  │  ├─ logo-dark.svg
│  │  │  │  ├─ logo-icon.svg
│  │  │  │  ├─ logo.svg
│  │  │  │  ├─ mediacreationtool.exe
│  │  │  │  └─ test.png
│  │  │  ├─ product
│  │  │  │  ├─ product-01.png
│  │  │  │  ├─ product-02.png
│  │  │  │  ├─ product-03.png
│  │  │  │  ├─ product-04.png
│  │  │  │  └─ product-thumb.png
│  │  │  ├─ task
│  │  │  │  └─ task-01.jpg
│  │  │  └─ user
│  │  │     ├─ user-00.png
│  │  │     ├─ user-01.png
│  │  │     ├─ user-02.png
│  │  │     ├─ user-03.png
│  │  │     ├─ user-04.png
│  │  │     ├─ user-05.png
│  │  │     ├─ user-06.png
│  │  │     ├─ user-07.png
│  │  │     ├─ user-08.png
│  │  │     ├─ user-09.png
│  │  │     ├─ user-10.png
│  │  │     ├─ user-11.png
│  │  │     ├─ user-12.png
│  │  │     └─ user-13.png
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
│  │  │  │  ├─ Google
│  │  │  │  │  └─ GoogleSignInButton.tsx
│  │  │  │  ├─ SignIn.tsx
│  │  │  │  ├─ SignUp.tsx
│  │  │  │  └─ VerifyForOtp.tsx
│  │  │  ├─ Calendar.tsx
│  │  │  ├─ Chart.tsx
│  │  │  ├─ Crops
│  │  │  │  ├─ CropDetails.tsx
│  │  │  │  └─ CropList.tsx
│  │  │  ├─ Dashboard
│  │  │  │  ├─ ForcastDetails.tsx
│  │  │  │  ├─ MachineLearning.tsx
│  │  │  │  ├─ PredictedData.ts
│  │  │  │  └─ PredictedDataInterfaceFile.ts
│  │  │  ├─ Form
│  │  │  │  ├─ FormElements.tsx
│  │  │  │  └─ FormLayout.tsx
│  │  │  ├─ Home.tsx
│  │  │  ├─ Profile.tsx
│  │  │  ├─ Settings.tsx
│  │  │  ├─ Soildata
│  │  │  │  ├─ Analyze.tsx
│  │  │  │  ├─ Soildata.tsx
│  │  │  │  └─ types.ts
│  │  │  ├─ Tables.tsx
│  │  │  └─ UiElements
│  │  │     ├─ Alerts.tsx
│  │  │     └─ Buttons.tsx
│  │  ├─ react-app-env.d.ts
│  │  ├─ routes
│  │  │  └─ index.ts
│  │  ├─ styles
│  │  │  ├─ cards.css
│  │  │  ├─ cropcard.css
│  │  │  ├─ index.css
│  │  │  └─ satoshi.css
│  │  └─ utils
│  │     └─ crops.ts
│  ├─ tailwind.config.cjs
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.js
├─ Cuircuit
│  ├─ 1PCS-ESP32-Development-Board-WiFi-Bluetooth-Ultra-Low-Power-Consumption-Dual-Core-ESP-32-ESP-32S__1_-removebg.png
│  ├─ 485.jpg
│  ├─ board.jpg
│  ├─ Cuircut Diagram.png
│  ├─ dht11.jpg
│  ├─ moiture.jpg
│  ├─ npk.jpg
│  └─ RS485.png
├─ MlServer
│  ├─ app.py
│  ├─ model.pkl
│  ├─ model0.pkl
│  ├─ model1.pkl
│  ├─ model2.pkl
│  └─ requirements.txt
├─ package-lock.json
├─ package.json
├─ README.md
└─ server
   ├─ controllers
   │  ├─ authentication.js
   │  ├─ profile.js
   │  └─ userOTP.js
   ├─ crop.json
   ├─ db
   │  └─ db.js
   ├─ middleware
   │  ├─ apiKeyMiddleware.js
   │  ├─ authMiddleware.js
   │  ├─ passport.js
   │  ├─ uploadMiddleware.js
   │  └─ verifyOTP.js
   ├─ models
   │  ├─ OTP.models.js
   │  ├─ soilData.models.js
   │  └─ user.models.js
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  ├─ admin.js
   │  ├─ authRoutes.js
   │  ├─ cropPredictionRoutes.js
   │  ├─ googleAuthRoute.js
   │  ├─ settingRoutes.js
   │  └─ soilDataRoutes.js
   ├─ server.js
   └─ utils
      ├─ cloudinary.js
      └─ nodemailer.js

```