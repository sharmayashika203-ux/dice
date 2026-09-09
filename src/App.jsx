import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureRibbon from './components/FeatureRibbon';
import Qualifications from './components/Qualifications';
import StatsBanner from './components/StatsBanner';
import QuoteBanner from './components/QuoteBanner';
import RegistrationClosing from './components/RegistrationClosing';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App() {
  const [desiredCourse, setDesiredCourse] = useState('');
  const [modalDetails, setModalDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmitSuccess = (details) => {
    setModalDetails(details);
    setIsModalOpen(true);
  };

  const handleSelectCourse = (courseName) => {
    setDesiredCourse(courseName);
    const formContainer = document.getElementById('counselling-form-container');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div class="app-root">
      <TopBar />
      <Header />
      <Hero
        onSubmitSuccess={handleFormSubmitSuccess}
        desiredCourse={desiredCourse}
        setDesiredCourse={setDesiredCourse}
      />
      <FeatureRibbon />
      <Qualifications onSelectCourse={handleSelectCourse} />
      <div class="qualifications-container">
        <StatsBanner />
        <QuoteBanner />
      </div>
      <RegistrationClosing />
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        details={modalDetails}
      />
    </div>
  );
}
