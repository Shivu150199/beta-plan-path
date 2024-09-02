import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar"

import Signin from "./pages/authorization/Signin";
import Signup from "./pages/authorization/Signup";

import SignupOrg from "./pages/authorization/SignupOrg";
import SigninOrg from "./pages/authorization/SigninOrg";
import ForgotPassword from "./pages/authorization/ForgotPassword";
import EmailSuccess from "./components/authorization/EmailSuccess";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./pages/authorization/ResetPassword";
import PageNotFound from "./pages/PageNotFound";
import Contactus from "./pages/contactus/Contactus";
import { Aboutus } from "./pages/aboutus";
import { Policy, Terms } from "./pages/privacyPolicy";
import { MyProfile } from "./pages/myProfile";
import { Landing } from "./pages/landingPage";
import { ScrollToTop } from "./components/utils";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/cart";
import { Path } from "./pages/path";
import {
    FailSubscribe,
    Payment,
    Pricing,
    SuccessfulSubscribe,
} from "./pages/pricing";

import {
    Course,
    AboutCourse,
    EditCourse,
    CreateCourse,
    EditSingleCourse,
} from "./pages/course";
import { Wishlist } from "./pages/wishlist";
import { CourseInfo } from "./components/course";
import Courseinfo from "./pages/course/Courseinfo";
import { CartProvider } from "./context api/CartContext";
import { AddedCourseSingle, Home } from "./pages/dashboard";
import { DashboardProvider } from "./context api/DashboardContext";

function App() {
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="light"
            />
            <ScrollToTop />

            <Navbar />

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/course" element={<Course />} />
                <Route path="/course/:id" element={<Courseinfo />} />
                {/* <Route path="/course/:id" element={<AboutCourse/>}/> */}
                <Route path="/edit-course/:id" element={<EditSingleCourse />} />
                <Route path="/edit-course" element={<EditCourse />} />
                <Route path="/create-course" element={<CreateCourse />} />
                <Route path="/login" element={<Signin />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/signup-organisation" element={<SignupOrg />} />
                <Route path="/signin-organisation" element={<SigninOrg />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/success" element={<EmailSuccess />} />
                {/*  */}
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/terms" element={<Terms />} />
                {/*  */}

                <Route path="/myprofile" element={<MyProfile />} />
                {/*  */}
                <Route
                    path="/cart"
                    element={
                        <CartProvider>
                            <Cart />
                        </CartProvider>
                    }
                />
                <Route path="/my-path" element={<Path />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/subscribed" element={<SuccessfulSubscribe />} />
                <Route path="/not-subscribed" element={<FailSubscribe />} />
                {/*  */}
                <Route path="/wishlist" element={<Wishlist />} />
                {/*  */}
                <Route
                    path="/dashboard"
                    element={
                        <DashboardProvider>
                            <Home />
                        </DashboardProvider>
                    }
                />
                <Route
                    path="/dashboard/added/:id"
                    element={
                        <DashboardProvider>
                            <AddedCourseSingle />
                        </DashboardProvider>
                    }
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
