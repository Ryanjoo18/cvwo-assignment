import BasicThreadList from "../components/BasicThreadList";
import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <h1>{"Web Forum"}</h1>
            <h4>{"If you are a new user, welcome to this web forum! Please sign up."}</h4>

            <button>{"Sign up"}</button>

            <h4>{"If you are a returning user, welcome back! Please login here by inputting your username."}</h4>

            <button>{"Log in"}</button>

            <br />
            <BasicThreadList />
        </>
    );
};

export default Home;
