import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  DashboardStudent,
  Home,
  LoginPage,
  ListingStudent,
  SignupPage,
  QueryPage,
  AppliedListings,
  ActiveQueriesPage,
  ActiveListings,
  MyResumes,
  StudentProfile,
} from "./pages";

export default function App() {
  return (
    <div className="w-full bg-background text-text">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/signup"
            element={<SignupPage />}
          />
          <Route
            path="/dashboard"
            element={<DashboardStudent />}
          />
          <Route
            path="/listing"
            element={<ListingStudent />}
          />
          <Route
            path="/query"
            element={<QueryPage />}
          />
          <Route
            path="/applications"
            element={<AppliedListings />}
          />
          <Route
            path="/queries"
            element={<ActiveQueriesPage />}
          />
          <Route
            path="/listings"
            element={<ActiveListings />}
          />
          <Route
            path="/resumes"
            element={<MyResumes />}
          />
          <Route
            path="/profile"
            element={<StudentProfile />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
