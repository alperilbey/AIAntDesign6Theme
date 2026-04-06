"use client";

import { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleComplete = () => {
            setLoading(false);
        };

        if (document.readyState === 'complete') {
            handleComplete();
        } else {
            window.addEventListener('load', handleComplete);
            return () => {
                window.removeEventListener('load', handleComplete);
            };
        }
    }, []);

    useEffect(() => {
        if (!loading) {
            const preloader = document.querySelector('.preloader');
            if (preloader) {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    if (preloader && preloader.parentNode) {
                        preloader.parentNode.removeChild(preloader);
                    }
                }, 500);
            }
        }
    }, [loading]);

    if (!loading) return null;

    return (
        <div className="preloader">
        </div>
    );
};

export default Preloader;
