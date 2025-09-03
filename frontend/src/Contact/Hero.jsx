import React from 'react';

function Hero() {
    return (
        <>
            <div className='container contact p-5 text-center page-pop'>
                <h1 className='mb-5'>Contact Me</h1>
                <span className='px-4 py-2 links' style={{ border: "2px solid pink", borderRadius: "20px" }}><i class="fas fa-envelope"></i>&nbsp;&nbsp;Send Email : <a href='mailto:mukherjee1517@gmail.com'>mukherjee1517@gmail.com</a></span><br /><br />
                <div className='px-4 py-2 links' style={{ border: "2px solid pink", borderRadius: "20px", width: "400px", justifySelf: "center" }}><a href="https://github.com/ShreyaM24">GitHuB</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.linkedin.com/in/shreya-mukherjee-29761a33b/">Linkedin</a></div>
                <h2 className='mt-5 mb-5'>You can get in touch with me by filling this form</h2>

                <form class="row g-3" novalidate>
                    <div class="col-md-6">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstName" required></input>
                    </div>
                    <div class="col-md-6">
                        <label for="secondName" class="form-label">Second Name</label>
                        <input type="text" class="form-control" id="secondName" required></input>
                    </div>
                    <div class="col-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" required></input>
                    </div>
                    <div class="col-6">
                        <label for="contactNo" class="form-label">Contact No.</label>
                        <input type="number" class="form-control" id="contactNo"></input>
                    </div>
                    <div class="col-md-12">
                        <label for="msg" class="form-label">Your Message</label>
                        <textarea class="form-control" id="msg" required></textarea>
                    </div>
                    <div class="col-12 contact-btn">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Hero;