export default function Services() {
    const services = [
        {
            icon: "flaticon-moving",
            title: "نقل العفش الكامل",
            description: "خدمة نقل شاملة تتضمن النقل والتغليف والفك والتركيب لجميع أنواع الأثاث",
            image: "/assets/img/service/service-2-1.jpg",
        },
        {
            icon: "flaticon-carpenter",
            title: "فك وتركيب الأثاث",
            description: "فريق متخصص في فك وتركيب جميع أنواع الأثاث والمطابخ بكفاءة عالية",
            image: "/assets/img/service/service-2-2.jpg",
        },
        {
            icon: "flaticon-packaging",
            title: "تغليف العفش",
            description: "تغليف احترافي باستخدام مواد عالية الجودة لحماية الأثاث من الخدوش والكسر",
            image: "/assets/img/service/service-2-3.jpg",
        },
        {
            icon: "flaticon-fragile",
            title: "تغليف الزجاج والتحف",
            description: "تغليف خاص للزجاج والمرايا والتحف والأنتيكات بأحدث التقنيات",
            image: "/assets/img/service/service-2-4.jpg",
        },
        {
            icon: "flaticon-delivery-truck",
            title: "نقل بين المحافظات",
            description: "خدمة نقل آمنة وسريعة بين جميع محافظات مصر بأسعار تنافسية",
            image: "/assets/img/service/service-2-5.jpg",
        },
        {
            icon: "flaticon-warehouse",
            title: "تخزين الأثاث",
            description: "مخازن آمنة ومكيفة لتخزين أثاثكم لأي فترة زمنية مع ضمان السلامة",
            image: "/assets/img/service/service-2-6.jpg",
        },
    ];

    return (
        <div id="service" className="it-service-area it-service-style-2 it-service-style-3 it-service-style-4 pt-130 pb-130 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="it-section-title-box text-center mb-65">
                            <span className="it-section-subtitle wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">خدماتنا</span>
                            <h4 className="it-section-title it-split-text it-split-in-right mb-0">
                                خدمات نقل العفش
                                <br />
                                المتكاملة
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row gx-35">
                    {services.map((service, index) => (
                        <div key={index} className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay={`${0.3 + index * 0.2}s`}>
                            <div className="it-service-item p-relative mb-30">
                                <div className="it-service-thumb-wrap">
                                    <div className="it-service-thumb hover-img-effect z-index-3" data-speed="1.05">
                                        <img src={service.image} alt={service.title} />
                                        <canvas className="hover-img-canvas"></canvas>
                                    </div>
                                    <div className="it-service-icon z-index-5">
                                        <span><i className={service.icon}></i></span>
                                    </div>
                                </div>
                                <div className="it-service-content">
                                    <h4 className="it-service-title">
                                        <a className="border-line-black" href="#">{service.title}</a>
                                    </h4>
                                    <p className="mb-0">{service.description}</p>
                                    <a className="it-service-btn border-line-orange" href="#contact">
                                        احجز الآن
                                        <span>
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="currentcolor" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
