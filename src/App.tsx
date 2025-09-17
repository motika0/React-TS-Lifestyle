import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import PhysicalActivity from "./pages/PhysicalActivity";
import HealthyEating from "./pages/HealthyEating";
import MentalHealth from "./pages/MentalHealth";
import AboutUs from "./pages/AboutUs";
import Training from './pages/Training';
import Recipes from './pages/Recipes';
import Methods from './pages/Methods';
import TrainingDetails from './pages/TrainingDetails';
import RecipesDetails from './pages/RecipesDetails';
import MethodsDetails from './pages/MethodsDetails';
import AccountPage from './pages/AccountPage';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <Router>
            <div className="m-0 p-0 font-montserrat font-normal min-h-screen">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/physical-activity" element={<PhysicalActivity />} />
                    <Route path="/healthy-eating" element={<HealthyEating />} />
                    <Route path="/mental-health" element={<MentalHealth />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/physical-activity/training" element={<Training />} />
                    <Route path="/healthy-eating/recipes" element={<Recipes />} />
                    <Route path="/mental-health/methods" element={<Methods />} />
                    <Route path="physical-activity/training/training-details/:title/:image" element={<TrainingDetails/>}/>
                    <Route path="/healthy-eating/recipes/recipes-details/:title/:image" element={<RecipesDetails/>}/>
                    <Route path="/mental-health/methods/methods-details/:title/:image" element={<MethodsDetails/>}/>
                    <Route path="/healthy-eating/articles" element={<ErrorPage />} />
                    <Route path="/mental-health/articles" element={<ErrorPage />} />
                    <Route path="/account" element={<AccountPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;