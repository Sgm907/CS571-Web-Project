import { BrowserRouter, Route, Routes } from 'react-router';

import LandingPage from './../pages/LandingPage';
import AboutPage from './../pages/AboutPage';
import FeedbackPage from './../pages/FeedbackPage';
import LorePage from './../pages/LorePage';
import RoadmapPage from './../pages/RoadmapPage';
import NoPage from './../pages/NoPage';
import SiteNavigation from './SiteNavigation';

function SiteOutline() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteNavigation />}>
          <Route index element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/lore" element={<LorePage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default SiteOutline;
