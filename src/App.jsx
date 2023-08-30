import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
    
    <Routes basename="/">
        <Route element={<Layout />}>
            <Route path="/"/>
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
    
    </>
  )
}

export default App
