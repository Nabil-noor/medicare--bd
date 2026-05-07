import { useState, useEffect, useRef } from "react";

// ΓöÇΓöÇΓöÇ PALETTE ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const G = {
  teal:"#0d9488", tealDark:"#0f766e", tealLight:"#99f6e4",
  navy:"#0f172a", navyMid:"#1e293b", navyLight:"#334155",
  slate:"#64748b", white:"#f8fafc", gold:"#f59e0b",
  rose:"#f43f5e", emerald:"#10b981", sky:"#38bdf8", purple:"#a78bfa",
  red:"#ef4444", orange:"#f97316",
};

// ΓöÇΓöÇΓöÇ STYLES ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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

// ΓöÇΓöÇΓöÇ UTILS ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const rand = arr => arr[Math.floor(Math.random() * arr.length)];
const delay = ms => new Promise(r => setTimeout(r, ms));
const fmt = n => "αº│" + n.toLocaleString("en-IN");

// ΓöÇΓöÇΓöÇ NOTIFICATIONS ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
let _nid = 1, _nset = null;
const notify = (msg, type = "info") => {
  const id = _nid++;
  if (_nset) _nset(p => [...p, { id, msg, type }]);
  setTimeout(() => { if (_nset) _nset(p => p.filter(n => n.id !== id)); }, 4000);
};
const NC = { info: G.sky, success: G.emerald, warning: G.gold, error: G.rose };
const NI = { info: "Γä╣∩╕Å", success: "Γ£à", warning: "ΓÜá∩╕Å", error: "Γ¥î" };

const NotificationCenter = () => {
  const [notifs, setNotifs] = useState([]);
  useEffect(() => { _nset = setNotifs; return () => { _nset = null; }; }, []);
  return (
    <div style={{ position:"fixed", bottom:24, right:24, zIndex:9999, display:"flex", flexDirection:"column", gap:8, maxWidth:340 }}>
      {notifs.map(n => (
        <div key={n.id} className="notif-in" style={{ background:"var(--surface)", border:`1.5px solid ${NC[n.type]}44`, borderRadius:13, padding:"11px 15px", display:"flex", alignItems:"center", gap:9, boxShadow:`0 8px 30px ${NC[n.type]}1a` }}>
          <span style={{ fontSize:17 }}>{NI[n.type]}</span>
          <span style={{ fontSize:13, color:"var(--text)", fontWeight:500, flex:1 }}>{n.msg}</span>
          <span style={{ fontSize:16, cursor:"pointer", color:"var(--text2)" }} onClick={() => setNotifs(p => p.filter(x => x.id !== n.id))}>├ù</span>
        </div>
      ))}
    </div>
  );
};

// ΓöÇΓöÇΓöÇ SHARED COMPONENTS ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const Stars = ({ rating, size = 13 }) => (
  <span style={{ display:"inline-flex", gap:2 }}>
    {[1,2,3,4,5].map(s => <span key={s} style={{ fontSize:size, color: s <= Math.round(rating) ? G.gold : G.slate }}>Γÿà</span>)}
  </span>
);
const Badge = ({ label, color = G.teal }) => (
  <span className="badge" style={{ background:color+"22", color }}>ΓùÅ {label}</span>
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

// ΓöÇΓöÇΓöÇ DOCTOR AVATAR ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const AVATAR_STYLES = ["personas","adventurer","avataaars","lorelei","micah","notionists","open-peeps","pixel-art"];
const doctorAvatar = (seed, style) =>
  `https://api.dicebear.com/8.x/${style}/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&radius=50`;

// ΓöÇΓöÇΓöÇ DATA ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const SPECIALIZATIONS = [
  { id:"cardiology",    name:"αªòαª╛αª░αºìαªíαª┐αªôαª▓αª£αª┐ (Cardiology)",     en:"Cardiology",     icon:"≡ƒ½Ç", color:"#f43f5e", desc:"Heart & cardiovascular" },
  { id:"neurology",     name:"αª¿αª┐αªëαª░αºïαª▓αª£αª┐ (Neurology)",         en:"Neurology",      icon:"≡ƒºá", color:"#a78bfa", desc:"Brain & nervous system" },
  { id:"orthopedics",   name:"αªàαª░αºìαªÑαºïαª¬αºçαªíαª┐αªòαºìαª╕ (Orthopedics)",  en:"Orthopedics",    icon:"≡ƒª┤", color:"#f59e0b", desc:"Bones, joints & muscles" },
  { id:"pediatrics",    name:"αª╢αª┐αª╢αºü αª¼αª┐αª¡αª╛αªù (Pediatrics)",      en:"Pediatrics",     icon:"≡ƒæ╢", color:"#38bdf8", desc:"Children's health" },
  { id:"dermatology",   name:"αªÜαª░αºìαª«αª░αºïαªù (Dermatology)",         en:"Dermatology",    icon:"≡ƒº¼", color:"#fb923c", desc:"Skin, hair & nails" },
  { id:"ophthalmology", name:"αªÜαªòαºìαª╖αºü αª¼αª┐αª¡αª╛αªù (Ophthalmology)",  en:"Ophthalmology",  icon:"≡ƒæü∩╕Å", color:"#34d399", desc:"Eyes & vision" },
  { id:"psychiatry",    name:"αª«αª╛αª¿αª╕αª┐αªò αª░αºïαªù (Psychiatry)",       en:"Psychiatry",     icon:"≡ƒº⌐", color:"#c084fc", desc:"Mental health" },
  { id:"oncology",      name:"αªàαª¿αªòαºïαª▓αª£αª┐ (Oncology)",           en:"Oncology",       icon:"≡ƒö¼", color:"#f87171", desc:"Cancer treatment" },
  { id:"gastro",        name:"αªùαºìαª»αª╛αª╕αºìαªƒαºìαª░αºï (Gastroenterology)", en:"Gastroenterology",icon:"≡ƒìâ",color:"#4ade80",desc:"Digestive system" },
  { id:"endocrinology", name:"αªÅαª¿αºìαªíαºïαªòαºìαª░αª╛αªçαª¿ (Endocrinology)",  en:"Endocrinology",  icon:"ΓÜù∩╕Å", color:"#fbbf24", desc:"Hormones & metabolism" },
  { id:"pulmonology",   name:"αª¼αªòαºìαª╖ αª¼αª┐αª¡αª╛αªù (Pulmonology)",     en:"Pulmonology",    icon:"≡ƒ½ü", color:"#60a5fa", desc:"Lungs & respiratory" },
  { id:"urology",       name:"αªçαªëαª░αºïαª▓αª£αª┐ (Urology)",            en:"Urology",        icon:"≡ƒÆº", color:"#2dd4bf", desc:"Urinary system" },
  { id:"gynecology",    name:"αª╕αºìαªñαºìαª░αºÇαª░αºïαªù (Gynecology)",        en:"Gynecology",     icon:"≡ƒî╕", color:"#f472b6", desc:"Women's health" },
  { id:"ent",           name:"αª¿αª╛αªò-αªòαª╛αª¿-αªùαª▓αª╛ (ENT)",             en:"ENT",            icon:"≡ƒæé", color:"#a3e635", desc:"Ear, nose & throat" },
  { id:"general",       name:"αª╕αª╛αªºαª╛αª░αªú αªÜαª┐αªòαª┐αºÄαª╕αª╛ (General)",     en:"General Medicine",icon:"≡ƒÅÑ",color:"#94a3b8",desc:"Primary care" },
];

const BD_DISTRICTS = ["αªóαª╛αªòαª╛ (Dhaka)","αªÜαªƒαºìαªƒαªùαºìαª░αª╛αª« (Chittagong)","αª╕αª┐αª▓αºçαªƒ (Sylhet)","αª░αª╛αª£αª╢αª╛αª╣αºÇ (Rajshahi)","αªûαºüαª▓αª¿αª╛ (Khulna)","αª«αª»αª╝αª«αª¿αª╕αª┐αªéαª╣ (Mymensingh)","αª¼αª░αª┐αª╢αª╛αª▓ (Barisal)","αª░αªéαª¬αºüαª░ (Rangpur)","αªòαºüαª«αª┐αª▓αºìαª▓αª╛ (Comilla)","αª¿αª╛αª░αª╛αª»αª╝αªúαªùαª₧αºìαª£ (Narayanganj)"];

const BD_HOSPITALS_DATA = [
  { id:1,  name:"αªóαª╛αªòαª╛ αª«αºçαªíαª┐αªòαºçαª▓ αªòαª▓αºçαª£ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓",   en:"Dhaka Medical College Hospital",    district:"αªóαª╛αªòαª╛ (Dhaka)",       address:"Bakshibazar, Dhaka-1000",      emergency:true,  icu:45, beds:2600, rating:4.3, distance:2.1,  image:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=80", phone:"01711-123456", ambulance:true },
  { id:2,  name:"αª¼αªÖαºìαªùαª¼αª¿αºìαªºαºü αª╢αºçαªû αª«αºüαª£αª┐αª¼ αª«αºçαªíαª┐αªòαºçαª▓",    en:"BSMMU Hospital",                    district:"αªóαª╛αªòαª╛ (Dhaka)",       address:"Shahbag, Dhaka-1000",          emergency:true,  icu:60, beds:1900, rating:4.5, distance:3.4,  image:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80", phone:"01711-654321", ambulance:true },
  { id:3,  name:"αª╕αºìαªòαª»αª╝αª╛αª░ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓",               en:"Square Hospital",                   district:"αªóαª╛αªòαª╛ (Dhaka)",       address:"West Panthapath, Dhaka-1205",  emergency:true,  icu:30, beds:450,  rating:4.7, distance:5.0,  image:"https://images.unsplash.com/photo-1580281657702-257584239a55?w=400&q=80", phone:"01811-111222", ambulance:true },
  { id:4,  name:"αªçαªëαª¿αª╛αªçαªƒαºçαªí αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓",              en:"United Hospital",                   district:"αªóαª╛αªòαª╛ (Dhaka)",       address:"Gulshan-2, Dhaka-1212",        emergency:true,  icu:28, beds:400,  rating:4.6, distance:7.2,  image:"https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80", phone:"01912-222333", ambulance:true },
  { id:5,  name:"αªàαºìαª»αª╛αª¬αºïαª▓αºï αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αªóαª╛αªòαª╛",         en:"Apollo Hospitals Dhaka",            district:"αªóαª╛αªòαª╛ (Dhaka)",       address:"Plot 81, Bashundhara, Dhaka",  emergency:true,  icu:35, beds:500,  rating:4.8, distance:9.5,  image:"https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=80", phone:"01611-333444", ambulance:true },
  { id:6,  name:"αªÜαªƒαºìαªƒαªùαºìαª░αª╛αª« αª«αºçαªíαª┐αªòαºçαª▓ αªòαª▓αºçαª£",         en:"Chittagong Medical College",        district:"αªÜαªƒαºìαªƒαªùαºìαª░αª╛αª« (Chittagong)",address:"K B Fazlul Kader Road, CTG", emergency:true,  icu:40, beds:1800, rating:4.2, distance:12.3, image:"https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&q=80", phone:"01711-555666", ambulance:true },
  { id:7,  name:"αª╕αª┐αª▓αºçαªƒ αªÅαª« αªÅ αª£αª┐ αªôαª╕αª«αª╛αª¿αºÇ",           en:"MAG Osmani Medical College",        district:"αª╕αª┐αª▓αºçαªƒ (Sylhet)",     address:"Mirabazar, Sylhet-3100",       emergency:true,  icu:25, beds:1200, rating:4.1, distance:18.7, image:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&q=80", phone:"01711-777888", ambulance:true },
  { id:8,  name:"αª▓αºìαª»αª╛αª¼ αªÅαªçαªí αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓",             en:"Lab Aid Hospital",                  district:"αªóαª╛αªòαª╛ (Dhaka)",       address:"House 1, Road 4, Dhanmondi",   emergency:false, icu:15, beds:250,  rating:4.4, distance:6.1,  image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80", phone:"01811-999000", ambulance:false },
  { id:9,  name:"αª░αª╛αª£αª╢αª╛αª╣αºÇ αª«αºçαªíαª┐αªòαºçαª▓ αªòαª▓αºçαª£",           en:"Rajshahi Medical College",          district:"αª░αª╛αª£αª╢αª╛αª╣αºÇ (Rajshahi)", address:"Laxmipur, Rajshahi-6000",      emergency:true,  icu:20, beds:1400, rating:4.0, distance:24.5, image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80", phone:"01711-101112", ambulance:true },
  { id:10, name:"αªûαºüαª▓αª¿αª╛ αª«αºçαªíαª┐αªòαºçαª▓ αªòαª▓αºçαª£",             en:"Khulna Medical College",            district:"αªûαºüαª▓αª¿αª╛ (Khulna)",     address:"D.T Road, Khulna-9000",        emergency:true,  icu:18, beds:900,  rating:4.1, distance:30.2, image:"https://images.unsplash.com/photo-1632923253184-5f5e20c96e53?w=400&q=80", phone:"01711-131415", ambulance:true },
];

const BD_DOCTOR_NAMES = [
  ["αªíαª╛. αª░αª╣αª┐αª« αªëαªªαºìαªªαª┐αª¿ αªåαª╣αª«αºçαªª","αªíαª╛. αªòαª░αª┐αª« αª╣αºïαª╕αºçαª¿","αªíαª╛. αª¿αª╛αª£αª«αª╛ αª¼αºçαªùαª«","αªíαª╛. αª╢αª½αª┐αªòαºüαª▓ αªçαª╕αª▓αª╛αª«"],
  ["αªíαª╛. αª½αª╛αª░αª╣αª╛αª¿αª╛ αªåαªòαºìαªñαª╛αª░","αªíαª╛. αª«αª╛αª╣αª¼αºüαª¼αºüαª░ αª░αª╣αª«αª╛αª¿","αªíαª╛. αª╕αª╛αª▓αª«αª╛ αªûαª╛αª¿αª«","αªíαª╛. αªåαª¼αºìαªªαºüαª▓ αªòαª╛αªªαºçαª░"],
  ["αªíαª╛. αªñαª╛αª╣αª«αª┐αª¿αª╛ αª¬αª╛αª░αª¡αºÇαª¿","αªíαª╛. αª£αª╛αª╣αª╛αªÖαºìαªùαºÇαª░ αªåαª▓αª«","αªíαª╛. αª«αºîαª╕αºüαª«αºÇ αª╣αªò","αªíαª╛. αªçαª«αª░αª╛αª¿ αª╣αºïαª╕αºçαª¿"],
  ["αªíαª╛. αª¿αª╛αª╕αª░αª┐αª¿ αª╕αºüαª▓αªñαª╛αª¿αª╛","αªíαª╛. αªòαª╛αª«αª╛αª▓ αªëαªªαºìαªªαª┐αª¿","αªíαª╛. αª░αºüαª«αª╛ αª¼αºçαªùαª«","αªíαª╛. αªåαª╢αª░αª╛αª½αºüαª▓ αª╣αªò"],
  ["αªíαª╛. αª╕αª╛αªªαª┐αª»αª╝αª╛ αªçαª╕αª▓αª╛αª«","αªíαª╛. αª«αºïαª╢αª╛αª░αª½ αª╣αºïαª╕αºçαª¿","αªíαª╛. αª▓αª╛αª»αª╝αª▓αª╛ αªåαª₧αºìαª£αºüαª«","αªíαª╛. αª░αª½αª┐αªòαºüαª▓ αªçαª╕αª▓αª╛αª«"],
  ["αªíαª╛. αª╣αª╛αª╕αª┐αª¿αª╛ αª¼αºçαªùαª«","αªíαª╛. αªåαª¿αª┐αª╕αºüαª░ αª░αª╣αª«αª╛αª¿","αªíαª╛. αª£αºçαª¼αºüαª¿αºìαª¿αºçαª╕αª╛","αªíαª╛. αª«αºïαª╣αª╛αª«αºìαª«αªª αªåαª▓αºÇ"],
  ["αªíαª╛. αªªαª┐αª▓αª░αºüαª¼αª╛ αªûαª╛αª¿αª«","αªíαª╛. αª╕αª┐αª░αª╛αª£αºüαª▓ αªçαª╕αª▓αª╛αª«","αªíαª╛. αª«αª╛αª╣αª½αºüαª£αª╛ αª¼αºçαªùαª«","αªíαª╛. αªñαºîαª½αª┐αªòαºüαª░ αª░αª╣αª«αª╛αª¿"],
];
const BD_DEGREES = ["MBBS, MD","MBBS, MS","MBBS, FCPS","MBBS, PhD","MD, FRCS","MBBS, DGO","MBBS, DCH","MBBS, MRCP"];
const BD_EXP = [5,7,8,10,12,14,15,18,20,22,25];
const BD_FEES = [500,600,700,800,1000,1200,1500,1800,2000,2500,3000];
const BD_AVAIL = ["αª╕αºïαª«-αª╢αºüαªòαºìαª░","αª╕αºïαª«-αª╢αª¿αª┐","αª«αªÖαºìαªùαª▓-αª╢αª¿αª┐","αª¼αºüαªº-αª░αª¼αª┐","αª╕αºïαª«-αª¼αºüαªº-αª╢αºüαªòαºìαª░"];
const TIMES = ["9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM"];

let _did = 1;
const DOCTORS = SPECIALIZATIONS.flatMap((spec, si) => {
  const count = si < 8 ? 4 : 3;
  const names = BD_DOCTOR_NAMES[si % BD_DOCTOR_NAMES.length];
  return Array.from({ length: count }, (_, i) => {
    const id = _did++;
    const style = AVATAR_STYLES[(id - 1) % AVATAR_STYLES.length];
    return {
      id, name: names[i] || `αªíαª╛. αª░αª╣αª«αª╛αª¿-${id}`,
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
      languages: ["αª¼αª╛αªéαª▓αª╛", "English", Math.random() > .6 ? "αª╣αª┐αª¿αºìαªªαª┐" : null].filter(Boolean),
      nextSlot: ["αªåαª£ αº¿:αºªαºª PM","αªåαª£ αº¬:αº⌐αºª PM","αªåαªùαª╛αª«αºÇαªòαª╛αª▓ αººαºª:αºªαºª AM","αªåαªùαª╛αª«αºÇαªòαª╛αª▓ αº¿:αºªαºª PM","αª¼αºâαª╣αª╕αºìαª¬αªñαª┐αª¼αª╛αª░ αººαºº:αºªαºª AM"][Math.floor(Math.random()*5)],
      district: rand(BD_DISTRICTS), online: Math.random() > .3,
    };
  });
});

const SYMPTOM_MAP = {
  "chest pain":"cardiology","heart":"cardiology","palpitation":"cardiology","αª╣αª╛αª░αºìαªƒ":"cardiology",
  "headache":"neurology","dizziness":"neurology","seizure":"neurology","αª«αª╛αªÑαª╛αª¼αºìαª»αªÑαª╛":"neurology","αª«αª╛αªÑαª╛":"neurology",
  "joint pain":"orthopedics","back pain":"orthopedics","fracture":"orthopedics","αª╣αª╛αªíαª╝":"orthopedics","αª╣αª╛αªüαªƒαºü":"orthopedics",
  "fever":"general","cold":"general","flu":"general","fatigue":"general","αª£αºìαª¼αª░":"general",
  "skin":"dermatology","rash":"dermatology","eczema":"dermatology","αªÜαª╛αª«αªíαª╝αª╛":"dermatology","αªñαºìαª¼αªò":"dermatology",
  "vision":"ophthalmology","eye":"ophthalmology","blurry":"ophthalmology","αªÜαºïαªû":"ophthalmology",
  "anxiety":"psychiatry","depression":"psychiatry","insomnia":"psychiatry","αª«αª╛αª¿αª╕αª┐αªò":"psychiatry",
  "stomach":"gastro","nausea":"gastro","diarrhea":"gastro","αª¬αºçαªƒ":"gastro","αª¼αª«αª┐":"gastro",
  "cough":"pulmonology","asthma":"pulmonology","breathing":"pulmonology","αª╢αºìαª¼αª╛αª╕":"pulmonology","αª½αºüαª╕αª½αºüαª╕":"pulmonology",
  "diabetes":"endocrinology","thyroid":"endocrinology","αªíαª╛αª»αª╝αª╛αª¼αºçαªƒαª┐αª╕":"endocrinology","αªÑαª╛αªçαª░αª»αª╝αºçαªí":"endocrinology",
  "child":"pediatrics","infant":"pediatrics","αª╢αª┐αª╢αºü":"pediatrics",
  "cancer":"oncology","tumor":"oncology","αªòαºìαª»αª╛αª¿αºìαª╕αª╛αª░":"oncology",
  "kidney":"urology","bladder":"urology","αªòαª┐αªíαª¿αª┐":"urology",
  "period":"gynecology","pregnancy":"gynecology","αªùαª░αºìαª¡":"gynecology","αª«αª╣αª┐αª▓αª╛":"gynecology",
  "ear":"ent","nose":"ent","throat":"ent","αªòαª╛αª¿":"ent","αªùαª▓αª╛":"ent","αª¿αª╛αªò":"ent",
};

const EMERG_KEYWORDS = ["chest pain","heart attack","stroke","seizure","unconscious","bleeding","fracture","difficulty breathing","αª¼αºüαªòαºç αª¼αºìαª»αªÑαª╛","αª╣αª╛αª░αºìαªƒ αªàαºìαª»αª╛αªƒαª╛αªò","αª╕αºìαªƒαºìαª░αºïαªò","αªàαª£αºìαª₧αª╛αª¿","αª░αªòαºìαªñαª¬αª╛αªñ"];

const SAMPLE_APPOINTMENTS = [
  { id:1, patient:"αªåαª░αª┐αª½ αª╣αºïαª╕αºçαª¿", doctor:"αªíαª╛. αª¿αª╛αª£αª«αª╛ αª¼αºçαªùαª«",    spec:"Cardiology",     date:"2026-05-08", time:"10:00 AM", status:"confirmed", fee:1500, token:"DHK-2345" },
  { id:2, patient:"αª╕αºüαª«αª╛αªçαª»αª╝αª╛ αªûαª╛αª¿αª«",doctor:"αªíαª╛. αªòαª░αª┐αª« αª╣αºïαª╕αºçαª¿",  spec:"Neurology",      date:"2026-05-09", time:"2:00 PM",  status:"pending",   fee:1200, token:"DHK-2346" },
  { id:3, patient:"αª░αª╛αª╣αºçαª▓αª╛ αª¼αºçαªùαª«", doctor:"αªíαª╛. αª½αª╛αª░αª╣αª╛αª¿αª╛ αªåαªòαºìαªñαª╛αª░",spec:"Cardiology",    date:"2026-05-07", time:"11:30 AM", status:"completed",  fee:2000, token:"DHK-2347" },
  { id:4, patient:"αªñαª╛αª¿αª¡αºÇαª░ αªåαª╣αª«αºçαªª",doctor:"αªíαª╛. αª«αª╛αª╣αª¼αºüαª¼αºüαª░ αª░αª╣αª«αª╛αª¿",spec:"Orthopedics",  date:"2026-05-10", time:"9:00 AM",  status:"confirmed",  fee:800,  token:"DHK-2348" },
  { id:5, patient:"αª«αª┐αª« αªåαªòαºìαªñαª╛αª░",  doctor:"αªíαª╛. αª╕αª╛αª▓αª«αª╛ αªûαª╛αª¿αª«",   spec:"General Medicine",date:"2026-05-06",time:"3:30 PM",  status:"cancelled",  fee:600,  token:"DHK-2349" },
];

const CHAT_BD = {
  greeting:["αª╕αºìαª¼αª╛αªùαªñαª«! αªåαª«αª┐ MediBot ≡ƒñû αªåαª¬αª¿αª╛αªòαºç αªòαºÇαª¡αª╛αª¼αºç αª╕αª╛αª╣αª╛αª»αºìαª» αªòαª░αªñαºç αª¬αª╛αª░αª┐?","αª╣αºìαª»αª╛αª▓αºï! αªåαª«αª┐ αªåαª¬αª¿αª╛αª░ αª¡αª╛αª░αºìαªÜαºüαª»αª╝αª╛αª▓ αª╕αºìαª¼αª╛αª╕αºìαªÑαºìαª» αª╕αª╣αªòαª╛αª░αºÇαÑñ αªåαª£ αªåαª¬αª¿αª╛αª░ αª╕αª«αª╕αºìαª»αª╛ αªòαºÇ?"],
  symptoms:["αªåαª¬αª¿αª╛αª░ αª▓αªòαºìαª╖αªúαªùαºüαª▓αºï αª¼αºüαª¥αªñαºç αª¬αª╛αª░αª¢αª┐αÑñ αª╕αªáαª┐αªò αª¼αª┐αª╢αºçαª╖αª£αºìαª₧ αªûαºüαªüαª£αºç αª¬αºçαªñαºç Appointments αªƒαºìαª»αª╛αª¼αºç αª»αª╛αª¿αÑñ","αªÅαªç αª▓αªòαºìαª╖αªúαªùαºüαª▓αºï αªùαºüαª░αºüαªñαºìαª¼αª¬αºéαª░αºìαªúαÑñ αªåαª«αª╛αªªαºçαª░ AI αªåαª¬αª¿αª╛αª░ αª£αª¿αºìαª» αª╕αºçαª░αª╛ αªíαª╛αªòαºìαªñαª╛αª░ αª╕αª╛αª£αºçαª╕αºìαªƒ αªòαª░αª¼αºçαÑñ"],
  appointment:["αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ αª¼αºüαªò αªòαª░αªñαºç Appointments αªƒαºìαª»αª╛αª¼αºç αª»αª╛αª¿ αªÅαª¼αªé αªåαª¬αª¿αª╛αª░ αª¬αª¢αª¿αºìαªªαºçαª░ αªíαª╛αªòαºìαªñαª╛αª░ αª¼αºçαª¢αºç αª¿αª┐αª¿αÑñ","αªåαª«αª╛αªªαºçαª░ αª╕αºìαª«αª╛αª░αºìαªƒ αªòαºìαª»αª╛αª▓αºçαª¿αºìαªíαª╛αª░ αªÑαºçαªòαºç αª╕αºüαª¼αª┐αªºαª╛αª£αª¿αªò αª╕αª«αª»αª╝ αª¼αºçαª¢αºç αª¿αª┐αª¿αÑñ"],
  emergency:["ΓÜá∩╕Å αª£αª░αºüαª░αª┐ αªàαª¼αª╕αºìαªÑαª╛αª»αª╝ αªÅαªûαª¿αªç Emergency αªƒαºìαª»αª╛αª¼αºç αª»αª╛αª¿ αªàαªÑαª¼αª╛ αº»αº»αº» αª¿αª«αºìαª¼αª░αºç αªòαª▓ αªòαª░αºüαª¿!","αª£αª░αºüαª░αª┐ αª¬αª░αª┐αª╕αºìαªÑαª┐αªñαª┐αªñαºç αª╕αª¼αªÜαºçαª»αª╝αºç αªòαª╛αª¢αºçαª░ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓αºç αª»αª╛αª¿αÑñ Emergency αª¼αª╛αªƒαª¿ αª¼αºìαª»αª¼αª╣αª╛αª░ αªòαª░αºüαª¿αÑñ"],
  default:["αªåαª¬αª¿αª╛αª░ αª╕αª«αª╕αºìαª»αª╛ αª¼αª░αºìαªúαª¿αª╛ αªòαª░αºüαª¿, αªåαª«αª┐ αª╕αªáαª┐αªò αª¼αª┐αª╢αºçαª╖αª£αºìαª₧ αªûαºüαªüαª£αºç αªªαºçαª¼αÑñ","αªåαª«αª┐ αº¿αº¬/αº¡ αªåαª¬αª¿αª╛αª░ αª╕αºçαª¼αª╛αª»αª╝ αªåαª¢αª┐αÑñ αª▓αªòαºìαª╖αªú αª▓αª┐αªûαºüαª¿ αª¼αª╛ Emergency αª╕αª╛αª╣αª╛αª»αºìαª»αºçαª░ αª£αª¿αºìαª» αª£αª┐αª£αºìαª₧αºçαª╕ αªòαª░αºüαª¿αÑñ"],
};

// ΓöÇΓöÇΓöÇ HEADER ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const Header = ({ page, setPage, dark, setDark, role, setRole }) => {
  const [mob, setMob] = useState(false);
  const pages = ["Home","Doctors","Appointments","Emergency","Dashboard"];
  return (
    <header style={{ position:"sticky", top:0, zIndex:200, background:dark?"rgba(8,14,26,.88)":"rgba(238,245,251,.88)", backdropFilter:"blur(22px)", borderBottom:"1px solid var(--border)", padding:"0 22px", height:66, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer" }} onClick={() => setPage("Home")}>
        <div style={{ width:38, height:38, borderRadius:10, background:`linear-gradient(135deg,${G.teal},${G.sky})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>≡ƒÅÑ</div>
        <span className="syne" style={{ fontSize:19, fontWeight:800, color:"var(--text)" }}>Medi<span style={{ color:G.teal }}>Care BD</span></span>
      </div>
      <nav className="hide-m" style={{ display:"flex", gap:3 }}>
        {pages.map(p => (
          <span key={p} className={`nav-link ${page===p?"active":""}`} onClick={() => setPage(p)}
            style={{ color: p==="Emergency" ? (page===p?undefined:G.rose) : undefined }}>
            {p==="Emergency" ? "≡ƒÜ¿ "+p : p}
          </span>
        ))}
      </nav>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <select className="hms-select hide-m" value={role} onChange={e => { setRole(e.target.value); notify(`${e.target.value} αª¡αª┐αªëαªñαºç αª¬αª░αª┐αª¼αª░αºìαªñαª¿ αª╣αª»αª╝αºçαª¢αºç`, "info"); }} style={{ fontSize:12, padding:"5px 9px" }}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Hospital Admin</option>
          <option value="superadmin">Super Admin</option>
        </select>
        <button onClick={() => { setDark(d=>!d); notify(dark?"αª▓αª╛αªçαªƒ αª«αºïαªí αªÜαª╛αª▓αºü":"αªíαª╛αª░αºìαªò αª«αºïαªí αªÜαª╛αª▓αºü","info"); }} style={{ background:"var(--surface2)", border:"none", cursor:"pointer", borderRadius:8, width:35, height:35, fontSize:17, color:"var(--text)" }}>{dark?"ΓÿÇ∩╕Å":"≡ƒîÖ"}</button>
        <button onClick={() => notify("αªòαºïαª¿αºï αª¿αªñαºüαª¿ αª¼αª┐αª£αºìαª₧αª¬αºìαªñαª┐ αª¿αºçαªç","info")} style={{ background:"var(--surface2)", border:"none", cursor:"pointer", borderRadius:8, width:35, height:35, fontSize:15, color:"var(--text)", position:"relative" }}>
          ≡ƒöö<span style={{ position:"absolute", top:4, right:4, width:7, height:7, borderRadius:"50%", background:G.rose }} />
        </button>
        <div style={{ width:35, height:35, borderRadius:8, background:`linear-gradient(135deg,${G.teal},${G.purple})`, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }} onClick={() => notify("αª¬αºìαª░αºïαª½αª╛αªçαª▓!","info")}>≡ƒæñ</div>
        <button style={{ background:"none", border:"none", cursor:"pointer", fontSize:22, color:"var(--text)" }} onClick={() => setMob(m=>!m)}>Γÿ░</button>
      </div>
      {mob && (
        <div style={{ position:"absolute", top:66, left:0, right:0, background:"var(--surface)", borderBottom:"1px solid var(--border)", padding:14, display:"flex", flexDirection:"column", gap:4, zIndex:300 }}>
          {pages.map(p => <span key={p} className={`nav-link ${page===p?"active":""}`} onClick={() => { setPage(p); setMob(false); }}>{p}</span>)}
        </div>
      )}
    </header>
  );
};

// ΓöÇΓöÇΓöÇ HOME PAGE ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const HomePage = ({ setPage, setSelectedSpec }) => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const testimonials = [
    { name:"αªåαª░αª┐αª½αª╛ αª¼αºçαªùαª«", text:"αªàαª¼αª┐αª╢αºìαª¼αª╛αª╕αºìαª» αª╕αºçαª¼αª╛! αª«αª╛αªñαºìαª░ αªòαª»αª╝αºçαªò αª«αª┐αª¿αª┐αªƒαºç αª╕αºçαª░αª╛ αªòαª╛αª░αºìαªíαª┐αªôαª▓αª£αª┐αª╕αºìαªƒ αªûαºüαªüαª£αºç αª¬αºçαª▓αª╛αª«αÑñ", rating:5, av:"≡ƒæ⌐" },
    { name:"αª░αª╛αªòαª┐αª¼αºüαª▓ αª╣αª╛αª╕αª╛αª¿", text:"AI αª▓αªòαºìαª╖αªú αª¼αª┐αª╢αºìαª▓αºçαª╖αªú αªàαª╕αª╛αªºαª╛αª░αªú αªòαª╛αª£ αªòαª░αºçαÑñ αª╕αªáαª┐αªò αª¼αª┐αª╢αºçαª╖αª£αºìαª₧αºçαª░ αªòαª╛αª¢αºç αª¬αºîαªüαª¢αª╛αªñαºç αª¬αºçαª░αºçαª¢αª┐αÑñ", rating:5, av:"≡ƒæ¿" },
    { name:"αªíαª╛. αª╕αºüαª«αª╛αªçαª»αª╝αª╛", text:"αª¼αª╛αªéαª▓αª╛αªªαºçαª╢αºçαª░ αª╕αª¼αªÜαºçαª»αª╝αºç αªåαªºαºüαª¿αª┐αªò αª╣αºçαª▓αªÑαªòαºçαª»αª╝αª╛αª░ αª¬αºìαª▓αºìαª»αª╛αªƒαª½αª░αºìαª«αÑñ αªàαªñαºìαª»αª¿αºìαªñ αª╕αª╣αª£αºç αª¼αºìαª»αª¼αª╣αª╛αª░αª»αºïαªùαºìαª»αÑñ", rating:5, av:"≡ƒæ⌐ΓÇìΓÜò∩╕Å" },
  ];
  useEffect(() => { const t = setInterval(() => setTestimonialIdx(c => (c+1) % testimonials.length), 4000); return () => clearInterval(t); }, []);
  const stats = [
    { v:"αº½αºª+",   l:"αª¼αª┐αª╢αºçαª╖αª£αºìαª₧ αªíαª╛αªòαºìαªñαª╛αª░", icon:"≡ƒæ¿ΓÇìΓÜò∩╕Å" },
    { v:"αººαº½+",   l:"αª¼αª┐αª╢αºçαª╖αª£αºìαª₧ αª¼αª┐αª¡αª╛αªù",  icon:"≡ƒö¼" },
    { v:"αººαºª+",   l:"αª╕αªéαª»αºüαªòαºìαªñ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓", icon:"≡ƒÅÑ" },
    { v:"αº¿αº¬/αº¡",  l:"αª£αª░αºüαª░αª┐ αª╕αºçαª¼αª╛",       icon:"≡ƒÜ¿" },
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
            <div className="badge" style={{ background:`${G.teal}20`, color:G.teal, marginBottom:18, fontSize:11 }}>≡ƒçº≡ƒç⌐ αª¼αª╛αªéαª▓αª╛αªªαºçαª╢αºçαª░ αªòαºçαª¿αºìαªªαºìαª░αºÇαª»αª╝ αª╕αºìαª¼αª╛αª╕αºìαªÑαºìαª»αª╕αºçαª¼αª╛ αª¬αºìαª▓αºìαª»αª╛αªƒαª½αª░αºìαª«</div>
            <h1 className="syne" style={{ fontSize:"clamp(32px,5vw,60px)", fontWeight:800, lineHeight:1.12, marginBottom:22, color:"var(--text)" }}>
              αªåαª¬αª¿αª╛αª░ αª╕αºìαª¼αª╛αª╕αºìαªÑαºìαª»,<br /><span className="grad-text">αªåαª«αª╛αªªαºçαª░ αªàαªùαºìαª░αª╛αªºαª┐αªòαª╛αª░</span>
            </h1>
            <p style={{ fontSize:16, color:"var(--text2)", lineHeight:1.75, marginBottom:36, maxWidth:460 }}>
              AI-αªÜαª╛αª▓αª┐αªñ αª▓αªòαºìαª╖αªú αª¼αª┐αª╢αºìαª▓αºçαª╖αªú, αª╕αºìαª«αª╛αª░αºìαªƒ αªíαª╛αªòαºìαªñαª╛αª░ αª╕αºüαª¬αª╛αª░αª┐αª╢ αªÅαª¼αªé αª╕αª╛αª░αª╛ αª¼αª╛αªéαª▓αª╛αªªαºçαª╢αºç αªñαª╛αºÄαªòαºìαª╖αªúαª┐αªò αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ αª¼αºüαªòαª┐αªéαÑñ
            </p>
            <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              <button className="btn-rip" onClick={() => setPage("Appointments")} style={{ padding:"13px 30px", borderRadius:13, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, color:"#fff", border:"none", cursor:"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:`0 8px 28px ${G.teal}40` }}>αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ αª¼αºüαªò αªòαª░αºüαª¿ ΓåÆ</button>
              <button onClick={() => setPage("Emergency")} style={{ padding:"13px 30px", borderRadius:13, background:`rgba(239,68,68,.12)`, color:G.rose, border:`1.5px solid ${G.rose}44`, cursor:"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>≡ƒÜ¿ αª£αª░αºüαª░αª┐ αª╕αºçαª¼αª╛</button>
            </div>
            <div style={{ display:"flex", gap:28, marginTop:44, flexWrap:"wrap" }}>
              {[["αººαºªαª╣αª╛αª£αª╛αª░+","αª░αºïαªùαºÇ"],["αº½αºª+","αª¼αª┐αª╢αºçαª╖αª£αºìαª₧"],["αº¬.αº»Γÿà","αªùαªíαª╝ αª░αºçαªƒαª┐αªé"]].map(([v,l])=>(
                <div key={l}><div className="syne" style={{ fontSize:22, fontWeight:800, color:G.teal }}>{v}</div><div style={{ fontSize:12, color:"var(--text2)" }}>{l}</div></div>
              ))}
            </div>
          </div>
          <div className="hide-m" style={{ position:"relative", height:480 }}>
            <div className="glass a-float" style={{ position:"absolute", top:"12%", left:"8%", right:"8%", padding:22, borderRadius:20 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
                <img src={doctorAvatar(42,"personas")} style={{ width:52, height:52, borderRadius:"50%", border:`2px solid ${G.teal}44` }} alt="" />
                <div>
                  <div style={{ fontWeight:700, fontSize:15, color:"var(--text)" }}>αªíαª╛. αª¿αª╛αª£αª«αª╛ αª¼αºçαªùαª«</div>
                  <div style={{ fontSize:12, color:G.teal }}>αª╕αª┐αª¿αª┐αª»αª╝αª░ αªòαª╛αª░αºìαªíαª┐αªôαª▓αª£αª┐αª╕αºìαªƒ</div>
                </div>
                <Badge label="αªàαª¿αª▓αª╛αªçαª¿" color={G.emerald} />
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", padding:"11px 0", borderTop:"1px solid var(--border)" }}>
                {[["Γ¡É αº¬.αº»","αª░αºçαªƒαª┐αªé"],[`αº│ αºº,αº½αºªαºª`,"αª½αª┐"],["≡ƒôà αªåαª£","αª¬αª░αºçαª░ αª╕αºìαª▓αªƒ"]].map(([v,l])=>(
                  <div key={l} style={{ textAlign:"center" }}><div style={{ fontSize:13, fontWeight:600, color:"var(--text)" }}>{v}</div><div style={{ fontSize:10, color:"var(--text2)" }}>{l}</div></div>
                ))}
              </div>
            </div>
            <div className="glass" style={{ position:"absolute", top:"4%", right:"4%", padding:"9px 14px", borderRadius:11, fontSize:12, fontWeight:600, color:"var(--text)" }}>≡ƒñû AI αª▓αªòαºìαª╖αªú αª¼αª┐αª╢αºìαª▓αºçαª╖αªò</div>
            <div className="glass" style={{ position:"absolute", bottom:"14%", left:"4%", padding:"9px 14px", borderRadius:11, fontSize:12, fontWeight:600, color:"var(--text)" }}>≡ƒôà αª╕αºìαª«αª╛αª░αºìαªƒ αª╢αª┐αªíαª┐αªëαª▓αª┐αªé</div>
            <div className="glass emerg-pulse" style={{ position:"absolute", bottom:"4%", right:"8%", padding:"9px 14px", borderRadius:11, fontSize:12, fontWeight:600, color:G.rose, border:`1.5px solid ${G.rose}44` }}>≡ƒÜ¿ αª£αª░αºüαª░αª┐ αª«αºïαªí αª╕αªòαºìαª░αª┐αª»αª╝</div>
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
            <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)" }}>αªåαª«αª╛αªªαºçαª░ <span className="grad-text">αª¼αª┐αª╢αºçαª╖αª£αºìαª₧ αª¼αª┐αª¡αª╛αªù</span></h2>
            <p style={{ color:"var(--text2)", fontSize:15, marginTop:10 }}>αª╕αªòαª▓ αª¬αºìαª░αªºαª╛αª¿ αªÜαª┐αªòαª┐αºÄαª╕αª╛ αª¼αª┐αª¡αª╛αªùαºç αª¼αª┐αª╢αºìαª¼αª«αª╛αª¿αºçαª░ αª╕αºçαª¼αª╛</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(165px,1fr))", gap:14 }}>
            {SPECIALIZATIONS.map((spec,i)=>(
              <div key={spec.id} className="glass card-h fade-up" style={{ padding:"18px 14px", textAlign:"center", cursor:"pointer", animationDelay:`${i*.04}s`, borderTop:`3px solid ${spec.color}` }} onClick={() => { setSelectedSpec(spec.id); setPage("Doctors"); }}>
                <div style={{ fontSize:28, marginBottom:8 }}>{spec.icon}</div>
                <div style={{ fontWeight:700, fontSize:13, color:"var(--text)", marginBottom:3 }}>{spec.en}</div>
                <div style={{ fontSize:10, color:"var(--text2)", marginBottom:6 }}>{spec.desc}</div>
                <div style={{ fontSize:11, color:spec.color, fontWeight:600 }}>{DOCTORS.filter(d=>d.specialization===spec.id).length} αªíαª╛αªòαºìαªñαª╛αª░ ΓåÆ</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"70px 24px", background:"var(--surface)" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:50 }}>
            <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)" }}>αªòαºÇαª¡αª╛αª¼αºç <span className="grad-text">αªòαª╛αª£ αªòαª░αºç</span></h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:28 }}>
            {[
              { step:"αºªαºº", title:"αª╕αª«αª╕αºìαª»αª╛ αª¼αª░αºìαªúαª¿αª╛ αªòαª░αºüαª¿", desc:"αªƒαª╛αªçαª¬ αªòαª░αºüαª¿, αªòαªÑαª╛ αª¼αª▓αºüαª¿ αª¼αª╛ αª¢αª¼αª┐ αªåαª¬αª▓αºïαªí αªòαª░αºüαª¿", icon:"≡ƒ⌐║" },
              { step:"αºªαº¿", title:"AI αª¼αª┐αª╢αºçαª╖αª£αºìαª₧ αª╕αºüαª¬αª╛αª░αª┐αª╢", desc:"αª╕αºìαª«αª╛αª░αºìαªƒ αª╕αª┐αª╕αºìαªƒαºçαª« αª╕αªáαª┐αªò αª¼αª┐αª¡αª╛αªù αª╕αºüαª¬αª╛αª░αª┐αª╢ αªòαª░αºç", icon:"≡ƒñû" },
              { step:"αºªαº⌐", title:"αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αª¼αºçαª¢αºç αª¿αª┐αª¿", desc:"αªòαª╛αª¢αºçαª░ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αªô αª¼αª┐αª╢αºçαª╖αª£αºìαª₧ αªûαºüαªüαª£αºüαª¿", icon:"≡ƒÅÑ" },
              { step:"αºªαº¬", title:"αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ αª¼αºüαªò", desc:"αª¬αª¢αª¿αºìαªªαºçαª░ αªñαª╛αª░αª┐αªû αªô αª╕αª«αª»αª╝ αª¼αºçαª¢αºç αª¼αºüαªò αªòαª░αºüαª¿", icon:"≡ƒôà" },
            ].map((s,i)=>(
              <div key={i} className="fade-up" style={{ textAlign:"center", position:"relative", animationDelay:`${i*.15}s` }}>
                <div style={{ width:68, height:68, borderRadius:"50%", background:`linear-gradient(135deg,${G.teal}22,${G.sky}22)`, border:`2px solid ${G.teal}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, margin:"0 auto 14px" }}>{s.icon}</div>
                <div className="syne" style={{ fontSize:11, fontWeight:700, color:G.teal, marginBottom:7, letterSpacing:2 }}>{s.step}</div>
                <div style={{ fontWeight:700, fontSize:15, color:"var(--text)", marginBottom:6 }}>{s.title}</div>
                <div style={{ fontSize:12, color:"var(--text2)", lineHeight:1.6 }}>{s.desc}</div>
                {i<3 && <div className="hide-m" style={{ position:"absolute", right:-14, top:"28%", fontSize:18, color:"var(--text2)" }}>ΓåÆ</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"70px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:44 }}>
            <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)" }}>αª╕αªéαª»αºüαªòαºìαªñ <span className="grad-text">αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓αª╕αª«αºéαª╣</span></h2>
            <p style={{ color:"var(--text2)", fontSize:14, marginTop:8 }}>αª╕αª╛αª░αª╛ αª¼αª╛αªéαª▓αª╛αªªαºçαª╢αºçαª░ αª╢αºÇαª░αºìαª╖ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αªÅαªòαªƒαª┐ αª¬αºìαª▓αºìαª»αª╛αªƒαª½αª░αºìαª«αºç</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:18 }}>
            {BD_HOSPITALS_DATA.slice(0,6).map(h=>(
              <div key={h.id} className="glass card-h" style={{ borderRadius:18, overflow:"hidden" }}>
                <div style={{ height:140, backgroundImage:`url(${h.image})`, backgroundSize:"cover", backgroundPosition:"center", position:"relative" }}>
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,.6),transparent)" }} />
                  {h.emergency && <div style={{ position:"absolute", top:10, right:10, background:G.rose, color:"#fff", fontSize:10, fontWeight:700, padding:"3px 9px", borderRadius:8 }}>≡ƒÜ¿ EMERGENCY</div>}
                  <div style={{ position:"absolute", bottom:10, left:12, color:"#fff", fontWeight:700, fontSize:14 }}>{h.en}</div>
                </div>
                <div style={{ padding:"14px 16px" }}>
                  <div style={{ fontSize:12, color:"var(--text2)", marginBottom:6 }}>≡ƒôì {h.district}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                    <span style={{ fontSize:12, color:"var(--text2)" }}>≡ƒ¢Å {h.beds} αª╢αª»αºìαª»αª╛</span>
                    <span style={{ fontSize:12, color:"var(--text2)" }}>≡ƒÅÑ ICU: {h.icu}</span>
                    <span style={{ fontSize:12, color:G.teal, fontWeight:600 }}>Γ¡É {h.rating}</span>
                  </div>
                  <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                    {h.ambulance && <span style={{ fontSize:10, background:`${G.rose}18`, color:G.rose, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>≡ƒÜæ αªàαºìαª»αª╛αª«αºìαª¼αºüαª▓αºçαª¿αºìαª╕</span>}
                    <span style={{ fontSize:10, background:`${G.teal}18`, color:G.teal, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>≡ƒôì {h.distance} αªòαª┐αª«αª┐</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"70px 24px", background:"var(--surface)" }}>
        <div style={{ maxWidth:680, margin:"0 auto", textAlign:"center" }}>
          <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)", marginBottom:44 }}>αª░αºïαªùαºÇαªªαºçαª░ <span className="grad-text">αªàαª¡αª┐αª£αºìαª₧αªñαª╛</span></h2>
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
        <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)", marginBottom:14 }}>αªÅαªûαª¿αªç αª╢αºüαª░αºü αªòαª░αºüαª¿ ΓÇö <span className="grad-text">αª¼αª┐αª¿αª╛αª«αºéαª▓αºìαª»αºç</span></h2>
        <p style={{ color:"var(--text2)", fontSize:15, marginBottom:28 }}>αª╣αª╛αª£αª╛αª░αºï αª░αºïαªùαºÇ αªçαªñαºïαª«αªºαºìαª»αºç MediCare BD αª¼αºìαª»αª¼αª╣αª╛αª░ αªòαª░αª¢αºçαª¿αÑñ</p>
        <button className="btn-rip" onClick={() => setPage("Appointments")} style={{ padding:"14px 36px", borderRadius:13, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, color:"#fff", border:"none", cursor:"pointer", fontSize:17, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:`0 10px 36px ${G.teal}40` }}>αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ αª¼αºüαªò αªòαª░αºüαª¿</button>
      </section>

      <footer style={{ background:"var(--surface)", borderTop:"1px solid var(--border)", padding:"36px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:28, marginBottom:28 }}>
          {[
            { title:"MediCare BD", items:["αªåαª«αª╛αªªαºçαª░ αª╕αª«αºìαª¬αª░αºìαªòαºç","αªåαª«αª╛αªªαºçαª░ αªªαª▓","αªòαºìαª»αª╛αª░αª┐αª»αª╝αª╛αª░","αª¬αºìαª░αºçαª╕"] },
            { title:"αª╕αºçαª¼αª╛", items:["αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ","αªíαª╛αªòαºìαªñαª╛αª░ αªûαºüαªüαª£αºüαª¿","αª£αª░αºüαª░αª┐ αª╕αºçαª¼αª╛","αªƒαºçαª▓αª┐αª«αºçαªíαª┐αª╕αª┐αª¿"] },
            { title:"αª¼αª┐αª╢αºçαª╖αªñαºìαª¼", items:["αªòαª╛αª░αºìαªíαª┐αªôαª▓αª£αª┐","αª¿αª┐αªëαª░αºïαª▓αª£αª┐","αª╢αª┐αª╢αºü αª¼αª┐αª¡αª╛αªù","αªàαª░αºìαªÑαºïαª¬αºçαªíαª┐αªòαºìαª╕"] },
            { title:"αª╕αª╣αª╛αª»αª╝αªñαª╛", items:["αª╕αª╛αª╣αª╛αª»αºìαª» αªòαºçαª¿αºìαªªαºìαª░","αªùαºïαª¬αª¿αºÇαª»αª╝αªñαª╛ αª¿αºÇαªñαª┐","αª╕αºçαª¼αª╛αª░ αª╢αª░αºìαªñ","αª»αºïαªùαª╛αª»αºïαªù"] },
          ].map(col=>(
            <div key={col.title}>
              <div className="syne" style={{ fontWeight:700, color:"var(--text)", marginBottom:14 }}>{col.title}</div>
              {col.items.map(item=>(
                <div key={item} style={{ fontSize:12, color:"var(--text2)", marginBottom:7, cursor:"pointer" }} onClick={() => notify(`${item} - αª╢αºÇαªÿαºìαª░αªç αªåαª╕αª¢αºç!`,"info")}>{item}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid var(--border)", paddingTop:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
          <span style={{ fontSize:12, color:"var(--text2)" }}>┬⌐ 2026 MediCare BD ΓÇö αª¼αª╛αªéαª▓αª╛αªªαºçαª╢αºçαª░ αªòαºçαª¿αºìαªªαºìαª░αºÇαª»αª╝ αª╕αºìαª¼αª╛αª╕αºìαªÑαºìαª»αª╕αºçαª¼αª╛ αª¬αºìαª▓αºìαª»αª╛αªƒαª½αª░αºìαª«</span>
          <div style={{ display:"flex", gap:14 }}>
            {["≡ƒÉª","≡ƒÆ╝","≡ƒôÿ","≡ƒô╕"].map((ic,i)=><span key={i} style={{ fontSize:17, cursor:"pointer" }} onClick={() => notify("αª╕αºïαª╢αºìαª»αª╛αª▓ αª«αª┐αªíαª┐αª»αª╝αª╛!","info")}>{ic}</span>)}
          </div>
        </div>
      </footer>
    </div>
  );
};

// ΓöÇΓöÇΓöÇ DOCTORS PAGE ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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
        <h1 className="syne" style={{ fontSize:30, fontWeight:800, color:"var(--text)", marginBottom:6 }}>αªíαª╛αªòαºìαªñαª╛αª░ <span className="grad-text">αªûαºüαªüαª£αºüαª¿</span></h1>
        <p style={{ color:"var(--text2)" }}>{filtered.length} αª£αª¿ αªíαª╛αªòαºìαªñαª╛αª░ αª¬αª╛αªôαª»αª╝αª╛ αªùαºçαª¢αºç</p>
      </div>

      <div className="glass" style={{ padding:18, marginBottom:24, display:"flex", gap:12, flexWrap:"wrap", alignItems:"center" }}>
        <input className="hms-input" placeholder="≡ƒöì αªíαª╛αªòαºìαªñαª╛αª░, αª¼αª┐αª¡αª╛αªù αª¼αª╛ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αªûαºüαªüαª£αºüαª¿..." value={search} onChange={e=>setSearch(e.target.value)} style={{ flex:"1 1 220px" }} />
        <select className="hms-select" value={filterSpec} onChange={e=>{ setFilterSpec(e.target.value); setSelectedSpec(null); }}>
          <option value="all">αª╕αª¼ αª¼αª┐αª¡αª╛αªù</option>
          {SPECIALIZATIONS.map(s=><option key={s.id} value={s.id}>{s.en}</option>)}
        </select>
        <select className="hms-select" value={distFilter} onChange={e=>setDistFilter(e.target.value)}>
          <option value="all">αª╕αª¼ αª£αºçαª▓αª╛</option>
          {BD_DISTRICTS.map(d=><option key={d} value={d}>{d}</option>)}
        </select>
        <select className="hms-select" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
          <option value="rating">αª╕αºçαª░αª╛ αª░αºçαªƒαª┐αªé</option>
          <option value="fee">αª╕αª░αºìαª¼αª¿αª┐αª«αºìαª¿ αª½αª┐</option>
          <option value="experience">αª╕αª░αºìαª¼αª╛αªºαª┐αªò αªàαª¡αª┐αª£αºìαª₧αªñαª╛</option>
        </select>
        <select className="hms-select" value={ratingFilter} onChange={e=>setRatingFilter(+e.target.value)}>
          <option value={0}>αª»αºçαªòαºïαª¿αºï αª░αºçαªƒαª┐αªé</option>
          <option value={4}>αº¬+ αªñαª╛αª░αª╛</option>
          <option value={4.5}>αº¬.αº½+ αªñαª╛αª░αª╛</option>
        </select>
      </div>

      <div className="scroll-x" style={{ display:"flex", gap:7, marginBottom:24, paddingBottom:4 }}>
        <button className={`tab-btn ${filterSpec==="all"?"active":""}`} onClick={()=>{ setFilterSpec("all"); setSelectedSpec(null); }}>αª╕αª¼</button>
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
                <Badge label={doc.online?"αªàαª¿αª▓αª╛αªçαª¿":"αªàαª½αª▓αª╛αªçαª¿"} color={doc.online?G.emerald:G.slate} />
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:11 }}>
                <Stars rating={doc.rating} />
                <span style={{ fontWeight:700, fontSize:13, color:"var(--text)" }}>{doc.rating}</span>
                <span style={{ fontSize:11, color:"var(--text2)" }}>({doc.reviews} αª░αª┐αª¡αª┐αªë)</span>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:13 }}>
                <span style={{ fontSize:10, background:"var(--surface2)", color:"var(--text2)", padding:"3px 7px", borderRadius:6 }}>≡ƒÅÑ {doc.hospital.slice(0,18)}ΓÇª</span>
                <span style={{ fontSize:10, background:"var(--surface2)", color:"var(--text2)", padding:"3px 7px", borderRadius:6 }}>ΓÅ▒ {doc.experience}αª¼αª¢αª░</span>
                <span style={{ fontSize:10, background:"var(--surface2)", color:"var(--text2)", padding:"3px 7px", borderRadius:6 }}>≡ƒôà {doc.availability}</span>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"11px 0", borderTop:"1px solid var(--border)", marginBottom:12 }}>
                <div><div style={{ fontSize:10, color:"var(--text2)" }}>αª¬αª░αª╛αª«αª░αºìαª╢ αª½αª┐</div><div style={{ fontWeight:800, fontSize:17, color:G.teal }}>{fmt(doc.fee)}</div></div>
                <div style={{ textAlign:"right" }}><div style={{ fontSize:10, color:"var(--text2)" }}>αª¬αª░αª¼αª░αºìαªñαºÇ αª╕αª«αª»αª╝</div><div style={{ fontWeight:600, fontSize:12, color:G.emerald }}>{doc.nextSlot}</div></div>
              </div>
              <div style={{ display:"flex", gap:9 }}>
                <button onClick={()=>setSelectedDoc(doc)} style={{ flex:1, padding:"9px 0", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>αª¬αºìαª░αºïαª½αª╛αªçαª▓ αªªαºçαªûαºüαª¿</button>
                <button className="btn-rip" onClick={()=>onBookDoctor(doc)} style={{ flex:2, padding:"9px 0", borderRadius:9, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>αª¼αºüαªò αªòαª░αºüαª¿</button>
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
              <button onClick={()=>setSelectedDoc(null)} style={{ background:"none", border:"none", fontSize:22, cursor:"pointer", color:"var(--text2)" }}>├ù</button>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:13, marginBottom:18 }}>
              {[["αªàαª¡αª┐αª£αºìαª₧αªñαª╛",`${selectedDoc.experience} αª¼αª¢αª░`],["αª¬αª░αª╛αª«αª░αºìαª╢ αª½αª┐",fmt(selectedDoc.fee)],["αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓",selectedDoc.hospital.slice(0,22)+"ΓÇª"],["αª╕αª«αª»αª╝αª╕αºéαªÜαª┐",selectedDoc.availability],["αª¡αª╛αª╖αª╛",selectedDoc.languages.join(", ")],["αª¬αª░αª¼αª░αºìαªñαºÇ αª╕αºìαª▓αªƒ",selectedDoc.nextSlot],["αª£αºçαª▓αª╛",selectedDoc.district],["αª░αºçαªƒαª┐αªé",`${selectedDoc.rating}/αº½`]].map(([k,v])=>(
                <div key={k} className="glass" style={{ padding:"11px 14px", borderRadius:11 }}>
                  <div style={{ fontSize:10, color:"var(--text2)", marginBottom:3 }}>{k}</div>
                  <div style={{ fontWeight:600, fontSize:13, color:"var(--text)" }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom:18 }}>
              <div style={{ fontWeight:600, marginBottom:6, color:"var(--text)" }}>αª¬αª░αª┐αªÜαª┐αªñαª┐</div>
              <p style={{ fontSize:12, color:"var(--text2)", lineHeight:1.7 }}>{selectedDoc.bio}</p>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:18 }}>
              <Stars rating={selectedDoc.rating} size={17} />
              <span style={{ fontWeight:700, color:"var(--text)" }}>{selectedDoc.rating}/5</span>
              <span style={{ fontSize:12, color:"var(--text2)" }}>({selectedDoc.reviews} αª░αºïαªùαºÇαª░ αª░αª┐αª¡αª┐αªë)</span>
            </div>
            <button className="btn-rip" onClick={()=>{ onBookDoctor(selectedDoc); setSelectedDoc(null); }} style={{ width:"100%", padding:13, borderRadius:13, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:`0 7px 28px ${G.teal}40` }}>
              {selectedDoc.name} αªÅαª░ αª╕αª╛αªÑαºç αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ αª¼αºüαªò αªòαª░αºüαª¿
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ΓöÇΓöÇΓöÇ EMERGENCY PAGE ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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
    low:    { label:"αªòαª« (Low)",      color:G.emerald, icon:"≡ƒƒó", msg:"αªÅαªƒαª┐ αª¿αª┐αª»αª╝αª«αª┐αªñ αª¬αª░αª╛αª«αª░αºìαª╢αºçαª░ αª£αª¿αºìαª» αªëαª¬αª»αºüαªòαºìαªñαÑñ" },
    medium: { label:"αª«αª╛αª¥αª╛αª░αª┐ (Medium)",color:G.gold,    icon:"≡ƒƒí", msg:"αª»αªñ αª╢αºÇαªÿαºìαª░ αª╕αª«αºìαª¡αª¼ αªíαª╛αªòαºìαªñαª╛αª░ αªªαºçαªûαª╛αª¿αºï αªëαªÜαª┐αªñαÑñ" },
    critical:{ label:"αª£αª░αºüαª░αª┐ (Critical)",color:G.rose,  icon:"≡ƒö┤", msg:"ΓÜá∩╕Å αªàαª¼αª┐αª▓αª«αºìαª¼αºç αª¿αª┐αªòαªƒαªñαª« αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓αºç αª»αª╛αª¿!" },
  };

  const IMAGE_TYPES = [
    { id:"injury",  label:"αªåαªÿαª╛αªñ / αªòαºìαª╖αªñ",      icon:"≡ƒñò", spec:"orthopedics", level:"medium" },
    { id:"skin",    label:"αªÜαª░αºìαª«αª░αºïαªù",            icon:"≡ƒº¼", spec:"dermatology", level:"low" },
    { id:"xray",    label:"αªÅαªòαºìαª╕-αª░αºç / αª╕αºìαªòαºìαª»αª╛αª¿", icon:"≡ƒö¼", spec:"orthopedics", level:"medium" },
    { id:"report",  label:"αª«αºçαªíαª┐αªòαºçαª▓ αª░αª┐αª¬αºïαª░αºìαªƒ",   icon:"≡ƒôä", spec:"general",     level:"low" },
    { id:"eye",     label:"αªÜαºïαªûαºçαª░ αª╕αª«αª╕αºìαª»αª╛",      icon:"≡ƒæü∩╕Å", spec:"ophthalmology",level:"low" },
    { id:"chest",   label:"αª¼αºüαªòαºçαª░ αª╕αª«αª╕αºìαª»αª╛",      icon:"≡ƒ½Ç", spec:"cardiology",  level:"critical" },
    { id:"prescription",label:"αª¬αºìαª░αºçαª╕αªòαºìαª░αª┐αª¬αª╢αª¿", icon:"≡ƒÆè", spec:"general",     level:"low" },
  ];

  const [selectedImageType, setSelectedImageType] = useState(null);

  const analyzeImage = async () => {
    if (!imagePreview && !symptomText && !selectedImageType) { notify("αª¢αª¼αª┐ αªåαª¬αª▓αºïαªí αªòαª░αºüαª¿ αª¼αª╛ αª▓αªòαºìαª╖αªú αª▓αª┐αªûαºüαª¿","warning"); return; }
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
    notify(level==="critical"?"≡ƒÜ¿ αª£αª░αºüαª░αª┐ αªàαª¼αª╕αºìαªÑαª╛ αª╕αª¿αª╛αªòαºìαªñ! αª¿αª┐αªòαªƒαªñαª« αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓αºç αª»αª╛αª¿!":"αª¼αª┐αª╢αºìαª▓αºçαª╖αªú αª╕αª«αºìαª¬αª¿αºìαª¿! αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αª╕αºüαª¬αª╛αª░αª┐αª╢ αªªαºçαªûαºüαª¿αÑñ", level==="critical"?"error":"success");
  };

  const getPossibleConditions = (spec) => ({
    cardiology:["αªòαª░αºïαª¿αª╛αª░αª┐ αªåαª░αºìαªƒαª╛αª░αª┐ αªíαª┐αª£αª┐αª£","αª╣αª╛αª░αºìαªƒ αª½αºçαªçαª▓αª┐αªëαª░","αªàαºìαª»αª╛αª░αª┐αªÑαª«αª┐αª»αª╝αª╛"],
    neurology:["αª«αª╛αªçαªùαºìαª░αºçαª¿","αª╕αºìαªƒαºìαª░αºïαªò αª╕αª¿αºìαªªαºçαª╣","αª«αª╛αªÑαª╛αª░ αªåαªÿαª╛αªñ"],
    orthopedics:["αª╣αª╛αªíαª╝ αª¡αª╛αªÖαºìαªùαª╛","αª£αª»αª╝αºçαª¿αºìαªƒ αª╕αºìαªÑαª╛αª¿αªÜαºìαª»αºüαªñαª┐","αª«αºïαªÜ"],
    dermatology:["αªÅαªòαª£αª┐αª«αª╛","αª╕αºïαª░αª┐αª»αª╝αª╛αª╕αª┐αª╕","αªÜαª░αºìαª«αª░αºïαªù"],
    general:["αª¡αª╛αªçαª░αª╛αª▓ αª½αª┐αª¡αª╛αª░","αª╕αª╛αªºαª╛αª░αªú αª╕αª░αºìαªªαª┐-αª£αºìαª¼αª░","αªíαª┐αª╣αª╛αªçαªíαºìαª░αºçαª╢αª¿"],
    ophthalmology:["αªòαª¿αª£αª╛αªéαªƒαª┐αª¡αª╛αªçαªƒαª┐αª╕","αª░αºçαªƒαª┐αª¿αª╛αª▓ αª╕αª«αª╕αºìαª»αª╛","αªùαºìαª▓αºüαªòαºïαª«αª╛"],
    pulmonology:["αª¼αºìαª░αªéαªòαª╛αªçαªƒαª┐αª╕","αª¿αª┐αªëαª«αºïαª¿αª┐αª»αª╝αª╛","αªàαºìαª»αª╛αª£αª«αª╛"],
    gastro:["αªùαºìαª»αª╛αª╕αºìαªƒαºìαª░αª╛αªçαªƒαª┐αª╕","αªåαª▓αª╕αª╛αª░","IBS"],
  }[spec] || ["αª¬αºìαª░αª╛αªÑαª«αª┐αªò αª¬αª░αºÇαªòαºìαª╖αª╛ αª¬αºìαª░αª»αª╝αºïαª£αª¿"]);

  const getRecommendations = (level) => ({
    low:["αª¿αª┐αª»αª╝αª«αª┐αªñ αªíαª╛αªòαºìαªñαª╛αª░αºçαª░ αª¬αª░αª╛αª«αª░αºìαª╢ αª¿αª┐αª¿","αª¬αºìαª░αªÜαºüαª░ αª¬αª╛αª¿αª┐ αª¬αª╛αª¿ αªòαª░αºüαª¿","αª¼αª┐αª╢αºìαª░αª╛αª« αª¿αª┐αª¿"],
    medium:["αº¿αº¬ αªÿαªúαºìαªƒαª╛αª░ αª«αªºαºìαª»αºç αªíαª╛αªòαºìαªñαª╛αª░ αªªαºçαªûαª╛αª¿","αªôαª╖αºüαªº αª¢αª╛αªíαª╝αª╛ αª╕αºìαª¼-αªÜαª┐αªòαª┐αºÄαª╕αª╛ αªÅαªíαª╝αª┐αª»αª╝αºç αªÜαª▓αºüαª¿","αª▓αªòαºìαª╖αªú αªåαª░αºï αªûαª╛αª░αª╛αª¬ αª╣αª▓αºç αª£αª░αºüαª░αª┐ αª¼αª┐αª¡αª╛αªùαºç αª»αª╛αª¿"],
    critical:["αªÅαªûαª¿αªç αº»αº»αº» αª¿αª«αºìαª¼αª░αºç αªòαª▓ αªòαª░αºüαª¿","αªàαºìαª»αª╛αª«αºìαª¼αºüαª▓αºçαª¿αºìαª╕αºçαª░ αª£αª¿αºìαª» αªàαª¬αºçαªòαºìαª╖αª╛ αªòαª░αºüαª¿","αªÅαªòαª╛ αªùαª╛αªíαª╝αª┐ αªÜαª╛αª▓αª╛αª¼αºçαª¿ αª¿αª╛","αª¿αª┐αªòαªƒαªñαª« αªçαª«αª╛αª░αºìαª£αºçαª¿αºìαª╕αª┐ αª¼αª┐αª¡αª╛αªùαºç αª»αª╛αª¿"],
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
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) { notify("αªÅαªç αª¼αºìαª░αª╛αªëαª£αª╛αª░αºç αª¡αª»αª╝αºçαª╕ αªçαª¿αª¬αºüαªƒ αª╕αª╛αª¬αºïαª░αºìαªƒ αª¿αºçαªç","warning"); return; }
    setMicActive(m=>!m);
  };

  return (
    <div style={{ maxWidth:1200, margin:"0 auto", padding:"28px 22px" }}>
      <div style={{ marginBottom:28 }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:10, flexWrap:"wrap" }}>
          <h1 className="syne" style={{ fontSize:28, fontWeight:800, color:"var(--text)" }}>≡ƒÜ¿ αª£αª░αºüαª░αª┐ αª╕αºçαª¼αª╛ αªô <span className="grad-text">αª╕αºìαª«αª╛αª░αºìαªƒ αª░αºçαª½αª╛αª░αºçαª▓</span></h1>
          {emergencyMode && (
            <div className="emerg-pulse" style={{ background:`${G.rose}15`, border:`1.5px solid ${G.rose}55`, color:G.rose, padding:"6px 16px", borderRadius:22, fontSize:12, fontWeight:700 }}>
              ΓÜá∩╕Å αª£αª░αºüαª░αª┐ αª«αºïαªí αª╕αªòαºìαª░αª┐αª»αª╝
            </div>
          )}
        </div>
        <p style={{ color:"var(--text2)", fontSize:14 }}>αª¢αª¼αª┐ αªåαª¬αª▓αºïαªí αª¼αª╛ αª▓αªòαºìαª╖αªú αª¼αª░αºìαªúαª¿αª╛ αªòαª░αºüαª¿ ΓÇö AI αª╕αªáαª┐αªò αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αªô αªíαª╛αªòαºìαªñαª╛αª░ αª╕αºüαª¬αª╛αª░αª┐αª╢ αªòαª░αª¼αºç</p>
      </div>

      <div className="glass" style={{ padding:"14px 20px", marginBottom:24, display:"flex", gap:12, alignItems:"center", flexWrap:"wrap", borderLeft:`4px solid ${G.rose}` }}>
        <span style={{ fontSize:20 }}>≡ƒÜ¿</span>
        <span style={{ fontWeight:700, color:"var(--text)", fontSize:14, flex:1 }}>αª£αª░αºüαª░αª┐ αªàαª¼αª╕αºìαªÑαª╛αª»αª╝ αªñαª╛αºÄαªòαºìαª╖αªúαª┐αªò αª╕αª╛αª╣αª╛αª»αºìαª» αª¿αª┐αª¿</span>
        {[["999","αª£αª╛αªñαºÇαª»αª╝ αª£αª░αºüαª░αª┐"],["16789","αª╕αºìαª¼αª╛αª╕αºìαªÑαºìαª» αª╣αºçαª▓αºìαª¬αª▓αª╛αªçαª¿"],["1099","αªàαºìαª»αª╛αª«αºìαª¼αºüαª▓αºçαª¿αºìαª╕"]].map(([num,lbl])=>(
          <button key={num} onClick={()=>notify(`${num} αªòαª▓ αªòαª░αª╛ αª╣αªÜαºìαª¢αºç...`,"error")} style={{ padding:"8px 18px", borderRadius:10, background:`${G.rose}18`, border:`1.5px solid ${G.rose}44`, color:G.rose, cursor:"pointer", fontSize:13, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>
            ≡ƒô₧ {num} ΓÇö {lbl}
          </button>
        ))}
      </div>

      <div className="scroll-x" style={{ display:"flex", alignItems:"center", marginBottom:32, paddingBottom:4 }}>
        {["αª╕αª«αª╕αºìαª»αª╛ αªåαª¬αª▓αºïαªí","AI αª¼αª┐αª╢αºìαª▓αºçαª╖αªú","αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αª¼αºçαª¢αºç αª¿αª┐αª¿","αªíαª╛αªòαºìαªñαª╛αª░ αªªαºçαªûαºüαª¿","αª¼αºüαªòαª┐αªé αª¿αª┐αª╢αºìαªÜαª┐αªñ"].map((s,i)=>(
          <div key={i} style={{ display:"flex", alignItems:"center", flexShrink:0 }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
              <div style={{ width:34, height:34, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", background: step>i+1?G.teal:step===i+1?`linear-gradient(135deg,${G.teal},${G.tealDark})`:"var(--surface2)", color:step>=i+1?"#fff":"var(--text2)", fontWeight:700, fontSize:13, boxShadow:step===i+1?`0 4px 14px ${G.teal}44`:"none", transition:"all .3s" }}>
                {step>i+1?"Γ£ô":i+1}
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
              <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:8 }}>αª╕αª«αª╕αºìαª»αª╛αª░ αª¢αª¼αª┐ αªåαª¬αª▓αºïαªí αªòαª░αºüαª¿</h2>
              <p style={{ color:"var(--text2)", fontSize:13, marginBottom:20 }}>αªåαªÿαª╛αªñ, αªÜαª░αºìαª«αª░αºïαªù, αªÅαªòαºìαª╕-αª░αºç, αª«αºçαªíαª┐αªòαºçαª▓ αª░αª┐αª¬αºïαª░αºìαªƒ αª¼αª╛ αª¬αºìαª░αºçαª╕αªòαºìαª░αª┐αª¬αª╢αª¿αºçαª░ αª¢αª¼αª┐</p>
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
                  <><div style={{ fontSize:30, marginBottom:7 }}>≡ƒô╕</div><div style={{ color:"var(--text2)", fontSize:13 }}>αª¢αª¼αª┐ αªåαª¬αª▓αºïαªí αªòαª░αºüαª¿ (αªÉαªÜαºìαª¢αª┐αªò)</div><div style={{ color:"var(--text2)", fontSize:11, marginTop:3 }}>αªòαºìαª▓αª┐αªò αª¼αª╛ αªíαºìαª░αºìαª»αª╛αªù αªòαª░αºüαª¿</div></>
                )}
              </div>
              <input ref={fileRef} type="file" accept="image/*" style={{ display:"none" }} onChange={e=>{ const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=()=>{ setImagePreview(r.result); notify("αª¢αª¼αª┐ αªåαª¬αª▓αºïαªí αª╕αª½αª▓!","success"); }; r.readAsDataURL(f); }} />
            </div>
          </div>
          <div>
            <div className="glass" style={{ padding:28, borderRadius:22 }}>
              <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:8 }}>αª▓αªòαºìαª╖αªú αª¼αª░αºìαªúαª¿αª╛ αªòαª░αºüαª¿</h2>
              <p style={{ color:"var(--text2)", fontSize:13, marginBottom:18 }}>αª¼αª╛αªéαª▓αª╛ αª¼αª╛ αªçαªéαª░αºçαª£αª┐αªñαºç αªåαª¬αª¿αª╛αª░ αª╕αª«αª╕αºìαª»αª╛ αª▓αª┐αªûαºüαª¿</p>
              <div style={{ position:"relative", marginBottom:14 }}>
                <textarea className="hms-input" placeholder="αª»αºçαª«αª¿: αª¼αºüαªòαºç αª¼αºìαª»αªÑαª╛ αªô αª╢αºìαª¼αª╛αª╕ αª¿αª┐αªñαºç αªòαª╖αºìαªƒ αª╣αªÜαºìαª¢αºç αªªαºüαªç αªªαª┐αª¿ αªºαª░αºç..." value={symptomText} onChange={e=>setSymptomText(e.target.value)} style={{ minHeight:110, resize:"vertical", paddingRight:52 }} />
                <button onClick={toggleMic} className={micActive?"mic-active":""} style={{ position:"absolute", right:10, top:10, width:36, height:36, borderRadius:9, border:"none", cursor:"pointer", fontSize:17, background:micActive?G.rose:"var(--surface2)", transition:"all .2s" }}>≡ƒÄñ</button>
              </div>
              <div style={{ fontSize:12, fontWeight:600, color:"var(--text2)", marginBottom:9 }}>αªªαºìαª░αºüαªñ αª¼αºçαª¢αºç αª¿αª┐αª¿:</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:7, marginBottom:20 }}>
                {["αª¼αºüαªòαºç αª¼αºìαª»αªÑαª╛","αª«αª╛αªÑαª╛αª¼αºìαª»αªÑαª╛","αª¬αª┐αªáαºç αª¼αºìαª»αªÑαª╛","αªÜαª╛αª«αªíαª╝αª╛αª░ αª╕αª«αª╕αºìαª»αª╛","αª£αºìαª¼αª░","αªÜαºïαªûαºçαª░ αª╕αª«αª╕αºìαª»αª╛","αª¬αºçαªƒαºç αª¼αºìαª»αªÑαª╛","αª╢αºìαª¼αª╛αª╕ αªòαª╖αºìαªƒ","αª╣αª╛αªüαªƒαºüαªñαºç αª¼αºìαª»αªÑαª╛"].map(s=>(
                  <button key={s} onClick={()=>{ setSymptomText(s); notify(`αª▓αªòαºìαª╖αªú αª¿αª┐αª░αºìαª¼αª╛αªÜαª┐αªñ: ${s}`,"info"); }} style={{ padding:"5px 12px", borderRadius:9, background:"var(--surface2)", color:"var(--text)", border:"none", cursor:"pointer", fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>{s}</button>
                ))}
              </div>
              <button className="btn-rip" onClick={analyzeImage} disabled={analyzing} style={{ width:"100%", padding:14, borderRadius:13, background:analyzing?"var(--surface2)":`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:analyzing?"var(--text2)":"#fff", cursor:analyzing?"not-allowed":"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
                {analyzing ? <><div className="a-spin" style={{ width:20, height:20, border:"2px solid rgba(255,255,255,.3)", borderTopColor:G.teal, borderRadius:"50%" }} /> AI αª¼αª┐αª╢αºìαª▓αºçαª╖αªú αªòαª░αª¢αºçΓÇª</> : "≡ƒñû AI αªªαª┐αª»αª╝αºç αª¼αª┐αª╢αºìαª▓αºçαª╖αªú αªòαª░αºüαª¿ ΓåÆ"}
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
                <div style={{ fontSize:12, color:"var(--text2)", marginBottom:4 }}>AI αª¼αª┐αª╢αºìαª▓αºçαª╖αªú αª½αª▓αª╛αª½αª▓</div>
                <div style={{ display:"flex", gap:12, alignItems:"center", flexWrap:"wrap" }}>
                  <span style={{ fontSize:22 }}>{analysisResult.specObj?.icon}</span>
                  <span style={{ fontWeight:700, color:"var(--text)", fontSize:16 }}>{analysisResult.specObj?.en}</span>
                  <span className="badge" style={{ background:`${EMERG_LEVELS[analysisResult.level].color}20`, color:EMERG_LEVELS[analysisResult.level].color }}>{EMERG_LEVELS[analysisResult.level].icon} {EMERG_LEVELS[analysisResult.level].label}</span>
                  <span style={{ fontSize:12, color:G.sky, fontWeight:600 }}>αª¿αª┐αª░αºìαª¡αª░αª»αºïαªùαºìαª»αªñαª╛: {analysisResult.confidence}%</span>
                </div>
                <div style={{ fontSize:12, color:EMERG_LEVELS[analysisResult.level].color, marginTop:5, fontWeight:600 }}>{EMERG_LEVELS[analysisResult.level].msg}</div>
              </div>
              <div style={{ flex:1, minWidth:220 }}>
                <div style={{ fontSize:11, color:"var(--text2)", marginBottom:6 }}>αª╕αª«αºìαª¡αª╛αª¼αºìαª» αª╕αª«αª╕αºìαª»αª╛:</div>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                  {analysisResult.possibleConditions.map(c=><span key={c} style={{ fontSize:11, background:"var(--surface2)", color:"var(--text)", padding:"3px 9px", borderRadius:8 }}>{c}</span>)}
                </div>
              </div>
              <div>
                <div style={{ fontSize:11, color:"var(--text2)", marginBottom:6 }}>αª¬αª░αª╛αª«αª░αºìαª╢:</div>
                {analysisResult.recommendations.slice(0,2).map(r=><div key={r} style={{ fontSize:11, color:"var(--text2)", marginBottom:3 }}>ΓÇó {r}</div>)}
              </div>
              <button onClick={()=>setStep(1)} style={{ padding:"7px 16px", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>ΓåÉ αª¬αºüαª¿αª░αª╛αª»αª╝ αª¼αª┐αª╢αºìαª▓αºçαª╖αªú</button>
            </div>
          </div>

          {step === 3 && (
            <>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18, flexWrap:"wrap", gap:12 }}>
                <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)" }}>≡ƒÅÑ αªòαª╛αª¢αºçαª░ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αª╕αª«αºéαª╣ <span style={{ fontSize:15, color:"var(--text2)", fontWeight:400 }}>({hospSorted.length}αªƒαª┐)</span></h2>
                <div style={{ display:"flex", gap:9, flexWrap:"wrap" }}>
                  <select className="hms-select" value={districtFilter} onChange={e=>setDistrictFilter(e.target.value)}>
                    <option value="all">αª╕αª¼ αª£αºçαª▓αª╛</option>
                    {BD_DISTRICTS.map(d=><option key={d} value={d}>{d}</option>)}
                  </select>
                  <select className="hms-select" value={sortHosp} onChange={e=>setSortHosp(e.target.value)}>
                    <option value="distance">αªªαºéαª░αªñαºìαª¼ αªàαª¿αºüαª»αª╛αª»αª╝αºÇ</option>
                    <option value="rating">αª░αºçαªƒαª┐αªé αªàαª¿αºüαª»αª╛αª»αª╝αºÇ</option>
                    <option value="icu">ICU αªàαª¿αºüαª»αª╛αª»αª╝αºÇ</option>
                  </select>
                  <button onClick={()=>setEmergencyMode(m=>!m)} style={{ padding:"8px 14px", borderRadius:9, background:emergencyMode?`${G.rose}18`:"var(--surface2)", border:`1.5px solid ${emergencyMode?G.rose:"var(--border)"}`, color:emergencyMode?G.rose:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>
                    ≡ƒÜ¿ αª╢αºüαªºαºü αª£αª░αºüαª░αª┐ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓
                  </button>
                </div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))", gap:18 }}>
                {hospSorted.map(h=>(
                  <div key={h.id} className={`glass card-h ${h.emergency&&emergencyMode?"emerg-card":""}`} style={{ borderRadius:20, overflow:"hidden" }} onClick={()=>{ setSelectedHospital(h); setStep(4); notify(`${h.en} αª¿αª┐αª░αºìαª¼αª╛αªÜαª┐αªñ αª╣αª»αª╝αºçαª¢αºç`,"success"); }}>
                    <div style={{ height:130, backgroundImage:`url(${h.image})`, backgroundSize:"cover", backgroundPosition:"center", position:"relative" }}>
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,.65),transparent)" }} />
                      {h.emergency && <div style={{ position:"absolute", top:9, left:10, background:G.rose, color:"#fff", fontSize:9, fontWeight:700, padding:"3px 9px", borderRadius:7 }}>≡ƒÜ¿ EMERGENCY</div>}
                      {h.ambulance && <div style={{ position:"absolute", top:9, right:10, background:"#1a1a2e", color:"#fff", fontSize:9, fontWeight:700, padding:"3px 9px", borderRadius:7 }}>≡ƒÜæ AMBULANCE</div>}
                      <div style={{ position:"absolute", bottom:9, left:12 }}>
                        <div style={{ color:"#fff", fontWeight:700, fontSize:13 }}>{h.en}</div>
                        <div style={{ color:"rgba(255,255,255,.75)", fontSize:10 }}>{h.district}</div>
                      </div>
                    </div>
                    <div style={{ padding:"14px 16px" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:9 }}>
                        <div style={{ display:"flex", gap:14 }}>
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.teal }}>{h.distance}km</div><div style={{ fontSize:10, color:"var(--text2)" }}>αªªαºéαª░αªñαºìαª¼</div></div>
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.emerald }}>{h.icu}</div><div style={{ fontSize:10, color:"var(--text2)" }}>ICU</div></div>
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.sky }}>{h.beds}</div><div style={{ fontSize:10, color:"var(--text2)" }}>αª╢αª»αºìαª»αª╛</div></div>
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.gold }}>Γ¡É{h.rating}</div><div style={{ fontSize:10, color:"var(--text2)" }}>αª░αºçαªƒαª┐αªé</div></div>
                        </div>
                      </div>
                      <div style={{ fontSize:11, color:"var(--text2)", marginBottom:10 }}>≡ƒôì {h.address}</div>
                      <div style={{ display:"flex", gap:6, marginBottom:12, flexWrap:"wrap" }}>
                        <span style={{ fontSize:10, background:`${G.teal}15`, color:G.teal, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>≡ƒæ¿ΓÇìΓÜò∩╕Å {DOCTORS.filter(d=>d.hospitalId===h.id).length} αªíαª╛αªòαºìαªñαª╛αª░</span>
                        <span style={{ fontSize:10, background:`${G.sky}15`, color:G.sky, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>≡ƒö¼ {DOCTORS.filter(d=>analysisResult && d.specialization===analysisResult.spec && d.hospitalId===h.id).length} {analysisResult?.specObj?.en}</span>
                      </div>
                      <button className="btn-rip" style={{ width:"100%", padding:"9px", borderRadius:10, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:13, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αª¿αª┐αª░αºìαª¼αª╛αªÜαª¿ αªòαª░αºüαª¿ ΓåÆ</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 4 && selectedHospital && (
            <div className="fade-up">
              <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:22, flexWrap:"wrap" }}>
                <button onClick={()=>setStep(3)} style={{ padding:"8px 16px", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:13, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>ΓåÉ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓αºç αª½αª┐αª░αºüαª¿</button>
                <h2 className="syne" style={{ fontSize:20, fontWeight:800, color:"var(--text)" }}>{selectedHospital.en} ΓÇö {analysisResult?.specObj?.en} αª¼αª┐αª╢αºçαª╖αª£αºìαª₧ αªíαª╛αªòαºìαªñαª╛αª░</h2>
              </div>
              <div className="glass" style={{ padding:"14px 18px", marginBottom:20, borderRadius:14, display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
                <img src={selectedHospital.image} alt="" style={{ width:56, height:56, borderRadius:10, objectFit:"cover" }} />
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, color:"var(--text)", marginBottom:2 }}>{selectedHospital.name}</div>
                  <div style={{ fontSize:12, color:"var(--text2)" }}>≡ƒôì {selectedHospital.address} | ≡ƒô₧ {selectedHospital.phone}</div>
                </div>
                {selectedHospital.emergency && <Badge label="Emergency Available" color={G.rose} />}
                {selectedHospital.ambulance && <Badge label="Ambulance" color={G.orange} />}
              </div>
              {displayDoctors.length === 0 ? (
                <div style={{ textAlign:"center", padding:40, color:"var(--text2)" }}>
                  <div style={{ fontSize:40, marginBottom:12 }}>≡ƒÿö</div>
                  <div>αªÅαªç αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓αºç αªëαª¬αª»αºüαªòαºìαªñ αªíαª╛αªòαºìαªñαª╛αª░ αª¬αª╛αªôαª»αª╝αª╛ αª»αª╛αª»αª╝αª¿αª┐αÑñ</div>
                  <button onClick={()=>setStep(3)} style={{ marginTop:16, padding:"10px 24px", borderRadius:10, background:G.teal, color:"#fff", border:"none", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>αªàαª¿αºìαª» αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αªªαºçαªûαºüαª¿</button>
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
                        <Badge label={doc.online?"αªàαª¿αª▓αª╛αªçαª¿":"αªàαª½αª▓αª╛αªçαª¿"} color={doc.online?G.emerald:G.slate} />
                      </div>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderTop:"1px solid var(--border)", marginBottom:12 }}>
                        <div><div style={{ fontSize:10, color:"var(--text2)" }}>αª½αª┐</div><div style={{ fontWeight:800, fontSize:16, color:G.teal }}>{fmt(doc.fee)}</div></div>
                        <div style={{ textAlign:"right" }}><div style={{ fontSize:10, color:"var(--text2)" }}>αª¬αª░αª¼αª░αºìαªñαºÇ αª╕αºìαª▓αªƒ</div><div style={{ fontWeight:600, fontSize:11, color:G.emerald }}>{doc.nextSlot}</div></div>
                      </div>
                      <div style={{ display:"flex", gap:8 }}>
                        <button onClick={e=>{e.stopPropagation();setStep(5);}} style={{ flex:1, padding:"8px 0", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>αª¼αª┐αª╕αºìαªñαª╛αª░αª┐αªñ</button>
                        <button className="btn-rip" onClick={e=>{e.stopPropagation();onBookDoctor(doc);}} style={{ flex:2, padding:"8px 0", borderRadius:9, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>αª¼αºüαªò αªòαª░αºüαª¿</button>
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

// ΓöÇΓöÇΓöÇ APPOINTMENTS PAGE ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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
    if (!symptoms.trim()) { notify("αª▓αªòαºìαª╖αªú αª¼αª░αºìαªúαª¿αª╛ αªòαª░αºüαª¿","warning"); return; }
    setThinking(true);
    await delay(1400);
    const lower = symptoms.toLowerCase();
    let spec = "general";
    for (const [kw, s] of Object.entries(SYMPTOM_MAP)) { if (lower.includes(kw)) { spec = s; break; } }
    setSuggestedSpec(spec); setSelectedSpec(spec); setThinking(false); setStep(2);
    notify(`AI αª╕αºüαª¬αª╛αª░αª┐αª╢: ${SPECIALIZATIONS.find(s=>s.id===spec)?.en}`,"success");
  };

  const bookAppointment = () => {
    if (!selectedDate || !selectedTime) { notify("αªñαª╛αª░αª┐αªû αªô αª╕αª«αª»αª╝ αª¼αºçαª¢αºç αª¿αª┐αª¿","warning"); return; }
    if (!patientName.trim()) { notify("αª░αºïαªùαºÇαª░ αª¿αª╛αª« αª▓αª┐αªûαºüαª¿","warning"); return; }
    const token = `DHK-${Math.floor(2000+Math.random()*8000)}`;
    const newApt = { id:appointments.length+1, patient:patientName||"αª¿αªñαºüαª¿ αª░αºïαªùαºÇ", doctor:selectedDoctor.name, spec:selectedDoctor.specName, date:selectedDate, time:selectedTime, status:"pending", fee:selectedDoctor.fee, token };
    setAppointments(p=>[newApt,...p]);
    notify(`≡ƒÄë αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ αª¿αª┐αª╢αºìαªÜαª┐αªñ! αªƒαºïαªòαºçαª¿: ${token}`,"success");
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
        <h1 className="syne" style={{ fontSize:28, fontWeight:800, color:"var(--text)", marginBottom:6 }}><span className="grad-text">αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ</span></h1>
      </div>
      <div style={{ display:"flex", gap:7, marginBottom:28, background:"var(--surface2)", borderRadius:11, padding:5, width:"fit-content" }}>
        {[["book","≡ƒôà αª¿αªñαºüαª¿ αª¼αºüαªòαª┐αªé"],["mine","≡ƒôï αªåαª«αª╛αª░ αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ"]].map(([t,l])=>(
          <button key={t} className={`tab-btn ${activeTab===t?"active":""}`} onClick={()=>setActiveTab(t)}>{l}</button>
        ))}
      </div>

      {activeTab === "mine" ? (
        <div>
          <h2 style={{ fontSize:18, fontWeight:700, color:"var(--text)", marginBottom:18 }}>αªåαª«αª╛αª░ αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ ({appointments.length})</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {appointments.map(apt=>(
              <div key={apt.id} className="glass" style={{ padding:18, borderRadius:16, display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
                <div style={{ width:46, height:46, borderRadius:"50%", background:`${SC[apt.status]}1a`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>
                  {apt.status==="confirmed"?"Γ£à":apt.status==="pending"?"ΓÅ│":apt.status==="completed"?"≡ƒ⌐║":"Γ¥î"}
                </div>
                <div style={{ flex:1, minWidth:180 }}>
                  <div style={{ fontWeight:700, color:"var(--text)", marginBottom:2, fontSize:14 }}>{apt.doctor}</div>
                  <div style={{ fontSize:12, color:"var(--text2)" }}>{apt.spec} ΓÇó {apt.date} αª╕αª«αª»αª╝ {apt.time}</div>
                  <div style={{ fontSize:11, color:G.sky, marginTop:2 }}>αªƒαºïαªòαºçαª¿: {apt.token}</div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <Badge label={apt.status==="confirmed"?"αª¿αª┐αª╢αºìαªÜαª┐αªñ":apt.status==="pending"?"αªàαª¬αºçαªòαºìαª╖αª«αª╛αªú":apt.status==="completed"?"αª╕αª«αºìαª¬αª¿αºìαª¿":"αª¼αª╛αªñαª┐αª▓"} color={SC[apt.status]} />
                  <div style={{ fontSize:15, fontWeight:700, color:G.teal, marginTop:5 }}>{fmt(apt.fee)}</div>
                </div>
                <div style={{ display:"flex", gap:7 }}>
                  {apt.status==="pending" && <button onClick={()=>{ setAppointments(p=>p.map(a=>a.id===apt.id?{...a,status:"cancelled"}:a)); notify("αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ αª¼αª╛αªñαª┐αª▓ αª╣αª»αª╝αºçαª¢αºç","warning"); }} style={{ padding:"5px 13px", borderRadius:7, background:`${G.rose}18`, color:G.rose, border:"none", cursor:"pointer", fontSize:11, fontWeight:600 }}>αª¼αª╛αªñαª┐αª▓</button>}
                  <button onClick={()=>notify("αª¼αª┐αª╕αºìαªñαª╛αª░αª┐αªñ αªçαª«αºçαªçαª▓αºç αª¬αª╛αªáαª╛αª¿αºï αª╣αª»αª╝αºçαª¢αºç!","info")} style={{ padding:"5px 13px", borderRadius:7, background:"var(--surface2)", color:"var(--text)", border:"none", cursor:"pointer", fontSize:11, fontWeight:600 }}>αª¼αª┐αª╕αºìαªñαª╛αª░αª┐αªñ</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="scroll-x" style={{ display:"flex", alignItems:"center", marginBottom:34, paddingBottom:4 }}>
            {["αª▓αªòαºìαª╖αªú","αª¼αª┐αª╢αºçαª╖αª£αºìαª₧","αªíαª╛αªòαºìαªñαª╛αª░","αª╕αª«αª»αª╝αª╕αºéαªÜαª┐","αª¿αª┐αª╢αºìαªÜαª┐αªñ"].map((s,i)=>(
              <div key={i} style={{ display:"flex", alignItems:"center", flexShrink:0 }}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5, cursor:step>i+1?"pointer":"default" }} onClick={()=>step>i+1&&setStep(i+1)}>
                  <div style={{ width:34, height:34, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", background:step>i+1?G.teal:step===i+1?`linear-gradient(135deg,${G.teal},${G.tealDark})`:"var(--surface2)", color:step>=i+1?"#fff":"var(--text2)", fontWeight:700, fontSize:13, boxShadow:step===i+1?`0 4px 14px ${G.teal}44`:"none", transition:"all .3s" }}>{step>i+1?"Γ£ô":i+1}</div>
                  <span style={{ fontSize:10, fontWeight:step===i+1?700:400, color:step>=i+1?G.teal:"var(--text2)", whiteSpace:"nowrap" }}>{s}</span>
                </div>
                {i<4 && <div style={{ height:2, width:38, background:step>i+1?G.teal:"var(--surface2)", margin:"0 6px", marginBottom:18, flexShrink:0, transition:"background .3s" }} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="fade-up">
              <div className="glass" style={{ padding:28, borderRadius:22, maxWidth:680 }}>
                <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:6 }}>αªåαª¬αª¿αª┐ αªòαºçαª«αª¿ αªåαª¢αºçαª¿?</h2>
                <p style={{ color:"var(--text2)", marginBottom:20, fontSize:13 }}>αª▓αªòαºìαª╖αªú αª¼αª░αºìαªúαª¿αª╛ αªòαª░αºüαª¿ ΓÇö AI αª╕αªáαª┐αªò αª¼αª┐αª╢αºçαª╖αª£αºìαª₧ αª╕αºüαª¬αª╛αª░αª┐αª╢ αªòαª░αª¼αºç</p>
                <div style={{ position:"relative", marginBottom:14 }}>
                  <textarea className="hms-input" placeholder="αª»αºçαª«αª¿: αª¼αºüαªòαºç αª¼αºìαª»αªÑαª╛ αªô αª╢αºìαª¼αª╛αª╕ αª¿αª┐αªñαºç αªòαª╖αºìαªƒ αª╣αªÜαºìαª¢αºç αªªαºüαªç αªªαª┐αª¿ αªºαª░αºç..." value={symptoms} onChange={e=>setSymptoms(e.target.value)} style={{ minHeight:110, resize:"vertical", paddingRight:52 }} />
                  <button onClick={()=>{ setMicActive(m=>!m); notify("αª¡αª»αª╝αºçαª╕ αªçαª¿αª¬αºüαªƒ","info"); }} className={micActive?"mic-active":""} style={{ position:"absolute", right:10, top:10, width:36, height:36, borderRadius:9, border:"none", cursor:"pointer", fontSize:17, background:micActive?G.rose:"var(--surface2)", transition:"all .2s" }}>≡ƒÄñ</button>
                </div>
                <div onClick={()=>fileRef.current.click()} style={{ border:`2px dashed ${G.teal}44`, borderRadius:13, padding:18, textAlign:"center", cursor:"pointer", marginBottom:20 }}>
                  {imagePreview ? <img src={imagePreview} alt="" style={{ maxHeight:120, borderRadius:9, objectFit:"cover" }} /> : <><div style={{ fontSize:28, marginBottom:6 }}>≡ƒô╕</div><div style={{ color:"var(--text2)", fontSize:13 }}>αª▓αªòαºìαª╖αªúαºçαª░ αª¢αª¼αª┐ αªåαª¬αª▓αºïαªí αªòαª░αºüαª¿ (αªÉαªÜαºìαª¢αª┐αªò)</div></>}
                </div>
                <input ref={fileRef} type="file" accept="image/*" style={{ display:"none" }} onChange={e=>{ const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=()=>{ setImagePreview(r.result); notify("αª¢αª¼αª┐ αªåαª¬αª▓αºïαªí αª╕αª½αª▓!","success"); }; r.readAsDataURL(f); }} />
                <button className="btn-rip" onClick={analyzeSymptoms} disabled={thinking} style={{ width:"100%", padding:14, borderRadius:13, background:thinking?"var(--surface2)":`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:thinking?"var(--text2)":"#fff", cursor:thinking?"not-allowed":"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
                  {thinking?<><div className="a-spin" style={{ width:20, height:20, border:"2px solid rgba(255,255,255,.3)", borderTopColor:G.teal, borderRadius:"50%" }} />AI αª¼αª┐αª╢αºìαª▓αºçαª╖αªú αªòαª░αª¢αºçΓÇª</>:"≡ƒñû αª▓αªòαºìαª╖αªú αª¼αª┐αª╢αºìαª▓αºçαª╖αªú αªòαª░αºüαª¿ ΓåÆ"}
                </button>
              </div>
              <div style={{ marginTop:20 }}>
                <div style={{ fontSize:13, fontWeight:600, color:"var(--text2)", marginBottom:10 }}>αªªαºìαª░αºüαªñ αª¿αª┐αª░αºìαª¼αª╛αªÜαª¿:</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                  {["αª¼αºüαªòαºç αª¼αºìαª»αªÑαª╛","αª«αª╛αªÑαª╛αª¼αºìαª»αªÑαª╛","αª¬αª┐αªáαºç αª¼αºìαª»αªÑαª╛","αªÜαª╛αª«αªíαª╝αª╛αª░ αª╕αª«αª╕αºìαª»αª╛","αª£αºìαª¼αª░","αªÜαºïαªûαºçαª░ αª╕αª«αª╕αºìαª»αª╛","αª¬αºçαªƒαºç αª¼αºìαª»αªÑαª╛","αª╢αºìαª¼αª╛αª╕ αªòαª╖αºìαªƒ"].map(s=>(
                    <button key={s} onClick={()=>{ setSymptoms(s); notify(`αª▓αªòαºìαª╖αªú αª¿αª┐αª░αºìαª¼αª╛αªÜαª¿: ${s}`,"info"); }} style={{ padding:"6px 13px", borderRadius:9, background:"var(--surface2)", color:"var(--text)", border:"none", cursor:"pointer", fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>{s}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="fade-up">
              <div style={{ marginBottom:22 }}>
                <div className="glass" style={{ padding:14, borderRadius:13, background:`${G.teal}12`, border:`1.5px solid ${G.teal}44`, marginBottom:20, display:"inline-flex", alignItems:"center", gap:10 }}>
                  <span style={{ fontSize:18 }}>≡ƒñû</span>
                  <span style={{ color:"var(--text)", fontSize:13 }}><strong>AI αª╕αºüαª¬αª╛αª░αª┐αª╢:</strong> <span style={{ color:G.teal }}>{SPECIALIZATIONS.find(s=>s.id===suggestedSpec)?.en}</span></span>
                </div>
                <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)" }}>αª¼αª┐αª¡αª╛αªù αª¼αºçαª¢αºç αª¿αª┐αª¿</h2>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))", gap:12, marginBottom:24 }}>
                {SPECIALIZATIONS.map(spec=>(
                  <div key={spec.id} className="glass card-h" style={{ padding:18, textAlign:"center", borderRadius:15, cursor:"pointer", border:selectedSpec===spec.id?`2px solid ${spec.color}`:"2px solid transparent", background:selectedSpec===spec.id?`${spec.color}12`:undefined, position:"relative" }} onClick={()=>setSelectedSpec(spec.id)}>
                    {spec.id===suggestedSpec && <div style={{ position:"absolute", top:-7, right:-7, background:G.gold, color:"#000", fontSize:9, fontWeight:700, padding:"2px 6px", borderRadius:7 }}>AI</div>}
                    <div style={{ fontSize:26, marginBottom:7 }}>{spec.icon}</div>
                    <div style={{ fontWeight:700, fontSize:11, color:"var(--text)" }}>{spec.en}</div>
                    <div style={{ fontSize:10, color:"var(--text2)", marginTop:3 }}>{DOCTORS.filter(d=>d.specialization===spec.id).length} αªíαª╛αªòαºìαªñαª╛αª░</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", gap:11 }}>
                <button onClick={()=>setStep(1)} style={{ padding:"11px 22px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>ΓåÉ αª½αª┐αª░αºüαª¿</button>
                <button className="btn-rip" onClick={()=>{ if(!selectedSpec){ notify("αª¼αª┐αª¡αª╛αªù αª¼αºçαª¢αºç αª¿αª┐αª¿","warning"); return; } setStep(3); }} style={{ padding:"11px 26px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700 }}>αªíαª╛αªòαºìαªñαª╛αª░ αªªαºçαªûαºüαª¿ ΓåÆ</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="fade-up">
              <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:18 }}>αªíαª╛αªòαºìαªñαª╛αª░ αª¼αºçαª¢αºç αª¿αª┐αª¿</h2>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(275px,1fr))", gap:15, marginBottom:22 }}>
                {specDocs.map(doc=>(
                  <div key={doc.id} className="glass card-h" style={{ padding:18, borderRadius:17, cursor:"pointer", border:selectedDoctor?.id===doc.id?`2px solid ${G.teal}`:"2px solid transparent", background:selectedDoctor?.id===doc.id?`${G.teal}08`:undefined }} onClick={()=>setSelectedDoctor(doc)}>
                    <div style={{ display:"flex", gap:11, marginBottom:11 }}>
                      <img src={doc.avatar} alt={doc.name} style={{ width:55, height:55, borderRadius:"50%", border:`2px solid ${selectedDoctor?.id===doc.id?G.teal:G.teal+"33"}`, objectFit:"cover", background:"var(--surface2)" }} />
                      <div>
                        <div style={{ fontWeight:700, color:"var(--text)", marginBottom:2, fontSize:13 }}>{doc.name}</div>
                        <div style={{ fontSize:11, color:G.teal }}>{doc.specName}</div>
                        <div style={{ fontSize:10, color:"var(--text2)" }}>{doc.experience}αª¼αª¢αª░ αªàαª¡αª┐αª£αºìαª₧αªñαª╛</div>
                      </div>
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <Stars rating={doc.rating} size={12} />
                      <span style={{ fontWeight:800, color:G.teal, fontSize:15 }}>{fmt(doc.fee)}</span>
                    </div>
                    <div style={{ marginTop:6, fontSize:11, color:G.emerald }}>≡ƒòÉ {doc.nextSlot}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", gap:11 }}>
                <button onClick={()=>setStep(2)} style={{ padding:"11px 22px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>ΓåÉ αª½αª┐αª░αºüαª¿</button>
                <button className="btn-rip" onClick={()=>{ if(!selectedDoctor){ notify("αªíαª╛αªòαºìαªñαª╛αª░ αª¼αºçαª¢αºç αª¿αª┐αª¿","warning"); return; } setStep(4); }} style={{ padding:"11px 26px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700 }}>αª╕αª╛αª«αª¿αºç αª»αª╛αª¿ ΓåÆ</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="fade-up" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, alignItems:"start" }}>
              <div>
                <h2 className="syne" style={{ fontSize:20, fontWeight:800, color:"var(--text)", marginBottom:18 }}>αªñαª╛αª░αª┐αªû αª¼αºçαª¢αºç αª¿αª┐αª¿</h2>
                <div className="glass" style={{ padding:18, borderRadius:20 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                    <button onClick={()=>setCalMonth(m=>new Date(m.getFullYear(),m.getMonth()-1,1))} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--text)", fontSize:17 }}>ΓÇ╣</button>
                    <span style={{ fontWeight:700, color:"var(--text)", fontSize:14 }}>{calMonth.toLocaleString("default",{month:"long",year:"numeric"})}</span>
                    <button onClick={()=>setCalMonth(m=>new Date(m.getFullYear(),m.getMonth()+1,1))} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--text)", fontSize:17 }}>ΓÇ║</button>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:3, marginBottom:7 }}>
                    {["αª░αª¼αª┐","αª╕αºïαª«","αª«αªÖαºìαªùαª▓","αª¼αºüαªº","αª¼αºâαª╣αª╕αºìαª¬αªñαª┐","αª╢αºüαªòαºìαª░","αª╢αª¿αª┐"].map(d=><div key={d} style={{ textAlign:"center", fontSize:10, fontWeight:700, color:"var(--text2)", padding:"3px 0" }}>{d.slice(0,2)}</div>)}
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:3 }}>{renderCalendar()}</div>
                  {selectedDate && <div style={{ marginTop:10, textAlign:"center", fontSize:12, color:G.teal, fontWeight:600 }}>αª¿αª┐αª░αºìαª¼αª╛αªÜαª┐αªñ: {selectedDate}</div>}
                </div>
              </div>
              <div>
                <h2 className="syne" style={{ fontSize:20, fontWeight:800, color:"var(--text)", marginBottom:18 }}>αª╕αª«αª»αª╝ αªô αªñαªÑαºìαª»</h2>
                <div className="glass" style={{ padding:18, borderRadius:20 }}>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:20 }}>
                    {TIMES.map(t=>(
                      <button key={t} onClick={()=>setSelectedTime(t)} style={{ padding:"9px 5px", borderRadius:9, border:"none", cursor:"pointer", background:selectedTime===t?G.teal:"var(--surface2)", color:selectedTime===t?"#fff":"var(--text)", fontSize:11, fontWeight:600, fontFamily:"'DM Sans',sans-serif", transition:"all .18s" }}>{t}</button>
                    ))}
                  </div>
                  <div style={{ marginBottom:14 }}>
                    <input className="hms-input" placeholder="αª░αºïαªùαºÇαª░ αª¿αª╛αª« αª▓αª┐αªûαºüαª¿ *" value={patientName} onChange={e=>setPatientName(e.target.value)} style={{ marginBottom:10 }} />
                    <input className="hms-input" placeholder="αª«αºïαª¼αª╛αªçαª▓ αª¿αª«αºìαª¼αª░ (αªÉαªÜαºìαª¢αª┐αªò)" value={patientPhone} onChange={e=>setPatientPhone(e.target.value)} />
                  </div>
                  {selectedDoctor && (
                    <div style={{ padding:14, background:`${G.teal}08`, borderRadius:13, border:`1px solid ${G.teal}28`, marginBottom:18 }}>
                      <div style={{ fontWeight:700, color:"var(--text)", marginBottom:7, fontSize:13 }}>αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ αª╕αª╛αª░αª╛αªéαª╢</div>
                      {[["≡ƒæ¿ΓÇìΓÜò∩╕Å αªíαª╛αªòαºìαªñαª╛αª░",selectedDoctor.name],["≡ƒö¼ αª¼αª┐αª¡αª╛αªù",selectedDoctor.specName],["≡ƒôà αªñαª╛αª░αª┐αªû",selectedDate||"αª¿αª┐αª░αºìαª¼αª╛αªÜαª┐αªñ αª¿αª»αª╝"],["ΓÅ░ αª╕αª«αª»αª╝",selectedTime||"αª¿αª┐αª░αºìαª¼αª╛αªÜαª┐αªñ αª¿αª»αª╝"],["≡ƒÆ░ αª½αª┐",fmt(selectedDoctor.fee)]].map(([k,v])=>(
                        <div key={k} style={{ display:"flex", justifyContent:"space-between", marginBottom:4, fontSize:12 }}>
                          <span style={{ color:"var(--text2)" }}>{k}</span>
                          <span style={{ fontWeight:600, color:"var(--text)" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{ display:"flex", gap:9 }}>
                    <button onClick={()=>setStep(3)} style={{ padding:"11px 22px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>ΓåÉ αª½αª┐αª░αºüαª¿</button>
                    <button className="btn-rip" onClick={bookAppointment} style={{ flex:1, padding:"11px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700, fontSize:14 }}>αª¼αºüαªòαª┐αªé αª¿αª┐αª╢αºìαªÜαª┐αªñ αªòαª░αºüαª¿ Γ£ô</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="fade-up" style={{ textAlign:"center", padding:"50px 22px" }}>
              <div style={{ width:90, height:90, borderRadius:"50%", background:`${G.emerald}18`, border:`3px solid ${G.emerald}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:42, margin:"0 auto 22px" }}>Γ£à</div>
              <h2 className="syne" style={{ fontSize:32, fontWeight:800, color:"var(--text)", marginBottom:10 }}>αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ αª¿αª┐αª╢αºìαªÜαª┐αªñ!</h2>
              <p style={{ color:"var(--text2)", fontSize:15, marginBottom:6 }}>αªíαª╛αªòαºìαªñαª╛αª░: <strong style={{ color:G.teal }}>{selectedDoctor?.name}</strong></p>
              <p style={{ color:"var(--text2)", marginBottom:6 }}>{selectedDate} αª╕αª«αª»αª╝ {selectedTime}</p>
              <div style={{ display:"inline-block", background:`${G.sky}18`, border:`1.5px solid ${G.sky}44`, color:G.sky, padding:"8px 20px", borderRadius:12, fontWeight:700, fontSize:14, marginBottom:28 }}>
                αªƒαºïαªòαºçαª¿: {appointments[0]?.token || "DHK-2350"}
              </div>
              <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
                <button onClick={()=>{ setStep(1); setSymptoms(""); setSelectedDoctor(null); setSelectedDate(null); setSelectedTime(null); setImagePreview(null); setPatientName(""); }} style={{ padding:"11px 26px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700 }}>αªåαª¼αª╛αª░ αª¼αºüαªò αªòαª░αºüαª¿</button>
                <button onClick={()=>setActiveTab("mine")} style={{ padding:"11px 26px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>αªåαª«αª╛αª░ αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ αªªαºçαªûαºüαª¿</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ΓöÇΓöÇΓöÇ DASHBOARD PAGE ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const DashboardPage = ({ role }) => {
  const [loaded, setLoaded] = useState(false);
  const [section, setSection] = useState("overview");
  useEffect(()=>{ setTimeout(()=>setLoaded(true),280); },[]);

  const roleCards = {
    patient: [
      { l:"αª«αºïαªƒ αª¡αª┐αª£αª┐αªƒ", v:"αººαº¿", ch:"+αº¿", icon:"≡ƒ⌐║", c:G.sky },
      { l:"αªåαª╕αª¿αºìαª¿ αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ", v:"αº¿", ch:"αª¬αª░αºçαª░αªƒαª┐: αªåαªùαª╛αª«αºÇαªòαª╛αª▓", icon:"≡ƒôà", c:G.teal },
      { l:"αª░αª┐αª¬αºïαª░αºìαªƒ", v:"αº½", ch:"αº¿αªƒαª┐ αª¿αªñαºüαª¿", icon:"≡ƒôä", c:G.emerald },
      { l:"αª╕αºìαª¼αª╛αª╕αºìαªÑαºìαª» αª╕αºìαªòαºïαª░", v:"αº«αº½%", ch:"+αº⌐%", icon:"≡ƒÆÜ", c:G.gold },
    ],
    doctor: [
      { l:"αªåαª«αª╛αª░ αª░αºïαªùαºÇ", v:"αº⌐αº¬αº¿", ch:"+αº½%", icon:"≡ƒºæΓÇì≡ƒñ¥ΓÇì≡ƒºæ", c:G.sky },
      { l:"αªåαª£αªòαºçαª░ αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ", v:"αº«", ch:"αº¿αªƒαª┐ αª¿αªñαºüαª¿", icon:"≡ƒôï", c:G.teal },
      { l:"αª«αª╛αª╕αª┐αªò αªåαª»αª╝", v:"αº│αº¬αº¿,αºªαºªαºª", ch:"+αººαº«%", icon:"≡ƒÆ│", c:G.emerald },
      { l:"αª░αºçαªƒαª┐αªé", v:"αº¬.αº» Γ¡É", ch:"+αºª.αºº", icon:"≡ƒÅå", c:G.gold },
    ],
    admin: [
      { l:"αª«αºïαªƒ αª░αºïαªùαºÇ", v:"αºº,αº¿αº«αº¬", ch:"+αººαº¿%", icon:"≡ƒæÑ", c:G.sky },
      { l:"αªåαª£αªòαºçαª░ αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ", v:"αº¬αº«", ch:"+αº«%", icon:"≡ƒôà", c:G.teal },
      { l:"αª«αª╛αª╕αª┐αªò αª░αª╛αª£αª╕αºìαª¼", v:"αº│αº¿αº¡,αº⌐αºªαºª", ch:"+αººαº½%", icon:"≡ƒÆ░", c:G.emerald },
      { l:"αª╕αªòαºìαª░αª┐αª»αª╝ αªíαª╛αªòαºìαªñαª╛αª░", v:`${DOCTORS.length}`, ch:"+αº¿", icon:"≡ƒæ¿ΓÇìΓÜò∩╕Å", c:G.purple },
    ],
    superadmin: [
      { l:"αª«αºïαªƒ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓", v:`${BD_HOSPITALS_DATA.length}`, ch:"+αºº", icon:"≡ƒÅÑ", c:G.sky },
      { l:"αª╕αªòαºìαª░αª┐αª»αª╝ αªíαª╛αªòαºìαªñαª╛αª░", v:`${DOCTORS.length}`, ch:"+αº⌐", icon:"≡ƒæ¿ΓÇìΓÜò∩╕Å", c:G.teal },
      { l:"αª£αª╛αªñαºÇαª»αª╝ αª░αª╛αª£αª╕αºìαª¼", v:"αº│αº¿.αº¡αªòαºïαªƒαª┐", ch:"+αº¿αº¿%", icon:"≡ƒÆ░", c:G.emerald },
      { l:"αª£αª░αºüαª░αª┐ αªòαºçαª╕", v:"αººαº¬", ch:"αªåαª£", icon:"≡ƒÜ¿", c:G.rose },
    ],
  };

  const cards = roleCards[role] || roleCards.patient;
  const monthly = [
    { m:"αª£αª╛αª¿αºü", p:142, r:182000 },{ m:"αª½αºçαª¼αºìαª░αºü", p:168, r:214000 },{ m:"αª«αª╛αª░αºìαªÜ", p:195, r:248000 },
    { m:"αªÅαª¬αºìαª░αª┐αª▓", p:178, r:227000 },{ m:"αª«αºç", p:215, r:273000 },{ m:"αª£αºüαª¿", p:230, r:298000 },
  ];
  const maxP = Math.max(...monthly.map(d=>d.p));
  const specDist = SPECIALIZATIONS.slice(0,6).map(s=>({ name:s.en, count:DOCTORS.filter(d=>d.specialization===s.id).length, color:s.color }));
  const sideItems = [
    { id:"overview",  icon:"≡ƒôè", l:"αª╕αª╛αª«αªùαºìαª░αª┐αªò" },
    { id:"analytics", icon:"≡ƒôê", l:"αª¼αª┐αª╢αºìαª▓αºçαª╖αªú" },
    { id:"doctors",   icon:"≡ƒæ¿ΓÇìΓÜò∩╕Å",l:"αªíαª╛αªòαºìαªñαª╛αª░" },
    { id:"hospitals", icon:"≡ƒÅÑ", l:"αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓" },
    { id:"emergency", icon:"≡ƒÜ¿", l:"αª£αª░αºüαª░αª┐" },
    { id:"reports",   icon:"≡ƒôä", l:"αª░αª┐αª¬αºïαª░αºìαªƒ" },
    { id:"settings",  icon:"ΓÜÖ∩╕Å", l:"αª╕αºçαªƒαª┐αªéαª╕" },
  ];

  return (
    <div style={{ display:"flex", minHeight:"calc(100vh - 66px)" }}>
      <div className="hide-m glass" style={{ width:210, flexShrink:0, borderRadius:0, borderRight:"1px solid var(--border)", padding:"22px 10px", position:"sticky", top:66, height:"calc(100vh - 66px)", overflowY:"auto" }}>
        <div style={{ marginBottom:22, padding:"0 7px" }}>
          <div style={{ fontSize:11, fontWeight:700, color:"var(--text2)", textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>{role.toUpperCase()} αª¬αºìαª»αª╛αª¿αºçαª▓</div>
          <div style={{ width:36, height:3, background:G.teal, borderRadius:2 }} />
        </div>
        {sideItems.map(item=>(
          <div key={item.id} className={`sidebar-item ${section===item.id?"active":""}`} onClick={()=>{ setSection(item.id); notify(`${item.l} αª¼αª┐αª¡αª╛αªù`,"info"); }}>
            <span style={{ fontSize:17 }}>{item.icon}</span><span>{item.l}</span>
          </div>
        ))}
        <div style={{ marginTop:28, padding:"14px 7px" }}>
          <div style={{ fontSize:11, fontWeight:700, color:"var(--text2)", marginBottom:10 }}>αªªαºìαª░αºüαªñ αªñαªÑαºìαª»</div>
          {[["αªàαª¿αª▓αª╛αªçαª¿ αªíαª╛αªòαºìαªñαª╛αª░","αººαº¿",G.emerald],["αªàαª¬αºçαªòαºìαª╖αª«αª╛αªú","αº½",G.gold],["αª£αª░αºüαª░αª┐ αªòαºçαª╕","αº¿",G.rose]].map(([l,v,c])=>(
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
              {role==="superadmin"?"αª╕αºüαª¬αª╛αª░ αªàαºìαª»αª╛αªíαª«αª┐αª¿":role==="admin"?"αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓ αªàαºìαª»αª╛αªíαª«αª┐αª¿":role==="doctor"?"αªíαª╛αªòαºìαªñαª╛αª░":"αª░αºïαªùαºÇ"} <span className="grad-text">αªíαºìαª»αª╛αª╢αª¼αºïαª░αºìαªí</span>
            </h1>
            <p style={{ color:"var(--text2)", fontSize:13 }}>αª╕αºìαª¼αª╛αªùαªñαª«! αªåαª£αªòαºçαª░ αª╕αª╛αª░αª╕αªéαªòαºìαª╖αºçαª¬αÑñ</p>
          </div>
          <div style={{ display:"flex", gap:9 }}>
            <button onClick={()=>notify("αª░αª┐αª¬αºïαª░αºìαªƒ αª░αª¬αºìαªñαª╛αª¿αª┐ αª╣αª»αª╝αºçαª¢αºç!","success")} style={{ padding:"9px 18px", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>≡ƒôñ αª░αª¬αºìαªñαª╛αª¿αª┐</button>
            <button className="btn-rip" onClick={()=>notify("αªíαºçαªƒαª╛ αªåαª¬αªíαºçαªƒ αª╣αª»αª╝αºçαª¢αºç!","success")} style={{ padding:"9px 18px", borderRadius:9, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>≡ƒöä αª░αª┐αª½αºìαª░αºçαª╢</button>
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
              <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15 }}>αª░αºïαªùαºÇαª░ αªƒαºìαª░αºçαª¿αºìαªí (αº¿αºªαº¿αº¼)</h3>
              <select className="hms-select" style={{ fontSize:11, padding:"4px 9px" }} onChange={()=>notify("αªÜαª╛αª░αºìαªƒ αªåαª¬αªíαºçαªƒ αª╣αª»αª╝αºçαª¢αºç","info")}><option>αª«αª╛αª╕αª┐αªò</option><option>αª╕αª╛αª¬αºìαªñαª╛αª╣αª┐αªò</option></select>
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
            <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15, marginBottom:18 }}>αª¼αª┐αª¡αª╛αªù αªàαª¿αºüαª»αª╛αª»αª╝αºÇ</h3>
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
            <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15, marginBottom:18 }}>αª╕αªéαª»αºüαªòαºìαªñ αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓</h3>
            <div style={{ overflowX:"auto" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                <thead>
                  <tr>{["αª╣αª╛αª╕αª¬αª╛αªñαª╛αª▓","αª£αºçαª▓αª╛","αª╢αª»αºìαª»αª╛","ICU","αª£αª░αºüαª░αª┐","αª░αºçαªƒαª┐αªé","αªàαºìαª»αª╛αª«αºìαª¼αºüαª▓αºçαª¿αºìαª╕","αª╕αºìαªƒαºìαª»αª╛αªƒαª╛αª╕"].map(h=><th key={h} style={{ padding:"7px 11px", textAlign:"left", color:"var(--text2)", fontWeight:600, whiteSpace:"nowrap", borderBottom:"1px solid var(--border)" }}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {BD_HOSPITALS_DATA.map(h=>(
                    <tr key={h.id} style={{ borderBottom:"1px solid var(--border)" }}>
                      <td style={{ padding:"11px", color:"var(--text)", fontWeight:600 }}>{h.en}</td>
                      <td style={{ padding:"11px", color:"var(--text2)" }}>{h.district.split("(")[0]}</td>
                      <td style={{ padding:"11px", color:"var(--text2)" }}>{h.beds}</td>
                      <td style={{ padding:"11px", color:"var(--text2)" }}>{h.icu}</td>
                      <td style={{ padding:"11px" }}>{h.emergency?<Badge label="αª╣αºìαª»αª╛αªü" color={G.emerald} />:<Badge label="αª¿αª╛" color={G.slate} />}</td>
                      <td style={{ padding:"11px", fontWeight:700, color:G.gold }}>Γ¡É{h.rating}</td>
                      <td style={{ padding:"11px" }}>{h.ambulance?"≡ƒÜæ":"-"}</td>
                      <td style={{ padding:"11px" }}><Badge label="αª╕αªòαºìαª░αª┐αª»αª╝" color={G.emerald} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="glass" style={{ padding:22, borderRadius:20, marginBottom:22 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
            <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15 }}>αª╕αª╛αª«αºìαª¬αºìαª░αªñαª┐αªò αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ</h3>
            <button onClick={()=>notify("αª╕αª¼ αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ","info")} style={{ fontSize:12, color:G.teal, background:"none", border:"none", cursor:"pointer", fontWeight:600 }}>αª╕αª¼ αªªαºçαªûαºüαª¿ ΓåÆ</button>
          </div>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
              <thead>
                <tr>{["αª░αºïαªùαºÇ","αªíαª╛αªòαºìαªñαª╛αª░","αª¼αª┐αª¡αª╛αªù","αªñαª╛αª░αª┐αªû","αª╕αª«αª»αª╝","αª╕αºìαªƒαºìαª»αª╛αªƒαª╛αª╕","αª½αª┐"].map(h=><th key={h} style={{ padding:"7px 11px", textAlign:"left", color:"var(--text2)", fontWeight:600, whiteSpace:"nowrap", borderBottom:"1px solid var(--border)" }}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {SAMPLE_APPOINTMENTS.map(apt=>(
                  <tr key={apt.id} style={{ borderBottom:"1px solid var(--border)" }}>
                    <td style={{ padding:"11px", color:"var(--text)", fontWeight:600 }}>{apt.patient}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{apt.doctor}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{apt.spec}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{apt.date}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{apt.time}</td>
                    <td style={{ padding:"11px" }}><Badge label={apt.status==="confirmed"?"αª¿αª┐αª╢αºìαªÜαª┐αªñ":apt.status==="pending"?"αªàαª¬αºçαªòαºìαª╖αª«αª╛αªú":apt.status==="completed"?"αª╕αª«αºìαª¬αª¿αºìαª¿":"αª¼αª╛αªñαª┐αª▓"} color={{ confirmed:G.emerald, pending:G.gold, completed:G.teal, cancelled:G.rose }[apt.status]} /></td>
                    <td style={{ padding:"11px", fontWeight:700, color:G.teal }}>{fmt(apt.fee)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass" style={{ padding:22, borderRadius:20 }}>
          <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15, marginBottom:18 }}>αª╢αºÇαª░αºìαª╖ αª░αºçαªƒαºçαªí αªíαª╛αªòαºìαªñαª╛αª░</h3>
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

// ΓöÇΓöÇΓöÇ CHATBOT ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ id:1, role:"bot", text:"αªåαª╕αºìαª╕αª╛αª▓αª╛αª«αºü αªåαª▓αª╛αªçαªòαºüαª«! αªåαª«αª┐ MediBot ≡ƒñû ΓÇö αªåαª¬αª¿αª╛αª░ αª╕αºìαª¼αª╛αª╕αºìαªÑαºìαª»αª╕αºçαª¼αª╛ αª╕αª╣αªòαª╛αª░αºÇαÑñ αªòαºÇαª¡αª╛αª¼αºç αª╕αª╛αª╣αª╛αª»αºìαª» αªòαª░αªñαºç αª¬αª╛αª░αª┐?" }]);
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
    if (/hello|hi|hey|αª╣αºìαª»αª╛αª▓αºï|αª╕αª╛αª▓αª╛αª«|αª╣αºìαª»αª╛/.test(lower)) reply = rand(CHAT_BD.greeting);
    else if (/appointment|book|αª¼αºüαªò|αªàαºìαª»αª╛αª¬αª»αª╝αºçαª¿αºìαªƒαª«αºçαª¿αºìαªƒ/.test(lower)) reply = rand(CHAT_BD.appointment);
    else if (/emergency|αª£αª░αºüαª░αª┐|999|ambulance|αªàαºìαª»αª╛αª«αºìαª¼αºüαª▓αºçαª¿αºìαª╕/.test(lower)) reply = rand(CHAT_BD.emergency);
    else if (/pain|fever|sick|symptom|αª¼αºìαª»αªÑαª╛|αª£αºìαª¼αª░|αªàαª╕αºüαª╕αºìαªÑ|αª▓αªòαºìαª╖αªú/.test(lower)) reply = rand(CHAT_BD.symptoms);
    else reply = rand(CHAT_BD.default);
    setTyping(false);
    setMsgs(m=>[...m,{ id:Date.now()+1, role:"bot", text:reply }]);
  };

  return (
    <>
      <button onClick={()=>setOpen(o=>!o)} style={{ position:"fixed", bottom:82, right:22, width:54, height:54, borderRadius:"50%", background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", cursor:"pointer", fontSize:24, zIndex:900, boxShadow:`0 7px 26px ${G.teal}50`, display:"flex", alignItems:"center", justifyContent:"center", transition:"transform .2s", transform:open?"rotate(45deg)":"none" }}>
        {open?"Γ£ò":"≡ƒÆ¼"}
      </button>
      {open && (
        <div className="fade-up" style={{ position:"fixed", bottom:150, right:22, width:330, height:450, borderRadius:20, overflow:"hidden", zIndex:900, boxShadow:"0 18px 55px rgba(0,0,0,.38)", display:"flex", flexDirection:"column", background:"var(--surface)", border:"1px solid var(--border)" }}>
          <div style={{ padding:"14px 18px", background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, display:"flex", alignItems:"center", gap:9 }}>
            <div style={{ width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,.18)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }}>≡ƒñû</div>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:700, color:"#fff", fontSize:13 }}>MediBot AI</div>
              <div style={{ fontSize:10, color:"rgba(255,255,255,.7)", display:"flex", alignItems:"center", gap:3 }}>
                <span style={{ width:5, height:5, borderRadius:"50%", background:"#4ade80" }} /> αªàαª¿αª▓αª╛αªçαª¿
              </div>
            </div>
            <div style={{ display:"flex", gap:5 }}>
              {["≡ƒçº≡ƒç⌐","≡ƒç¼≡ƒçº"].map((f,i)=>(
                <button key={i} onClick={()=>{ setLang(i===0?"bn":"en"); notify(i===0?"αª¼αª╛αªéαª▓αª╛αª»αª╝ αª¬αª░αª┐αª¼αª░αºìαªñαª¿":"Switched to English","info"); }} style={{ background:lang===(i===0?"bn":"en")?"rgba(255,255,255,.3)":"transparent", border:"none", cursor:"pointer", fontSize:14, padding:"2px 5px", borderRadius:5 }}>{f}</button>
              ))}
            </div>
            <button onClick={()=>setOpen(false)} style={{ background:"none", border:"none", color:"#fff", cursor:"pointer", fontSize:17 }}>├ù</button>
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
            {["αª£αª░αºüαª░αª┐ αª╕αª╛αª╣αª╛αª»αºìαª»","αªíαª╛αªòαºìαªñαª╛αª░ αªûαºüαªüαª£αºüαª¿","αª¼αºüαªòαª┐αªé αªòαª░αºüαª¿"].map(q=>(
              <button key={q} onClick={()=>{ setInp(q); }} style={{ padding:"4px 10px", borderRadius:16, background:`${G.teal}15`, color:G.teal, border:`1px solid ${G.teal}33`, cursor:"pointer", fontSize:11, fontWeight:600, whiteSpace:"nowrap", fontFamily:"'DM Sans',sans-serif" }}>{q}</button>
            ))}
          </div>
          <div style={{ padding:"10px 14px", borderTop:"1px solid var(--border)", display:"flex", gap:7 }}>
            <input className="hms-input" placeholder="αª¼αª╛αª░αºìαªñαª╛ αª▓αª┐αªûαºüαª¿ΓÇª" value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} style={{ fontSize:12, padding:"9px 13px" }} />
            <button onClick={send} style={{ width:38, height:38, borderRadius:9, flexShrink:0, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", cursor:"pointer", fontSize:15, display:"flex", alignItems:"center", justifyContent:"center" }}>Γ₧ñ</button>
          </div>
        </div>
      )}
    </>
  );
};

// ΓöÇΓöÇΓöÇ APP ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
export default function App() {
  const [dark, setDark] = useState(true);
  const [page, setPage] = useState("Home");
  const [role, setRole] = useState("patient");
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [preDoc, setPreDoc] = useState(null);

  useEffect(()=>{ injectStyles(); document.body.className="hms-dark"; },[]);
  useEffect(()=>{ injectStyles(); document.body.className=dark?"hms-dark":"hms-light"; },[dark]);

  const handleBook = doc => { setPreDoc(doc); setPage("Appointments"); notify(`${doc.name} αªÅαª░ αª╕αª╛αªÑαºç αª¼αºüαªòαª┐αªé αª╢αºüαª░αºü`,"success"); window.scrollTo(0,0); };

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
