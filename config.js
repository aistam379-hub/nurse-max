/* =====================================================================
   ⚙️  إعدادات العميل — هذا هو الملف الوحيد الذي تعدّله عند ربط عيادة/مشروع
   Firebase جديد. ضع نسخة مطابقة منه في مجلدات: doctor / nurse / booking.
   لا حاجة للبحث داخل الكود إطلاقاً.
   ===================================================================== */

/* (1) إعدادات مشروع Firebase
   من: Firebase Console → ⚙️ Project settings → Your apps → Web app → SDK config */
window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCiiCoRtixYhVZ6_VhiSSsGFIs4Pa7RxDQ",
  authDomain:        "testtt-fa7b1.firebaseapp.com",
  projectId:         "testtt-fa7b1",
  storageBucket:     "testtt-fa7b1.firebasestorage.app",
  messagingSenderId: "141969438453",
  appId:             "1:141969438453:web:27d05e615da8d77f0f77bc"
};

/* (2) حسابات جوجل للموظفين — نفس هذه الإيميلات يجب أن تُوضع في قواعد Firestore */
window.DOCBOOK_ROLES = {
  doctor: ['nawwacode@gmail.com'],   // ← بريد/بُرُد الطبيب (يمكن أكثر من واحد)
  nurse:  ['ahmadtaim450@gmail.com', 'aistam379@gmail.com']    // ← بريد/بُرُد الممرضة
};

/* (دالة مساعدة — لا تعدّلها) */
window.DOCBOOK_ROLE_OF = function (email) {
  email = (email || '').toLowerCase().trim();
  if ((window.DOCBOOK_ROLES.doctor || []).map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'doctor';
  if ((window.DOCBOOK_ROLES.nurse  || []).map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'nurse';
  return null;
};