import React from 'react';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Courses from './components/Courses/Courses';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import ForgetPassword from './components/Auth/ForgetPassword';
import PF from './components/Payment/PF';
import NotFound from './components/NotFound/NiotFound';
import PS from './components/Payment/PS';
import Sub from './components/Payment/Sub';
import CoursePage from './components/CoursePage/CoursePage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:id" element={<CoursePage/>}/>
        <Route path="/profile" element={<Profile />}/>

        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgetpassword" element={<ForgetPassword />}/>
        <Route path="/paymentfailed" element={<PF />}/>
        <Route path="/paymentsucceed" element={<PS />}/>
        <Route path="/notfound" element={<NotFound />}/>
        <Route path="/subscribe" element={<Sub />}/>
        <Route path="/resetpassword/:token" element={<ResetPassword />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
