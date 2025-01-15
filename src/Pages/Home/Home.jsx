import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on route change
    }, []);

  return (
    <div className="h-screen">
      <Helmet>
        <title>this is Home</title>
        <meta
          name="description"
          content="Welcome to the home page of My App."
        />
        <meta name="keywords" content="home, my app, react helmet" />
      </Helmet>
      <h1 className="text-blue-600">We should vite the shop page</h1>
    </div>
  );
};

export default Home;
