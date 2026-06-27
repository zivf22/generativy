/* -------------------------------------------------------------
 * Festival Website Application Logic
 * ------------------------------------------------------------- */

// -------------------------------------------------------------
// 1. Data Definitions (Events & Lectures List)
// -------------------------------------------------------------
const eventsData = [
  {
    id: 1,
    name: { he: 'ערב פתיחה', en: 'Opening Evening', ar: 'أمسية الافتتاح' },
    date: '01.07',
    time: '17:00',
    location: { he: 'חלל מרכזי', en: 'Main Hall', ar: 'القاعة الرئيسية' },
    locationKey: 'main-hall',
    tag: { he: 'אירוע', en: 'Event', ar: 'فعالية' },
    tagKey: 'event',
    lecturer: { he: 'צוות הפסטיבל', en: 'Festival Directors', ar: 'مديرو المهرجان' },
    description: {
      he: 'פתיחת שבוע העיצוב לקהל הרחב. לצד חשיפת התערוכות והמיצבים, יהפוך המתחם לחלל תוסס של עיצוב וטכנולוגיה.',
      en: 'Grand opening of Design Week. Alongside exhibitions and installation launches, the compound becomes a vibrant design hub.',
      ar: 'الافتتاح الكبير لأسبوع التصميم. إلى جانب المعارض والتجهيزات، يتحول المجمع إلى مساحة حيوية للتصميم والتكنولوجيا.'
    },
    topics: {
      he: ['מופעי מוזיקה חיה', 'מיצגי אור', 'עמדות הדפסה דיגיטליות'],
      en: ['Live music performances', 'Light projections', 'Interactive screen printing stations'],
      ar: ['عروض موسيقية حية', 'عروض ضوئية', 'محطات طباعة شاشات تفاعلية']
    },
    question: {
      he: 'האם המפגש בין הפיזי לדיגיטלי יוצר מסורת חדשה?',
      en: 'Does the encounter between physical and digital create a new tradition?',
      ar: 'هل يخلق اللقاء بين المادي والرقمي تقليدًا جديدًا؟'
    }
  },
  {
    id: 2,
    name: { he: 'דור הטיקטוק מול אלף שנות מסורת', en: 'TikTok Generation vs. 1000 Years of Tradition', ar: 'جيل التيك توك مقابل ألف عام من التراث' },
    date: '02.07',
    time: '17:00',
    location: { he: 'חלל מרכזי', en: 'Main Hall', ar: 'القاعة الرئيسية' },
    locationKey: 'main-hall',
    tag: { he: 'הרצאה', en: 'Lecture', ar: 'محاضرة' },
    tagKey: 'lecture',
    lecturer: { he: 'פרופ׳ שירה לוי', en: 'Prof. Shira Levi', ar: 'أ.د. شيرا ليفي' },
    description: {
      he: 'הרצאה הבוחנת כיצד הדורות הצעירים צורכים מורשת תרבותית באמצעות פלטפורמות דיגיטליות מהירות וכיצד ניתן לתווך ידע מסורתי בצורה מודרנית.',
      en: 'A lecture examining how younger generations consume cultural heritage through fast digital platforms and how to intermediate traditional knowledge modernly.',
      ar: 'محاضرة تبحث في كيفية استهلاك الأجيال الشابة للتراث الثقافي من خلال منصات رقمية سريعة وكيفية نقل المعرفة التقليدية بشكل حديث.'
    },
    topics: {
      he: ['צריכת תוכן תרבותי ברשתות', 'פירור מידע מול העמקה', 'כלים לפיתוח שימור מודרני'],
      en: ['Cultural consumption online', 'Micro-learning vs. Deep dive', 'Tools for modern preservation'],
      ar: ['الاستهلاك الثقافي عبر الإنترنت', 'التعلم المصغر مقابل التعمق', 'أدوات للحفظ الحديث']
    },
    question: {
      he: 'איך משמרים עומק היסטורי בפורמט של 15 שניות?',
      en: 'How do you preserve historical depth in a 15-second format?',
      ar: 'كيف نحافظ على العمق التاريخي في قالب مدته 15 ثانية؟'
    }
  },
  {
    id: 3,
    name: { he: 'הזיכרון הדיגיטלי של האנושות', en: 'The Digital Memory of Humanity', ar: 'الذاكرة الرقمية للبشرية' },
    date: '02.07',
    time: '19:00',
    location: { he: 'חלל מרכזי', en: 'Main Hall', ar: 'القاعة الرئيسية' },
    locationKey: 'main-hall',
    tag: { he: 'הרצאה', en: 'Lecture', ar: 'محاضرة' },
    tagKey: 'lecture',
    lecturer: { he: 'איתן פלג', en: 'Eitan Peleg', ar: 'إيتان بيليج' },
    description: {
      he: 'כיצד הטכנולוגיה מאפשרת לאנושות לשמר את הזיכרון הקולקטיבי שלה - מסיפורים ומסורות עתיקות ועד אתרי מורשת, שפות, מוזיקה ואמנות מסורתית. ההרצאה תבחן כיצד ארכיונים דיגיטליים, סריקות תלת-ממד, בינה מלאכותית ומאגרי מידע עולמיים מסייעים לשמר תרבויות ועדות לדורות הבאים.',
      en: 'How technology allows humanity to preserve collective memory - from ancient stories and traditions to heritage sites, languages, music, and traditional art. Explores digital archives, 3D scanning, and AI.',
      ar: 'كيف تتيح التكنولوجيا للبشرية الحفاظ على الذاكرة الجماعية - من القصص والتقاليد القديمة إلى مواقع التراث واللغات والموسيقى والفنون التقليدية. تبحث في الأرشيفات الرقمية، والمسح ثلاثي الأبعاد والذكاء الاصطناعي.'
    },
    topics: {
      he: ['שימור מסורות וידע שעברו בעל פה', 'דיגיטציה של חפצים וכתבי יד', 'השפעת בינה מלאכותית על המורשת התרבותית'],
      en: ['Preservation of oral traditions', 'Digitization of artifacts and manuscripts', 'Impact of AI on cultural heritage accessibility'],
      ar: ['الحفاظ على التقاليد الشفوية', 'رقمنة القطع الأثرية والمخطوطات', 'تأثير الذكاء الاصطناعي على سهولة الوصول إلى التراث الثقافي']
    },
    question: {
      he: 'האם הטכנולוגיה רק מתעדת את העבר, או שהיא גם מעצבת את הדרך שבה נזכור אותו?',
      en: 'Does technology merely document the past, or does it shape how we will remember it?',
      ar: 'هل تكتفي التكنولوجيا بتوثيق الماضي، أم أنها تشكل أيضًا الطريقة التي سنتذكره بها؟'
    }
  },
  {
    id: 4,
    name: { he: 'מה נשאר אנושי?', en: 'What Remains Human?', ar: 'ماذا يتبقى إنسانيًا؟' },
    date: '02.07',
    time: '17:00',
    location: { he: 'קומה 2', en: 'Floor 2', ar: 'الطابق الثاني' },
    locationKey: 'floor-2',
    tag: { he: 'הרצאה', en: 'Lecture', ar: 'محاضرة' },
    tagKey: 'lecture',
    lecturer: { he: 'ד״ר רונן ברק', en: 'Dr. Ronen Barak', ar: 'د. رونين باراك' },
    description: {
      he: 'דיון פילוסופי ועיצובי על מקומו של היוצר האנושי בעידן של אלגוריתמי ציור ויצירה אוטומטיים.',
      en: 'A philosophical and design debate on the role of human creators in an era of automatic painting and creation algorithms.',
      ar: 'نقاش فلسفي وتصميمي حول دور المبتكر البشري في عصر خوارزميات الرسم والإنتاج التلقائي.'
    },
    topics: {
      he: ['אמנות גנרטיבית', 'תחושות ומחבר רגשי', 'אותנטיות בעיצוב'],
      en: ['Generative art', 'Emotional connection and author', 'Authenticity in design'],
      ar: ['الفن التوليدي', 'الاتصال العاطفي والمؤلف', 'الأصالة في التصميم']
    },
    question: {
      he: 'האם אלגוריתם מסוגל להרגיש נוסטלגיה?',
      en: 'Can an algorithm feel nostalgia?',
      ar: 'هل تستطيع الخوارزمية الشعور بالحنين؟'
    }
  },
  {
    id: 5,
    name: { he: 'מזרח למערב', en: 'East to West', ar: 'من الشرق إلى الغرب' },
    date: '02.07',
    time: '19:00',
    location: { he: 'קומה 2', en: 'Floor 2', ar: 'الطابق الثاني' },
    locationKey: 'floor-2',
    tag: { he: 'הרצאה', en: 'Lecture', ar: 'محاضرة' },
    tagKey: 'lecture',
    lecturer: { he: 'יסמין עבדאללה', en: 'Yasmin Abdallah', ar: 'ياسمين عبد الله' },
    description: {
      he: 'השפעת ערבסק ועיטורים קלאסיים מהמזרח התיכון על שפות עיצוב מודרניות במערב.',
      en: 'The influence of arabesque and classical Middle Eastern ornamentation on modern Western design languages.',
      ar: 'تأثير الزخارف العربية والكلاسيكية الشرق أوسطية على لغات التصميم الغربية الحديثة.'
    },
    topics: {
      he: ['היסטוריית הערבסק', 'תרגום קודים חזותיים', 'עיטוריות דיגיטלית'],
      en: ['History of Arabesque', 'Translation of visual codes', 'Digital ornamentation'],
      ar: ['تاريخ الزخرفة العربية', 'ترجمة الرموز البصرية', 'الزخرفة الرقمية']
    },
    question: {
      he: 'כיצד תבנית מתמטית מפתחת זהות גיאוגרפית?',
      en: 'How does a mathematical pattern develop geographic identity?',
      ar: 'كيف يطور النمط الرياضي هوية جغرافية؟'
    }
  },
  {
    id: 6,
    name: { he: 'החוט שמחבר דורות', en: 'The Thread Connecting Generations', ar: 'الخيط الذي يربط بين الأجيال' },
    date: '03.07',
    time: '12:30',
    location: { he: 'חלל מרכזי', en: 'Main Hall', ar: 'القاعة الرئيسية' },
    locationKey: 'main-hall',
    tag: { he: 'הרצאה', en: 'Lecture', ar: 'محاضرة' },
    tagKey: 'lecture',
    lecturer: { he: 'מרים רוזן', en: 'Miriam Rosen', ar: 'مريم روزن' },
    description: {
      he: 'מלאכת יד, רקמה וטקסטיל ככלי להעברת סיפורים בין-דוריים וכיצד הם משתקפים בקוד מחשב.',
      en: 'Handicraft, embroidery, and textiles as a medium for intergenerational storytelling and how they mirror in computer code.',
      ar: 'الحرف اليدوية والتطريز والمنسوجات كوسيلة لسرد القصص عبر الأجيال وكيف تنعקס في رموز الكمبيوتر.'
    },
    topics: {
      he: ['רקמה מסורתית', 'עיצוב קוד גנרטיבי', 'סיפור דרך סיבים'],
      en: ['Traditional embroidery', 'Generative code design', 'Storytelling through fibers'],
      ar: ['التطريز التقليدي', 'تصميم الرموز التوليدية', 'سرد القصص من خلال الألياف']
    },
    question: {
      he: 'האם שורת קוד שקולה ללולאת חוט רקום?',
      en: 'Is a line of code equivalent to a loop of embroidered thread?',
      ar: 'هل سطر البرمجة يعادل حلقة من خيط مطرز؟'
    }
  },
  {
    id: 7,
    name: { he: 'זרעי מורשת', en: 'Seeds of Heritage', ar: 'بذور التراث' },
    date: '03.07',
    time: '13:00',
    location: { he: 'קומה 2', en: 'Floor 2', ar: 'الطابق الثاني' },
    locationKey: 'floor-2',
    tag: { he: 'הרצאה', en: 'Lecture', ar: 'محاضرة' },
    tagKey: 'lecture',
    lecturer: { he: 'דניאל כהן', en: 'Daniel Cohen', ar: 'دانيال كوهين' },
    description: {
      he: 'ארכיוני זרעים מסורתיים מול שימור ממוחשב של מגוון ביולוגי צמחי.',
      en: 'Traditional seed archives vs. computer preservation of plant biodiversity.',
      ar: 'أرشيفات البذور التقليدية مقابل الحفاظ الحسابي على التنوع البيولوجي النباتي.'
    },
    topics: {
      he: ['שימור זרעי קדם', 'הדמיית תלת-ממד בוטנית', 'קיימות ומסורת'],
      en: ['Ancient seed preservation', 'Botanical 3D rendering', 'Sustainability and tradition'],
      ar: ['الحفاظ على البذور القديمة', 'التجسيم النباتي ثلاثي الأبعاد', 'الاستدامة والتقاليد']
    },
    question: {
      he: 'האם ניתן לקודד את עתיד החקלאות בקוד פתוח?',
      en: 'Can the future of agriculture be coded in open source?',
      ar: 'هل يمكن ترميز مستقبل الزراعة في كود مفتوح المصدر؟'
    }
  },
  {
    id: 8,
    name: { he: 'אריגה דיגיטלית', en: 'Digital Weaving', ar: 'النسيج الرقمي' },
    date: '02-06.07',
    time: '14:00-20:00',
    location: { he: 'חלל מרכזי', en: 'Main Hall', ar: 'القاعة الرئيسية' },
    locationKey: 'main-hall',
    tag: { he: 'סדנא', en: 'Workshop', ar: 'ورشة عمل' },
    tagKey: 'workshop',
    lecturer: { he: 'סטודיו פיקסל', en: 'Pixel Studio', ar: 'استوديو بكسل' },
    description: {
      he: 'סדנה מעשית שבה המשתתפים מתנסים בנולי אריגה קלאסיים המופעלים ומתוכנתים באמצעות קוד מחשב.',
      en: 'Hands-on workshop where participants program and run classical weaving looms via computer code.',
      ar: 'ورشة عمل تطبيقية يقوم فيها المشاركون ببرمجة وتشغيل نول النسيج الكلاسيكي عبر كود الكمبيوتر.'
    },
    topics: {
      he: ['עבודה עם נול דיגיטלי', 'תרגום קובצי תמונה לדפוס ארוג', 'התנסות ידנית'],
      en: ['Digital loom operation', 'Translating image files into woven patterns', 'Manual crafting experience'],
      ar: ['تشغيل النول الرقمي', 'ترجمة ملفات الصور إلى أنماط منسوجة', 'تجربة حرفية يدوية']
    },
    question: {
      he: 'כיצד תמונה דיגיטלית הופכת לחומר פיזי ארוג?',
      en: 'How does a digital image transform into woven physical material?',
      ar: 'كيف تتحول الصورة الرقمية إلى مادة مادية منسوجة؟'
    }
  },
  {
    id: 9,
    name: { he: 'מהאריח למסך', en: 'From Tile to Screen', ar: 'من البلاط إلى الشاشة' },
    date: '02-06.07',
    time: '14:00-20:00',
    location: { he: 'קומה 2', en: 'Floor 2', ar: 'الطابق الثاني' },
    locationKey: 'floor-2',
    tag: { he: 'סדנא', en: 'Workshop', ar: 'ورشة عمل' },
    tagKey: 'workshop',
    lecturer: { he: 'קולקטיב פאטרנז', en: 'Patterns Collective', ar: 'تجمع الأنماط' },
    description: {
      he: 'סדנת יצירת פסיפסים וקליגרפיה ואינטגרציה שלהם לממשקי אינטרנט דינמיים.',
      en: 'A workshop on creating mosaics and calligraphy and integrating them into dynamic web interfaces.',
      ar: 'ورشة عمل حول إنشاء الفسيفساء والخط ودمجها في واجهات الويب الديناميكية.'
    },
    topics: {
      he: ['עבודה באבני פסיפס', 'עיצוב פונט קליגרפי', 'אנימציה מבוססת תבנית'],
      en: ['Working with mosaic stones', 'Calligraphic font design', 'Pattern-based web animation'],
      ar: ['العمل مع أحجار الفسيفساء', 'تصميم خط اليد', 'الرسوم المتحركة المستندة إلى الأنماط']
    },
    question: {
      he: 'איך לתרגם אבנים קשיחות לפיקסלים נוזליים?',
      en: 'How do you translate solid stones into liquid pixels?',
      ar: 'كيف تترجم الأحجار الصلبة إلى بكسلات سائلة؟'
    }
  },
  {
    id: 10,
    name: { he: 'זיכרון דיגיטלי', en: 'Digital Memory Workshop', ar: 'ورشة الذاكرة الرقمية' },
    date: '02-06.07',
    time: '14:00-20:00',
    location: { he: 'קומה 2', en: 'Floor 2', ar: 'الطابق الثاني' },
    locationKey: 'floor-2',
    tag: { he: 'סדנא', en: 'Workshop', ar: 'ورشة عمل' },
    tagKey: 'workshop',
    lecturer: { he: 'ארכיון ירושלים', en: 'Jerusalem Archive', ar: 'أرشيف القدس' },
    description: {
      he: 'סריקה תלת-ממדית של חפצים אישיים ישנים והמרתם לפסלים וקבצים דיגיטליים.',
      en: '3D scanning of personal old artifacts and converting them into digital sculptures and files.',
      ar: 'مسح ثلاثي الأبعاد للمقتنيات الشخصية القديمة وتحويلها إلى منحوتات وملفات رقمية.'
    },
    topics: {
      he: ['מניפולציות סריקת תלת-ממד', 'שימור מטא-דאטה משפחתי', 'בניית מוזיאון אישי'],
      en: ['3D scanning manipulation', 'Preserving family metadata', 'Building a virtual museum'],
      ar: ['التلاعب بالمسح ثلاثي الأبعاد', 'الحفاظ على البيانات الوصفية للعائلة', 'بناء متحف افتراضي شخصي']
    },
    question: {
      he: 'איזה ערך רגשי יש לעותק תלת-ממד דיגיטלי?',
      en: 'What emotional value does a 3D digital replica hold?',
      ar: 'ما القيمة العاطفية التي تحملها النسخة الرقمية ثلاثية الأبعاد؟'
    }
  },
  {
    id: 11,
    name: { he: 'Patterns in Motion', en: 'Patterns in Motion', ar: 'أنماط في حركة' },
    date: '02-06.07',
    time: '14:00-20:00',
    location: { he: 'חלל מרכזי', en: 'Main Hall', ar: 'القاعة الرئيسية' },
    locationKey: 'main-hall',
    tag: { he: 'סדנא', en: 'Workshop', ar: 'ورشة عمل' },
    tagKey: 'workshop',
    lecturer: { he: 'דניאל רובין', en: 'Daniel Rubin', ar: 'دانيال روبين' },
    description: {
      he: 'יצירת קוד גנרטיבי ליצירת דפוסים אינטראקטיביים המשתנים לפי תנועת גוף המשתמש.',
      en: 'Writing generative code to build interactive patterns that morph according to user body movement.',
      ar: 'كتابة كود توليدي لإنشاء أنماط تفاعلية تتحول وفقًا لحركة جسم المستخدم.'
    },
    topics: {
      he: ['חיישני תנועה ומצלמות', 'תכנות גנרטיבי', 'מסכי ענק אינטראקטיביים'],
      en: ['Motion sensors and cameras', 'Generative programming', 'Giant interactive screen layouts'],
      ar: ['أجهزة استشعار الحركة والكاميرات', 'البرمجة التوليدية', 'تخطيطات شاشات تفاعلية ضخمة']
    },
    question: {
      he: 'האם הגוף יכול לשמש כמכונת אריגה דינמית?',
      en: 'Can the body serve as a dynamic weaving loom?',
      ar: 'هل يمكن للجسم أن يعمل كنول نسيج ديناميكي؟'
    }
  },
  {
    id: 12,
    name: { he: 'Future Folk', en: 'Future Folk', ar: 'الفولكلور المستقبلي' },
    date: '02-06.07',
    time: '-',
    location: { he: 'חלל מרכזי', en: 'Main Hall', ar: 'القاعة الرئيسية' },
    locationKey: 'main-hall',
    tag: { he: 'תערוכה', en: 'Exhibition', ar: 'معرض' },
    tagKey: 'exhibition',
    lecturer: { he: 'מעצבים בינלאומיים', en: 'International Designers', ar: 'مصممون دوليون' },
    description: {
      he: 'תצוגת תלבושות עתידניות המבוססות על לבוש פולקלור מסורתי ומשולבות בסיבים אופטיים חכמים.',
      en: 'Display of futuristic costumes based on traditional folklore clothing combined with smart optical fibers.',
      ar: 'عرض أزياء مستقبلية مستوحاة من الملابس الفولكلورية التقليدية المدمجة بالألياف البصرية الذكية.'
    },
    topics: {
      he: ['לבוש חכם', 'מורשת הטקסטיל', 'הדפסות תלת-ממד גמישות'],
      en: ['Wearable tech', 'Textile heritage', 'Flexible 3D print fabrics'],
      ar: ['التكنولوجيا القابلة للارتداء', 'تراث المنسوجات', 'أقمشة طباعة ثلاثية الأبعاد مرنة']
    },
    question: {
      he: 'איך ייראה הלבוש המסורתי בעוד מאה שנה?',
      en: 'What will traditional attire look like in a hundred years?',
      ar: 'كيف سيبدو الزي التقليدي بعد مائة عام؟'
    }
  },
  {
    id: 13,
    name: { he: 'The Living Archive', en: 'The Living Archive', ar: 'الأرشيف الحي' },
    date: '02-06.07',
    time: '-',
    location: { he: 'חלל מרכזי', en: 'Main Hall', ar: 'القاعة الرئيسية' },
    locationKey: 'main-hall',
    tag: { he: 'תערוכה', en: 'Exhibition', ar: 'معرض' },
    tagKey: 'exhibition',
    lecturer: { he: 'ארכיון העיר', en: 'City Archive Project', ar: 'مشروع أرشيف المدينة' },
    description: {
      he: 'תערוכה המשלבת הדמיות ממוחשבות המראות את ההשתנות האורבנית של ירושלים במאות השנים האחרונות.',
      en: 'Exhibition combining computer simulations showing the urban evolution of Jerusalem over the past centuries.',
      ar: 'معرض يجمع بين محاكاة الكمبيوتر التي توضح التطور الحضري لمدينة القدس على مدى القرون الماضية.'
    },
    topics: {
      he: ['שחזורי מציאות מדומה', 'מסמכי היסטוריה גנוזים', 'מיפוי תלת-ממדי'],
      en: ['Virtual Reality reconstructions', 'Classified historical archives', '3D projections on building facades'],
      ar: ['إعادة بناء الواقع الافتراضي', 'أرشيفات تاريخية سرية', 'إسقاطات ثلاثية الأبعاد على واجهات المباني']
    },
    question: {
      he: 'האם זיכרון עירוני יכול להישמר ללא אבנים?',
      en: 'Can urban memory be preserved without stones?',
      ar: 'هل يمكن الحفاظ على ذاكرة المدينة بدون حجارة؟'
    }
  },
  {
    id: 14,
    name: { he: 'Digital Threads', en: 'Digital Threads', ar: 'خيوط رقمية' },
    date: '02-06.07',
    time: '-',
    location: { he: 'קומה 3', en: 'Floor 3', ar: 'الطابق الثالث' },
    locationKey: 'floor-3',
    tag: { he: 'תערוכה', en: 'Exhibition', ar: 'معرض' },
    tagKey: 'exhibition',
    lecturer: { he: 'קבוצת תהודה', en: 'Resonance Group', ar: 'مجموعة الرنين' },
    description: {
      he: 'תערוכת אמנות שקועה המציגה מיצבים שנוצרו על ידי אלגוריתמי מחשב המבוססים על דפוסים אתניים.',
      en: 'An immersive art exhibition presenting installations created by computer algorithms based on ethnic patterns.',
      ar: 'معرض فني غامر يقدم تجهيزات أنشأتها خوارزميات الكمبيوتر بناءً على أنماط عرقية.'
    },
    topics: {
      he: ['תלת-ממד גנרטיבי', 'אמנות אורקולית', 'אדריכלות אלגוריתמית'],
      en: ['Generative 3D', 'Audio-visual installations', 'Algorithmic architecture'],
      ar: ['ثلاثي الأبعاد التوليدي', 'تجهيزات صوتية وبصرية', 'عمارة خوارزمية']
    },
    question: {
      he: 'האם התרבות מורכבת מקוד גנטי מתמטי?',
      en: 'Is culture composed of mathematical genetic code?',
      ar: 'هل تتكون الثقافة من كود وراثي رياضي؟'
    }
  },
  {
    id: 15,
    name: { he: 'Past Meets Future', en: 'Past Meets Future', ar: 'الماضي يلتقي بالمستقبل' },
    date: '02-06.07',
    time: '-',
    location: { he: 'קומה 2', en: 'Floor 2', ar: 'الطابق الثاني' },
    locationKey: 'floor-2',
    tag: { he: 'תערוכה', en: 'Exhibition', ar: 'معرض' },
    tagKey: 'exhibition',
    lecturer: { he: 'ליאור זמיר', en: 'Lior Zamir', ar: 'ليئور زامير' },
    description: {
      he: 'מיצב המשלב מנורות שמן עתיקות עם מערכות תאורה חכמות מבוססות חיישנים.',
      en: 'An installation combining ancient oil lamps with smart sensor-based lighting systems.',
      ar: 'تجهيز يجمع بين مصابيح الزيت القديمة وأنظمة الإضاءة الذكية القائمة على أجهزة الاستشعار.'
    },
    topics: {
      he: ['חיישני תאורה אינטראקטיביים', 'שברי חרס עתיקים', 'משחקי אור וצל'],
      en: ['Interactive light sensors', 'Ancient pottery shards', 'Play of light and shadow'],
      ar: ['أجهزة استشعار الضوء التفاعلية', 'شظايا الفخار القديم', 'لعبة الضوء والظل']
    },
    question: {
      he: 'איך אש דיגיטלית מתיישבת עם ההיסטוריה?',
      en: 'How does digital fire settle with history?',
      ar: 'كيف تستقر النار الرقمية مع التاريخ؟'
    }
  },
  {
    id: 16,
    name: { he: 'פסיפס דיגיטלי', en: 'Digital Mosaic', ar: 'الفسيفساء الرقمية' },
    date: '02-06.07',
    time: '-',
    location: { he: 'קומה 2', en: 'Floor 2', ar: 'الطابق الثاني' },
    locationKey: 'floor-2',
    tag: { he: 'תערוכה', en: 'Exhibition', ar: 'معرض' },
    tagKey: 'exhibition',
    lecturer: { he: 'בית ספר לעיצוב', en: 'Design Academy', ar: 'أكاديمية التصميم' },
    description: {
      he: 'קיר דיגיטלי ענק המורכב מאלפי פיקסלים צבעוניים המציגים פסיפס חברתי משתנה של תושבי ירושלים.',
      en: 'A giant digital wall composed of thousands of colored pixels displaying a shifting social mosaic of Jerusalemites.',
      ar: 'جدار رقمي ضخم يتكون من آلاف البكسلات الملونة التي تعرض فسيفساء اجتماعية متغيرة لسكان القدس.'
    },
    topics: {
      he: ['קירות אינטראקטיביים', 'דאטה-ויזואליזציה חברתית', 'פסיפס תרבותי'],
      en: ['Interactive digital walls', 'Social data visualization', 'Cultural mosaic patterns'],
      ar: ['جدران تفاعلية', 'تصور البيانات الاجتماعية', 'أنماط الفسيفסاء الثقافية']
    },
    question: {
      he: 'כיצד תושבים מעצבים את הפיקסלים של עירם?',
      en: 'How do citizens shape the pixels of their city?',
      ar: 'كيف يشكل المواطنون بكسلات مدينتهم؟'
    }
  }
];

// -------------------------------------------------------------
// 2. Translations Dictionary
// -------------------------------------------------------------
const translations = {
  he: {
    navMap: 'מפה',
    navPoster: 'יצירת פוסטר',
    navTheme: 'מסורת בעידן הטכנולוגי',
    navEvents: 'אירועים',
    navInfo: 'מידע',
    
    legendTitle: 'חללי הפסטיבל',
    legendMainHall: 'חלל מרכזי (קומת קרקע)',
    legendFloor2: 'קומה 2 (תערוכות ומעבדות)',
    legendFloor3: 'קומה 3 (סטודיו לעיצוב ומגדל)',
    legendCourtyard: 'חצר גינה (במה פתוחה)',
    
    posterTitle: 'יצירת פוסטר פסטיבל',
    posterDesc1: 'במשך מאות שנים תרבויות שונות השתמשו בדוגמאות, אריגים ופסיפסים כדי לספר את סיפורן. עכשיו תורכם ליצור דפוס חדש ולהוסיף את הסיפור שלכם לפסיפס העולמי.',
    posterDesc2: 'צרו. חקרו. שתפו.',
    posterDesc3: 'ציירו על הלוח<br>גלו את הדפוס שנוצר<br>הורידו את הפוסטר שלכם',
    posterDesc4: 'כל דפוס מתחיל בקו אחד - כל מסורת מתחילה בסיפור אחד.',
    btnCanvasReset: 'איפוס',
    btnCanvasSave: 'המשך',
    
    themePageTitle: 'מסורת בעידן הטכנולוגי',
    themePageSubtitle: 'שבוע העיצוב הבינלאומי בירושלים 2026',
    themeP1: 'בעולם שבו הטכנולוגיה מתפתחת בקצב מסחרר, כיצד אנו שומרים על החיבור למסורות, לשפות, לאריגה וליצירה הידנית שהגדירו קהילות ותרבויות במשך מאות שנים? הפסטיבל השנה מתמקד בנקודת המפגש המרתקת שבין העבר הפיזי לעתיד הדיגיטלי.',
    themeQuoteText: '"הטכנולוגיה אינה מחליפה את המסורת; היא מעניקה לה כלים חדשים להיזכר, להתרחב ולהישמר לדורות הבאים."',
    themeP2: 'מעצבים, אמנים וחוקרים מציגים השנה עבודות המפרשות מחדש טכניקות מסורתיות כמו אריגת שטיחים, קליגרפיה, הדפס ידני ופסיפס אבן, תוך שימוש באלגוריתמים של בינה מלאכותית, סריקה תלת-ממדית וממשקי ציור אינטראקטיביים. אנו מזמינים אתכם לחקור את התערוכות, להצטרף לשיח, ולקחת חלק בעיצוב הזיכרון התרבותי של מחר.',
    
    labelThTag: 'תגית',
    labelThLocation: 'מיקום',
    labelThTime: 'שעה',
    labelThDate: 'תאריך',
    labelThName: 'שם',
    
    infoHoursTitle: 'שעות פתיחה',
    infoLocationTitle: 'מיקום',
    infoOpeningTitle: 'ערב פתיחה, יום רביעי, ה-1 ביולי',
    infoAccessibilityTitle: 'נגישות',
    infoContactTitle: 'צרו קשר',
    
    infoLocationDesc1: 'בית הנסן, רחוב גדליהו אלון 14, ירושלים.',
    infoLocationDesc2: 'קווי תחבורה ציבורית קרובים: 13, 18, 85.',
    infoLocationDesc3: 'חפשו בתוכנות הניווט (Waze / Google Maps): בית הנסן.',
    infoOpeningP1: '17:00 - פתיחת שבוע העיצוב לקהל הרחב. בערב הפתיחה, לצד חשיפת התערוכות, המיצבים והחוויות האינטראקטיביות, יהפוך מתחם הפסטביל למרחב חי של תרבות, עיצוב וטכנולוגיה.',
    infoOpeningP2: 'ברחבי המתחם יתקיימו מופעי מוזיקה חיה המשלבים צלילים מסורתיים ועכשוויים, מיצגי אור והקרנות דיגיטליות בהשראת דפוסים ותרבויות מרחבי העולם, ועמדות יצירה אינטראקטיביות שבהן יוכלו המבקרים ליצור דפוסים אישיים ולהפוך אותם לפוסטרים ייחודיים.',
    infoOpeningP3: 'לאורך הערב יתקיימו מיצגים חיים של אמנים ומעצבים, סדנאות פתוחות לקהל, מופעי מחול המשלבים מסורת וחדשנות, וחוויות טכנולוגיות שיציגו דרכים חדשות לשימור והצגת מורשת תרבותית. בנוסף, יפעלו ברחבי המתחם מתחמי אוכל ומשקאות בהשראת מטבחים ותרבויות שונות מרחבי העולם.',
    infoOpeningP4: 'כמיטב מסורת הפסטיבל, ייחתם הערב במופע מרכזי חגיגי שיפגיש בין עבר, הווה ועתיד.',
    infoAccessibilityDesc1: 'התערוכות בשבוע העיצוב יונגשו לקהל הרחב. עם זאת, בשל אופי המבנים ההיסטוריים בהם מוקמות התערוכות, יייתכנו מקומות נקודתיים בהם הנגישות תהיה מוגבלת, אנא עקבו אחר השילוט המקומי במקום.',
    infoAccessibilityDesc2: 'כל המידע המלא בנושא נגישות מופיע באתר שבוע העיצוב ובפרסומים. החניה נגישה ואפשרית בחניון הרכבת הראשונה, חניון גן הפעמון וברחובות הסמוכים לבית הנסן.',
    
    sbCard1Text: 'ההשתתפות בכל האירועים ללא תשלום ובהזמנת כרטיסים מראש.',
    sbCard1BtnText: 'קישור לרכישת כרטיסים',
    sbCard2Text: 'הרשמה להרצאות וסדנאות יש לבצע בחלונית האירועים.',
    sbCard2BtnText: 'מעבר לחלונית האירועים',
    sbWarningText: 'שימו לב כי מספר המקומות מוגבל!',
    
    modalRegTitle: 'הרשמה לאירוע',
    lblRegName: 'שם מלא',
    lblRegEmail: 'כתובת אימייל',
    lblRegTickets: 'מספר כרטיסים',
    btnRegSubmit: 'שלח הרשמה',
    modalSuccessTitle: 'הרשמתך התקבלה בהצלחה!',
    modalSuccessDesc: 'אישור הרשמה וכרטיסי כניסה דיגיטליים נשלחו לכתובת האימייל שהזנת.',
    btnModalSuccessClose: 'סגור',
    
    lecturerPrefix: 'מרצה: ',
    btnRegisterText: 'הרשמה',
    btnRegisterArrow: '↖',
    topicsTitle: 'נושאים מרכזיים',
    questionTitle: 'שאלה מרכזית לדיון',
    
    printSidebarTitle: 'הדפסה',
    labelPrintDest: 'יעד',
    labelPrintCopies: 'עותקים',
    labelPrintColor: 'צבע',
    labelPrintPages: 'דפים',
    labelPrintLayout: 'פריסה',
    labelPrintMore: 'הגדרות נוספות',
    btnPrintSubmit: 'הדפס',
    btnPrintCancel: 'ביטול',
    
    tickerTexts: [
      'פסטיבל העיצוב הבינלאומי',
      'מסורת בעידן הטכנולוגי',
      'שבוע העיצוב ירושלים 2026',
      'בית הנסן',
      'כניסה חופשית'
    ]
  },
  en: {
    navMap: 'Map',
    navPoster: 'Poster Builder',
    navTheme: 'Tradition in the Tech Era',
    navEvents: 'Events',
    navInfo: 'Info',
    
    legendTitle: 'Festival Spaces',
    legendMainHall: 'Main Hall (Ground Floor)',
    legendFloor2: 'Floor 2 (Exhibitions & Labs)',
    legendFloor3: 'Floor 3 (Design Studio & Tower)',
    legendCourtyard: 'Garden Courtyard (Outdoor Stage)',
    
    posterTitle: 'Festival Poster Builder',
    posterDesc1: 'For hundreds of years, different cultures used patterns, weaves, and mosaics to tell their stories. Now it is your turn to create a new pattern and add your story to the global mosaic.',
    posterDesc2: 'Create. Explore. Share.',
    posterDesc3: 'Draw on the board<br>Discover the generated pattern<br>Download your poster',
    posterDesc4: 'Every pattern starts with a single line - every tradition begins with a single story.',
    btnCanvasReset: 'Reset',
    btnCanvasSave: 'Continue',
    
    themePageTitle: 'Tradition in the Tech Era',
    themePageSubtitle: 'Jerusalem International Design Week 2026',
    themeP1: 'In a world evolving at a breakneck speed, how do we preserve our connection to the traditions, languages, weaves, and manual crafts that defined societies for centuries? This year\'s festival focuses on the fascinating intersection between the physical past and the digital future.',
    themeQuoteText: '"Technology does not replace tradition; it provides it with new tools to be remembered, expanded, and preserved for generations to come."',
    themeP2: 'Designers, artists, and researchers present works reimagining classic techniques like carpet weaving, calligraphy, hand printing, and stone mosaic, using AI algorithms, 3D scanning, and interactive drawing boards. We invite you to explore the exhibitions, join the conversations, and shape the cultural memory of tomorrow.',
    
    labelThTag: 'Tag',
    labelThLocation: 'Location',
    labelThTime: 'Time',
    labelThDate: 'Date',
    labelThName: 'Name',
    
    infoHoursTitle: 'Opening Hours',
    infoLocationTitle: 'Location',
    infoOpeningTitle: 'Opening Night, Wednesday, July 1st',
    infoAccessibilityTitle: 'Accessibility',
    infoContactTitle: 'Contact Us',
    
    infoLocationDesc1: 'Hansen House, 14 Gedalyahu Alon St., Jerusalem.',
    infoLocationDesc2: 'Nearby public transit lines: 13, 18, 85.',
    infoLocationDesc3: 'Search GPS Nav (Waze / Google Maps): Hansen House.',
    infoOpeningP1: '17:00 - Design Week opens to the general public. On opening night, alongside the unveiling of exhibitions and interactive installations, the compound will turn into a living space of design and culture.',
    infoOpeningP2: 'Throughout the yard, live music combining traditional and contemporary sounds will take place, alongside light shows and digital projections inspired by world patterns.',
    infoOpeningP3: 'Performances, open workshops, and dance events will be running, bringing together past and future. Food stalls inspired by various international cuisines will be available.',
    infoOpeningP4: 'In festival tradition, the evening will close with a festive keynote performance bridging past, present, and future.',
    infoAccessibilityDesc1: 'Exhibitions are generally accessible. However, due to the historic nature of Hansen House, some points might have limited accessibility. Please follow the local signs.',
    infoAccessibilityDesc2: 'Complete accessibility details are listed in our publications. Parking is available at the First Station park, Liberty Bell park, and adjacent streets.',
    
    sbCard1Text: 'Attendance is free for all events but requires pre-booking tickets.',
    sbCard1BtnText: 'Link to Ticket Shop',
    sbCard2Text: 'Registration for workshops & lectures is done inside the Events tab.',
    sbCard2BtnText: 'Go to Events',
    sbWarningText: 'Please note: capacity is limited!',
    
    modalRegTitle: 'Event Registration',
    lblRegName: 'Full Name',
    lblRegEmail: 'Email Address',
    lblRegTickets: 'Number of Tickets',
    btnRegSubmit: 'Submit Registration',
    modalSuccessTitle: 'Registration Received!',
    modalSuccessDesc: 'Your registration confirmation and digital tickets have been sent to your email.',
    btnModalSuccessClose: 'Close',
    
    lecturerPrefix: 'Lecturer: ',
    btnRegisterText: 'Register',
    btnRegisterArrow: '↗',
    topicsTitle: 'Key Topics',
    questionTitle: 'Main Question for Discussion',
    
    printSidebarTitle: 'Print',
    labelPrintDest: 'Destination',
    labelPrintCopies: 'Copies',
    labelPrintColor: 'Color',
    labelPrintPages: 'Pages',
    labelPrintLayout: 'Layout',
    labelPrintMore: 'More settings',
    btnPrintSubmit: 'Print',
    btnPrintCancel: 'Cancel',
    
    tickerTexts: [
      'International Design Festival',
      'Tradition in the Tech Era',
      'Jerusalem Design Week 2026',
      'Hansen House',
      'Free Admission'
    ]
  },
  ar: {
    navMap: 'خريطة',
    navPoster: 'صانع الملصقات',
    navTheme: 'التراث في عصر التكنولوجيا',
    navEvents: 'فعاليات',
    navInfo: 'معلومات',
    
    legendTitle: 'قاعات المهرجان',
    legendMainHall: 'القاعة الرئيسية (الطابق الأرضي)',
    legendFloor2: 'الطابق الثاني (معارض ومختبرات)',
    legendFloor3: 'الطابق الثالث (استوديو التصميم والبرج)',
    legendCourtyard: 'حديقة الفناء (المسرح المفتوح)',
    
    posterTitle: 'صانع ملصقات المهرجان',
    posterDesc1: 'لمئات السنين، استخدمت الثقافات المختلفة الأنماط والمنسوجات والفسيفساء لرواية قصصها. الآن حان دورك لإنشاء نمط جديد وإضافة قصتك إلى الفسيفساء العالمية.',
    posterDesc2: 'ابتكر. استكشف. شارك.',
    posterDesc3: 'ارسم على اللوحة<br>اكتشف النمط الناتج<br>قم بتنزيل ملصقك',
    posterDesc4: 'كل نمط يبدأ بخط واحد - كل تقليد يبدأ بقصة واحدة.',
    btnCanvasReset: 'إعادة ضبط',
    btnCanvasSave: 'متابعة',
    
    themePageTitle: 'التراث في عصر التكنولوجيا',
    themePageSubtitle: 'أسبوع التصميم الدولي في القدس 2026',
    themeP1: 'في عالم يتطور بسرعة فائقة، كيف نحافظ على اتصالنا بالتقاليد واللغات والمنسوجات والحرف اليدوية التي حددت المجتمعات لقرون؟ يركز مهرجان هذا العام على التقاطع الرائع بين الماضي المادي والمستقبل الرقمي.',
    themeQuoteText: '"التكنولوجيا لا تحل محل التراث، بل تزوده بأدوات جديدة ليتذكرها الناس ويتوسعوا فيها ويحافظوا عليها للأجيال القادمة."',
    themeP2: 'يقدم المصممون والفنانون والباحثون أعمالاً تعيد تصور التقنيات الكلاسيكية مثل نسج السجاد والخط والطباعة اليدوية والفسيفساء الحجرية، باستخدام خوارزميات الذكاء الاصطناعي والمسح ثلاثي الأبعاد ولوحات الرسم التفاعلية. ندعوكم لاستكشاف المعارض والمشاركة في الحوارات وتشكيل الذاكرة الثقافية للغد.',
    
    labelThTag: 'الفئة',
    labelThLocation: 'الموقع',
    labelThTime: 'الوقت',
    labelThDate: 'التاريخ',
    labelThName: 'الاسم',
    
    infoHoursTitle: 'ساعات العمل',
    infoLocationTitle: 'الموقع',
    infoOpeningTitle: 'ليلة الافتتاح، الأربعاء، 1 يوليو',
    infoAccessibilityTitle: 'سهولة الوصول',
    infoContactTitle: 'اتصل بنا',
    
    infoLocationDesc1: 'بيت هانسن، شارع غداليا ألون 14، القدس.',
    infoLocationDesc2: 'خطوط النقل العام القريبة: 13، 18، 85.',
    infoLocationDesc3: 'ابحث في نظام الملاحة (Waze / Google Maps): بيت هانسن.',
    infoOpeningP1: '17:00 - يفتح أسبوع التصميم للجمهور العام. في ليلة الافتتاح، إلى جانب الكشف عن المعارض والتجهيزات التفاعلية، سيتحول المجمع إلى مساحة حية للتصميم والثقافة.',
    infoOpeningP2: 'في جميع أنحاء الفناء، ستقام عروض موسيقية حية تجمع بين الأصوات التقليدية والمعاصرة، بالإضافة إلى عروض الإضاءة والإسقاطات الرقمية المستوحاة من الأنماط العالمية.',
    infoOpeningP3: 'سيتم تشغيل العروض وورش العمل المفتوحة وأحداث الرقص، لتقريب الماضي والمستقبل. ستتوفر أكشاك طعام مستوحاة من مطابخ عالمية متنوعة.',
    infoOpeningP4: 'وفقًا لتقاليد المهرجان، ستختتم الأمسية بعرض احتفالي رئيسي يربط بين الماضي والحاضر والمستقبل.',
    infoAccessibilityDesc1: 'المعارض سهلة الوصول بشكل عام. ومع ذلك، نظرًا للطبيعة التاريخية لبيت هانسن، قد تكون بعض النقاط ذات إمكانية وصول محدودة. يرجى اتباع الإشارات المحلية.',
    infoAccessibilityDesc2: 'التفاصيل الكاملة لإمكانية الوصول مدرجة في منشوراتنا. تتوفر مواقف السيارات في موقف المحطة الأولى، وموقف جرس الحرية، والشوارع المجاورة.',
    
    sbCard1Text: 'الحضور مجاني لجميع الفعاليات ولكن يتطلب حجز التذاكر مسبقًا.',
    sbCard1BtnText: 'رابط متجر التذاكر',
    sbCard2Text: 'يتم التسجيل لورش العمل والمحاضرات داخل علامة تبويب الفعاليات.',
    sbCard2BtnText: 'اذهب إلى الفعاليات',
    sbWarningText: 'يرجى الملاحظة: القدرة الاستيعابية محدودة!',
    
    modalRegTitle: 'التسجيل للفعالية',
    lblRegName: 'الاسم الكامل',
    lblRegEmail: 'البريد الإلكتروني',
    lblRegTickets: 'عدد التذاكر',
    btnRegSubmit: 'إرسال طلب التسجيل',
    modalSuccessTitle: 'تم استلام التسجيل!',
    modalSuccessDesc: 'تم إرسال تأكيد التسجيل والتذاكر الرقمية إلى بريدك الإلكتروني.',
    btnModalSuccessClose: 'إغلاق',
    
    lecturerPrefix: 'المحاضر: ',
    btnRegisterText: 'تسجيل',
    btnRegisterArrow: '↖',
    topicsTitle: 'المواضيع الرئيسية',
    questionTitle: 'السؤال الرئيسي للمناقشة',
    
    printSidebarTitle: 'طباعة',
    labelPrintDest: 'الوجهة',
    labelPrintCopies: 'النسخ',
    labelPrintColor: 'اللون',
    labelPrintPages: 'الصفحات',
    labelPrintLayout: 'التخطيط',
    labelPrintMore: 'المزيد من الإعدادات',
    btnPrintSubmit: 'طباعة',
    btnPrintCancel: 'إلغاء',
    
    tickerTexts: [
      'مهرجان التصميم الدولي',
      'التراث في عصر التكنولوجيا',
      'أسبوع التصميم في القدس 2026',
      'بيت هانسن',
      'دخول مجاني'
    ]
  }
};

// -------------------------------------------------------------
// 3. Application State & Navigation Router
// -------------------------------------------------------------
let currentLang = 'he';
let activeTab = 'home';
let expandedEventId = null;
let filterTag = null;
let filterDate = null;
let filterLocation = null;

// DOM Cache
const navLinks = document.querySelectorAll('.tab-link');
const pageContents = document.querySelectorAll('.page-content');
const langButtons = document.querySelectorAll('.lang-btn');

function initNavigation() {
  // Add listeners to tabs
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute('data-tab');
      if (targetTab === 'map') return;
      switchTab(targetTab);
    });
  });

  // Clicking the main logo banner goes to home page
  const homeHero = document.getElementById('home-interactive-hero');
  if (homeHero) {
    homeHero.addEventListener('click', () => {
      switchTab('home');
    });
  }
}

function switchTab(tabId) {
  activeTab = tabId;
  
  // Update nav active class
  navLinks.forEach(link => {
    const linkTab = link.getAttribute('data-tab');
    if (linkTab === tabId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Toggle pages active class
  pageContents.forEach(page => {
    const pageId = page.getAttribute('id');
    if (pageId === `page-${tabId}`) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });

  // Execute tab-specific code
  if (tabId === 'poster-builder') {
    initPosterBuilderCanvas();
  }
  
  // Clear map highlight if navigating away from map
  if (tabId !== 'map') {
    clearMapSelection();
  }

  // Scroll to top of section
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// -------------------------------------------------------------
// 4. Multi-language Switching
// -------------------------------------------------------------
function initLanguageSwitch() {
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });
  
  // Set default language
  setLanguage('he');
}

function setLanguage(lang) {
  currentLang = lang;

  // Set active class on buttons
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update document direction
  if (lang === 'he' || lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('dir', 'ltr');
  }

  // Update Page Texts
  updateStaticTexts();
  
  // Re-build sliding ticker
  renderSlidingTicker();

  // Re-render events table
  renderEventsTable();
}

function updateStaticTexts() {
  const dict = translations[currentLang];
  
  // Navbar Tabs
  document.getElementById('nav-map').textContent = dict.navMap;
  document.getElementById('nav-poster').textContent = dict.navPoster;
  document.getElementById('nav-theme').textContent = dict.navTheme;
  document.getElementById('nav-events').textContent = dict.navEvents;
  document.getElementById('nav-info').textContent = dict.navInfo;

  // Map Tab
  const legendTitle = document.getElementById('legend-title');
  if (legendTitle) legendTitle.textContent = dict.legendTitle;
  const legendMainHall = document.getElementById('legend-main-hall');
  if (legendMainHall) legendMainHall.textContent = dict.legendMainHall;
  const legendFloor2 = document.getElementById('legend-floor-2');
  if (legendFloor2) legendFloor2.textContent = dict.legendFloor2;
  const legendFloor3 = document.getElementById('legend-floor-3');
  if (legendFloor3) legendFloor3.textContent = dict.legendFloor3;
  const legendCourtyard = document.getElementById('legend-courtyard');
  if (legendCourtyard) legendCourtyard.textContent = dict.legendCourtyard;
  
  // Map SVG text replacement
  const svgMainHall = document.getElementById('svg-text-main-hall');
  if (svgMainHall) svgMainHall.textContent = currentLang === 'he' ? 'חלל מרכזי' : (currentLang === 'ar' ? 'القاعة الرئيسية' : 'Main Hall');
  const svgFloor2 = document.getElementById('svg-text-floor-2');
  if (svgFloor2) svgFloor2.textContent = currentLang === 'he' ? 'קומה 2' : (currentLang === 'ar' ? 'الطابق ٢' : 'Floor 2');
  const svgFloor3 = document.getElementById('svg-text-floor-3');
  if (svgFloor3) svgFloor3.textContent = currentLang === 'he' ? 'קומה 3' : (currentLang === 'ar' ? 'الطابق ٣' : 'Floor 3');

  // Poster Tab
  document.getElementById('poster-title').textContent = dict.posterTitle;
  document.getElementById('poster-desc-1').innerHTML = dict.posterDesc1;
  document.getElementById('poster-desc-2').textContent = dict.posterDesc2;
  document.getElementById('poster-desc-3').innerHTML = dict.posterDesc3;
  document.getElementById('poster-desc-4').textContent = dict.posterDesc4;
  document.getElementById('btn-canvas-reset').textContent = dict.btnCanvasReset;
  document.getElementById('btn-canvas-save').textContent = dict.btnCanvasSave;

  // Poster Print Tab
  document.getElementById('print-sidebar-title').textContent = dict.printSidebarTitle;
  document.getElementById('label-print-dest').textContent = dict.labelPrintDest;
  document.getElementById('label-print-copies').textContent = dict.labelPrintCopies;
  document.getElementById('label-print-color').textContent = dict.labelPrintColor;
  document.getElementById('label-print-pages').textContent = dict.labelPrintPages;
  document.getElementById('label-print-layout').textContent = dict.labelPrintLayout;
  document.getElementById('label-print-more').textContent = dict.labelPrintMore;
  document.getElementById('btn-print-submit').textContent = dict.btnPrintSubmit;
  document.getElementById('btn-print-cancel').textContent = dict.btnPrintCancel;

  // Theme Tab
  document.getElementById('theme-page-title').textContent = dict.themePageTitle;
  document.getElementById('theme-page-subtitle').textContent = dict.themePageSubtitle;
  document.getElementById('theme-p1').textContent = dict.themeP1;
  document.getElementById('theme-quote-text').textContent = dict.themeQuoteText;
  document.getElementById('theme-p2').textContent = dict.themeP2;

  // Events Headers
  // Events Headers & Filters
  const tagSelect = document.getElementById('filter-select-tag');
  if (tagSelect) {
    const currentVal = tagSelect.value || 'all';
    tagSelect.innerHTML = '';
    
    const optAll = document.createElement('option');
    optAll.value = 'all';
    optAll.textContent = currentLang === 'en' ? 'Tag: All' : (currentLang === 'ar' ? 'الفئة: الكل' : 'תחום: הכל');
    tagSelect.appendChild(optAll);
    
    const uniqueTags = [];
    const seen = new Set();
    eventsData.forEach(ev => {
      if (!seen.has(ev.tagKey)) {
        seen.add(ev.tagKey);
        uniqueTags.push({ key: ev.tagKey, name: ev.tag[currentLang] });
      }
    });
    uniqueTags.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.key;
      opt.textContent = t.name;
      tagSelect.appendChild(opt);
    });
    tagSelect.value = currentVal;
  }

  const dateSelect = document.getElementById('filter-select-date');
  if (dateSelect) {
    const currentVal = dateSelect.value || 'all';
    dateSelect.innerHTML = '';
    
    const optAll = document.createElement('option');
    optAll.value = 'all';
    optAll.textContent = currentLang === 'en' ? 'Date: All' : (currentLang === 'ar' ? 'التاريخ: الكل' : 'תאריך: הכל');
    dateSelect.appendChild(optAll);
    
    const uniqueDates = [];
    const seen = new Set();
    eventsData.forEach(ev => {
      if (!seen.has(ev.date)) {
        seen.add(ev.date);
        uniqueDates.push(ev.date);
      }
    });
    uniqueDates.sort().forEach(d => {
      const opt = document.createElement('option');
      opt.value = d;
      opt.textContent = d;
      dateSelect.appendChild(opt);
    });
    dateSelect.value = currentVal;
  }

  document.getElementById('label-th-location').textContent = dict.labelThLocation;
  document.getElementById('label-th-time').textContent = dict.labelThTime;
  document.getElementById('label-th-name').textContent = dict.labelThName;

  // Info Tab
  document.getElementById('info-hours-title').textContent = dict.infoHoursTitle;
  document.getElementById('info-location-title').textContent = dict.infoLocationTitle;
  document.getElementById('info-opening-title').textContent = dict.infoOpeningTitle;
  document.getElementById('info-accessibility-title').textContent = dict.infoAccessibilityTitle;
  document.getElementById('info-contact-title').textContent = dict.infoContactTitle;
  
  document.getElementById('info-location-desc1').textContent = dict.infoLocationDesc1;
  document.getElementById('info-location-desc2').textContent = dict.infoLocationDesc2;
  document.getElementById('info-location-desc3').innerHTML = dict.infoLocationDesc3;
  
  document.getElementById('info-opening-p1').textContent = dict.infoOpeningP1;
  document.getElementById('info-opening-p2').textContent = dict.infoOpeningP2;
  document.getElementById('info-opening-p3').textContent = dict.infoOpeningP3;
  document.getElementById('info-opening-p4').textContent = dict.infoOpeningP4;
  
  document.getElementById('info-accessibility-desc1').textContent = dict.infoAccessibilityDesc1;
  document.getElementById('info-accessibility-desc2').textContent = dict.infoAccessibilityDesc2;

  // Info Sidebar
  document.getElementById('sb-card1-text').textContent = dict.sbCard1Text;
  document.getElementById('sb-card1-btn-text').textContent = dict.sbCard1BtnText;
  document.getElementById('sb-card2-text').textContent = dict.sbCard2Text;
  document.getElementById('sb-card2-btn-text').textContent = dict.sbCard2BtnText;
  document.getElementById('sb-warning-text').textContent = dict.sbWarningText;

  // Modal Dialog
  document.getElementById('modal-reg-title').textContent = dict.modalRegTitle;
  document.getElementById('lbl-reg-name').textContent = dict.lblRegName;
  document.getElementById('lbl-reg-email').textContent = dict.lblRegEmail;
  document.getElementById('lbl-reg-tickets').textContent = dict.lblRegTickets;
  document.getElementById('btn-reg-submit').textContent = dict.btnRegSubmit;
  document.getElementById('modal-success-title').textContent = dict.modalSuccessTitle;
  document.getElementById('modal-success-desc').textContent = dict.modalSuccessDesc;
  document.getElementById('btn-modal-success-close').textContent = dict.btnModalSuccessClose;
  
  // Translate hours rows in Info tab directly
  const hoursList = document.getElementById('info-hours-list');
  if (hoursList) {
    const rows = hoursList.querySelectorAll('.opening-hours-row');
    if (rows.length === 5) {
      if (currentLang === 'en') {
        rows[0].children[0].textContent = 'July 1st Opening Night';
        rows[1].children[0].textContent = 'July 2nd Thursday';
        rows[2].children[0].textContent = 'July 3rd Friday';
        rows[3].children[0].textContent = 'July 4th Saturday';
        rows[3].children[1].textContent = 'Closed';
        rows[4].children[0].textContent = 'July 5-6th Sun-Mon';
      } else if (currentLang === 'ar') {
        rows[0].children[0].textContent = '١.٧ ليلة الافتتاح';
        rows[1].children[0].textContent = '٢.٧ يوم الخميس';
        rows[2].children[0].textContent = '٣.٧ يوم الجمعة';
        rows[3].children[0].textContent = '٤.٧ يوم السبت';
        rows[3].children[1].textContent = 'مغلق';
        rows[4].children[0].textContent = '٥-٦.٧ الأحد - الاثنين';
      } else {
        rows[0].children[0].textContent = '1.7 ערב הפתיחה';
        rows[1].children[0].textContent = '2.7 יום חמישי';
        rows[2].children[0].textContent = '3.7 יום שישי';
        rows[3].children[0].textContent = '4.7 יום שבת';
        rows[3].children[1].textContent = 'סגור';
        rows[4].children[0].textContent = '5-6.7 ראשון-שני';
      }
    }
  }
}

// -------------------------------------------------------------
// 5. Sliding Ticker Marquee Generator
// -------------------------------------------------------------
// Fixed multilingual ticker — always shows the festival name in all languages (matches Figma reference)
const TICKER_MULTILINGUAL = [
  'International Design Festival',
  'פסטיבל העיצוב הבינלאומי',
  '国際 デザイン フェスティバル',
  'διεθνές φεστιβάλ σχεδίου',
  'مهرجان التصميم الدولي',
  'פסטיבל העיצוב הבינלאומי',
  'International Design Festival',
  '国際 デザイン フェスティバル',
];

function renderSlidingTicker() {
  const container = document.getElementById('ticker-content');
  if (!container) return;

  const separator = ' ▪ ';

  // Quadruple for seamless infinite loop
  const tickerArray = [...TICKER_MULTILINGUAL, ...TICKER_MULTILINGUAL, ...TICKER_MULTILINGUAL, ...TICKER_MULTILINGUAL];

  let html = '';
  tickerArray.forEach(txt => {
    html += `<span class="marquee-text">${txt}<span class="marquee-sep">${separator}</span></span>`;
  });

  container.innerHTML = html;
}

// -------------------------------------------------------------
// 6. Interactive SVG Map
// -------------------------------------------------------------
function initInteractiveMap() {
  const mapNodes = document.querySelectorAll('.map-location-node');
  const legendItems = document.querySelectorAll('.map-legend .legend-item');
  if (mapNodes.length === 0 && legendItems.length === 0) return;

  function highlightLoc(locId) {
    // Highlight SVG shapes
    mapNodes.forEach(node => {
      if (node.getAttribute('data-loc') === locId) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    // Highlight Legend listing cards
    legendItems.forEach(item => {
      if (item.getAttribute('data-loc') === locId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Bind SVG polygon events
  mapNodes.forEach(node => {
    const locId = node.getAttribute('data-loc');
    
    node.addEventListener('mouseenter', () => highlightLoc(locId));
    node.addEventListener('mouseleave', () => {
      // Don't clear if active filter matches it
      if (filterLocation !== locId) {
        node.classList.remove('active');
        const correspondingLegend = document.querySelector(`.legend-item[data-loc="${locId}"]`);
        if (correspondingLegend && filterLocation !== locId) {
          correspondingLegend.classList.remove('active');
        }
      }
    });

    node.addEventListener('click', () => {
      // Clicking a location filters events list and switches tab
      filterLocation = locId;
      switchTab('events');
      renderEventsTable();
      
      // Highlight sorted column header visual state
      const locationLabel = currentLang === 'he' ? 'מיקום: ' : (currentLang === 'ar' ? 'الموقع: ' : 'Location: ');
      const locNameDict = {
        'main-hall': currentLang === 'he' ? 'חלל מרכזי' : (currentLang === 'ar' ? 'القاعة الرئيسية' : 'Main Hall'),
        'floor-2': currentLang === 'he' ? 'קומה 2' : (currentLang === 'ar' ? 'الطابق الثاني' : 'Floor 2'),
        'floor-3': currentLang === 'he' ? 'קומה 3' : (currentLang === 'ar' ? 'الطابق الثالث' : 'Floor 3'),
        'courtyard': currentLang === 'he' ? 'חצר גינה' : (currentLang === 'ar' ? 'حديقة الفناء' : 'Garden Courtyard')
      };
      
      // Set sub-header filter display
      const thLocationLabel = document.getElementById('label-th-location');
      thLocationLabel.innerHTML = `${locationLabel}<strong>${locNameDict[locId]} (✕)</strong>`;
      thLocationLabel.style.color = 'var(--color-purple)';
      thLocationLabel.parentNode.style.backgroundColor = 'var(--color-purple-20)';
    });
  });

  // Bind Legend items hover and clicks
  legendItems.forEach(item => {
    const locId = item.getAttribute('data-loc');
    
    item.addEventListener('mouseenter', () => highlightLoc(locId));
    item.addEventListener('mouseleave', () => {
      if (filterLocation !== locId) {
        item.classList.remove('active');
        const correspondingNode = document.querySelector(`.map-location-node[data-loc="${locId}"]`);
        if (correspondingNode) {
          correspondingNode.classList.remove('active');
        }
      }
    });

    item.addEventListener('click', () => {
      filterLocation = locId;
      switchTab('events');
      renderEventsTable();
      
      const locNameDict = {
        'main-hall': currentLang === 'he' ? 'חלל מרכזי' : (currentLang === 'ar' ? 'القاعة الرئيسية' : 'Main Hall'),
        'floor-2': currentLang === 'he' ? 'קומה 2' : (currentLang === 'ar' ? 'الطابق الثاني' : 'Floor 2'),
        'floor-3': currentLang === 'he' ? 'קומה 3' : (currentLang === 'ar' ? 'الطابق الثالث' : 'Floor 3'),
        'courtyard': currentLang === 'he' ? 'חצר גינה' : (currentLang === 'ar' ? 'حديقة الفناء' : 'Garden Courtyard')
      };
      
      const thLocationLabel = document.getElementById('label-th-location');
      thLocationLabel.innerHTML = `<strong>${locNameDict[locId]} (✕)</strong>`;
      thLocationLabel.style.color = 'var(--color-purple)';
      thLocationLabel.parentNode.style.backgroundColor = 'var(--color-purple-20)';
    });
  });

  // Bind clearing location filter in Events table header
  const thLocation = document.getElementById('th-location');
  if (thLocation) {
    thLocation.addEventListener('click', () => {
      if (filterLocation) {
        filterLocation = null;
        const thLocationLabel = document.getElementById('label-th-location');
        thLocationLabel.textContent = translations[currentLang].labelThLocation;
        thLocationLabel.style.color = '';
        thLocation.style.backgroundColor = '';
        renderEventsTable();
      }
    });
  }
}

function clearMapSelection() {
  const mapNodes = document.querySelectorAll('.map-location-node');
  const legendItems = document.querySelectorAll('.map-legend .legend-item');
  mapNodes.forEach(n => n.classList.remove('active'));
  legendItems.forEach(i => i.classList.remove('active'));
}

// -------------------------------------------------------------
// 7. Interactive Poster Builder Canvas Drawing
// -------------------------------------------------------------
let canvasInitialized = false;
let pixelGrid = [];
const gridSize = 32; // 32x32 Grid
const canvasPixelSize = 480;
const cellSize = canvasPixelSize / gridSize; // 15px per grid block
let isDrawing = false;

function initPosterBuilderCanvas() {
  if (canvasInitialized) return;
  canvasInitialized = true;

  const canvas = document.getElementById('canvas-drawing');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  
  // Initialize grid with 0 (purple color)
  resetGridArray();

  // Draw Initial state
  drawCanvasState(ctx);

  // Mouse drawing event listeners
  function getMouseCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Map to grid coordinates dynamically
    const col = Math.floor((x / rect.width) * gridSize);
    const row = Math.floor((y / rect.height) * gridSize);
    return { row, col };
  }

  function handleDrawingPaint(row, col) {
    if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
      // Paint symmetrical coordinates (8-way symmetry)
      setSymmetricalPixels(row, col, 1);
      drawCanvasState(ctx);
    }
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const { row, col } = getMouseCoords(e);
    handleDrawingPaint(row, col);
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    const { row, col } = getMouseCoords(e);
    handleDrawingPaint(row, col);
  });

  window.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  // Touch Screen Drawing support
  canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const col = Math.floor((x / rect.width) * gridSize);
    const row = Math.floor((y / rect.height) * gridSize);
    handleDrawingPaint(row, col);
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    if (!isDrawing) return;
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const col = Math.floor((x / rect.width) * gridSize);
    const row = Math.floor((y / rect.height) * gridSize);
    handleDrawingPaint(row, col);
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener('touchend', () => {
    isDrawing = false;
  });

  // Action Reset button
  const btnReset = document.getElementById('btn-canvas-reset');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      resetGridArray();
      drawCanvasState(ctx);
    });
  }

  // Action Save button (goes to Print Page)
  const btnSave = document.getElementById('btn-canvas-save');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const overlayCanvas = document.getElementById('canvas-print-overlay');
      if (overlayCanvas) {
        overlayCanvas.width = canvas.width;
        overlayCanvas.height = canvas.height;
        const overlayCtx = overlayCanvas.getContext('2d');
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        overlayCtx.drawImage(canvas, 0, 0, overlayCanvas.width, overlayCanvas.height);
      }
      switchTab('poster-print');
    });
  }

  // Print Page Cancel Button
  const btnPrintCancel = document.getElementById('btn-print-cancel');
  if (btnPrintCancel) {
    btnPrintCancel.addEventListener('click', () => {
      switchTab('poster-builder');
    });
  }

  // Print Page Submit Button (Print)
  const btnPrintSubmit = document.getElementById('btn-print-submit');
  if (btnPrintSubmit) {
    btnPrintSubmit.addEventListener('click', () => {
      window.print();
    });
  }
}

function resetGridArray() {
  pixelGrid = [];
  for (let r = 0; r < gridSize; r++) {
    pixelGrid[r] = [];
    for (let c = 0; c < gridSize; c++) {
      pixelGrid[r][c] = 0; // Empty
    }
  }
}

function setSymmetricalPixels(r, c, val) {
  const N = gridSize;
  
  // 8 Symmetrical coordinate positions in grid
  const coords = [
    { r: r, c: c },
    { r: c, c: r },
    { r: N - 1 - c, c: r },
    { r: c, c: N - 1 - r },
    { r: N - 1 - r, c: c },
    { r: r, c: N - 1 - c },
    { r: N - 1 - c, c: N - 1 - r },
    { r: N - 1 - r, c: N - 1 - c }
  ];

  coords.forEach(pt => {
    if (pt.r >= 0 && pt.r < N && pt.c >= 0 && pt.c < N) {
      pixelGrid[pt.r][pt.c] = val;
    }
  });
}

function drawCanvasState(ctx) {
  const N = gridSize;
  const purpleColor = '#9532FC';
  const yellowColor = '#FFE101';

  const canvasWidth = ctx.canvas.width;
  const canvasHeight = ctx.canvas.height;
  const localCellW = canvasWidth / N;
  const localCellH = canvasHeight / N;

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      ctx.fillStyle = pixelGrid[r][c] === 1 ? yellowColor : purpleColor;
      ctx.fillRect(c * localCellW, r * localCellH, localCellW, localCellH);
    }
  }
}

// -------------------------------------------------------------
// 8. Events Table (Accordion drawers & Dynamic rendering)
// -------------------------------------------------------------
function initEventsFiltering() {
  const tagSelect = document.getElementById('filter-select-tag');
  if (tagSelect) {
    tagSelect.addEventListener('change', (e) => {
      filterTag = e.target.value === 'all' ? null : e.target.value;
      renderEventsTable();
    });
  }

  const dateSelect = document.getElementById('filter-select-date');
  if (dateSelect) {
    dateSelect.addEventListener('change', (e) => {
      filterDate = e.target.value === 'all' ? null : e.target.value;
      renderEventsTable();
    });
  }
}

function renderEventsTable() {
  const container = document.getElementById('events-rows-container');
  if (!container) return;

  const dict = translations[currentLang];

  // Filter events
  let filteredEvents = [...eventsData];
  if (filterLocation) {
    filteredEvents = filteredEvents.filter(ev => ev.locationKey === filterLocation);
  }
  if (filterTag) {
    filteredEvents = filteredEvents.filter(ev => ev.tagKey === filterTag);
  }
  if (filterDate) {
    filteredEvents = filteredEvents.filter(ev => ev.date === filterDate);
  }

  // Default chronological sort by date
  const dateWeights = {
    '01.07': 1,
    '02.07': 2,
    '03.07': 3,
    '05.07': 4,
    '06.07': 5
  };
  filteredEvents.sort((a, b) => {
    const valA = dateWeights[a.date] || 99;
    const valB = dateWeights[b.date] || 99;
    return valA - valB;
  });

  let html = '';
  filteredEvents.forEach(ev => {
    const isOpen = ev.id === expandedEventId;
    const drawerOpenClass = isOpen ? 'open' : '';
    const rowActiveClass = isOpen ? 'active' : '';

    // Render event row item
    html += `
      <div class="event-row-wrapper">
        <div class="event-row-header ${rowActiveClass}" data-event-id="${ev.id}">
          <div class="event-cell cell-tag">${ev.tag[currentLang]}</div>
          <div class="event-cell cell-location">${ev.location[currentLang]}</div>
          <div class="event-cell cell-time">${ev.time}</div>
          <div class="event-cell cell-date">${ev.date}</div>
          <div class="event-cell cell-name">${ev.name[currentLang]}</div>
        </div>
        
        <div class="event-row-drawer ${drawerOpenClass}" id="drawer-${ev.id}">
          <!-- Expanded details -->
          <div class="drawer-content-left">
            <div class="drawer-lecturer">${dict.lecturerPrefix}${ev.lecturer[currentLang]}</div>
            <button class="btn-register" data-event-id="${ev.id}" data-event-name="${ev.name[currentLang]}">
              <span>${dict.btnRegisterText}</span>
              <span>${dict.btnRegisterArrow}</span>
            </button>
          </div>
          <div class="drawer-content-right">
            <div class="drawer-description">${ev.description[currentLang]}</div>
            
            <div class="drawer-topics">
              <h4>${dict.topicsTitle}</h4>
              <ul>
                ${ev.topics[currentLang].map(topic => `<li>${topic}</li>`).join('')}
              </ul>
            </div>
            
            <div class="drawer-question">
              <h4>${dict.questionTitle}</h4>
              <p>${ev.question[currentLang]}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Re-bind click event handlers for new items
  bindAccordionEvents();
  bindRegistrationEvents();
}

function bindAccordionEvents() {
  const rowHeaders = document.querySelectorAll('.event-row-header');
  rowHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const eventId = parseInt(header.getAttribute('data-event-id'));
      
      // Accordion toggle behavior
      if (expandedEventId === eventId) {
        expandedEventId = null;
      } else {
        expandedEventId = eventId;
      }
      
      renderEventsTable();
    });
  });
}

// -------------------------------------------------------------
// 9. Event Registration Modal Interactions
// -------------------------------------------------------------
let selectedRegEventId = null;

function bindRegistrationEvents() {
  const regButtons = document.querySelectorAll('.btn-register');
  const modal = document.getElementById('registration-modal');
  const modalTitle = document.getElementById('modal-event-display');

  regButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering accordion close/collapse
      
      selectedRegEventId = btn.getAttribute('data-event-id');
      const eventName = btn.getAttribute('data-event-name');
      
      // Update form text and show modal
      if (modalTitle) {
        modalTitle.textContent = eventName;
      }
      
      // Reset form fields & state
      document.getElementById('event-reg-form').reset();
      document.getElementById('modal-form-state').style.display = 'block';
      document.getElementById('modal-success-state').style.display = 'none';
      
      if (modal) {
        modal.classList.add('active');
      }
    });
  });
}

function initRegistrationModal() {
  const modal = document.getElementById('registration-modal');
  const btnClose = document.getElementById('btn-modal-close');
  const form = document.getElementById('event-reg-form');
  const btnSuccessClose = document.getElementById('btn-modal-success-close');

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
    }
  }

  if (btnClose) btnClose.addEventListener('click', closeModal);
  if (btnSuccessClose) btnSuccessClose.addEventListener('click', closeModal);

  // Close when clicking overlay wrapper outside modal box
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Handle Form Submission success state
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Hide form state and show success card state
      document.getElementById('modal-form-state').style.display = 'none';
      document.getElementById('modal-success-state').style.display = 'block';
    });
  }
}

// -------------------------------------------------------------
// 10. Initialization bootstrap
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initLanguageSwitch();
  initInteractiveMap();
  initEventsFiltering();
  initRegistrationModal();
});

// -------------------------------------------------------------
// 11. Home Page Interactive p5.js Kaleidoscope
// -------------------------------------------------------------
const homeKaleidoscope = (p) => {
  let img;

  p.preload = () => {
    const handleLoadSuccess = (loadedImg) => {
      // Resize to a scale that covers screens including large monitors
      let targetW = Math.max(p.windowWidth * 3, 3000);
      let targetH = Math.max(p.windowHeight * 3, 2000);
      loadedImg.resize(targetW, targetH);
    };

    // Try loading assets/photo1.jpg first (where it is stored in the workspace), then fallback to photo1.jpg in the root
    img = p.loadImage('assets/photo1.jpg', handleLoadSuccess, (err) => {
      console.warn("assets/photo1.jpg not found, trying photo1.jpg in the root...");
      img = p.loadImage('photo1.jpg', handleLoadSuccess, (err2) => {
        console.error("Failed to load photo1.jpg from assets/ or root directory.");
      });
    });
  };

  p.setup = () => {
    const container = document.getElementById('home-canvas-container');
    let w = container ? container.clientWidth : p.windowWidth;
    let h = container ? container.clientHeight : p.windowHeight;
    let canvas = p.createCanvas(w, h);
    canvas.parent('home-canvas-container');
  };

  p.windowResized = () => {
    const container = document.getElementById('home-canvas-container');
    if (container) {
      let w = container.clientWidth;
      let h = container.clientHeight;
      p.resizeCanvas(w, h);
    }
  };

  p.draw = () => {
    p.clear(); // Clear canvas to transparent (erases trails, no black background!)

    // Guard if image is not yet loaded or has invalid width/height
    if (!img || img.width <= 1) return;

    // 1. הזזה למרכז הקנבס
    p.translate(p.width / 2, p.height / 2);

    let rectWidth = p.width;
    let rectHeight = p.height;
    let w = rectWidth / 2;
    let h = rectHeight / 2;

    // 8 המשולשים המרכיבים את המלבן - מתוקן!
    let triangles = [
      [0, 0, 0, -h, w, -h],
      [0, 0, w, -h, w, 0],
      [0, 0, w, 0, w, h],
      [0, 0, w, h, 0, h],
      [0, 0, 0, h, -w, h],
      [0, 0, -w, h, -w, 0],
      [0, 0, -w, 0, -w, -h],
      [0, 0, -w, -h, 0, -h]
    ];

    // שטח ביטחון - כמה פיקסלים רחוק מהקצה המקורי של התמונה לעצור
    let buffer = 80;

    // חישוב המרחק המקסימלי שהתמונה יכולה לזוז מהמרכז בלי להיחשף בקצוות של ה-16:9
    let maxMoveX = (img.width / 2) - w - buffer;
    let maxMoveY = (img.height / 2) - h - buffer;

    // מיפוי תנועת העכבר בצורה מוגבלת וקשיחה לתוך הטווח המותר
    let offsetX = p.map(p.mouseX, 0, p.width, -maxMoveX, maxMoveX);
    let offsetY = p.map(p.mouseY, 0, p.height, -maxMoveY, maxMoveY);

    // הגבלה קשיחה (Clamping) לביטחון
    offsetX = p.constrain(offsetX, -maxMoveX, maxMoveX);
    offsetY = p.constrain(offsetY, -maxMoveY, maxMoveY);

    // 2. לולאה ליצירת 8 המשולשים המשתקפים
    for (let i = 0; i < 8; i++) {
      p.push();

      // 3. חיתוך המשולש
      p.beginClip();
      let t = triangles[i];
      p.triangle(t[0], t[1], t[2], t[3], t[4], t[5]);
      p.endClip();

      // 4. ציור המראה
      p.push();
      p.imageMode(p.CENTER);

      let angle = p.TWO_PI / 8;
      p.rotate(i * angle);

      if (i % 2 === 1) {
        p.scale(1, -1);
      }

      // הזזה על בסיס העכבר המוגבל
      p.translate(offsetX, offsetY);

      // ציור התמונה בדיוק ב-0,0 (מרכז ה-Clip)
      p.image(img, 0, 0);
      p.pop();

      p.pop();
    }
  };
};

// Initialize the p5 sketch
new p5(homeKaleidoscope);
