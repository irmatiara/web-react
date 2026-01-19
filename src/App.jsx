import { Routes, Route, NavLink, Link } from 'react-router-dom'
import './App.css'
import Home from './index.jsx';
import MateriAi from './MateriAi.jsx';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/ai" element={<MateriAi />} />
		</Routes>
	);
}

export default App;
