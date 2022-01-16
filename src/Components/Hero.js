import React from 'react';


const Hero = ({handleLogout}) => {
    return (
        <section className="Hero">
            <nav>
            <h2>Welcome</h2>
            {/* <Link to="/login/success/logout"> */}

                    <button onClick={handleLogout}>Logout</button>
            {/* </Link> */}

            </nav>
        </section>
    );
};

export default Hero;