import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import('./components/SharedLayout'));
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites'));

function App() {
	return (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path='catalog' element={<Catalog />} />
				<Route path='favorites' element={<Favorites />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Route>
		</Routes>
	);
}

export default App;