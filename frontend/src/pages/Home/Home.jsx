import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle =  {
    color : '#0077FF',
    fontWeight :'bold',
    textDecoration : 'none',
    marginLeft : '7px',
    cursor : 'pointer'
  };

  const navigate = useNavigate();

  const startRegister = () => {
    navigate('/register');
  };


  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Coders house!!!" icon="hand">
        <p className={styles.text}>
          We're working hard to get Codershouse ready for
          everyone! While we wrap up the finishing youches. 
          we're adding people gradually to make sure 
          nothing breaks
        </p>

        <div>
          <Button text="Get your username" onClick={startRegister}/>
          {/* <button>
            <span>Get your username</span>
            <img src="/images/arrow.png" alt="arrow-forward" />
          </button> */}
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link to="/login" style={signInLinkStyle}>Sign In</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
