const sentences = [
  {
    "norwegian": "Jeg bor i Norge.",
    "russian": "Я живу в Норвегии.",
    "english": "I live in Norway.",
    "arabic": "أنا أعيش في النرويج."
  },
  {
    "norwegian": "Jeg heter Anna.",
    "russian": "Меня зовут Анна.",
    "english": "My name is Anna.",
    "arabic": "اسمي آنا."
  },
  {
    "norwegian": "Hvor er toalettet?",
    "russian": "Где находится туалет?",
    "english": "Where is the toilet?",
    "arabic": "أين الحمام؟"
  },
  {
    "norwegian": "Han kjøper melk i butikken.",
    "russian": "Он покупает молоко в магазине.",
    "english": "He buys milk at the store.",
    "arabic": "هو يشتري الحليب من المتجر."
  },
  {
    "norwegian": "Vi spiser middag klokka seks.",
    "russian": "Мы ужинаем в шесть часов.",
    "english": "We eat dinner at six o'clock.",
    "arabic": "نتناول العشاء في الساعة السادسة."
  },
  {
    "norwegian": "De går til skolen hver dag.",
    "russian": "Они ходят в школу каждый день.",
    "english": "They go to school every day.",
    "arabic": "يذهبون إلى المدرسة كل يوم."
  },
  {
    "norwegian": "Jeg liker kaffe.",
    "russian": "Мне нравится кофе.",
    "english": "I like coffee.",
    "arabic": "أنا أحب القهوة."
  },
  {
    "norwegian": "Hun jobber på en restaurant.",
    "russian": "Она работает в ресторане.",
    "english": "She works at a restaurant.",
    "arabic": "هي تعمل في مطعم."
  },
  {
    "norwegian": "Bussen kommer om ti minutter.",
    "russian": "Автобус прибудет через десять минут.",
    "english": "The bus arrives in ten minutes.",
    "arabic": "الحافلة تصل في غضون عشر دقائق."
  },
  {
    "norwegian": "Vi skal på ferie neste uke.",
    "russian": "Мы поедем в отпуск на следующей неделе.",
    "english": "We are going on vacation next week.",
    "arabic": "سنذهب في إجازة الأسبوع المقبل."
  },
  {
    "norwegian": "Hun leser en bok i stua.",
    "russian": "Она читает книгу в гостиной.",
    "english": "She is reading a book in the living room.",
    "arabic": "هي تقرأ كتابًا في غرفة المعيشة."
  },
  {
    "norwegian": "Vi ser på TV om kvelden.",
    "russian": "Мы смотрим телевизор вечером.",
    "english": "We watch TV in the evening.",
    "arabic": "نشاهد التلفاز في المساء."
  },
  {
    "norwegian": "Barnet sover i senga.",
    "russian": "Ребёнок спит в кровати.",
    "english": "The child is sleeping in the bed.",
    "arabic": "الطفل نائم في السرير."
  },
  {
    "norwegian": "Jeg spiser frokost klokka åtte.",
    "russian": "Я завтракаю в восемь часов.",
    "english": "I eat breakfast at eight o'clock.",
    "arabic": "أتناول الفطور في الساعة الثامنة."
  },
  {
    "norwegian": "Han kjører bil til jobben.",
    "russian": "Он едет на машине на работу.",
    "english": "He drives to work.",
    "arabic": "هو يقود السيارة إلى العمل."
  },
  {
    "norwegian": "De handler på butikken hver lørdag.",
    "russian": "Они делают покупки в магазине каждую субботу.",
    "english": "They shop at the store every Saturday.",
    "arabic": "يتسوقون في المتجر كل يوم سبت."
  },
  {
    "norwegian": "Jeg har en katt som heter Luna.",
    "russian": "У меня есть кошка по имени Луна.",
    "english": "I have a cat named Luna.",
    "arabic": "لدي قطة اسمها لونا."
  },
  {
    "norwegian": "Vi går en tur i parken.",
    "russian": "Мы гуляем в парке.",
    "english": "We are taking a walk in the park.",
    "arabic": "نحن نتمشى في الحديقة."
  },
  {
    "norwegian": "Han skriver et brev til sin venn.",
    "russian": "Он пишет письмо своему другу.",
    "english": "He is writing a letter to his friend.",
    "arabic": "هو يكتب رسالة إلى صديقه."
  },
  {
    "norwegian": "Huset deres er veldig stort.",
    "russian": "Их дом очень большой.",
    "english": "Their house is very big.",
    "arabic": "منزلهم كبير جدًا."
  },
 
  {
    "norwegian": "Jeg liker å gå tur i skogen.",
    "russian": "Мне нравится гулять в лесу.",
    "english": "I like to walk in the forest.",
    "arabic": "أحب المشي في الغابة."
  },
  {
    "norwegian": "De spiser is i sola.",
    "russian": "Они едят мороженое на солнце.",
    "english": "They are eating ice cream in the sun.",
    "arabic": "هم يأكلون الآيس كريم في الشمس."
  },
  {
    "norwegian": "Han drikker vann fra glasset.",
    "russian": "Он пьёт воду из стакана.",
    "english": "He drinks water from the glass.",
    "arabic": "هو يشرب الماء من الكأس."
  },
  {
    "norwegian": "Vi bor i et lite hus på landet.",
    "russian": "Мы живём в маленьком доме в деревне.",
    "english": "We live in a small house in the countryside.",
    "arabic": "نحن نعيش في منزل صغير في الريف."
  },
  {
    "norwegian": "Hun kjøper blomster på torget.",
    "russian": "Она покупает цветы на рынке.",
    "english": "She buys flowers at the market.",
    "arabic": "هي تشتري الزهور في السوق."
  },
  {
    "norwegian": "Jeg trener på treningssenteret.",
    "russian": "Я занимаюсь в спортзале.",
    "english": "I work out at the gym.",
    "arabic": "أنا أتمرن في الصالة الرياضية."
  },
  {
    "norwegian": "De studerer norsk på skolen.",
    "russian": "Они учат норвежский в школе.",
    "english": "They study Norwegian at school.",
    "arabic": "هم يدرسون النرويجية في المدرسة."
  },
  {
    "norwegian": "Han venter på bussen i regnet.",
    "russian": "Он ждёт автобус под дождём.",
    "english": "He is waiting for the bus in the rain.",
    "arabic": "هو ينتظر الحافلة في المطر."
  },
  {
    "norwegian": "Katten sitter på stolen.",
    "russian": "Кошка сидит на стуле.",
    "english": "The cat is sitting on the chair.",
    "arabic": "القطة تجلس على الكرسي."
  },
  {
    "norwegian": "Vi lager middag sammen i kveld.",
    "russian": "Мы готовим ужин вместе сегодня вечером.",
    "english": "We are cooking dinner together tonight.",
    "arabic": "نحن نطبخ العشاء معًا الليلة."
  },
  {
    "norwegian": "Hun sykler til skolen hver morgen.",
    "russian": "Она едет на велосипеде в школу каждое утро.",
    "english": "She cycles to school every morning.",
    "arabic": "هي تركب الدراجة إلى المدرسة كل صباح."
  },
  {
    "norwegian": "Jeg kjøper grønnsaker på butikken.",
    "russian": "Я покупаю овощи в магазине.",
    "english": "I buy vegetables at the store.",
    "arabic": "أنا أشتري الخضروات من المتجر."
  },
  {
    "norwegian": "Vi besøker besteforeldrene våre i helgen.",
    "russian": "Мы навещаем наших бабушку и дедушку на выходных.",
    "english": "We are visiting our grandparents this weekend.",
    "arabic": "نحن نزور أجدادنا في نهاية هذا الأسبوع."
  },
  {
    "norwegian": "Han ser en fugl i treet.",
    "russian": "Он видит птицу на дереве.",
    "english": "He sees a bird in the tree.",
    "arabic": "هو يرى طائرًا في الشجرة."
  },
  {
    "norwegian": "Barnet leker med ballen i hagen.",
    "russian": "Ребёнок играет с мячом в саду.",
    "english": "The child is playing with the ball in the garden.",
    "arabic": "الطفل يلعب بالكرة في الحديقة."
  },
  {
    "norwegian": "Jeg skriver i dagboka mi hver kveld.",
    "russian": "Я пишу в своём дневнике каждый вечер.",
    "english": "I write in my diary every evening.",
    "arabic": "أكتب في مذكرتي كل مساء."
  },
  {
    "norwegian": "De leser avisen ved bordet.",
    "russian": "Они читают газету за столом.",
    "english": "They are reading the newspaper at the table.",
    "arabic": "هم يقرؤون الصحيفة على الطاولة."
  },
  {
    "norwegian": "Vi lager kake til bursdagen hans.",
    "russian": "Мы готовим торт к его дню рождения.",
    "english": "We are making a cake for his birthday.",
    "arabic": "نحن نصنع كعكة لعيد ميلاده."
  },
  {
    "norwegian": "Hun drømmer om å reise til Italia.",
    "russian": "Она мечтает о поездке в Италию.",
    "english": "She dreams of traveling to Italy.",
    "arabic": "هي تحلم بالسفر إلى إيطاليا."
  },
  {
    "norwegian": "Jeg liker å høre på musikk når jeg jobber.",
    "russian": "Мне нравится слушать музыку, когда я работаю.",
    "english": "I like listening to music when I work.",
    "arabic": "أحب الاستماع إلى الموسيقى عندما أعمل."
  },
  {
    "norwegian": "Jeg står opp klokka sju hver dag.",
    "russian": "Я встаю в семь часов каждый день.",
    "english": "I get up at seven o'clock every day.",
    "arabic": "أستيقظ في الساعة السابعة كل يوم."
  },
  {
    "norwegian": "Hun tar toget til byen.",
    "russian": "Она едет на поезде в город.",
    "english": "She takes the train to the city.",
    "arabic": "تأخذ القطار إلى المدينة."
  },
  {
    "norwegian": "Vi liker å spille fotball etter skolen.",
    "russian": "Нам нравится играть в футбол после школы.",
    "english": "We like to play football after school.",
    "arabic": "نحب لعب كرة القدم بعد المدرسة."
  },
  {
    "norwegian": "Han har en bror og en søster.",
    "russian": "У него есть брат и сестра.",
    "english": "He has a brother and a sister.",
    "arabic": "لديه أخ وأخت."
  },
  {
    "norwegian": "Jeg drikker te med sitron.",
    "russian": "Я пью чай с лимоном.",
    "english": "I drink tea with lemon.",
    "arabic": "أشرب الشاي بالليمون."
  },
  {
    "norwegian": "De bor i en leilighet i sentrum.",
    "russian": "Они живут в квартире в центре города.",
    "english": "They live in an apartment in the city center.",
    "arabic": "يعيشون في شقة في وسط المدينة."
  },
  {
    "norwegian": "Hun lager en salat til lunsj.",
    "russian": "Она готовит салат на обед.",
    "english": "She makes a salad for lunch.",
    "arabic": "تعد سلطة للغداء."
  },
  {
    "norwegian": "Jeg må kjøpe nye sko i dag.",
    "russian": "Мне нужно купить новые туфли сегодня.",
    "english": "I need to buy new shoes today.",
    "arabic": "أحتاج لشراء أحذية جديدة اليوم."
  },
  {
    "norwegian": "Vi leser en spennende bok sammen.",
    "russian": "Мы вместе читаем увлекательную книгу.",
    "english": "We are reading an exciting book together.",
    "arabic": "نقرأ كتابًا مثيرًا معًا."
  },
  {
    "norwegian": "Han liker å tegne bilder av dyr.",
    "russian": "Ему нравится рисовать картинки с животными.",
    "english": "He likes to draw pictures of animals.",
    "arabic": "يحب رسم صور للحيوانات."
  },
  {
    "norwegian": "Jeg går til butikken for å kjøpe brød.",
    "russian": "Я иду в магазин, чтобы купить хлеб.",
    "english": "I am going to the store to buy bread.",
    "arabic": "أذهب إلى المتجر لشراء الخبز."
  },
  {
    "norwegian": "De svømmer i sjøen om sommeren.",
    "russian": "Они плавают в море летом.",
    "english": "They swim in the sea during the summer.",
    "arabic": "يسبحون في البحر خلال الصيف."
  },
  {
    "norwegian": "Vi spiser epler fra treet i hagen.",
    "russian": "Мы едим яблоки с дерева в саду.",
    "english": "We eat apples from the tree in the garden.",
    "arabic": "نأكل التفاح من الشجرة في الحديقة."
  },
  {
    "norwegian": "Hun vasker klær på mandager.",
    "russian": "Она стирает одежду по понедельникам.",
    "english": "She washes clothes on Mondays.",
    "arabic": "تغسل الملابس أيام الاثنين."
  },
  {
    "norwegian": "Jeg ser en film på kino i kveld.",
    "russian": "Я смотрю фильм в кинотеатре сегодня вечером.",
    "english": "I am watching a movie at the cinema tonight.",
    "arabic": "أشاهد فيلمًا في السينما الليلة."
  },
  {
    "norwegian": "De leker i snøen om vinteren.",
    "russian": "Они играют в снегу зимой.",
    "english": "They play in the snow during winter.",
    "arabic": "يلعبون في الثلج خلال الشتاء."
  },
  {
    "norwegian": "Vi lærer nye ord på norsk hver dag.",
    "russian": "Мы учим новые слова на норвежском каждый день.",
    "english": "We learn new words in Norwegian every day.",
    "arabic": "نتعلم كلمات جديدة باللغة النرويجية كل يوم."
  },
  {
    "norwegian": "Hun kjøper en rød kjole til festen.",
    "russian": "Она покупает красное платье для вечеринки.",
    "english": "She buys a red dress for the party.",
    "arabic": "تشتري فستانًا أحمر للحفلة."
  },
  {
    "norwegian": "Jeg hører på radio om morgenen.",
    "russian": "Я слушаю радио по утрам.",
    "english": "I listen to the radio in the morning.",
    "arabic": "أستمع إلى الراديو في الصباح."
  },
  {
    "norwegian": "De spiser middag ute på terrassen.",
    "russian": "Они ужинают на террасе.",
    "english": "They eat dinner outside on the terrace.",
    "arabic": "يتناولون العشاء في الخارج على التراس."
  },
  {
    "norwegian": "Han går en tur langs elva.",
    "russian": "Он гуляет вдоль реки.",
    "english": "He takes a walk along the river.",
    "arabic": "هو يمشي على طول النهر."
  },
  {
    "norwegian": "Vi kjøper billetter til toget.",
    "russian": "Мы покупаем билеты на поезд.",
    "english": "We are buying tickets for the train.",
    "arabic": "نحن نشتري تذاكر القطار."
  },
  {
    "norwegian": "Hun drikker kaffe på kafeen.",
    "russian": "Она пьёт кофе в кафе.",
    "english": "She drinks coffee at the café.",
    "arabic": "هي تشرب القهوة في المقهى."
  },
  {
    "norwegian": "Jeg sender et postkort til en venn.",
    "russian": "Я отправляю открытку другу.",
    "english": "I am sending a postcard to a friend.",
    "arabic": "أنا أرسل بطاقة بريدية إلى صديق."
  },
  {
    "norwegian": "De spiller kort på hytta.",
    "russian": "Они играют в карты на даче.",
    "english": "They are playing cards at the cabin.",
    "arabic": "هم يلعبون الورق في الكابينة."
  },
  {
    "norwegian": "Vi feirer bursdagen hennes i dag.",
    "russian": "Мы отмечаем её день рождения сегодня.",
    "english": "We are celebrating her birthday today.",
    "arabic": "نحن نحتفل بعيد ميلادها اليوم."
  },
  {
    "norwegian": "Jeg må ta en buss til sentrum.",
    "russian": "Мне нужно сесть на автобус до центра.",
    "english": "I need to take a bus to the city center.",
    "arabic": "أحتاج إلى ركوب الحافلة إلى وسط المدينة."
  },
  {
    "norwegian": "Hun liker å male bilder om kvelden.",
    "russian": "Ей нравится рисовать картины вечером.",
    "english": "She likes to paint pictures in the evening.",
    "arabic": "هي تحب رسم الصور في المساء."
  },
  {
    "norwegian": "De ser stjerner på himmelen om natten.",
    "russian": "Они смотрят на звёзды на небе ночью.",
    "english": "They look at the stars in the sky at night.",
    "arabic": "هم ينظرون إلى النجوم في السماء ليلاً."
  },
  {
    "norwegian": "Jeg spiser en sandwich med ost.",
    "russian": "Я ем бутерброд с сыром.",
    "english": "I am eating a sandwich with cheese.",
    "arabic": "أنا آكل شطيرة بالجبن."
  },
  {
    "norwegian": "Han vanner blomstene i hagen.",
    "russian": "Он поливает цветы в саду.",
    "english": "He waters the flowers in the garden.",
    "arabic": "هو يسقي الزهور في الحديقة."
  },
  {
    "norwegian": "Vi baker brød i helgen.",
    "russian": "Мы печём хлеб на выходных.",
    "english": "We bake bread on the weekend.",
    "arabic": "نحن نخبز الخبز في عطلة نهاية الأسبوع."
  },
  {
    "norwegian": "Hun går på biblioteket for å låne en bok.",
    "russian": "Она идёт в библиотеку, чтобы взять книгу.",
    "english": "She goes to the library to borrow a book.",
    "arabic": "هي تذهب إلى المكتبة لاستعارة كتاب."
  },
  {
    "norwegian": "Jeg slapper av hjemme etter jobben.",
    "russian": "Я отдыхаю дома после работы.",
    "english": "I relax at home after work.",
    "arabic": "أنا أسترخي في المنزل بعد العمل."
  },
  {
    "norwegian": "De spiller piano sammen om kvelden.",
    "russian": "Они играют на пианино вместе вечером.",
    "english": "They play the piano together in the evening.",
    "arabic": "هم يعزفون على البيانو معًا في المساء."
  },
  {
    "norwegian": "Vi besøker museet i byen.",
    "russian": "Мы посещаем музей в городе.",
    "english": "We visit the museum in the city.",
    "arabic": "نحن نزور المتحف في المدينة."
  },
  {
    "norwegian": "Han kjøper en ny klokke på butikken.",
    "russian": "Он покупает новые часы в магазине.",
    "english": "He buys a new watch at the store.",
    "arabic": "هو يشتري ساعة جديدة في المتجر."
  },
  {
    "norwegian": "Jeg skriver en e-post til sjefen min.",
    "russian": "Я пишу электронное письмо своему начальнику.",
    "english": "I am writing an email to my boss.",
    "arabic": "أنا أكتب بريدًا إلكترونيًا إلى رئيسي."
  },
  {
    "norwegian": "Hun går på tur i fjellet om sommeren.",
    "russian": "Она ходит в поход в горы летом.",
    "english": "She goes hiking in the mountains during the summer.",
    "arabic": "هي تذهب للتنزه في الجبال خلال الصيف."
  },
  {
    "norwegian": "De ser en regnbue etter regnet.",
    "russian": "Они видят радугу после дождя.",
    "english": "They see a rainbow after the rain.",
    "arabic": "هم يرون قوس قزح بعد المطر."
  },
  {
    "norwegian": "Jeg spiser en banan til frokost.",
    "russian": "Я ем банан на завтрак.",
    "english": "I eat a banana for breakfast.",
    "arabic": "أنا آكل موزة على الإفطار."
  },
  {
    "norwegian": "Vi hører på fuglene som synger i skogen.",
    "russian": "Мы слушаем птиц, которые поют в лесу.",
    "english": "We listen to the birds singing in the forest.",
    "arabic": "نستمع إلى الطيور تغني في الغابة."
  },
  {
    "norwegian": "Hun kjøper melk og brød på vei hjem.",
    "russian": "Она покупает молоко и хлеб по пути домой.",
    "english": "She buys milk and bread on her way home.",
    "arabic": "هي تشتري الحليب والخبز في طريقها إلى المنزل."
  },
  {
    "norwegian": "De sitter ved bordet og snakker sammen.",
    "russian": "Они сидят за столом и разговаривают друг с другом.",
    "english": "They sit at the table and talk together.",
    "arabic": "يجلسون على الطاولة ويتحدثون معًا."
  },
  {
    "norwegian": "Han sover på sofaen i stua.",
    "russian": "Он спит на диване в гостиной.",
    "english": "He is sleeping on the sofa in the living room.",
    "arabic": "هو نائم على الأريكة في غرفة المعيشة."
  },
  {
    "norwegian": "Jeg tar et bilde av fjellet.",
    "russian": "Я фотографирую гору.",
    "english": "I take a picture of the mountain.",
    "arabic": "ألتقط صورة للجبل."
  },
  {
    "norwegian": "Vi lager pannekaker til barna.",
    "russian": "Мы готовим блины для детей.",
    "english": "We are making pancakes for the kids.",
    "arabic": "نحن نصنع الفطائر للأطفال."
  },
  {
    "norwegian": "Hun leser et eventyr for sønnen sin.",
    "russian": "Она читает сказку своему сыну.",
    "english": "She is reading a fairy tale to her son.",
    "arabic": "هي تقرأ قصة خيالية لابنها."
  },
  {
    "norwegian": "De ser på båtene i havna.",
    "russian": "Они смотрят на лодки в гавани.",
    "english": "They are looking at the boats in the harbor.",
    "arabic": "هم ينظرون إلى القوارب في الميناء."
  },
  {
    "norwegian": "Jeg går til legen fordi jeg er syk.",
    "russian": "Я иду к врачу, потому что я болен.",
    "english": "I am going to the doctor because I am sick.",
    "arabic": "أنا ذاهب إلى الطبيب لأنني مريض."
  }

];




const extraWords = [ "og", "men", "eller", "fordi", "hvis", "når", "hvorfor", "hvordan", "hva", "hvem", "derfor", "som", "at", "om", "så", 
  "jeg", "du", "han", "hun", "vi", "de", "en", "et", "den", "det", "på", "i", "til", "med", "av", "fra", "for", "over", 
  "under", "eller", "eller", "nå", "her", "der", "hvor", "når", "da", "skal", "kan", "vil", "må", "gå", "spise", "drikke", 
  "se", "høre", "være", "gjøre", "ta", "ha", "få", "sove", "stå", "sitte", "ligge", "leke", "arbeide", "spille", "kjenne"];


let currentSentence = {};
let selectedWords = [];
let correctCount = 0;
let incorrectCount = 0;
let recognition;
let selectedLanguage = localStorage.getItem('selectedLanguage') || 'norwegian';



function getRandomSentence() {
  const weights = sentences.map((_, index) => (index === sentences.length - 1 ? 5 : 1)); // Увеличиваем вес последнего предложения
  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
  const random = Math.random() * totalWeight;
  let cumulativeWeight = 0;

  for (let i = 0; i < sentences.length; i++) {
    cumulativeWeight += weights[i];
    if (random < cumulativeWeight) {
      return sentences[i];
    }
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomWords(words, count) {
  const shuffledWords = shuffleArray([...words]);
  return shuffledWords.slice(0, count);
}

function displaySentence() {
  currentSentence = getRandomSentence();
  document.getElementById("russianSentence").textContent = currentSentence[selectedLanguage];
  document.getElementById("sentence").textContent = "";
  const words = currentSentence.norwegian.split(/(\s|,|\.|!|\?)/).filter(word => word.trim() !== "");
  const randomExtraWords = getRandomWords(extraWords, 16 - words.length);
  const allWords = shuffleArray([...words, ...randomExtraWords]);
  const wordsContainer = document.getElementById("wordsContainer");
  wordsContainer.innerHTML = "";
  allWords.forEach(word => {
    const wordElement = document.createElement("button");
    wordElement.textContent = word;
    wordElement.classList.add("word");
    wordElement.onclick = () => selectWord(word, wordElement);
    wordsContainer.appendChild(wordElement);
  });
}

function selectWord(word, wordElement) {
  selectedWords.push(word);
  wordElement.style.display = "none";
  const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
  document.getElementById("sentence").textContent = selectedSentence;
  document.getElementById("feedback").textContent = "";
  document.getElementById("correctAnswer").textContent = "";
  document.getElementById("userAnswer").textContent = "";
  speak(word); // Озвучиваем выбранное слово
}

function removeLastWord() {
  if (selectedWords.length > 0) {
    const lastWord = selectedWords.pop();
    const wordsContainer = document.getElementById("wordsContainer");
    const wordElement = document.createElement("button");
    wordElement.textContent = lastWord;
    wordElement.classList.add("word");
    wordElement.onclick = () => selectWord(lastWord, wordElement);
    wordsContainer.appendChild(wordElement);
    const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
    document.getElementById("sentence").textContent = selectedSentence;
  }
}

function normalizeSentence(sentence) {
  return sentence.replace(/\s*([,\.!?])\s*/g, "$1").trim();
}

function formatSentence(sentence) {
  // Преобразуем первую букву в заглавную
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  // Добавляем точку в конце предложения, если её нет
  if (!/[.!?]$/.test(sentence)) {
    sentence += '.';
  }

  return sentence;
}

function checkAnswer() {
  const selectedSentence = normalizeSentence(selectedWords.join(" "));
  const correctSentence = normalizeSentence(currentSentence.norwegian);
  const formattedSelectedSentence = formatSentence(selectedSentence);
  const formattedCorrectSentence = formatSentence(correctSentence);

  if (formattedSelectedSentence === formattedCorrectSentence) {
    document.getElementById("feedback").textContent = "Riktig!";
    document.getElementById("feedback").style.color = "green";
    document.getElementById("correctAnswer").textContent = "";
    document.getElementById("userAnswer").textContent = "";
    correctCount++;
    document.getElementById("correctCount").textContent = correctCount;
  } else {
    document.getElementById("feedback").textContent = "Feil. Prøv igjen.";
    document.getElementById("feedback").style.color = "red";
    document.getElementById("correctAnswer").textContent = `Riktig svar: ${formattedCorrectSentence}`;
    document.getElementById("userAnswer").textContent = `Din svar: ${formattedSelectedSentence}`;
    incorrectCount++;
    document.getElementById("incorrectCount").textContent = incorrectCount;
  }
  selectedWords = [];
  displaySentence();
  speak(formattedCorrectSentence); // Озвучиваем правильное предложение
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "nb-NO"; // Устанавливаем язык на норвежский букмол
  window.speechSynthesis.speak(utterance);
}

function startVoiceInput() {
  if (!recognition) {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "nb-NO"; // Устанавливаем язык на норвежский букмол
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      const words = transcript.split(/\s+/);
      selectedWords = words;
      const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
      const formattedSentence = formatSentence(selectedSentence);
      document.getElementById("sentence").textContent = formattedSentence;
      document.getElementById("feedback").textContent = "";
      document.getElementById("correctAnswer").textContent = "";
      document.getElementById("userAnswer").textContent = "";
    };

    recognition.onerror = function(event) {
      console.error("Ошибка распознавания речи: ", event.error);
    };
  }

  recognition.start();
}

function stopVoiceInput() {
  if (recognition) {
    recognition.stop();
  }
}

window.onload = function() {
  displaySentence();
  document.getElementById("checkAnswer").onclick = checkAnswer;
  document.getElementById("removeLastWord").onclick = removeLastWord;
  const micButton = document.getElementById("startVoiceInput");
  micButton.onmousedown = startVoiceInput;
  micButton.onmouseup = stopVoiceInput;
  micButton.ontouchstart = startVoiceInput;
  micButton.ontouchend = stopVoiceInput;
};


// function getRandomSentence() {
//   return sentences[Math.floor(Math.random() * sentences.length)];
// }

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// function getRandomWords(words, count) {
//   const shuffledWords = shuffleArray([...words]);
//   return shuffledWords.slice(0, count);
// }

// function displaySentence() {
//   currentSentence = getRandomSentence();
//   document.getElementById("russianSentence").textContent = currentSentence[selectedLanguage];
//   document.getElementById("sentence").textContent = "";
//   const words = currentSentence.norwegian.split(/(\s|,|\.|!|\?)/).filter(word => word.trim() !== "");
//   const randomExtraWords = getRandomWords(extraWords, 16 - words.length);
//   const allWords = shuffleArray([...words, ...randomExtraWords]);
//   const wordsContainer = document.getElementById("wordsContainer");
//   wordsContainer.innerHTML = "";
//   allWords.forEach(word => {
//     const wordElement = document.createElement("button");
//     wordElement.textContent = word;
//     wordElement.classList.add("word");
//     wordElement.onclick = () => selectWord(word, wordElement);
//     wordsContainer.appendChild(wordElement);
//   });
// }

// function selectWord(word, wordElement) {
//   selectedWords.push(word);
//   wordElement.style.display = "none";
//   const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
//   document.getElementById("sentence").textContent = selectedSentence;
//   document.getElementById("feedback").textContent = "";
//   document.getElementById("correctAnswer").textContent = "";
//   document.getElementById("userAnswer").textContent = "";
//   speak(word); // Озвучиваем выбранное слово
// }

// function removeLastWord() {
//   if (selectedWords.length > 0) {
//     const lastWord = selectedWords.pop();
//     const wordsContainer = document.getElementById("wordsContainer");
//     const wordElement = document.createElement("button");
//     wordElement.textContent = lastWord;
//     wordElement.classList.add("word");
//     wordElement.onclick = () => selectWord(lastWord, wordElement);
//     wordsContainer.appendChild(wordElement);
//     const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
//     document.getElementById("sentence").textContent = selectedSentence;
//   }
// }

// function normalizeSentence(sentence) {
//   return sentence.replace(/\s*([,\.!?])\s*/g, "$1").trim();
// }

// function formatSentence(sentence) {
  
//   sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  
//   if (!/[.!?]$/.test(sentence)) {
//     sentence += '.';
//   }

//   return sentence;
// }

// function checkAnswer() {
//   const selectedSentence = normalizeSentence(selectedWords.join(" "));
//   const correctSentence = normalizeSentence(currentSentence.norwegian);
//   const formattedSelectedSentence = formatSentence(selectedSentence);
//   const formattedCorrectSentence = formatSentence(correctSentence);

//   if (formattedSelectedSentence === formattedCorrectSentence) {
//     document.getElementById("feedback").textContent = "Riktig!";
//     document.getElementById("feedback").style.color = "green";
//     document.getElementById("correctAnswer").textContent = "";
//     document.getElementById("userAnswer").textContent = "";
//     correctCount++;
//     document.getElementById("correctCount").textContent = correctCount;
//   } else {
//     document.getElementById("feedback").textContent = "Feil. Prøv igjen.";
//     document.getElementById("feedback").style.color = "red";
//     document.getElementById("correctAnswer").textContent = `Riktig svar: ${formattedCorrectSentence}`;
//     document.getElementById("userAnswer").textContent = `Din svar: ${formattedSelectedSentence}`;
//     incorrectCount++;
//     document.getElementById("incorrectCount").textContent = incorrectCount;
//   }
//   selectedWords = [];
//   displaySentence();
//   speak(formattedCorrectSentence); 
// }

// function speak(text) {
//   const utterance = new SpeechSynthesisUtterance(text);
//   utterance.lang = "nb-NO"; 
//   window.speechSynthesis.speak(utterance);
// }

// function startVoiceInput() {
//   if (!recognition) {
//     recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = "nb-NO"; 
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onresult = function(event) {
//       const transcript = event.results[0][0].transcript;
//       const words = transcript.split(/\s+/);
//       selectedWords = words;
//       const selectedSentence = selectedWords.join(" ").replace(/\s*([,\.!?])\s*/g, "$1 ");
//       const formattedSentence = formatSentence(selectedSentence);
//       document.getElementById("sentence").textContent = formattedSentence;
//       document.getElementById("feedback").textContent = "";
//       document.getElementById("correctAnswer").textContent = "";
//       document.getElementById("userAnswer").textContent = "";
//     };

//     recognition.onerror = function(event) {
//       console.error("Ошибка распознавания речи: ", event.error);
//     };
//   }

//   recognition.start();
// }

// function stopVoiceInput() {
//   if (recognition) {
//     recognition.stop();
//   }
// }

// window.onload = function() {
//   displaySentence();
//   document.getElementById("checkAnswer").onclick = checkAnswer;
//   document.getElementById("removeLastWord").onclick = removeLastWord;
//   const micButton = document.getElementById("startVoiceInput");
//   micButton.onmousedown = startVoiceInput;
//   micButton.onmouseup = stopVoiceInput;
//   micButton.ontouchstart = startVoiceInput;
//   micButton.ontouchend = stopVoiceInput;
// };










  