export default function WhyChooseUs() {
    const features = [
        {
            icon: "flaticon-clock",
            title: "سرعة التنفيذ",
            description: "نلتزم بالمواعيد المحددة وننجز العمل بأسرع وقت ممكن",
        },
        {
            icon: "flaticon-insurance",
            title: "ضمان شامل",
            description: "ضمان كامل على سلامة جميع محتويات النقل",
        },
        {
            icon: "flaticon-team",
            title: "فريق محترف",
            description: "عمالة مدربة ومتخصصة في جميع أنواع النقل",
        },
        {
            icon: "flaticon-support",
            title: "دعم 24/7",
            description: "خدمة عملاء متاحة على مدار الساعة لخدمتكم",
        },
    ];

    return (
        <div id="choose" className="it-choose-area it-choose-style-2 pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="it-choose-left p-relative">
                            <div className="it-choose-thumb wow zoomIn" data-wow-duration=".8s" data-wow-delay=".5s">
                                <img src="/assets/img/choose/thumb-4-1.jpg" alt="لماذا نحن" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="it-choose-right-box">
                            <div className="it-section-title-box mb-30">
                                <span className="it-section-subtitle wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">لماذا نحن</span>
                                <h4 className="it-section-title it-split-text it-split-in-right mb-0">
                                    لماذا تختار شركتنا
                                    <br />
                                    لنقل أثاثك؟
                                </h4>
                            </div>
                            <div className="it-choose-text mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                <p className="mb-0">نحن نقدم خدمات نقل عفش متكاملة بأعلى معايير الجودة والأمان. خبرتنا الطويلة وفريقنا المحترف يضمنون لكم تجربة نقل سلسة وخالية من المتاعب.</p>
                            </div>
                            <div className="row gx-15">
                                {features.map((feature, index) => (
                                    <div key={index} className="col-xl-6 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay={`${0.5 + index * 0.2}s`}>
                                        <div className="it-choose-item mb-25">
                                            <div className="it-choose-item-icon">
                                                <span><i className={feature.icon}></i></span>
                                            </div>
                                            <div className="it-choose-item-content">
                                                <h4 className="it-choose-item-title">{feature.title}</h4>
                                                <p className="mb-0">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="it-choose-btn-box mt-20 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                <a href="#contact" className="it-btn-orange">
                                    <span>
                                        <span className="text-1">تواصل معنا</span>
                                        <span className="text-2">تواصل معنا</span>
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
        </div>
    );
}
