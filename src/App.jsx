import { Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './index.jsx';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
