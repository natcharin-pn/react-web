import React, { useState, useEffect, useRef } from 'react';
import bacImage from '../assets/bac.png';
import moonImage from '../assets/mon.png';
import mutImage from '../assets/mut.png';
import riverImage from '../assets/river.png';
import bacLeftImage from '../assets/bac-left.png';
import bacRightImage from '../assets/bac-right.png';
import fonLeftImage from '../assets/fon-left.png';
import fonRightImage from '../assets/fon-right.png';

function Reindeer() {
    const bacRef = useRef(null);
    const moonRef = useRef(null);
    const mutRef = useRef(null);
    const riverRef = useRef(null);
    const blRef = useRef(null);
    const brRef = useRef(null);
    const flRef = useRef(null);
    const frRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const applyParallaxEffect = () => {
            const refs = [bacRef, moonRef, mutRef, riverRef, blRef, brRef, flRef, frRef];
            const factors = [0.4, -0.5, 0.5, 0.5, -0.2, 0.2, -0.5, 0.5];

            refs.forEach((ref, i) => {
                const axis = (i < 4) ? 'top' : 'left';
                if (ref.current) {
                    ref.current.style[axis] = `${scrollY * factors[i]}px`;
                }
            });
        };

        applyParallaxEffect();
    }, [scrollY]);

    return (
        <section id="home" className="parallax">
            <img ref={bacRef} src={bacImage} id="bac" alt="Background" />
            <img ref={moonRef} src={moonImage} id="moon" alt="Moon" />
            <img ref={mutRef} src={mutImage} id="mut" alt="Mountain" />
            <img ref={riverRef} src={riverImage} id="river" alt="River" />
            <h3 style={{ left: scrollY * -0.5 + 'px' }} id='text'>Hi I'm Natcharin Paiyaphosri</h3>
            <h5 style={{ left: scrollY * 0.8 + 'px' }} id='ttext'>Welcome to my profile</h5>
            <img ref={blRef} src={bacLeftImage} id="bl" alt="Background Left" />
            <img ref={brRef} src={bacRightImage} id="br" alt="Background Right" />
            <img ref={flRef} src={fonLeftImage} id="fl" alt="Foreground Left" />
            <img ref={frRef} src={fonRightImage} id="fr" alt="Foreground Right" />
        </section>
    );
}

export default Reindeer;
