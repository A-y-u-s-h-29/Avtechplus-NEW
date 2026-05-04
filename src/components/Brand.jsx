import React, { useState, useEffect } from 'react';

const Brands = () => {
    const brandFiles = [
        "/images/pi1.png", "/images/pi2.png", "/images/pi3.jpg", "/images/pi4.jpg", "/images/pi5.png",
        "/images/pi6.jpg", "/images/pi7.png", "/images/pi8.jpg"
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check screen size on mount
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Add event listener
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="relative overflow-hidden py-8 md:py-12 bg-gray-50">
         
              <div className="text-center mb-8 md:mb-12 px-4 exo">
                <h2 className="text-2xl md:text-6xl font-bold text-gray-800 mb-3 uppercase">
                    Our Trusted <span className="text-[#FF6333]">Brands</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We partner with leading brands to deliver quality construction solutions
                </p>
            </div>
            {/* Left Gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent z-10 pointer-events-none" />
            
            {/* Brands Marquee */}
            <div className="relative overflow-x-hidden">
                <div className={`marquee-track flex ${isMobile ? 'marquee-mobile' : 'marquee-desktop'}`}>
                    {[...brandFiles, ...brandFiles].map((file, index) => (
                        <div 
                            key={index} 
                            className="brand-logo flex-shrink-0 mx-4 md:mx-8 transition-all duration-300 hover:scale-105 md:hover:scale-110"
                        >
                            <div className="p-2 md:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                <img 
                                    src={file}
                                    alt={`Brand ${(index % brandFiles.length) + 1}`}
                                    className="brand-image h-18 md:h-24 lg:h-30 w-auto object-cover transition-all duration-300 max-w-[100px] md:max-w-[140px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Right Gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent z-10 pointer-events-none" />
            
            {/* CSS for marquee animation */}
            <style jsx>{`
                .marquee-track {
                    display: flex;
                    width: max-content;
                }

                .marquee-desktop {
                    animation: marquee-desktop 40s linear infinite;
                }

                .marquee-mobile {
                    animation: marquee-mobile 25s linear infinite;
                }
                
                @keyframes marquee-desktop {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes marquee-mobile {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .marquee-track:hover {
                    animation-play-state: paused;
                }
                
                .brand-logo {
                    min-width: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                @media (max-width: 640px) {
                    .brand-logo {
                        min-width: 80px;
                    }
                    
                    .marquee-mobile {
                        animation-duration: 20s;
                    }
                }

                @media (min-width: 641px) and (max-width: 768px) {
                    .brand-logo {
                        min-width: 90px;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    .brand-logo {
                        min-width: 120px;
                    }
                    
                    .marquee-desktop {
                        animation-duration: 35s;
                    }
                }

                @media (min-width: 1025px) {
                    .brand-logo {
                        min-width: 150px;
                    }
                }

                /* Touch device optimizations */
                @media (hover: none) and (pointer: coarse) {
                    .marquee-track:hover {
                        animation-play-state: running;
                    }
                    
                    .brand-logo:hover {
                        transform: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default Brands;