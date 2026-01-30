export default function Footer() {
    return (
        <footer>
            <div className="it-footer-wrap it-footer-style-2 p-relative fix black-bg z-index-1">
                <div className="it-footer-big-text"><img src="/assets/img/footer/text.png" alt="" /></div>

                <div className="it-footer-area pt-100 pb-50">
                    <div className="container">
                        <div className="row">
                            {/* Logo & Description */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                <div className="it-footer-widget it-footer-col-2-1">
                                    <div className="it-footer-widget-logo mb-20">
                                        <a href="/"><img src="/assets/img/logo/logo-white.png" alt="نقل العفش" /></a>
                                    </div>
                                    <div className="it-footer-widget-text">
                                        <p>شركة متخصصة في نقل العفش والأثاث بأعلى معايير الجودة والأمان في القاهرة والجيزة</p>
                                    </div>
                                    <div className="it-footer-widget-btn">
                                        <a href="#contact" className="it-btn-orange">
                                            <span>
                                                <span className="text-1">احجز الآن</span>
                                                <span className="text-2">احجز الآن</span>
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

                            {/* Quick Links */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                <div className="it-footer-widget it-footer-col-2-2">
                                    <h4 className="it-footer-widget-title">روابط سريعة</h4>
                                    <div className="it-footer-widget-menu">
                                        <ul>
                                            <li><a href="#slider">الرئيسية</a></li>
                                            <li><a href="#about">من نحن</a></li>
                                            <li><a href="#service">خدماتنا</a></li>
                                            <li><a href="#project">أعمالنا</a></li>
                                            <li><a href="#contact">تواصل معنا</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Services */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                <div className="it-footer-widget it-footer-col-2-3">
                                    <h4 className="it-footer-widget-title">خدماتنا</h4>
                                    <div className="it-footer-widget-menu">
                                        <ul>
                                            <li><a href="#service">نقل العفش الكامل</a></li>
                                            <li><a href="#service">فك وتركيب الأثاث</a></li>
                                            <li><a href="#service">تغليف العفش</a></li>
                                            <li><a href="#service">تغليف الزجاج</a></li>
                                            <li><a href="#service">نقل بين المحافظات</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                <div className="it-footer-widget it-footer-col-2-4 d-flex justify-content-xl-end">
                                    <div>
                                        <h4 className="it-footer-widget-title">تواصل معنا</h4>
                                        <div className="it-footer-widget-tel-wrap">
                                            <div className="it-footer-widget-tel-box mb-20">
                                                <span>
                                                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.625 0C2.52375 0 0 2.54125 0 5.66562C0 10.105 5.09625 14.6887 5.31313 14.8812C5.4025 14.9606 5.51375 15 5.625 15C5.73625 15 5.8475 14.9606 5.93687 14.8819C6.15375 14.6888 11.25 10.105 11.25 5.66562C11.25 2.54125 8.72625 0 5.625 0ZM5.625 8.75C3.90188 8.75 2.5 7.34812 2.5 5.625C2.5 3.90188 3.90188 2.5 5.625 2.5C7.34812 2.5 8.75 3.90188 8.75 5.625C8.75 7.34812 7.34812 8.75 5.625 8.75Z" fill="currentcolor" />
                                                    </svg>
                                                </span>
                                                <a target="_blank" href="https://maps.google.com">القاهرة، مصر</a>
                                            </div>
                                            <div className="it-footer-widget-tel-box mb-20">
                                                <span>
                                                    <svg width="15" height="18" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.4209 3.30338L11.2988 9.42551C10.6162 10.1064 9.69137 10.4888 8.7272 10.4888C7.76303 10.4888 6.83822 10.1064 6.15558 9.42551L0.0334543 3.30338C0.0232725 3.41829 0 3.52229 0 3.63647V12.3637C0.0011548 13.3277 0.384638 14.252 1.06633 14.9337C1.74803 15.6154 2.67227 15.9988 3.63633 16H13.8181C14.7821 15.9988 15.7064 15.6154 16.3881 14.9337C17.0698 14.252 17.4532 13.3277 17.4544 12.3637V3.63647C17.4544 3.52229 17.4311 3.41829 17.4209 3.30338Z" fill="currentcolor" />
                                                    </svg>
                                                </span>
                                                <a href="mailto:info@naql-afsh.com">info@naql-afsh.com</a>
                                            </div>
                                            <div className="it-footer-widget-tel-box">
                                                <span>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.12499 0.624045C8.12499 0.458285 8.19084 0.299313 8.30805 0.182103C8.42526 0.064893 8.58423 -0.00095502 8.74999 -0.00095502C10.407 0.000864728 11.9957 0.659929 13.1674 1.83164C14.3391 3.00335 14.9982 4.592 15 6.24905C15 6.41481 14.9341 6.57378 14.8169 6.69099C14.6997 6.8082 14.5408 6.87405 14.375 6.87405C14.2092 6.87405 14.0503 6.8082 13.933 6.69099C13.8158 6.57378 13.75 6.41481 13.75 6.24905C13.7485 4.92342 13.2212 3.65251 12.2839 2.71516C11.3465 1.7778 10.0756 1.25053 8.74999 1.24904C8.58423 1.24905 8.42526 1.1832 8.30805 1.06599C8.19084 0.948776 8.12499 0.789805 8.12499 0.624045Z" fill="currentcolor" />
                                                    </svg>
                                                </span>
                                                <a href="tel:+201234567890">+20 123 456 7890</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="it-newsletter-area it-newsletter-style-2">
                    <div className="container">
                        <div className="it-newsletter-wrap wow zoomIn" data-wow-duration=".8s" data-wow-delay=".5s">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="it-newsletter-left">
                                        <h4 className="it-newsletter-title">اشترك في نشرتنا البريدية للحصول على أحدث العروض</h4>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="it-newsletter-input-box">
                                        <form className="input-wrap p-relative" action="#">
                                            <input type="email" placeholder="أدخل بريدك الإلكتروني" />
                                            <button type="submit">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.4128 0.587602C15.1738 0.345687 14.8765 0.169506 14.5495 0.07608C14.2225 -0.0173459 13.8769 -0.0248582 13.5462 0.054269L2.8795 2.30094C2.26522 2.38518 1.68666 2.63925 1.20897 3.03454C0.731284 3.42983 0.373445 3.95064 0.175753 4.53831C-0.0219392 5.12598 -0.0516323 5.75718 0.0900176 6.36081C0.231668 6.96445 0.539034 7.51655 0.977503 7.95494L2.12284 9.0996C2.18483 9.16157 2.23399 9.23516 2.2675 9.31615C2.30102 9.39714 2.31824 9.48395 2.31817 9.5716V11.6836C2.31964 11.9806 2.388 12.2734 2.51817 12.5403L2.51284 12.5449L2.53017 12.5623C2.72551 12.955 3.04456 13.2727 3.43817 13.4663L3.4555 13.4836L3.46017 13.4783C3.72708 13.6084 4.01988 13.6768 4.31684 13.6783H6.42884C6.60554 13.6781 6.77507 13.7481 6.90017 13.8729L8.04484 15.0176C8.35185 15.328 8.71727 15.5746 9.12002 15.7431C9.52278 15.9117 9.95491 15.9988 10.3915 15.9996C10.7553 15.9991 11.1167 15.9397 11.4615 15.8236C12.0438 15.6324 12.5611 15.2823 12.955 14.8127C13.3489 14.3432 13.6038 13.7729 13.6908 13.1663L15.9408 2.47627C16.0241 2.1427 16.0192 1.79322 15.9266 1.46211C15.834 1.13101 15.657 0.829649 15.4128 0.587602Z" fill="currentcolor" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="it-copyright-area it-copyright-style-2 it-copyright-border">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                <div className="it-copyright-left text-center text-md-start">
                                    <p className="mb-0">© 2026 <a href="/">نقل العفش</a> جميع الحقوق محفوظة.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                <div className="it-copyright-social text-center text-md-end">
                                    <a href="#" aria-label="فيسبوك">
                                        <span>
                                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.82727 6.83333C1.14284 6.83333 1 6.96763 1 7.61111V8.77778C1 9.42126 1.14284 9.55556 1.82727 9.55556H3.48182V14.2222C3.48182 14.8657 3.62466 15 4.30909 15H5.96364C6.64807 15 6.79091 14.8657 6.79091 14.2222V9.55556H8.64871C9.1678 9.55556 9.30155 9.4607 9.44416 8.99145L9.7987 7.82478C10.043 7.02095 9.89246 6.83333 9.00326 6.83333H6.79091V4.88889C6.79091 4.45933 7.16129 4.11111 7.61818 4.11111H9.97273C10.6572 4.11111 10.8 3.97681 10.8 3.33333V1.77778C10.8 1.1343 10.6572 1 9.97273 1H7.61818C5.33373 1 3.48182 2.74111 3.48182 4.88889V6.83333H1.82727Z" stroke="currentcolor" strokeWidth="1.5" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="#" aria-label="واتساب">
                                        <span>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentcolor" />
                                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.79 23.528l4.631-1.467A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.281 0-4.388-.732-6.106-1.976l-.438-.292-2.755.873.921-2.68-.32-.485A9.948 9.948 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" fill="currentcolor" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="#" aria-label="انستجرام">
                                        <span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0586 4.94727C12.6109 4.94727 13.0586 4.49955 13.0586 3.94727C13.0586 3.39498 12.6109 2.94727 12.0586 2.94727V4.94727ZM12.0496 2.94727C11.4973 2.94727 11.0496 3.39498 11.0496 3.94727C11.0496 4.49955 11.4973 4.94727 12.0496 4.94727V2.94727ZM8 14C6.32181 14 5.16377 13.9979 4.2928 13.8808C3.45059 13.7675 3.02803 13.5636 2.73223 13.2678L1.31802 14.682C2.04735 15.4113 2.96231 15.7199 4.0263 15.8629C5.06152 16.0021 6.37835 16 8 16V14Z" fill="currentcolor" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
