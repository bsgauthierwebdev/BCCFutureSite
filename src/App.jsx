import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import HomeView from './components/HomeView/HomeView'
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
		</Router>
	)
}

export default App
