const modes = [
  "light-gray1", "light-gray2", "light-beige", "light-purple", "light-pink",
  "dark-gray1", "dark-gray2", "dark-blue", "dark-brown", "dark-red"
];

const translations = {
  ar: {
    welcome: "🙌 أهلاً بيك في اعرفني",
    desc: "سجّل دخول بجوجل، جاوب على شوية أسئلة، وشوف صحابك يعرفوك قد إيه! 🤔",
    login:{
      html: ` سجل دخول بجوجل <i class="fab fa-google me-2"></i> `
    },
    lightGray1: "فاتح - رمادي فاتح جداً",
    lightGray2: "فاتح - رمادي فاتح",
    lightBeige: "فاتح - بيج فاتح",
    lightPurple: "فاتح - بنفسجي فاتح",
    lightPink: "فاتح - بينك فاتح",
    darkGray1: "داكن - أسود ",
    darkGray2: "داكن - رمادي أغمق",
    darkBlue: "داكن - أزرق داكن",
    darkBrown: "داكن - بني غامق",
    darkRed: "داكن - أحمر غامق",
    ownerName: "صاحب التحدي :",
    dashHeader: "جاوب عن نفسك… محدش هيستخبى! 😂يلا نكشف الغشاشين اللي بيقولوا يعرفوك! 🤣",
    q01: " 1️⃣"+"بتفضل الصيف ولا الشتا!!" ,
    q01quiz:"1️⃣"+ " صحبك بيفضل الصيف ولا الشتا",
    summer: "الصيف",
    winter: "الشتا",
    q02: "2️⃣" + "أي نوع من الرحلات تفضل!!",
    q02quiz: "2️⃣" + "أي نوع من الرحلات يفضلها صديقك!!",
    sea: "البحر",
    mountain: "الجبل",
    q03: "3️⃣" + "أكتر حاجة بتحبها ف صحابك!!",
    q03quiz:"3️⃣" + "أكتر حاجة بتحبها ف صحابك!!"+ ".. تفتكر رد صحبك كان اي غع السؤال ده" +"🕵️‍♂️",
    support: "الدعم",
    fun: "المرح",
    love: "الحب والوفاء",
    noFriend: "يا رب سامحني على ذنوبي اللي جابتلي الكائنات دي" + "😂",
    q04: "4️⃣"+ "أكتر حاجة مهمة في حياتك من دول !!",
    q04quiz:"4️⃣"+ "أكتر حاجة مهمة في حيات صحبك من دول !!",
    sleep: "النوم",
    food: "الأكل",
    mobile: "الموبايل",
    laughing: "الضحك",
    q05: "5️⃣"+ "أكتر حيوان بتحبه !!",
    q05quiz:  "5️⃣"+ "أكتر حيوان بتحبه !!" + "تفتكر ايه كان رد صديقك " + "🕵️‍♂️",
    cats: "القطط",
    dogs: "الكلاب",
    horses: "الخيل",
    noAnimal: "مليش ف الكلام ده يعم..خليها علي الله" + "😂",
    q06:  "6️⃣" + "ايه أكتر حاجة ممكن تضحكك من دول!!" +"😂" ,
    q06quiz: "6️⃣" + "ايه أكتر حاجة ممكن تضحك صحبك من دول!!"+"😂",
    bad_joy: "نكتة بايخة جدا"  + "😵‍💫",
    comedian_falling: "لما حد يقع ف الشارع" + "🐒😂",
    old_situation:"لما يفتكر موقف حصل من 3 سنين"+"😂",
    oldSituation:"لما تفتكر موقف حصل من 3 سنين"+"😂",
    important_situation: "لما تتجمعوا ف موضوع مهم"+"😳",
    q07: "7️⃣"+"بتعمل ايه لما تتضايق !!",
    q07quiz: "7️⃣"+"صحبك بيعمل ايه لما يتضايق!!",
    walk_alone: "بيخرج يتمشي لوحده",
    walkAlone: "بتخرج تتمشي لوحدك",
    contact_with_you: "بيكلم حبايبه ويفضفض معاهم",
    contactWithYou: "بتكلم حبايبك تفضفض معاهم",
    post_on_social: "ينشر بوست غامض ع السوشيال ميديا",
    postOnSocial: "تنشر بوست غامض ع السوشيال ميديا",
    keep_silent:"بيفضل ساكت ويفكر مع نفسه",
    keepSilent: "بتفضل ساكت وتفضفض مع نفسك",
    q08: "8️⃣" + "لما يحصل خلاف مع حد .. بتتصرف ازاي غالبا",
    q08quiz: "8️⃣" +"لما يحصل خلاف مع حد .. صحبك بيتصرف ازاي",
    apologise: "بيعتذر حتي لو حس انه مش غلطان",
    Apologise:"بتعتذر حتي لو حاسس انك مش غلطان",
    go_away: "بيبعد ويسيب مساحة",
    goAway: "بتبعد وتسيب مساحة",
    face_direct : "بيواجه بصراحة",
    faceDirect: "بتواجه بصراحة",
    change_way :"بيعديها عادي بس بيغير طريقة التعامل",
    changeWay: "بتعديها عادي بس بتغير طريقة التعامل",
    q09:"9️⃣"+ "بتفضل ايه أكتر , الشاي ولا القهوة !!",
    q09quiz: "9️⃣"+  "صديقك بيفضل ايه أكتر , الشاي ولا القهوة"+"!!"  ,
    coffee: "القهوة",
    tea: "الشاي",
    q10:"🔟"+ "ماهي هوايتك المفضلة؟!",
    q10quiz:"🔟"+"ماهي هواية صديقك المفضلة؟!",
    sport: "الرياضة",
    reading:"القراءة",
    cooking:"الطبخ وافتكاس أكلات جديدة"+"😂",
    hangingOut:"الخروج والفسحة",
    q11:"【11】"+"لو قدرت تعيش يوم واحد مكان أي شخصية مشهورة، تختار مين؟!",
    q11quiz:"【11】"+"لو صحبك قدر يعيش يوم واحد مكان شخصية مشهورة .. تفتكر هيختار ايه؟!",
    actor:"فنان أو ممثل",
    football_player:"لاعب كرة",
    scientist:"عالم أو مخترع",
    foodBlogger:"فود بلوجر"+"😂",
    q12:"【12】" +"أي أنواع اللحوم تحب أكثر؟!",
    q12quiz:"【12】" +"أي أنواع اللحوم يفضل صديقك ؟!",
    red_meat:"اللحوم الحمرا(بقر/ضاني)",
    fish: "الأسماك",
    chicken:"الفراخ",
    vegetarian:"مليش ف الكلام ده .. اني نباتي يعم"+"😂",
    vegetarianQuiz:"ملوش ف الكلام ده ..ده نباتي يعم" +"😂",
    q13:"【13】"+"تفضّل تكون أنهي نوع من الناس؟!",
    q13quiz:"【13】"+"تفضّل تكون أنهي نوع من الناس؟!"+"..خمن اجابة صاحبك",
    one:"شخص عنده فكرة في مجالات كتير حتى لو مش متعمق فيها",
    two:" شخص متخصص ومُتقن في مجال واحد بس",
    q14: "【14】" + "إيه اللون اللي بيمثّلك أو بتحس إنك بترتاح له أكتر؟!",
    q14quiz: "【14】" + "إيه اللون اللي بيمثّل صديقك أو بيحس إنه بيريح له أكتر؟!",
    red: "الأحمر – القوة والطاقة",
    blue: "الأزرق – الهدوء والراحة", 
    green: "الأخضر – التوازن والطبيعة",
    black: "الأسود – العمق والتميّز",
    q15: "【15】" + "لو خيّروك تعيش في مكان واحد طول عمرك، تختار إيه؟ !",
    q15quiz: "【15】" + "لو صحبك خيّروه يعيش في مكان واحد طول عمره، هيختار إيه؟ !",
    naval: "على البحر والجو معتدل",
    no_matter: "في أي حتة، المهم الناس اللي حواليّ"+ " 😂",
    city: "مدينة كبيرة مليانة حركة وحياة",
    village: "قرية هادية وطبيعة",
    q16: "【16】" + "بتحب أنهي نوع من أنواع المحشي؟ 😂",
    q16quiz: "【16】" + "صحبك بيحب أنهي نوع من أنواع المحشي؟ 😂",
    cabbage: "الكرنب",
    grape_leaves: "ورق العنب",
    egg_plant: "البتنجان",
    no_stuffed_vg: "الانسان طلع القمر ونتو لسة بتاكلوا محشي 😂",
    q17: "【17】"+"إنت من النوع اللي بياخد قراراته إزاي؟",
    q17quiz: "【17】"+"صحبك من النوع اللي بياخد قراراته إزاي؟",
    trust: "بسرعة وبثقة",
    thinking: "بعد تفكير عميق",
    opinions: "بالمشورة مع الأهل والأصدقاء", 
    hesitate: "بتردد كتير قبل القرار",
    q18: "【18】"+"لو اتعرضت لموقف محرج قدام ناس، بتتصرف إزاي؟",
    q18quiz: "【18】"+"لو اتعرض صديقك لموقف محرج قدام ناس، بيتصرف إزاي؟",
    kid: "بضحك على نفسي واقلبها هزار ",
    kidquiz: "بيضحك على نفسه ويقلبها هزار ",
    evade: "بتهرب من الموقف",
    evadequiz: "بيتهرب من الموقف",
    pretend: "بتصنع الثقة كإن مفيش حاجة حصلت",
    pretendquiz: "بيتصنع الثقة كإن مفيش حاجة حصلت",
    tense: "بتوتر ودماغي تفضل تعيد اللحظة مليون مرة ",
    tensequiz: "بيتوتر ودماغه تفضل تعيد اللحظة مليون مرة ",
    q19: "【19】"+"لو ليك مطلق الحرية تبدأ مشروع خاص، تختار إيه؟",
    q19quiz: "【19】"+"لو ليك مطلق الحرية تبدأ مشروع خاص، تختار إيه؟" + "..خمن اجابة صاحبك",
    on_the_ground: "على الأرض (زي محل أو خدمة فعلية)",
    online: "أونلاين (زي موقع أو تطبيق)",
    learning_center: "مركز تعليمي (زي ورشة أو مركز تدريب)",
    youtube_channel: "قناة يوتيوب (زي مدونة فيديو أو قناة تعليمية)",
    q20: "【20】"+"إيه أقرب سورة لقلبك؟"+"🕊️",
    q20quiz: "【20】"+"إيه أقرب سورة لقلب صديقك؟"+"🕊️",
    AlTawba: "التوبة"+"📖",
    Youssuf: "يوسف"+"📖",
    AlEsraa: "الإسراء"+"📖",
    Maryam: "مريم"+"📖",
    AlHEJR: "الحجر"+"📖",
    Yacin: "يس"+"📖",
    AlRahman: "الرحمن"+"📖",
    AlNasr: "النصر"+"📖",
    q21: "【21】"+"ايه أقرب قصة قرآنية لقلبك؟"+"📜",
    q21quiz: "【21】"+"ايه أقرب قصة قرآنية لقلب صديقك؟"+"📜",
    People_of_the_Ditch: "أصحاب الأخدود",
    Qarun: "قارون",
    People_of_the_Cave: "أصحاب الكهف",
    Talut_and_Jalut: "طالوت وجالوت",
    q22: "【22】"+"ايه الصفة اللي بتحب تكون موجودة فيك متأسيا بالصحابة الكرام؟"+"🕌",
    q22quiz: "【22】"+"ايه الصفة اللي صحبك يحب تكون موجودة فيه متأسيا بالصحابة الكرام؟"+"🕌",
    Mercy: "الرحمة – أبو بكر الصديق (رضي الله عنه)",
    justice: "العدالة والشدة في أمر الحق – عمر بن الخطاب (رضي الله عنه)",
    Knowledge: "العلم – علي بن أبي طالب (رضي الله عنه)",
    wisdom: "الحنكة العسكرية والعبقرية الاستراتيجية – خالد بن الوليد (رضي الله عنه)",
    q23:"【23】📚 لو خيروك ترجع للماضي أو تروح للمستقبل، تختار إيه؟",
    q23quiz:"【23】📚 لو صحبك خيروه يرجع للماضي أو يروح للمستقبل، هيختار إيه؟",
    past: "الماضي",
    future: "المستقبل",
    q24:"【24】😅 لو خيروك تاكل بيضة نية أو لمونة بقشرها، تختار إيه؟",
    q24quiz:"【24】😅 لو صحبك خيروه ياكل بيضة نية أو لمونة بقشرها، هيختار إيه؟",
    raw_egg: "بيضة نية",
    lemon: "لمونة بقشرها",
    q25: "【25】" + "وبس كدة يصحبي.. ماتنساش الصلاة علي حبيبك النبي" + " ﷺ",
    q25quiz: "【25】" + "لا ماتقلقش دي درجة ببلاش كدة عشان عارف ظروفك صعبة" + " 😂",
    prophet: "اللهم صل وسلم علي سيدنا محمد ",
    dashSubmit: "احفظ إجاباتك وابدأ التحدي" + " ✨",
    quizSubmit: "احفظ إجابتك يلا بينا نكشف حقيقتك" + " 🕵️‍♂️",
    closeBtn: "إغلاق",
    confirmBtn: "تأكيد",
    required: "من فضلك اختر إجابة لجميع الأسئلة.",
    success: "تم حفظ إجابتك بنجاح!"+" ✅",
    error: "حدث خطأ أثناء الحفظ.",
    emailLabel: "البريد الإلكتروني: ",
    ageLabel: "العمر: ",
    getLink: "احصل علي الرابط",
    createdAt: "تاريخ التسجيل: ",
    friends_StaticBox: "ترتيب أصدقاءك "+ "🏆",
    friendCol : "الصديق",
    emailCol : "البريد الالكتروني",
    trueCol : "الإجابات الصحيحة",
    ratioCol : "نسبة النجاح",
    Quizes_staticBox: "التحديات الل جاوبتها عن أصدقاءك" + "🏆",
    ownerCol: "صاحب التحدي",
    yourTrueCol: "اجاباتك الصحيحة",
    logOut: "تسجيل الخروج 🔓",   
    updateAnswer: "تحديث الإجابة" +" ✏️",
    deleteAccount: "حذف الحساب" + " 🗑️",
    WhatsApp:{
      html: `تواصل معنا عبر واتساب <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' width='20' height='20'>` 
    },
  },
  en: {
    welcome: "🙌 Welcome to E3rafni",
    desc: "Login with Google, answer a few questions, and see how well your friends know you! 🤔",
    login:{
      html: `Login with Google <i class="fab fa-google me-2"></i>`
    },
    lightGray1: "Light - Very Light Gray",
    lightGray2: "Light - Light Gray",
    lightBeige: "Light - Beige",
    lightPurple: "Light - Light Purple",
    lightPink: "Light - Light Pink",
    darkGray1: "Dark - Black",
    darkGray2: "Dark - Darker Gray",
    darkBlue: "Dark - Blue",
    darkBrown: "Dark - Brown",
    darkRed: "Dark - Red",
    ownerName: "Challenge Owner:",
    dashHeader: "Answer about yourself… no hiding!😂 Let’s expose those fake friends who think they know you! 🤣",
    q01: "1️⃣ You prefer summer or winter!!",
    q01quiz:"1️⃣"+ "Your friend prefer summer or winter!!" ,
    summer : "Summer",
    winter : "Winter",
    q02: "2️⃣ You prefer which type of the trips !!",
    q02quiz:"2️⃣ Your friend prefer which type of the trips !!",
    sea: "Sea",
    mountain: "Mountain",
    q03: "3️⃣ The most thing you love in your friends !!",
    q03quiz:"3️⃣" + "The most thing you love in your friends !!"+ "..suggest your friend's REPLY 🕵️‍♂️",
    support: "Support",
    fun: "Fun",
    love: "Love and Loyality",
    noFriend: "😂"+ "يا رب سامحني على ذنوبي اللي جابتلي الكائنات دي" ,
    q04: "4️⃣ The most thing important to you from these !!",
    q04quiz:"4️⃣ The most thing important to your friend from these !!",
    sleep: "Sleep",
    food: "Food",
    mobile: "Mobile",
    laughing: "Laughing",
    q05: "5️⃣ The most animal you like !!",
    q05quiz:"5️⃣ The most animal you like !!"+ "suggest your friend REPLY 🕵️‍♂️",
    cats: "Cats",
    dogs: "Dogs",
    horses: "Horses",
    noAnimal: "مليش ف الكلام ده يعم..خليها علي الله" + "😂",
    q06:"6️⃣" + "The most thing can make you laugh !!😂",
    q06quiz: "6️⃣" + "The most thing can make your friend laugh !!😂",
    bad_joy: "Dad jokes 😵‍💫",
    comedian_falling: " when someone falls in the street 🐒😂",
    old_situation: "when remember a situation from 3 years 😂",
    oldSituation: "when remember a situation from 3 years 😂",
    important_situation: "When the whole gang suddenly becomes serious for once 😳",
    q07: "7️⃣ When you are upset, what's the most likely thing you'd do!!",
    q07quiz: "7️⃣ When your friend is upset, what's the most likely thing they'd do!!",
    walk_alone: "Go for a walk alone",
    walkAlone: "Go for a walk alone",
    contact_with_you: "Talk to you about it",
    contactWithYou: "Talk to your friends about it",
    post_on_social: "Post something vague on Social Media",
    postOnSocial: "Post something vague on Social Media",
    keep_silent:"Stay silent and think with himself",
    keepSilent:"Stay silent and think with your self",
    q08: "8️⃣ When there's a conflict between you and someone else, how do you usually react?",
    q08quiz: "8️⃣ When there's a conflict between your friend and someone else, how do they usually react?",
    apologise: "Apologize even feel they were right",
    Apologise: "Apologize even feel you were right",
    go_away: "Pull away and give space",
    goAway: "Pull away and give space",
    face_direct : "Confront honestly",
    faceDirect : "Confront honestly",
    change_way :"Act like nothing happened BUT change the way",
    changeWay :"Act like nothing happened BUT change the way",
    q09:"9️⃣ which prefer most , Coffe OR Tea !!",
    q09quiz: "9️⃣ which  your friend prefer most , Coffe OR Tea !!",
    coffee: "Coffee",
    tea: "Tea",
    q10:"🔟 What is your favorite hobby?!",
    q10quiz:"🔟  What is your friend`s favorite hobby?!",
    sport: "Sport",
    reading:"Reading",
    cooking:"Cooking",
    hangingOut:"HangingOut",
    q11:"【11】"+"If you could live one day as a famous person, who would you choose to be?!",
    q11quiz:"【11】"+"If your friend could live one day as a famous person, who would HE/SHE chooses to be?",
    actor:" Actor ",
    football_player:"Football Player ",
    scientist:"Scientist ",
    foodBlogger:"Food Blogger"+"😂",
    q12:"【12】" +"What's your favorite type of meat?!",
    q12quiz:"【12】" +"What's your friend`s favorite type of meat?!",
    red_meat:" Red meat (beef/lamb)",
    fish: "Fish and Seafood",
    chicken:"Chicken",
    vegetarian:"Not a big fan of meat / Mostly vegetarian"+"😂",
    vegetarianQuiz:"Not a big fan of meat / Mostly vegetarian"+"😂",
    q13:"【13】Which type of person would you rather be?!",
    q13quiz:"【13】Which type of person would you rather be?!"+"..Guess your friend`s answer!!",
    one:"Someone who knows a bit about many things, even if not deeply",
    two:" Someone who masters one specific field deeply",
    q14: "【14】" + "What color represents you or makes you feel most comfortable?!",
    q14quiz: "【14】" + "What color represents your friend or makes him/her feel most comfortable?!",
    red: "Red – strength and energy",
    blue: " Blue – calm and peace", 
    green: "Green – balance and nature",
    black: "Black – depth and uniqueness",
    q15: "【15】" + "If you could only live in one place for the rest of your life, where would you choose?!",
    q15quiz: "【15】" + "If your friend could only live in one place for the rest of his/her life, where would he/she choose?!",
    naval: "Somewhere by the sea with nice weather",
    no_matter: "Doesn't matter,as long as I'm with the right people 😂",
    city: "A big city full of life and energy",
    village: "A quiet village surrounded by nature",
    q16: "【16】" + "What type of stuffed vegetables do you prefer? 😂",
    q16quiz: "【16】" + "What type of stuffed vegetables does your friend prefer? 😂",
    cabbage: "Cabbage",
    grape_leaves: "Grape Leaves",
    egg_plant: "Eggplant",
    no_stuffed_vg: "الانسان طلع القمر ونتو لسة بتاكلوا محشي 😂",
    q17: "【17】"+"How do you usually make decisions?",
    q17quiz: "【17】"+"How does your friend usually make decisions?",
    trust: "Quickly and confidently",
    thinking: "After deep thought",
    opinions: "With SHura with family and friends",
    hesitate: "With a lot of hesitation before deciding",
    q18: "【18】"+"If you find yourself in an embarrassing situation in front of people, how do you usually react?",
    q18quiz: "【18】"+"If your friend finds himself in an embarrassing situation in front of people, how does he/she usually react?",
    kid: "I laugh at myself and turn it into a joke",
    kidquiz: "He laughs at himself and turns it into a joke",
    evade: "I try to avoid the situation",
    evadequiz: "He tries to avoid the situation",
    pretend: "I act confident as if nothing happened",
    pretendquiz: "He acts confident as if nothing happened",
    tense: "I get tense and replay the moment in my head a million times",
    tensequiz: "He gets tense and replays the moment in his head a million times",
    q19: "【19】"+"If you had the freedom to start your own project, what would you choose?",
    q19quiz: "【19】"+"If your friend had the freedom to start his/her own project, what would he/she choose?",
    on_the_ground: "On the ground (like a physical store or service)",
    online: "Online (like a website or app)",
    learning_center: "Learning center (like a workshop or training center)",
    youtube_channel: "YouTube channel (like a vlog or educational channel)",
    q20: "【20】"+"What is the closest Surah to your heart? 🕊️",
    q20quiz: "【20】"+"What is the closest Surah to your friend's heart? 🕊️",
    AlTawba: "At-Tawbah 📖",
    Youssuf: "Yusuf 📖",
    AlEsraa: "Al-Isra 📖",
    Maryam: "Maryam 📖",
    AlHEJR: "Al-Hijr 📖",
    Yacin:" Yacin 📖",
    AlRahman: "Ar-Rahman 📖",
    AlNasr: "An-Nasr 📖",
    q21: "【21】"+"What is the closest Quranic story to your heart? 📜",
    q21quiz: "【21】"+"What is the closest Quranic story to your friend's heart? 📜",
    People_of_the_Ditch: "People of the Ditch",
    Qarun: "Qarun",
    People_of_the_Cave: "People of the Cave",
    Talut_and_Jalut: "Talut and Jalut",
    q22: "【22】Which quality do you most love having in yourself, inspired by the noble companions?🕌",
    q22quiz: "【22】Which quality do you think your friend loves having in himself/herself, inspired by the noble companions?🕌",
    Mercy:"Mercy – Abu Bakr Al-Siddiq (may Allah be pleased with him)",
    justice:"Justice – Umar ibn Al-Khattab (may Allah be pleased with him)",
    Knowledge:"Knowledge – Ali ibn Abi Talib (may Allah be pleased with him)",
    wisdom:"Strategic wisdom and military genius – Khalid ibn Al-Walid (may Allah be pleased with him)",
    q23: "【23】📚 If you had to choose between going back to the past or going to the future, which would you choose?",
    q23quiz: "【23】📚 If your friend had to choose between going back to the past or going to the future, which would he/she choose?",
    past: "Past",
    future: "Future",
    q24: "【24】😅 If you had to choose between eating a raw egg or a lemon with its peel, which would you choose?",
    q24quiz: "【24】😅 If your friend had to choose between eating a raw egg or a lemon with its peel, which would he/she choose?",
    raw_egg: "Raw Egg",
    lemon: "Lemon with its peel",
    q25: "【25】" + "And that's it, my friend.. Don't forget to send blessings upon your beloved Prophet" + "ﷺ",
    q25quiz: "【25】" + "Don't worry, this is a freebie because I know your situation is tough" + " 😂",
    prophet: "اللهم صل وسلم علي سيدنا محمد ",
    dashSubmit: "Save Answers & Start the Challenge" + " ✨",
    quizSubmit: "Save your answer, let’s see your truth 🕵️‍♂️",
    closeBtn: "Close",
    confirmBtn: "confirm",
    required: "Please select an answer for all Qs.",
    success: "Your answer has been saved successfully! ✅",
    error: "An error occurred while saving.",
    emailLabel: "Email: ",
    ageLabel: "Age: ",
    getLink: "Get the URL",
    createdAt: "Login Date: ",
    friends_StaticBox : "Your Friends Ranking 🏆",
    friendCol : "Friend",
    emailCol : "Email",
    trueCol : "Correct Answers",
    ratioCol : "Success Ratio",
    Quizes_staticBox: "CHallenges you answered about your friends 🏆",
    ownerCol: "CHallenge Owner",
    yourTrueCol: "Your correct answers",
    logOut: "Log Out 🔓",
    updateAnswer: "Update Answer ✏️",
    deleteAccount: "Delete Account 🗑️",
    WhatsApp: {
      html: `Contact us on WhatsApp <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' width='20' height='20'>`,
    }
  }
}



// بتغير الوضعية عند اختيارها من السيلكت
function changeMode(value) {
  if (!modes.includes(value)) return;

  // تغيير خلفية الصفحة
  modes.forEach(mode => document.body.classList.remove(mode));
  document.body.classList.add(value);
  localStorage.setItem('mode', value);

  // زر جوجل
  const btn = document.querySelector('.google-btn');
  if (btn) {
    btn.classList.remove('light', 'dark');
    if (value.startsWith('dark')) {
      btn.classList.add('dark');
    } else {
      btn.classList.add('light');
    }
  }

  // تغيير لون النصوص في الهيدر بتاع الداشبورد
  const dashHeader = document.querySelector('.dashHeader');
  if (dashHeader) {
    
    if (value.startsWith('dark')) {
      dashHeader.style.color = '#fff';
    } else {
      dashHeader.style.color = '#000';
    }
  }

// تغيير لون النصوص في الهيدر بتاع الكويز
  const quizHeader = document.querySelector('#quizHeader');
  if (quizHeader) {
    
    if (value.startsWith('dark')) {
      quizHeader.style.color = '#fff';
    } else {
      quizHeader.style.color = '#000';
    }
  }
  // تغيير لون النصوص في الهيدر بتاع صاحب التحدي
  const quizOwner = document.querySelector('#quizOwner');
  if (quizOwner) {
    
    if (value.startsWith('dark')) {
      quizOwner.style.color = '#fff';
    } else {
      quizOwner.style.color = '#000';
    }
  }


  const confirm_message = document.querySelector('#confirm-message');
  if (confirm_message) {
    
    if (value.startsWith('dark')) {
      confirm_message.style.color = '#fff';
    } else {
      confirm_message.style.color = '#000';
    }
  }
  // قائمة اللغة
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.classList.remove("language-light", "language-dark");
    if (value.startsWith("dark")) {
      langSelect.classList.add("language-dark");
    } else {
      langSelect.classList.add("language-light");
    }
  }

  // تغيير شكل الـ Navbar مع إزالة الكلاسات غير المرغوب فيها وإضافة الخلفية المناسبة
  const nav = document.getElementById('mainNav');
  if (nav) {
    modes.forEach(mode => nav.classList.remove(mode));
    nav.classList.remove('bg-body-tertiary', 'bg-light', 'bg-dark', 'navbar-light', 'navbar-dark');

    nav.classList.add(value);

    if (value.startsWith('dark')) {
      nav.classList.add('navbar-dark');
      nav.classList.add('bg-dark');
    } else {
      nav.classList.add('navbar-light');
      nav.classList.add('bg-light');
    }
  }

  // ✅ أضف الكود ده هنا في الآخر لتحديث الصورة:
  const userPhoto = document.getElementById('userPhoto');
  const userName = document.getElementById('userName')?.textContent;
  if (userPhoto && userName && userPhoto.src.includes('data:image/svg+xml')) {
    userPhoto.src = generateAvatar(userName);
  };

window.updateOwnerNameColors?.();
window.updateModalColor?.();
window.updateStaticBlockColors?.();
  
};
// بتغير اللغة عند اختيارها من السيلكت
function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // تحديث النصوص
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
     const translation = translations[lang]?.[key];
 
    if (translation) {
      if (typeof translation === 'object' && translation.html) {
        el.innerHTML = translation.html;
      } else if(el.tagName === "OPTION") {
        el.innerText = translation;
      }else {
        el.innerHTML = translation;
      }
    }
  });
    window.getQuizHeader?.();
    window.fetchUserDataByToken ?.();
    if (window._correctCount !== undefined && window._totalQuestions !== undefined) {
      window.renderResultText?.(window._correctCount, window._totalQuestions);
  }





      // تغيير اتجاه الصفحة
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  // تغيير كلاس اللغة عشان نتحكم في التنسيق
  document.body.classList.toggle("lang-en", lang === "en");
  document.body.classList.toggle("lang-ar", lang === "ar");




  };



// ====================
const mainGoogleLoginBtn = document.getElementById('mainGoogleLoginBtn');
  if (mainGoogleLoginBtn) {
  mainGoogleLoginBtn.addEventListener('click', () => {
    // هنا بقى اعمل ريديركت للـ جوجل
    window.location.href = `https://knowme-backend-production-b054.up.railway.app/auth/google`;
  });
};






// جعل الدوال متاحة للاستخدام من الـ HTML
window.setLanguage = setLanguage;
window.changeMode = changeMode;






// الدوال الل بتتنفذ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  let savedMode = localStorage.getItem('mode') || 'light-gray2';
  if (!modes.includes(savedMode)) savedMode = 'light-gray2';
  changeMode(savedMode);

  const modeSelect = document.querySelector('.mode-select');
  if (modeSelect) modeSelect.value = savedMode;

  const savedLang = localStorage.getItem('lang') || 'ar';
  setLanguage(savedLang);

  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = savedLang;

});