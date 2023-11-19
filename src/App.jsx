import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedOutlet from "./components/ProtectedOutlet";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Books from "./pages/dashboard/Books";
import Genres from "./pages/dashboard/Genres";
import IssueBook from "./pages/dashboard/IssueBook";
import IssueRecords from "./pages/dashboard/IssueRecords";
import Overview from "./pages/dashboard/Overview";
import Profile from "./pages/dashboard/Profile";
import ReturnBook from "./pages/dashboard/ReturnBook";
import Reviews from "./pages/dashboard/Reviews";
import Users from "./pages/dashboard/Users";
import Waitlist from "./pages/dashboard/Waitlist";

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProtectedOutlet />}>
            <Route path="*" element={<Dashboard />}>
              <Route path="" element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<Overview />} />
              <Route path="books" element={<Books />} />
              <Route path="genres" element={<Genres />} />
              <Route path="issue-book" element={<IssueBook />} />
              <Route path="return-book" element={<ReturnBook />} />
              <Route path="issue-records" element={<IssueRecords />} />
              <Route path="users" element={<Users />} />
              <Route path="waitlist" element={<Waitlist />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
