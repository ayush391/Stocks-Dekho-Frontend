import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../../components/LoginPage';
import SignUpPage from '../../components/SignupPage';
import { LOCAL } from '../../utils/routes';
import ForgetPassword from '../ForgetPassword';

const Auth = () => {
  return (
    <Routes>
      <Route path={LOCAL.LOGIN} element={<LoginPage />} />
      <Route path={LOCAL.FORGOT} element={<ForgetPassword />} />
      <Route path={LOCAL.SIGNUP} element={<SignUpPage />} />
      <Route path="*" element={<Navigate to={LOCAL.LOGIN} />} />
    </Routes>
  );
};

export default Auth;
