import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpg from './Loginpg';
import LogoutDialog from './LogoutDialog';
import MyMovesPage from './MyMovePage';
import NavigationBar from './NavigationBar';
import NotFound from './NotFound';
import PageNotCreated from './PageNotCreated';
import Test from './Test';
import TestPage from './TestPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpg />} />
        <Route path="/logoutdialog" element={<LogoutDialog />} />
        <Route path="/mymoves" element={<MyMovesPage />} />
        <Route path="/navigationbar" element={<NavigationBar />} />
        <Route path="/pagenotcreated" element={<PageNotCreated />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testpage" element={<TestPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
