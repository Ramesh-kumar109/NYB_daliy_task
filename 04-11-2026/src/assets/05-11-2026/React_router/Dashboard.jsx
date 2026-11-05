import { Link, Outlet } from 'react-router';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Setting">Setting</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;
