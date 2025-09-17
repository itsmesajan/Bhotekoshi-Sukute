import React from 'react';

const Gallery = () => {
    // Data for the gallery images
    const galleryImages = [
        { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr1B6fd2C6AVeVKnMaTSX3oez7QYExFq80TCbSCnzQbEGmmharKhTUgJljKB63BOMgp4eQALCwmvHg_yZ5cRlNCScAgggpB31GZyVf7biGxlbZrygL-O0RizimyRu2oxLOFn66-0jEwrCvgx2closNvEmu4M_PI493D-nph75AozyWe0JGDXN3aUIa_wp0WpEUxXP_dUsPo2h_l7iswgbbYWjlm7SRU5dHaLK9-Y0dsWEUq0pRs9vsMm0z2R2wdfQMK5BtX9gw9Bh7", alt: "Gallery 1", className: "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2" },
        { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmj-ipcm6jHKXyAqPm4qsWAG5hSq42_VDes3q4Ki0yT1nc-b26nNb_TVJzIENTJGDYkLh4ILVl9CWdZbEzLzKGSF1Iko5zv29rKKaL5NnPEEPN1lU5IB_Z5EkV12PI1C3wXoMV4NpONVKRh1_ezvquKexp5yRG8QXLJWsL6Nj3qVVll7bqHP8SED4GnejBYYg_npViuul0dA-Z55vkxKy0sFtEm-Vbm536h2zf0Q7Zq2SHNOlyVZOP6GFumM0neXvqDcMbt0bULFCv", alt: "Gallery 2", className: "col-span-1 row-span-1" },
        { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDPnh2FzR8PQdgJqhjgKB8DiQm1pyOOq5ZrTqBGQTOjf_N43snY_dz6Jzeo_rRxmr5agz8_MvSG5WsXMt-JkYmTX_EYdr1-YCW9nZYsZxoBfjBqr7cH8TP73KQv8-qxU34ajkF8oarhUyMkJlQhTX1XlqDRIdjsCCac_Xs8Pqi8aLs3yzLBRi-shXPK7tZz_bYKftaN46bOynFSs88-gbIo7V654DONUDMjK8McPnZJhls4lmesXxXCTkyvIcN5H3rhl-TN-x2CR_M", alt: "Gallery 3", className: "col-span-1 row-span-1" },
        { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBGHq3_AKaO-kCLIdfrgGCJnyDztE9SoMFHEigVHI2wNiJmQAM6QTFv52m9CTUQJEsVyIyTyjoE-38JGKrAg5nqjAJQeYdYZfuQ9ya6d97ehN2_ImeBtzge6eBBFD1Ozc1y2bWXMmroVo5T3mAqFBRpAsbYriLxdXxyRYAtOVn42EE1x9JF_A46at0zqyx60wIVmRuB13okekJttkfh5CwbEOGaCR2yKEO1537oRh1Er-ILXQraN3pSFUwSLo4p1SIhwbvt7MdnIVL", alt: "Gallery 4", className: "col-span-1 row-span-1" },
        { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC78dDX-8ISHpcftoX4sZTQPfGVeCnbuHIszm7c6OR0YRztp2wa73GMPUIuZI_PrkXXSUH1p30KsEm16s3gdOuAHd4M1mSbm7xeGCwj9rR8iF1-dDfyOzHiV3ZGgWUw3cjSVFTeK2WBGaSFgC_lni5eR564OSxzj81IZxx5RFHfQPBTPYRzt9pnMfFGn5fZDS_0KRJN8bbv3oz9KoaZsy5PvtHqv-wToCNq-KQH6vR3Ei-2qJcUA6I0PaMUW6kBI9y-yMTITwaOa5mi", alt: "Gallery 5", className: "col-span-1 row-span-1" },
    ];

    return (
        <section className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Photo Gallery</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">A glimpse of unforgettable moments and scenic beauty at Sukute Resort.</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 gap-4">
                {galleryImages.map((image, index) => (
                    <div
                        key={index}
                        className={`${image.className} ${image.className.includes('col-span-2') ? 'relative' : ''}`}
                    >
                        <img
                            className={`w-full h-full object-cover ${image.className.includes('col-span-2') ? 'rounded-2xl shadow-lg' : 'rounded-xl shadow-md'} hover:scale-105 transition-transform duration-300`}
                            src={image.src}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;