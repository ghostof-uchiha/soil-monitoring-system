import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const CropML = lazy(() => import('../pages/Dashboard/Crops/MachineLearning'));
const FertiML = lazy(() => import('../pages/Dashboard/Ferti/MachineLearning'));
const dashsoildata = lazy(() => import('../pages/Soildata/Soildata'));
const CropList = lazy(() => import('../pages/Crops/CropList'));
const CropDetails = lazy(() => import('../pages/Crops/CropDetails'));
const FertilizerAnalyse = lazy(() => import('../pages/Fertilizers/PredictFert'));
import ForecastDetails from '../pages/Dashboard/Crops/ForcastDetails'; 
import FertiForecastDetails from '../pages/Dashboard/Ferti/ForcastDetails'; 
import Dashboard from '../pages/Dashboard/index'; // Adjust the path based on your file structure


const coreRoutes = [
  {
    path: '/ml',
    title: 'MachineLearning',
    component: Dashboard,
  },
  {
    path: '/ml/crop',
    title: 'MachineLearning',
    component: CropML,
  },
  {
    path: '/ml/crop/:id',
    title: 'Forecast Information',
    component: ForecastDetails, // Add the ForecastDetails component route
  },
  {
    path: '/ml/fert_ilizer/',
    title: 'MachineLearning',
    component: FertiML,
  },
  {
    path: '/ml/fert_ilizer/:id',
    title: 'MachineLearning',
    component: FertiForecastDetails,
  },
  {
    path: '/Soildata',
    title: 'Test soil',
    component: dashsoildata,
  },
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  {
    path: '/ferti',
    title: 'Fertilizer',
    component: FertilizerAnalyse,
  },
  {
    path: '/crops', // Dynamic route parameter for the selected crop
    title: 'Crop Information',
    component: CropList,
  },
  {
    path: '/crops/:cropName', // Dynamic route parameter for the selected crop
    title: 'Crop Information',
    component: CropDetails, // Create a CropDetails component for displaying individual crop details
  }
];

const routes = [...coreRoutes];
export default routes;
