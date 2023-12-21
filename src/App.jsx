import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBookForm from "./components/DashBookForm";
import DashGenreForm from "./components/DashGenreForm";
import DashProfileGeneral from "./components/DashProfileGeneral";
import DashProfileSecurity from "./components/DashProfileSecurity";
import Layout from "./components/Layout";
import Modal from "./components/Modal";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import HomeGenres from "./pages/Genres";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import Unauthorized from "./pages/Unauthorized";
import UnverifiedAccount from "./pages/UnverifiedAccount";
import VerifyEmail from "./pages/VerifyEmail";
import DashBooks from "./pages/dashboard/Books";
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
          <Route path="/" element={<Layout />}>
            <Route path="" index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="genres" element={<HomeGenres />} />
            <Route path="books" element={<Books />} />
            <Route path="books/:bookId" element={<BookDetails />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/unverified-account" element={<UnverifiedAccount />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              element={
                <ProtectedRoute allowedRoles={["librarian", "member"]} />
              }
            >
              <Route path="" element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<Overview />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="waitlist" element={<Waitlist />} />

              <Route path="profile" element={<Profile />}>
                <Route path="" element={<Navigate to="general" replace />} />
                <Route path="general" element={<DashProfileGeneral />} />
                <Route path="security" element={<DashProfileSecurity />} />
              </Route>
            </Route>

            <Route element={<ProtectedRoute allowedRoles={["librarian"]} />}>
              <Route path="issue-book" element={<IssueBook />} />
              <Route path="return-book" element={<ReturnBook />} />
              <Route path="issue-records" element={<IssueRecords />} />
              <Route path="users" element={<Users />} />

              <Route path="books" element={<DashBooks />}>
                <Route
                  path="new"
                  element={
                    <Modal title="Add New Book">
                      <DashBookForm />
                    </Modal>
                  }
                />
                <Route
                  path="edit/:bookId"
                  element={
                    <Modal title="Update Existing Book">
                      <DashBookForm />
                    </Modal>
                  }
                />
              </Route>

              <Route path="genres" element={<Genres />}>
                <Route
                  path="new"
                  element={
                    <Modal title="Add New Genre">
                      <DashGenreForm />
                    </Modal>
                  }
                />
                <Route
                  path="edit/:updateId"
                  element={
                    <Modal title="Update Existing Genre">
                      <DashGenreForm />
                    </Modal>
                  }
                />
              </Route>
            </Route>

            <Route element={<ProtectedRoute allowedRoles={["member"]} />}>
              <Route path="borrow-records" element={<IssueRecords />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
