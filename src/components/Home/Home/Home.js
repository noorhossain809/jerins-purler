import React from 'react';
import Navbars from '../../common/Navbars';
import Appointment from '../../Pages/Appointment/Appointment';
import ContactForm from '../../Pages/ContactForm/ContactForm';
import ScreenCare from '../../Pages/ScreenCare/ScreenCare';
import Services from '../../Pages/Services/Services';
import Testimonials from '../../Pages/Testimonials/Testimonials';

const Home = () => {
    return (
        <div >
            <Navbars />
            <Appointment />
            <Services />
            <ScreenCare />
            <Testimonials />
            <ContactForm />
        </div>
    );
};

export default Home;