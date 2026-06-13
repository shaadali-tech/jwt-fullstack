const Dashboard = () => {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Token:</p>
      <p>{token}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
