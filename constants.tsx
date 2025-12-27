
import React from 'react';
import { Search, Monitor, BarChart3, Megaphone, Target, Cpu } from 'lucide-react';
import { Service, Project, Testimonial, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'بهینه‌سازی موتور جستجو (SEO)',
    description: 'رتبه‌بندی بالاتر در نتایج جستجو و جذب ترافیک ارگانیک هدفمند برای کسب‌وکار شما.',
    icon: <Search className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'ads',
    title: 'تبلیغات آنلاین (Ads)',
    description: 'کمپین‌های هوشمند گوگل ادز و شبکه‌های اجتماعی برای بازگشت سرمایه حداکثری.',
    icon: <Megaphone className="w-8 h-8 text-cyan-500" />
  },
  {
    id: 'web',
    title: 'طراحی سایت و اپلیکیشن',
    description: 'خلق تجربه‌های دیجیتال منحصر به فرد با تمرکز بر رابط کاربری مدرن و سرعت بالا.',
    icon: <Monitor className="w-8 h-8 text-indigo-500" />
  },
  {
    id: 'analysis',
    title: 'آنالیز داده‌ها',
    description: 'استخراج بینش‌های ارزشمند از داده‌ها برای تصمیم‌گیری‌های استراتژیک و دقیق.',
    icon: <BarChart3 className="w-8 h-8 text-slate-500" />
  }
];

export const PROJECTS: Project[] = [
  { id: 1, title: 'استارتاپ فین‌تک "نکست"', category: 'طراحی سایت', imageUrl: 'https://picsum.photos/seed/p1/800/600' },
  { id: 2, title: 'کمپین رشد "آریا مارکت"', category: 'دیجیتال مارکتینگ', imageUrl: 'https://picsum.photos/seed/p2/800/600' },
  { id: 3, title: 'پلتفرم آموزشی "دانا"', category: 'برندینگ', imageUrl: 'https://picsum.photos/seed/p3/800/600' },
  { id: 4, title: 'اپلیکیشن "سفر آسان"', category: 'تجربه کاربری', imageUrl: 'https://picsum.photos/seed/p4/800/600' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'علی رضایی',
    role: 'مدیرعامل شرکت پارت',
    text: 'همکاری با این تیم باعث شد فروش آنلاین ما در کمتر از ۶ ماه دو برابر شود. دقت در جزئیات واقعاً تحسین‌برانگیز است.',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: 2,
    name: 'سارا کریمی',
    role: 'مدیر بازاریابی تک‌نور',
    text: 'استراتژی‌های سئو که برای ما اجرا کردند، برند ما را در کلمات کلیدی رقابتی به صفحه اول گوگل رساند.',
    avatar: 'https://i.pravatar.cc/150?u=2'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'تاثیر هوش مصنوعی بر آینده سئو',
    excerpt: 'چگونه الگوریتم‌های جدید گوگل با استفاده از هوش مصنوعی نحوه جستجو را تغییر می‌دهند؟',
    date: '۱۴ آذر ۱۴۰۲',
    image: 'https://picsum.photos/seed/b1/600/400'
  },
  {
    id: 2,
    title: '۵ استراتژی برای افزایش نرخ تبدیل',
    excerpt: 'راهکارهای عملی برای تبدیل بازدیدکنندگان سایت به مشتریان وفادار.',
    date: '۱۰ آذر ۱۴۰۲',
    image: 'https://picsum.photos/seed/b2/600/400'
  }
];
