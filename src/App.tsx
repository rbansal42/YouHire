import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashboardStudent, Home, LoginPage, ListingStudent } from "./pages";

export default function App() {
	return (
		<div className="w-full bg-background text-text">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/dashboard" element={<DashboardStudent />} />
					<Route path="/listing" element={<ListingStudent />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
