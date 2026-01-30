export default function Blog() {
    const posts = [
        {
            title: "نصائح هامة قبل نقل العفش",
            date: "15 يناير 2026",
            image: "/assets/img/blog/blog-5-1.jpg",
        },
        {
            title: "كيف تحمي أثاثك أثناء النقل",
            date: "10 يناير 2026",
            image: "/assets/img/blog/blog-5-2.jpg",
        },
        {
            title: "أفضل مواد التغليف للأثاث",
            date: "5 يناير 2026",
            image: "/assets/img/blog/blog-5-3.jpg",
        },
    ];

    return (
        <div className="it-blog-area it-blog-style-2 it-blog-style-3 it-blog-style-4 pt-125 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="it-section-title-box text-center mb-65">
                            <span className="it-section-subtitle wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">مقالات ونصائح</span>
                            <h4 className="it-section-title it-split-text it-split-in-right mb-0">
                                أحدث المقالات
                                <br />
                                والنصائح
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row gx-35">
                    {posts.map((post, index) => (
                        <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="it-blog-item gray-bg mb-30">
                                <div className="it-blog-thumb w-100">
                                    <a href="#">
                                        <img className="w-100" src={post.image} alt={post.title} />
                                        <img className="w-100" src={post.image} alt={post.title} />
                                    </a>
                                </div>
                                <div className="it-blog-content">
                                    <div className="it-blog-meta mb-20">
                                        <span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.468788 13.1562H2.81253V14.5625C2.81253 14.8213 3.02241 15.0312 3.28128 15.0312H15.5313C15.7901 15.0312 16 14.8213 16 14.5625V2.375C16 2.11612 15.7901 1.90625 15.5313 1.90625H13.1875V1.4375C13.1875 1.17862 12.9776 0.96875 12.7188 0.96875C12.4599 0.96875 12.25 1.17862 12.25 1.4375V1.90625H9.87502V1.4375C9.87502 1.17862 9.66514 0.96875 9.40627 0.96875C9.1474 0.96875 8.93752 1.17862 8.93752 1.4375V1.90625H6.59378V1.4375C6.59378 1.17862 6.3839 0.96875 6.12503 0.96875C5.86615 0.96875 5.65628 1.17862 5.65628 1.4375V1.90625H3.28128C3.02241 1.90625 2.81253 2.11612 2.81253 2.375V5.18749C2.81253 8.64217 1.37676 11.2999 0.168695 12.3274C0.0170703 12.4537 -0.0391483 12.6615 0.0280078 12.8471C0.0952264 13.0326 0.271414 13.1562 0.468788 13.1562Z" fill="#E03B3B" />
                                            </svg>
                                            {post.date}
                                        </span>
                                    </div>
                                    <h4 className="it-blog-title mb-20">
                                        <a className="border-line-black" href="#">{post.title}</a>
                                    </h4>
                                    <a className="it-blog-btn border-line-orange" href="#">
                                        اقرأ المزيد
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
