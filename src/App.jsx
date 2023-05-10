import React,{ useState } from 'react'
import '../src/styles/App.css'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Rolex from "./Pages/Rolex"
import Patek from "./Pages/Patek"
import Omega from "./Pages/Omega"
import Contact from "./Pages/Contact"
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import OmegaDeVilleTourbillon from "./Pages/OmegaDeVilleTourbillon"
import OmegaMoonwatch from "./Pages/OmegaMoonwatch"
import OmegaSeamasterDiver300m from "./Pages/OmegaSeamasterDiver300m"

import PatekAquanaut from "./Pages/PatekAquanaut"
import PatekCalatrava from "./Pages/PatekCalatrava"
import PatekGrandComplications from "./Pages/PatekGrandComplications"
import PatekNautilus from "./Pages/PatekNautilus"
import PatekTwenty4 from "./Pages/PatekTwenty4"

import RolexAirKing from "./Pages/RolexAirKing"
import RolexCelliniMoonphase from "./Pages/RolexCelliniMoonphase"
import RolexCosmographDaytona from "./Pages/RolexCosmographDaytona"
import RolexGMTMasterII from "./Pages/RolexGMTMasterII"
import RolexSeaDweller from "./Pages/RolexSeaDweller"
import RolexSkyDweller from "./Pages/RolexSkyDweller"
import RolexYachtMaster42 from "./Pages/RolexYachtMaster42"

import ScrollToTop from './Pages/ScrollToTop'

import ContactARetailer from './Pages/ContactARetailer'

function App() {

return (
    <Router>
        <ScrollToTop>
            <Header/>
            <div className="gap-container"></div>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/rolex' element={<Rolex/>}></Route>
                <Route path='/patek' element={<Patek/>}></Route>
                <Route path='/omega' element={<Omega/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/contact-a-retailer/:watchId' element={<ContactARetailer/>}></Route>
                <Route path='/omega-de-ville-tourbillon' element={<OmegaDeVilleTourbillon/>}></Route>
                <Route path='/omega-moonwatch' element={<OmegaMoonwatch/>}></Route>
                <Route path='/omega-seamaster-diver-300m' element={<OmegaSeamasterDiver300m/>}></Route>
                <Route path='/patek-twenty-4' element={<PatekTwenty4/>}></Route>
                <Route path='/patek-nautilus' element={<PatekNautilus/>}></Route>
                <Route path='/patek-aquanaut' element={<PatekAquanaut/>}></Route>
                <Route path='/patek-calatrava' element={<PatekCalatrava/>}></Route>
                <Route path='/patek-grand-complications' element={<PatekGrandComplications/>}></Route>
                <Route path='/rolex-cellini-moonphase' element={<RolexCelliniMoonphase/>}></Route>
                <Route path='/rolex-cosmograph-daytona' element={<RolexCosmographDaytona/>}></Route>
                <Route path='/rolex-sky-dweller' element={<RolexSkyDweller/>}></Route>
                <Route path='/rolex-yacht-master-42' element={<RolexYachtMaster42/>}></Route>
                <Route path='/rolex-gmt-master-ii' element={<RolexGMTMasterII/>}></Route>
                <Route path='/rolex-sea-dweller' element={<RolexSeaDweller/>}></Route>
                <Route path='/rolex-air-king' element={<RolexAirKing/>}></Route>
            </Routes>
            <Footer/>
        </ScrollToTop>
    </Router>
)
  
}

export default App
