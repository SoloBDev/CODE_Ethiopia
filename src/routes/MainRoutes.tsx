import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import AboutUsPage from "../pages/AboutUsPage"
import DonatePage from "../pages/DonatePage"
import MediaPage from "../pages/MediaPage"
import OurWorksPage from "../pages/OurWorksPage"
import TrainingPage from "../pages/TrainingPage"
import PictureGalleryPage from "../pages/PictureGalleryPage"
import ContacUsPage from "../pages/ContacUsPage"
import ScrollToTop from "../components/Shared/ScrollToTop"
import Navbar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"
import Libraries from "../pages/Libraries"

const MainRoutes = () => (
   <BrowserRouter>

      <ScrollToTop />
      <Navbar />

      <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/home" element={<LandingPage />} />
         <Route path="/about-us" element={<AboutUsPage />} />
         <Route path="/donate" element={<DonatePage />} />
         <Route path="/media" element={<MediaPage />} />
         <Route path="/our-works" element={<OurWorksPage />} />
         <Route path="/libraries" element={<Libraries />} />
         <Route path="/training" element={<TrainingPage />} />
         <Route path="/picture-gallery" element={<PictureGalleryPage />} />
         <Route path="/contact-us" element={<ContacUsPage />} />
      </Routes>
      <Footer />
   </BrowserRouter>
)

export default MainRoutes