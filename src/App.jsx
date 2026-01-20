import { Routes, Route, NavLink, Link } from 'react-router-dom'
import './App.css'
import Home from './index.jsx';
import MateriAi from './MateriAi.jsx';
import MateriHtml from './MateriHtml.jsx';
import MateriInternet from './MateriInternet.jsx';
import MateriAlgo from './MateriAlgo.jsx';
import MateriUiux from './MateriUiUx.jsx';
import Artikel from './artikel.jsx';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/ai" element={<MateriAi />} />
			<Route path="/html" element={<MateriHtml />} />
			<Route path="/internet" element={<MateriInternet />} />
			<Route path="/algo" element={<MateriAlgo />} />
			<Route path="/uiux" element={<MateriUiux />} />
			<Route path="/artikel" element={<Artikel />} />
		</Routes>
	);
}

export default App;
