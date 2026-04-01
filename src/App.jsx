import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageViewSet } from './components/pageViewSet';
import { PageCreateSet } from './components/PageCreateSet';

import { PageSelectSet } from './components/PageSelectSet';

import './App.css';
import { FormCreateSet } from './components/FormCreateSet';
import { FormcreateCard } from './components/FormCreatecard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet />} />
        <Route path="/set/:id" element={<PageViewSet />} />
        <Route path="/admin" element={<PageCreateSet />} />
        <Route path='*' element={<PageSelectSet />} />
        <Route path='/admin' element={<PageCreateSet />}>
          <Route path='createset' element={<FormCreateSet />} />
          <Route path='createcard' element={<FormcreateCard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
