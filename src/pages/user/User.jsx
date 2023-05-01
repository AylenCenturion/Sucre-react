import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Layout from "../../components/layout/Layout";
import SideHero from "../../components/heros/sideHero/SideHero";

const User = () => {
  const { username } = useParams();
  const { handleLogOut } = useContext(AuthContext);
  const welcome = `Welcome ${
    username.charAt(0).toUpperCase() + username.slice(1)
  }`;

  return (
    <>
      <Layout>
        <SideHero section={welcome} />

        <button onClick={() => handleLogOut()}>Log out</button>
      </Layout>
    </>
  );
};

export default User;
