import React from 'react';

function Hero() {
    return ( 
        <div className='resume container text-center page-pop'>
             <h1 className='mt-5 mb-5'>Want to know more about me?</h1>
            <p className='fs-5 mb-5'>Here’s a quick overview of my skills and experience. You can also download my resume below!</p>

            <a href="/temp-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary resume-btn">
                <i class="fa-solid fa-arrow-down"></i> Download Resume
            </a>

        </div>
     );
}

export default Hero;