import { Routes, Route, NavLink, Link } from 'react-router-dom'
import './App.css'
import Home from './index.jsx';
import MateriAi from './MateriAi.jsx';
import MateriHtml from './MateriHtml.jsx';
import MateriInternet from './MateriInternet.jsx';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/ai" element={<MateriAi />} />
			<Route path="/html" element={<MateriHtml />} />
			<Route path="/internet" element={<MateriInternet />} />
		</Routes>
	);
}

export default App;
