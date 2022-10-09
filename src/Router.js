import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageButton from './components/PageButton';
import SensorList from './pages/sensorlist/SensorList';
import DashBoard from './pages/dashboard/DashBoard';
import GlobalStyles from './styles/Globalstyles';

const Router = () => {
	const BASE_URL = '/pre-onboarding-bodit-front-team1';
	return (
		<BrowserRouter>
			<GlobalStyles />
			<PageButton url={BASE_URL} />
			<Routes>
				<Route path={`${BASE_URL}`} element={<SensorList />} />
				<Route path={`${BASE_URL}/dashboard`} element={<DashBoard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
