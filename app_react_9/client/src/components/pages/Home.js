import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, user, loading, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // esling-disable-next-line
  }, []);

  if (!isAuthenticated && loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h4>Hello, {user && user.name}!</h4>
      <div>This is a super secret page.</div>
    </div>
  );
};

export default Home;
