import { useState, useEffect, useRef } from "react";

const G = {
  teal:"#0d9488", tealDark:"#0f766e", tealLight:"#99f6e4",
  navy:"#0f172a", navyMid:"#1e293b", navyLight:"#334155",
  slate:"#64748b", white:"#f8fafc", gold:"#f59e0b",
  rose:"#f43f5e", emerald:"#10b981", sky:"#38bdf8", purple:"#a78bfa",
  red:"#ef4444", orange:"#f97316",
};

// ─── FULL TRANSLATIONS ────────────────────────────────────────────────────────
const T = {
  en: {
    // nav
    home:"Home", doctors:"Doctors", appointments:"Appointments",
    emergency:"Emergency", dashboard:"Dashboard",
    // auth
    login:"Login", register:"Register", logout:"Logout",
    myProfile:"My Profile", settings:"Settings",
    loginTitle:"Welcome Back", loginSub:"Sign in to your MediCare BD account",
    registerTitle:"Create Account", registerSub:"Join Bangladesh's leading health platform",
    email:"Email Address", password:"Password", fullName:"Full Name",
    phone:"Phone Number", forgotPass:"Forgot password?",
    noAccount:"Don't have an account?", hasAccount:"Already have an account?",
    signIn:"Sign In", signUp:"Create Account",
    orContinue:"or continue with",
    namePlaceholder:"Your full name", emailPlaceholder:"your@email.com",
    phonePlaceholder:"+880 1X-XXXXXX", passPlaceholder:"••••••••",
    confirmPass:"Confirm Password", confirmPassPlaceholder:"••••••••",
    guest:"Continue as Guest", profileRole:"Patient", online:"Online",
    termsNote:"By creating an account you agree to our Terms of Service and Privacy Policy.",
    loginSuccess:"Login successful! Welcome back 👋",
    registerSuccess:"Account created! Welcome to MediCare BD 🎉",
    fillFields:"Please fill all fields", fillRequired:"Please fill required fields",
    passNoMatch:"Passwords do not match",
    signingIn:"Signing in…", creatingAccount:"Creating account…",
    loggedOut:"You have been logged out.",
    // lang
    langChanged:"Language changed to English 🇺🇸",
    // header
    lightMode:"Light mode on", darkMode:"Dark mode on",
    noNotifications:"No new notifications",
    roleChanged:"Role view changed",
    // home
    tagline:"Bangladesh's Central Healthcare Platform",
    heroTitle1:"Your Health,", heroTitle2:"Our Priority",
    heroDesc:"AI-powered symptom analysis, smart doctor recommendations and instant appointment booking across Bangladesh.",
    bookAppointment:"Book Appointment →",
    emergencyService:"🚨 Emergency Service",
    totalVisits:"10K+", totalVisitsLabel:"Patients",
    totalExperts:"50+", totalExpertsLabel:"Specialists",
    avgRating:"4.9★", avgRatingLabel:"Avg Rating",
    // stats
    stat1v:"50+", stat1l:"Expert Doctors",
    stat2v:"15+", stat2l:"Specializations",
    stat3v:"10+", stat3l:"Partner Hospitals",
    stat4v:"24/7", stat4l:"Emergency Service",
    // sections
    ourSpecializations:"Our", specializations:"Specializations",
    specSub:"World-class care across all major medical departments",
    howItWorks:"How It", works:"Works",
    connectedHospitals:"Connected", hospitals:"Hospitals",
    hospSub:"Top hospitals across Bangladesh on one platform",
    patientExperiences:"Patient", experiences:"Experiences",
    startNow:"Start Now — ", free:"Free",
    startNowSub:"Thousands of patients already use MediCare BD.",
    bookNow:"Book Appointment",
    // how it works steps
    step1t:"Describe your problem", step1d:"Type, speak or upload an image",
    step2t:"AI specialist recommendation", step2d:"Smart system recommends the right department",
    step3t:"Choose a hospital", step3d:"Find nearby hospitals and specialists",
    step4t:"Book appointment", step4d:"Pick a convenient date and time",
    // doctors label
    doctorsLabel:"doctors →",
    // hospital card
    beds:"beds", icu:"ICU", ambulance:"Ambulance", km:"km",
    // testimonials label
    testimonialsLabel:"patient experiences",
    // footer
    footerCopy:"© 2026 MediCare BD — Bangladesh's Central Healthcare Platform",
    footerAbout:"About Us", footerTeam:"Our Team", footerCareers:"Careers", footerPress:"Press",
    footerServices:"Services", footerFindDoctor:"Find a Doctor",
    footerEmergency:"Emergency", footerTelemedicine:"Telemedicine",
    footerSpecialties:"Specialties",
    footerSupport:"Support", footerHelp:"Help Center",
    footerPrivacy:"Privacy Policy", footerTerms:"Terms of Service", footerContact:"Contact",
    footerComingSoon:"Coming soon!",
    socialMedia:"Social media!",
    // doctors page
    findDoctors:"Find", findDoctorsGrad:"Doctors",
    doctorsFound:"doctors found",
    searchPlaceholder:"🔍 Search by doctor, department or hospital...",
    allDepts:"All Departments", allDistricts:"All Districts",
    bestRating:"Best Rating", lowestFee:"Lowest Fee", mostExp:"Most Experienced",
    anyRating:"Any Rating", stars4:"4+ Stars", stars45:"4.5+ Stars",
    allTab:"All",
    // doctor card
    reviews:"reviews", consultFee:"Consultation fee", nextSlot:"Next slot",
    viewProfile:"View Profile", book:"Book",
    years:"yrs exp",
    // doctor modal
    experience:"Experience", fee:"Consultation Fee", hospital:"Hospital",
    schedule:"Schedule", languages:"Languages", nextSlotLabel:"Next Slot",
    district:"District", rating:"Rating",
    bio:"About",
    bookWith:"Book appointment with",
    // emergency page
    emergencyTitle:"Emergency & Smart", emergencyGrad:"Referral",
    emergencyDesc:"Upload an image or describe symptoms — AI will recommend the right hospital and doctor",
    emergencyActive:"⚠️ Emergency Mode Active",
    emergencyBanner:"Get immediate help in an emergency",
    callNational:"National Emergency", callHealth:"Health Helpline", callAmbulance:"Ambulance",
    // emergency steps
    eStep1:"Upload Problem", eStep2:"AI Analysis", eStep3:"Choose Hospital",
    eStep4:"See Doctors", eStep5:"Confirm Booking",
    // emergency upload panel
    uploadTitle:"Upload an image of your problem",
    uploadDesc:"Injury, skin disease, X-ray, medical report or prescription photo",
    uploadClick:"Upload image (optional)", uploadClickSub:"Click or drag here",
    // image types
    imgInjury:"Injury / Wound", imgSkin:"Skin Disease", imgXray:"X-ray / Scan",
    imgReport:"Medical Report", imgEye:"Eye Problem", imgChest:"Chest Problem",
    imgPrescription:"Prescription",
    // symptom panel
    symptomTitle:"Describe your symptoms",
    symptomDesc:"Write your problem in English or Bangla",
    symptomPlaceholder:"E.g. Chest pain and difficulty breathing for two days...",
    quickSelect:"Quick select:",
    quickSymptoms:["Chest pain","Headache","Back pain","Skin problem","Fever","Eye problem","Stomach pain","Shortness of breath","Knee pain"],
    analyzeBtn:"🤖 Analyze with AI →",
    analyzingBtn:"AI is analyzing…",
    // emergency result
    aiResult:"AI Analysis Result",
    confidence:"Confidence:",
    possibleConditions:"Possible conditions:",
    recommendations:"Recommendations:",
    reanalyze:"← Re-analyze",
    nearbyHospitals:"🏥 Nearby Hospitals",
    emergencyOnly:"🚨 Emergency hospitals only",
    altHospitals:"🔄 Alternative Hospitals",
    selectHospital:"Select Hospital →",
    distance:"Distance", ratingSort:"Rating", icuSort:"ICU",
    // emerg level labels
    levelLow:"Low", levelMedium:"Medium", levelCritical:"Critical",
    levelLowMsg:"This is suitable for a regular consultation.",
    levelMedMsg:"You should see a doctor as soon as possible.",
    levelCritMsg:"⚠️ Go to the nearest hospital immediately!",
    // doctor list in emergency
    noDocsFound:"No suitable doctors found at this hospital. Try another hospital.",
    tryOtherHosp:"View other hospitals",
    details:"Details",
    // appointments page
    appointmentsTitle:"Appointments",
    newBooking:"📅 New Booking",
    myAppointments:"📋 My Appointments",
    myAptsCount:"My Appointments",
    // apt status
    confirmed:"Confirmed", pending:"Pending", completed:"Completed", cancelled:"Cancelled",
    cancelBtn:"Cancel", detailsBtn:"Details",
    detailsEmailSent:"Details sent to email!",
    aptCancelled:"Appointment cancelled",
    // book steps
    bStep1:"Symptoms", bStep2:"Specialist", bStep3:"Doctor",
    bStep4:"Schedule", bStep5:"Confirm",
    // step 1
    howAreYou:"How are you feeling?",
    symptomSubDesc:"Describe your symptoms — AI will recommend the right specialist",
    voiceInputInfo:"Voice input",
    uploadSymptomImg:"Upload a symptom photo (optional)",
    analyzeSymptoms:"🤖 Analyze Symptoms →",
    analyzingSymptoms:"AI is analyzing…",
    quickSelectLabel:"Quick select:",
    quickSymptomsApt:["Chest pain","Headache","Back pain","Skin problem","Fever","Eye problem","Stomach pain","Shortness of breath"],
    // step 2
    aiRecommends:"AI Recommendation:",
    chooseDept:"Choose a Department",
    back:"← Back",
    viewDoctors:"View Doctors →",
    chooseDeptWarn:"Please choose a department",
    // step 3
    chooseDoctor:"Choose a Doctor",
    proceedBtn:"Proceed →",
    chooseDoctorWarn:"Please choose a doctor",
    // step 4
    chooseDate:"Choose a Date",
    timeAndInfo:"Time & Info",
    patientName:"Patient name *",
    patientPhone:"Phone number (optional)",
    aptSummary:"Appointment Summary",
    sumDoctor:"👨‍⚕️ Doctor",
    sumDept:"🔬 Department",
    sumDate:"📅 Date",
    sumTime:"⏰ Time",
    sumFee:"💰 Fee",
    notSelected:"Not selected",
    confirmBooking:"Confirm Booking ✓",
    chooseDateWarn:"Please choose a date and time",
    patientNameWarn:"Please enter patient name",
    // step 5
    aptConfirmed:"Appointment Confirmed!",
    doctorLabel:"Doctor:",
    tokenLabel:"Token:",
    bookAgain:"Book Again",
    viewMyApts:"View My Appointments",
    // calendar
    calSun:"Sun", calMon:"Mon", calTue:"Tue", calWed:"Wed",
    calThu:"Thu", calFri:"Fri", calSat:"Sat",
    selectedDate:"Selected:",
    // dashboard
    dashboardTitle:"Dashboard",
    superAdminLabel:"Super Admin", adminLabel:"Hospital Admin",
    doctorLabel2:"Doctor", patientLabel:"Patient",
    welcomeMsg:"Welcome! Here's today's summary.",
    exportBtn:"📤 Export",
    refreshBtn:"🔄 Refresh",
    exportedMsg:"Report exported!",
    refreshedMsg:"Data updated!",
    // dashboard sidebar
    sOverview:"Overview", sAnalytics:"Analytics", sDoctors:"Doctors",
    sHospitals:"Hospitals", sEmergency:"Emergency", sReports:"Reports",
    sSettings:"Settings",
    quickInfo:"Quick Info",
    onlineDoc:"Online Doctors", waitingPt:"Waiting", emergCases:"Emergency Cases",
    // dashboard cards - patient
    dTotalVisits:"Total Visits", dUpcoming:"Upcoming Appointments",
    dReports:"Reports", dHealthScore:"Health Score",
    // doctor
    dMyPatients:"My Patients", dTodayApts:"Today's Appointments",
    dMonthlyIncome:"Monthly Income", dRating:"Rating",
    // admin
    dTotalPatients:"Total Patients", dTodayApts2:"Today's Appointments",
    dMonthlyRevenue:"Monthly Revenue", dActiveDoctors:"Active Doctors",
    // superadmin
    dTotalHospitals:"Total Hospitals", dActiveDoctors2:"Active Doctors",
    dNationalRevenue:"National Revenue", dEmergCases:"Emergency Cases",
    // chart
    patientTrend:"Patient Trend (2026)", monthly:"Monthly", weekly:"Weekly",
    chartUpdated:"Chart updated",
    bySpecialization:"By Specialization",
    // hospital table headers
    tHospital:"Hospital", tDistrict:"District", tBeds:"Beds", tICU:"ICU",
    tEmergency:"Emergency", tRating:"Rating", tAmbulance:"Ambulance", tStatus:"Status",
    active:"Active", yes:"Yes", no:"No",
    // apt table headers
    tPatient:"Patient", tDoctor:"Doctor", tDept:"Department",
    tDate:"Date", tTime:"Time", tFee:"Fee",
    recentApts:"Recent Appointments",
    viewAll:"View all →",
    topDoctors:"Top Rated Doctors",
    // chatbot
    chatGreeting:"Assalamu Alaikum! I'm MediBot 🤖 — your healthcare assistant. How can I help you?",
    chatTyping:"MediBot is typing…",
    chatQEmergency:"Emergency help",
    chatQFind:"Find a doctor",
    chatQBook:"Book appointment",
    chatReplyGreeting:["Welcome! I'm MediBot 🤖 — how can I help you?","Hello! I'm your virtual health assistant. What's your problem today?"],
    chatReplySymptoms:["I understand your symptoms. Go to the Appointments tab to find the right specialist.","These symptoms are important. Our AI will suggest the best doctor for you."],
    chatReplyApt:["To book an appointment, go to the Appointments tab and choose your preferred doctor.","Choose a convenient time from our smart calendar."],
    chatReplyEmerg:["⚠️ In an emergency, go to the Emergency tab now or call 999!","In an emergency, go to the nearest hospital. Use the Emergency button."],
    chatReplyDefault:["Describe your problem and I'll find the right specialist.","I'm here 24/7. Write your symptoms or ask for emergency help."],
    chatPlaceholder:"Type a message…",
    // notifications
    nImageUploaded:"Image uploaded successfully!",
    nVoiceSuccess:"Voice input successful!",
    nVoiceError:"Voice input error",
    nVoiceUnsupported:"This browser does not support voice input",
    nAnalysisDone:"Analysis complete! See hospital recommendations.",
    nEmergencyDetected:"🚨 Emergency detected! Go to the nearest hospital!",
    nHospitalSelected:"selected",
    nHospitalChanged:"changed",
    nBookingStarted:"booking started",
    nAIRecommends:"AI recommendation:",
    nSymptomSelected:"Symptom selected:",
    nLangChanged:"Language changed to English 🇺🇸",
    nSocialMedia:"Social media!",
    nComingSoon:"Coming soon!",
    nGoogleSoon:"Google login coming soon",
    nFBSoon:"Facebook login coming soon",
    nForgotPass:"Password reset email sent!",
    nRoleChanged:"view changed",
    nSectionChanged:"section",
    nExported:"Report exported!",
    nRefreshed:"Data updated!",
    nFooterLink:"Coming soon!",
    nAllApts:"All appointments",
    // month names for chart
    months:["Jan","Feb","Mar","Apr","May","Jun"],
  },
  bn: {
    home:"হোম", doctors:"ডাক্তার", appointments:"অ্যাপয়েন্টমেন্ট",
    emergency:"জরুরি সেবা", dashboard:"ড্যাশবোর্ড",
    login:"লগইন", register:"নিবন্ধন", logout:"লগআউট",
    myProfile:"আমার প্রোফাইল", settings:"সেটিংস",
    loginTitle:"স্বাগতম ফিরে", loginSub:"আপনার MediCare BD অ্যাকাউন্টে সাইন ইন করুন",
    registerTitle:"অ্যাকাউন্ট তৈরি করুন", registerSub:"বাংলাদেশের সেরা স্বাস্থ্য প্ল্যাটফর্মে যোগ দিন",
    email:"ইমেইল ঠিকানা", password:"পাসওয়ার্ড", fullName:"পূর্ণ নাম",
    phone:"মোবাইল নম্বর", forgotPass:"পাসওয়ার্ড ভুলে গেছেন?",
    noAccount:"অ্যাকাউন্ট নেই?", hasAccount:"ইতিমধ্যে অ্যাকাউন্ট আছে?",
    signIn:"সাইন ইন", signUp:"অ্যাকাউন্ট তৈরি করুন",
    orContinue:"অথবা চালিয়ে যান",
    namePlaceholder:"আপনার পূর্ণ নাম", emailPlaceholder:"your@email.com",
    phonePlaceholder:"+880 1X-XXXXXX", passPlaceholder:"••••••••",
    confirmPass:"পাসওয়ার্ড নিশ্চিত করুন", confirmPassPlaceholder:"••••••••",
    guest:"গেস্ট হিসেবে চালিয়ে যান", profileRole:"রোগী", online:"অনলাইন",
    termsNote:"অ্যাকাউন্ট তৈরি করে আপনি আমাদের সেবার শর্তাবলী ও গোপনীয়তা নীতিতে সম্মত হচ্ছেন।",
    loginSuccess:"লগইন সফল! স্বাগতম 👋",
    registerSuccess:"অ্যাকাউন্ট তৈরি হয়েছে! MediCare BD তে স্বাগতম 🎉",
    fillFields:"সব ক্ষেত্র পূরণ করুন", fillRequired:"প্রয়োজনীয় ক্ষেত্রগুলো পূরণ করুন",
    passNoMatch:"পাসওয়ার্ড মিলছে না",
    signingIn:"সাইন ইন হচ্ছে…", creatingAccount:"অ্যাকাউন্ট তৈরি হচ্ছে…",
    loggedOut:"লগআউট সফল হয়েছে।",
    langChanged:"ভাষা বাংলায় পরিবর্তিত হয়েছে 🇧🇩",
    lightMode:"লাইট মোড চালু", darkMode:"ডার্ক মোড চালু",
    noNotifications:"কোনো নতুন বিজ্ঞপ্তি নেই",
    roleChanged:"ভিউতে পরিবর্তন হয়েছে",
    tagline:"বাংলাদেশের কেন্দ্রীয় স্বাস্থ্যসেবা প্ল্যাটফর্ম",
    heroTitle1:"আপনার স্বাস্থ্য,", heroTitle2:"আমাদের অগ্রাধিকার",
    heroDesc:"AI-চালিত লক্ষণ বিশ্লেষণ, স্মার্ট ডাক্তার সুপারিশ এবং সারা বাংলাদেশে তাৎক্ষণিক অ্যাপয়েন্টমেন্ট বুকিং।",
    bookAppointment:"অ্যাপয়েন্টমেন্ট বুক করুন →",
    emergencyService:"🚨 জরুরি সেবা",
    totalVisits:"১০হাজার+", totalVisitsLabel:"রোগী",
    totalExperts:"৫০+", totalExpertsLabel:"বিশেষজ্ঞ",
    avgRating:"৪.৯★", avgRatingLabel:"গড় রেটিং",
    stat1v:"৫০+", stat1l:"বিশেষজ্ঞ ডাক্তার",
    stat2v:"১৫+", stat2l:"বিশেষজ্ঞ বিভাগ",
    stat3v:"১০+", stat3l:"সংযুক্ত হাসপাতাল",
    stat4v:"২৪/৭", stat4l:"জরুরি সেবা",
    ourSpecializations:"আমাদের", specializations:"বিশেষজ্ঞ বিভাগ",
    specSub:"সকল প্রধান চিকিৎসা বিভাগে বিশ্বমানের সেবা",
    howItWorks:"কীভাবে", works:"কাজ করে",
    connectedHospitals:"সংযুক্ত", hospitals:"হাসপাতালসমূহ",
    hospSub:"সারা বাংলাদেশের শীর্ষ হাসপাতাল একটি প্ল্যাটফর্মে",
    patientExperiences:"রোগীদের", experiences:"অভিজ্ঞতা",
    startNow:"এখনই শুরু করুন — ", free:"বিনামূল্যে",
    startNowSub:"হাজারো রোগী ইতোমধ্যে MediCare BD ব্যবহার করছেন।",
    bookNow:"অ্যাপয়েন্টমেন্ট বুক করুন",
    step1t:"সমস্যা বর্ণনা করুন", step1d:"টাইপ করুন, কথা বলুন বা ছবি আপলোড করুন",
    step2t:"AI বিশেষজ্ঞ সুপারিশ", step2d:"স্মার্ট সিস্টেম সঠিক বিভাগ সুপারিশ করে",
    step3t:"হাসপাতাল বেছে নিন", step3d:"কাছের হাসপাতাল ও বিশেষজ্ঞ খুঁজুন",
    step4t:"অ্যাপয়েন্টমেন্ট বুক", step4d:"পছন্দের তারিখ ও সময় বেছে বুক করুন",
    doctorsLabel:"ডাক্তার →",
    beds:"শয্যা", icu:"ICU", ambulance:"অ্যাম্বুলেন্স", km:"কিমি",
    testimonialsLabel:"রোগীর অভিজ্ঞতা",
    footerCopy:"© ২০২৬ MediCare BD — বাংলাদেশের কেন্দ্রীয় স্বাস্থ্যসেবা প্ল্যাটফর্ম",
    footerAbout:"আমাদের সম্পর্কে", footerTeam:"আমাদের দল", footerCareers:"ক্যারিয়ার", footerPress:"প্রেস",
    footerServices:"সেবা", footerFindDoctor:"ডাক্তার খুঁজুন",
    footerEmergency:"জরুরি সেবা", footerTelemedicine:"টেলিমেডিসিন",
    footerSpecialties:"বিশেষত্ব",
    footerSupport:"সহায়তা", footerHelp:"সাহায্য কেন্দ্র",
    footerPrivacy:"গোপনীয়তা নীতি", footerTerms:"সেবার শর্ত", footerContact:"যোগাযোগ",
    footerComingSoon:"শীঘ্রই আসছে!", socialMedia:"সোশ্যাল মিডিয়া!",
    findDoctors:"ডাক্তার", findDoctorsGrad:"খুঁজুন",
    doctorsFound:"জন ডাক্তার পাওয়া গেছে",
    searchPlaceholder:"🔍 ডাক্তার, বিভাগ বা হাসপাতাল খুঁজুন...",
    allDepts:"সব বিভাগ", allDistricts:"সব জেলা",
    bestRating:"সেরা রেটিং", lowestFee:"সর্বনিম্ন ফি", mostExp:"সর্বাধিক অভিজ্ঞতা",
    anyRating:"যেকোনো রেটিং", stars4:"৪+ তারা", stars45:"৪.৫+ তারা",
    allTab:"সব",
    reviews:"রিভিউ", consultFee:"পরামর্শ ফি", nextSlot:"পরবর্তী সময়",
    viewProfile:"প্রোফাইল দেখুন", book:"বুক করুন",
    years:"বছর",
    experience:"অভিজ্ঞতা", fee:"পরামর্শ ফি", hospital:"হাসপাতাল",
    schedule:"সময়সূচি", languages:"ভাষা", nextSlotLabel:"পরবর্তী স্লট",
    district:"জেলা", rating:"রেটিং",
    bio:"পরিচিতি",
    bookWith:"এর সাথে অ্যাপয়েন্টমেন্ট বুক করুন",
    emergencyTitle:"জরুরি সেবা ও", emergencyGrad:"স্মার্ট রেফারেল",
    emergencyDesc:"ছবি আপলোড বা লক্ষণ বর্ণনা করুন — AI সঠিক হাসপাতাল ও ডাক্তার সুপারিশ করবে",
    emergencyActive:"⚠️ জরুরি মোড সক্রিয়",
    emergencyBanner:"জরুরি অবস্থায় তাৎক্ষণিক সাহায্য নিন",
    callNational:"জাতীয় জরুরি", callHealth:"স্বাস্থ্য হেল্পলাইন", callAmbulance:"অ্যাম্বুলেন্স",
    eStep1:"সমস্যা আপলোড", eStep2:"AI বিশ্লেষণ", eStep3:"হাসপাতাল বেছে নিন",
    eStep4:"ডাক্তার দেখুন", eStep5:"বুকিং নিশ্চিত",
    uploadTitle:"সমস্যার ছবি আপলোড করুন",
    uploadDesc:"আঘাত, চর্মরোগ, এক্স-রে, মেডিকেল রিপোর্ট বা প্রেসক্রিপশনের ছবি",
    uploadClick:"ছবি আপলোড করুন (ঐচ্ছিক)", uploadClickSub:"ক্লিক বা ড্র্যাগ করুন",
    imgInjury:"আঘাত / ক্ষত", imgSkin:"চর্মরোগ", imgXray:"এক্স-রে / স্ক্যান",
    imgReport:"মেডিকেল রিপোর্ট", imgEye:"চোখের সমস্যা", imgChest:"বুকের সমস্যা",
    imgPrescription:"প্রেসক্রিপশন",
    symptomTitle:"লক্ষণ বর্ণনা করুন",
    symptomDesc:"বাংলা বা ইংরেজিতে আপনার সমস্যা লিখুন",
    symptomPlaceholder:"যেমন: বুকে ব্যথা ও শ্বাস নিতে কষ্ট হচ্ছে দুই দিন ধরে...",
    quickSelect:"দ্রুত বেছে নিন:",
    quickSymptoms:["বুকে ব্যথা","মাথাব্যথা","পিঠে ব্যথা","চামড়ার সমস্যা","জ্বর","চোখের সমস্যা","পেটে ব্যথা","শ্বাস কষ্ট","হাঁটুতে ব্যথা"],
    analyzeBtn:"🤖 AI দিয়ে বিশ্লেষণ করুন →",
    analyzingBtn:"AI বিশ্লেষণ করছে…",
    aiResult:"AI বিশ্লেষণ ফলাফল",
    confidence:"নির্ভরযোগ্যতা:",
    possibleConditions:"সম্ভাব্য সমস্যা:",
    recommendations:"পরামর্শ:",
    reanalyze:"← পুনরায় বিশ্লেষণ",
    nearbyHospitals:"🏥 কাছের হাসপাতাল সমূহ",
    emergencyOnly:"🚨 শুধু জরুরি হাসপাতাল",
    altHospitals:"🔄 বিকল্প হাসপাতাল সমূহ",
    selectHospital:"হাসপাতাল নির্বাচন করুন →",
    distance:"দূরত্ব অনুযায়ী", ratingSort:"রেটিং অনুযায়ী", icuSort:"ICU অনুযায়ী",
    levelLow:"কম (Low)", levelMedium:"মাঝারি (Medium)", levelCritical:"জরুরি (Critical)",
    levelLowMsg:"এটি নিয়মিত পরামর্শের জন্য উপযুক্ত।",
    levelMedMsg:"যত শীঘ্র সম্ভব ডাক্তার দেখানো উচিত।",
    levelCritMsg:"⚠️ অবিলম্বে নিকটতম হাসপাতালে যান!",
    noDocsFound:"এই হাসপাতালে উপযুক্ত ডাক্তার পাওয়া যায়নি। অন্য হাসপাতাল চেষ্টা করুন।",
    tryOtherHosp:"অন্য হাসপাতাল দেখুন",
    details:"বিস্তারিত",
    appointmentsTitle:"অ্যাপয়েন্টমেন্ট",
    newBooking:"📅 নতুন বুকিং",
    myAppointments:"📋 আমার অ্যাপয়েন্টমেন্ট",
    myAptsCount:"আমার অ্যাপয়েন্টমেন্ট",
    confirmed:"নিশ্চিত", pending:"অপেক্ষমাণ", completed:"সম্পন্ন", cancelled:"বাতিল",
    cancelBtn:"বাতিল", detailsBtn:"বিস্তারিত",
    detailsEmailSent:"বিস্তারিত ইমেইলে পাঠানো হয়েছে!",
    aptCancelled:"অ্যাপয়েন্টমেন্ট বাতিল হয়েছে",
    bStep1:"লক্ষণ", bStep2:"বিশেষজ্ঞ", bStep3:"ডাক্তার",
    bStep4:"সময়সূচি", bStep5:"নিশ্চিত",
    howAreYou:"আপনি কেমন আছেন?",
    symptomSubDesc:"লক্ষণ বর্ণনা করুন — AI সঠিক বিশেষজ্ঞ সুপারিশ করবে",
    voiceInputInfo:"ভয়েস ইনপুট",
    uploadSymptomImg:"লক্ষণের ছবি আপলোড করুন (ঐচ্ছিক)",
    analyzeSymptoms:"🤖 লক্ষণ বিশ্লেষণ করুন →",
    analyzingSymptoms:"AI বিশ্লেষণ করছে…",
    quickSelectLabel:"দ্রুত নির্বাচন:",
    quickSymptomsApt:["বুকে ব্যথা","মাথাব্যথা","পিঠে ব্যথা","চামড়ার সমস্যা","জ্বর","চোখের সমস্যা","পেটে ব্যথা","শ্বাস কষ্ট"],
    aiRecommends:"AI সুপারিশ:",
    chooseDept:"বিভাগ বেছে নিন",
    back:"← ফিরুন",
    viewDoctors:"ডাক্তার দেখুন →",
    chooseDeptWarn:"বিভাগ বেছে নিন",
    chooseDoctor:"ডাক্তার বেছে নিন",
    proceedBtn:"সামনে যান →",
    chooseDoctorWarn:"ডাক্তার বেছে নিন",
    chooseDate:"তারিখ বেছে নিন",
    timeAndInfo:"সময় ও তথ্য",
    patientName:"রোগীর নাম লিখুন *",
    patientPhone:"মোবাইল নম্বর (ঐচ্ছিক)",
    aptSummary:"অ্যাপয়েন্টমেন্ট সারাংশ",
    sumDoctor:"👨‍⚕️ ডাক্তার",
    sumDept:"🔬 বিভাগ",
    sumDate:"📅 তারিখ",
    sumTime:"⏰ সময়",
    sumFee:"💰 ফি",
    notSelected:"নির্বাচিত নয়",
    confirmBooking:"বুকিং নিশ্চিত করুন ✓",
    chooseDateWarn:"তারিখ ও সময় বেছে নিন",
    patientNameWarn:"রোগীর নাম লিখুন",
    aptConfirmed:"অ্যাপয়েন্টমেন্ট নিশ্চিত!",
    doctorLabel:"ডাক্তার:",
    tokenLabel:"টোকেন:",
    bookAgain:"আবার বুক করুন",
    viewMyApts:"আমার অ্যাপয়েন্টমেন্ট দেখুন",
    calSun:"রবি", calMon:"সোম", calTue:"মঙ্গল", calWed:"বুধ",
    calThu:"বৃহস্পতি", calFri:"শুক্র", calSat:"শনি",
    selectedDate:"নির্বাচিত:",
    dashboardTitle:"ড্যাশবোর্ড",
    superAdminLabel:"সুপার অ্যাডমিন", adminLabel:"হাসপাতাল অ্যাডমিন",
    doctorLabel2:"ডাক্তার", patientLabel:"রোগী",
    welcomeMsg:"স্বাগতম! আজকের সারসংক্ষেপ।",
    exportBtn:"📤 রপ্তানি", refreshBtn:"🔄 রিফ্রেশ",
    exportedMsg:"রিপোর্ট রপ্তানি হয়েছে!", refreshedMsg:"ডেটা আপডেট হয়েছে!",
    sOverview:"সামগ্রিক", sAnalytics:"বিশ্লেষণ", sDoctors:"ডাক্তার",
    sHospitals:"হাসপাতাল", sEmergency:"জরুরি", sReports:"রিপোর্ট",
    sSettings:"সেটিংস",
    quickInfo:"দ্রুত তথ্য",
    onlineDoc:"অনলাইন ডাক্তার", waitingPt:"অপেক্ষমাণ", emergCases:"জরুরি কেস",
    dTotalVisits:"মোট ভিজিট", dUpcoming:"আসন্ন অ্যাপয়েন্টমেন্ট",
    dReports:"রিপোর্ট", dHealthScore:"স্বাস্থ্য স্কোর",
    dMyPatients:"আমার রোগী", dTodayApts:"আজকের অ্যাপয়েন্টমেন্ট",
    dMonthlyIncome:"মাসিক আয়", dRating:"রেটিং",
    dTotalPatients:"মোট রোগী", dTodayApts2:"আজকের অ্যাপয়েন্টমেন্ট",
    dMonthlyRevenue:"মাসিক রাজস্ব", dActiveDoctors:"সক্রিয় ডাক্তার",
    dTotalHospitals:"মোট হাসপাতাল", dActiveDoctors2:"সক্রিয় ডাক্তার",
    dNationalRevenue:"জাতীয় রাজস্ব", dEmergCases:"জরুরি কেস",
    patientTrend:"রোগীর ট্রেন্ড (২০২৬)", monthly:"মাসিক", weekly:"সাপ্তাহিক",
    chartUpdated:"চার্ট আপডেট হয়েছে",
    bySpecialization:"বিভাগ অনুযায়ী",
    tHospital:"হাসপাতাল", tDistrict:"জেলা", tBeds:"শয্যা", tICU:"ICU",
    tEmergency:"জরুরি", tRating:"রেটিং", tAmbulance:"অ্যাম্বুলেন্স", tStatus:"স্ট্যাটাস",
    active:"সক্রিয়", yes:"হ্যাঁ", no:"না",
    tPatient:"রোগী", tDoctor:"ডাক্তার", tDept:"বিভাগ",
    tDate:"তারিখ", tTime:"সময়", tFee:"ফি",
    recentApts:"সাম্প্রতিক অ্যাপয়েন্টমেন্ট",
    viewAll:"সব দেখুন →",
    topDoctors:"শীর্ষ রেটেড ডাক্তার",
    chatGreeting:"আস্সালামু আলাইকুম! আমি MediBot 🤖 — আপনার স্বাস্থ্যসেবা সহকারী। কীভাবে সাহায্য করতে পারি?",
    chatTyping:"MediBot টাইপ করছে…",
    chatQEmergency:"জরুরি সাহায্য",
    chatQFind:"ডাক্তার খুঁজুন",
    chatQBook:"বুকিং করুন",
    chatReplyGreeting:["স্বাগতম! আমি MediBot 🤖 আপনাকে কীভাবে সাহায্য করতে পারি?","হ্যালো! আমি আপনার ভার্চুয়াল স্বাস্থ্য সহকারী। আজ আপনার সমস্যা কী?"],
    chatReplySymptoms:["আপনার লক্ষণগুলো বুঝতে পারছি। সঠিক বিশেষজ্ঞ খুঁজে পেতে Appointments ট্যাবে যান।","এই লক্ষণগুলো গুরুত্বপূর্ণ। আমাদের AI আপনার জন্য সেরা ডাক্তার সাজেস্ট করবে।"],
    chatReplyApt:["অ্যাপয়েন্টমেন্ট বুক করতে Appointments ট্যাবে যান এবং আপনার পছন্দের ডাক্তার বেছে নিন।","আমাদের স্মার্ট ক্যালেন্ডার থেকে সুবিধাজনক সময় বেছে নিন।"],
    chatReplyEmerg:["⚠️ জরুরি অবস্থায় এখনই Emergency ট্যাবে যান অথবা ৯৯৯ নম্বরে কল করুন!","জরুরি পরিস্থিতিতে সবচেয়ে কাছের হাসপাতালে যান। Emergency বাটন ব্যবহার করুন।"],
    chatReplyDefault:["আপনার সমস্যা বর্ণনা করুন, আমি সঠিক বিশেষজ্ঞ খুঁজে দেব।","আমি ২৪/৭ আপনার সেবায় আছি। লক্ষণ লিখুন বা Emergency সাহায্যের জন্য জিজ্ঞেস করুন।"],
    chatPlaceholder:"বার্তা লিখুন…",
    nImageUploaded:"ছবি আপলোড সফল!",
    nVoiceSuccess:"ভয়েস ইনপুট সফল!",
    nVoiceError:"ভয়েস ইনপুট সমস্যা",
    nVoiceUnsupported:"এই ব্রাউজারে ভয়েস ইনপুট সাপোর্ট নেই",
    nAnalysisDone:"বিশ্লেষণ সম্পন্ন! হাসপাতাল সুপারিশ দেখুন।",
    nEmergencyDetected:"🚨 জরুরি অবস্থা সনাক্ত! নিকটতম হাসপাতালে যান!",
    nHospitalSelected:"নির্বাচিত হয়েছে",
    nHospitalChanged:"তে পরিবর্তন হয়েছে",
    nBookingStarted:"এর সাথে বুকিং শুরু",
    nAIRecommends:"AI সুপারিশ:",
    nSymptomSelected:"লক্ষণ নির্বাচিত:",
    nLangChanged:"ভাষা বাংলায় পরিবর্তিত হয়েছে 🇧🇩",
    nSocialMedia:"সোশ্যাল মিডিয়া!",
    nComingSoon:"শীঘ্রই আসছে!",
    nGoogleSoon:"Google লগইন শীঘ্রই আসছে",
    nFBSoon:"Facebook লগইন শীঘ্রই আসছে",
    nForgotPass:"পাসওয়ার্ড রিসেট ইমেইল পাঠানো হয়েছে!",
    nRoleChanged:"ভিউতে পরিবর্তন হয়েছে",
    nSectionChanged:"বিভাগ",
    nExported:"রিপোর্ট রপ্তানি হয়েছে!",
    nRefreshed:"ডেটা আপডেট হয়েছে!",
    nFooterLink:"শীঘ্রই আসছে!",
    nAllApts:"সব অ্যাপয়েন্টমেন্ট",
    months:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন"],
  },
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const injectStyles = () => {
  if (document.getElementById("hms-styles")) return;
  const s = document.createElement("style");
  s.id = "hms-styles";
  s.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
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
@keyframes emergPulse{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.5);}70%{box-shadow:0 0 0 12px rgba(239,68,68,0);}}
@keyframes slideDown{from{opacity:0;transform:translateY(-10px);}to{opacity:1;transform:translateY(0);}}
@keyframes modalIn{from{opacity:0;transform:scale(.94) translateY(18px);}to{opacity:1;transform:scale(1) translateY(0);}}
@keyframes langSlide{from{opacity:0;transform:translateY(-6px);}to{opacity:1;transform:translateY(0);}}
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
.nav-link:hover,.nav-link.active{color:#0d9488;background:rgba(13,148,136,.09);}
.tab-btn{padding:9px 18px;font-size:13px;font-weight:600;border-radius:10px;cursor:pointer;transition:all .2s;white-space:nowrap;color:var(--text2);background:transparent;border:none;}
.tab-btn.active{background:#0d9488;color:#fff;}
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
.auth-btn-login{padding:7px 16px;border-radius:9px;font-size:13px;font-weight:600;background:transparent;border:1.5px solid rgba(13,148,136,.5);color:#0d9488;cursor:pointer;transition:all .2s;font-family:'DM Sans',sans-serif;white-space:nowrap;}
.auth-btn-login:hover{background:rgba(13,148,136,.1);border-color:#0d9488;}
.auth-btn-register{padding:7px 16px;border-radius:9px;font-size:13px;font-weight:700;background:linear-gradient(135deg,#0d9488,#0f766e);border:none;color:#fff;cursor:pointer;transition:all .2s;font-family:'DM Sans',sans-serif;white-space:nowrap;box-shadow:0 3px 14px rgba(13,148,136,.35);}
.auth-btn-register:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(13,148,136,.45);}
.profile-avatar{width:35px;height:35px;border-radius:9px;cursor:pointer;border:2px solid rgba(13,148,136,.45);overflow:hidden;transition:border-color .2s,box-shadow .2s;position:relative;}
.profile-avatar:hover{border-color:#0d9488;box-shadow:0 0 0 3px rgba(13,148,136,.18);}
.profile-dropdown{position:absolute;top:calc(100% + 10px);right:0;background:var(--surface);border:1px solid var(--border);border-radius:16px;min-width:210px;z-index:999;box-shadow:0 16px 48px rgba(0,0,0,.32);animation:slideDown .22s ease both;overflow:hidden;}
.profile-dropdown-item{display:flex;align-items:center;gap:10px;padding:11px 16px;font-size:13px;font-weight:500;color:var(--text);cursor:pointer;transition:background .15s;font-family:'DM Sans',sans-serif;}
.profile-dropdown-item:hover{background:var(--surface2);}
.profile-dropdown-item.danger{color:#f43f5e;}
.profile-dropdown-item.danger:hover{background:rgba(244,63,94,.08);}
.lang-btn{display:flex;align-items:center;gap:5px;padding:6px 10px;border-radius:8px;background:var(--surface2);border:1.5px solid var(--border);color:var(--text);cursor:pointer;font-size:12px;font-weight:600;transition:all .2s;font-family:'DM Sans',sans-serif;white-space:nowrap;}
.lang-btn:hover{border-color:rgba(13,148,136,.4);background:rgba(13,148,136,.07);}
.lang-dropdown{position:absolute;top:calc(100% + 8px);right:0;background:var(--surface);border:1px solid var(--border);border-radius:12px;min-width:150px;z-index:999;box-shadow:0 12px 36px rgba(0,0,0,.28);animation:langSlide .2s ease both;overflow:hidden;}
.lang-option{display:flex;align-items:center;gap:10px;padding:10px 14px;font-size:13px;font-weight:500;color:var(--text);cursor:pointer;transition:background .15s;font-family:'DM Sans',sans-serif;}
.lang-option:hover{background:var(--surface2);}
.lang-option.active{color:#0d9488;background:rgba(13,148,136,.09);}
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.72);z-index:1000;display:flex;align-items:center;justify-content:center;padding:22px;backdrop-filter:blur(6px);animation:fadeIn .2s ease;}
.modal-card{background:var(--surface);border:1px solid var(--border);border-radius:24px;width:100%;max-width:440px;padding:36px 32px;box-shadow:0 32px 80px rgba(0,0,0,.45);animation:modalIn .3s cubic-bezier(.34,1.2,.64,1) both;max-height:90vh;overflow-y:auto;}
.auth-input-wrap{position:relative;margin-bottom:14px;}
.auth-input-wrap .auth-input{width:100%;padding:12px 16px 12px 42px;border-radius:12px;font-size:14px;background:var(--surface2);border:1.5px solid var(--border);color:var(--text);outline:none;transition:border-color .2s,box-shadow .2s;font-family:'DM Sans',sans-serif;}
.auth-input-wrap .auth-input:focus{border-color:#0d9488;box-shadow:0 0 0 3px rgba(13,148,136,.13);}
.auth-input-wrap .auth-input::placeholder{color:var(--text2);}
.auth-input-icon{position:absolute;left:13px;top:50%;transform:translateY(-50%);font-size:16px;pointer-events:none;}
.auth-input-right{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:14px;color:var(--text2);}
.social-auth-btn{flex:1;padding:10px;border-radius:10px;border:1.5px solid var(--border);background:var(--surface2);color:var(--text);cursor:pointer;font-size:12px;transition:all .18s;display:flex;align-items:center;justify-content:center;gap:7px;font-family:'DM Sans',sans-serif;font-weight:600;}
.social-auth-btn:hover{border-color:rgba(13,148,136,.4);background:rgba(13,148,136,.06);}
.auth-divider{display:flex;align-items:center;gap:10px;margin:18px 0;}
.auth-divider::before,.auth-divider::after{content:'';flex:1;height:1px;background:var(--border);}
.auth-submit{width:100%;padding:13px;border-radius:12px;background:linear-gradient(135deg,#0d9488,#0f766e);border:none;color:#fff;cursor:pointer;font-size:15px;font-weight:700;font-family:'DM Sans',sans-serif;box-shadow:0 7px 24px rgba(13,148,136,.38);transition:all .2s;margin-top:4px;}
.auth-submit:hover{transform:translateY(-1px);box-shadow:0 10px 32px rgba(13,148,136,.48);}
@media(max-width:768px){.hide-m{display:none!important;}.m-full{width:100%!important;}.auth-actions-desktop{display:none!important;}.modal-card{padding:26px 20px;}}
@media(min-width:769px){.auth-actions-mobile{display:none!important;}}
`;
  document.head.appendChild(s);
};

const rand = arr => arr[Math.floor(Math.random() * arr.length)];
const delay = ms => new Promise(r => setTimeout(r, ms));
const fmt = n => "৳" + n.toLocaleString("en-IN");

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

const AVATAR_STYLES = ["personas","adventurer","avataaars","lorelei","micah","notionists","open-peeps","pixel-art"];
const doctorAvatar = (seed, style) =>
  `https://api.dicebear.com/8.x/${style}/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&radius=50`;

const SPECIALIZATIONS = [
  { id:"cardiology",    name:"কার্ডিওলজি (Cardiology)",     en:"Cardiology",     icon:"🫀", color:"#f43f5e", desc:"Heart & cardiovascular", descBn:"হৃদয় ও কার্ডিওভাসকুলার" },
  { id:"neurology",     name:"নিউরোলজি (Neurology)",         en:"Neurology",      icon:"🧠", color:"#a78bfa", desc:"Brain & nervous system", descBn:"মস্তিষ্ক ও স্নায়ুতন্ত্র" },
  { id:"orthopedics",   name:"অর্থোপেডিক্স (Orthopedics)",  en:"Orthopedics",    icon:"🦴", color:"#f59e0b", desc:"Bones, joints & muscles", descBn:"হাড়, জয়েন্ট ও পেশী" },
  { id:"pediatrics",    name:"শিশু বিভাগ (Pediatrics)",      en:"Pediatrics",     icon:"👶", color:"#38bdf8", desc:"Children's health", descBn:"শিশু স্বাস্থ্য" },
  { id:"dermatology",   name:"চর্মরোগ (Dermatology)",         en:"Dermatology",    icon:"🧬", color:"#fb923c", desc:"Skin, hair & nails", descBn:"চামড়া, চুল ও নখ" },
  { id:"ophthalmology", name:"চক্ষু বিভাগ (Ophthalmology)",  en:"Ophthalmology",  icon:"👁️", color:"#34d399", desc:"Eyes & vision", descBn:"চোখ ও দৃষ্টি" },
  { id:"psychiatry",    name:"মানসিক রোগ (Psychiatry)",       en:"Psychiatry",     icon:"🧩", color:"#c084fc", desc:"Mental health", descBn:"মানসিক স্বাস্থ্য" },
  { id:"oncology",      name:"অনকোলজি (Oncology)",           en:"Oncology",       icon:"🔬", color:"#f87171", desc:"Cancer treatment", descBn:"ক্যান্সার চিকিৎসা" },
  { id:"gastro",        name:"গ্যাস্ট্রো (Gastroenterology)", en:"Gastroenterology",icon:"🍃",color:"#4ade80",desc:"Digestive system", descBn:"পরিপাকতন্ত্র" },
  { id:"endocrinology", name:"এন্ডোক্রাইন (Endocrinology)",  en:"Endocrinology",  icon:"⚗️", color:"#fbbf24", desc:"Hormones & metabolism", descBn:"হরমোন ও বিপাক" },
  { id:"pulmonology",   name:"বক্ষ বিভাগ (Pulmonology)",     en:"Pulmonology",    icon:"🫁", color:"#60a5fa", desc:"Lungs & respiratory", descBn:"ফুসফুস ও শ্বাসযন্ত্র" },
  { id:"urology",       name:"ইউরোলজি (Urology)",            en:"Urology",        icon:"💧", color:"#2dd4bf", desc:"Urinary system", descBn:"মূত্রতন্ত্র" },
  { id:"gynecology",    name:"স্ত্রীরোগ (Gynecology)",        en:"Gynecology",     icon:"🌸", color:"#f472b6", desc:"Women's health", descBn:"মহিলা স্বাস্থ্য" },
  { id:"ent",           name:"নাক-কান-গলা (ENT)",             en:"ENT",            icon:"👂", color:"#a3e635", desc:"Ear, nose & throat", descBn:"কান, নাক ও গলা" },
  { id:"general",       name:"সাধারণ চিকিৎসা (General)",     en:"General Medicine",icon:"🏥",color:"#94a3b8",desc:"Primary care", descBn:"প্রাথমিক চিকিৎসা" },
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

const BD_DOCTOR_NAMES_EN = [
  ["Dr. Rahim Uddin Ahmed","Dr. Karim Hossain","Dr. Najma Begum","Dr. Shafiqul Islam"],
  ["Dr. Farhana Akter","Dr. Mahbubur Rahman","Dr. Salma Khanam","Dr. Abdul Kader"],
  ["Dr. Tahmina Parvin","Dr. Jahangir Alam","Dr. Mousumi Haq","Dr. Imran Hossain"],
  ["Dr. Nasrin Sultana","Dr. Kamal Uddin","Dr. Ruma Begum","Dr. Ashraful Haq"],
  ["Dr. Sadia Islam","Dr. Mosharraf Hossain","Dr. Laila Anjum","Dr. Rafiqul Islam"],
  ["Dr. Hasina Begum","Dr. Anisur Rahman","Dr. Zebunnessa","Dr. Mohammad Ali"],
  ["Dr. Dilruba Khanam","Dr. Sirajul Islam","Dr. Mahfuza Begum","Dr. Taufiqur Rahman"],
];
const BD_DOCTOR_NAMES_BN = [
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
const BD_AVAIL_EN = ["Mon-Fri","Mon-Sat","Tue-Sat","Wed-Sun","Mon,Wed,Fri"];
const BD_AVAIL_BN = ["সোম-শুক্র","সোম-শনি","মঙ্গল-শনি","বুধ-রবি","সোম-বুধ-শুক্র"];
const TIMES = ["9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM"];
const NEXT_SLOTS_EN = ["Today 2:00 PM","Today 4:30 PM","Tomorrow 10:00 AM","Tomorrow 2:00 PM","Thursday 11:00 AM"];
const NEXT_SLOTS_BN = ["আজ ২:০০ PM","আজ ৪:৩০ PM","আগামীকাল ১০:০০ AM","আগামীকাল ২:০০ PM","বৃহস্পতিবার ১১:০০ AM"];

let _did = 1;
const DOCTORS = SPECIALIZATIONS.flatMap((spec, si) => {
  const count = si < 8 ? 4 : 3;
  const namesEn = BD_DOCTOR_NAMES_EN[si % BD_DOCTOR_NAMES_EN.length];
  const namesBn = BD_DOCTOR_NAMES_BN[si % BD_DOCTOR_NAMES_BN.length];
  return Array.from({ length: count }, (_, i) => {
    const id = _did++;
    const style = AVATAR_STYLES[(id - 1) % AVATAR_STYLES.length];
    const slotIdx = Math.floor(Math.random() * NEXT_SLOTS_EN.length);
    const availIdx = Math.floor(Math.random() * BD_AVAIL_EN.length);
    return {
      id,
      nameEn: namesEn[i] || `Dr. Rahman-${id}`,
      nameBn: namesBn[i] || `ডা. রহমান-${id}`,
      specialization: spec.id, specName: spec.en,
      degree: BD_DEGREES[Math.floor(Math.random() * BD_DEGREES.length)],
      experience: BD_EXP[Math.floor(Math.random() * BD_EXP.length)],
      hospital: BD_HOSPITALS_DATA[Math.floor(Math.random() * BD_HOSPITALS_DATA.length)].name,
      hospitalId: (Math.floor(Math.random() * BD_HOSPITALS_DATA.length)) + 1,
      fee: BD_FEES[Math.floor(Math.random() * BD_FEES.length)],
      availabilityEn: BD_AVAIL_EN[availIdx],
      availabilityBn: BD_AVAIL_BN[availIdx],
      rating: +(3.7 + Math.random() * 1.3).toFixed(1),
      reviews: Math.floor(30 + Math.random() * 400),
      avatar: doctorAvatar(id * 7 + si * 3, style),
      bioEn: `${spec.en} specialist with ${BD_EXP[Math.floor(Math.random()*BD_EXP.length)]}+ years in Bangladesh's leading hospitals. Expert in advanced diagnostics and patient-centered care.`,
      bioBn: `${spec.en} বিশেষজ্ঞ, বাংলাদেশের শীর্ষ হাসপাতালে ${BD_EXP[Math.floor(Math.random()*BD_EXP.length)]}+ বছরের অভিজ্ঞতা। উন্নত রোগ নির্ণয় ও রোগীকেন্দ্রিক সেবায় বিশেষজ্ঞ।`,
      languages: ["বাংলা", "English", Math.random() > .6 ? "হিন্দি" : null].filter(Boolean),
      nextSlotEn: NEXT_SLOTS_EN[slotIdx],
      nextSlotBn: NEXT_SLOTS_BN[slotIdx],
      district: rand(BD_DISTRICTS), online: Math.random() > .3,
    };
  });
});

const SYMPTOM_MAP = {
  "chest pain":"cardiology","heart":"cardiology","palpitation":"cardiology","হার্ট":"cardiology","বুকে":"cardiology",
  "headache":"neurology","dizziness":"neurology","seizure":"neurology","মাথাব্যথা":"neurology","মাথা":"neurology",
  "joint pain":"orthopedics","back pain":"orthopedics","fracture":"orthopedics","হাড়":"orthopedics","হাঁটু":"orthopedics","পিঠে":"orthopedics",
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
  { id:1, patientEn:"Arif Hossain",    patientBn:"আরিফ হোসেন",   doctorEn:"Dr. Najma Begum",      doctorBn:"ডা. নাজমা বেগম",    spec:"Cardiology",      date:"2026-05-08", time:"10:00 AM", status:"confirmed", fee:1500, token:"DHK-2345" },
  { id:2, patientEn:"Sumaiya Khanam",  patientBn:"সুমাইয়া খানম", doctorEn:"Dr. Karim Hossain",    doctorBn:"ডা. করিম হোসেন",   spec:"Neurology",       date:"2026-05-09", time:"2:00 PM",  status:"pending",   fee:1200, token:"DHK-2346" },
  { id:3, patientEn:"Rahela Begum",    patientBn:"রাহেলা বেগম",  doctorEn:"Dr. Farhana Akter",    doctorBn:"ডা. ফারহানা আক্তার",spec:"Cardiology",     date:"2026-05-07", time:"11:30 AM", status:"completed",  fee:2000, token:"DHK-2347" },
  { id:4, patientEn:"Tanvir Ahmed",    patientBn:"তানভীর আহমেদ", doctorEn:"Dr. Mahbubur Rahman",  doctorBn:"ডা. মাহবুবুর রহমান",spec:"Orthopedics",   date:"2026-05-10", time:"9:00 AM",  status:"confirmed",  fee:800,  token:"DHK-2348" },
  { id:5, patientEn:"Mim Akter",       patientBn:"মিম আক্তার",   doctorEn:"Dr. Salma Khanam",     doctorBn:"ডা. সালমা খানম",   spec:"General Medicine",date:"2026-05-06", time:"3:30 PM",  status:"cancelled",  fee:600,  token:"DHK-2349" },
];

// ─── LANGUAGE SELECTOR ────────────────────────────────────────────────────────
const LangSelector = ({ language, setLanguage }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const LANGS = [{ code:"bn", flag:"🇧🇩", label:"বাংলা" }, { code:"en", flag:"🇺🇸", label:"English" }];
  const current = LANGS.find(l => l.code === language) || LANGS[0];
  useEffect(() => {
    const handle = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);
  return (
    <div ref={ref} style={{ position:"relative" }}>
      <button className="lang-btn" onClick={() => setOpen(o => !o)}>
        <span style={{ fontSize:15 }}>{current.flag}</span>
        <span className="hide-m">{current.label}</span>
        <span style={{ fontSize:9, opacity:.7 }}>▾</span>
      </button>
      {open && (
        <div className="lang-dropdown">
          {LANGS.map(l => (
            <div key={l.code} className={`lang-option ${language === l.code ? "active" : ""}`} onClick={() => { setLanguage(l.code); setOpen(false); notify(T[l.code].langChanged, "success"); }}>
              <span style={{ fontSize:17 }}>{l.flag}</span>
              <span>{l.label}</span>
              {language === l.code && <span style={{ marginLeft:"auto", color:G.teal, fontSize:13 }}>✓</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── LOGIN MODAL ──────────────────────────────────────────────────────────────
const LoginModal = ({ onClose, onLogin, onSwitchToRegister, t }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (!email.trim() || !pass.trim()) { notify(t.fillFields, "warning"); return; }
    setLoading(true);
    await delay(1200);
    setLoading(false);
    onLogin({ name: email.split("@")[0], email, avatar: `https://api.dicebear.com/8.x/personas/svg?seed=${email}&backgroundColor=b6e3f4&radius=50` });
    notify(t.loginSuccess, "success");
    onClose();
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <div style={{ width:52, height:52, borderRadius:14, background:`linear-gradient(135deg,${G.teal},${G.sky})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, margin:"0 auto 14px" }}>🏥</div>
          <h2 className="syne" style={{ fontSize:24, fontWeight:800, color:"var(--text)", marginBottom:5 }}>{t.loginTitle}</h2>
          <p style={{ fontSize:13, color:"var(--text2)" }}>{t.loginSub}</p>
        </div>
        <div style={{ display:"flex", gap:10, marginBottom:6 }}>
          {[["🔵","Google",t.nGoogleSoon],["🔷","Facebook",t.nFBSoon]].map(([ic,label,msg]) => (
            <button key={label} className="social-auth-btn" onClick={() => notify(msg, "info")}>
              <span style={{ fontSize:16 }}>{ic}</span>{label}
            </button>
          ))}
        </div>
        <div className="auth-divider"><span style={{ fontSize:12, color:"var(--text2)" }}>{t.orContinue}</span></div>
        <div className="auth-input-wrap">
          <span className="auth-input-icon">📧</span>
          <input className="auth-input" type="email" placeholder={t.emailPlaceholder} value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSubmit()} />
        </div>
        <div className="auth-input-wrap">
          <span className="auth-input-icon">🔒</span>
          <input className="auth-input" type={showPass ? "text" : "password"} placeholder={t.passPlaceholder} value={pass} onChange={e => setPass(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSubmit()} />
          <button className="auth-input-right" onClick={() => setShowPass(s => !s)}>{showPass ? "🙈" : "👁️"}</button>
        </div>
        <div style={{ textAlign:"right", marginBottom:18 }}>
          <span style={{ fontSize:12, color:G.teal, cursor:"pointer", fontWeight:600 }} onClick={() => notify(t.nForgotPass, "info")}>{t.forgotPass}</span>
        </div>
        <button className="auth-submit" onClick={handleSubmit} disabled={loading}>
          {loading ? <span style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}><div className="a-spin" style={{ width:18, height:18, border:"2px solid rgba(255,255,255,.3)", borderTopColor:"#fff", borderRadius:"50%" }} />{t.signingIn}</span> : t.signIn}
        </button>
        <p style={{ textAlign:"center", marginTop:18, fontSize:13, color:"var(--text2)" }}>
          {t.noAccount}{" "}<span style={{ color:G.teal, fontWeight:700, cursor:"pointer" }} onClick={onSwitchToRegister}>{t.register}</span>
        </p>
        <button onClick={onClose} style={{ display:"block", width:"100%", marginTop:10, padding:"10px", borderRadius:10, background:"var(--surface2)", border:"none", color:"var(--text2)", cursor:"pointer", fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>{t.guest}</button>
      </div>
    </div>
  );
};

// ─── REGISTER MODAL ───────────────────────────────────────────────────────────
const RegisterModal = ({ onClose, onLogin, onSwitchToLogin, t }) => {
  const [form, setForm] = useState({ name:"", email:"", phone:"", pass:"", confirm:"" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const up = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.pass.trim()) { notify(t.fillRequired, "warning"); return; }
    if (form.pass !== form.confirm) { notify(t.passNoMatch, "error"); return; }
    setLoading(true);
    await delay(1400);
    setLoading(false);
    onLogin({ name: form.name, email: form.email, avatar: `https://api.dicebear.com/8.x/personas/svg?seed=${form.email}&backgroundColor=b6e3f4&radius=50` });
    notify(t.registerSuccess, "success");
    onClose();
  };
  const fields = [
    { key:"name",    icon:"👤", type:"text",     ph: t.namePlaceholder },
    { key:"email",   icon:"📧", type:"email",    ph: t.emailPlaceholder },
    { key:"phone",   icon:"📱", type:"tel",      ph: t.phonePlaceholder },
    { key:"pass",    icon:"🔒", type:"password", ph: t.passPlaceholder, toggle: true },
    { key:"confirm", icon:"🔒", type:"password", ph: t.confirmPassPlaceholder },
  ];
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div style={{ textAlign:"center", marginBottom:24 }}>
          <div style={{ width:52, height:52, borderRadius:14, background:`linear-gradient(135deg,${G.teal},${G.purple})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, margin:"0 auto 14px" }}>✨</div>
          <h2 className="syne" style={{ fontSize:24, fontWeight:800, color:"var(--text)", marginBottom:5 }}>{t.registerTitle}</h2>
          <p style={{ fontSize:13, color:"var(--text2)" }}>{t.registerSub}</p>
        </div>
        {fields.map(f => (
          <div key={f.key} className="auth-input-wrap">
            <span className="auth-input-icon">{f.icon}</span>
            <input className="auth-input" type={f.toggle && !showPass ? "password" : f.type === "password" && !showPass ? "password" : f.type === "password" ? "text" : f.type} placeholder={f.ph} value={form[f.key]} onChange={e => up(f.key, e.target.value)} onKeyDown={e => e.key === "Enter" && handleSubmit()} />
            {f.toggle && <button className="auth-input-right" onClick={() => setShowPass(s => !s)}>{showPass ? "🙈" : "👁️"}</button>}
          </div>
        ))}
        <div style={{ fontSize:11, color:"var(--text2)", marginBottom:16, lineHeight:1.6 }}>{t.termsNote}</div>
        <button className="auth-submit" onClick={handleSubmit} disabled={loading}>
          {loading ? <span style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}><div className="a-spin" style={{ width:18, height:18, border:"2px solid rgba(255,255,255,.3)", borderTopColor:"#fff", borderRadius:"50%" }} />{t.creatingAccount}</span> : t.signUp}
        </button>
        <p style={{ textAlign:"center", marginTop:18, fontSize:13, color:"var(--text2)" }}>
          {t.hasAccount}{" "}<span style={{ color:G.teal, fontWeight:700, cursor:"pointer" }} onClick={onSwitchToLogin}>{t.login}</span>
        </p>
      </div>
    </div>
  );
};

// ─── PROFILE SECTION ──────────────────────────────────────────────────────────
const ProfileSection = ({ isLoggedIn, currentUser, onLogout, onShowLogin, onShowRegister, setPage, t }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handle = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);
  if (!isLoggedIn) {
    return (
      <div style={{ display:"flex", gap:7, alignItems:"center" }}>
        <button className="auth-btn-login auth-actions-desktop" onClick={onShowLogin}>{t.login}</button>
        <button className="auth-btn-register auth-actions-desktop btn-rip" onClick={onShowRegister}>{t.register}</button>
      </div>
    );
  }
  return (
    <div ref={ref} style={{ position:"relative" }}>
      <div className="profile-avatar" onClick={() => setOpen(o => !o)} style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
        {currentUser?.avatar ? <img src={currentUser.avatar} alt="avatar" style={{ width:"100%", height:"100%", objectFit:"cover" }} /> : <span style={{ fontSize:18 }}>👤</span>}
        <span style={{ position:"absolute", bottom:1, right:1, width:9, height:9, borderRadius:"50%", background:G.emerald, border:"2px solid var(--surface)" }} />
      </div>
      {open && (
        <div className="profile-dropdown">
          <div style={{ padding:"16px 16px 12px", borderBottom:"1px solid var(--border)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:11 }}>
              <img src={currentUser?.avatar} alt="" style={{ width:44, height:44, borderRadius:"50%", border:`2px solid ${G.teal}44`, objectFit:"cover" }} />
              <div>
                <div style={{ fontWeight:700, fontSize:14, color:"var(--text)" }}>{currentUser?.name}</div>
                <div style={{ fontSize:11, color:"var(--text2)", marginTop:1 }}>{currentUser?.email}</div>
                <div style={{ display:"inline-flex", alignItems:"center", gap:4, marginTop:3, fontSize:10, color:G.emerald, fontWeight:600 }}>
                  <span style={{ width:5, height:5, borderRadius:"50%", background:G.emerald }} />{t.online}
                </div>
              </div>
            </div>
          </div>
          {[
            { icon:"👤", label: t.myProfile, action: () => { notify(t.myProfile,"info"); setOpen(false); } },
            { icon:"📊", label: t.dashboard, action: () => { setPage("Dashboard"); setOpen(false); } },
            { icon:"⚙️", label: t.settings,  action: () => { notify(t.nComingSoon,"info"); setOpen(false); } },
          ].map(item => (
            <div key={item.label} className="profile-dropdown-item" onClick={item.action}>
              <span style={{ fontSize:16 }}>{item.icon}</span><span>{item.label}</span>
            </div>
          ))}
          <div style={{ height:1, background:"var(--border)", margin:"4px 0" }} />
          <div className="profile-dropdown-item danger" onClick={() => { onLogout(); setOpen(false); }}>
            <span style={{ fontSize:16 }}>🚪</span><span>{t.logout}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── HEADER ───────────────────────────────────────────────────────────────────
const Header = ({ page, setPage, dark, setDark, role, setRole, isLoggedIn, currentUser, onLogin, onLogout, language, setLanguage, onShowLogin, onShowRegister, t }) => {
  const [mob, setMob] = useState(false);
  const pages = [
    ["Home", t.home], ["Doctors", t.doctors], ["Appointments", t.appointments],
    ["Emergency", t.emergency], ["Dashboard", t.dashboard],
  ];
  return (
    <header style={{ position:"sticky", top:0, zIndex:200, background:dark?"rgba(8,14,26,.88)":"rgba(238,245,251,.88)", backdropFilter:"blur(22px)", borderBottom:"1px solid var(--border)", padding:"0 22px", height:66, display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer", flexShrink:0 }} onClick={() => setPage("Home")}>
        <div style={{ width:38, height:38, borderRadius:10, background:`linear-gradient(135deg,${G.teal},${G.sky})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>🏥</div>
        <span className="syne" style={{ fontSize:19, fontWeight:800, color:"var(--text)" }}>Medi<span style={{ color:G.teal }}>Care BD</span></span>
      </div>
      <nav className="hide-m" style={{ display:"flex", gap:3 }}>
        {pages.map(([key, label]) => (
          <span key={key} className={`nav-link ${page===key?"active":""}`} onClick={() => setPage(key)} style={{ color: key==="Emergency" ? (page===key?undefined:G.rose) : undefined }}>
            {key==="Emergency" ? "🚨 "+label : label}
          </span>
        ))}
      </nav>
      <div style={{ display:"flex", alignItems:"center", gap:7, flexShrink:0 }}>
        <LangSelector language={language} setLanguage={setLanguage} />
        <select className="hms-select hide-m" value={role} onChange={e => { setRole(e.target.value); notify(`${e.target.value} ${t.nRoleChanged}`, "info"); }} style={{ fontSize:12, padding:"5px 9px" }}>
          <option value="patient">{language==="en"?"Patient":"Patient"}</option>
          <option value="doctor">{language==="en"?"Doctor":"Doctor"}</option>
          <option value="admin">{language==="en"?"Hospital Admin":"Hospital Admin"}</option>
          <option value="superadmin">{language==="en"?"Super Admin":"Super Admin"}</option>
        </select>
        <button onClick={() => { setDark(d=>!d); notify(dark?t.lightMode:t.darkMode,"info"); }} style={{ background:"var(--surface2)", border:"none", cursor:"pointer", borderRadius:8, width:35, height:35, fontSize:17, color:"var(--text)", flexShrink:0 }}>{dark?"☀️":"🌙"}</button>
        <button onClick={() => notify(t.noNotifications,"info")} style={{ background:"var(--surface2)", border:"none", cursor:"pointer", borderRadius:8, width:35, height:35, fontSize:15, color:"var(--text)", position:"relative", flexShrink:0 }}>
          🔔<span style={{ position:"absolute", top:4, right:4, width:7, height:7, borderRadius:"50%", background:G.rose }} />
        </button>
        <ProfileSection isLoggedIn={isLoggedIn} currentUser={currentUser} onLogout={onLogout} onShowLogin={onShowLogin} onShowRegister={onShowRegister} setPage={setPage} t={t} />
        <button style={{ background:"none", border:"none", cursor:"pointer", fontSize:22, color:"var(--text)", flexShrink:0 }} onClick={() => setMob(m=>!m)}>☰</button>
      </div>
      {mob && (
        <div style={{ position:"absolute", top:66, left:0, right:0, background:"var(--surface)", borderBottom:"1px solid var(--border)", padding:14, display:"flex", flexDirection:"column", gap:4, zIndex:300 }}>
          {pages.map(([key, label]) => <span key={key} className={`nav-link ${page===key?"active":""}`} onClick={() => { setPage(key); setMob(false); }}>{label}</span>)}
          <div style={{ height:1, background:"var(--border)", margin:"8px 0" }} />
          {!isLoggedIn ? (
            <div style={{ display:"flex", gap:8, padding:"4px 0" }}>
              <button className="auth-btn-login" style={{ flex:1 }} onClick={() => { onShowLogin(); setMob(false); }}>{t.login}</button>
              <button className="auth-btn-register btn-rip" style={{ flex:1 }} onClick={() => { onShowRegister(); setMob(false); }}>{t.register}</button>
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 6px" }}>
                <img src={currentUser?.avatar} alt="" style={{ width:34, height:34, borderRadius:"50%", objectFit:"cover" }} />
                <div><div style={{ fontWeight:700, fontSize:13, color:"var(--text)" }}>{currentUser?.name}</div><div style={{ fontSize:11, color:"var(--text2)" }}>{currentUser?.email}</div></div>
              </div>
              <span className="nav-link" onClick={() => { setPage("Dashboard"); setMob(false); }}>📊 {t.dashboard}</span>
              <span className="nav-link" style={{ color:G.rose }} onClick={() => { onLogout(); setMob(false); }}>🚪 {t.logout}</span>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage = ({ setPage, setSelectedSpec, t, language }) => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const testimonials = language === "en" ? [
    { name:"Arifa Begum", text:"Incredible service! Found the best cardiologist in just a few minutes.", rating:5, av:"👩" },
    { name:"Rakibul Hasan", text:"The AI symptom analysis works amazingly. Reached the right specialist.", rating:5, av:"👨" },
    { name:"Dr. Sumaiya", text:"The most modern healthcare platform in Bangladesh. Very easy to use.", rating:5, av:"👩‍⚕️" },
  ] : [
    { name:"আরিফা বেগম", text:"অবিশ্বাস্য সেবা! মাত্র কয়েক মিনিটে সেরা কার্ডিওলজিস্ট খুঁজে পেলাম।", rating:5, av:"👩" },
    { name:"রাকিবুল হাসান", text:"AI লক্ষণ বিশ্লেষণ অসাধারণ কাজ করে। সঠিক বিশেষজ্ঞের কাছে পৌঁছাতে পেরেছি।", rating:5, av:"👨" },
    { name:"ডা. সুমাইয়া", text:"বাংলাদেশের সবচেয়ে আধুনিক হেলথকেয়ার প্ল্যাটফর্ম। অত্যন্ত সহজে ব্যবহারযোগ্য।", rating:5, av:"👩‍⚕️" },
  ];
  useEffect(() => { const iv = setInterval(() => setTestimonialIdx(c => (c+1) % testimonials.length), 4000); return () => clearInterval(iv); }, [language]);
  const stats = [
    { v:t.stat1v, l:t.stat1l, icon:"👨‍⚕️" },
    { v:t.stat2v, l:t.stat2l, icon:"🔬" },
    { v:t.stat3v, l:t.stat3l, icon:"🏥" },
    { v:t.stat4v, l:t.stat4l, icon:"🚨" },
  ];
  const footerCols = language === "en" ? [
    { title:"MediCare BD", items:[t.footerAbout,t.footerTeam,t.footerCareers,t.footerPress] },
    { title:"Services", items:[t.newBooking.replace("📅 ",""),t.footerFindDoctor,t.footerEmergency,t.footerTelemedicine] },
    { title:"Specialties", items:["Cardiology","Neurology","Pediatrics","Orthopedics"] },
    { title:"Support", items:[t.footerHelp,t.footerPrivacy,t.footerTerms,t.footerContact] },
  ] : [
    { title:"MediCare BD", items:[t.footerAbout,t.footerTeam,t.footerCareers,t.footerPress] },
    { title:"সেবা", items:["অ্যাপয়েন্টমেন্ট",t.footerFindDoctor,t.footerEmergency,t.footerTelemedicine] },
    { title:"বিশেষত্ব", items:["কার্ডিওলজি","নিউরোলজি","শিশু বিভাগ","অর্থোপেডিক্স"] },
    { title:"সহায়তা", items:[t.footerHelp,t.footerPrivacy,t.footerTerms,t.footerContact] },
  ];
  return (
    <div>
      <section style={{ position:"relative", minHeight:"calc(100vh - 66px)", display:"flex", alignItems:"center", overflow:"hidden", padding:"60px 24px" }}>
        <div className="hero-mesh" />
        {[{top:"15%",right:"8%",size:260,c:`${G.teal}14`},{top:"58%",right:"4%",size:170,c:`${G.purple}10`},{top:"28%",left:"4%",size:110,c:`${G.sky}0d`}].map((o,i) => (
          <div key={i} className="a-float" style={{ position:"absolute",...o, width:o.size, height:o.size, borderRadius:"50%", background:o.c, filter:"blur(38px)", animationDelay:`${i}s`, pointerEvents:"none" }} />
        ))}
        <div style={{ maxWidth:1200, margin:"0 auto", width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:56, alignItems:"center" }}>
          <div className="fade-up">
            <div className="badge" style={{ background:`${G.teal}20`, color:G.teal, marginBottom:18, fontSize:11 }}>🇧🇩 {t.tagline}</div>
            <h1 className="syne" style={{ fontSize:"clamp(32px,5vw,60px)", fontWeight:800, lineHeight:1.12, marginBottom:22, color:"var(--text)" }}>
              {t.heroTitle1}<br /><span className="grad-text">{t.heroTitle2}</span>
            </h1>
            <p style={{ fontSize:16, color:"var(--text2)", lineHeight:1.75, marginBottom:36, maxWidth:460 }}>{t.heroDesc}</p>
            <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              <button className="btn-rip" onClick={() => setPage("Appointments")} style={{ padding:"13px 30px", borderRadius:13, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, color:"#fff", border:"none", cursor:"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:`0 8px 28px ${G.teal}40` }}>{t.bookAppointment}</button>
              <button onClick={() => setPage("Emergency")} style={{ padding:"13px 30px", borderRadius:13, background:`rgba(239,68,68,.12)`, color:G.rose, border:`1.5px solid ${G.rose}44`, cursor:"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>{t.emergencyService}</button>
            </div>
            <div style={{ display:"flex", gap:28, marginTop:44, flexWrap:"wrap" }}>
              {[[t.totalVisits,t.totalVisitsLabel],[t.totalExperts,t.totalExpertsLabel],[t.avgRating,t.avgRatingLabel]].map(([v,l]) => (
                <div key={l}><div className="syne" style={{ fontSize:22, fontWeight:800, color:G.teal }}>{v}</div><div style={{ fontSize:12, color:"var(--text2)" }}>{l}</div></div>
              ))}
            </div>
          </div>
          <div className="hide-m" style={{ position:"relative", height:480 }}>
            <div className="glass a-float" style={{ position:"absolute", top:"12%", left:"8%", right:"8%", padding:22, borderRadius:20 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
                <img src={doctorAvatar(42,"personas")} style={{ width:52, height:52, borderRadius:"50%", border:`2px solid ${G.teal}44` }} alt="" />
                <div>
                  <div style={{ fontWeight:700, fontSize:15, color:"var(--text)" }}>{language==="en"?"Dr. Najma Begum":"ডা. নাজমা বেগম"}</div>
                  <div style={{ fontSize:12, color:G.teal }}>{language==="en"?"Senior Cardiologist":"সিনিয়র কার্ডিওলজিস্ট"}</div>
                </div>
                <Badge label={language==="en"?"Online":"অনলাইন"} color={G.emerald} />
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", padding:"11px 0", borderTop:"1px solid var(--border)" }}>
                {[["⭐ 4.9",language==="en"?"Rating":"রেটিং"],["৳ 1,500",language==="en"?"Fee":"ফি"],[language==="en"?"📅 Today":"📅 আজ",language==="en"?"Next slot":"পরের স্লট"]].map(([v,l]) => (
                  <div key={l} style={{ textAlign:"center" }}><div style={{ fontSize:13, fontWeight:600, color:"var(--text)" }}>{v}</div><div style={{ fontSize:10, color:"var(--text2)" }}>{l}</div></div>
                ))}
              </div>
            </div>
            <div className="glass" style={{ position:"absolute", top:"4%", right:"4%", padding:"9px 14px", borderRadius:11, fontSize:12, fontWeight:600, color:"var(--text)" }}>🤖 {language==="en"?"AI Symptom Analyzer":"AI লক্ষণ বিশ্লেষক"}</div>
            <div className="glass" style={{ position:"absolute", bottom:"14%", left:"4%", padding:"9px 14px", borderRadius:11, fontSize:12, fontWeight:600, color:"var(--text)" }}>📅 {language==="en"?"Smart Scheduling":"স্মার্ট শিডিউলিং"}</div>
            <div className="glass emerg-pulse" style={{ position:"absolute", bottom:"4%", right:"8%", padding:"9px 14px", borderRadius:11, fontSize:12, fontWeight:600, color:G.rose, border:`1.5px solid ${G.rose}44` }}>🚨 {language==="en"?"Emergency Mode Active":"জরুরি মোড সক্রিয়"}</div>
          </div>
        </div>
      </section>

      <section style={{ padding:"50px 24px", background:"var(--surface)" }}>
        <div style={{ maxWidth:960, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:20 }}>
          {stats.map((s,i) => (
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
            <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)" }}>{t.ourSpecializations} <span className="grad-text">{t.specializations}</span></h2>
            <p style={{ color:"var(--text2)", fontSize:15, marginTop:10 }}>{t.specSub}</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(165px,1fr))", gap:14 }}>
            {SPECIALIZATIONS.map((spec,i) => (
              <div key={spec.id} className="glass card-h fade-up" style={{ padding:"18px 14px", textAlign:"center", cursor:"pointer", animationDelay:`${i*.04}s`, borderTop:`3px solid ${spec.color}` }} onClick={() => { setSelectedSpec(spec.id); setPage("Doctors"); }}>
                <div style={{ fontSize:28, marginBottom:8 }}>{spec.icon}</div>
                <div style={{ fontWeight:700, fontSize:13, color:"var(--text)", marginBottom:3 }}>{spec.en}</div>
                <div style={{ fontSize:10, color:"var(--text2)", marginBottom:6 }}>{language==="en"?spec.desc:spec.descBn}</div>
                <div style={{ fontSize:11, color:spec.color, fontWeight:600 }}>{DOCTORS.filter(d=>d.specialization===spec.id).length} {t.doctorsLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"70px 24px", background:"var(--surface)" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:50 }}>
            <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)" }}>{t.howItWorks} <span className="grad-text">{t.works}</span></h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:28 }}>
            {[[t.step1t,t.step1d,"🩺"],[t.step2t,t.step2d,"🤖"],[t.step3t,t.step3d,"🏥"],[t.step4t,t.step4d,"📅"]].map(([title,desc,icon],i) => (
              <div key={i} className="fade-up" style={{ textAlign:"center", position:"relative", animationDelay:`${i*.15}s` }}>
                <div style={{ width:68, height:68, borderRadius:"50%", background:`linear-gradient(135deg,${G.teal}22,${G.sky}22)`, border:`2px solid ${G.teal}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, margin:"0 auto 14px" }}>{icon}</div>
                <div className="syne" style={{ fontSize:11, fontWeight:700, color:G.teal, marginBottom:7, letterSpacing:2 }}>0{i+1}</div>
                <div style={{ fontWeight:700, fontSize:15, color:"var(--text)", marginBottom:6 }}>{title}</div>
                <div style={{ fontSize:12, color:"var(--text2)", lineHeight:1.6 }}>{desc}</div>
                {i<3 && <div className="hide-m" style={{ position:"absolute", right:-14, top:"28%", fontSize:18, color:"var(--text2)" }}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"70px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:44 }}>
            <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)" }}>{t.connectedHospitals} <span className="grad-text">{t.hospitals}</span></h2>
            <p style={{ color:"var(--text2)", fontSize:14, marginTop:8 }}>{t.hospSub}</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:18 }}>
            {BD_HOSPITALS_DATA.slice(0,6).map(h => (
              <div key={h.id} className="glass card-h" style={{ borderRadius:18, overflow:"hidden" }}>
                <div style={{ height:140, backgroundImage:`url(${h.image})`, backgroundSize:"cover", backgroundPosition:"center", position:"relative" }}>
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,.6),transparent)" }} />
                  {h.emergency && <div style={{ position:"absolute", top:10, right:10, background:G.rose, color:"#fff", fontSize:10, fontWeight:700, padding:"3px 9px", borderRadius:8 }}>🚨 EMERGENCY</div>}
                  <div style={{ position:"absolute", bottom:10, left:12, color:"#fff", fontWeight:700, fontSize:14 }}>{h.en}</div>
                </div>
                <div style={{ padding:"14px 16px" }}>
                  <div style={{ fontSize:12, color:"var(--text2)", marginBottom:6 }}>📍 {h.district}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                    <span style={{ fontSize:12, color:"var(--text2)" }}>🛏 {h.beds} {t.beds}</span>
                    <span style={{ fontSize:12, color:"var(--text2)" }}>🏥 {t.icu}: {h.icu}</span>
                    <span style={{ fontSize:12, color:G.teal, fontWeight:600 }}>⭐ {h.rating}</span>
                  </div>
                  <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                    {h.ambulance && <span style={{ fontSize:10, background:`${G.rose}18`, color:G.rose, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>🚑 {t.ambulance}</span>}
                    <span style={{ fontSize:10, background:`${G.teal}18`, color:G.teal, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>📍 {h.distance} {t.km}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"70px 24px", background:"var(--surface)" }}>
        <div style={{ maxWidth:680, margin:"0 auto", textAlign:"center" }}>
          <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)", marginBottom:44 }}>{t.patientExperiences} <span className="grad-text">{t.experiences}</span></h2>
          <div className="glass" style={{ padding:36 }}>
            <div style={{ fontSize:44, marginBottom:14 }}>{testimonials[testimonialIdx].av}</div>
            <Stars rating={testimonials[testimonialIdx].rating} size={18} />
            <p style={{ fontSize:16, color:"var(--text)", lineHeight:1.7, margin:"18px 0", fontStyle:"italic" }}>"{testimonials[testimonialIdx].text}"</p>
            <div style={{ fontWeight:700, color:G.teal }}>{testimonials[testimonialIdx].name}</div>
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:7, marginTop:20 }}>
            {testimonials.map((_,i) => (
              <button key={i} onClick={() => setTestimonialIdx(i)} style={{ width:i===testimonialIdx?22:7, height:7, borderRadius:4, background:i===testimonialIdx?G.teal:"var(--surface2)", border:"none", cursor:"pointer", transition:"all .3s" }} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"70px 24px", textAlign:"center", background:`linear-gradient(135deg,${G.teal}12,${G.purple}08)` }}>
        <h2 className="syne" style={{ fontSize:36, fontWeight:800, color:"var(--text)", marginBottom:14 }}>{t.startNow}<span className="grad-text">{t.free}</span></h2>
        <p style={{ color:"var(--text2)", fontSize:15, marginBottom:28 }}>{t.startNowSub}</p>
        <button className="btn-rip" onClick={() => setPage("Appointments")} style={{ padding:"14px 36px", borderRadius:13, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, color:"#fff", border:"none", cursor:"pointer", fontSize:17, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:`0 10px 36px ${G.teal}40` }}>{t.bookNow}</button>
      </section>

      <footer style={{ background:"var(--surface)", borderTop:"1px solid var(--border)", padding:"36px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:28, marginBottom:28 }}>
          {footerCols.map(col => (
            <div key={col.title}>
              <div className="syne" style={{ fontWeight:700, color:"var(--text)", marginBottom:14 }}>{col.title}</div>
              {col.items.map(item => (
                <div key={item} style={{ fontSize:12, color:"var(--text2)", marginBottom:7, cursor:"pointer" }} onClick={() => notify(`${item} — ${t.nFooterLink}`,"info")}>{item}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid var(--border)", paddingTop:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
          <span style={{ fontSize:12, color:"var(--text2)" }}>{t.footerCopy}</span>
          <div style={{ display:"flex", gap:14 }}>
            {["🐦","💼","📘","📸"].map((ic,i) => <span key={i} style={{ fontSize:17, cursor:"pointer" }} onClick={() => notify(t.nSocialMedia,"info")}>{ic}</span>)}
          </div>
        </div>
      </footer>
    </div>
  );
};

// ─── DOCTORS PAGE ─────────────────────────────────────────────────────────────
const DoctorsPage = ({ selectedSpec, setSelectedSpec, onBookDoctor, t, language }) => {
  const [search, setSearch] = useState("");
  const [filterSpec, setFilterSpec] = useState(selectedSpec||"all");
  const [sortBy, setSortBy] = useState("rating");
  const [loading, setLoading] = useState(true);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [distFilter, setDistFilter] = useState("all");

  useEffect(() => { if (selectedSpec) setFilterSpec(selectedSpec); setTimeout(() => setLoading(false), 850); }, [selectedSpec]);

  const getName = doc => language === "en" ? doc.nameEn : doc.nameBn;
  const getSlot = doc => language === "en" ? doc.nextSlotEn : doc.nextSlotBn;
  const getAvail = doc => language === "en" ? doc.availabilityEn : doc.availabilityBn;
  const getBio = doc => language === "en" ? doc.bioEn : doc.bioBn;

  const filtered = DOCTORS.filter(d => {
    const ms = !search || getName(d).toLowerCase().includes(search.toLowerCase()) || d.specName.toLowerCase().includes(search.toLowerCase()) || d.hospital.includes(search);
    const msp = filterSpec==="all" || d.specialization===filterSpec;
    const mr = d.rating >= ratingFilter;
    const md = distFilter==="all" || d.district===distFilter;
    return ms && msp && mr && md;
  }).sort((a,b) => sortBy==="rating" ? b.rating-a.rating : sortBy==="fee" ? a.fee-b.fee : b.experience-a.experience);

  return (
    <div style={{ maxWidth:1280, margin:"0 auto", padding:"28px 22px" }}>
      <div style={{ marginBottom:28 }}>
        <h1 className="syne" style={{ fontSize:30, fontWeight:800, color:"var(--text)", marginBottom:6 }}>{t.findDoctors} <span className="grad-text">{t.findDoctorsGrad}</span></h1>
        <p style={{ color:"var(--text2)" }}>{filtered.length} {t.doctorsFound}</p>
      </div>
      <div className="glass" style={{ padding:18, marginBottom:24, display:"flex", gap:12, flexWrap:"wrap", alignItems:"center" }}>
        <input className="hms-input" placeholder={t.searchPlaceholder} value={search} onChange={e=>setSearch(e.target.value)} style={{ flex:"1 1 220px" }} />
        <select className="hms-select" value={filterSpec} onChange={e=>{ setFilterSpec(e.target.value); setSelectedSpec(null); }}>
          <option value="all">{t.allDepts}</option>
          {SPECIALIZATIONS.map(s=><option key={s.id} value={s.id}>{s.en}</option>)}
        </select>
        <select className="hms-select" value={distFilter} onChange={e=>setDistFilter(e.target.value)}>
          <option value="all">{t.allDistricts}</option>
          {BD_DISTRICTS.map(d=><option key={d} value={d}>{d}</option>)}
        </select>
        <select className="hms-select" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
          <option value="rating">{t.bestRating}</option>
          <option value="fee">{t.lowestFee}</option>
          <option value="experience">{t.mostExp}</option>
        </select>
        <select className="hms-select" value={ratingFilter} onChange={e=>setRatingFilter(+e.target.value)}>
          <option value={0}>{t.anyRating}</option>
          <option value={4}>{t.stars4}</option>
          <option value={4.5}>{t.stars45}</option>
        </select>
      </div>
      <div className="scroll-x" style={{ display:"flex", gap:7, marginBottom:24, paddingBottom:4 }}>
        <button className={`tab-btn ${filterSpec==="all"?"active":""}`} onClick={()=>{ setFilterSpec("all"); setSelectedSpec(null); }}>{t.allTab}</button>
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
                <img src={doc.avatar} alt={getName(doc)} style={{ width:64, height:64, borderRadius:"50%", border:`2px solid ${G.teal}44`, objectFit:"cover", background:"var(--surface2)" }} />
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, fontSize:14, color:"var(--text)", marginBottom:2 }}>{getName(doc)}</div>
                  <div style={{ fontSize:11, color:G.teal, fontWeight:600, marginBottom:3 }}>{doc.specName}</div>
                  <div style={{ fontSize:10, color:"var(--text2)" }}>{doc.degree}</div>
                </div>
                <Badge label={doc.online?t.online:(language==="en"?"Offline":"অফলাইন")} color={doc.online?G.emerald:G.slate} />
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:11 }}>
                <Stars rating={doc.rating} />
                <span style={{ fontWeight:700, fontSize:13, color:"var(--text)" }}>{doc.rating}</span>
                <span style={{ fontSize:11, color:"var(--text2)" }}>({doc.reviews} {t.reviews})</span>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:13 }}>
                <span style={{ fontSize:10, background:"var(--surface2)", color:"var(--text2)", padding:"3px 7px", borderRadius:6 }}>🏥 {doc.hospital.slice(0,18)}…</span>
                <span style={{ fontSize:10, background:"var(--surface2)", color:"var(--text2)", padding:"3px 7px", borderRadius:6 }}>⏱ {doc.experience}{t.years}</span>
                <span style={{ fontSize:10, background:"var(--surface2)", color:"var(--text2)", padding:"3px 7px", borderRadius:6 }}>📅 {getAvail(doc)}</span>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"11px 0", borderTop:"1px solid var(--border)", marginBottom:12 }}>
                <div><div style={{ fontSize:10, color:"var(--text2)" }}>{t.consultFee}</div><div style={{ fontWeight:800, fontSize:17, color:G.teal }}>{fmt(doc.fee)}</div></div>
                <div style={{ textAlign:"right" }}><div style={{ fontSize:10, color:"var(--text2)" }}>{t.nextSlot}</div><div style={{ fontWeight:600, fontSize:12, color:G.emerald }}>{getSlot(doc)}</div></div>
              </div>
              <div style={{ display:"flex", gap:9 }}>
                <button onClick={()=>setSelectedDoc(doc)} style={{ flex:1, padding:"9px 0", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>{t.viewProfile}</button>
                <button className="btn-rip" onClick={()=>onBookDoctor(doc)} style={{ flex:2, padding:"9px 0", borderRadius:9, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>{t.book}</button>
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
                <img src={selectedDoc.avatar} alt={getName(selectedDoc)} style={{ width:78, height:78, borderRadius:"50%", border:`3px solid ${G.teal}`, objectFit:"cover", background:"var(--surface2)" }} />
                <div>
                  <h3 className="syne" style={{ fontSize:20, fontWeight:800, color:"var(--text)", marginBottom:3 }}>{getName(selectedDoc)}</h3>
                  <div style={{ color:G.teal, fontWeight:600, marginBottom:3 }}>{selectedDoc.specName}</div>
                  <div style={{ fontSize:12, color:"var(--text2)" }}>{selectedDoc.degree}</div>
                </div>
              </div>
              <button onClick={()=>setSelectedDoc(null)} style={{ background:"none", border:"none", fontSize:22, cursor:"pointer", color:"var(--text2)" }}>×</button>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:13, marginBottom:18 }}>
              {[[t.experience,`${selectedDoc.experience} ${t.years}`],[t.fee,fmt(selectedDoc.fee)],[t.hospital,selectedDoc.hospital.slice(0,22)+"…"],[t.schedule,getAvail(selectedDoc)],[t.languages,selectedDoc.languages.join(", ")],[t.nextSlotLabel,getSlot(selectedDoc)],[t.district,selectedDoc.district],[t.rating,`${selectedDoc.rating}/5`]].map(([k,v])=>(
                <div key={k} className="glass" style={{ padding:"11px 14px", borderRadius:11 }}>
                  <div style={{ fontSize:10, color:"var(--text2)", marginBottom:3 }}>{k}</div>
                  <div style={{ fontWeight:600, fontSize:13, color:"var(--text)" }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom:18 }}>
              <div style={{ fontWeight:600, marginBottom:6, color:"var(--text)" }}>{t.bio}</div>
              <p style={{ fontSize:12, color:"var(--text2)", lineHeight:1.7 }}>{getBio(selectedDoc)}</p>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:18 }}>
              <Stars rating={selectedDoc.rating} size={17} />
              <span style={{ fontWeight:700, color:"var(--text)" }}>{selectedDoc.rating}/5</span>
              <span style={{ fontSize:12, color:"var(--text2)" }}>({selectedDoc.reviews} {t.reviews})</span>
            </div>
            <button className="btn-rip" onClick={()=>{ onBookDoctor(selectedDoc); setSelectedDoc(null); }} style={{ width:"100%", padding:13, borderRadius:13, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", boxShadow:`0 7px 28px ${G.teal}40` }}>
              {getName(selectedDoc)} {t.bookWith}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── EMERGENCY PAGE ───────────────────────────────────────────────────────────
const EmergencyPage = ({ onBookDoctor, t, language }) => {
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

  const getName = doc => language === "en" ? doc.nameEn : doc.nameBn;
  const getSlot = doc => language === "en" ? doc.nextSlotEn : doc.nextSlotBn;

  const EMERG_LEVELS = {
    low:    { label:t.levelLow,    color:G.emerald, icon:"🟢", msg:t.levelLowMsg },
    medium: { label:t.levelMedium, color:G.gold,    icon:"🟡", msg:t.levelMedMsg },
    critical:{ label:t.levelCritical, color:G.rose, icon:"🔴", msg:t.levelCritMsg },
  };

  const IMAGE_TYPES = [
    { id:"injury",  label:t.imgInjury,      icon:"🤕", spec:"orthopedics", level:"medium" },
    { id:"skin",    label:t.imgSkin,         icon:"🧬", spec:"dermatology", level:"low" },
    { id:"xray",    label:t.imgXray,         icon:"🔬", spec:"orthopedics", level:"medium" },
    { id:"report",  label:t.imgReport,       icon:"📄", spec:"general",     level:"low" },
    { id:"eye",     label:t.imgEye,          icon:"👁️", spec:"ophthalmology",level:"low" },
    { id:"chest",   label:t.imgChest,        icon:"🫀", spec:"cardiology",  level:"critical" },
    { id:"prescription",label:t.imgPrescription,icon:"💊",spec:"general",  level:"low" },
  ];

  const [selectedImageType, setSelectedImageType] = useState(null);

  const analyzeImage = async () => {
    if (!imagePreview && !symptomText && !selectedImageType) { notify(language==="en"?"Upload an image or describe symptoms":"ছবি আপলোড করুন বা লক্ষণ লিখুন","warning"); return; }
    setAnalyzing(true);
    await delay(2000);
    let spec = "general", level = "low";
    const lower = symptomText.toLowerCase();
    for (const [kw, s] of Object.entries(SYMPTOM_MAP)) { if (lower.includes(kw)) { spec = s; break; } }
    for (const ek of EMERG_KEYWORDS) { if (lower.includes(ek)) { level = "critical"; break; } }
    if (level !== "critical" && lower.length > 10) level = "medium";
    if (selectedImageType) { spec = IMAGE_TYPES.find(t2=>t2.id===selectedImageType)?.spec || spec; level = IMAGE_TYPES.find(t2=>t2.id===selectedImageType)?.level || level; }
    const specObj = SPECIALIZATIONS.find(s=>s.id===spec);
    const possConds = {
      cardiology: language==="en"?["Coronary Artery Disease","Heart Failure","Arrhythmia"]:["করোনারি আর্টারি ডিজিজ","হার্ট ফেইলিউর","অ্যারিথমিয়া"],
      neurology: language==="en"?["Migraine","Suspected Stroke","Head Injury"]:["মাইগ্রেন","স্ট্রোক সন্দেহ","মাথার আঘাত"],
      orthopedics: language==="en"?["Fracture","Joint Dislocation","Sprain"]:["হাড় ভাঙ্গা","জয়েন্ট স্থানচ্যুতি","মোচ"],
      dermatology: language==="en"?["Eczema","Psoriasis","Skin Disease"]:["একজিমা","সোরিয়াসিস","চর্মরোগ"],
      general: language==="en"?["Viral Fever","Common Cold","Dehydration"]:["ভাইরাল ফিভার","সাধারণ সর্দি-জ্বর","ডিহাইড্রেশন"],
      ophthalmology: language==="en"?["Conjunctivitis","Retinal Problem","Glaucoma"]:["কনজাংটিভাইটিস","রেটিনাল সমস্যা","গ্লুকোমা"],
      pulmonology: language==="en"?["Bronchitis","Pneumonia","Asthma"]:["ব্রংকাইটিস","নিউমোনিয়া","অ্যাজমা"],
      gastro: language==="en"?["Gastritis","Ulcer","IBS"]:["গ্যাস্ট্রাইটিস","আলসার","IBS"],
    };
    const recs = {
      low: language==="en"?["See a doctor for regular consultation","Drink plenty of water","Rest well"]:["নিয়মিত ডাক্তারের পরামর্শ নিন","প্রচুর পানি পান করুন","বিশ্রাম নিন"],
      medium: language==="en"?["See a doctor within 24 hours","Avoid self-medication","Go to emergency if symptoms worsen"]:["২৪ ঘণ্টার মধ্যে ডাক্তার দেখান","ওষুধ ছাড়া স্ব-চিকিৎসা এড়িয়ে চলুন","লক্ষণ আরো খারাপ হলে জরুরি বিভাগে যান"],
      critical: language==="en"?["Call 999 now","Wait for ambulance","Do not drive alone","Go to nearest emergency department"]:["এখনই ৯৯৯ নম্বরে কল করুন","অ্যাম্বুলেন্সের জন্য অপেক্ষা করুন","একা গাড়ি চালাবেন না","নিকটতম ইমার্জেন্সি বিভাগে যান"],
    };
    setAnalysisResult({ spec, specObj, level, confidence: Math.floor(78 + Math.random()*20), possibleConditions: possConds[spec]||[language==="en"?"Initial examination needed":"প্রাথমিক পরীক্ষা প্রয়োজন"], recommendations: recs[level] });
    setAnalyzing(false);
    if (level === "critical") setEmergencyMode(true);
    setStep(3);
    notify(level==="critical"?t.nEmergencyDetected:t.nAnalysisDone, level==="critical"?"error":"success");
  };

  const hospSorted = [...BD_HOSPITALS_DATA].filter(h => {
    if (districtFilter !== "all") return h.district === districtFilter;
    if (emergencyMode) return h.emergency;
    return true;
  }).sort((a,b) => sortHosp==="distance" ? a.distance-b.distance : sortHosp==="rating" ? b.rating-a.rating : a.icu - b.icu);

  const hospDoctors = selectedHospital ? DOCTORS.filter(d => (analysisResult ? d.specialization===analysisResult.spec : true) && d.hospitalId===selectedHospital.id) : [];
  const fallbackDoctors = selectedHospital ? DOCTORS.filter(d => analysisResult ? d.specialization===analysisResult.spec : true).slice(0,6) : [];
  const displayDoctors = hospDoctors.length > 0 ? hospDoctors : fallbackDoctors;

  const eSteps = [t.eStep1, t.eStep2, t.eStep3, t.eStep4, t.eStep5];

  return (
    <div style={{ maxWidth:1200, margin:"0 auto", padding:"28px 22px" }}>
      <div style={{ marginBottom:28 }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:10, flexWrap:"wrap" }}>
          <h1 className="syne" style={{ fontSize:28, fontWeight:800, color:"var(--text)" }}>🚨 {t.emergencyTitle} <span className="grad-text">{t.emergencyGrad}</span></h1>
          {emergencyMode && (
            <div className="emerg-pulse" style={{ background:`${G.rose}15`, border:`1.5px solid ${G.rose}55`, color:G.rose, padding:"6px 16px", borderRadius:22, fontSize:12, fontWeight:700 }}>{t.emergencyActive}</div>
          )}
        </div>
        <p style={{ color:"var(--text2)", fontSize:14 }}>{t.emergencyDesc}</p>
      </div>
      <div className="glass" style={{ padding:"14px 20px", marginBottom:24, display:"flex", gap:12, alignItems:"center", flexWrap:"wrap", borderLeft:`4px solid ${G.rose}` }}>
        <span style={{ fontSize:20 }}>🚨</span>
        <span style={{ fontWeight:700, color:"var(--text)", fontSize:14, flex:1 }}>{t.emergencyBanner}</span>
        {[["999",t.callNational],["16789",t.callHealth],["1099",t.callAmbulance]].map(([num,lbl]) => (
          <button key={num} onClick={() => notify(`${num} ${language==="en"?"calling...":"কল করা হচ্ছে..."}`,"error")} style={{ padding:"8px 18px", borderRadius:10, background:`${G.rose}18`, border:`1.5px solid ${G.rose}44`, color:G.rose, cursor:"pointer", fontSize:13, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>
            📞 {num} — {lbl}
          </button>
        ))}
      </div>

      <div className="scroll-x" style={{ display:"flex", alignItems:"center", marginBottom:32, paddingBottom:4 }}>
        {eSteps.map((s,i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", flexShrink:0 }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
              <div style={{ width:34, height:34, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", background: step>i+1?G.teal:step===i+1?`linear-gradient(135deg,${G.teal},${G.tealDark})`:"var(--surface2)", color:step>=i+1?"#fff":"var(--text2)", fontWeight:700, fontSize:13, boxShadow:step===i+1?`0 4px 14px ${G.teal}44`:"none", transition:"all .3s" }}>{step>i+1?"✓":i+1}</div>
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
              <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:8 }}>{t.uploadTitle}</h2>
              <p style={{ color:"var(--text2)", fontSize:13, marginBottom:20 }}>{t.uploadDesc}</p>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(110px,1fr))", gap:10, marginBottom:18 }}>
                {IMAGE_TYPES.map(it => (
                  <div key={it.id} onClick={() => setSelectedImageType(it.id)} style={{ padding:"12px 8px", borderRadius:12, textAlign:"center", cursor:"pointer", border:`1.5px solid ${selectedImageType===it.id?G.teal:"var(--border)"}`, background:selectedImageType===it.id?`${G.teal}12`:"var(--surface2)", transition:"all .2s" }}>
                    <div style={{ fontSize:22, marginBottom:5 }}>{it.icon}</div>
                    <div style={{ fontSize:10, fontWeight:600, color:"var(--text)" }}>{it.label}</div>
                  </div>
                ))}
              </div>
              <div onClick={() => fileRef.current.click()} style={{ border:`2px dashed ${G.teal}44`, borderRadius:14, padding:20, textAlign:"center", cursor:"pointer", marginBottom:16, minHeight:120, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
                {imagePreview ? <img src={imagePreview} alt="" style={{ maxHeight:120, borderRadius:10, objectFit:"cover" }} /> : <><div style={{ fontSize:30, marginBottom:7 }}>📸</div><div style={{ color:"var(--text2)", fontSize:13 }}>{t.uploadClick}</div><div style={{ color:"var(--text2)", fontSize:11, marginTop:3 }}>{t.uploadClickSub}</div></>}
              </div>
              <input ref={fileRef} type="file" accept="image/*" style={{ display:"none" }} onChange={e => { const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=()=>{ setImagePreview(r.result); notify(t.nImageUploaded,"success"); }; r.readAsDataURL(f); }} />
            </div>
          </div>
          <div>
            <div className="glass" style={{ padding:28, borderRadius:22 }}>
              <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:8 }}>{t.symptomTitle}</h2>
              <p style={{ color:"var(--text2)", fontSize:13, marginBottom:18 }}>{t.symptomDesc}</p>
              <div style={{ position:"relative", marginBottom:14 }}>
                <textarea className="hms-input" placeholder={t.symptomPlaceholder} value={symptomText} onChange={e=>setSymptomText(e.target.value)} style={{ minHeight:110, resize:"vertical", paddingRight:52 }} />
                <button onClick={() => { setMicActive(m=>!m); notify(t.voiceInputInfo,"info"); }} className={micActive?"mic-active":""} style={{ position:"absolute", right:10, top:10, width:36, height:36, borderRadius:9, border:"none", cursor:"pointer", fontSize:17, background:micActive?G.rose:"var(--surface2)", transition:"all .2s" }}>🎤</button>
              </div>
              <div style={{ fontSize:12, fontWeight:600, color:"var(--text2)", marginBottom:9 }}>{t.quickSelect}</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:7, marginBottom:20 }}>
                {t.quickSymptoms.map(s => (
                  <button key={s} onClick={() => { setSymptomText(s); notify(`${t.nSymptomSelected} ${s}`,"info"); }} style={{ padding:"5px 12px", borderRadius:9, background:"var(--surface2)", color:"var(--text)", border:"none", cursor:"pointer", fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>{s}</button>
                ))}
              </div>
              <button className="btn-rip" onClick={analyzeImage} disabled={analyzing} style={{ width:"100%", padding:14, borderRadius:13, background:analyzing?"var(--surface2)":`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:analyzing?"var(--text2)":"#fff", cursor:analyzing?"not-allowed":"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
                {analyzing ? <><div className="a-spin" style={{ width:20, height:20, border:"2px solid rgba(255,255,255,.3)", borderTopColor:G.teal, borderRadius:"50%" }} /> {t.analyzingBtn}</> : t.analyzeBtn}
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
                <div style={{ fontSize:12, color:"var(--text2)", marginBottom:4 }}>{t.aiResult}</div>
                <div style={{ display:"flex", gap:12, alignItems:"center", flexWrap:"wrap" }}>
                  <span style={{ fontSize:22 }}>{analysisResult.specObj?.icon}</span>
                  <span style={{ fontWeight:700, color:"var(--text)", fontSize:16 }}>{analysisResult.specObj?.en}</span>
                  <span className="badge" style={{ background:`${EMERG_LEVELS[analysisResult.level].color}20`, color:EMERG_LEVELS[analysisResult.level].color }}>{EMERG_LEVELS[analysisResult.level].icon} {EMERG_LEVELS[analysisResult.level].label}</span>
                  <span style={{ fontSize:12, color:G.sky, fontWeight:600 }}>{t.confidence} {analysisResult.confidence}%</span>
                </div>
                <div style={{ fontSize:12, color:EMERG_LEVELS[analysisResult.level].color, marginTop:5, fontWeight:600 }}>{EMERG_LEVELS[analysisResult.level].msg}</div>
              </div>
              <div style={{ flex:1, minWidth:220 }}>
                <div style={{ fontSize:11, color:"var(--text2)", marginBottom:6 }}>{t.possibleConditions}</div>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                  {analysisResult.possibleConditions.map(c => <span key={c} style={{ fontSize:11, background:"var(--surface2)", color:"var(--text)", padding:"3px 9px", borderRadius:8 }}>{c}</span>)}
                </div>
              </div>
              <div>
                <div style={{ fontSize:11, color:"var(--text2)", marginBottom:6 }}>{t.recommendations}</div>
                {analysisResult.recommendations.slice(0,2).map(r => <div key={r} style={{ fontSize:11, color:"var(--text2)", marginBottom:3 }}>• {r}</div>)}
              </div>
              <button onClick={() => setStep(1)} style={{ padding:"7px 16px", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>{t.reanalyze}</button>
            </div>
          </div>

          {step === 3 && (
            <>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18, flexWrap:"wrap", gap:12 }}>
                <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)" }}>{t.nearbyHospitals} <span style={{ fontSize:15, color:"var(--text2)", fontWeight:400 }}>({hospSorted.length})</span></h2>
                <div style={{ display:"flex", gap:9, flexWrap:"wrap" }}>
                  <select className="hms-select" value={districtFilter} onChange={e => setDistrictFilter(e.target.value)}>
                    <option value="all">{t.allDistricts}</option>
                    {BD_DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <select className="hms-select" value={sortHosp} onChange={e => setSortHosp(e.target.value)}>
                    <option value="distance">{t.distance}</option>
                    <option value="rating">{t.ratingSort}</option>
                    <option value="icu">{t.icuSort}</option>
                  </select>
                  <button onClick={() => setEmergencyMode(m => !m)} style={{ padding:"8px 14px", borderRadius:9, background:emergencyMode?`${G.rose}18`:"var(--surface2)", border:`1.5px solid ${emergencyMode?G.rose:"var(--border)"}`, color:emergencyMode?G.rose:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>
                    {t.emergencyOnly}
                  </button>
                </div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))", gap:18 }}>
                {hospSorted.map(h => (
                  <div key={h.id} className={`glass card-h ${h.emergency&&emergencyMode?"emerg-card":""}`} style={{ borderRadius:20, overflow:"hidden" }} onClick={() => { setSelectedHospital(h); setStep(4); notify(`${h.en} ${t.nHospitalSelected}`,"success"); }}>
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
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.teal }}>{h.distance}km</div><div style={{ fontSize:10, color:"var(--text2)" }}>{t.km}</div></div>
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.emerald }}>{h.icu}</div><div style={{ fontSize:10, color:"var(--text2)" }}>{t.icu}</div></div>
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.sky }}>{h.beds}</div><div style={{ fontSize:10, color:"var(--text2)" }}>{t.beds}</div></div>
                          <div style={{ textAlign:"center" }}><div style={{ fontWeight:800, fontSize:16, color:G.gold }}>⭐{h.rating}</div><div style={{ fontSize:10, color:"var(--text2)" }}>{t.rating}</div></div>
                        </div>
                      </div>
                      <div style={{ fontSize:11, color:"var(--text2)", marginBottom:10 }}>📍 {h.address}</div>
                      <div style={{ display:"flex", gap:6, marginBottom:12, flexWrap:"wrap" }}>
                        <span style={{ fontSize:10, background:`${G.teal}15`, color:G.teal, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>👨‍⚕️ {DOCTORS.filter(d=>d.hospitalId===h.id).length} {language==="en"?"doctors":"ডাক্তার"}</span>
                        <span style={{ fontSize:10, background:`${G.sky}15`, color:G.sky, padding:"2px 8px", borderRadius:8, fontWeight:600 }}>🔬 {DOCTORS.filter(d=>analysisResult&&d.specialization===analysisResult.spec&&d.hospitalId===h.id).length} {analysisResult?.specObj?.en}</span>
                      </div>
                      <button className="btn-rip" style={{ width:"100%", padding:"9px", borderRadius:10, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:13, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>{t.selectHospital}</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 4 && selectedHospital && (
            <div className="fade-up">
              <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:22, flexWrap:"wrap" }}>
                <button onClick={() => setStep(3)} style={{ padding:"8px 16px", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:13, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>← {language==="en"?"Back to hospitals":"হাসপাতালে ফিরুন"}</button>
                <h2 className="syne" style={{ fontSize:20, fontWeight:800, color:"var(--text)" }}>{selectedHospital.en} — {analysisResult?.specObj?.en}</h2>
              </div>
              <div className="glass" style={{ padding:"14px 18px", marginBottom:20, borderRadius:14, display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
                <img src={selectedHospital.image} alt="" style={{ width:56, height:56, borderRadius:10, objectFit:"cover" }} />
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, color:"var(--text)", marginBottom:2 }}>{selectedHospital.name}</div>
                  <div style={{ fontSize:12, color:"var(--text2)" }}>📍 {selectedHospital.address} | 📞 {selectedHospital.phone}</div>
                </div>
                {selectedHospital.emergency && <Badge label={language==="en"?"Emergency Available":"জরুরি উপলব্ধ"} color={G.rose} />}
                {selectedHospital.ambulance && <Badge label={t.ambulance} color={G.orange} />}
              </div>
              {displayDoctors.length === 0 ? (
                <div style={{ textAlign:"center", padding:40, color:"var(--text2)" }}>
                  <div style={{ fontSize:40, marginBottom:12 }}>😔</div>
                  <div>{t.noDocsFound}</div>
                  <button onClick={() => setStep(3)} style={{ marginTop:16, padding:"10px 24px", borderRadius:10, background:G.teal, color:"#fff", border:"none", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>{t.tryOtherHosp}</button>
                </div>
              ) : (
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:16 }}>
                  {displayDoctors.map(doc => (
                    <div key={doc.id} className="glass card-h" style={{ padding:20, borderRadius:18, border:selectedDoctor?.id===doc.id?`2px solid ${G.teal}`:"2px solid transparent" }} onClick={() => setSelectedDoctor(doc)}>
                      <div style={{ display:"flex", gap:12, marginBottom:12 }}>
                        <img src={doc.avatar} alt={getName(doc)} style={{ width:58, height:58, borderRadius:"50%", border:`2px solid ${G.teal}33`, objectFit:"cover", background:"var(--surface2)" }} />
                        <div style={{ flex:1 }}>
                          <div style={{ fontWeight:700, color:"var(--text)", marginBottom:2, fontSize:13 }}>{getName(doc)}</div>
                          <div style={{ fontSize:11, color:G.teal, marginBottom:2 }}>{doc.specName}</div>
                          <div style={{ fontSize:10, color:"var(--text2)" }}>{doc.degree}</div>
                        </div>
                        <Badge label={doc.online?t.online:(language==="en"?"Offline":"অফলাইন")} color={doc.online?G.emerald:G.slate} />
                      </div>
                      <div style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", marginBottom:12 }}>
                        <div><div style={{ fontSize:10, color:"var(--text2)" }}>{t.consultFee}</div><div style={{ fontWeight:800, fontSize:16, color:G.teal }}>{fmt(doc.fee)}</div></div>
                        <div style={{ textAlign:"right" }}><div style={{ fontSize:10, color:"var(--text2)" }}>{t.nextSlot}</div><div style={{ fontWeight:600, fontSize:11, color:G.emerald }}>{getSlot(doc)}</div></div>
                        <div style={{ textAlign:"right" }}><div style={{ fontSize:10, color:"var(--text2)" }}>{t.experience}</div><div style={{ fontWeight:600, fontSize:12, color:"var(--text)" }}>{doc.experience}{t.years}</div></div>
                      </div>
                      <div style={{ display:"flex", gap:8 }}>
                        <button onClick={e=>{e.stopPropagation();setSelectedDoctor(doc);}} style={{ flex:1, padding:"8px 0", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>{t.details}</button>
                        <button className="btn-rip" onClick={e=>{e.stopPropagation();onBookDoctor(doc);}} style={{ flex:2, padding:"8px 0", borderRadius:9, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>{t.book}</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ marginTop:28 }}>
                <h3 style={{ fontWeight:700, color:"var(--text)", marginBottom:14, fontSize:15 }}>{t.altHospitals}</h3>
                <div className="scroll-x" style={{ display:"flex", gap:12, paddingBottom:6 }}>
                  {hospSorted.filter(h=>h.id!==selectedHospital.id).slice(0,4).map(h => (
                    <div key={h.id} className="glass card-h" style={{ minWidth:220, padding:16, borderRadius:14, flexShrink:0 }} onClick={() => { setSelectedHospital(h); notify(`${h.en} ${t.nHospitalChanged}`,"info"); }}>
                      <div style={{ fontWeight:700, color:"var(--text)", fontSize:13, marginBottom:4 }}>{h.en}</div>
                      <div style={{ fontSize:11, color:"var(--text2)", marginBottom:7 }}>📍 {h.distance}km | ⭐{h.rating}</div>
                      {h.emergency && <Badge label="Emergency" color={G.rose} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── APPOINTMENTS PAGE ────────────────────────────────────────────────────────
const AppointmentsPage = ({ preSelectedDoctor, setPreSelectedDoctor, t, language }) => {
  const [step, setStep] = useState(preSelectedDoctor ? 3 : 1);
  const [symptoms, setSymptoms] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [suggestedSpec, setSuggestedSpec] = useState(null);
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(preSelectedDoctor);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [thinking, setThinking] = useState(false);
  const [appointments, setAppointments] = useState(SAMPLE_APPOINTMENTS);
  const [calMonth, setCalMonth] = useState(new Date(2026, 4, 1));
  const [activeTab, setActiveTab] = useState("book");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const fileRef = useRef(null);

  const getName = doc => language === "en" ? doc.nameEn : doc.nameBn;
  const getSlot = doc => language === "en" ? doc.nextSlotEn : doc.nextSlotBn;
  const getAvail = doc => language === "en" ? doc.availabilityEn : doc.availabilityBn;

  useEffect(() => { if (preSelectedDoctor) { setSelectedDoctor(preSelectedDoctor); setStep(3); setPreSelectedDoctor(null); } }, [preSelectedDoctor]);

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) { notify(language==="en"?"Please describe your symptoms":t.chooseDeptWarn,"warning"); return; }
    setThinking(true);
    await delay(1400);
    const lower = symptoms.toLowerCase();
    let spec = "general";
    for (const [kw, s] of Object.entries(SYMPTOM_MAP)) { if (lower.includes(kw)) { spec = s; break; } }
    setSuggestedSpec(spec); setSelectedSpec(spec); setThinking(false); setStep(2);
    notify(`${t.nAIRecommends} ${SPECIALIZATIONS.find(s=>s.id===spec)?.en}`,"success");
  };

  const bookAppointment = () => {
    if (!selectedDate || !selectedTime) { notify(t.chooseDateWarn,"warning"); return; }
    if (!patientName.trim()) { notify(t.patientNameWarn,"warning"); return; }
    const token = `DHK-${Math.floor(2000+Math.random()*8000)}`;
    const newApt = { id:appointments.length+1, patientEn:patientName, patientBn:patientName, doctorEn:selectedDoctor.nameEn, doctorBn:selectedDoctor.nameBn, spec:selectedDoctor.specName, date:selectedDate, time:selectedTime, status:"pending", fee:selectedDoctor.fee, token };
    setAppointments(p => [newApt,...p]);
    notify(`🎉 ${language==="en"?"Appointment confirmed! Token:":"অ্যাপয়েন্টমেন্ট নিশ্চিত! টোকেন:"} ${token}`,"success");
    setStep(5);
  };

  const getDaysInMonth = (y,m) => new Date(y,m+1,0).getDate();
  const getFirstDay = (y,m) => new Date(y,m,1).getDay();
  const today = new Date();
  const calDays = [t.calSun,t.calMon,t.calTue,t.calWed,t.calThu,t.calFri,t.calSat];

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
      cells.push(<div key={d} className={`cal-day${isT?" today":""}${selectedDate===ds?" selected":""}${isPast?" disabled":""}${hasA?" has-apt":""}`} onClick={() => !isPast&&setSelectedDate(ds)}>{d}</div>);
    }
    return cells;
  };

  const specDocs = selectedSpec ? DOCTORS.filter(d=>d.specialization===selectedSpec) : DOCTORS;
  const SC = { confirmed:G.emerald, pending:G.gold, completed:G.teal, cancelled:G.rose };
  const statusLabel = s => ({ confirmed:t.confirmed, pending:t.pending, completed:t.completed, cancelled:t.cancelled }[s]);
  const bSteps = [t.bStep1, t.bStep2, t.bStep3, t.bStep4, t.bStep5];

  return (
    <div style={{ maxWidth:1100, margin:"0 auto", padding:"28px 22px" }}>
      <div style={{ marginBottom:28 }}>
        <h1 className="syne" style={{ fontSize:28, fontWeight:800, color:"var(--text)", marginBottom:6 }}><span className="grad-text">{t.appointmentsTitle}</span></h1>
      </div>
      <div style={{ display:"flex", gap:7, marginBottom:28, background:"var(--surface2)", borderRadius:11, padding:5, width:"fit-content" }}>
        {[["book",t.newBooking],["mine",t.myAppointments]].map(([tab,label]) => (
          <button key={tab} className={`tab-btn ${activeTab===tab?"active":""}`} onClick={() => setActiveTab(tab)}>{label}</button>
        ))}
      </div>

      {activeTab === "mine" ? (
        <div>
          <h2 style={{ fontSize:18, fontWeight:700, color:"var(--text)", marginBottom:18 }}>{t.myAptsCount} ({appointments.length})</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {appointments.map(apt => (
              <div key={apt.id} className="glass" style={{ padding:18, borderRadius:16, display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
                <div style={{ width:46, height:46, borderRadius:"50%", background:`${SC[apt.status]}1a`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>
                  {apt.status==="confirmed"?"✅":apt.status==="pending"?"⏳":apt.status==="completed"?"🩺":"❌"}
                </div>
                <div style={{ flex:1, minWidth:180 }}>
                  <div style={{ fontWeight:700, color:"var(--text)", marginBottom:2, fontSize:14 }}>{language==="en"?apt.doctorEn:apt.doctorBn}</div>
                  <div style={{ fontSize:12, color:"var(--text2)" }}>{apt.spec} • {apt.date} {language==="en"?"at":"সময়"} {apt.time}</div>
                  <div style={{ fontSize:11, color:G.sky, marginTop:2 }}>{t.tokenLabel} {apt.token}</div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <Badge label={statusLabel(apt.status)} color={SC[apt.status]} />
                  <div style={{ fontSize:15, fontWeight:700, color:G.teal, marginTop:5 }}>{fmt(apt.fee)}</div>
                </div>
                <div style={{ display:"flex", gap:7 }}>
                  {apt.status==="pending" && <button onClick={() => { setAppointments(p=>p.map(a=>a.id===apt.id?{...a,status:"cancelled"}:a)); notify(t.aptCancelled,"warning"); }} style={{ padding:"5px 13px", borderRadius:7, background:`${G.rose}18`, color:G.rose, border:"none", cursor:"pointer", fontSize:11, fontWeight:600 }}>{t.cancelBtn}</button>}
                  <button onClick={() => notify(t.detailsEmailSent,"info")} style={{ padding:"5px 13px", borderRadius:7, background:"var(--surface2)", color:"var(--text)", border:"none", cursor:"pointer", fontSize:11, fontWeight:600 }}>{t.detailsBtn}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="scroll-x" style={{ display:"flex", alignItems:"center", marginBottom:34, paddingBottom:4 }}>
            {bSteps.map((s,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", flexShrink:0 }}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5, cursor:step>i+1?"pointer":"default" }} onClick={() => step>i+1&&setStep(i+1)}>
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
                <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:6 }}>{t.howAreYou}</h2>
                <p style={{ color:"var(--text2)", marginBottom:20, fontSize:13 }}>{t.symptomSubDesc}</p>
                <div style={{ position:"relative", marginBottom:14 }}>
                  <textarea className="hms-input" placeholder={t.symptomPlaceholder} value={symptoms} onChange={e=>setSymptoms(e.target.value)} style={{ minHeight:110, resize:"vertical", paddingRight:52 }} />
                  <button onClick={() => notify(t.voiceInputInfo,"info")} style={{ position:"absolute", right:10, top:10, width:36, height:36, borderRadius:9, border:"none", cursor:"pointer", fontSize:17, background:"var(--surface2)" }}>🎤</button>
                </div>
                <div onClick={() => fileRef.current.click()} style={{ border:`2px dashed ${G.teal}44`, borderRadius:13, padding:18, textAlign:"center", cursor:"pointer", marginBottom:20 }}>
                  {imagePreview ? <img src={imagePreview} alt="" style={{ maxHeight:120, borderRadius:9, objectFit:"cover" }} /> : <><div style={{ fontSize:28, marginBottom:6 }}>📸</div><div style={{ color:"var(--text2)", fontSize:13 }}>{t.uploadSymptomImg}</div></>}
                </div>
                <input ref={fileRef} type="file" accept="image/*" style={{ display:"none" }} onChange={e => { const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=()=>{ setImagePreview(r.result); notify(t.nImageUploaded,"success"); }; r.readAsDataURL(f); }} />
                <button className="btn-rip" onClick={analyzeSymptoms} disabled={thinking} style={{ width:"100%", padding:14, borderRadius:13, background:thinking?"var(--surface2)":`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:thinking?"var(--text2)":"#fff", cursor:thinking?"not-allowed":"pointer", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
                  {thinking?<><div className="a-spin" style={{ width:20, height:20, border:"2px solid rgba(255,255,255,.3)", borderTopColor:G.teal, borderRadius:"50%" }} />{t.analyzingSymptoms}</>:t.analyzeSymptoms}
                </button>
              </div>
              <div style={{ marginTop:20 }}>
                <div style={{ fontSize:13, fontWeight:600, color:"var(--text2)", marginBottom:10 }}>{t.quickSelectLabel}</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                  {t.quickSymptomsApt.map(s => (
                    <button key={s} onClick={() => { setSymptoms(s); notify(`${t.nSymptomSelected} ${s}`,"info"); }} style={{ padding:"6px 13px", borderRadius:9, background:"var(--surface2)", color:"var(--text)", border:"none", cursor:"pointer", fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>{s}</button>
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
                  <span style={{ color:"var(--text)", fontSize:13 }}><strong>{t.aiRecommends}</strong> <span style={{ color:G.teal }}>{SPECIALIZATIONS.find(s=>s.id===suggestedSpec)?.en}</span></span>
                </div>
                <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)" }}>{t.chooseDept}</h2>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))", gap:12, marginBottom:24 }}>
                {SPECIALIZATIONS.map(spec => (
                  <div key={spec.id} className="glass card-h" style={{ padding:18, textAlign:"center", borderRadius:15, cursor:"pointer", border:selectedSpec===spec.id?`2px solid ${spec.color}`:"2px solid transparent", background:selectedSpec===spec.id?`${spec.color}12`:undefined, position:"relative" }} onClick={() => setSelectedSpec(spec.id)}>
                    {spec.id===suggestedSpec && <div style={{ position:"absolute", top:-7, right:-7, background:G.gold, color:"#000", fontSize:9, fontWeight:700, padding:"2px 6px", borderRadius:7 }}>AI</div>}
                    <div style={{ fontSize:26, marginBottom:7 }}>{spec.icon}</div>
                    <div style={{ fontWeight:700, fontSize:11, color:"var(--text)" }}>{spec.en}</div>
                    <div style={{ fontSize:10, color:"var(--text2)", marginTop:3 }}>{DOCTORS.filter(d=>d.specialization===spec.id).length} {language==="en"?"doctors":"ডাক্তার"}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", gap:11 }}>
                <button onClick={() => setStep(1)} style={{ padding:"11px 22px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>{t.back}</button>
                <button className="btn-rip" onClick={() => { if(!selectedSpec){ notify(t.chooseDeptWarn,"warning"); return; } setStep(3); }} style={{ padding:"11px 26px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700 }}>{t.viewDoctors}</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="fade-up">
              <h2 className="syne" style={{ fontSize:22, fontWeight:800, color:"var(--text)", marginBottom:18 }}>{t.chooseDoctor}</h2>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(275px,1fr))", gap:15, marginBottom:22 }}>
                {specDocs.map(doc => (
                  <div key={doc.id} className="glass card-h" style={{ padding:18, borderRadius:17, cursor:"pointer", border:selectedDoctor?.id===doc.id?`2px solid ${G.teal}`:"2px solid transparent", background:selectedDoctor?.id===doc.id?`${G.teal}08`:undefined }} onClick={() => setSelectedDoctor(doc)}>
                    <div style={{ display:"flex", gap:11, marginBottom:11 }}>
                      <img src={doc.avatar} alt={getName(doc)} style={{ width:55, height:55, borderRadius:"50%", border:`2px solid ${G.teal}33`, objectFit:"cover", background:"var(--surface2)" }} />
                      <div>
                        <div style={{ fontWeight:700, color:"var(--text)", marginBottom:2, fontSize:13 }}>{getName(doc)}</div>
                        <div style={{ fontSize:11, color:G.teal }}>{doc.specName}</div>
                        <div style={{ fontSize:10, color:"var(--text2)" }}>{doc.experience}{t.years} {language==="en"?"exp":""}</div>
                      </div>
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <Stars rating={doc.rating} size={12} />
                      <span style={{ fontWeight:800, color:G.teal, fontSize:15 }}>{fmt(doc.fee)}</span>
                    </div>
                    <div style={{ marginTop:6, fontSize:11, color:G.emerald }}>🕐 {getSlot(doc)}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", gap:11 }}>
                <button onClick={() => setStep(2)} style={{ padding:"11px 22px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>{t.back}</button>
                <button className="btn-rip" onClick={() => { if(!selectedDoctor){ notify(t.chooseDoctorWarn,"warning"); return; } setStep(4); }} style={{ padding:"11px 26px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700 }}>{t.proceedBtn}</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="fade-up" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, alignItems:"start" }}>
              <div>
                <h2 className="syne" style={{ fontSize:20, fontWeight:800, color:"var(--text)", marginBottom:18 }}>{t.chooseDate}</h2>
                <div className="glass" style={{ padding:18, borderRadius:20 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                    <button onClick={() => setCalMonth(m => new Date(m.getFullYear(),m.getMonth()-1,1))} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--text)", fontSize:17 }}>‹</button>
                    <span style={{ fontWeight:700, color:"var(--text)", fontSize:14 }}>{calMonth.toLocaleString("default",{month:"long",year:"numeric"})}</span>
                    <button onClick={() => setCalMonth(m => new Date(m.getFullYear(),m.getMonth()+1,1))} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--text)", fontSize:17 }}>›</button>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:3, marginBottom:7 }}>
                    {calDays.map(d => <div key={d} style={{ textAlign:"center", fontSize:10, fontWeight:700, color:"var(--text2)", padding:"3px 0" }}>{d.slice(0,2)}</div>)}
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:3 }}>{renderCalendar()}</div>
                  {selectedDate && <div style={{ marginTop:10, textAlign:"center", fontSize:12, color:G.teal, fontWeight:600 }}>{t.selectedDate} {selectedDate}</div>}
                </div>
              </div>
              <div>
                <h2 className="syne" style={{ fontSize:20, fontWeight:800, color:"var(--text)", marginBottom:18 }}>{t.timeAndInfo}</h2>
                <div className="glass" style={{ padding:18, borderRadius:20 }}>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:20 }}>
                    {TIMES.map(time => (
                      <button key={time} onClick={() => setSelectedTime(time)} style={{ padding:"9px 5px", borderRadius:9, border:"none", cursor:"pointer", background:selectedTime===time?G.teal:"var(--surface2)", color:selectedTime===time?"#fff":"var(--text)", fontSize:11, fontWeight:600, fontFamily:"'DM Sans',sans-serif", transition:"all .18s" }}>{time}</button>
                    ))}
                  </div>
                  <div style={{ marginBottom:14 }}>
                    <input className="hms-input" placeholder={t.patientName} value={patientName} onChange={e=>setPatientName(e.target.value)} style={{ marginBottom:10 }} />
                    <input className="hms-input" placeholder={t.patientPhone} value={patientPhone} onChange={e=>setPatientPhone(e.target.value)} />
                  </div>
                  {selectedDoctor && (
                    <div style={{ padding:14, background:`${G.teal}08`, borderRadius:13, border:`1px solid ${G.teal}28`, marginBottom:18 }}>
                      <div style={{ fontWeight:700, color:"var(--text)", marginBottom:7, fontSize:13 }}>{t.aptSummary}</div>
                      {[[t.sumDoctor,getName(selectedDoctor)],[t.sumDept,selectedDoctor.specName],[t.sumDate,selectedDate||t.notSelected],[t.sumTime,selectedTime||t.notSelected],[t.sumFee,fmt(selectedDoctor.fee)]].map(([k,v]) => (
                        <div key={k} style={{ display:"flex", justifyContent:"space-between", marginBottom:4, fontSize:12 }}>
                          <span style={{ color:"var(--text2)" }}>{k}</span>
                          <span style={{ fontWeight:600, color:"var(--text)" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{ display:"flex", gap:9 }}>
                    <button onClick={() => setStep(3)} style={{ padding:"11px 22px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>{t.back}</button>
                    <button className="btn-rip" onClick={bookAppointment} style={{ flex:1, padding:"11px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700, fontSize:14 }}>{t.confirmBooking}</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="fade-up" style={{ textAlign:"center", padding:"50px 22px" }}>
              <div style={{ width:90, height:90, borderRadius:"50%", background:`${G.emerald}18`, border:`3px solid ${G.emerald}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:42, margin:"0 auto 22px" }}>✅</div>
              <h2 className="syne" style={{ fontSize:32, fontWeight:800, color:"var(--text)", marginBottom:10 }}>{t.aptConfirmed}</h2>
              <p style={{ color:"var(--text2)", fontSize:15, marginBottom:6 }}>{t.doctorLabel} <strong style={{ color:G.teal }}>{selectedDoctor&&getName(selectedDoctor)}</strong></p>
              <p style={{ color:"var(--text2)", marginBottom:6 }}>{selectedDate} {language==="en"?"at":"সময়"} {selectedTime}</p>
              <div style={{ display:"inline-block", background:`${G.sky}18`, border:`1.5px solid ${G.sky}44`, color:G.sky, padding:"8px 20px", borderRadius:12, fontWeight:700, fontSize:14, marginBottom:28 }}>
                {t.tokenLabel} {appointments[0]?.token || "DHK-2350"}
              </div>
              <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
                <button onClick={() => { setStep(1); setSymptoms(""); setSelectedDoctor(null); setSelectedDate(null); setSelectedTime(null); setImagePreview(null); setPatientName(""); }} style={{ padding:"11px 26px", borderRadius:11, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:700 }}>{t.bookAgain}</button>
                <button onClick={() => setActiveTab("mine")} style={{ padding:"11px 26px", borderRadius:11, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600 }}>{t.viewMyApts}</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── DASHBOARD PAGE ───────────────────────────────────────────────────────────
const DashboardPage = ({ role, t, language }) => {
  const [loaded, setLoaded] = useState(false);
  const [section, setSection] = useState("overview");
  useEffect(() => { setTimeout(() => setLoaded(true), 280); }, []);

  const roleCards = {
    patient: [
      { l:t.dTotalVisits, v:language==="en"?"12":"১২", ch:"+2", icon:"🩺", c:G.sky },
      { l:t.dUpcoming, v:language==="en"?"2":"২", ch:language==="en"?"Next: tomorrow":"পরেরটি: আগামীকাল", icon:"📅", c:G.teal },
      { l:t.dReports, v:language==="en"?"5":"৫", ch:language==="en"?"2 new":"২টি নতুন", icon:"📄", c:G.emerald },
      { l:t.dHealthScore, v:"85%", ch:"+3%", icon:"💚", c:G.gold },
    ],
    doctor: [
      { l:t.dMyPatients, v:language==="en"?"342":"৩৪২", ch:"+5%", icon:"🧑‍🤝‍🧑", c:G.sky },
      { l:t.dTodayApts, v:language==="en"?"8":"৮", ch:language==="en"?"2 new":"২টি নতুন", icon:"📋", c:G.teal },
      { l:t.dMonthlyIncome, v:"৳42,000", ch:"+18%", icon:"💳", c:G.emerald },
      { l:t.dRating, v:"4.9 ⭐", ch:"+0.1", icon:"🏆", c:G.gold },
    ],
    admin: [
      { l:t.dTotalPatients, v:language==="en"?"1,284":"১,২৮৪", ch:"+12%", icon:"👥", c:G.sky },
      { l:t.dTodayApts2, v:language==="en"?"48":"৪৮", ch:"+8%", icon:"📅", c:G.teal },
      { l:t.dMonthlyRevenue, v:"৳27,300", ch:"+15%", icon:"💰", c:G.emerald },
      { l:t.dActiveDoctors, v:`${DOCTORS.length}`, ch:"+2", icon:"👨‍⚕️", c:G.purple },
    ],
    superadmin: [
      { l:t.dTotalHospitals, v:`${BD_HOSPITALS_DATA.length}`, ch:"+1", icon:"🏥", c:G.sky },
      { l:t.dActiveDoctors2, v:`${DOCTORS.length}`, ch:"+3", icon:"👨‍⚕️", c:G.teal },
      { l:t.dNationalRevenue, v:language==="en"?"৳27M":"৳২.৭কোটি", ch:"+22%", icon:"💰", c:G.emerald },
      { l:t.dEmergCases, v:language==="en"?"14":"১৪", ch:language==="en"?"today":"আজ", icon:"🚨", c:G.rose },
    ],
  };

  const cards = roleCards[role] || roleCards.patient;
  const monthly = t.months.map((m,i) => ({ m, p:[142,168,195,178,215,230][i], r:[182000,214000,248000,227000,273000,298000][i] }));
  const maxP = Math.max(...monthly.map(d=>d.p));
  const specDist = SPECIALIZATIONS.slice(0,6).map(s => ({ name:s.en, count:DOCTORS.filter(d=>d.specialization===s.id).length, color:s.color }));
  const sideItems = [
    { id:"overview",  icon:"📊", l:t.sOverview },
    { id:"analytics", icon:"📈", l:t.sAnalytics },
    { id:"doctors",   icon:"👨‍⚕️",l:t.sDoctors },
    { id:"hospitals", icon:"🏥", l:t.sHospitals },
    { id:"emergency", icon:"🚨", l:t.sEmergency },
    { id:"reports",   icon:"📄", l:t.sReports },
    { id:"settings",  icon:"⚙️", l:t.sSettings },
  ];
  const roleTitle = { patient:t.patientLabel, doctor:t.doctorLabel2, admin:t.adminLabel, superadmin:t.superAdminLabel }[role] || t.patientLabel;
  const SC = { confirmed:G.emerald, pending:G.gold, completed:G.teal, cancelled:G.rose };
  const statusLabel = s => ({ confirmed:t.confirmed, pending:t.pending, completed:t.completed, cancelled:t.cancelled }[s]);

  return (
    <div style={{ display:"flex", minHeight:"calc(100vh - 66px)" }}>
      <div className="hide-m glass" style={{ width:210, flexShrink:0, borderRadius:0, borderRight:"1px solid var(--border)", padding:"22px 10px", position:"sticky", top:66, height:"calc(100vh - 66px)", overflowY:"auto" }}>
        <div style={{ marginBottom:22, padding:"0 7px" }}>
          <div style={{ fontSize:11, fontWeight:700, color:"var(--text2)", textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>{roleTitle}</div>
          <div style={{ width:36, height:3, background:G.teal, borderRadius:2 }} />
        </div>
        {sideItems.map(item => (
          <div key={item.id} className={`sidebar-item ${section===item.id?"active":""}`} onClick={() => { setSection(item.id); notify(`${item.l} ${t.nSectionChanged}`,"info"); }}>
            <span style={{ fontSize:17 }}>{item.icon}</span><span>{item.l}</span>
          </div>
        ))}
        <div style={{ marginTop:28, padding:"14px 7px" }}>
          <div style={{ fontSize:11, fontWeight:700, color:"var(--text2)", marginBottom:10 }}>{t.quickInfo}</div>
          {[[t.onlineDoc,language==="en"?"12":"১২",G.emerald],[t.waitingPt,language==="en"?"5":"৫",G.gold],[t.emergCases,language==="en"?"2":"২",G.rose]].map(([l,v,c]) => (
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
            <h1 className="syne" style={{ fontSize:26, fontWeight:800, color:"var(--text)", marginBottom:3 }}>{roleTitle} <span className="grad-text">{t.dashboardTitle}</span></h1>
            <p style={{ color:"var(--text2)", fontSize:13 }}>{t.welcomeMsg}</p>
          </div>
          <div style={{ display:"flex", gap:9 }}>
            <button onClick={() => notify(t.exportedMsg,"success")} style={{ padding:"9px 18px", borderRadius:9, background:"var(--surface2)", border:"none", color:"var(--text)", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>{t.exportBtn}</button>
            <button className="btn-rip" onClick={() => notify(t.refreshedMsg,"success")} style={{ padding:"9px 18px", borderRadius:9, background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", color:"#fff", cursor:"pointer", fontSize:12, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>{t.refreshBtn}</button>
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:18, marginBottom:28 }}>
          {cards.map((c,i) => (
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
              <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15 }}>{t.patientTrend}</h3>
              <select className="hms-select" style={{ fontSize:11, padding:"4px 9px" }} onChange={() => notify(t.chartUpdated,"info")}>
                <option>{t.monthly}</option><option>{t.weekly}</option>
              </select>
            </div>
            <div style={{ display:"flex", alignItems:"flex-end", gap:10, height:150 }}>
              {monthly.map((d,i) => (
                <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:7 }}>
                  <span style={{ fontSize:10, color:"var(--text2)", fontWeight:600 }}>{d.p}</span>
                  <div className="chart-bar" style={{ width:"100%", height:loaded?`${(d.p/maxP)*100}%`:"0%", transitionDelay:`${i*.1}s` }} />
                  <span style={{ fontSize:10, color:"var(--text2)" }}>{d.m}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass" style={{ padding:26, borderRadius:20 }}>
            <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15, marginBottom:18 }}>{t.bySpecialization}</h3>
            {specDist.map((s,i) => (
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
            <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15, marginBottom:18 }}>{t.connectedHospitals} {t.hospitals}</h3>
            <div style={{ overflowX:"auto" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                <thead>
                  <tr>{[t.tHospital,t.tDistrict,t.tBeds,t.tICU,t.tEmergency,t.tRating,t.tAmbulance,t.tStatus].map(h=><th key={h} style={{ padding:"7px 11px", textAlign:"left", color:"var(--text2)", fontWeight:600, whiteSpace:"nowrap", borderBottom:"1px solid var(--border)" }}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {BD_HOSPITALS_DATA.map(h => (
                    <tr key={h.id} style={{ borderBottom:"1px solid var(--border)" }}>
                      <td style={{ padding:"11px", color:"var(--text)", fontWeight:600 }}>{h.en}</td>
                      <td style={{ padding:"11px", color:"var(--text2)" }}>{h.district.split("(")[0]}</td>
                      <td style={{ padding:"11px", color:"var(--text2)" }}>{h.beds}</td>
                      <td style={{ padding:"11px", color:"var(--text2)" }}>{h.icu}</td>
                      <td style={{ padding:"11px" }}>{h.emergency?<Badge label={t.yes} color={G.emerald} />:<Badge label={t.no} color={G.slate} />}</td>
                      <td style={{ padding:"11px", fontWeight:700, color:G.gold }}>⭐{h.rating}</td>
                      <td style={{ padding:"11px" }}>{h.ambulance?"🚑":"-"}</td>
                      <td style={{ padding:"11px" }}><Badge label={t.active} color={G.emerald} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="glass" style={{ padding:22, borderRadius:20, marginBottom:22 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
            <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15 }}>{t.recentApts}</h3>
            <button onClick={() => notify(t.nAllApts,"info")} style={{ fontSize:12, color:G.teal, background:"none", border:"none", cursor:"pointer", fontWeight:600 }}>{t.viewAll}</button>
          </div>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
              <thead>
                <tr>{[t.tPatient,t.tDoctor,t.tDept,t.tDate,t.tTime,t.tStatus,t.tFee].map(h=><th key={h} style={{ padding:"7px 11px", textAlign:"left", color:"var(--text2)", fontWeight:600, whiteSpace:"nowrap", borderBottom:"1px solid var(--border)" }}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {SAMPLE_APPOINTMENTS.map(apt => (
                  <tr key={apt.id} style={{ borderBottom:"1px solid var(--border)" }}>
                    <td style={{ padding:"11px", color:"var(--text)", fontWeight:600 }}>{language==="en"?apt.patientEn:apt.patientBn}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{language==="en"?apt.doctorEn:apt.doctorBn}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{apt.spec}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{apt.date}</td>
                    <td style={{ padding:"11px", color:"var(--text2)" }}>{apt.time}</td>
                    <td style={{ padding:"11px" }}><Badge label={statusLabel(apt.status)} color={SC[apt.status]} /></td>
                    <td style={{ padding:"11px", fontWeight:700, color:G.teal }}>{fmt(apt.fee)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass" style={{ padding:22, borderRadius:20 }}>
          <h3 style={{ fontWeight:700, color:"var(--text)", fontSize:15, marginBottom:18 }}>{t.topDoctors}</h3>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))", gap:14 }}>
            {[...DOCTORS].sort((a,b)=>b.rating-a.rating).slice(0,4).map((doc,i) => (
              <div key={doc.id} className="glass" style={{ padding:14, borderRadius:13, display:"flex", gap:11, alignItems:"center" }}>
                <div style={{ fontSize:20, fontWeight:800, color:G.teal, opacity:.35, width:26, flexShrink:0 }}>#{i+1}</div>
                <img src={doc.avatar} alt="" style={{ width:42, height:42, borderRadius:"50%", objectFit:"cover", background:"var(--surface2)" }} />
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:600, fontSize:12, color:"var(--text)", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{language==="en"?doc.nameEn:doc.nameBn}</div>
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
const Chatbot = ({ t, language }) => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ id:1, role:"bot", text:t.chatGreeting }]);
  const [inp, setInp] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { setMsgs([{ id:1, role:"bot", text:t.chatGreeting }]); }, [language]);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior:"smooth" }); }, [msgs]);

  const send = async () => {
    const text = inp.trim();
    if (!text) return;
    setInp("");
    setMsgs(m => [...m, { id:Date.now(), role:"user", text }]);
    setTyping(true);
    await delay(700 + Math.random()*600);
    const lower = text.toLowerCase();
    let reply;
    if (/hello|hi|hey|হ্যালো|সালাম|welcome|স্বাগতম/.test(lower)) reply = rand(t.chatReplyGreeting);
    else if (/appointment|book|বুক|অ্যাপয়েন্টমেন্ট/.test(lower)) reply = rand(t.chatReplyApt);
    else if (/emergency|জরুরি|999|ambulance|অ্যাম্বুলেন্স/.test(lower)) reply = rand(t.chatReplyEmerg);
    else if (/pain|fever|sick|symptom|ব্যথা|জ্বর|অসুস্থ|লক্ষণ/.test(lower)) reply = rand(t.chatReplySymptoms);
    else reply = rand(t.chatReplyDefault);
    setTyping(false);
    setMsgs(m => [...m, { id:Date.now()+1, role:"bot", text:reply }]);
  };

  return (
    <>
      <button onClick={() => setOpen(o => !o)} style={{ position:"fixed", bottom:82, right:22, width:54, height:54, borderRadius:"50%", background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, border:"none", cursor:"pointer", fontSize:24, zIndex:900, boxShadow:`0 7px 26px ${G.teal}50`, display:"flex", alignItems:"center", justifyContent:"center", transition:"transform .2s", transform:open?"rotate(45deg)":"none" }}>
        {open?"✕":"💬"}
      </button>
      {open && (
        <div className="fade-up" style={{ position:"fixed", bottom:150, right:22, width:330, height:450, borderRadius:20, overflow:"hidden", zIndex:900, boxShadow:"0 18px 55px rgba(0,0,0,.38)", display:"flex", flexDirection:"column", background:"var(--surface)", border:"1px solid var(--border)" }}>
          <div style={{ padding:"14px 18px", background:`linear-gradient(135deg,${G.teal},${G.tealDark})`, display:"flex", alignItems:"center", gap:9 }}>
            <div style={{ width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,.18)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }}>🤖</div>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:700, color:"#fff", fontSize:13 }}>MediBot AI</div>
              <div style={{ fontSize:10, color:"rgba(255,255,255,.7)", display:"flex", alignItems:"center", gap:3 }}>
                <span style={{ width:5, height:5, borderRadius:"50%", background:"#4ade80" }} /> {t.online}
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background:"none", border:"none", color:"#fff", cursor:"pointer", fontSize:17 }}>×</button>
          </div>
          <div style={{ flex:1, overflowY:"auto", padding:14, display:"flex", flexDirection:"column", gap:9 }}>
            {msgs.map(m => (
              <div key={m.id} style={{ display:"flex", justifyContent:m.role==="user"?"flex-end":"flex-start" }}>
                <div className={`chat-msg ${m.role}`} style={{ padding:"9px 13px", fontSize:12, lineHeight:1.55 }}>{m.text}</div>
              </div>
            ))}
            {typing && (
              <div style={{ display:"flex", gap:4, padding:"9px 13px", background:"var(--surface2)", borderRadius:"17px 17px 17px 4px", width:"fit-content" }}>
                {[0,1,2].map(i => <div key={i} className="a-pulse" style={{ width:5, height:5, borderRadius:"50%", background:G.teal, animationDelay:`${i*.18}s` }} />)}
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="scroll-x" style={{ display:"flex", gap:6, padding:"6px 12px", borderTop:"1px solid var(--border)" }}>
            {[t.chatQEmergency, t.chatQFind, t.chatQBook].map(q => (
              <button key={q} onClick={() => setInp(q)} style={{ padding:"4px 10px", borderRadius:16, background:`${G.teal}15`, color:G.teal, border:`1px solid ${G.teal}33`, cursor:"pointer", fontSize:11, fontWeight:600, whiteSpace:"nowrap", fontFamily:"'DM Sans',sans-serif" }}>{q}</button>
            ))}
          </div>
          <div style={{ padding:"10px 14px", borderTop:"1px solid var(--border)", display:"flex", gap:7 }}>
            <input className="hms-input" placeholder={t.chatPlaceholder} value={inp} onChange={e => setInp(e.target.value)} onKeyDown={e => e.key==="Enter"&&send()} style={{ fontSize:12, padding:"9px 13px" }} />
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem("medicare_lang") || "bn"; } catch { return "bn"; }
  });

  useEffect(() => { try { localStorage.setItem("medicare_lang", language); } catch {} }, [language]);
  useEffect(() => { injectStyles(); document.body.className = "hms-dark"; }, []);
  useEffect(() => { document.body.className = dark ? "hms-dark" : "hms-light"; }, [dark]);

  const t = T[language];

  const handleBook = doc => {
    setPreDoc(doc);
    setPage("Appointments");
    notify(`${language==="en"?doc.nameEn:doc.nameBn} ${t.nBookingStarted}`,"success");
    window.scrollTo(0, 0);
  };
  const handleLogin = user => { setCurrentUser(user); setIsLoggedIn(true); setShowLogin(false); setShowRegister(false); };
  const handleLogout = () => { setIsLoggedIn(false); setCurrentUser(null); notify(t.loggedOut,"info"); };

  return (
    <div style={{ minHeight:"100vh", background:"var(--bg)" }}>
      <Header
        page={page} setPage={setPage} dark={dark} setDark={setDark}
        role={role} setRole={setRole}
        isLoggedIn={isLoggedIn} currentUser={currentUser}
        onLogin={handleLogin} onLogout={handleLogout}
        language={language} setLanguage={setLanguage}
        onShowLogin={() => { setShowRegister(false); setShowLogin(true); }}
        onShowRegister={() => { setShowLogin(false); setShowRegister(true); }}
        t={t}
      />
      {page==="Home"         && <HomePage         setPage={setPage} setSelectedSpec={setSelectedSpec} t={t} language={language} />}
      {page==="Doctors"      && <DoctorsPage       selectedSpec={selectedSpec} setSelectedSpec={setSelectedSpec} onBookDoctor={handleBook} t={t} language={language} />}
      {page==="Appointments" && <AppointmentsPage  preSelectedDoctor={preDoc} setPreSelectedDoctor={setPreDoc} t={t} language={language} />}
      {page==="Emergency"    && <EmergencyPage     onBookDoctor={handleBook} t={t} language={language} />}
      {page==="Dashboard"    && <DashboardPage     role={role} t={t} language={language} />}
      {showLogin    && <LoginModal    t={t} onClose={() => setShowLogin(false)}    onLogin={handleLogin} onSwitchToRegister={() => { setShowLogin(false); setShowRegister(true); }} />}
      {showRegister && <RegisterModal t={t} onClose={() => setShowRegister(false)} onLogin={handleLogin} onSwitchToLogin={() => { setShowRegister(false); setShowLogin(true); }} />}
      <Chatbot t={t} language={language} />
      <NotificationCenter />
    </div>
  );
}