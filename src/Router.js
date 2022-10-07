import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

function Router() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path='/' />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
