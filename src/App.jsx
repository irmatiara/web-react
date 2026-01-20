import { Routes, Route, NavLink, Link } from 'react-router-dom'
import './App.css'
import Home from './index.jsx';
import MateriAi from './MateriAi.jsx';
import MateriHtml from './MateriHtml.jsx';
import MateriInternet from './MateriInternet.jsx';
import NotFound from './NotFound.jsx';
import Artikel from './artikel.jsx';
import About from './About.jsx';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/ai" element={<MateriAi />} />
			<Route path="/html" element={<MateriHtml />} />
			<Route path="/internet" element={<MateriInternet />} />
			<Route path="/algo" element={<NotFound />} />
			<Route path="/artikel" element={<Artikel />} />
			<Route path="/about" element={<About/>} />
		</Routes>
	);
}

export default App;
