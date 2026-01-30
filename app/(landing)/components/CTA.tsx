export default function CTA() {
    return (
        <div className="it-cta-area it-cta-style-2 pt-130 pb-130 p-relative fix">
            <div className="it-cta-bg" data-background="/assets/img/cta/cta-2-bg.jpg"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-8">
                        <div className="it-cta-left">
                            <div className="it-section-title-box">
                                <span className="it-section-subtitle white-clr wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">هل تحتاج لنقل أثاثك؟</span>
                                <h4 className="it-section-title white-clr it-split-text it-split-in-right mb-0">
                                    احجز الآن واحصل على
                                    <br />
                                    خصم 15% على أول طلب
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="it-cta-btn text-lg-end wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                            <a href="tel:+201234567890" className="it-btn-orange">
                                <span>
                                    <span className="text-1">اتصل الآن</span>
                                    <span className="text-2">اتصل الآن</span>
                                </span>
                                <i>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white" />
                                    </svg>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white" />
                                    </svg>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
