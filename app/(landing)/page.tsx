import Header from "./components/Header";
import Slider from "./components/Slider";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Team from "./components/Team";
import Location from "./components/Location";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function HomePage() {
    return (
        <>
            {/* Back to Top */}
            <button className="scroll-top scroll-to-target" data-target="html">
                <i className="far fa-angle-double-up"></i>
            </button>

            {/* Offcanvas Menu */}
            <div className="it-offcanvas-area">
                <div className="itoffcanvas">
                    <div className="itoffcanvas__close-btn">
                        <button className="close-btn"><i className="fal fa-times"></i></button>
                    </div>
                    <div className="itoffcanvas__logo">
                        <a href="/">
                            <img src="/assets/img/logo/logo-white.png" alt="لوجو نقل العفش" />
                        </a>
                    </div>
                    <div className="itoffcanvas__text">
                        <p>شركة متخصصة في نقل العفش والأثاث بأعلى معايير الجودة والأمان في القاهرة والجيزة</p>
                    </div>
                    <div className="it-menu-mobile d-xl-none"></div>
                    <div className="itoffcanvas__info">
                        <h3 className="offcanva-title">تواصل معنا</h3>
                        <div className="it-info-wrapper mb-20 d-flex align-items-center">
                            <div className="itoffcanvas__info-icon">
                                <a href="#"><i className="fal fa-envelope"></i></a>
                            </div>
                            <div className="itoffcanvas__info-address">
                                <span>البريد الإلكتروني</span>
                                <a href="mailto:info@naql-afsh.com">info@naql-afsh.com</a>
                            </div>
                        </div>
                        <div className="it-info-wrapper mb-20 d-flex align-items-center">
                            <div className="itoffcanvas__info-icon">
                                <a href="#"><i className="fal fa-phone-alt"></i></a>
                            </div>
                            <div className="itoffcanvas__info-address">
                                <span>الهاتف</span>
                                <a href="tel:+201234567890">+20 123 456 7890</a>
                            </div>
                        </div>
                        <div className="it-info-wrapper mb-20 d-flex align-items-center">
                            <div className="itoffcanvas__info-icon">
                                <a href="#"><i className="fas fa-map-marker-alt"></i></a>
                            </div>
                            <div className="itoffcanvas__info-address">
                                <span>العنوان</span>
                                <a href="#" target="_blank">القاهرة، مصر</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-overlay"></div>

            <Header />

            <main>
                <Slider />
                <ContactForm />
                <About />
                <Services />
                <WhyChooseUs />
                <Testimonials />
                <Brands />
                <Projects />
                <CTA />
                <Team />
                <Location />
                <Blog />
            </main>
            <Footer />
        </>
    );
}
