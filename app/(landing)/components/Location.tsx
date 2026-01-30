export default function Location() {
    return (
        <div className="it-location-area gray-bg pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5">
                        <div className="it-location-left">
                            <div className="it-section-title-box mb-20">
                                <span className="it-section-subtitle wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">مناطق الخدمة</span>
                                <h4 className="it-section-title it-split-text it-split-in-right mb-0">
                                    نغطي جميع مناطق
                                    <br />
                                    القاهرة والجيزة
                                </h4>
                            </div>
                            <div className="wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                <p className="mb-30">
                                    نقدم خدماتنا في جميع مناطق القاهرة والجيزة:
                                    المعادي، مدينة نصر، 6 أكتوبر، الشيخ زايد، التجمع الخامس، مصر الجديدة، الهرم، فيصل، المهندسين، الدقي، وغيرها.
                                </p>
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
                    <div className="col-xl-8 col-lg-7 wow zoomIn" data-wow-duration=".8s" data-wow-delay=".5s">
                        <div className="it-location-thumb">
                            <img src="/assets/img/choose/map.png" alt="خريطة مناطق الخدمة" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
