import React from "react";

function Footer() {
    return (
        <div className="container footer text-center p-5" style={{textShadow:"0 0 20px #000000ff"}}>
            <hr/>
            <p className="fs-5">Turning coffee into code and ideas into impact.<br />Let's build something amazing together!</p>
            <div className="socials">
                <a href="https://github.com/ShreyaM24"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/shreya-mukherjee-29761a33b/"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    )
}

export default Footer;