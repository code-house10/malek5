'use client';

export default function Brands() {
    const brands = [
        "/assets/img/brand/brand-1-1.png",
        "/assets/img/brand/brand-1-2.png",
        "/assets/img/brand/brand-1-3.png",
        "/assets/img/brand/brand-1-4.png",
        "/assets/img/brand/brand-1-5.png",
    ];

    return (
        <div className="it-brand-area pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="it-section-title-box text-center mb-50">
                            <span className="it-section-subtitle wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">شركاؤنا</span>
                            <h4 className="it-section-title it-split-text it-split-in-right mb-0">شركات تثق بنا</h4>
                        </div>
                    </div>
                </div>
                <div className="row wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                    <div className="col-12">
                        <div className="swiper-container it-brand-active">
                            <div className="swiper-wrapper">
                                {brands.map((brand, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="it-brand-item text-center">
                                            <img src={brand} alt={`شريك ${index + 1}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
