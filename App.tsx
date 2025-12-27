
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import AIChat from './components/AIChat';
import { SERVICES, PROJECTS, TESTIMONIALS } from './constants';
import { ArrowLeft, ChevronRight, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, BarChart3, Target, MousePointer2 } from 'lucide-react';

const App: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden reveal">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-[-5%] w-[30%] h-[30%] bg-indigo-400/10 blur-[100px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10">
          <div className="space-y-10 reveal-item">
            <div className="inline-flex items-center space-x-reverse space-x-3 bg-white/40 backdrop-blur-md border border-white/50 px-5 py-2 rounded-2xl text-slate-700 shadow-sm transition-all hover:bg-white/60">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide">پلتفرم هوشمند بازاریابی دیجیتال</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] text-slate-900 tracking-tighter">
              قدرت <span className="gradient-text">داده</span> در خدمت <span className="underline decoration-blue-500/30 underline-offset-8">خلاقیت</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-light">
              ما با ترکیب استراتژی‌های مدرن سئو، طراحی تجربه‌محور و ابزارهای تحلیلی هوش مصنوعی، مسیر رشد کسب‌وکار شما را در فضای وب هموار می‌کنیم.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <button className="neumorph-btn px-10 py-5 rounded-2xl font-bold text-lg text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-lg hover:shadow-blue-500/30">
                مشاوره رایگان
              </button>
              <button className="neumorph-btn px-10 py-5 rounded-2xl font-bold text-lg text-slate-800 bg-white/50 hover:bg-white transition-all">
                پروژه‌های اخیر
              </button>
            </div>

            <div className="flex items-center space-x-reverse space-x-8 pt-8 border-r-4 border-blue-500/10 pr-6">
              <div className="space-y-1 transition-transform hover:scale-105 duration-300">
                <div className="text-3xl font-black text-slate-900 font-num">۵۰۰+</div>
                <div className="text-sm text-slate-500 font-medium">مشتری وفادار</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="space-y-1 transition-transform hover:scale-105 duration-300">
                <div className="text-3xl font-black text-slate-900 font-num">۱۲</div>
                <div className="text-sm text-slate-500 font-medium">کشور فعال</div>
              </div>
            </div>
          </div>

          <div className="relative group reveal-item delay-300">
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-[5rem] blur-3xl opacity-60"></div>
            <div className="relative glass-card rounded-[3.5rem] p-4 animate-float overflow-hidden hover:rotate-1 transition-transform duration-700">
               <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop&grayscale=true" 
                alt="Marketing Lab" 
                className="rounded-[3rem] w-full h-auto aspect-square object-cover opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
              />
              
              {/* Floating Glass Stats */}
              <div className="absolute top-12 -left-8 glass-card p-6 rounded-3xl animate-bounce-slow shadow-2xl hover:scale-110 transition-transform cursor-default">
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400">دقت هدف‌گیری</div>
                    <div className="text-xl font-black text-slate-900 font-num">۹۹.۴٪</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-16 -right-12 glass-card p-6 rounded-3xl shadow-2xl hover:scale-110 transition-transform cursor-default">
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400">رشد سالانه</div>
                    <div className="text-xl font-black text-slate-900 font-num">+۳۴۰٪</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Minimalist Grid */}
      <section id="services" className="py-32 bg-white relative reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-24 items-end reveal-item">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-blue-600 font-black text-sm uppercase tracking-[0.2em] opacity-80">خدمات تخصصی</span>
              <h2 className="text-5xl font-black text-slate-900 leading-tight">پوشش کامل نیازهای دیجیتال برند شما در یک پلتفرم</h2>
            </div>
            <div className="lg:col-span-4 lg:text-left">
              <p className="text-slate-500 text-lg font-light leading-relaxed">ما فقط خدمات نمی‌دهیم، ما شریک رشد شما در مسیر موفقیت هستیم.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, idx) => (
              <div key={s.id} 
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="reveal-item neumorph-btn p-10 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-blue-100 transition-all duration-500 group cursor-pointer hover-lift">
                <div className="mb-8 p-5 bg-white rounded-3xl w-fit shadow-sm group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-500">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-black mb-5 text-slate-900 group-hover:text-blue-600 transition-colors">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed font-light mb-8 h-20 overflow-hidden">{s.description}</p>
                <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-[-10px] transition-transform">
                  <span className="text-sm">مشاهده جزئیات</span>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Modern Interactive Banners */}
      <section id="portfolio" className="py-32 bg-slate-50 reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal-item">
            <div className="space-y-4">
              <span className="text-blue-600 font-black text-sm uppercase tracking-[0.2em] opacity-80">نمونه‌کارها</span>
              <h2 className="text-5xl font-black text-slate-900">تجربه‌هایی که خلق کرده‌ایم</h2>
            </div>
            <button className="neumorph-btn px-8 py-4 rounded-2xl font-bold text-slate-900 hover:text-blue-600 transition-all hover:scale-105 active:scale-95">
              آرشیو کامل پروژه‌ها
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {PROJECTS.map((p, idx) => (
              <div key={p.id} 
                style={{ transitionDelay: `${idx * 200}ms` }}
                className="reveal-item group relative rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-slate-200/50 cursor-pointer transition-transform duration-700 hover:scale-[1.02]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={p.imageUrl} 
                    alt={p.title} 
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div className="space-y-2">
                      <span className="text-blue-400 text-sm font-black tracking-widest uppercase">{p.category}</span>
                      <h4 className="text-white text-3xl font-black">{p.title}</h4>
                    </div>
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                      <MousePointer2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Glass Interaction */}
      <section className="py-32 bg-white relative overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="glass-card rounded-[4rem] p-16 lg:p-24 overflow-hidden relative">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl"></div>
            
            <div className="grid lg:grid-cols-2 gap-24 items-center relative">
              <div className="space-y-10 reveal-item">
                <h2 className="text-5xl font-black text-slate-900 leading-tight">چرا برندهای پیشرو ما را انتخاب می‌کنند؟</h2>
                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-2 transition-all hover:scale-110 duration-300">
                    <div className="text-5xl font-black text-blue-600 font-num">۹۸٪</div>
                    <div className="text-slate-500 font-medium">بازگشت مشتری</div>
                  </div>
                  <div className="space-y-2 transition-all hover:scale-110 duration-300">
                    <div className="text-5xl font-black text-indigo-600 font-num">۱۵۰+</div>
                    <div className="text-slate-500 font-medium">کمپین جهانی</div>
                  </div>
                </div>
                <p className="text-lg text-slate-500 font-light leading-relaxed">رضایت مشتریان ما بزرگترین پاداش ماست. ما متهدف به شفافیت و ارائه نتایج واقعی هستیم.</p>
              </div>

              <div className="space-y-8">
                {TESTIMONIALS.map((t, idx) => (
                  <div key={t.id} 
                    style={{ transitionDelay: `${(idx + 2) * 150}ms` }}
                    className="reveal-item bg-white/40 border border-white/60 p-10 rounded-[2.5rem] shadow-xl hover-lift transition-all">
                    <p className="text-slate-700 italic text-lg leading-relaxed mb-8 font-light">"{t.text}"</p>
                    <div className="flex items-center space-x-reverse space-x-5">
                      <img src={t.avatar} className="w-16 h-16 rounded-3xl object-cover ring-4 ring-white shadow-lg transition-transform hover:rotate-3" alt={t.name} />
                      <div>
                        <div className="text-xl font-black text-slate-900">{t.name}</div>
                        <div className="text-blue-600 font-bold text-sm tracking-wide uppercase">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Neumorphic Form */}
      <section id="contact" className="py-32 bg-slate-50 reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-16 reveal-item">
              <div className="space-y-6">
                <span className="text-blue-600 font-black text-sm uppercase tracking-[0.2em] opacity-80">ارتباط با ما</span>
                <h2 className="text-6xl font-black text-slate-900 leading-tight">پروژه بعدی خود را به یک داستان موفقیت تبدیل کنید</h2>
                <p className="text-xl text-slate-500 font-light leading-relaxed">کافیست فرم را پر کنید یا از طریق راه‌های ارتباطی با ما در تماس باشید. تیم ما در کمتر از ۲۴ ساعت پاسخگوی شما خواهد بود.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-3 p-8 glass-card rounded-3xl hover:bg-white/80 transition-colors">
                  <Mail className="text-blue-600 mb-2 w-8 h-8" />
                  <div className="font-black text-slate-900">ایمیل دپارتمان</div>
                  <div className="text-slate-500 text-sm">growth@digi-modern.ir</div>
                </div>
                <div className="space-y-3 p-8 glass-card rounded-3xl hover:bg-white/80 transition-colors">
                  <Phone className="text-emerald-600 mb-2 w-8 h-8" />
                  <div className="font-black text-slate-900">مشاوره تلفنی</div>
                  <div className="text-slate-500 text-sm font-num">۰۲۱-۸۸۸۸۴۴۴۴</div>
                </div>
              </div>
            </div>

            <div className="reveal-item delay-500 neumorph-btn bg-white/40 backdrop-blur-xl p-12 lg:p-16 rounded-[4rem] border border-white/60 shadow-2xl transition-all hover:scale-[1.01]">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 mr-4">نام و نام خانوادگی</label>
                  <input type="text" className="neumorph-inset w-full rounded-2xl px-8 py-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all border-none placeholder-slate-300" placeholder="وارد کنید..." />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700 mr-4">ایمیل کاری</label>
                    <input type="email" className="neumorph-inset w-full rounded-2xl px-8 py-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all border-none text-left placeholder-slate-300" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700 mr-4">شماره تماس</label>
                    <input type="tel" className="neumorph-inset w-full rounded-2xl px-8 py-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all border-none font-num placeholder-slate-300" placeholder="۰۹۱۲۰۰۰۰۰۰۰" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 mr-4">شرح نیاز شما</label>
                  <textarea rows={5} className="neumorph-inset w-full rounded-2xl px-8 py-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all border-none placeholder-slate-300" placeholder="چطور می‌توانیم به شما کمک کنیم؟"></textarea>
                </div>
                <button className="neumorph-btn w-full bg-slate-900 text-white py-6 rounded-3xl font-black text-xl hover:bg-blue-600 transition-all active:scale-95 shadow-xl hover:shadow-blue-200">
                  ارسال درخواست همکاری
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Minimal Footer */}
      <footer className="bg-white py-24 border-t border-slate-100 reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8 reveal-item">
              <div className="flex items-center space-x-reverse space-x-3 group cursor-pointer">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-200 transition-transform group-hover:rotate-12">D</div>
                <span className="text-2xl font-black text-slate-900 tracking-tighter">DIGI-MODERN</span>
              </div>
              <p className="text-slate-500 leading-relaxed font-light">طراحی آینده با قدرت داده و خلاقیت. ما فراتر از یک آژانس، شریک استراتژیک شما هستیم.</p>
              <div className="flex space-x-reverse space-x-4">
                <a href="#" className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="space-y-8 reveal-item delay-100">
              <h5 className="text-xl font-black text-slate-900">سرویس‌ها</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors font-medium nav-link inline-block">سئو هوشمند</a></li>
                <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors font-medium nav-link inline-block">کمپین‌های Ads</a></li>
                <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors font-medium nav-link inline-block">تجربه کاربری (UX)</a></li>
                <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors font-medium nav-link inline-block">تحلیل داده</a></li>
              </ul>
            </div>

            <div className="space-y-8 reveal-item delay-200">
              <h5 className="text-xl font-black text-slate-900">شرکت</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors font-medium nav-link inline-block">درباره ما</a></li>
                <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors font-medium nav-link inline-block">فرصت‌های شغلی</a></li>
                <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors font-medium nav-link inline-block">وبلاگ تخصصی</a></li>
                <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors font-medium nav-link inline-block">تماس با ما</a></li>
              </ul>
            </div>

            <div className="space-y-8 reveal-item delay-300">
              <h5 className="text-xl font-black text-slate-900">عضویت در خبرنامه</h5>
              <p className="text-slate-500 font-light">آخرین مقالات و روندهای بازار را در ایمیل خود دریافت کنید.</p>
              <div className="relative">
                <input type="email" className="neumorph-inset w-full rounded-2xl px-6 py-4 text-sm border-none focus:ring-1 focus:ring-blue-500 text-left placeholder-slate-300" placeholder="Enter your email" />
                <button className="absolute left-2 top-2 bg-slate-900 text-white p-2 rounded-xl hover:bg-blue-600 transition-all hover:scale-105 active:scale-95">
                  <ChevronRight className="rotate-180 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-50 text-sm font-medium text-slate-400 gap-6 reveal-item">
            <p className="font-num">© ۱۴۰۳ تمامی حقوق برای آژانس دیجیتال مدرن محفوظ است.</p>
            <div className="flex space-x-reverse space-x-10">
              <a href="#" className="hover:text-blue-600 transition-colors nav-link">قوانین و حریم خصوصی</a>
              <a href="#" className="hover:text-blue-600 transition-colors nav-link">نقشه سایت</a>
            </div>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
