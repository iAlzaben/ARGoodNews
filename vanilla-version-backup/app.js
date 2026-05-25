/* ==========================================================================
   «خبر سار» (Good News) - Interactive Client-Side Engine
   ========================================================================== */

// 1. Mock Database of Uplifting Good News in Arabic
const NEWS_DATABASE = [
    {
        id: 1,
        title: "ريادة الفضاء العربية: مهندسون شباب يطورون قمراً اصطناعياً لرصد المناخ بأيدٍ عربية كاملة",
        excerpt: "في خطوة تاريخية ملهمة، أعلن مركز أبحاث فضاء عربي عن نجاح كوادره الشابة بنسبة 100% في تصميم وتصنيع قمر اصطناعي مخصص لرصد ومكافحة آثار التغير المناخي في المنطقة الشرق الأوسطية، مما يفتح آفاقاً جديدة للبحث العلمي المستقل.",
        vibe: "arab-pride",
        vibeLabel: "فخر عربي 👑",
        author: "سارة المهدي",
        date: "20 مايو 2026",
        readTime: "4 دقائق",
        likes: 124,
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "ثورة بيئية في الصحراء: تحويل 50 ألف هكتار من الأراضي القاحلة إلى مزارع شمسية ذكية",
        excerpt: "نجحت مبادرة بيئية خضراء في تحويل مساحات واسعة من الصحراء الجافة إلى واحات زراعية حديثة تعتمد بالكامل على تكنولوجيا تكثيف الرطوبة والري المقطر المدعوم بخلية شمسية متكاملة، محققةً اكتفاءً ذاتياً لـ 15 قرية مجاورة.",
        vibe: "hopeful",
        vibeLabel: "يبعث على الأمل 🌱",
        author: "يوسف الصايغ",
        date: "19 مايو 2026",
        readTime: "5 دقائق",
        likes: 98,
        imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "صاحب القلب الذهبي: خباز في بغداد يقدم الخبز مجاناً للمحتاجين ويكتب: 'ثمنك مدفوع بابتسامتك'",
        excerpt: "انتشارت قصة الخباز البغدادي أبو أحمد الذي يعلق لوحة يومية أمام متجره البسيط يدعو فيها كل من لا يملك ثمن الخبز لأخذه مجاناً، مؤكداً أن هدفه هو ألا ينام جائع في حيه، مما ألهم عشرات المتاجر الأخرى لتقليد مبادرته النبيلة.",
        vibe: "heartwarming",
        vibeLabel: "يرسم البسمة ❤️",
        author: "أحمد الرافدين",
        date: "18 مايو 2026",
        readTime: "3 دقائق",
        likes: 245,
        imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "قوة الإرادة والتحدي: شابة كفيفة تحصل على الدكتوراه في الذكاء الاصطناعي بمرتبة الشرف الأولى",
        excerpt: "رغم فقدانها للبصر منذ الطفولة، استطاعت الباحثة نوران التغلب على كافة الصعاب الأكاديمية وحصلت على درجة الدكتوراه المتميزة بعد تطويرها خوارزمية صوتية ثورية تساعد المكفوفين على البرمجة بسلاسة ودون مساعدة.",
        vibe: "inspiring",
        vibeLabel: "مُلهم 💫",
        author: "منى فاروق",
        date: "17 مايو 2026",
        readTime: "6 دقائق",
        likes: 189,
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "الذهب الأخضر: ابتكار نظام ري ذكي يوفر 70% من المياه للأراضي الجافة وشديدة الحرارة",
        excerpt: "اخترع طالب هندسة زراعية أداة استشعار ذكية وبسيطة توضع تحت التربة لتقييم حاجة النباتات الفعلية للمياه وإرسال بيانات دقيقة لنظام الري، مما حقق وفراً مائياً غير مسبوق وحافظ على جودة ونضارة المحاصيل الزراعية المتنوعة.",
        vibe: "hopeful",
        vibeLabel: "يبعث على الأمل 🌱",
        author: "كريم عبد الله",
        date: "15 مايو 2026",
        readTime: "4 دقائق",
        likes: 85,
        imageUrl: "https://images.unsplash.com/photo-1463121859909-013e6ca55910?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "إنجاز طبي واعد: فريق بحثي ينجح في تطوير علاج جديد ومبسط للأمراض المزمنة يحقق نتائج مذهلة",
        excerpt: "أعلن مختبر صيدلاني مشترك عن التوصل لتركيبة علاجية جديدة تعتمد على تقنية النانو تنهي معاناة ملايين المرضى وتوفر علاجاً آمناً وبسيطاً بجرعات أقل وتكلفة اقتصادية منخفضة للغاية تناسب جميع الفئات الاجتماعية.",
        vibe: "inspiring",
        vibeLabel: "مُلهم 💫",
        author: "د. هالة زين",
        date: "14 مايو 2026",
        readTime: "5 دقائق",
        likes: 156,
        imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "أطفال يزرعون الحب والتكافل: مبادرة مدرسية مميزة لتبادل الرسائل الإيجابية وإسعاد عمال النظافة",
        excerpt: "في لفتة إنسانية غاية في اللطف، أطلق أطفال مدرسة ابتدائية مبادرة لكتابة بطاقات شكر مزينة وتوزيع وجبات خفيفة وهدايا رمزية على عمال النظافة في المدينة تقديراً لجهودهم اليومية، مما رسم ابتسامة واسعة على وجوه الجميع.",
        vibe: "heartwarming",
        vibeLabel: "يرسم البسمة ❤️",
        author: "فاطمة عمر",
        date: "12 مايو 2026",
        readTime: "3 دقائق",
        likes: 210,
        imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "الفن يحيي الجدران المنسية: فنانون شباب يحولون حياً قديماً متهالكاً إلى لوحة فنية ساحرة ومفتوحة",
        excerpt: "بأدوات بسيطة وأفكار مليئة بالحياة، تجمعت مجموعة من الرسامين والمصممين لتزيين جدران حي شعبي قديم بجداريات ملونة تحكي قصص التراث العريق والتفاؤل بالغد، محولين الحي إلى مزار سياحي وثقافي يقصده المئات يومياً.",
        vibe: "inspiring",
        vibeLabel: "مُلهم 💫",
        author: "سامر الجود",
        date: "10 مايو 2026",
        readTime: "4 دقائق",
        likes: 172,
        imageUrl: "https://images.unsplash.com/photo-1561054790-2ff79524458f?q=80&w=800&auto=format&fit=crop"
    }
];

// 2. Collection of Daily Inspiring Quotes and Optimistic Facts
const DAILY_DOSES = [
    { text: "الأمل ليس حلماً، بل هو الطريقة التي نحول بها الأحلام إلى واقع ملموس.", author: "مقولة مأثورة" },
    { text: "حقيقة مبهجة: زراعة شجرة واحدة توفر أكسجيناً يكفي لأربعة أشخاص يومياً، وكل مبادرة خضراء تبدأ ببذرة واحدة.", author: "معلومة بيئية" },
    { text: "أعظم إنجاز للمرء هو أن يرسم ابتسامة صادقة على وجه إنسان يمر بيوم صعب.", author: "حكمة اليوم" },
    { text: "حقيقة علمية: الضحك يفرز هرمونات الإندورفين التي تقوي جهاز المناعة وتقلل التوتر بنسبة 40%. تفاءل لتسعد!", author: "دراسة طبية" },
    { text: "ما يزرع في النفس من أمل وتفاؤل يزهر حتماً عملاً صالحاً وإنجازاً يبهر العالم.", author: "عبارة ملهمة" },
    { text: "النجاح لا يقاس بالمنصب، بل بالأثر الطيب والبهجة التي تتركها في حياة الآخرين.", author: "دروس الحياة" }
];

// SVGs definitions for dynamic injection
const SVG_ICONS = {
    user: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-left:4px;"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-left:4px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    clock: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-left:4px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:6px; transition: transform 0.2s;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
    heart: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-left:4px;"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    soundOn: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.7.7 0 0 0-1.203-.497L5.328 8.672a.5.5 0 0 1-.354.146H2.5A.5.5 0 0 0 2 9.318v5.364a.5.5 0 0 0 .5.5h2.474a.5.5 0 0 1 .354.146l4.47 4.467a.7.7 0 0 0 1.202-.497v-14.6Z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
    soundOff: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
    sun: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    moon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
};

// State Variables
let isSoundMuted = true; 
let activeFilter = 'all';
let searchPattern = '';
let likedCards = new Set();

// Sound Audio Context & Fallback Synthesizer
const playSynthesizedTone = (type) => {
    if (isSoundMuted) return;
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        
        if (type === 'chime') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, ctx.currentTime); 
            osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.15); 
            
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
            
            osc.start();
            osc.stop(ctx.currentTime + 0.6);
        } else if (type === 'lantern') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, ctx.currentTime); 
            osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.4); 
            
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);
            
            osc.start();
            osc.stop(ctx.currentTime + 0.45);
        }
    } catch (e) {
        console.log("Audio synthesis not supported or blocked by browser policies.");
    }
};

// Play short sound helpers
const playChime = () => {
    const sound = document.getElementById('chimeSound');
    if (sound && !isSoundMuted && sound.play) {
        sound.volume = 0.3;
        sound.play().catch(() => playSynthesizedTone('chime'));
    } else {
        playSynthesizedTone('chime');
    }
};

const playLanternSound = () => {
    const sound = document.getElementById('lanternSound');
    if (sound && !isSoundMuted && sound.play) {
        sound.volume = 0.3;
        sound.play().catch(() => playSynthesizedTone('lantern'));
    } else {
        playSynthesizedTone('lantern');
    }
};

// --------------------------------------------------------------------------
// Background Particle System (Lanterns of Hope Canvas)
// --------------------------------------------------------------------------
class LanternParticle {
    constructor(canvas, text = null, name = null) {
        this.canvas = canvas;
        this.text = text;
        this.name = name;
        this.isCustom = text !== null;
        
        this.reset();
        
        // Spawn at bottom
        this.y = canvas.height + (this.isCustom ? 20 : Math.random() * 200);
    }
    
    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = this.canvas.height + 50;
        this.size = this.isCustom ? Math.random() * 8 + 8 : Math.random() * 4 + 2;
        this.speedY = this.isCustom ? Math.random() * 0.8 + 0.5 : Math.random() * 0.4 + 0.2;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.opacity = this.isCustom ? 0.9 : Math.random() * 0.5 + 0.25;
        this.swaySpeed = Math.random() * 0.02 + 0.005;
        this.swayAngle = Math.random() * Math.PI * 2;
        
        const goldColors = [
            '253, 184, 19', 
            '255, 159, 28', 
            '56, 239, 125', 
            '0, 180, 216'   
        ];
        this.colorRGB = goldColors[Math.floor(Math.random() * goldColors.length)];
    }
    
    update() {
        this.y -= this.speedY;
        this.swayAngle += this.swaySpeed;
        this.x += Math.sin(this.swayAngle) * 0.5 + this.speedX;
        
        if (this.y < 100) {
            this.opacity -= 0.005;
        }
        
        if ((this.y < -50 || this.opacity <= 0) && !this.isCustom) {
            this.reset();
        }
    }
    
    draw(ctx) {
        ctx.save();
        ctx.shadowBlur = this.isCustom ? 25 : 12;
        ctx.shadowColor = `rgba(${this.colorRGB}, ${this.opacity * 0.8})`;
        
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        grad.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        grad.addColorStop(0.3, `rgba(${this.colorRGB}, ${this.opacity})`);
        grad.addColorStop(1, `rgba(${this.colorRGB}, 0)`);
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.fill();
        
        if (this.isCustom && this.y > 0) {
            ctx.restore();
            ctx.save();
            ctx.font = '11px Tajawal, Cairo, sans-serif';
            ctx.fillStyle = 'rgba(253, 184, 19, 0.9)';
            ctx.textAlign = 'center';
            ctx.shadowBlur = 4;
            ctx.shadowColor = 'rgba(0,0,0,0.2)';
            
            const textPreview = this.text.length > 25 ? this.text.substring(0, 22) + '...' : this.text;
            ctx.fillText(`✨ ${this.name}: ${textPreview}`, this.x, this.y - this.size * 3);
        }
        ctx.restore();
    }
}

const initLanternsCanvas = () => {
    const canvas = document.getElementById('lanternsCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    const maxParticles = 60;
    
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new LanternParticle(canvas));
    }
    
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw(ctx);
            
            if (p.isCustom && (p.y < -100 || p.opacity <= 0)) {
                particles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    };
    animate();
    
    window.spawnCustomLantern = (text, name) => {
        particles.push(new LanternParticle(canvas, text, name));
    };
};

// --------------------------------------------------------------------------
// Sparkle Canvas (Daily Dose of Joy Click Bursts)
// --------------------------------------------------------------------------
const triggerSparkleBurst = () => {
    const canvas = document.getElementById('sparkleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    const sparkles = [];
    const colors = ['#FDB813', '#FF9F1C', '#2EC4B6', '#E71D36', '#00B4D8', '#FFFFFF'];
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    for (let i = 0; i < 45; i++) {
        sparkles.push({
            x: centerX,
            y: centerY,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6 - 2, 
            radius: Math.random() * 3 + 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            decay: Math.random() * 0.02 + 0.015
        });
    }
    
    const drawBurst = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;
        
        sparkles.forEach(p => {
            if (p.alpha > 0) {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.05; 
                p.alpha -= p.decay;
                
                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.shadowBlur = 8;
                ctx.shadowColor = p.color;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
                
                active = true;
            }
        });
        
        if (active) {
            requestAnimationFrame(drawBurst);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    };
    drawBurst();
};

// --------------------------------------------------------------------------
// UI Core Rendering and Interaction Logic
// --------------------------------------------------------------------------

// 1. Dynamic News Grid Builder
const renderNewsFeed = () => {
    const grid = document.getElementById('newsGrid');
    const visibleCounter = document.getElementById('visibleCount');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filteredNews = NEWS_DATABASE.filter(item => {
        const matchesFilter = activeFilter === 'all' || item.vibe === activeFilter;
        const matchesSearch = item.title.includes(searchPattern) || item.excerpt.includes(searchPattern);
        return matchesFilter && matchesSearch;
    });
    
    if (visibleCounter) {
        visibleCounter.textContent = filteredNews.length;
    }
    
    if (filteredNews.length === 0) {
        grid.innerHTML = `
            <div class="empty-news-box" style="grid-column: span 2; text-align: center; padding: 4rem 2rem;">
                <span style="font-size: 3rem; display: block; margin-bottom: 1rem;">🍃</span>
                <h3 style="font-family: var(--font-heading); font-size: 1.6rem; margin-bottom: 0.5rem;">البحث مستمر عن بارقة أمل...</h3>
                <p style="color: var(--text-secondary);">لا توجد أخبار تطابق معايير البحث الحالية. جرّب كتابة كلمة أخرى أو تصفح الأقسام بالكامل!</p>
            </div>
        `;
        return;
    }
    
    filteredNews.forEach((news, idx) => {
        const card = document.createElement('article');
        card.className = 'news-card';
        card.style.animation = `scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.05}s both`;
        
        const hasLiked = likedCards.has(news.id);
        
        card.innerHTML = `
            <div class="card-header-img">
                <img class="card-img" src="${news.imageUrl}" alt="${news.title}" loading="lazy">
                <span class="card-vibe-tag vibe-${news.vibe}">${news.vibeLabel}</span>
            </div>
            
            <div class="card-body">
                <div class="card-meta">
                    <span class="meta-item">
                        ${SVG_ICONS.user}
                        <span>كتب بقلم: ${news.author}</span>
                    </span>
                    <span class="meta-item">
                        ${SVG_ICONS.calendar}
                        <span>${news.date}</span>
                    </span>
                    <span class="meta-item">
                        ${SVG_ICONS.clock}
                        <span>قراءة: ${news.readTime}</span>
                    </span>
                </div>
                
                <h3 class="card-title">${news.title}</h3>
                <p class="card-excerpt">${news.excerpt}</p>
                
                <div class="card-actions">
                    <button class="read-more-btn" onclick="openStoryDetail('${news.title.replace(/'/g, "\\'")}', '${news.excerpt.replace(/'/g, "\\'")}')">
                        <span>اقرأ الخبر كاملاً</span>
                        ${SVG_ICONS.arrowLeft}
                    </button>
                    
                    <div class="interaction-box">
                        <button class="interaction-btn ${hasLiked ? 'active' : ''}" onclick="toggleLikeStory(${news.id}, this)">
                            ${SVG_ICONS.heart}
                            <span class="like-count">${news.likes + (hasLiked ? 1 : 0)}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
};

// Toggle Likes on Cards
window.toggleLikeStory = (id, btn) => {
    playChime();
    const countSpan = btn.querySelector('.like-count');
    let currentLikes = parseInt(countSpan.textContent);
    
    if (likedCards.has(id)) {
        likedCards.delete(id);
        btn.classList.remove('active');
        countSpan.textContent = currentLikes - 1;
        
        const heartSvg = btn.querySelector('svg');
        if (heartSvg) heartSvg.removeAttribute('fill');
    } else {
        likedCards.add(id);
        btn.classList.add('active');
        countSpan.textContent = currentLikes + 1;
        
        const heartSvg = btn.querySelector('svg');
        if (heartSvg) heartSvg.setAttribute('fill', '#F72585');
        
        // Micro floating heart burst
        const bubble = document.createElement('span');
        bubble.textContent = '❤️';
        bubble.style.position = 'absolute';
        bubble.style.left = '50%';
        bubble.style.top = '-10px';
        bubble.style.transform = 'translateX(-50%)';
        bubble.style.animation = 'arrowBounce 0.8s ease-out forwards';
        bubble.style.opacity = '1';
        btn.appendChild(bubble);
        setTimeout(() => bubble.remove(), 800);
    }
};

// Open news stories modal
window.openStoryDetail = (title, body) => {
    playChime();
    
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.backdropFilter = 'blur(10px)';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.padding = '2rem';
    overlay.style.animation = 'scaleIn 0.3s ease-out forwards';
    overlay.dir = 'rtl';
    
    overlay.innerHTML = `
        <div class="widget-card" style="width: 100%; max-width: 650px; background: var(--card-bg); max-height: 85vh; overflow-y: auto; text-align: right; box-shadow: var(--card-hover-shadow);">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--card-border); padding-bottom:1rem; margin-bottom:1.5rem;">
                <h3 style="font-family: var(--font-heading); font-size:1.6rem; color:var(--text-primary); margin:0; line-height:1.3;">${title}</h3>
                <button id="closeModalBtn" class="control-btn" style="flex-shrink:0; margin-right:1rem;">${SVG_ICONS.close}</button>
            </div>
            <div style="font-family: var(--font-body); font-size:1.1rem; color:var(--text-primary); line-height:1.8; margin-bottom:2rem;">
                <p>${body}</p>
                <br>
                <p>محتوى إضافي: يستمر مشروعنا في تغطية أحدث إنجازات وتحديات هذا التطور المذهل. شكراً لمتابعتكم منصة خبر سار المضيئة، حيث نبرز الجوانب الأكثر إشراقاً وتأثيراً في مسيرتنا الحضارية والإنسانية.</p>
            </div>
            <div style="text-align:left;">
                <button id="closeModalBtnFooter" class="portal-btn" style="padding:0.8rem 2rem; font-size:0.95rem; display:inline-flex; align-items:center; gap:0.5rem;">
                    <span>إغلاق النافذة</span>
                    ${SVG_ICONS.arrowLeft}
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    const closeModal = () => {
        playChime();
        overlay.style.animation = 'scaleIn 0.2s reverse ease-out forwards';
        setTimeout(() => overlay.remove(), 200);
    };
    
    overlay.querySelector('#closeModalBtn').addEventListener('click', closeModal);
    overlay.querySelector('#closeModalBtnFooter').addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
};

// --------------------------------------------------------------------------
// Page Load & Event Handlers Bindings
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    
    initLanternsCanvas();
    renderNewsFeed();
    
    const soundToggle = document.getElementById('soundToggle');
    const themeToggle = document.getElementById('themeToggle');
    
    const doseBtn = document.getElementById('doseBtn');
    const doseDisplay = document.getElementById('doseDisplay');
    const doseQuote = document.getElementById('doseQuote');
    const doseAuthor = document.getElementById('doseAuthor');
    
    const hopeForm = document.getElementById('hopeForm');
    const hopeName = document.getElementById('hopeName');
    const hopeText = document.getElementById('hopeText');
    
    const newsSearch = document.getElementById('newsSearch');
    const filterChips = document.querySelectorAll('.chip');
    
    const arabicMap = document.getElementById('arabicMap');
    const mapTooltip = document.getElementById('mapTooltip');
    const tooltipRegion = document.getElementById('tooltipRegion');
    const tooltipStory = document.getElementById('tooltipStory');
    
    // 2. Sound Toggle Controller
    soundToggle.addEventListener('click', () => {
        isSoundMuted = !isSoundMuted;
        
        if (isSoundMuted) {
            soundToggle.innerHTML = SVG_ICONS.soundOff;
        } else {
            soundToggle.innerHTML = SVG_ICONS.soundOn;
            playChime();
        }
    });
    
    // 3. Theme Toggle Controller
    themeToggle.addEventListener('click', () => {
        playChime();
        const body = document.body;
        
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggle.innerHTML = SVG_ICONS.moon;
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggle.innerHTML = SVG_ICONS.sun;
        }
    });
    
    // 4. Daily Dose of Joy Widget Handler
    doseBtn.addEventListener('click', () => {
        playChime();
        triggerSparkleBurst();
        
        const randomDose = DAILY_DOSES[Math.floor(Math.random() * DAILY_DOSES.length)];
        
        doseQuote.textContent = `"${randomDose.text}"`;
        doseAuthor.textContent = `— ${randomDose.author}`;
        
        doseDisplay.classList.remove('hidden');
        doseBtn.querySelector('span').textContent = "احصل على جرعة تفاؤل أخرى ✨";
    });
    
    // 5. Hope Board Lantern Launcher Submission
    hopeForm.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    hopeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = hopeName.value.trim();
        const text = hopeText.value.trim();
        
        if (!name || !text) return;
        
        playLanternSound();
        
        if (window.spawnCustomLantern) {
            window.spawnCustomLantern(text, name);
        }
        
        hopeName.value = '';
        hopeText.value = '';
        
        const btnText = hopeForm.querySelector('.hope-submit-btn span');
        const oldText = btnText.textContent;
        btnText.textContent = "صعد فانوس أملك إلى السماء! 🌟";
        
        setTimeout(() => {
            btnText.textContent = oldText;
        }, 3000);
    });
    
    // 6. SVG Map Interactive Node Events
    const glowingNodes = arabicMap.querySelectorAll('.glowing-node');
    
    glowingNodes.forEach(node => {
        node.addEventListener('mouseenter', (e) => {
            const region = node.getAttribute('data-region');
            const story = node.getAttribute('data-story');
            
            tooltipRegion.textContent = region;
            tooltipStory.textContent = story;
            
            mapTooltip.classList.remove('hidden');
            playChime();
        });
        
        node.addEventListener('mouseleave', () => {
            mapTooltip.classList.add('hidden');
        });
        
        node.addEventListener('click', (e) => {
            e.stopPropagation();
            const region = node.getAttribute('data-region');
            const story = node.getAttribute('data-story');
            
            tooltipRegion.textContent = region;
            tooltipStory.textContent = story;
            
            mapTooltip.classList.toggle('hidden');
            playChime();
        });
    });
    
    document.addEventListener('click', () => {
        if (mapTooltip) mapTooltip.classList.add('hidden');
    });
    
    // 7. Search Box Real-Time Filter
    newsSearch.addEventListener('input', (e) => {
        searchPattern = e.target.value.trim();
        renderNewsFeed();
    });
    
    // 8. Mood Category Chips Filter
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            playChime();
            
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            
            activeFilter = chip.getAttribute('data-filter');
            renderNewsFeed();
        });
    });
    
});
