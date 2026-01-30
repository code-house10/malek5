'use client';

export default function Testimonials() {
    const testimonials = [
        {
            name: "محمد أحمد",
            location: "المعادي، القاهرة",
            rating: 5,
            text: "خدمة ممتازة جداً! تم نقل أثاث شقتي بالكامل بدون أي خدوش. الفريق كان محترف ومنظم. أنصح الجميع بالتعامل معهم.",
            image: "/assets/img/testimonial/thumb-4-1.jpg",
        },
        {
            name: "فاطمة علي",
            location: "مدينة نصر، القاهرة",
            rating: 5,
            text: "تجربة رائعة! سعر معقول وخدمة احترافية. تم التغليف بعناية فائقة خاصة الزجاج والتحف. شكراً لكم.",
            image: "/assets/img/testimonial/thumb-4-2.jpg",
        },
        {
            name: "أحمد سمير",
            location: "6 أكتوبر، الجيزة",
            rating: 5,
            text: "نقلت منزلي بالكامل من مدينة نصر إلى 6 أكتوبر. العمال كانوا في غاية الاحترام والدقة في العمل. سأتعامل معهم مرة أخرى.",
            image: "/assets/img/testimonial/thumb-4-1.jpg",
        },
    ];

    return (
        <div id="testimonial" className="it-testimonial-area it-testimonial-style-2 gray-bg pt-130 pb-130 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="it-section-title-box text-center mb-65">
                            <span className="it-section-subtitle wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">آراء العملاء</span>
                            <h4 className="it-section-title it-split-text it-split-in-right mb-0">
                                ماذا يقول عملاؤنا
                                <br />
                                عن خدماتنا
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="swiper-container it-testi-active">
                            <div className="swiper-wrapper">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="it-testimonial-item">
                                            <div className="it-testimonial-content-box">
                                                <div className="it-testimonial-rating mb-15">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <span key={i}><i className="fa-solid fa-star"></i></span>
                                                    ))}
                                                </div>
                                                <div className="it-testimonial-text">
                                                    <p>"{testimonial.text}"</p>
                                                </div>
                                                <div className="it-testimonial-author d-flex align-items-center">
                                                    <div className="it-testimonial-author-thumb">
                                                        <img src={testimonial.image} alt={testimonial.name} />
                                                    </div>
                                                    <div className="it-testimonial-author-text">
                                                        <h5 className="mb-0">{testimonial.name}</h5>
                                                        <span>{testimonial.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="it-testimonial-dots text-center mt-40"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
