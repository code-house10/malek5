'use client';

export default function ContactForm() {
    return (
        <div id="contact" className="it-form-area">
            <div className="container">
                <div className="row">
                    <div className="it-form-wrap it-faq-style-2 z-index-1 wow zoomIn" data-wow-duration=".8s" data-wow-delay=".5s">
                        <div className="row gx-15 row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-1 row-cols-sm-2 align-items-center">
                            <div className="col">
                                <div className="it-contact-input-box">
                                    <input type="text" placeholder="الاسم" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="it-contact-input-box">
                                    <input type="tel" placeholder="رقم الهاتف" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="it-contact-input-box">
                                    <div className="postbox__select">
                                        <select>
                                            <option>اختر الخدمة</option>
                                            <option>نقل عفش كامل</option>
                                            <option>فك وتركيب الأثاث</option>
                                            <option>تغليف العفش</option>
                                            <option>تغليف الزجاج</option>
                                            <option>نقل بين المحافظات</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="it-contact-input-box">
                                    <div className="postbox__select">
                                        <select>
                                            <option>اختر المنطقة</option>
                                            <option>المعادي</option>
                                            <option>مدينة نصر</option>
                                            <option>6 أكتوبر</option>
                                            <option>الشيخ زايد</option>
                                            <option>التجمع الخامس</option>
                                            <option>مصر الجديدة</option>
                                            <option>الهرم</option>
                                            <option>فيصل</option>
                                            <option>المهندسين</option>
                                            <option>الدقي</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="it-contact-btn">
                                    <button type="submit" className="it-btn-orange w-100">
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
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
