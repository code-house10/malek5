export default function About() {
    return (
        <div id="about" className="it-about-area it-about-style-2 p-relative pt-130 pb-130 fix blue-bg">
            <div className="it-about-shape-1"><img src="/assets/img/shape/about-2-1.png" alt="" /></div>
            <div className="it-about-shape-2"><img src="/assets/img/shape/about-2-2.png" alt="" /></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="it-about-left p-relative">
                            <div className="it-about-thumb-wrap p-relative">
                                <div className="it-about-thumb-1 p-relative">
                                    <div className="it-about-2-thumb">
                                        <img src="/assets/img/about/about-2-1.jpg" alt="نقل العفش" />
                                    </div>
                                </div>
                            </div>
                            <div className="it-about-2-count wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                <h4 className="purecounter">20</h4>
                                <span>سنة من الخبرة</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="it-about-right-box">
                            <div className="it-about-text-box mb-30">
                                <div className="it-section-title-box mb-20">
                                    <span className="it-section-subtitle white-clr wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">من نحن</span>
                                    <h4 className="it-section-title white-clr it-split-text it-split-in-right mb-0">شركة رائدة في نقل العفش والأثاث بالقاهرة والجيزة</h4>
                                </div>
                                <div className="wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                    <p className="white-clr mb-0">نحن شركة متخصصة في خدمات نقل العفش والأثاث منذ أكثر من 20 عامًا. نقدم خدماتنا في جميع مناطق القاهرة والجيزة بما في ذلك المعادي، مدينة نصر، 6 أكتوبر، والشيخ زايد. فريقنا المحترف مدرب على أعلى مستوى لضمان سلامة أثاثكم.</p>
                                </div>
                            </div>
                            <div className="it-about-feature-wrap">
                                <div className="row gx-15">
                                    <div className="col-xl-6 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                        <div className="it-about-feature-box mb-30">
                                            <div className="it-about-feature-icon">
                                                <span><i className="flaticon-insurance"></i></span>
                                            </div>
                                            <div className="it-about-feature-content">
                                                <h4 className="it-about-feature-title">ضمان السلامة</h4>
                                                <p className="mb-0">نضمن سلامة أثاثكم بنسبة 100% أثناء النقل والتركيب</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                        <div className="it-about-feature-box mb-30">
                                            <div className="it-about-feature-icon">
                                                <span><i className="flaticon-experience"></i></span>
                                            </div>
                                            <div className="it-about-feature-content">
                                                <h4 className="it-about-feature-title">فريق خبير</h4>
                                                <p className="mb-0">فريق عمل محترف ومدرب على أحدث أساليب النقل</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="it-about-btn-box wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                <a href="#service" className="it-btn-orange mr-20">
                                    <span>
                                        <span className="text-1">اكتشف خدماتنا</span>
                                        <span className="text-2">اكتشف خدماتنا</span>
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
                                <div className="it-about-author d-inline-flex align-items-center">
                                    <div className="it-about-author-thumb">
                                        <img src="/assets/img/avatar/avatar-1-1.jpg" alt="" />
                                    </div>
                                    <div className="it-about-author-text">
                                        <span>مدير العمليات</span>
                                        <h6 className="mb-0">أحمد محمد</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
