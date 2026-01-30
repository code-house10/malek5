export default function Team() {
    const team = [
        {
            name: "أحمد محمد",
            role: "مدير العمليات",
            image: "/assets/img/team/team-1-1.png",
        },
        {
            name: "محمود علي",
            role: "رئيس فريق النقل",
            image: "/assets/img/team/team-1-2.png",
        },
        {
            name: "خالد حسن",
            role: "مشرف التغليف",
            image: "/assets/img/team/team-1-3.png",
        },
    ];

    return (
        <div id="team" className="it-team-area it-team-style-2 pt-130 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="it-section-title-box text-center mb-65">
                            <span className="it-section-subtitle wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">فريقنا</span>
                            <h4 className="it-section-title it-split-text it-split-in-right mb-0">
                                تعرف على فريقنا
                                <br />
                                المحترف
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {team.map((member, index) => (
                        <div key={index} className={`col-xl-4 col-lg-4 col-md-6 col-sm-6 wow itfadeUp`} data-wow-duration=".9s" data-wow-delay={`${0.3 + index * 0.2}s`}>
                            <div className="it-team-item text-center mb-30">
                                <div className="it-team-thumb-wrap">
                                    <div className="it-team-thumb fix z-index-1">
                                        <img src={member.image} alt={member.name} />
                                        <img className="it-team-shape-1" src="/assets/img/shape/team-1-1.png" alt="" />
                                        <div className="it-team-social">
                                            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="it-team-content-box">
                                    <div className="it-team-content">
                                        <h4 className="it-team-title">
                                            <a className="border-line-black" href="#">{member.name}</a>
                                        </h4>
                                        <span>{member.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-12 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".8s">
                        <div className="it-team-btn text-center mt-15">
                            <a href="#contact" className="it-btn-orange">
                                <span>
                                    <span className="text-1">انضم لفريقنا</span>
                                    <span className="text-2">انضم لفريقنا</span>
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
