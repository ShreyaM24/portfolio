import React, { useEffect, useRef, useState } from "react";

function Hero() {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const hasAnimated = useRef(false);
    const target = 100;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let current = 0;
                    const step = Math.ceil(target / 100);
                    const interval = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(current);
                        }
                    }, 20);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [target]);

    return (
        <section className="dsa-container">
            <video className="dsa-container-video" autoPlay loop muted playsInline><source src="assets/earth-rot.mp4" type="video/mp4" /></video>
            <div ref={ref} className="overlay-content">     
                <div className="dsa-card">
                    <h1 className="text-center" style={{color:"#ff66c4ff", textShadow:"0 0 20px #000000ff"}}>Leetcode Progress</h1>
                    <table className="lc-table">
                        <tr>
                            <th>Problems Solved</th>
                            <th>Language Used</th>
                            <th>Maximum Streak</th>
                            <th>Link <i class="fa-solid fa-arrow-up-right-from-square"></i></th>
                        </tr>
                        <tr>
                            <td>{count}+</td>
                            <td>Java</td>
                            <td>19</td>
                            <td><a href="https://leetcode.com/u/Smukherjee24/">Leetcode</a></td>
                        </tr>
                    </table>

                    <h1 className="text-center" style={{color:"#ff66c4ff", textShadow:"0 0 20px #000000ff"}}>Courses Done</h1>
                    <table className="lc-table">
                        <tr>
                            <th>Course Name</th>
                            <th>Institution</th>
                            <th>Batch</th>
                            <th>Visit <i class="fa-solid fa-arrow-up-right-from-square"></i></th>
                        </tr>
                        <tr>
                            <td>DSA with Java</td>
                            <td>Apna College</td>
                            <td>Alpha Batch</td>
                            <td><a href="#">Certificate</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Hero;
