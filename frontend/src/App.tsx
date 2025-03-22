import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CommitPage from './pages/CommitPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/repositories/:owner/:repo/commit/:commitSHA"
          element={<CommitPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
