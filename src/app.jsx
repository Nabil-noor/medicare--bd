import { useState, useEffect, useRef } from "react";

// ─── PALETTE ─────────────────────────────────────────────────────────────────
const G = {
  teal:"#0d9488", tealDark:"#0f766e", tealLight:"#99f6e4",
  navy:"#0f172a", navyMid:"#1e293b", navyLight:"#334155",
  slate:"#64748b", white:"#f8fafc", gold:"#f59e0b",
  rose:"#f43f5e", emerald:"#10b981", sky:"#38bdf8", purple:"#a78bfa",
  red:"#ef4444", orange:"#f97316",
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const injectStyles = () => {
  if (document.getElementById("hms-styles")) return;
  const s = document.createElement("style");
  s.id = "hms-styles";
  s.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--teal:#0d9488;--teal-dark:#0f766e;--navy:#0f172a;--gold:#f59e0b;--rose:#f43f5e;--emerald:#10b981;--sky:#38bdf8;--purple:#a78bfa;}
html{scroll-behavior:smooth;}
body.hms-dark{--bg:#080e1a;--surface:#0f1829;--surface2:#182035;--surface3:#1e2a42;--border:rgba(255,255,255,0.07);--text:#e2e8f0;--text2:#8896b0;}
body.hms-light{--bg:#eef5fb;--surface:#ffffff;--surface2:#f1f7ff;--surface3:#e8f0fe;--border:rgba(15,23,42,0.07);--text:#0f172a;--text2:#475569;}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);transition:background .3s,color .3s;}
.syne{font-family:'Syne',sans-serif;}
::-webkit-scrollbar{width:5px;height:5px;}
::-webkit-scrollbar-track{background:var(--surface);}
::-webkit-scrollbar-thumb{background:#0d9488;border-radius:3px;}
@keyframes fadeUp{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:translateY(0);}}
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:.35;}}
@keyframes spin{to{transform:rotate(360deg);}}
@keyframes shimmer{0%{background-position:-200% 0;}100%{background-position:200% 0;}}
@keyframes ripple{0%{transform:scale(0);opacity:.6;}100%{transform:scale(4);opacity:0;}}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
@keyframes gradX{0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}
@keyframes nIn{from{transform:translateX(120%);opacity:0;}to{transform:translateX(0);opacity:1;}}
@keyframes nOut{from{opacity:1;}to{opacity:0;transform:translateX(120%);}}
@keyframes emergPulse{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.5);}70%{box-shadow:0 0 0 12px rgba(239,68,68,0);}}
.fade-up{animation:fadeUp .45s ease both;}
.fade-in{animation:fadeIn .35s ease both;}
.a-float{animation:float 3.2s ease-in-out infinite;}
.a-spin{animation:spin 1s linear infinite;}
.a-pulse{animation:pulse 1.4s ease infinite;}
.emerg-pulse{animation:emergPulse 1.5s infinite;}
.skeleton{background:linear-gradient(90deg,var(--surface2) 25%,var(--border) 50%,var(--surface2) 75%);background-size:200% 100%;animation:shimmer 1.4s infinite;border-radius:8px;}
.glass{background:rgba(255,255,255,0.035);backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:20px;}
body.hms-light .glass{background:rgba(255,255,255,0.72);border:1px solid rgba(0,0,0,0.055);}
.grad-text{background:linear-gradient(135deg,#0d9488,#38bdf8,#a78bfa);background-size:200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradX 4s ease infinite;}
.hero-mesh{position:absolute;inset:0;overflow:hidden;pointer-events:none;}
.hero-mesh::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 20% 30%,rgba(13,148,136,.22) 0%,transparent 60%),radial-gradient(ellipse 40% 40% at 80% 70%,rgba(167,139,250,.18) 0%,transparent 60%),radial-gradient(ellipse 50% 50% at 60% 20%,rgba(56,189,248,.12) 0%,transparent 60%);}
.btn-rip{position:relative;overflow:hidden;}
.btn-rip::after{content:'';position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px;background:rgba(255,255,255,.4);border-radius:50%;transform:scale(0);opacity:0;}
.btn-rip:active::after{animation:ripple .5s ease-out;}
.badge{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:600;}
.nav-link{color:var(--text2);font-size:13.5px;font-weight:500;padding:6px 13px;border-radius:8px;cursor:pointer;transition:color .2s,background .2s;}
.nav-link:hover,.nav-link.active{color:var(--teal);background:rgba(13,148,136,.09);}
.tab-btn{padding:9px 18px;font-size:13px;font-weight:600;border-radius:10px;cursor:pointer;transition:all .2s;white-space:nowrap;color:var(--text2);background:transparent;border:none;}
.tab-btn.active{background:var(--teal);color:#fff;}
.tab-btn:hover:not(.active){background:var(--surface2);color:var(--text);}
.hms-input{width:100%;padding:11px 15px;border-radius:12px;font-size:14px;background:var(--surface2);border:1.5px solid var(--border);color:var(--text);outline:none;transition:border-color .2s,box-shadow .2s;font-family:'DM Sans',sans-serif;}
.hms-input:focus{border-color:#0d9488;box-shadow:0 0 0 3px rgba(13,148,136,.13);}
.hms-input::placeholder{color:var(--text2);}
.hms-select{padding:9px 13px;border-radius:10px;font-size:13px;background:var(--surface2);border:1.5px solid var(--border);color:var(--text);outline:none;cursor:pointer;font-family:'DM Sans',sans-serif;}
.card-h{transition:transform .22s,box-shadow .22s;cursor:pointer;}
.card-h:hover{transform:translateY(-4px);box-shadow:0 18px 55px rgba(0,0,0,.22);}
.notif-in{animation:nIn .38s cubic-bezier(.34,1.56,.64,1) both;}
.scroll-x{overflow-x:auto;scrollbar-width:none;}
.scroll-x::-webkit-scrollbar{display:none;}
.chart-bar{background:linear-gradient(180deg,#0d9488 0%,rgba(13,148,136,.28) 100%);border-radius:6px 6px 0 0;transition:height .85s cubic-bezier(.34,1.56,.64,1);}
.chat-msg{max-width:78%;word-break:break-word;}
.chat-msg.user{background:#0d9488;color:#fff;border-radius:18px 18px 4px 18px;}
.chat-msg.bot{background:var(--surface2);color:var(--text);border-radius:18px 18px 18px 4px;}
.sidebar-item{display:flex;align-items:center;gap:11px;padding:10px 13px;border-radius:10px;cursor:pointer;transition:background .18s,color .18s;font-size:13.5px;font-weight:500;color:var(--text2);}
.sidebar-item:hover,.sidebar-item.active{background:rgba(13,148,136,.11);color:#0d9488;}
.cal-day{aspect-ratio:1;display:flex;align-items:center;justify-content:center;border-radius:7px;font-size:12px;cursor:pointer;transition:all .13s;font-weight:500;color:var(--text2);}
.cal-day:hover:not(.disabled){background:var(--surface2);color:var(--text);}
.cal-day.today{background:rgba(13,148,136,.14);color:#0d9488;font-weight:700;}
.cal-day.selected{background:#0d9488;color:#fff;font-weight:700;}
.cal-day.has-apt{position:relative;}
.cal-day.has-apt::after{content:'';position:absolute;bottom:3px;left:50%;transform:translateX(-50%);width:4px;height:4px;border-radius:50%;background:#f59e0b;}
.cal-day.disabled{opacity:.28;cursor:not-allowed;}
.progress-bar{height:5px;border-radius:3px;background:var(--surface2);overflow:hidden;}
.progress-fill{height:100%;border-radius:3px;transition:width 1s ease;}
.mic-active{animation:pulse 1s ease infinite;background:#f43f5e !important;}
.emerg-card{border:2px solid rgba(239,68,68,.4);background:rgba(239,68,68,.04);}
.emerg-badge{background:rgba(239,68,68,.15);color:#ef4444;}
@media(max-width:768px){.hide-m{display:none!important;}.m-full{width:100%!important;}}
`;
  document.head.appendChild(s);
};

// ─── UTILS ────────────────────────────────────────────────────────────────────
const rand = arr => arr[Math.floor(Math.random() * arr.length)];
const delay = ms => new Promise(r => setTimeout(r, ms));
const fmt = n => "৳" + n.toLocaleString("en-IN");

// ─── NOTIFICATIONS ────────────────────────────────────────────────────────────
let _nid = 1, _nset = null;
const notify = (msg, type = "info") => {
  const id = _nid++;
  if (_nset) _nset(p => [...p, { id, msg, type }]);
  setTimeout(() => { if (_nset) _nset(p => p.filter(n => n.id !== id)); }, 4000);
};
const NC = { info: G.sky, success: G.emerald, warning: G.gold, error: G.rose };
const NI = { info: "ℹ️", success: "✅", warning: "⚠️", error: "❌" };

const NotificationCenter = () => {
  const [notifs, setNotifs] = useState([]);
  useEffect(() => { _nset = setNotifs; return () => { _nset = null; }; }, []);
  return (
    <div style={{ position:"fixed", bottom:24, right:24, zIndex:9999, display:"flex", flexDirection:"column", gap:8, maxWidth:340 }}>
      {notifs.map(n => (
        <div key={n.id} className="notif-in" style={{ background:"var(--surface)", border:`1.5px solid ${NC[n.type]}44`, borderRadius:13, padding:"11px 15px", display:"flex", alignItems:"center", gap:9, boxShadow:`0 8px 30px ${NC[n.type]}1a` }}>
          <span style={{ fontSize:17 }}>{NI[n.type]}</span>
          <span style={{ fontSize:13, color:"var(--text)", fontWeight:500, flex:1 }}>{n.msg}</span>
          <span style={{ fontSize:16, cursor:"pointer", color:"var(--text2)" }} onClick={() => setNotifs(p => p.filter(x => x.id !== n.id))}>×</span>
        </div>
      ))}
    </div>
  );
};

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────
const Stars = ({ rating, size = 13 }) => (
  <span style={{ display:"inline-flex", gap:2 }}>
    {[1,2,3,4,5].map(s => <span key={s} style={{ fontSize:size, color: s <= Math.round(rating) ? G.gold : G.slate }}>★</span>)}
  </span>
);
const Badge = ({ label, color = G.teal }) => (
  <span className="badge" style={{ background:color+"22", color }}>● {label}</span>
);
const Spinner = () => (
  <div style={{ display:"flex", justifyContent:"center", padding:32 }}>
    <div className="a-spin" style={{ width:30, height:30, border:`3px solid rgba(13,148,136,.18)`, borderTopColor:G.teal, borderRadius:"50%" }} />
  </div>
);
const SkeletonCard = () => (
  <div className="glass" style={{ padding:20, borderRadius:16 }}>
    <div style={{ display:"flex", gap:14, marginBottom:14 }}>
      <div className="skeleton" style={{ width:60, height:60, borderRadius:"50%", flexShrink:0 }} />
      <div style={{ flex:1 }}>
        <div className="skeleton" style={{ height:14, marginBottom:8, width:"60%" }} />
        <div className="skeleton" style={{ height:11, width:"40%" }} />
      </div>
    </div>
    <div className="skeleton" style={{ height:11, marginBottom:7 }} />
    <div className="skeleton" style={{ height:11, width:"75%" }} />
  </div>
);

// ─── DOCTOR AVATAR ────────────────────────────────────────────────────────────
const AVATAR_STYLES = ["personas","adventurer","avataaars","lorelei","micah","notionists","open-peeps","pixel-art"];
const doctorAvatar = (seed, style) =>
  `https://api.dicebear.com/8.x/${style}/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&radius=50`;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SPECIALIZATIONS = [
  { id:"cardiology",    name:"কার্ডিওলজি (Cardiology)",     en:"Cardiology",     icon:"🫀", color:"#f43f5e", desc:"Heart & cardiovascular" },
  { id:"neurology",     name:"নিউরোলজি (Neurology)",         en:"Neurology",      icon:"🧠", color:"#a78bfa", desc:"Brain & nervous system" },
  { id:"orthopedics",   name:"অর্থোপেডিক্স (Orthopedics)",  en:"Orthopedics",    icon:"🦴", color:"#f59e0b", desc:"Bones, joints & muscles" },
  { id:"pediatrics",    name:"শিশু বিভাগ (Pediatrics)",      en:"Pediatrics",     icon:"👶", color:"#38bdf8", desc:"Children's health" },
  { id:"dermatology",   name:"চর্মরোগ (Dermatology)",         en:"Dermatology",    icon:"🧬", color:"#fb923c", desc:"Skin, hair & nails" },
  { id:"ophthalmology", name:"চক্ষু বিভাগ (Ophthalmology)",  en:"Ophthalmology",  icon:"👁️", color:"#34d399", desc:"Eyes & vision" },
  { id:"psychiatry",    name:"মানসিক রোগ (Psychiatry)",       en:"Psychiatry",     icon:"🧩", color:"#c084fc", desc:"Mental health" },
  { id:"oncology",      name:"অনকোলজি (Oncology)",           en:"Oncology",       icon:"🔬", color:"#f87171", desc:"Cancer treatment" },
  { id:"gastro",        name:"গ্যাস্ট্রো (Gastroenterology)", en:"Gastroenterology",icon:"🍃",color:"#4ade80",desc:"Digestive system" },
  { id:"endocrinology", name:"এন্ডোক্রাইন (Endocrinology)",  en:"Endocrinology",  icon:"⚗️", color:"#fbbf24", desc:"Hormones & metabolism" },
  { id:"pulmonology",   name:"বক্ষ বিভাগ (Pulmonology)",     en:"Pulmonology",    icon:"🫁", color:"#60a5fa", desc:"Lungs & respiratory" },
  { id:"urology",       name:"ইউরোলজি (Urology)",            en:"Urology",        icon:"💧", color:"#2dd4bf", desc:"Urinary system" },
  { id:"gynecology",    name:"স্ত্রীরোগ (Gynecology)",        en:"Gynecology",     icon:"🌸", color:"#f472b6", desc:"Women's health" },
  { id:"ent",           name:"নাক-কান-গলা (ENT)",             en:"ENT",            icon:"👂", color:"#a3e635", desc:"Ear, nose & throat" },
  { id:"general",       name:"সাধারণ চিকিৎসা (General)",     en:"General Medicine",icon:"🏥",color:"#94a3b8",desc:"Primary care" },
];

const BD_DISTRICTS = ["ঢাকা (Dhaka)","চট্টগ্রাম (Chittagong)","সিলেট (Sylhet)","রাজশাহী (Rajshahi)","খুলনা (Khulna)","ময়মনসিংহ (Mymensingh)","বরিশাল (Barisal)","রংপুর (Rangpur)","কুমিল্লা (Comilla)","নারায়ণগঞ্জ (Narayanganj)"];

const BD_HOSPITALS_DATA = [
  { id:1,  name:"ঢাকা মেডিকেল কলেজ হাসপাতাল",   en:"Dhaka Medical College Hospital",    district:"ঢাকা (Dhaka)",       address:"Bakshibazar, Dhaka-1000",      emergency:true,  icu:45, beds:2600, rating:4.3, distance:2.1,  image:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=80", phone:"01711-123456", ambulance:true },
  { id:2,  name:"বঙ্গবন্ধু শেখ মুজিব মেডিকেল",    en:"BSMMU Hospital",                    district:"ঢাকা (Dhaka)",       address:"Shahbag, Dhaka-1000",          emergency:true,  icu:60, beds:1900, rating:4.5, distance:3.4,  image:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80", phone:"01711-654321", ambulance:true },
  { id:3,  name:"স্কয়ার হাসপাতাল",               en:"Square Hospital",                   district:"ঢাকা (Dhaka)",       address:"West Panthapath, Dhaka-1205",  emergency:true,  icu:30, beds:450,  rating:4.7, distance:5.0,  image:"https://images.unsplash.com/photo-1580281657702-257584239a55?w=400&q=80", phone:"01811-111222", ambulance:true },
  { id:4,  name:"ইউনাইটেড হাসপাতাল",              en:"United Hospital",                   district:"ঢাকা (Dhaka)",       address:"Gulshan-2, Dhaka-1212",        emergency:true,  icu:28, beds:400,  rating:4.6, distance:7.2,  image:"https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80", phone:"01912-222333", ambulance:true },
  { id:5,  name:"অ্যাপোলো হাসপাতাল ঢাকা",         en:"Apollo Hospitals Dhaka",            district:"ঢাকা (Dhaka)",       address:"Plot 81, Bashundhara, Dhaka",  emergency:true,  icu:35, beds:500,  rating:4.8, distance:9.5,  image:"https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=80", phone:"01611-333444", ambulance:true },
  { id:6,  name:"চট্টগ্রাম মেডিকেল কলেজ",         en:"Chittagong Medical College",        district:"চট্টগ্রাম (Chittagong)",address:"K B Fazlul Kader Road, CTG", emergency:true,  icu:40, beds:1800, rating:4.2, distance:12.3, image:"https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&q=80", phone:"01711-555666", ambulance:true },
  { id:7,  name:"সিলেট এম এ জি ওসমানী",           en:"MAG Osmani Medical College",        district:"সিলেট (Sylhet)",     address:"Mirabazar, Sylhet-3100",       emergency:true,  icu:25, beds:1200, rating:4.1, distance:18.7, image:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&q=80", phone:"01711-777888", ambulance:true },
  { id:8,  name:"ল্যাব এইড হাসপাতাল",             en:"Lab Aid Hospital",                  district:"ঢাকা (Dhaka)",       address:"House 1, Road 4, Dhanmondi",   emergency:false, icu:15, beds:250,  rating:4.4, distance:6.1,  image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80", phone:"01811-999000", ambulance:false },
  { id:9,  name:"রাজশাহী মেডিকেল কলেজ",           en:"Rajshahi Medical College",          district:"রাজশাহী (Rajshahi)", address:"Laxmipur, Rajshahi-6000",      emergency:true,  icu:20, beds:1400, rating:4.0, distance:24.5, image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80", phone:"01711-101112", ambulance:true },
  { id:10, name:"খুলনা মেডিকেল কলেজ",             en:"Khulna Medical College",            district:"খুলনা (Khulna)",     address:"D.T Road, Khulna-9000",        emergency:true,  icu:18, beds:900,  rating:4.1, distance:30.2, image:"https://images.unsplash.com/photo-1632923253184-5f5e20c96e53?w=400&q=80", phone:"01711-131415", ambulance:true },
];

const BD_DOCTOR_NAMES = [
  ["ডা. রহিম উদ্দিন আহমেদ","ডা. করিম হোসেন","ডা. নাজমা বেগম","ডা. শফিকুল ইসলাম"],
  ["ডা. ফারহানা আক্তার","ডা. মাহবুবুর রহমান","ডা. সালমা খানম","ডা. আব্দুল কাদের"],
  ["ডা. তাহমিনা পারভীন","ডা. জাহাঙ্গীর আলম","ডা. মৌসুমী হক","ডা. ইমরান হোসেন"],
  ["ডা. নাসরিন সুলতানা","ডা. কামাল উদ্দিন","ডা. রুমা বেগম","ডা. আশরাফুল হক"],
  ["ডা. সাদিয়া ইসলাম","ডা. মোশারফ হোসেন","ডা. লায়লা আঞ্জুম","ডা. রফিকুল ইসলাম"],
  ["ডা. হাসিনা বেগম","ডা. আনিসুর রহমান","ডা. জেবুন্নেসা","ডা. মোহাম্মদ আলী"],
  ["ডা. দিলরুবা খানম","ডা. সিরাজুল ইসলাম","ডা. মাহফুজা বেগম","ডা. তৌফিকুর রহমান"],
];
const BD_DEGREES = ["MBBS, MD","MBBS, MS","MBBS, FCPS","MBBS, PhD","MD, FRCS","MBBS, DGO","MBBS, DCH","MBBS, MRCP"];
const BD_EXP = [5,7,8,10,12,14,15,18,20,22,25];
const BD_FEES = [500,600,700,800,1000,1200,1500,1800,2000,2500,3000];
const BD_AVAIL = ["সোম-শুক্র","সোম-শনি","মঙ্গল-শনি","বুধ-রবি","সোম-বুধ-শুক্র"];
const TIMES = ["9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM"];

let _did = 1;
const DOCTORS = SPECIALIZATIONS.flatMap((spec, si) => {
  const count = si < 8 ? 4 : 3;
  const names = BD_DOCTOR_NAMES[si % BD_DOCTOR_NAMES.length];
  return Array.from({ length: count }, (_, i) => {
    const id = _did++;
    const style = AVATAR_STYLES[(id - 1) % AVATAR_STYLES.length];
    return {
      id, name: names[i] || `ডা. রহমান-${id}`,
      specialization: spec.id, specName: spec.en,
      degree: BD_DEGREES[Math.floor(Math.random() * BD_DEGREES.length)],
      experience: BD_EXP[Math.floor(Math.random() * BD_EXP.length)],
      hospital: BD_HOSPITALS_DATA[Math.floor(Math.random() * BD_HOSPITALS_DATA.length)].name,
      hospitalId: (Math.floor(Math.random() * BD_HOSPITALS_DATA.length)) + 1,
      fee: BD_FEES[Math.floor(Math.random() * BD_FEES.length)],
      availability: BD_AVAIL[Math.floor(Math.random() * BD_AVAIL.length)],
      rating: +(3.7 + Math.random() * 1.3).toFixed(1),
      reviews: Math.floor(30 + Math.random() * 400),
      avatar: doctorAvatar(id * 7 + si * 3, style),
      bio: `${spec.en} specialist with ${BD_EXP[Math.floor(Math.random()*BD_EXP.length)]}+ years in Bangladesh's leading hospitals. Expert in advanced diagnostics and patient-centered care.`,
      languages: ["বাংলা", "English", Math.random() > .6 ? "হিন্দি" : null].filter(Boolean),
      nextSlot: ["আজ ২:০০ PM","আজ ৪:৩০ PM","আগামীকাল ১০:০০ AM","আগামীকাল ২:০০ PM","বৃহস্পতিবার ১১:০০ AM"][Math.floor(Math.random()*5)],
      district: rand(BD_DISTRICTS), online: Math.random() > .3,
    };
  });
});

const SYMPTOM_MAP = {
  "chest pain":"cardiology","heart":"cardiology","palpitation":"cardiology","হার্ট":"cardiology",
  "headache":"neurology","dizziness":"neurology","seizure":"neurology","মাথাব্যথা":"neurology","মাথা":"neurology",
  "joint pain":"orthopedics","back pain":"orthopedics","fracture":"orthopedics","হাড়":"orthopedics","হাঁটু":"orthopedics",
  "fever":"general","cold":"general","flu":"general","fatigue":"general","জ্বর":"general",
  "skin":"dermatology","rash":"dermatology","eczema":"dermatology","চামড়া":"dermatology","ত্বক":"dermatology",
  "vision":"ophthalmology","eye":"ophthalmology","blurry":"ophthalmology","চোখ":"ophthalmology",
  "anxiety":"psychiatry","depression":"psychiatry","insomnia":"psychiatry","মানসিক":"psychiatry",
  "stomach":"gastro","nausea":"gastro","diarrhea":"gastro","পেট":"gastro","বমি":"gastro",
  "cough":"pulmonology","asthma":"pulmonology","breathing":"pulmonology","শ্বাস":"pulmonology","ফুসফুস":"pulmonology",
  "diabetes":"endocrinology","thyroid":"endocrinology","ডায়াবেটিস":"endocrinology","থাইরয়েড":"endocrinology",
  "child":"pediatrics","infant":"pediatrics","শিশু":"pediatrics",
  "cancer":"oncology","tumor":"oncology","ক্যান্সার":"oncology",
  "kidney":"urology","bladder":"urology","কিডনি":"urology",
  "period":"gynecology","pregnancy":"gynecology","গর্ভ":"gynecology","মহিলা":"gynecology",
  "ear":"ent","nose":"ent","throat":"ent","কান":"ent","গলা":"ent","নাক":"ent",
};

const EMERG_KEYWORDS = ["chest pain","heart attack","stroke","seizure","unconscious","bleeding","fracture","difficulty breathing","বুকে ব্যথা","হার্ট অ্যাটাক","স্ট্রোক","অজ্ঞান","রক্তপাত"];

const SAMPLE_APPOINTMENTS = [
  { id:1, patient:"আরিফ হোসেন", doctor:"ডা. নাজমা বেগম",    spec:"Cardiology",     date:"2026-05-08", time:"10:00 AM", status:"confirmed", fee:1500, token:"DHK-2345" },
  { id:2, patient:"সুমাইয়া খানম",doctor:"ডা. করিম হোসেন",  spec:"Neurology",      date:"2026-05-09", time:"2:00 PM",  status:"pending",   fee:1200, token:"DHK-2346" },
  { id:3, patient:"রাহেলা বেগম", doctor:"ডা. ফারহানা আক্তার",spec:"Cardiology",    date:"2026-05-07", time:"11:30 AM", status:"completed",  fee:2000, token:"DHK-2347" },
  { id:4, patient:"তানভীর আহমেদ",doctor:"ডা. মাহবুবুর রহমান",spec:"Orthopedics",  date:"2026-05-10", time:"9:00 AM",  status:"confirmed",  fee:800,  token:"DHK-2348" },
  { id:5, patient:"মিম আক্তার",  doctor:"ডা. সালমা খানম",   spec:"General Medicine",date:"2026-05-06",time:"3:30 PM",  status:"cancelled",  fee:600,  token:"DHK-2349" },
];

const CHAT_BD = {
  greeting:["স্বাগতম! আমি MediBot 🤖 আপনাকে কীভাবে সাহায্য করতে পারি?","হ্যালো! আমি আপনার ভার্চুয়াল স্বাস্থ্য সহকারী। আজ আপনার সমস্যা কী?"],
  symptoms:["আপনার লক্ষণগুলো বুঝতে পারছি। সঠিক বিশেষজ্ঞ খুঁজে পেতে Appointments ট্যাবে যান।","এই লক্ষণগুলো গুরুত্বপূর্ণ। আমাদের AI আপনার জন্য সেরা ডাক্তার সাজেস্ট করবে।"],
  appointment:["অ্যাপয়েন্টমেন্ট বুক করতে Appointments ট্যাবে যান এবং আপনার পছন্দের ডাক্তার বেছে নিন।","আমাদের স্মার্ট ক্যালেন্ডার থেকে সুবিধাজনক সময় বেছে নিন।"],
  emergency:["⚠️ জরুরি অবস্থায় এখনই Emergency ট্যাবে যান অথবা ৯৯৯ নম্বরে কল করুন!","জরুরি পরিস্থিতিতে সবচেয়ে কাছের হাসপাতালে যান। Emergency বাটন ব্যবহার করুন।"],
  default:["আপনার সমস্যা বর্ণনা করুন, আমি সঠিক বিশেষজ্ঞ খুঁজে দেব।","আমি ২৪/৭ আপনার সেবায় আছি। লক্ষণ লিখুন বা Emergency সাহায্যের জন্য জিজ্ঞেস করুন।"],
};

// ─── HEADER ───────────────────────────────────────────────────────────────────
const Header = ({ page, setPage, dark, setDark, role, setRole }) => {
  const [mob, setMob] = useState(false);
  const pages = ["Home","Doctors","Appointments","Emergency","Dashboard"];
  return (
    <header style={{ position:"sticky", top:0, zIndex:200, background:dark?"rgba(8,14,26,.88)":"rgba(238,245,251,.88)", backdropFilter:"blur(22px)", borderBottom:"1px solid var(--border)", padding:"0 22px", height:66, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer" }} onClick={() => setPage("Home")}>
        <div style={{ width:38, height:38, borderRadius:10, background:`linear-gradient(135deg,${G.teal},${G.sky})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>🏥</div>
        <span className="syne" style={{ fontSize:19, fontWeight:800, color:"var(--text)" }}>Medi<span style={{ color:G.teal }}>Care BD</span></span>
      </div>
      <nav className="hide-m" style={{ display:"flex", gap:3 }}>
        {pages.map(p => (
          <span key={p} className={`nav-link ${page===p?"active":""}`} onClick={() => setPage(p)}
            style={{ color: p==="Emergency" ? (page===p?undefined:G.rose) : undefined }}>
            {p==="Emergency" ? "🚨 "+p : p}
          </span>
        ))}
      </nav>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <select className="hms-select hide-m" value={role} onChange={e => { setRole(e.target.value); notify(`${e.target.value} ভিউতে পরিবর্তন হয়েছে`, "info"); }} style={{ fontSize:12, padding:"5px 9px" }}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Hospital Admin</option>
          <option value="superadmin">Super Admin</option>
        </select>
        <button onClick={() => { setDark(d=>!d); notify(dark?"লাইট মোড চালু":"ডার্ক মোড চালু","info"); }} style={{ background:"var(--surface2)", border:"none", cursor:"pointer", borderRadius:8, width:35, height:35, fontSize:17, color:"var(--text)" }}>{dark?"☀️":"🌙"}</button>
        <button onClick={() => notify("কোনো নতুন বিজ্ঞপ্তি নেই","info")} style={{ background:"var(--surface2)", border:"none", cursor:"pointer", borderRadius:8, width:35, height:35, fontSize:15, color:"var(--text)", position:"relative" }}>
          🔔<span style={{ position:"absolute", top:4, right:4, width:7, height:7, borderRadius:"50%", background:G.rose }} />
        </button>
        <div style={{ width:35, height:35, borderRadius:8, background:`linear-gradient(135deg,${G.teal},${G.purple})`, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }} onClick={() => notify("প্রোফাইল!","info")}>👤</div>
        <button style={{ background:"none", border:"none", cursor:"pointer", fontSize:22, color:"var(--text)" }} onClick={() => setMob(m=>!m)}>☰</button>
      </div>
      {mob && (
        <div style={{ position:"absolute", top:66, left:0, right:0, background:"var(--surface)", borderBottom:"1px solid var(--border)", padding:14, display:"flex", flexDirection:"column", gap:4, zIndex:300 }}>
          {pages.map(p => <span key={p} className={`nav-link ${page===p?"active":""}`} onClick={() => { setPage(p); setMob(false); }}>{p}</span>)}
        </div>
      )}
    </header>
  );
};

// ─── HOME PAGE ─────────────────────────────────────────────────────────────────
const HomePage = ({ setPage, setSelectedSpec }) => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const testimonials = [
    { name:"আরিফা বেগম", text:"অবিশ্বাস্য সেবা! মাত্র কয়েক মিনিটে সেরা কার্ডিওলজিস্ট খুঁজে পেলাম।", rating:5, av:"👩" },
    { name:"রাকিবুল হাসান", text:"AI লক্ষণ বিশ্লেষণ অসাধারণ কাজ করে। সঠিক বিশেষজ্ঞের কাছে পৌঁছাতে পেরেছি।", rating:5, av:"👨" },
    { name:"ডা. সুমাইয়া", text:"বাংলাদেশের সবচেয়ে আধুনিক হেলথকেয়ার প্ল্যাটফর্ম। অত্যন্ত সহজে ব্যবহারযোগ্য।", rating:5, av:"👩‍⚕️" },
  ];
  useEffect(() => { const t = setInterval(() => setTestimonialIdx(c => (c+1) % testimonials.length), 4000); return () => clearInterval(t); }, []);
  const stats = [
    { v:"৫০+",   l:"বিশেষজ্ঞ ডাক্তার", icon:"👨‍⚕️" },
    { v:"১৫+",   l:"বিশেষজ্ঞ বিভাগ",  icon:"🔬" },
    { v:"১০+",   l:"সংযুক্ত হাসপাতাল", icon:"🏥" },
    { v:"২৪/৭",  l:"জরুরি সেবা",       icon:"🚨" },
  ];
  return (
    <div>
      <section style={{ position:"relative", minHeight:"calc(100vh - 66px)", display:"flex", alignItems:"center", overflow:"hidden", padding:"60px 24px" }}>
        <div className="hero-mesh" />
        {[{top:"15%",right:"8%",size:260,c:`${G.teal}14`},{top:"58%",right:"4%",size:170,c:`${G.purple}10`},{top:"28%",left:"4%",size:110,c:`${G.sky}0d`}].map((o,i)=>(
          <div key={i} className="a-float" style={{ position:"absolute",...o, width:o.size, height:o.size, borderRadius:"50%", background:o.c, filter:"blur(38px)", animationDelay:`${i}s`, pointerEvents:"none" }} />
        ))}
        <div style={{ maxWidth:1200, margin:"0 auto", width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:56, alignItems:"center" }}>
          <div className="fade-up">
            <div className="badge" style={{ background:`${G.teal}20`, color:G.teal, marginBottom:18, fontSize:11 }}>🇧🇩 বাংলাদেশের কেন্দ্রীয় স্বাস্থ্যসেবা প্ল্যাটফর্ম</div>
            <h1 className="syne" style={{ fontSize:"clamp(32px,5vw,60px)", fontWeight:800, lineHeight:1.12, marginBottom:22, color:"var(--text)" }}>
              আপনার স্বাস্থ্য,<br /><span className="grad-text">আমাদের অগ্রাধিকার</span>
            </h1>
            <p style={{ fontSize:16, color:"var(--text2)", lineHeight:1.75, marginBottom:36, maxWidth:460 }}>
              AI-চালিত লক্ষণ বিশ্লেষণ, স্মার্ট ডাক্তার সুপারিশ এবং সারা বাংলাদেশে তাৎক্ষণিক অ্যাপয়েন্টমেন্ট বুকিং।
            </p>
            <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              <button className="btn-rip" onClick={() => setPage("Appointments")} style={{ padding:"13px 30px", borderRadius:13, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, color:"#fff", border:"none", cursor:"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:`0 8px 28px ${G.teal}40` }}>অ্যাপয়েন্টমেন্ট বুক করুন →</button>
              <button onClick={() => setPage("Emergency")} style={{ padding:"13px 30px", borderRadius:13, background:`rgba(239,68,68,.12)`, color:G.rose, border:`1.5px solid ${G.rose}44`, cursor:"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>🚨 জরুরি সেবা</button>
            </div>
            <div style={{ display:"flex", gap:28, marginTop:44, flexWrap:"wrap" }}>
              {[["১০হাজার+","রোগী"],["৫০+","বিশেষজ্ঞ"],["৪.৯★","গড় রেটিং"]].map(([v,l])=>(
                <div key={l}><div className="syne" style={{ fontSize:22, fontWeight:800, color:G.teal }}>{v}</div><div style={{ fontSize:12, color:"var(--text2)" }}>{l}</div></div>
              ))}
            </div>
          </div>
          <div className="hide-m" style={{ position:"relative", height:480 }}>
            <div className="glass a-float" style={{ position:"absolute", top:"12%", left:"8%", right:"8%", padding:22, borderRadius:20 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
                <img src={doctorAvatar(42,"personas")} style={{ width:52, height:52, borderRadius:"50%", border:`2px solid ${G.teal}44` }} alt="" />
                <div>
                  <div style={{ fontWeight:700, fontSize:15, color:"var(--text)" }}>ডা. নাজমা বেগম</div>
                  <div style={{ fontSize:12, color:G.teal }}>সিনিয়র কার্ডিওলজিস্ট</div>
                </div>
                <Badge label="অনলাইন" color={G.emerald} />
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", padding:"11px 0", borderTop:"1px solid var(--border)" }}>
                {[["⭐ ৪.৯","রেটিং"],[`৳ ১,৫০০`,"ফি"],["📅 আজ","পরের স্লট"]].map(([v,l])=>(
                  <div key={l} style={{ textAlign:"center" }}><div style={{ fontSize:13, fontWeight:600, color:"var(--text)" }}>{v}</div><div style={{ fontSize:10, color:"var(--text2)" }}>{l}</div></div>
                ))}
              </div>
            </div>
            <div className="glass" style={{ position:"absolute", top:"4%", right:"4%", padding:"9px 14px", borderRadius:11, fontSize:12, fontWeight:600, color:"var(--text)" }}>🤖 AI লক্ষণ বিশ্লেষক</div>
            <div className="glass" style={{ position:"absolute", bottom:"14%", left:"4%", padding:"9px 14px", borderRadius:11, fontSize:12, fontWeight:600, color:"var(--text)" }}>📅 স্মার্ট শিডিউলিং</div>
            <div className="glass emerg-pulse" style={{ position:"absolute", bottom:"4%", right:"8%", padding:"9px 14px", borderRadius:11, fontSize:12, fontWeight:600, color:G.rose, border:`1.5px solid ${G.rose}44` }}>🚨 জরুরি মোড সক্রিয়</div>
          </div>
        </div>
      </section>

      <section style={{ padding:"50px 24px", background:"var(--surface)" }}>
        <div style={{ maxWidth:960, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:20 }}>
          {stats.map((s,i)=>(
            <div key={i} className="glass card-h fade-up" style={{ padding:26, textAlign:"center", animationDelay:`${i*.1}s` }}>
              <div style={{ fontSize:38, marginBottom:10 }}>{s.icon}</div>
              <div className="syne" style={{ fontSize:32, fontWeight:800, color:G.teal }}>{s.v}</div>
              <div style={{ fontSize:13, color:"var(--text2)", marginTop:3 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding:"70px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:44 }}>
            <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)" }}>আমাদের <span className="grad-text">বিশেষজ্ঞ বিভাগ</span></h2>
            <p style={{ color:"var(--text2)", fontSize:15, marginTop:10 }}>সকল প্রধান চিকিৎসা বিভাগে বিশ্বমানের সেবা</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(165px,1fr))", gap:14 }}>
            {SPECIALIZATIONS.map((spec,i)=>(
              <div key={spec.id} className="glass card-h fade-up" style={{ padding:"18px 14px", textAlign:"center", cursor:"pointer", animationDelay:`${i*.04}s`, borderTop:`3px solid ${spec.color}` }} onClick={() => { setSelectedSpec(spec.id); setPage("Doctors"); }}>
                <div style={{ fontSize:28, marginBottom:8 }}>{spec.icon}</div>
                <div style={{ fontWeight:700, fontSize:13, color:"var(--text)", marginBottom:3 }}>{spec.en}</div>
                <div style={{ fontSize:10, color:"var(--text2)", marginBottom:6 }}>{spec.desc}</div>
                <div style={{ fontSize:11, color:spec.color, fontWeight:600 }}>{DOCTORS.filter(d=>d.specialization===spec.id).length} ডাক্তার →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"70px 24px", background:"var(--surface)" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:50 }}>
            <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)" }}>কীভাবে <span className="grad-text">কাজ করে</span></h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:28 }}>
            {[
              { step:"০১", title:"সমস্যা বর্ণনা করুন", desc:"টাইপ করুন, কথা বলুন বা ছবি আপলোড করুন", icon:"🩺" },
              { step:"০২", title:"AI বিশেষজ্ঞ সুপারিশ", desc:"স্মার্ট সিস্টেম সঠিক বিভাগ সুপারিশ করে", icon:"🤖" },
              { step:"০৩", title:"হাসপাতাল বেছে নিন", desc:"কাছের হাসপাতাল ও বিশেষজ্ঞ খুঁজুন", icon:"🏥" },
              { step:"০৪", title:"অ্যাপয়েন্টমেন্ট বুক", desc:"পছন্দের তারিখ ও সময় বেছে বুক করুন", icon:"📅" },
            ].map((s,i)=>(
              <div key={i} className="fade-up" style={{ textAlign:"center", position:"relative", animationDelay:`${i*.15}s` }}>
                <div style={{ width:68, height:68, borderRadius:"50%", background:`linear-gradient(135deg,${G.teal}22,${G.sky}22)`, border:`2px solid ${G.teal}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, margin:"0 auto 14px" }}>{s.icon}</div>
                <div className="syne" style={{ fontSize:11, fontWeight:700, color:G.teal, marginBottom:7, letterSpacing:2 }}>{s.step}</div>
                <div style={{ fontWeight:700, fontSize:15, color:"var(--text)", marginBottom:6 }}>{s.title}</div>
                <div style={{ fontSize:12, color:"var(--text2)", lineHeight:1.6 }}>{s.desc}</div>
                {i<3 && <div className="hide-m" style={{ position:"absolute", right:-14, top:"28%", fontSize:18, color:"var(--text2)" }}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"70px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:44 }}>
            <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)" }}>সংযুক্ত <span className="grad-text">হাসপাতালসমূহ</span></h2>
            <p style={{ color:"var(--text2)", fontSize:14, marginTop:8 }}>সারা বাংলাদেশের শীর্ষ হাসপাতাল একটি প্ল্যাটফর্মে</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:18 }}>
            {BD_HOSPITALS_DATA.slice(0,6).map(h=>(
              <div key={h.id} className="glass card-h" style={{ borderRadius:18, overflow:"hidden" }}>
                <div style={{ height:140, backgroundImage:`url(${h.image})`, backgroundSize:"cover", backgroundPosition:"center", position:"relative" }}>
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,.6),transparent)" }} />
                  {h.emergency && <div style={{ position:"absolute", top:10, right:10, background:G.rose, color:"#fff", fontSize:10, fontWeight:700, padding:"3px 9px", borderRadius:8 }}>🚨 EMERGENCY</div>}
                  <div style={{ position:"absolute", bottom:10, left:12, color:"#fff", fontWeight:700, fontSize:14 }}>{h.en}</div>
                </div>
                <div style={{ padding:"14px 16px" }}>
                  <div style={{ fontSize:12, color:"var(--text2)", marginBottom:6 }}>📍 {h.district}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                    <span style={{ fontSize:12, color:"var(--text2)" }}>🛏 {h.beds} শয্যা</span>
                    <span style={{ fontSize:12, color:"var(--text2)" }}>🏥 ICU: {h.icu}</span>
                    <span style={{ fontSize:12, color:G.teal, fontWeight:600 }}>⭐ {h.rating}</span>
                  </div>
                  <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                    {h.ambulance && <span style={{ fontSize:10, background:`${G.rose}18`, color:G.rose, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>🚑 অ্যাম্বুলেন্স</span>}
                    <span style={{ fontSize:10, background:`${G.teal}18`, color:G.teal, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>📍 {h.distance} কিমি</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"70px 24px", background:"var(--surface)" }}>
        <div style={{ maxWidth:680, margin:"0 auto", textAlign:"center" }}>
          <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)", marginBottom:44 }}>রোগীদের <span className="grad-text">অভিজ্ঞতা</span></h2>
          <div className="glass" style={{ padding:36 }}>
            <div style={{ fontSize:44, marginBottom:14 }}>{testimonials[testimonialIdx].av}</div>
            <Stars rating={testimonials[testimonialIdx].rating} size={18} />
            <p style={{ fontSize:16, color:"var(--text)", lineHeight:1.7, margin:"18px 0", fontStyle:"italic" }}>"{testimonials[testimonialIdx].text}"</p>
            <div style={{ fontWeight:700, color:G.teal }}>{testimonials[testimonialIdx].name}</div>
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:7, marginTop:20 }}>
            {testimonials.map((_,i)=>(
              <button key={i} onClick={() => setTestimonialIdx(i)} style={{ width:i===testimonialIdx?22:7, height:7, borderRadius:4, background:i===testimonialIdx?G.teal:"var(--surface2)", border:"none", cursor:"pointer", transition:"all .3s" }} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"70px 24px", textAlign:"center", background:`linear-gradient(135deg,${G.teal}12,${G.purple}08)` }}>
        <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)", marginBottom:14 }}>এখনই শুরু করুন — <span className="grad-text">বিনামূল্যে</span></h2>
        <p style={{ color:"var(--text2)", fontSize:15, marginBottom:28 }}>হাজারো রোগী ইতোমধ্যে MediCare BD ব্যবহার করছেন।</p>
        <button className="btn-rip" onClick={() => setPage("Appointments")} style={{ padding:"14px 36px", borderRadius:13, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, color:"#fff", border:"none", cursor:"pointer", fontSize:17, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:`0 10px 36px ${G.teal}40` }}>অ্যাপয়েন্টমেন্ট বুক করুন</button>
      </section>

      <footer style={{ background:"var(--surface)", borderTop:"1px solid var(--border)", padding:"36px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:28, marginBottom:28 }}>
          {[
            { title:"MediCare BD", items:["আমাদের সম্পর্কে","আমাদের দল","ক্যারিয়ার","প্রেস"] },
            { title:"সেবা", items:["অ্যাপয়েন্টমেন্ট","ডাক্তার খুঁজুন","জরুরি সেবা","টেলিমেডিসিন"] },
            { title:"বিশেষত্ব", items:["কার্ডিওলজি","নিউরোলজি","শিশু বিভাগ","অর্থোপেডিক্স"] },
            { title:"সহায়তা", items:["সাহায্য কেন্দ্র","গোপনীয়তা নীতি","সেবার শর্ত","যোগাযোগ"] },
          ].map(col=>(
            <div key={col.title}>
              <div className="syne" style={{ fontWeight:700, color:"var(--text)", marginBottom:14 }}>{col.title}</div>
              {col.items.map(item=>(
                <div key={item} style={{ fontSize:12, color:"var(--text2)", marginBottom:7, cursor:"pointer" }} onClick={() => notify(`${item} - শীঘ্রই আসছে!`,"info")}>{item}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid var(--border)", paddingTop:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
          <span style={{ fontSize:12, color:"var(--text2)" }}>© 2026 MediCare BD — বাংলাদেশের কেন্দ্রীয় স্বাস্থ্যসেবা প্ল্যাটফর্ম</span>
          <div style={{ display:"flex", gap:14 }}>
            {["🐦","💼","📘","📸"].map((ic,i)=><span key={i} style={{ fontSize:17, cursor:"pointer" }} onClick={() => notify("সোশ্যাল মিডিয়া!","info")}>{ic}</span>)}
          </div>
        </div>
      </footer>
    </div>
  );
};

// ─── DOCTORS PAGE ─────────────────────────────────────────────────────────────
const DoctorsPage = ({ selectedSpec, setSelectedSpec, onBookDoctor }) => {
  const [search, setSearch] = useState("");
  const [filterSpec, setFilterSpec] = useState(selectedSpec||"all");
  const [sortBy, setSortBy] = useState("rating");
  const [loading, setLoading] = useState(true);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [distFilter, setDistFilter] = useState("all");

  useEffect(() => { if (selectedSpec) setFilterSpec(selectedSpec); setTimeout(()=>setLoading(false),850); }, [selectedSpec]);

  const filtered = DOCTORS.filter(d => {
    const ms = !search || d.name.toLowerCase().includes(search.toLowerCase()) || d.specName.toLowerCase().includes(search.toLowerCase()) || d.hospital.includes(search);
    const msp = filterSpec==="all" || d.specialization===filterSpec;
    const mr = d.rating >= ratingFilter;
    const md = distFilter==="all" || d.district===distFilter;
    return ms && msp && mr && md;
  }).sort((a,b) => sortBy==="rating" ? b.rating-a.rating : sortBy==="fee" ? a.fee-b.fee : b.experience-a.experience);

  return (
    <div style={{ maxWidth:1280, margin:"0 auto", padding:"28px 22px" }}>
      <div style={{ marginBottom:28 }}>
        <h1 className="syne" style={{ fontSize:30, fontWeight:800, color:"var(--text)", marginBottom:6 }}>ডাক্তার <span className="grad-text">খুঁজুন</span></h1>
        <p style={{ color:"var(--text2)" }}>{filtered.length} জন ডাক্তার পাওয়া গেছে</p>
      </div>

      <div className="glass" style={{ padding:18, marginBottom:24, display:"flex", gap:12, flexWrap:"wrap", alignItems:"center" }}>
        <input className="hms-input" placeholder="🔍 ডাক্তার, বিভাগ বা হাসপাতাল খুঁজুন..." value={search} onChange={e=>setSearch(e.target.value)} style={{ flex:"1 1 220px" }} />
        <select className="hms-select" value={filterSpec} onChange={e=>{ setFilterSpec(e.target.value); setSelectedSpec(null); }}>
          <option value="all">সব বিভাগ</option>
          {SPECIALIZATIONS.map(s=><option key={s.id} value={s.id}>{s.en}</option>)}
        </select>
        <select className="hms-select" value={distFilter} onChange={e=>setDistFilter(e.target.value)}>
          <option value="all">সব জেলা</option>
          {BD_DISTRICTS.map(d=><option key={d} value={d}>{d}</option>)}
        </select>
        <select className="hms-select" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
          <option value="rating">সেরা রেটিং</option>
          <option value="fee">সর্বনিম্ন ফি</option>
          <option value="experience">সর্বাধিক অভিজ্ঞতা</option>
        </select>
        <select className="hms-select" value={ratingFilter} onChange={e=>setRatingFilter(+e.target.value)}>
          <option value={0}>যেকোনো রেটিং</option>
          <option value={4}>৪+ তারা</option>
          <option value={4.5}>৪.৫+ তারা</option>
        </select>
      </div>

      <div className="scroll-x" style={{ display:"flex", gap:7, marginBottom:24, paddingBottom:4 }}>
        <button className={`tab-btn ${filterSpec==="all"?"active":""}`} onClick={()=>{ setFilterSpec("all"); setSelectedSpec(null); }}>সব</button>
        {SPECIALIZATIONS.map(s=>(
          <button key={s.id} className={`tab-btn ${filterSpec===s.id?"active":""}`} onClick={()=>{ setFilterSpec(s.id); setSelectedSpec(s.id); }}>{s.icon} {s.en}</button>
        ))}
      </div>

      {loading ? (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))", gap:18 }}>{Array(8).fill(0).map((_,i)=><SkeletonCard key={i} />)}</div>
      ) : (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))", gap:18 }}>
          {filtered.map((doc,i)=>(
            <div key={doc.id} className="glass card-h fade-up" style={{ padding:22, borderRadius:20, animationDelay:`${Math.min(i,10)*.05}s` }}>
              <div style={{ display:"flex", gap:13, marginBottom:14 }}>
                <img src={doc.avatar} alt={doc.name} style={{ width:64, height:64, borderRadius:"50%", border:`2px solid ${G.teal}44`, objectFit:"cover", background:"var(--surface2)" }} />
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, fontSize:14, color:"var(--text)", marginBottom:2 }}>{doc.name}</div>
                  <div style={{ fontSize:11, color:G.teal, fontWeight:600, marginBottom:3 }}>{doc.specName}</div>
                  <div style={{ fontSize:10, color:"var(--text2)" }}>{doc.degree}</div>
                </div>
                <Badge label={doc.online?"অনলাইন":"অফলাইন"} color={doc.online?G.emerald:G.slate} />
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:11 }}>
                <Stars rating={doc.rating} />
                <span style={{ fontWeight:700, fontSize:13, color:"var(--text)" }}>{doc.rating}</span>
                <span style={{ fontSize:11, color:"var(--text2)" }}>({doc.reviews} রিভিউ)</span>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:13 }}>
                <span style={{ fontSize:10, background:"var(--surface2)", color:"var(--text2)", padding:"3px 7px", borderRadius:6 }}>🏥 {doc.hospital.slice(0,18)}…</span>
                <span style={{ fontSize:10, background:"var(--surface2)", color:"var(--text2)", padding:"3px 7px", borderRadius:6 }}>⏱ {doc.experience}বছর</span>
                <span style={{ fontSize:10, background:"var(--surface2)", color:"var(--text2)", padding:"3px 7px", borderRadius:6 }}>📅 {doc.availability}</span>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"11px 0", borderTop:"1px solid var(--border)", marginBottom:12 }}>
                <div><div style={{ fontSize:10, color:"var(--text2)" }}>পরামর্শ ফি</div><div style={{ fontWeight:800, fontSize:17, color:G.teal }}>{fmt(doc.fee)}</div></div>
                <div style={{ textAlign:"right" }}><div style={{ fontSize:10, color:"var(--text2)" }}>পরবর্তী সময়</div><div style={{ fontWeight:600, fontSize:12, color:G.emerald }}>{doc.nextSlot}</div></div>
              </div>
              <div style={{ display:"flex", gap:9 }}>
                <button onClick={()=>setSelectedDoc(doc)} style={{ flex:1, padding:"9px 0", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>প্রোফাইল দেখুন</button>
                <button className="btn-rip" onClick={()=>onBookDoctor(doc)} style={{ flex:2, padding:"9px 0", borderRadius:9, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>বুক করুন</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedDoc && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.65)", zIndex:500, display:"flex", alignItems:"center", justifyContent:"center", padding:22 }} onClick={()=>setSelectedDoc(null)}>
          <div className="glass fade-up" style={{ maxWidth:540, width:"100%", borderRadius:22, padding:30, maxHeight:"90vh", overflowY:"auto" }} onClick={e=>e.stopPropagation()}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"start", marginBottom:22 }}>
              <div style={{ display:"flex", gap:14, alignItems:"center" }}>
                <img src={selectedDoc.avatar} alt={selectedDoc.name} style={{ width:78, height:78, borderRadius:"50%", border:`3px solid ${G.teal}`, objectFit:"cover", background:"var(--surface2)" }} />
                <div>
                  <h3 className="syne" style={{ fontSize:20, fontWeight:800, color:"var(--text)", marginBottom:3 }}>{selectedDoc.name}</h3>
                  <div style={{ color:G.teal, fontWeight:600, marginBottom:3 }}>{selectedDoc.specName}</div>
                  <div style={{ fontSize:12, color:"var(--text2)" }}>{selectedDoc.degree}</div>
                </div>
              </div>
              <button onClick={()=>setSelectedDoc(null)} style={{ background:"none", border:"none", fontSize:22, cursor:"pointer", color:"var(--text2)" }}>×</button>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:13, marginBottom:18 }}>
              {[["অভিজ্ঞতা",`${selectedDoc.experience} বছর`],["পরামর্শ ফি",fmt(selectedDoc.fee)],["হাসপাতাল",selectedDoc.hospital.slice(0,22)+"…"],["সময়সূচি",selectedDoc.availability],["ভাষা",selectedDoc.languages.join(", ")],["পরবর্তী স্লট",selectedDoc.nextSlot],["জেলা",selectedDoc.district],["রেটিং",`${selectedDoc.rating}/৫`]].map(([k,v])=>(
                <div key={k} className="glass" style={{ padding:"11px 14px", borderRadius:11 }}>
                  <div style={{ fontSize:10, color:"var(--text2)", marginBottom:3 }}>{k}</div>
                  <div style={{ fontWeight:600, fontSize:13, color:"var(--text)" }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom:18 }}>
              <div style={{ fontWeight:600, marginBottom:6, color:"var(--text)" }}>পরিচিতি</div>
              <p style={{ fontSize:12, color:"var(--text2)", lineHeight:1.7 }}>{selectedDoc.bio}</p>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:18 }}>
              <Stars rating={selectedDoc.rating} size={17} />
              <span style={{ fontWeight:700, color:"var(--text)" }}>{selectedDoc.rating}/5</span>
              <span style={{ fontSize:12, color:"var(--text2)" }}>({selectedDoc.reviews} রোগীর রিভিউ)</span>
            </div>
            <button className="btn-rip" onClick={()=>{ onBookDoctor(selectedDoc); setSelectedDoc(null); }} style={{ width:"100%", padding:13, borderRadius:13, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:`0 7px 28px ${G.teal}40` }}>
              {selectedDoc.name} এর সাথে অ্যাপয়েন্টমেন্ট বুক করুন
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── EMERGENCY PAGE ───────────────────────────────────────────────────────────
const EmergencyPage = ({ onBookDoctor }) => {
  const [step, setStep] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  const [symptomText, setSymptomText] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [districtFilter, setDistrictFilter] = useState("all");
  const [sortHosp, setSortHosp] = useState("distance");
  const [micActive, setMicActive] = useState(false);
  const [emergencyMode, setEmergencyMode] = useState(false);
  const fileRef = useRef(null);

  const EMERG_LEVELS = {
    low:    { label:"কম (Low)",      color:G.emerald, icon:"🟢", msg:"এটি নিয়মিত পরামর্শের জন্য উপযুক্ত।" },
    medium: { label:"মাঝারি (Medium)",color:G.gold,    icon:"🟡", msg:"যত শীঘ্র সম্ভব ডাক্তার দেখানো উচিত।" },
    critical:{ label:"জরুরি (Critical)",color:G.rose,  icon:"🔴", msg:"⚠️ অবিলম্বে নিকটতম হাসপাতালে যান!" },
  };

  const IMAGE_TYPES = [
    { id:"injury",  label:"আঘাত / ক্ষত",      icon:"🤕", spec:"orthopedics", level:"medium" },
    { id:"skin",    label:"চর্মরোগ",            icon:"🧬", spec:"dermatology", level:"low" },
    { id:"xray",    label:"এক্স-রে / স্ক্যান", icon:"🔬", spec:"orthopedics", level:"medium" },
    { id:"report",  label:"মেডিকেল রিপোর্ট",   icon:"📄", spec:"general",     level:"low" },
    { id:"eye",     label:"চোখের সমস্যা",      icon:"👁️", spec:"ophthalmology",level:"low" },
    { id:"chest",   label:"বুকের সমস্যা",      icon:"🫀", spec:"cardiology",  level:"critical" },
    { id:"prescription",label:"প্রেসক্রিপশন", icon:"💊", spec:"general",     level:"low" },
  ];

  const [selectedImageType, setSelectedImageType] = useState(null);

  const analyzeImage = async () => {
    if (!imagePreview && !symptomText && !selectedImageType) { notify("ছবি আপলোড করুন বা লক্ষণ লিখুন","warning"); return; }
    setAnalyzing(true);
    await delay(2000);
    let spec = "general", level = "low";
    const lower = symptomText.toLowerCase();
    for (const [kw, s] of Object.entries(SYMPTOM_MAP)) { if (lower.includes(kw)) { spec = s; break; } }
    for (const ek of EMERG_KEYWORDS) { if (lower.includes(ek)) { level = "critical"; break; } }
    if (level !== "critical" && lower.length > 10) level = "medium";
    if (selectedImageType) { spec = IMAGE_TYPES.find(t=>t.id===selectedImageType)?.spec || spec; level = IMAGE_TYPES.find(t=>t.id===selectedImageType)?.level || level; }
    const specObj = SPECIALIZATIONS.find(s=>s.id===spec);
    setAnalysisResult({ spec, specObj, level, confidence: Math.floor(78 + Math.random()*20), possibleConditions: getPossibleConditions(spec), recommendations: getRecommendations(level) });
    setAnalyzing(false);
    if (level === "critical") setEmergencyMode(true);
    setStep(3);
    notify(level==="critical"?"🚨 জরুরি অবস্থা সনাক্ত! নিকটতম হাসপাতালে যান!":"বিশ্লেষণ সম্পন্ন! হাসপাতাল সুপারিশ দেখুন।", level==="critical"?"error":"success");
  };

  const getPossibleConditions = (spec) => ({
    cardiology:["করোনারি আর্টারি ডিজিজ","হার্ট ফেইলিউর","অ্যারিথমিয়া"],
    neurology:["মাইগ্রেন","স্ট্রোক সন্দেহ","মাথার আঘাত"],
    orthopedics:["হাড় ভাঙ্গা","জয়েন্ট স্থানচ্যুতি","মোচ"],
    dermatology:["একজিমা","সোরিয়াসিস","চর্মরোগ"],
    general:["ভাইরাল ফিভার","সাধারণ সর্দি-জ্বর","ডিহাইড্রেশন"],
    ophthalmology:["কনজাংটিভাইটিস","রেটিনাল সমস্যা","গ্লুকোমা"],
    pulmonology:["ব্রংকাইটিস","নিউমোনিয়া","অ্যাজমা"],
    gastro:["গ্যাস্ট্রাইটিস","আলসার","IBS"],
  }[spec] || ["প্রাথমিক পরীক্ষা প্রয়োজন"]);

  const getRecommendations = (level) => ({
    low:["নিয়মিত ডাক্তারের পরামর্শ নিন","প্রচুর পানি পান করুন","বিশ্রাম নিন"],
    medium:["২৪ ঘণ্টার মধ্যে ডাক্তার দেখান","ওষুধ ছাড়া স্ব-চিকিৎসা এড়িয়ে চলুন","লক্ষণ আরো খারাপ হলে জরুরি বিভাগে যান"],
    critical:["এখনই ৯৯৯ নম্বরে কল করুন","অ্যাম্বুলেন্সের জন্য অপেক্ষা করুন","একা গাড়ি চালাবেন না","নিকটতম ইমার্জেন্সি বিভাগে যান"],
  }[level]);

  const hospSorted = [...BD_HOSPITALS_DATA].filter(h => {
    if (districtFilter !== "all") return h.district === districtFilter;
    if (emergencyMode) return h.emergency;
    return true;
  }).sort((a,b) => sortHosp==="distance" ? a.distance-b.distance : sortHosp==="rating" ? b.rating-a.rating : a.icu - b.icu);

  const hospDoctors = selectedHospital ? DOCTORS.filter(d => (analysisResult ? d.specialization===analysisResult.spec : true) && d.hospitalId===selectedHospital.id) : [];
  const fallbackDoctors = selectedHospital ? DOCTORS.filter(d => analysisResult ? d.specialization===analysisResult.spec : true).slice(0,6) : [];
  const displayDoctors = hospDoctors.length > 0 ? hospDoctors : fallbackDoctors;

  const toggleMic = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) { notify("এই ব্রাউজারে ভয়েস ইনপুট সাপোর্ট নেই","warning"); return; }
    setMicActive(m=>!m);
  };

  return (
    <div style={{ maxWidth:1200, margin:"0 auto", padding:"28px 22px" }}>
      <div style={{ marginBottom:28 }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:10, flexWrap:"wrap" }}>
          <h1 className="syne" style={{ fontSize:28, fontWeight:800, color:"var(--text)" }}>🚨 জরুরি সেবা ও <span className="grad-text">স্মার্ট রেফারেল</span></h1>
          {emergencyMode && (
            <div className="emerg-pulse" style={{ background:`${G.rose}15`, border:`1.5px solid ${G.rose}55`, color:G.rose, padding:"6px 16px", borderRadius:22, fontSize:12, fontWeight:700 }}>
              ⚠️ জরুরি মোড সক্রিয়
            </div>
          )}
        </div>
        <p style={{ color:"var(--text2)", fontSize:14 }}>ছবি আপলোড বা লক্ষণ বর্ণনা করুন — AI সঠিক হাসপাতাল ও ডাক্তার সুপারিশ করবে</p>
      </div>

      <div className="glass" style={{ padding:"14px 20px", marginBottom:24, display:"flex", gap:12, alignItems:"center", flexWrap:"wrap", borderLeft:`4px solid ${G.rose}` }}>
        <span style={{ fontSize:20 }}>🚨</span>
        <span style={{ fontWeight:700, color:"var(--text)", fontSize:14, flex:1 }}>জরুরি অবস্থায় তাৎক্ষণিক সাহায্য নিন</span>
        {[["999","জাতীয় জরুরি"],["16789","স্বাস্থ্য হেল্পলাইন"],["1099","অ্যাম্বুলেন্স"]].map(([num,lbl])=>(
          <button key={num} onClick={()=>notify(`${num} কল করা হচ্ছে...`,"error")} style={{ padding:"8px 18px", borderRadius:10, background:`${G.rose}18`, border:`1.5px solid ${G.rose}44`, color:G.rose, cursor:"pointer", fontSize:13, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>
            📞 {num} — {lbl}
          </button>
        ))}
      </div>

      <div className="scroll-x" style={{ display:"flex", alignItems:"center", marginBottom:32, paddingBottom:4 }}>
        {["সমস্যা আপলোড","AI বিশ্লেষণ","হাসপাতাল বেছে নিন","ডাক্তার দেখুন","বুকিং নিশ্চিত"].map((s,i)=>(
          <div key={i} style={{ display:"flex", alignItems:"center", flexShrink:0 }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
              <div style={{ width:34, height:34, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", background: step>i+1?G.teal:step===i+1?`linear-gradient(135deg,${G.teal},${G.tealDark})`:"var(--surface2)", color:step>=i+1?"#fff":"var(--text2)", fontWeight:700, fontSize:13, boxShadow:step===i+1?`0 4px 14px ${G.teal}44`:"none", transition:"all .3s" }}>
                {step>i+1?"✓":i+1}
              </div>
              <span style={{ fontSize:10, fontWeight:step===i+1?700:400, color:step>=i+1?G.teal:"var(--text2)", whiteSpace:"nowrap" }}>{s}</span>
            </div>
            {i<4 && <div style={{ height:2, width:36, background:step>i+1?G.teal:"var(--surface2)", margin:"0 6px", marginBottom:18, flexShrink:0, transition:"background .3s" }} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="fade-up" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, alignItems:"start" }}>
          <div>
            <div className="glass" style={{ padding:28, borderRadius:22, marginBottom:18 }}>
              <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:8 }}>সমস্যার ছবি আপলোড করুন</h2>
              <p style={{ color:"var(--text2)", fontSize:13, marginBottom:20 }}>আঘাত, চর্মরোগ, এক্স-রে, মেডিকেল রিপোর্ট বা প্রেসক্রিপশনের ছবি</p>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(110px,1fr))", gap:10, marginBottom:18 }}>
                {IMAGE_TYPES.map(t=>(
                  <div key={t.id} onClick={()=>setSelectedImageType(t.id)} style={{ padding:"12px 8px", borderRadius:12, textAlign:"center", cursor:"pointer", border:`1.5px solid ${selectedImageType===t.id?G.teal:"var(--border)"}`, background:selectedImageType===t.id?`${G.teal}12`:"var(--surface2)", transition:"all .2s" }}>
                    <div style={{ fontSize:22, marginBottom:5 }}>{t.icon}</div>
                    <div style={{ fontSize:10, fontWeight:600, color:"var(--text)" }}>{t.label}</div>
                  </div>
                ))}
              </div>
              <div onClick={()=>fileRef.current.click()} style={{ border:`2px dashed ${G.teal}44`, borderRadius:14, padding:20, textAlign:"center", cursor:"pointer", marginBottom:16, transition:"border-color .2s", minHeight:120, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
                {imagePreview ? (
                  <img src={imagePreview} alt="" style={{ maxHeight:120, borderRadius:10, objectFit:"cover" }} />
                ) : (
                  <><div style={{ fontSize:30, marginBottom:7 }}>📸</div><div style={{ color:"var(--text2)", fontSize:13 }}>ছবি আপলোড করুন (ঐচ্ছিক)</div><div style={{ color:"var(--text2)", fontSize:11, marginTop:3 }}>ক্লিক বা ড্র্যাগ করুন</div></>
                )}
              </div>
              <input ref={fileRef} type="file" accept="image/*" style={{ display:"none" }} onChange={e=>{ const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=()=>{ setImagePreview(r.result); notify("ছবি আপলোড সফল!","success"); }; r.readAsDataURL(f); }} />
            </div>
          </div>
          <div>
            <div className="glass" style={{ padding:28, borderRadius:22 }}>
              <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:8 }}>লক্ষণ বর্ণনা করুন</h2>
              <p style={{ color:"var(--text2)", fontSize:13, marginBottom:18 }}>বাংলা বা ইংরেজিতে আপনার সমস্যা লিখুন</p>
              <div style={{ position:"relative", marginBottom:14 }}>
                <textarea className="hms-input" placeholder="যেমন: বুকে ব্যথা ও শ্বাস নিতে কষ্ট হচ্ছে দুই দিন ধরে..." value={symptomText} onChange={e=>setSymptomText(e.target.value)} style={{ minHeight:110, resize:"vertical", paddingRight:52 }} />
                <button onClick={toggleMic} className={micActive?"mic-active":""} style={{ position:"absolute", right:10, top:10, width:36, height:36, borderRadius:9, border:"none", cursor:"pointer", fontSize:17, background:micActive?G.rose:"var(--surface2)", transition:"all .2s" }}>🎤</button>
              </div>
              <div style={{ fontSize:12, fontWeight:600, color:"var(--text2)", marginBottom:9 }}>দ্রুত বেছে নিন:</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:7, marginBottom:20 }}>
                {["বুকে ব্যথা","মাথাব্যথা","পিঠে ব্যথা","চামড়ার সমস্যা","জ্বর","চোখের সমস্যা","পেটে ব্যথা","শ্বাস কষ্ট","হাঁটুতে ব্যথা"].map(s=>(
                  <button key={s} onClick={()=>{ setSymptomText(s); notify(`লক্ষণ নির্বাচিত: ${s}`,"info"); }} style={{ padding:"5px 12px", borderRadius:9, background:"var(--surface2)", color:"var(--text)", border:"none", cursor:"pointer", fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>{s}</button>
                ))}
              </div>
              <button className="btn-rip" onClick={analyzeImage} disabled={analyzing} style={{ width:"100%", padding:14, borderRadius:13, background:analyzing?"var(--surface2)":`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:analyzing?"var(--text2)":"#fff", cursor:analyzing?"not-allowed":"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
                {analyzing ? <><div className="a-spin" style={{ width:20, height:20, border:"2px solid rgba(255,255,255,.3)", borderTopColor:G.teal, borderRadius:"50%" }} /> AI বিশ্লেষণ করছে…</> : "🤖 AI দিয়ে বিশ্লেষণ করুন →"}
              </button>
            </div>
          </div>
        </div>
      )}

      {step >= 3 && step < 5 && analysisResult && (
        <div className="fade-up">
          <div className="glass" style={{ padding:22, marginBottom:24, borderRadius:18, borderLeft:`4px solid ${EMERG_LEVELS[analysisResult.level].color}` }}>
            <div style={{ display:"flex", flexWrap:"wrap", gap:18, alignItems:"center" }}>
              <div>
                <div style={{ fontSize:12, color:"var(--text2)", marginBottom:4 }}>AI বিশ্লেষণ ফলাফল</div>
                <div style={{ display:"flex", gap:12, alignItems:"center", flexWrap:"wrap" }}>
                  <span style={{ fontSize:22 }}>{analysisResult.specObj?.icon}</span>
                  <span style={{ fontWeight:700, color:"var(--text)", fontSize:16 }}>{analysisResult.specObj?.en}</span>
                  <span className="badge" style={{ background:`${EMERG_LEVELS[analysisResult.level].color}20`, color:EMERG_LEVELS[analysisResult.level].color }}>{EMERG_LEVELS[analysisResult.level].icon} {EMERG_LEVELS[analysisResult.level].label}</span>
                  <span style={{ fontSize:12, color:G.sky, fontWeight:600 }}>নির্ভরযোগ্যতা: {analysisResult.confidence}%</span>
                </div>
                <div style={{ fontSize:12, color:EMERG_LEVELS[analysisResult.level].color, marginTop:5, fontWeight:600 }}>{EMERG_LEVELS[analysisResult.level].msg}</div>
              </div>
              <div style={{ flex:1, minWidth:220 }}>
                <div style={{ fontSize:11, color:"var(--text2)", marginBottom:6 }}>সম্ভাব্য সমস্যা:</div>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                  {analysisResult.possibleConditions.map(c=><span key={c} style={{ fontSize:11, background:"var(--surface2)", color:"var(--text)", padding:"3px 9px", borderRadius:8 }}>{c}</span>)}
                </div>
              </div>
              <div>
                <div style={{ fontSize:11, color:"var(--text2)", marginBottom:6 }}>পরামর্শ:</div>
                {analysisResult.recommendations.slice(0,2).map(r=><div key={r} style={{ fontSize:11, color:"var(--text2)", marginBottom:3 }}>• {r}</div>)}
              </div>
              <button onClick={()=>setStep(1)} style={{ padding:"7px 16px", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>← পুনরায় বিশ্লেষণ</button>
            </div>
          </div>

          {step === 3 && (
            <>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18, flexWrap:"wrap", gap:12 }}>
                <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)" }}>🏥 কাছের হাসপাতাল সমূহ <span style={{ fontSize:15, color:"var(--text2)", fontWeight:400 }}>({hospSorted.length}টি)</span></h2>
                <div style={{ display:"flex", gap:9, flexWrap:"wrap" }}>
                  <select className="hms-select" value={districtFilter} onChange={e=>setDistrictFilter(e.target.value)}>
                    <option value="all">সব জেলা</option>
                    {BD_DISTRICTS.map(d=><option key={d} value={d}>{d}</option>)}
                  </select>
                  <select className="hms-select" value={sortHosp} onChange={e=>setSortHosp(e.target.value)}>
                    <option value="distance">দূরত্ব অনুযায়ী</option>
                    <option value="rating">রেটিং অনুযায়ী</option>
                    <option value="icu">ICU অনুযায়ী</option>
                  </select>
                  <button onClick={()=>setEmergencyMode(m=>!m)} style={{ padding:"8px 14px", borderRadius:9, background:emergencyMode?`${G.rose}18`:"var(--surface2)", border:`1.5px solid ${emergencyMode?G.rose:"var(--border)"}`, color:emergencyMode?G.rose:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>
                    🚨 শুধু জরুরি হাসপাতাল
                  </button>
                </div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))", gap:18 }}>
                {hospSorted.map(h=>(
                  <div key={h.id} className={`glass card-h ${h.emergency&&emergencyMode?"emerg-card":""}`} style={{ borderRadius:20, overflow:"hidden" }} onClick={()=>{ setSelectedHospital(h); setStep(4); notify(`${h.en} নির্বাচিত হয়েছে`,"success"); }}>
                    <div style={{ height:130, backgroundImage:`url(${h.image})`, backgroundSize:"cover", backgroundPosition:"center", position:"relative" }}>
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,.65),transparent)" }} />
                      {h.emergency && <div style={{ position:"absolute", top:9, left:10, background:G.rose, color:"#fff", fontSize:9, fontWeight:700, padding:"3px 9px", borderRadius:7 }}>🚨 EMERGENCY</div>}
                      {h.ambulance && <div style={{ position:"absolute", top:9, right:10, background:"#1a1a2e", color:"#fff", fontSize:9, fontWeight:700, padding:"3px 9px", borderRadius:7 }}>🚑 AMBULANCE</div>}
                      <div style={{ position:"absolute", bottom:9, left:12 }}>
                        <div style={{ color:"#fff", fontWeight:700, fontSize:13 }}>{h.en}</div>
                        <div style={{ color:"rgba(255,255,255,.75)", fontSize:10 }}>{h.district}</div>
                      </div>
                    </div>
                    <div style={{ padding:"14px 16px" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:9 }}>
                        <div style={{ display:"flex", gap:14 }}>
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.teal }}>{h.distance}km</div><div style={{ fontSize:10, color:"var(--text2)" }}>দূরত্ব</div></div>
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.emerald }}>{h.icu}</div><div style={{ fontSize:10, color:"var(--text2)" }}>ICU</div></div>
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.sky }}>{h.beds}</div><div style={{ fontSize:10, color:"var(--text2)" }}>শয্যা</div></div>
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.gold }}>⭐{h.rating}</div><div style={{ fontSize:10, color:"var(--text2)" }}>রেটিং</div></div>
                        </div>
                      </div>
                      <div style={{ fontSize:11, color:"var(--text2)", marginBottom:10 }}>📍 {h.address}</div>
                      <div style={{ display:"flex", gap:6, marginBottom:12, flexWrap:"wrap" }}>
                        <span style={{ fontSize:10, background:`${G.teal}15`, color:G.teal, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>👨‍⚕️ {DOCTORS.filter(d=>d.hospitalId===h.id).length} ডাক্তার</span>
                        <span style={{ fontSize:10, background:`${G.sky}15`, color:G.sky, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>🔬 {DOCTORS.filter(d=>analysisResult && d.specialization===analysisResult.spec && d.hospitalId===h.id).length} {analysisResult?.specObj?.en}</span>
                      </div>
                      <button className="btn-rip" style={{ width:"100%", padding:"9px", borderRadius:10, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:13, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>হাসপাতাল নির্বাচন করুন →</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 4 && selectedHospital && (
            <div className="fade-up">
              <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:22, flexWrap:"wrap" }}>
                <button onClick={()=>setStep(3)} style={{ padding:"8px 16px", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:13, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>← হাসপাতালে ফিরুন</button>
                <h2 className="syne" style={{ fontSize:20, fontWeight:800, color:"var(--text)" }}>{selectedHospital.en} — {analysisResult?.specObj?.en} বিশেষজ্ঞ ডাক্তার</h2>
              </div>
              <div className="glass" style={{ padding:"14px 18px", marginBottom:20, borderRadius:14, display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
                <img src={selectedHospital.image} alt="" style={{ width:56, height:56, borderRadius:10, objectFit:"cover" }} />
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, color:"var(--text)", marginBottom:2 }}>{selectedHospital.name}</div>
                  <div style={{ fontSize:12, color:"var(--text2)" }}>📍 {selectedHospital.address} | 📞 {selectedHospital.phone}</div>
                </div>
                {selectedHospital.emergency && <Badge label="Emergency Available" color={G.rose} />}
                {selectedHospital.ambulance && <Badge label="Ambulance" color={G.orange} />}
              </div>
              {displayDoctors.length === 0 ? (
                <div style={{ textAlign:"center", padding:40, color:"var(--text2)" }}>
                  <div style={{ fontSize:40, marginBottom:12 }}>😔</div>
                  <div>এই হাসপাতালে উপযুক্ত ডাক্তার পাওয়া যায়নি।</div>
                  <button onClick={()=>setStep(3)} style={{ marginTop:16, padding:"10px 24px", borderRadius:10, background:G.teal, color:"#fff", border:"none", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>অন্য হাসপাতাল দেখুন</button>
                </div>
              ) : (
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:16 }}>
                  {displayDoctors.map(doc=>(
                    <div key={doc.id} className="glass card-h" style={{ padding:20, borderRadius:18, border:selectedDoctor?.id===doc.id?`2px solid ${G.teal}`:"2px solid transparent" }} onClick={()=>setSelectedDoctor(doc)}>
                      <div style={{ display:"flex", gap:12, marginBottom:12 }}>
                        <img src={doc.avatar} alt={doc.name} style={{ width:58, height:58, borderRadius:"50%", border:`2px solid ${G.teal}33`, objectFit:"cover", background:"var(--surface2)" }} />
                        <div style={{ flex:1 }}>
                          <div style={{ fontWeight:700, color:"var(--text)", marginBottom:2, fontSize:13 }}>{doc.name}</div>
                          <div style={{ fontSize:11, color:G.teal, marginBottom:2 }}>{doc.specName}</div>
                          <div style={{ fontSize:10, color:"var(--text2)" }}>{doc.degree}</div>
                        </div>
                        <Badge label={doc.online?"অনলাইন":"অফলাইন"} color={doc.online?G.emerald:G.slate} />
                      </div>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderTop:"1px solid var(--border)", marginBottom:12 }}>
                        <div><div style={{ fontSize:10, color:"var(--text2)" }}>ফি</div><div style={{ fontWeight:800, fontSize:16, color:G.teal }}>{fmt(doc.fee)}</div></div>
                        <div style={{ textAlign:"right" }}><div style={{ fontSize:10, color:"var(--text2)" }}>পরবর্তী স্লট</div><div style={{ fontWeight:600, fontSize:11, color:G.emerald }}>{doc.nextSlot}</div></div>
                      </div>
                      <div style={{ display:"flex", gap:8 }}>
                        <button onClick={e=>{e.stopPropagation();setStep(5);}} style={{ flex:1, padding:"8px 0", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>বিস্তারিত</button>
                        <button className="btn-rip" onClick={e=>{e.stopPropagation();onBookDoctor(doc);}} style={{ flex:2, padding:"8px 0", borderRadius:9, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>বুক করুন</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── APPOINTMENTS PAGE ─────────────────────────────────────────────────────────
const AppointmentsPage = ({ preSelectedDoctor, setPreSelectedDoctor }) => {
  const [step, setStep] = useState(preSelectedDoctor ? 3 : 1);
  const [symptoms, setSymptoms] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [suggestedSpec, setSuggestedSpec] = useState(null);
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(preSelectedDoctor);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [thinking, setThinking] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [appointments, setAppointments] = useState(SAMPLE_APPOINTMENTS);
  const [calMonth, setCalMonth] = useState(new Date(2026, 4, 1));
  const [activeTab, setActiveTab] = useState("book");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const fileRef = useRef(null);

  useEffect(() => { if (preSelectedDoctor) { setSelectedDoctor(preSelectedDoctor); setStep(3); setPreSelectedDoctor(null); } }, [preSelectedDoctor]);

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) { notify("লক্ষণ বর্ণনা করুন","warning"); return; }
    setThinking(true);
    await delay(1400);
    const lower = symptoms.toLowerCase();
    let spec = "general";
    for (const [kw, s] of Object.entries(SYMPTOM_MAP)) { if (lower.includes(kw)) { spec = s; break; } }
    setSuggestedSpec(spec); setSelectedSpec(spec); setThinking(false); setStep(2);
    notify(`AI সুপারিশ: ${SPECIALIZATIONS.find(s=>s.id===spec)?.en}`,"success");
  };

  const bookAppointment = () => {
    if (!selectedDate || !selectedTime) { notify("তারিখ ও সময় বেছে নিন","warning"); return; }
    if (!patientName.trim()) { notify("রোগীর নাম লিখুন","warning"); return; }
    const token = `DHK-${Math.floor(2000+Math.random()*8000)}`;
    const newApt = { id:appointments.length+1, patient:patientName||"নতুন রোগী", doctor:selectedDoctor.name, spec:selectedDoctor.specName, date:selectedDate, time:selectedTime, status:"pending", fee:selectedDoctor.fee, token };
    setAppointments(p=>[newApt,...p]);
    notify(`🎉 অ্যাপয়েন্টমেন্ট নিশ্চিত! টোকেন: ${token}`,"success");
    setStep(5);
  };

  const getDaysInMonth = (y,m) => new Date(y,m+1,0).getDate();
  const getFirstDay = (y,m) => new Date(y,m,1).getDay();
  const today = new Date();

  const renderCalendar = () => {
    const y=calMonth.getFullYear(), m=calMonth.getMonth();
    const days=getDaysInMonth(y,m), first=getFirstDay(y,m);
    const cells = [];
    for (let i=0; i<first; i++) cells.push(<div key={`e${i}`} />);
    for (let d=1; d<=days; d++) {
      const ds=`${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
      const isT=d===today.getDate()&&m===today.getMonth()&&y===today.getFullYear();
      const isPast=new Date(y,m,d)<new Date(today.getFullYear(),today.getMonth(),today.getDate());
      const hasA=appointments.some(a=>a.date===ds);
      cells.push(<div key={d} className={`cal-day${isT?" today":""}${selectedDate===ds?" selected":""}${isPast?" disabled":""}${hasA?" has-apt":""}`} onClick={()=>!isPast&&setSelectedDate(ds)}>{d}</div>);
    }
    return cells;
  };

  const specDocs = selectedSpec ? DOCTORS.filter(d=>d.specialization===selectedSpec) : DOCTORS;
  const SC = { confirmed:G.emerald, pending:G.gold, completed:G.teal, cancelled:G.rose };

  return (
    <div style={{ maxWidth:1100, margin:"0 auto", padding:"28px 22px" }}>
      <div style={{ marginBottom:28 }}>
        <h1 className="syne" style={{ fontSize:28, fontWeight:800, color:"var(--text)", marginBottom:6 }}><span className="grad-text">অ্যাপয়েন্টমেন্ট</span></h1>
      </div>
      <div style={{ display:"flex", gap:7, marginBottom:28, background:"var(--surface2)", borderRadius:11, padding:5, width:"fit-content" }}>
        {[["book","📅 নতুন বুকিং"],["mine","📋 আমার অ্যাপয়েন্টমেন্ট"]].map(([t,l])=>(
          <button key={t} className={`tab-btn ${activeTab===t?"active":""}`} onClick={()=>setActiveTab(t)}>{l}</button>
        ))}
      </div>

      {activeTab === "mine" ? (
        <div>
          <h2 style={{ fontSize:18, fontWeight:700, color:"var(--text)", marginBottom:18 }}>আমার অ্যাপয়েন্টমেন্ট ({appointments.length})</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {appointments.map(apt=>(
              <div key={apt.id} className="glass" style={{ padding:18, borderRadius:16, display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
                <div style={{ width:46, height:46, borderRadius:"50%", background:`${SC[apt.status]}1a`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>
                  {apt.status==="confirmed"?"✅":apt.status==="pending"?"⏳":apt.status==="completed"?"🩺":"❌"}
                </div>
                <div style={{ flex:1, minWidth:180 }}>
                  <div style={{ fontWeight:700, color:"var(--text)", marginBottom:2, fontSize:14 }}>{apt.doctor}</div>
                  <div style={{ fontSize:12, color:"var(--text2)" }}>{apt.spec} • {apt.date} সময় {apt.time}</div>
                  <div style={{ fontSize:11, color:G.sky, marginTop:2 }}>টোকেন: {apt.token}</div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <Badge label={apt.status==="confirmed"?"নিশ্চিত":apt.status==="pending"?"অপেক্ষমাণ":apt.status==="completed"?"সম্পন্ন":"বাতিল"} color={SC[apt.status]} />
                  <div style={{ fontSize:15, fontWeight:700, color:G.teal, marginTop:5 }}>{fmt(apt.fee)}</div>
                </div>
                <div style={{ display:"flex", gap:7 }}>
                  {apt.status==="pending" && <button onClick={()=>{ setAppointments(p=>p.map(a=>a.id===apt.id?{...a,status:"cancelled"}:a)); notify("অ্যাপয়েন্টমেন্ট বাতিল হয়েছে","warning"); }} style={{ padding:"5px 13px", borderRadius:7, background:`${G.rose}18`, color:G.rose, border:"none", cursor:"pointer", fontSize:11, fontWeight:600 }}>বাতিল</button>}
                  <button onClick={()=>notify("বিস্তারিত ইমেইলে পাঠানো হয়েছে!","info")} style={{ padding:"5px 13px", borderRadius:7, background:"var(--surface2)", color:"var(--text)", border:"none", cursor:"pointer", fontSize:11, fontWeight:600 }}>বিস্তারিত</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="scroll-x" style={{ display:"flex", alignItems:"center", marginBottom:34, paddingBottom:4 }}>
            {["লক্ষণ","বিশেষজ্ঞ","ডাক্তার","সময়সূচি","নিশ্চিত"].map((s,i)=>(
              <div key={i} style={{ display:"flex", alignItems:"center", flexShrink:0 }}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5, cursor:step>i+1?"pointer":"default" }} onClick={()=>step>i+1&&setStep(i+1)}>
                  <div style={{ width:34, height:34, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", background:step>i+1?G.teal:step===i+1?`linear-gradient(135deg,${G.teal},${G.tealDark})`:"var(--surface2)", color:step>=i+1?"#fff":"var(--text2)", fontWeight:700, fontSize:13, boxShadow:step===i+1?`0 4px 14px ${G.teal}44`:"none", transition:"all .3s" }}>{step>i+1?"✓":i+1}</div>
                  <span style={{ fontSize:10, fontWeight:step===i+1?700:400, color:step>=i+1?G.teal:"var(--text2)", whiteSpace:"nowrap" }}>{s}</span>
                </div>
                {i<4 && <div style={{ height:2, width:38, background:step>i+1?G.teal:"var(--surface2)", margin:"0 6px", marginBottom:18, flexShrink:0, transition:"background .3s" }} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="fade-up">
              <div className="glass" style={{ padding:28, borderRadius:22, maxWidth:680 }}>
                <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:6 }}>আপনি কেমন আছেন?</h2>
                <p style={{ color:"var(--text2)", marginBottom:20, fontSize:13 }}>লক্ষণ বর্ণনা করুন — AI সঠিক বিশেষজ্ঞ সুপারিশ করবে</p>
                <div style={{ position:"relative", marginBottom:14 }}>
                  <textarea className="hms-input" placeholder="যেমন: বুকে ব্যথা ও শ্বাস নিতে কষ্ট হচ্ছে দুই দিন ধরে..." value={symptoms} onChange={e=>setSymptoms(e.target.value)} style={{ minHeight:110, resize:"vertical", paddingRight:52 }} />
                  <button onClick={()=>{ setMicActive(m=>!m); notify("ভয়েস ইনপুট","info"); }} className={micActive?"mic-active":""} style={{ position:"absolute", right:10, top:10, width:36, height:36, borderRadius:9, border:"none", cursor:"pointer", fontSize:17, background:micActive?G.rose:"var(--surface2)", transition:"all .2s" }}>🎤</button>
                </div>
                <div onClick={()=>fileRef.current.click()} style={{ border:`2px dashed ${G.teal}44`, borderRadius:13, padding:18, textAlign:"center", cursor:"pointer", marginBottom:20 }}>
                  {imagePreview ? <img src={imagePreview} alt="" style={{ maxHeight:120, borderRadius:9, objectFit:"cover" }} /> : <><div style={{ fontSize:28, marginBottom:6 }}>📸</div><div style={{ color:"var(--text2)", fontSize:13 }}>লক্ষণের ছবি আপলোড করুন (ঐচ্ছিক)</div></>}
                </div>
                <input ref={fileRef} type="file" accept="image/*" style={{ display:"none" }} onChange={e=>{ const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=()=>{ setImagePreview(r.result); notify("ছবি আপলোড সফল!","success"); }; r.readAsDataURL(f); }} />
                <button className="btn-rip" onClick={analyzeSymptoms} disabled={thinking} style={{ width:"100%", padding:14, borderRadius:13, background:thinking?"var(--surface2)":`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:thinking?"var(--text2)":"#fff", cursor:thinking?"not-allowed":"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
                  {thinking?<><div className="a-spin" style={{ width:20, height:20, border:"2px solid rgba(255,255,255,.3)", borderTopColor:G.teal, borderRadius:"50%" }} />AI বিশ্লেষণ করছে…</>:"🤖 লক্ষণ বিশ্লেষণ করুন →"}
                </button>
              </div>
              <div style={{ marginTop:20 }}>
                <div style={{ fontSize:13, fontWeight:600, color:"var(--text2)", marginBottom:10 }}>দ্রুত নির্বাচন:</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                  {["বুকে ব্যথা","মাথাব্যথা","পিঠে ব্যথা","চামড়ার সমস্যা","জ্বর","চোখের সমস্যা","পেটে ব্যথা","শ্বাস কষ্ট"].map(s=>(
                    <button key={s} onClick={()=>{ setSymptoms(s); notify(`লক্ষণ নির্বাচন: ${s}`,"info"); }} style={{ padding:"6px 13px", borderRadius:9, background:"var(--surface2)", color:"var(--text)", border:"none", cursor:"pointer", fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>{s}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="fade-up">
              <div style={{ marginBottom:22 }}>
                <div className="glass" style={{ padding:14, borderRadius:13, background:`${G.teal}12`, border:`1.5px solid ${G.teal}44`, marginBottom:20, display:"inline-flex", alignItems:"center", gap:10 }}>
                  <span style={{ fontSize:18 }}>🤖</span>
                  <span style={{ color:"var(--text)", fontSize:13 }}><strong>AI সুপারিশ:</strong> <span style={{ color:G.teal }}>{SPECIALIZATIONS.find(s=>s.id===suggestedSpec)?.en}</span></span>
                </div>
                <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)" }}>বিভাগ বেছে নিন</h2>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))", gap:12, marginBottom:24 }}>
                {SPECIALIZATIONS.map(spec=>(
                  <div key={spec.id} className="glass card-h" style={{ padding:18, textAlign:"center", borderRadius:15, cursor:"pointer", border:selectedSpec===spec.id?`2px solid ${spec.color}`:"2px solid transparent", background:selectedSpec===spec.id?`${spec.color}12`:undefined, position:"relative" }} onClick={()=>setSelectedSpec(spec.id)}>
                    {spec.id===suggestedSpec && <div style={{ position:"absolute", top:-7, right:-7, background:G.gold, color:"#000", fontSize:9, fontWeight:700, padding:"2px 6px", borderRadius:7 }}>AI</div>}
                    <div style={{ fontSize:26, marginBottom:7 }}>{spec.icon}</div>
                    <div style={{ fontWeight:700, fontSize:11, color:"var(--text)" }}>{spec.en}</div>
                    <div style={{ fontSize:10, color:"var(--text2)", marginTop:3 }}>{DOCTORS.filter(d=>d.specialization===spec.id).length} ডাক্তার</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", gap:11 }}>
                <button onClick={()=>setStep(1)} style={{ padding:"11px 22px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>← ফিরুন</button>
                <button className="btn-rip" onClick={()=>{ if(!selectedSpec){ notify("বিভাগ বেছে নিন","warning"); return; } setStep(3); }} style={{ padding:"11px 26px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700 }}>ডাক্তার দেখুন →</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="fade-up">
              <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:18 }}>ডাক্তার বেছে নিন</h2>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(275px,1fr))", gap:15, marginBottom:22 }}>
                {specDocs.map(doc=>(
                  <div key={doc.id} className="glass card-h" style={{ padding:18, borderRadius:17, cursor:"pointer", border:selectedDoctor?.id===doc.id?`2px solid ${G.teal}`:"2px solid transparent", background:selectedDoctor?.id===doc.id?`${G.teal}08`:undefined }} onClick={()=>setSelectedDoctor(doc)}>
                    <div style={{ display:"flex", gap:11, marginBottom:11 }}>
                      <img src={doc.avatar} alt={doc.name} style={{ width:55, height:55, borderRadius:"50%", border:`2px solid ${selectedDoctor?.id===doc.id?G.teal:G.teal+"33"}`, objectFit:"cover", background:"var(--surface2)" }} />
                      <div>
                        <div style={{ fontWeight:700, color:"var(--text)", marginBottom:2, fontSize:13 }}>{doc.name}</div>
                        <div style={{ fontSize:11, color:G.teal }}>{doc.specName}</div>
                        <div style={{ fontSize:10, color:"var(--text2)" }}>{doc.experience}বছর অভিজ্ঞতা</div>
                      </div>
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <Stars rating={doc.rating} size={12} />
                      <span style={{ fontWeight:800, color:G.teal, fontSize:15 }}>{fmt(doc.fee)}</span>
                    </div>
                    <div style={{ marginTop:6, fontSize:11, color:G.emerald }}>🕐 {doc.nextSlot}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", gap:11 }}>
                <button onClick={()=>setStep(2)} style={{ padding:"11px 22px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>← ফিরুন</button>
                <button className="btn-rip" onClick={()=>{ if(!selectedDoctor){ notify("ডাক্তার বেছে নিন","warning"); return; } setStep(4); }} style={{ padding:"11px 26px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700 }}>সামনে যান →</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="fade-up" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, alignItems:"start" }}>
              <div>
                <h2 className="syne" style={{ fontSize:20, fontWeight:800, color:"var(--text)", marginBottom:18 }}>তারিখ বেছে নিন</h2>
                <div className="glass" style={{ padding:18, borderRadius:20 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                    <button onClick={()=>setCalMonth(m=>new Date(m.getFullYear(),m.getMonth()-1,1))} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--text)", fontSize:17 }}>‹</button>
                    <span style={{ fontWeight:700, color:"var(--text)", fontSize:14 }}>{calMonth.toLocaleString("default",{month:"long",year:"numeric"})}</span>
                    <button onClick={()=>setCalMonth(m=>new Date(m.getFullYear(),m.getMonth()+1,1))} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--text)", fontSize:17 }}>›</button>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:3, marginBottom:7 }}>
                    {["রবি","সোম","মঙ্গল","বুধ","বৃহস্পতি","শুক্র","শনি"].map(d=><div key={d} style={{ textAlign:"center", fontSize:10, fontWeight:700, color:"var(--text2)", padding:"3px 0" }}>{d.slice(0,2)}</div>)}
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:3 }}>{renderCalendar()}</div>
                  {selectedDate && <div style={{ marginTop:10, textAlign:"center", fontSize:12, color:G.teal, fontWeight:600 }}>নির্বাচিত: {selectedDate}</div>}
                </div>
              </div>
              <div>
                <h2 className="syne" style={{ fontSize:20, fontWeight:800, color:"var(--text)", marginBottom:18 }}>সময় ও তথ্য</h2>
                <div className="glass" style={{ padding:18, borderRadius:20 }}>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:20 }}>
                    {TIMES.map(t=>(
                      <button key={t} onClick={()=>setSelectedTime(t)} style={{ padding:"9px 5px", borderRadius:9, border:"none", cursor:"pointer", background:selectedTime===t?G.teal:"var(--surface2)", color:selectedTime===t?"#fff":"var(--text)", fontSize:11, fontWeight:600, fontFamily:"'DM Sans',sans-serif", transition:"all .18s" }}>{t}</button>
                    ))}
                  </div>
                  <div style={{ marginBottom:14 }}>
                    <input className="hms-input" placeholder="রোগীর নাম লিখুন *" value={patientName} onChange={e=>setPatientName(e.target.value)} style={{ marginBottom:10 }} />
                    <input className="hms-input" placeholder="মোবাইল নম্বর (ঐচ্ছিক)" value={patientPhone} onChange={e=>setPatientPhone(e.target.value)} />
                  </div>
                  {selectedDoctor && (
                    <div style={{ padding:14, background:`${G.teal}08`, borderRadius:13, border:`1px solid ${G.teal}28`, marginBottom:18 }}>
                      <div style={{ fontWeight:700, color:"var(--text)", marginBottom:7, fontSize:13 }}>অ্যাপয়েন্টমেন্ট সারাংশ</div>
                      {[["👨‍⚕️ ডাক্তার",selectedDoctor.name],["🔬 বিভাগ",selectedDoctor.specName],["📅 তারিখ",selectedDate||"নির্বাচিত নয়"],["⏰ সময়",selectedTime||"নির্বাচিত নয়"],["💰 ফি",fmt(selectedDoctor.fee)]].map(([k,v])=>(
                        <div key={k} style={{ display:"flex", justifyContent:"space-between", marginBottom:4, fontSize:12 }}>
                          <span style={{ color:"var(--text2)" }}>{k}</span>
                          <span style={{ fontWeight:600, color:"var(--text)" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{ display:"flex", gap:9 }}>
                    <button onClick={()=>setStep(3)} style={{ padding:"11px 22px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>← ফিরুন</button>
                    <button className="btn-rip" onClick={bookAppointment} style={{ flex:1, padding:"11px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700, fontSize:14 }}>বুকিং নিশ্চিত করুন ✓</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="fade-up" style={{ textAlign:"center", padding:"50px 22px" }}>
              <div style={{ width:90, height:90, borderRadius:"50%", background:`${G.emerald}18`, border:`3px solid ${G.emerald}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:42, margin:"0 auto 22px" }}>✅</div>
              <h2 className="syne" style={{ fontSize:32, fontWeight:800, color:"var(--text)", marginBottom:10 }}>অ্যাপয়েন্টমেন্ট নিশ্চিত!</h2>
              <p style={{ color:"var(--text2)", fontSize:15, marginBottom:6 }}>ডাক্তার: <strong style={{ color:G.teal }}>{selectedDoctor?.name}</strong></p>
              <p style={{ color:"var(--text2)", marginBottom:6 }}>{selectedDate} সময় {selectedTime}</p>
              <div style={{ display:"inline-block", background:`${G.sky}18`, border:`1.5px solid ${G.sky}44`, color:G.sky, padding:"8px 20px", borderRadius:12, fontWeight:700, fontSize:14, marginBottom:28 }}>
                টোকেন: {appointments[0]?.token || "DHK-2350"}
              </div>
              <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
                <button onClick={()=>{ setStep(1); setSymptoms(""); setSelectedDoctor(null); setSelectedDate(null); setSelectedTime(null); setImagePreview(null); setPatientName(""); }} style={{ padding:"11px 26px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700 }}>আবার বুক করুন</button>
                <button onClick={()=>setActiveTab("mine")} style={{ padding:"11px 26px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>আমার অ্যাপয়েন্টমেন্ট দেখুন</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── DASHBOARD PAGE ───────────────────────────────────────────────────────────
const DashboardPage = ({ role }) => {
  const [loaded, setLoaded] = useState(false);
  const [section, setSection] = useState("overview");
  useEffect(()=>{ setTimeout(()=>setLoaded(true),280); },[]);

  const roleCards = {
    patient: [
      { l:"মোট ভিজিট", v:"১২", ch:"+২", icon:"🩺", c:G.sky },
      { l:"আসন্ন অ্যাপয়েন্টমেন্ট", v:"২", ch:"পরেরটি: আগামীকাল", icon:"📅", c:G.teal },
      { l:"রিপোর্ট", v:"৫", ch:"২টি নতুন", icon:"📄", c:G.emerald },
      { l:"স্বাস্থ্য স্কোর", v:"৮৫%", ch:"+৩%", icon:"💚", c:G.gold },
    ],
    doctor: [
      { l:"আমার রোগী", v:"৩৪২", ch:"+৫%", icon:"🧑‍🤝‍🧑", c:G.sky },
      { l:"আজকের অ্যাপয়েন্টমেন্ট", v:"৮", ch:"২টি নতুন", icon:"📋", c:G.teal },
      { l:"মাসিক আয়", v:"৳৪২,০০০", ch:"+১৮%", icon:"💳", c:G.emerald },
      { l:"রেটিং", v:"৪.৯ ⭐", ch:"+০.১", icon:"🏆", c:G.gold },
    ],
    admin: [
      { l:"মোট রোগী", v:"১,২৮৪", ch:"+১২%", icon:"👥", c:G.sky },
      { l:"আজকের অ্যাপয়েন্টমেন্ট", v:"৪৮", ch:"+৮%", icon:"📅", c:G.teal },
      { l:"মাসিক রাজস্ব", v:"৳২৭,৩০০", ch:"+১৫%", icon:"💰", c:G.emerald },
      { l:"সক্রিয় ডাক্তার", v:`${DOCTORS.length}`, ch:"+২", icon:"👨‍⚕️", c:G.purple },
    ],
    superadmin: [
      { l:"মোট হাসপাতাল", v:`${BD_HOSPITALS_DATA.length}`, ch:"+১", icon:"🏥", c:G.sky },
      { l:"সক্রিয় ডাক্তার", v:`${DOCTORS.length}`, ch:"+৩", icon:"👨‍⚕️", c:G.teal },
      { l:"জাতীয় রাজস্ব", v:"৳২.৭কোটি", ch:"+২২%", icon:"💰", c:G.emerald },
      { l:"জরুরি কেস", v:"১৪", ch:"আজ", icon:"🚨", c:G.rose },
    ],
  };

  const cards = roleCards[role] || roleCards.patient;
  const monthly = [
    { m:"জানু", p:142, r:182000 },{ m:"ফেব্রু", p:168, r:214000 },{ m:"মার্চ", p:195, r:248000 },
    { m:"এপ্রিল", p:178, r:227000 },{ m:"মে", p:215, r:273000 },{ m:"জুন", p:230, r:298000 },
  ];
  const maxP = Math.max(...monthly.map(d=>d.p));
  const specDist = SPECIALIZATIONS.slice(0,6).map(s=>({ name:s.en, count:DOCTORS.filter(d=>d.specialization===s.id).length, color:s.color }));
  const sideItems = [
    { id:"overview",  icon:"📊", l:"সামগ্রিক" },
    { id:"analytics", icon:"📈", l:"বিশ্লেষণ" },
    { id:"doctors",   icon:"👨‍⚕️",l:"ডাক্তার" },
    { id:"hospitals", icon:"🏥", l:"হাসপাতাল" },
    { id:"emergency", icon:"🚨", l:"জরুরি" },
    { id:"reports",   icon:"📄", l:"রিপোর্ট" },
    { id:"settings",  icon:"⚙️", l:"সেটিংস" },
  ];

  return (
    <div style={{ display:"flex", minHeight:"calc(100vh - 66px)" }}>
      <div className="hide-m glass" style={{ width:210, flexShrink:0, borderRadius:0, borderRight:"1px solid var(--border)", padding:"22px 10px", position:"sticky", top:66, height:"calc(100vh - 66px)", overflowY:"auto" }}>
        <div style={{ marginBottom:22, padding:"0 7px" }}>
          <div style={{ fontSize:11, fontWeight:700, color:"var(--text2)", textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>{role.toUpperCase()} প্যানেল</div>
          <div style={{ width:36, height:3, background:G.teal, borderRadius:2 }} />
        </div>
        {sideItems.map(item=>(
          <div key={item.id} className={`sidebar-item ${section===item.id?"active":""}`} onClick={()=>{ setSection(item.id); notify(`${item.l} বিভাগ`,"info"); }}>
            <span style={{ fontSize:17 }}>{item.icon}</span><span>{item.l}</span>
          </div>
        ))}
        <div style={{ marginTop:28, padding:"14px 7px" }}>
          <div style={{ fontSize:11, fontWeight:700, color:"var(--text2)", marginBottom:10 }}>দ্রুত তথ্য</div>
          {[["অনলাইন ডাক্তার","১২",G.emerald],["অপেক্ষমাণ","৫",G.gold],["জরুরি কেস","২",G.rose]].map(([l,v,c])=>(
            <div key={l} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:7 }}>
              <span style={{ fontSize:11, color:"var(--text2)" }}>{l}</span>
              <span style={{ fontSize:12, fontWeight:700, color:c }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex:1, padding:"28px 22px", overflowY:"auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:28, flexWrap:"wrap", gap:11 }}>
          <div>
            <h1 className="syne" style={{ fontSize:26, fontWeight:800, color:"var(--text)", marginBottom:3 }}>
              {role==="superadmin"?"সুপার অ্যাডমিন":role==="admin"?"হাসপাতাল অ্যাডমিন":role==="doctor"?"ডাক্তার":"রোগী"} <span className="grad-text">ড্যাশবোর্ড</span>
            </h1>
            <p style={{ color:"var(--text2)", fontSize:13 }}>স্বাগতম! আজকের সারসংক্ষেপ।</p>
          </div>
          <div style={{ display:"flex", gap:9 }}>
            <button onClick={()=>notify("রিপোর্ট রপ্তানি হয়েছে!","success")} style={{ padding:"9px 18px", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>📤 রপ্তানি</button>
            <button className="btn-rip" onClick={()=>notify("ডেটা আপডেট হয়েছে!","success")} style={{ padding:"9px 18px", borderRadius:9, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>🔄 রিফ্রেশ</button>
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:18, marginBottom:28 }}>
          {cards.map((c,i)=>(
            <div key={i} className="glass card-h fade-up" style={{ padding:22, borderRadius:20, animationDelay:`${i*.1}s`, borderLeft:`4px solid ${c.c}` }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                <div style={{ width:42, height:42, borderRadius:11, background:`${c.c}1a`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>{c.icon}</div>
                <span style={{ fontSize:11, fontWeight:600, color:G.emerald, background:`${G.emerald}14`, padding:"3px 8px", borderRadius:8 }}>{c.ch}</span>
              </div>
              <div className="syne" style={{ fontSize:26, fontWeight:800, color:"var(--text)", marginBottom:3 }}>{c.v}</div>
              <div style={{ fontSize:12, color:"var(--text2)" }}>{c.l}</div>
            </div>
          ))}
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:22, marginBottom:24 }}>
          <div className="glass" style={{ padding:26, borderRadius:20 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:22 }}>
              <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15 }}>রোগীর ট্রেন্ড (২০২৬)</h3>
              <select className="hms-select" style={{ fontSize:11, padding:"4px 9px" }} onChange={()=>notify("চার্ট আপডেট হয়েছে","info")}><option>মাসিক</option><option>সাপ্তাহিক</option></select>
            </div>
            <div style={{ display:"flex", alignItems:"flex-end", gap:10, height:150 }}>
              {monthly.map((d,i)=>(
                <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:7 }}>
                  <span style={{ fontSize:10, color:"var(--text2)", fontWeight:600 }}>{d.p}</span>
                  <div className="chart-bar" style={{ width:"100%", height:loaded?`${(d.p/maxP)*100}%`:"0%", transitionDelay:`${i*.1}s` }} />
                  <span style={{ fontSize:10, color:"var(--text2)" }}>{d.m}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass" style={{ padding:26, borderRadius:20 }}>
            <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15, marginBottom:18 }}>বিভাগ অনুযায়ী</h3>
            {specDist.map((s,i)=>(
              <div key={i} style={{ marginBottom:10 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
                  <span style={{ fontSize:11, color:"var(--text)", fontWeight:600 }}>{s.name}</span>
                  <span style={{ fontSize:11, color:"var(--text2)" }}>{s.count}</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{ width:loaded?`${(s.count/DOCTORS.length)*100}%`:"0%", background:s.color, transitionDelay:`${i*.13}s` }} /></div>
              </div>
            ))}
          </div>
        </div>

        {(role==="superadmin"||role==="admin") && (
          <div className="glass" style={{ padding:22, borderRadius:20, marginBottom:22 }}>
            <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15, marginBottom:18 }}>সংযুক্ত হাসপাতাল</h3>
            <div style={{ overflowX:"auto" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                <thead>
                  <tr>{["হাসপাতাল","জেলা","শয্যা","ICU","জরুরি","রেটিং","অ্যাম্বুলেন্স","স্ট্যাটাস"].map(h=><th key={h} style={{ padding:"7px 11px", textAlign:"left", color:"var(--text2)", fontWeight:600, whiteSpace:"nowrap", borderBottom:"1px solid var(--border)" }}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {BD_HOSPITALS_DATA.map(h=>(
                    <tr key={h.id} style={{ borderBottom:"1px solid var(--border)" }}>
                      <td style={{ padding:"11px", color:"var(--text)", fontWeight:600 }}>{h.en}</td>
                      <td style={{ padding:"11px", color:"var(--text2)" }}>{h.district.split("(")[0]}</td>
                      <td style={{ padding:"11px", color:"var(--text2)" }}>{h.beds}</td>
                      <td style={{ padding:"11px", color:"var(--text2)" }}>{h.icu}</td>
                      <td style={{ padding:"11px" }}>{h.emergency?<Badge label="হ্যাঁ" color={G.emerald} />:<Badge label="না" color={G.slate} />}</td>
                      <td style={{ padding:"11px", fontWeight:700, color:G.gold }}>⭐{h.rating}</td>
                      <td style={{ padding:"11px" }}>{h.ambulance?"🚑":"-"}</td>
                      <td style={{ padding:"11px" }}><Badge label="সক্রিয়" color={G.emerald} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="glass" style={{ padding:22, borderRadius:20, marginBottom:22 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
            <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15 }}>সাম্প্রতিক অ্যাপয়েন্টমেন্ট</h3>
            <button onClick={()=>notify("সব অ্যাপয়েন্টমেন্ট","info")} style={{ fontSize:12, color:G.teal, background:"none", border:"none", cursor:"pointer", fontWeight:600 }}>সব দেখুন →</button>
          </div>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
              <thead>
                <tr>{["রোগী","ডাক্তার","বিভাগ","তারিখ","সময়","স্ট্যাটাস","ফি"].map(h=><th key={h} style={{ padding:"7px 11px", textAlign:"left", color:"var(--text2)", fontWeight:600, whiteSpace:"nowrap", borderBottom:"1px solid var(--border)" }}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {SAMPLE_APPOINTMENTS.map(apt=>(
                  <tr key={apt.id} style={{ borderBottom:"1px solid var(--border)" }}>
                    <td style={{ padding:"11px", color:"var(--text)", fontWeight:600 }}>{apt.patient}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{apt.doctor}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{apt.spec}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{apt.date}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{apt.time}</td>
                    <td style={{ padding:"11px" }}><Badge label={apt.status==="confirmed"?"নিশ্চিত":apt.status==="pending"?"অপেক্ষমাণ":apt.status==="completed"?"সম্পন্ন":"বাতিল"} color={{ confirmed:G.emerald, pending:G.gold, completed:G.teal, cancelled:G.rose }[apt.status]} /></td>
                    <td style={{ padding:"11px", fontWeight:700, color:G.teal }}>{fmt(apt.fee)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass" style={{ padding:22, borderRadius:20 }}>
          <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15, marginBottom:18 }}>শীর্ষ রেটেড ডাক্তার</h3>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))", gap:14 }}>
            {[...DOCTORS].sort((a,b)=>b.rating-a.rating).slice(0,4).map((doc,i)=>(
              <div key={doc.id} className="glass" style={{ padding:14, borderRadius:13, display:"flex", gap:11, alignItems:"center" }}>
                <div style={{ fontSize:20, fontWeight:800, color:G.teal, opacity:.35, width:26, flexShrink:0 }}>#{i+1}</div>
                <img src={doc.avatar} alt="" style={{ width:42, height:42, borderRadius:"50%", objectFit:"cover", background:"var(--surface2)" }} />
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:600, fontSize:12, color:"var(--text)", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{doc.name}</div>
                  <div style={{ fontSize:10, color:"var(--text2)" }}>{doc.specName}</div>
                  <Stars rating={doc.rating} size={10} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── CHATBOT ──────────────────────────────────────────────────────────────────
const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ id:1, role:"bot", text:"আস্সালামু আলাইকুম! আমি MediBot 🤖 — আপনার স্বাস্থ্যসেবা সহকারী। কীভাবে সাহায্য করতে পারি?" }]);
  const [inp, setInp] = useState("");
  const [typing, setTyping] = useState(false);
  const [lang, setLang] = useState("bn");
  const endRef = useRef(null);
  useEffect(()=>{ endRef.current?.scrollIntoView({ behavior:"smooth" }); },[msgs]);

  const send = async () => {
    const t = inp.trim();
    if (!t) return;
    setInp("");
    setMsgs(m=>[...m,{ id:Date.now(), role:"user", text:t }]);
    setTyping(true);
    await delay(700+Math.random()*600);
    const lower = t.toLowerCase();
    let reply;
    if (/hello|hi|hey|হ্যালো|সালাম|হ্যা/.test(lower)) reply = rand(CHAT_BD.greeting);
    else if (/appointment|book|বুক|অ্যাপয়েন্টমেন্ট/.test(lower)) reply = rand(CHAT_BD.appointment);
    else if (/emergency|জরুরি|999|ambulance|অ্যাম্বুলেন্স/.test(lower)) reply = rand(CHAT_BD.emergency);
    else if (/pain|fever|sick|symptom|ব্যথা|জ্বর|অসুস্থ|লক্ষণ/.test(lower)) reply = rand(CHAT_BD.symptoms);
    else reply = rand(CHAT_BD.default);
    setTyping(false);
    setMsgs(m=>[...m,{ id:Date.now()+1, role:"bot", text:reply }]);
  };

  return (
    <>
      <button onClick={()=>setOpen(o=>!o)} style={{ position:"fixed", bottom:82, right:22, width:54, height:54, borderRadius:"50%", background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", cursor:"pointer", fontSize:24, zIndex:900, boxShadow:`0 7px 26px ${G.teal}50`, display:"flex", alignItems:"center", justifyContent:"center", transition:"transform .2s", transform:open?"rotate(45deg)":"none" }}>
        {open?"✕":"💬"}
      </button>
      {open && (
        <div className="fade-up" style={{ position:"fixed", bottom:150, right:22, width:330, height:450, borderRadius:20, overflow:"hidden", zIndex:900, boxShadow:"0 18px 55px rgba(0,0,0,.38)", display:"flex", flexDirection:"column", background:"var(--surface)", border:"1px solid var(--border)" }}>
          <div style={{ padding:"14px 18px", background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, display:"flex", alignItems:"center", gap:9 }}>
            <div style={{ width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,.18)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }}>🤖</div>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:700, color:"#fff", fontSize:13 }}>MediBot AI</div>
              <div style={{ fontSize:10, color:"rgba(255,255,255,.7)", display:"flex", alignItems:"center", gap:3 }}>
                <span style={{ width:5, height:5, borderRadius:"50%", background:"#4ade80" }} /> অনলাইন
              </div>
            </div>
            <div style={{ display:"flex", gap:5 }}>
              {["🇧🇩","🇬🇧"].map((f,i)=>(
                <button key={i} onClick={()=>{ setLang(i===0?"bn":"en"); notify(i===0?"বাংলায় পরিবর্তন":"Switched to English","info"); }} style={{ background:lang===(i===0?"bn":"en")?"rgba(255,255,255,.3)":"transparent", border:"none", cursor:"pointer", fontSize:14, padding:"2px 5px", borderRadius:5 }}>{f}</button>
              ))}
            </div>
            <button onClick={()=>setOpen(false)} style={{ background:"none", border:"none", color:"#fff", cursor:"pointer", fontSize:17 }}>×</button>
          </div>
          <div style={{ flex:1, overflowY:"auto", padding:14, display:"flex", flexDirection:"column", gap:9 }}>
            {msgs.map(m=>(
              <div key={m.id} style={{ display:"flex", justifyContent:m.role==="user"?"flex-end":"flex-start" }}>
                <div className={`chat-msg ${m.role}`} style={{ padding:"9px 13px", fontSize:12, lineHeight:1.55 }}>{m.text}</div>
              </div>
            ))}
            {typing && (
              <div style={{ display:"flex", gap:4, padding:"9px 13px", background:"var(--surface2)", borderRadius:"17px 17px 17px 4px", width:"fit-content" }}>
                {[0,1,2].map(i=><div key={i} className="a-pulse" style={{ width:5, height:5, borderRadius:"50%", background:G.teal, animationDelay:`${i*.18}s` }} />)}
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="scroll-x" style={{ display:"flex", gap:6, padding:"6px 12px", borderTop:"1px solid var(--border)" }}>
            {["জরুরি সাহায্য","ডাক্তার খুঁজুন","বুকিং করুন"].map(q=>(
              <button key={q} onClick={()=>{ setInp(q); }} style={{ padding:"4px 10px", borderRadius:16, background:`${G.teal}15`, color:G.teal, border:`1px solid ${G.teal}33`, cursor:"pointer", fontSize:11, fontWeight:600, whiteSpace:"nowrap", fontFamily:"'DM Sans',sans-serif" }}>{q}</button>
            ))}
          </div>
          <div style={{ padding:"10px 14px", borderTop:"1px solid var(--border)", display:"flex", gap:7 }}>
            <input className="hms-input" placeholder="বার্তা লিখুন…" value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} style={{ fontSize:12, padding:"9px 13px" }} />
            <button onClick={send} style={{ width:38, height:38, borderRadius:9, flexShrink:0, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", cursor:"pointer", fontSize:15, display:"flex", alignItems:"center", justifyContent:"center" }}>➤</button>
          </div>
        </div>
      )}
    </>
  );
};

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const [page, setPage] = useState("Home");
  const [role, setRole] = useState("patient");
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [preDoc, setPreDoc] = useState(null);

  useEffect(()=>{ injectStyles(); document.body.className="hms-dark"; },[]);
  useEffect(()=>{ injectStyles(); document.body.className=dark?"hms-dark":"hms-light"; },[dark]);

  const handleBook = doc => { setPreDoc(doc); setPage("Appointments"); notify(`${doc.name} এর সাথে বুকিং শুরু`,"success"); window.scrollTo(0,0); };

  return (
    <div style={{ minHeight:"100vh", background:"var(--bg)" }}>
      <Header page={page} setPage={setPage} dark={dark} setDark={setDark} role={role} setRole={setRole} />
      {page==="Home"         && <HomePage         setPage={setPage} setSelectedSpec={setSelectedSpec} />}
      {page==="Doctors"      && <DoctorsPage       selectedSpec={selectedSpec} setSelectedSpec={setSelectedSpec} onBookDoctor={handleBook} />}
      {page==="Appointments" && <AppointmentsPage  preSelectedDoctor={preDoc} setPreSelectedDoctor={setPreDoc} />}
      {page==="Emergency"    && <EmergencyPage     onBookDoctor={handleBook} />}
      {page==="Dashboard"    && <DashboardPage     role={role} />}
      <Chatbot />
      <NotificationCenter />
    </div>
  );
}