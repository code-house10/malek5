'use client';

export default function Projects() {
    const projects = [
        {
            title: "نقل فيلا فاخرة",
            location: "الشيخ زايد",
            image: "/assets/img/project/project-5-1.jpg",
        },
        {
            title: "نقل شقة 200 متر",
            location: "مدينة نصر",
            image: "/assets/img/project/project-5-2.jpg",
        },
        {
            title: "نقل مكتب شركة",
            location: "التجمع الخامس",
            image: "/assets/img/project/project-5-3.jpg",
        },
        {
            title: "نقل استوديو",
            location: "6 أكتوبر",
            image: "/assets/img/project/project-1-4.jpg",
        },
        {
            title: "نقل دوبلكس",
            location: "المعادي",
            image: "/assets/img/project/project-2-5.jpg",
        },
    ];

    return (
        <div id="project" className="it-project-area it-project-style-2 pt-130 pb-100 black-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="it-section-title-box text-center mb-65">
                            <span className="it-section-subtitle white-clr wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">أعمالنا</span>
                            <h4 className="it-section-title white-clr it-split-text it-split-in-right mb-0">
                                بعض مشاريعنا
                                <br />
                                المنجزة
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="swiper-container it-project-active">
                            <div className="swiper-wrapper">
                                {projects.map((project, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="it-project-item fix mb-30">
                                            <div className="it-project-thumb">
                                                <img src={project.image} alt={project.title} />
                                            </div>
                                            <div className="it-project-content">
                                                <span>{project.location}</span>
                                                <h4 className="it-project-title">
                                                    <a className="border-line-white" href="#">{project.title}</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                    <div className="col-12">
                        <div className="it-project-nav text-center mt-40">
                            <button className="it-project-prev mr-10"><i className="fa-solid fa-arrow-right"></i></button>
                            <button className="it-project-next"><i className="fa-solid fa-arrow-left"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
