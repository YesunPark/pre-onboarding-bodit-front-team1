import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageButton from './components/PageButton';
import SensorList from './pages/sensorlist/SensorList';
import DashBoard from './pages/dashboard/DashBoard';
import GlobalStyles from './styles/Globalstyles';

const Router = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<PageButton />
			<Routes>
				<Route path='/' element={<SensorList />} />
				<Route path='/dashboard' element={<DashBoard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
