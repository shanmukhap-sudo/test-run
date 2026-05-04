import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
import DataDeletion from './pages/DataDeletion';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import { SiteProvider } from './context/SiteContext';

export default function App() {
  return (
    <Router>
      <SiteProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="industries" element={<Industries />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="data-deletion" element={<DataDeletion />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
        </Routes>
      </SiteProvider>
    </Router>
  );
}
