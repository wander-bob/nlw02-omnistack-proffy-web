import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Landing } from '../pages/landing';
import { TeacherList } from '../pages/teacher-list';
import { TeacherForm } from '../pages/teacher-form';

export function AppRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/study" element={<TeacherList />} />
        <Route path="/give-classes" element={<TeacherForm />} />
      </Routes>
    </BrowserRouter>
  )
}
