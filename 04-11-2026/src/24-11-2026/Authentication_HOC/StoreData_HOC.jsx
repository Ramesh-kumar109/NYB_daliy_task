import Login_HOC from './Login_HOC';
import DashBoard_HOC from './DashBoard_HOC';
import withAuth from './withAuth';

const ProtectDashboard = withAuth(DashBoard_HOC);

const isAuthentication = false;

function StoreData_HOC() {
  return (
    <div>
      <h2>StoreData_HOC</h2>

      <Login_HOC />

      <ProtectDashboard
        isAuthentication={isAuthentication}
      />
    </div>
  );
}

export default StoreData_HOC;