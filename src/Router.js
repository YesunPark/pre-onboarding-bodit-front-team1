import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import SensorList from './sensorlist/SensorList';

function Router() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path='/' element={<SensorList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
