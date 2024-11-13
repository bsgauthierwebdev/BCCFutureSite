import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import HomeView from './components/HomeView/HomeView'
import Footer from './components/Footer/Footer'
import './App.css'
import Organizers from "./components/Organizers/Organizers"


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomeView />} />
				<Route path = '/organizers' element = {<Organizers />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
