import { HashRouter, Route, Routes } from 'react-router';

import LandingPage from './../pages/LandingPage';
import AboutPage from './../pages/AboutPage';
import FeedbackPage from './../pages/FeedbackPage';
import LorePage from './../pages/LorePage';
import RoadmapPage from './../pages/RoadmapPage';
import NoPage from './../pages/NoPage';
import SiteNavigation from './SiteNavigation';

function SiteOutline() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/CS571-Web-Project/" element={<SiteNavigation />}>
          <Route index element={<LandingPage />} />
          <Route path="/CS571-Web-Project/about" element={<AboutPage />} />
          <Route path="/CS571-Web-Project/feedback" element={<FeedbackPage />} />
          <Route path="/CS571-Web-Project/lore" element={<LorePage />} />
          <Route path="/CS571-Web-Project/roadmap" element={<RoadmapPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default SiteOutline;
