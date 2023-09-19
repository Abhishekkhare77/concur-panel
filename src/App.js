import './app.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/auth_pages/LoginPage/LoginPage';
import AuthLayout from './layouts/AuthLayout';
import RegisterPage from './pages/auth_pages/RegisterPage/RegisterPage';
import ForgotPassPage from './pages/auth_pages/ForgotPassPage/ForgotPassPage';
import ResetPassPage from './pages/auth_pages/ResetPassPage/ResetPassPage';
import TermsPage from './pages/auth_pages/TermsPage/TermsPage';
import LayoutPagesLayout from './layouts/LayoutPagesLayout';
import Onboarding from './pages/layout_pages/Onboarding/Onboarding';
import AppPage from './pages/layout_pages/AppPage/AppPage';
import GetStartedPage from './pages/layout_pages/GetStartedPage/GetStartedPage';
import DataLifeCycleManagement from './pages/layout_pages/DataLifeCycleManagement/DataLifeCycleManagement';
import DataPrincipleManagement from './pages/layout_pages/DataPrincipleManagement/DataPrincipleManagement';
import ConsentPage from './pages/layout_pages/ConsentPage/ConsentPage';
import ParentalConsent from './pages/layout_pages/ParentalConsent/ParentalConsent';
import DigitalPolicyManagement from './pages/layout_pages/DigitalPolicyManagement/DigitalPolicyManagement';
import NoticeManagement from './pages/layout_pages/NoticeManagement/NoticeManagement';
import DPOStudio from './pages/layout_pages/DPOStudio/DPOStudio';
import OrganizationTraining from './pages/layout_pages/OrganizationTraining/OrganizationTraining';
import SettingsNav from './pages/layout_pages/Settings/SettingsNav';
import PrivacyNotices from './components/DigitalPMComponents/PrivacyNotices';
import PolicyView from './components/DigitalPMComponents/PolicyView';
import DataSources from './pages/layout_pages/DataSources/DataSources';
import DataDiscovery from './pages/layout_pages/DataDiscovery/DataDiscovery';
import DataCatalog from './pages/layout_pages/DataCatalog/DataCatalog';
import RoPA from './pages/layout_pages/RoPA/RoPA';
import MobileAppConsent from './pages/layout_pages/MobileAppConsent/MobileAppConsent';
import WebAppConsent from './pages/layout_pages/WebAppConsent/WebAppConsent';
import PolicyPageLayout from './layouts/PolicyPageLayout';
import CreatePrivacyNotice from './components/DigitalPMComponents/CreatePrivacyNotice';
import Templates from './components/DigitalPMComponents/Templates';
import SectionTemplates from './components/DigitalPMComponents/SectionTemplates';
import SectionDetails from './components/DigitalPMComponents/SectionDetails';
import TemplateDetails from './components/DigitalPMComponents/TemplateDetails';
import DataDiscoveryLayout from './layouts/DataDiscoveryLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        } />
        <Route path="/register" element={
          <AuthLayout>
            <RegisterPage />
          </AuthLayout>
        } />
        <Route path="/forgot-password" element={
          <AuthLayout>
            <ForgotPassPage />
          </AuthLayout>
        } />
        <Route path="/reset-password" element={
          <AuthLayout>
            <ResetPassPage />
          </AuthLayout>
        } />
        <Route path="/terms" element={
          <AuthLayout>
            <TermsPage />
          </AuthLayout>
        } />
        <Route path='/onboarding' element={
          <LayoutPagesLayout>
            <Onboarding />
          </LayoutPagesLayout>
        } />
        <Route path='/apps' element={
          <LayoutPagesLayout>
            <AppPage />
          </LayoutPagesLayout>
        } />
        <Route path='/getstarted' element={
          <LayoutPagesLayout>
            <GetStartedPage />
          </LayoutPagesLayout>
        } />
        <Route path='/datalifecyclemanagement' element={
          <LayoutPagesLayout>
            <DataLifeCycleManagement />
          </LayoutPagesLayout>
        } />
        <Route path='/dataprinciplemanagement' element={
          <LayoutPagesLayout>
            <DataPrincipleManagement />
          </LayoutPagesLayout>
        } />
        <Route path='/consent' element={
          <LayoutPagesLayout>
            <ConsentPage />
          </LayoutPagesLayout>
        } />
        <Route path='/parentalconsent' element={
          <LayoutPagesLayout>
            <ParentalConsent />
          </LayoutPagesLayout>
        } />
        <Route path='/digitalpolicymanagement' element={
          <LayoutPagesLayout>
            <DigitalPolicyManagement />
          </LayoutPagesLayout>
        } />
        <Route path='/noticemanagement' element={
          <LayoutPagesLayout>
            <NoticeManagement />
          </LayoutPagesLayout>
        } />
        <Route path='/dpostudio' element={
          <LayoutPagesLayout>
            <DPOStudio />
          </LayoutPagesLayout>
        } />
        <Route path='/organizationtraining' element={
          <LayoutPagesLayout>
            <OrganizationTraining />
          </LayoutPagesLayout>
        } />
        <Route path='/settings' element={
          <LayoutPagesLayout>
            <SettingsNav />
          </LayoutPagesLayout>
        } />
        <Route path='/privacynotices' element={
          <PolicyPageLayout>
            <PrivacyNotices />
          </PolicyPageLayout>
        } />
        <Route path='/createprivacynotice' element={
          <PolicyPageLayout>
            <CreatePrivacyNotice />
          </PolicyPageLayout>
        } />
        <Route path='/templates' element={
          <PolicyPageLayout>
            <Templates />
          </PolicyPageLayout>
        } />
        <Route path='/templatedetails/:id' element={
          <PolicyPageLayout>
            <TemplateDetails />
          </PolicyPageLayout>
        } />
        <Route path='/sectiontemplates' element={
          <PolicyPageLayout>
            <SectionTemplates />
          </PolicyPageLayout>
        } />
        <Route path='/sectiondetails/:id' element={
          <PolicyPageLayout>
            <SectionDetails />
          </PolicyPageLayout>
        } />
        <Route path='/policyview/:id' element={
          <PolicyPageLayout>
            <PolicyView />
          </PolicyPageLayout>
        } />
        <Route path='/datasources' element={
          <LayoutPagesLayout>
            <DataSources />
          </LayoutPagesLayout>
        } />
        <Route path='/datadiscovery' element={
          <DataDiscoveryLayout>
            <DataDiscovery />
          </DataDiscoveryLayout>
        } />
        <Route path='/datacatalog' element={
          <LayoutPagesLayout>
            <DataCatalog />
          </LayoutPagesLayout>
        } />
        <Route path='/ropa' element={
          <LayoutPagesLayout>
            <RoPA />
          </LayoutPagesLayout>
        } />
        <Route path='/mobileappconsent' element={
          <LayoutPagesLayout>
            <MobileAppConsent />
          </LayoutPagesLayout>
        } />
        <Route path='/webappconsent' element={
          <LayoutPagesLayout>
            <WebAppConsent />
          </LayoutPagesLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
