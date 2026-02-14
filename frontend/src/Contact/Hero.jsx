import React from 'react';

function Hero() {
    return (
        <>
            <div className='container contact p-5 text-center page-pop'>

                <h1 className='mb-4'>Contact Me</h1>

                {/* NEW INTRO TEXT */}
                <p className='mb-4 fs-5' style={{maxWidth:"650px", margin:"auto"}}>
                    I’m always open to discussing new opportunities, internships, 
                    collaborations, or even just talking about tech, projects, and ideas.  
                    If you think we can build something interesting together — feel free to reach out!
                </p>

                {/* EMAIL */}
                <span 
                    className='px-4 py-2 links' 
                    style={{ border: "2px solid pink", borderRadius: "20px", display:"inline-block"}}
                >
                    <i className="fas fa-envelope"></i>
                    &nbsp;&nbsp;
                    Send Email : &nbsp;
                    <a href='mailto:mukherjee1517@gmail.com'>
                        mukherjee1517@gmail.com
                    </a>
                </span>

                <br /><br />

                {/* SOCIAL LINKS */}
                <div 
                    className='px-4 py-2 links' 
                    style={{ 
                        border: "2px solid pink", 
                        borderRadius: "20px", 
                        width: "400px", 
                        maxWidth:"90%",
                        margin:"auto"
                    }}
                >
                    <a href="https://github.com/ShreyaM24" target="_blank">GitHub</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/shreya-mukherjee-29761a33b/" target="_blank">LinkedIn</a>
                </div>

            </div>
        </>
    );
}

export default Hero;
