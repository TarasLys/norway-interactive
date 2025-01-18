
const sentences = [
 {
  "norwegian": "Jeg må kjøpe nye sko i dag.",
  "russian": "Мне нужно купить новые туфли сегодня.",
  "english": "I need to buy new shoes today.",
  "arabic": "أحتاج لشراء أحذية جديدة اليوم.",
  "swahili": "Nahitaji kununua viatu vipya leo."
},
{
  "norwegian": "Vi leser en spennende bok sammen.",
  "russian": "Мы вместе читаем увлекательную книгу.",
  "english": "We are reading an exciting book together.",
  "arabic": "نقرأ كتابًا مثيرًا معًا.",
  "swahili": "Tunasoma kitabu cha kusisimua pamoja."
},
{
  "norwegian": "Han liker å tegne bilder av dyr.",
  "russian": "Ему нравится рисовать картинки с животными.",
  "english": "He likes to draw pictures of animals.",
  "arabic": "يحب رسم صور للحيوانات.",
  "swahili": "Anapenda kuchora picha za wanyama."
},
{
  "norwegian": "Jeg går til butikken for å kjøpe brød.",
  "russian": "Я иду в магазин, чтобы купить хлеб.",
  "english": "I am going to the store to buy bread.",
  "arabic": "أذهب إلى المتجر لشراء الخبز.",
  "swahili": "Ninakwenda dukani kununua mkate."
},
{
  "norwegian": "De svømmer i sjøen om sommeren.",
  "russian": "Они плавают в море летом.",
  "english": "They swim in the sea during the summer.",
  "arabic": "يسبحون في البحر خلال الصيف.",
  "swahili": "Wanaogelea baharini wakati wa majira ya joto."
},
{
  "norwegian": "Vi spiser epler fra treet i hagen.",
  "russian": "Мы едим яблоки с дерева в саду.",
  "english": "We eat apples from the tree in the garden.",
  "arabic": "نأكل التفاح من الشجرة في الحديقة.",
  "swahili": "Tunakula maapulo kutoka kwa mti kwenye bustani."
},
{
  "norwegian": "Hun vasker klær på mandager.",
  "russian": "Она стирает одежду по понедельникам.",
  "english": "She washes clothes on Mondays.",
  "arabic": "تغسل الملابس أيام الاثنين.",
  "swahili": "Anaosha nguo kila Jumatatu."
},
{
  "norwegian": "Jeg ser en film på kino i kveld.",
  "russian": "Я смотрю фильм в кинотеатре сегодня вечером.",
  "english": "I am watching a movie at the cinema tonight.",
  "arabic": "أشاهد فيلمًا في السينما الليلة.",
  "swahili": "Ninatazama sinema usiku huu katika ukumbi wa cinema."
},

  {
  "norwegian": "De leker i snøen om vinteren.",
  "russian": "Они играют в снегу зимой.",
  "english": "They play in the snow during winter.",
  "arabic": "يلعبون في الثلج خلال الشتاء.",
  "swahili": "Wanakunywa kwenye theluji wakati wa majira ya baridi."
},
{
  "norwegian": "Vi lærer nye ord på norsk hver dag.",
  "russian": "Мы учим новые слова на норвежском каждый день.",
  "english": "We learn new words in Norwegian every day.",
  "arabic": "نتعلم كلمات جديدة باللغة النرويجية كل يوم.",
  "swahili": "Tunajifunza maneno mapya kwa Kinyorwegian kila siku."
},
{
  "norwegian": "Hun kjøper en rød kjole til festen.",
  "russian": "Она покупает красное платье для вечеринки.",
  "english": "She buys a red dress for the party.",
  "arabic": "تشتري فستانًا أحمر للحفلة.",
  "swahili": "Ananunua gauni jekundu kwa ajili ya sherehe."
},
{
  "norwegian": "Jeg hører på radio om morgenen.",
  "russian": "Я слушаю радио по утрам.",
  "english": "I listen to the radio in the morning.",
  "arabic": "أستمع إلى الراديو في الصباح.",
  "swahili": "Ninasikiliza redio asubuhi."
},
{
  "norwegian": "De spiser middag ute på terrassen.",
  "russian": "Они ужинают на террасе.",
  "english": "They eat dinner outside on the terrace.",
  "arabic": "يتناولون العشاء في الخارج على التراس.",
  "swahili": "Wanapiga chakula cha jioni nje kwenye terrace."
},
{
  "norwegian": "Han går en tur langs elva.",
  "russian": "Он гуляет вдоль реки.",
  "english": "He takes a walk along the river.",
  "arabic": "هو يمشي على طول النهر.",
  "swahili": "Anatembea kando ya mto."
},
{
  "norwegian": "Vi kjøper billetter til toget.",
  "russian": "Мы покупаем билеты на поезд.",
  "english": "We are buying tickets for the train.",
  "arabic": "نحن نشتري تذاكر القطار.",
  "swahili": "Tunununua tiketi za treni."
},
{
  "norwegian": "Hun drikker kaffe på kafeen.",
  "russian": "Она пьёт кофе в кафе.",
  "english": "She drinks coffee at the café.",
  "arabic": "هي تشرب القهوة في المقهى.",
  "swahili": "Anakunywa kahawa kwenye kahawa."
},
{
  "norwegian": "Jeg sender et postkort til en venn.",
  "russian": "Я отправляю открытку другу.",
  "english": "I am sending a postcard to a friend.",
  "arabic": "أنا أرسل بطاقة بريدية إلى صديق.",
  "swahili": "Ninatuma postcard kwa rafiki."
},
{
  "norwegian": "De spiller kort på hytta.",
  "russian": "Они играют в карты на даче.",
  "english": "They are playing cards at the cabin.",
  "arabic": "هم يلعبون الورق في الكابينة.",
  "swahili": "Wanacheza kadi kwenye cabin."
},
{
  "norwegian": "Vi feirer bursdagen hennes i dag.",
  "russian": "Мы отмечаем её день рождения сегодня.",
  "english": "We are celebrating her birthday today.",
  "arabic": "نحن نحتفل بعيد ميلادها اليوم.",
  "swahili": "Tunasherehekea siku yake ya kuzaliwa leo."
},
{
  "norwegian": "Jeg må ta en buss til sentrum.",
  "russian": "Мне нужно сесть на автобус до центра.",
  "english": "I need to take a bus to the city center.",
  "arabic": "أحتاج إلى ركوب الحافلة إلى وسط المدينة.",
  "swahili": "Nahitaji kuchukua basi kwenda katikati ya mji."
},
{
  "norwegian": "Hun liker å male bilder om kvelden.",
  "russian": "Ей нравится рисовать картины вечером.",
  "english": "She likes to paint pictures in the evening.",
  "arabic": "هي تحب رسم الصور في المساء.",
  "swahili": "Anapenda kuchora picha jioni."
},
{
  "norwegian": "De ser stjerner på himmelen om natten.",
  "russian": "Они смотрят на звёзды на небе ночью.",
  "english": "They look at the stars in the sky at night.",
  "arabic": "هم ينظرون إلى النجوم في السماء ليلاً.",
  "swahili": "Wanatazama nyota angani usiku."
},
{
  "norwegian": "Jeg spiser en sandwich med ost.",
  "russian": "Я ем бутерброд с сыром.",
  "english": "I am eating a sandwich with cheese.",
  "arabic": "أنا آكل شطيرة بالجبن.",
  "swahili": "Ninakula sandwich na jibini."
},

  {
  "norwegian": "Han vanner blomstene i hagen.",
  "russian": "Он поливает цветы в саду.",
  "english": "He waters the flowers in the garden.",
  "arabic": "هو يسقي الزهور في الحديقة.",
  "swahili": "Anamwagilia maua kwenye bustani."
},
{
  "norwegian": "Vi baker brød i helgen.",
  "russian": "Мы печём хлеб на выходных.",
  "english": "We bake bread on the weekend.",
  "arabic": "نحن نخبز الخبز في عطلة نهاية الأسبوع.",
  "swahili": "Tunapika mkate mwishoni mwa wiki."
},
{
  "norwegian": "Hun går på biblioteket for å låne en bok.",
  "russian": "Она идёт в библиотеку, чтобы взять книгу.",
  "english": "She goes to the library to borrow a book.",
  "arabic": "هي تذهب إلى المكتبة لاستعارة كتاب.",
  "swahili": "Anaenda maktaba kuchukua kitabu."
},
{
  "norwegian": "Jeg slapper av hjemme etter jobben.",
  "russian": "Я отдыхаю дома после работы.",
  "english": "I relax at home after work.",
  "arabic": "أنا أسترخي في المنزل بعد العمل.",
  "swahili": "Ninapumzika nyumbani baada ya kazi."
},
{
  "norwegian": "De spiller piano sammen om kvelden.",
  "russian": "Они играют на пианино вместе вечером.",
  "english": "They play the piano together in the evening.",
  "arabic": "هم يعزفون على البيانو معًا في المساء.",
  "swahili": "Wanapiga piano pamoja jioni."
},
{
  "norwegian": "Vi besøker museet i byen.",
  "russian": "Мы посещаем музей в городе.",
  "english": "We visit the museum in the city.",
  "arabic": "نحن نزور المتحف في المدينة.",
  "swahili": "Tunatembelea jumba la makumbusho mjini."
},
{
  "norwegian": "Han kjøper en ny klokke på butikken.",
  "russian": "Он покупает новые часы в магазине.",
  "english": "He buys a new watch at the store.",
  "arabic": "هو يشتري ساعة جديدة في المتجر.",
  "swahili": "Ananunua saa mpya dukani."
},
{
  "norwegian": "Jeg skriver en e-post til sjefen min.",
  "russian": "Я пишу электронное письмо своему начальнику.",
  "english": "I am writing an email to my boss.",
  "arabic": "أنا أكتب بريدًا إلكترونيًا إلى رئيسي.",
  "swahili": "Ninaandika barua pepe kwa bosi wangu."
},
{
  "norwegian": "Hun går på tur i fjellet om sommeren.",
  "russian": "Она ходит в поход в горы летом.",
  "english": "She goes hiking in the mountains during the summer.",
  "arabic": "هي تذهب للتنزه في الجبال خلال الصيف.",
  "swahili": "Anaenda kupanda milima wakati wa majira ya joto."
},
{
  "norwegian": "De ser en regnbue etter regnet.",
  "russian": "Они видят радугу после дождя.",
  "english": "They see a rainbow after the rain.",
  "arabic": "هم يرون قوس قزح بعد المطر.",
  "swahili": "Wanaona upinde wa mvua baada ya mvua."
},
{
  "norwegian": "Jeg spiser en banan til frokost.",
  "russian": "Я ем банан на завтрак.",
  "english": "I eat a banana for breakfast.",
  "arabic": "أنا آكل موزة على الإفطار.",
  "swahili": "Ninakula ndizi kwa kifungua kinywa."
},
{
  "norwegian": "Vi hører på fuglene som synger i skogen.",
  "russian": "Мы слушаем птиц, которые поют в лесу.",
  "english": "We listen to the birds singing in the forest.",
  "arabic": "نستمع إلى الطيور تغني في الغابة.",
  "swahili": "Tunasikiliza ndege wanaoimba msituni."
},
{
  "norwegian": "Hun kjøper melk og brød på vei hjem.",
  "russian": "Она покупает молоко и хлеб по пути домой.",
  "english": "She buys milk and bread on her way home.",
  "arabic": "هي تشتري الحليب والخبز في طريقها إلى المنزل.",
  "swahili": "Ananunua maziwa na mkate akienda nyumbani."
},
{
  "norwegian": "De sitter ved bordet og snakker sammen.",
  "russian": "Они сидят за столом и разговаривают друг с другом.",
  "english": "They sit at the table and talk together.",
  "arabic": "يجلسون على الطاولة ويتحدثون معًا.",
  "swahili": "Wanakaa mezani na kuzungumza pamoja."
},
{
  "norwegian": "Han sover på sofaen i stua.",
  "russian": "Он спит на диване в гостиной.",
  "english": "He is sleeping on the sofa in the living room.",
  "arabic": "هو نائم على الأريكة في غرفة المعيشة.",
  "swahili": "Analala kwenye sofa katika chumba cha kukaa."
},
{
  "norwegian": "Jeg tar et bilde av fjellet.",
  "russian": "Я фотографирую гору.",
  "english": "I take a picture of the mountain.",
  "arabic": "ألتقط صورة للجبل.",
  "swahili": "Ninapiga picha ya mlima."
},
{
  "norwegian": "Vi lager pannekaker til barna.",
  "russian": "Мы готовим блины для детей.",
  "english": "We are making pancakes for the kids.",
  "arabic": "نحن نصنع الفطائر للأطفال.",
  "swahili": "Tunatengeneza pancakes kwa watoto."
},
{
  "norwegian": "Hun leser et eventyr for sønnen sin.",
  "russian": "Она читает сказку своему сыну.",
  "english": "She is reading a fairy tale to her son.",
  "arabic": "هي تقرأ قصة خيالية لابنها.",
  "swahili": "Anasoma hadithi ya mtoto wake wa kiume."
},
{
  "norwegian": "De ser på båtene i havna.",
  "russian": "Они смотрят на лодки в гавани.",
  "english": "They are looking at the boats in the harbor.",
  "arabic": "هم ينظرون إلى القوارب في الميناء.",
  "swahili": "Wanaangalia boti kwenye bandari."
},
{
  "norwegian": "Jeg går til legen fordi jeg er syk.",
  "russian": "Я иду к врачу, потому что я болен.",
  "english": "I am going to the doctor because I am sick.",
  "arabic": "أنا ذاهب إلى الطبيب لأنني مريض.",
  "swahili": "Ninaenda kwa daktari kwa sababu ni mgonjwa."
},
{
  "norwegian": "Jeg bor i Norge.",
  "russian": "Я живу в Норвегии.",
  "english": "I live in Norway.",
  "arabic": "أنا أعيش في النرويج.",
  "swahili": "Naishi Norway."
},

  {
  "norwegian": "Jeg heter Anna.",
  "russian": "Меня зовут Анна.",
  "english": "My name is Anna.",
  "arabic": "اسمي آنا.",
  "swahili": "Naitwa Anna."
},
{
  "norwegian": "Hvor er toalettet?",
  "russian": "Где находится туалет?",
  "english": "Where is the toilet?",
  "arabic": "أين الحمام؟",
  "swahili": "Wapi choo?"
},
{
  "norwegian": "Han kjøper melk i butikken.",
  "russian": "Он покупает молоко в магазине.",
  "english": "He buys milk at the store.",
  "arabic": "هو يشتري الحليب من المتجر.",
  "swahili": "Ananunua maziwa dukani."
},
{
  "norwegian": "Vi spiser middag klokka seks.",
  "russian": "Мы ужинаем в шесть часов.",
  "english": "We eat dinner at six o'clock.",
  "arabic": "نتناول العشاء في الساعة السادسة.",
  "swahili": "Tunakula chakula cha jioni saa sita."
},
{
  "norwegian": "De går til skolen hver dag.",
  "russian": "Они ходят в школу каждый день.",
  "english": "They go to school every day.",
  "arabic": "يذهبون إلى المدرسة كل يوم.",
  "swahili": "Wanaenda shuleni kila siku."
},
{
  "norwegian": "Jeg liker kaffe.",
  "russian": "Мне нравится кофе.",
  "english": "I like coffee.",
  "arabic": "أنا أحب القهوة.",
  "swahili": "Ninapenda kahawa."
},
{
  "norwegian": "Hun jobber på en restaurant.",
  "russian": "Она работает в ресторане.",
  "english": "She works at a restaurant.",
  "arabic": "هي تعمل في مطعم.",
  "swahili": "Anafanya kazi kwenye mgahawa."
},
{
  "norwegian": "Bussen kommer om ti minutter.",
  "russian": "Автобус прибудет через десять минут.",
  "english": "The bus arrives in ten minutes.",
  "arabic": "الحافلة تصل في غضون عشر دقائق.",
  "swahili": "Basi linakuja baada ya dakika kumi."
},
{
  "norwegian": "Vi skal på ferie neste uke.",
  "russian": "Мы поедем в отпуск на следующей неделе.",
  "english": "We are going on vacation next week.",
  "arabic": "سنذهب في إجازة الأسبوع المقبل.",
  "swahili": "Tunaenda likizo wiki ijayo."
},
{
  "norwegian": "Hun leser en bok i stua.",
  "russian": "Она читает книгу в гостиной.",
  "english": "She is reading a book in the living room.",
  "arabic": "هي تقرأ كتابًا في غرفة المعيشة.",
  "swahili": "Anasoma kitabu sebuleni."
},
{
  "norwegian": "Vi ser på TV om kvelden.",
  "russian": "Мы смотрим телевизор вечером.",
  "english": "We watch TV in the evening.",
  "arabic": "نشاهد التلفاز في المساء.",
  "swahili": "Tunaangalia TV jioni."
},
{
  "norwegian": "Barnet sover i senga.",
  "russian": "Ребёнок спит в кровати.",
  "english": "The child is sleeping in the bed.",
  "arabic": "الطفل نائم في السرير.",
  "swahili": "Mtoto analala kitandani."
},
{
  "norwegian": "Jeg spiser frokost klokka åtte.",
  "russian": "Я завтракаю в восемь часов.",
  "english": "I eat breakfast at eight o'clock.",
  "arabic": "أتناول الفطور في الساعة الثامنة.",
  "swahili": "Ninakula kifungua kinywa saa nane."
},
{
  "norwegian": "Han kjører bil til jobben.",
  "russian": "Он едет на машине на работу.",
  "english": "He drives to work.",
  "arabic": "هو يقود السيارة إلى العمل.",
  "swahili": "Anaendesha gari kwenda kazini."
},
{
  "norwegian": "De handler på butikken hver lørdag.",
  "russian": "Они делают покупки в магазине каждую субботу.",
  "english": "They shop at the store every Saturday.",
  "arabic": "يتسوقون في المتجر كل يوم سبت.",
  "swahili": "Wanunuzi dukani kila Jumamosi."
},
{
  "norwegian": "Jeg har en katt som heter Luna.",
  "russian": "У меня есть кошка по имени Луна.",
  "english": "I have a cat named Luna.",
  "arabic": "لدي قطة اسمها لونا.",
  "swahili": "Nina paka anayeitwa Luna."
},
{
  "norwegian": "Vi går en tur i parken.",
  "russian": "Мы гуляем в парке.",
  "english": "We are taking a walk in the park.",
  "arabic": "نحن نتمشى في الحديقة.",
  "swahili": "Tunatembea kwenye bustani."
},

  {
  "norwegian": "Han skriver et brev til sin venn.",
  "russian": "Он пишет письмо своему другу.",
  "english": "He is writing a letter to his friend.",
  "arabic": "هو يكتب رسالة إلى صديقه.",
  "swahili": "Anaandika barua kwa rafiki yake."
},
{
  "norwegian": "Huset deres er veldig stort.",
  "russian": "Их дом очень большой.",
  "english": "Their house is very big.",
  "arabic": "منزلهم كبير جدًا.",
  "swahili": "Nyumba yao ni kubwa sana."
},
{
  "norwegian": "Jeg liker å gå tur i skogen.",
  "russian": "Мне нравится гулять в лесу.",
  "english": "I like to walk in the forest.",
  "arabic": "أحب المشي في الغابة.",
  "swahili": "Ninapenda kutembea msituni."
},
{
  "norwegian": "De spiser is i sola.",
  "russian": "Они едят мороженое на солнце.",
  "english": "They are eating ice cream in the sun.",
  "arabic": "هم يأكلون الآيس كريم في الشمس.",
  "swahili": "Wanapiga ice cream juani."
},
{
  "norwegian": "Han drikker vann fra glasset.",
  "russian": "Он пьёт воду из стакана.",
  "english": "He drinks water from the glass.",
  "arabic": "هو يشرب الماء من الكأس.",
  "swahili": "Anakunywa maji kutoka kwenye glasi."
},
{
  "norwegian": "Vi bor i et lite hus på landet.",
  "russian": "Мы живём в маленьком доме в деревне.",
  "english": "We live in a small house in the countryside.",
  "arabic": "نحن نعيش في منزل صغير في الريف.",
  "swahili": "Tunaishi katika nyumba ndogo mashambani."
},
{
  "norwegian": "Hun kjøper blomster på torget.",
  "russian": "Она покупает цветы на рынке.",
  "english": "She buys flowers at the market.",
  "arabic": "هي تشتري الزهور في السوق.",
  "swahili": "Ananunua maua sokoni."
},
{
  "norwegian": "Jeg trener på treningssenteret.",
  "russian": "Я занимаюсь в спортзале.",
  "english": "I work out at the gym.",
  "arabic": "أنا أتمرن في الصالة الرياضية.",
  "swahili": "Ninafanya mazoezi kwenye gym."
},
{
  "norwegian": "De studerer norsk på skolen.",
  "russian": "Они учат норвежский в школе.",
  "english": "They study Norwegian at school.",
  "arabic": "هم يدرسون النرويجية في المدرسة.",
  "swahili": "Wanasoma Kinyorwegian shuleni."
},
{
  "norwegian": "Han venter på bussen i regnet.",
  "russian": "Он ждёт автобус под дождём.",
  "english": "He is waiting for the bus in the rain.",
  "arabic": "هو ينتظر الحافلة في المطر.",
  "swahili": "Anangojea basi mvua inaponyesha."
},
{
  "norwegian": "Katten sitter på stolen.",
  "russian": "Кошка сидит на стуле.",
  "english": "The cat is sitting on the chair.",
  "arabic": "القطة تجلس على الكرسي.",
  "swahili": "Paka anakaa kwenye kiti."
},
{
  "norwegian": "Vi lager middag sammen i kveld.",
  "russian": "Мы готовим ужин вместе сегодня вечером.",
  "english": "We are cooking dinner together tonight.",
  "arabic": "نحن نطبخ العشاء معًا الليلة.",
  "swahili": "Tunapika chakula cha jioni pamoja usiku wa leo."
},
{
  "norwegian": "Hun sykler til skolen hver morgen.",
  "russian": "Она едет на велосипеде в школу каждое утро.",
  "english": "She cycles to school every morning.",
  "arabic": "هي تركب الدراجة إلى المدرسة كل صباح.",
  "swahili": "Anaendesha baiskeli kwenda shuleni kila asubuhi."
},
{
  "norwegian": "Jeg kjøper grønnsaker på butikken.",
  "russian": "Я покупаю овощи в магазине.",
  "english": "I buy vegetables at the store.",
  "arabic": "أنا أشتري الخضروات من المتجر.",
  "swahili": "Ninanunua mboga dukani."
},
{
  "norwegian": "Vi besøker besteforeldrene våre i helgen.",
  "russian": "Мы навещаем наших бабушку и дедушку на выходных.",
  "english": "We are visiting our grandparents this weekend.",
  "arabic": "نحن نزور أجدادنا في نهاية هذا الأسبوع.",
  "swahili": "Tunatembelea babu na bibi zetu mwishoni mwa wiki hii."
},
{
  "norwegian": "Han ser en fugl i treet.",
  "russian": "Он видит птицу на дереве.",
  "english": "He sees a bird in the tree.",
  "arabic": "هو يرى طائرًا في الشجرة.",
  "swahili": "Anaona ndege kwenye mti."
},
{
  "norwegian": "Barnet leker med ballen i hagen.",
  "russian": "Ребёнок играет с мячом в саду.",
  "english": "The child is playing with the ball in the garden.",
  "arabic": "الطفل يلعب بالكرة في الحديقة.",
  "swahili": "Mtoto anacheza na mpira bustanini."
},
{
  "norwegian": "Jeg skriver i dagboka mi hver kveld.",
  "russian": "Я пишу в своём дневнике каждый вечер.",
  "english": "I write in my diary every evening.",
  "arabic": "أكتب في مذكرتي كل مساء.",
  "swahili": "Ninaandika katika shajara yangu kila jioni."
},
{
  "norwegian": "De leser avisen ved bordet.",
  "russian": "Они читают газету за столом.",
  "english": "They are reading the newspaper at the table.",
  "arabic": "هم يقرؤون الصحيفة على الطاولة.",
  "swahili": "Wanasoma gazeti mezani."
},
{
  "norwegian": "Vi lager kake til bursdagen hans.",
  "russian": "Мы готовим торт к его дню рождения.",
  "english": "We are making a cake for his birthday.",
  "arabic": "نحن نصنع كعكة لعيد ميلاده.",
  "swahili": "Tunatengeneza keki kwa ajili ya siku yake ya kuzaliwa."
},
{
  "norwegian": "Hun drømmer om å reise til Italia.",
  "russian": "Она мечтает о поездке в Италию.",
  "english": "She dreams of traveling to Italy.",
  "arabic": "هي تحلم بالسفر إلى إيطاليا.",
  "swahili": "Anaota kusafiri kwenda Italia."
},

  {
  "norwegian": "Jeg liker å høre på musikk når jeg jobber.",
  "russian": "Мне нравится слушать музыку, когда я работаю.",
  "english": "I like listening to music when I work.",
  "arabic": "أحب الاستماع إلى الموسيقى عندما أعمل.",
  "swahili": "Napenda kusikiliza muziki ninapofanya kazi."
},
{
  "norwegian": "Jeg står opp klokka sju hver dag.",
  "russian": "Я встаю в семь часов каждый день.",
  "english": "I get up at seven o'clock every day.",
  "arabic": "أستيقظ في الساعة السابعة كل يوم.",
  "swahili": "Ninaamka saa saba kila siku."
},
{
  "norwegian": "Hun tar toget til byen.",
  "russian": "Она едет на поезде в город.",
  "english": "She takes the train to the city.",
  "arabic": "تأخذ القطار إلى المدينة.",
  "swahili": "Anachukua treni kwenda mjini."
},
{
  "norwegian": "Vi liker å spille fotball etter skolen.",
  "russian": "Нам нравится играть в футбол после школы.",
  "english": "We like to play football after school.",
  "arabic": "نحب لعب كرة القدم بعد المدرسة.",
  "swahili": "Tunapenda kucheza mpira wa miguu baada ya shule."
},
{
  "norwegian": "Han har en bror og en søster.",
  "russian": "У него есть брат и сестра.",
  "english": "He has a brother and a sister.",
  "arabic": "لديه أخ وأخت.",
  "swahili": "Ana ndugu na dada."
},
{
  "norwegian": "Jeg drikker te med sitron.",
  "russian": "Я пью чай с лимоном.",
  "english": "I drink tea with lemon.",
  "arabic": "أشرب الشاي بالليمون.",
  "swahili": "Ninakunywa chai na limau."
},
{
  "norwegian": "De bor i en leilighet i sentrum.",
  "russian": "Они живут в квартире в центре города.",
  "english": "They live in an apartment in the city center.",
  "arabic": "يعيشون في شقة في وسط المدينة.",
  "swahili": "Wanaishi katika ghorofa katikati ya mji."
  },
// const sentences = [
{
  "norwegian": "Hun lager en salat til lunsj.",
  "russian": "Она готовит салат на обед.",
  "english": "She makes a salad for lunch.",
  "arabic": "تعد سلطة للغداء.",
  "swahili": "Anatengeneza saladi kwa chakula cha mchana."
  }
];

export default sentences;
