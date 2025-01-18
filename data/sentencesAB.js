const sentences = [
  
  {
  "norwegian": "Vi dro til parken, så vi kunne nyte solen.",
  "russian": "Мы пошли в парк, чтобы насладиться солнцем.",
  "english": "We went to the park so we could enjoy the sun.",
  "arabic": "ذهبنا إلى الحديقة لكي نستمتع بالشمس.",
  "swahili": "Tulienda bustanini ili tuweze kufurahia jua."
},
{
  "norwegian": "Han kom for sent fordi han forsov seg.",
  "russian": "Он опоздал, потому что проспал.",
  "english": "He was late because he overslept.",
  "arabic": "تأخر لأنه نام أكثر من اللازم.",
  "swahili": "Alikuwa amechelewa kwa sababu alilala kupita kiasi."
},
{
  "norwegian": "Hvis du lager kaffe, kan jeg finne kjeks.",
  "russian": "Если ты сваришь кофе, я найду печенье.",
  "english": "If you make coffee, I can find some cookies.",
  "arabic": "إذا صنعت القهوة، يمكنني العثور على بعض البسكويت.",
  "swahili": "Ukifanya kahawa, naweza kupata baadhi ya biskuti."
},
{
  "norwegian": "Jeg vet at hun elsker å danse.",
  "russian": "Я знаю, что она любит танцевать.",
  "english": "I know that she loves to dance.",
  "arabic": "أعلم أنها تحب الرقص.",
  "swahili": "Najua kwamba anapenda kucheza."
},
{
  "norwegian": "Om du ikke finner boka, kan vi låne en annen.",
  "russian": "Если ты не найдёшь книгу, мы можем взять другую.",
  "english": "If you can’t find the book, we can borrow another one.",
  "arabic": "إذا لم تجد الكتاب، يمكننا استعارة كتاب آخر.",
  "swahili": "Kama huwezi kupata kitabu, tunaweza kukopa kingine."
},
{
  "norwegian": "Læreren som underviser i norsk er veldig hjelpsom.",
  "russian": "Учитель, который преподаёт норвежский, очень отзывчивый.",
  "english": "The teacher who teaches Norwegian is very helpful.",
  "arabic": "المعلم الذي يدرس النرويجية مفيد جدًا.",
  "swahili": "Mwalimu anayefundisha Kinyorwegian ni mwenye msaada sana."
},
{
  "norwegian": "Det ble mørkt, så vi gikk inn.",
  "russian": "Стемнело, поэтому мы зашли внутрь.",
  "english": "It got dark, so we went inside.",
  "arabic": "حل الظلام، لذا دخلنا.",
  "swahili": "Ikawa giza, kwa hivyo tulienda ndani."
},
{
  "norwegian": "Hun lo fordi hun fikk en morsom melding.",
  "russian": "Она смеялась, потому что получила смешное сообщение.",
  "english": "She laughed because she received a funny message.",
  "arabic": "ضحكت لأنها تلقت رسالة مضحكة.",
  "swahili": "Alicheka kwa sababu alipokea ujumbe wa kuchekesha."
},
{
  "norwegian": "Hvis du sparer penger, kan du kjøpe det du vil.",
  "russian": "Если ты будешь откладывать деньги, сможешь купить то, что хочешь.",
  "english": "If you save money, you can buy what you want.",
  "arabic": "إذا ادخرت المال، يمكنك شراء ما تريد.",
  "swahili": "Ukiokoa pesa, unaweza kununua unachotaka."
},
{
  "norwegian": "Jeg vet at han har reist til utlandet.",
  "russian": "Я знаю, что он уехал за границу.",
  "english": "I know that he has gone abroad.",
  "arabic": "أعلم أنه سافر إلى الخارج.",
  "swahili": "Najua kwamba ameenda nje ya nchi."
},
{
  "norwegian": "Har du spurt om de trenger hjelp?",
  "russian": "Ты спросил, нужна ли им помощь?",
  "english": "Did you ask if they need help?",
  "arabic": "هل سألت إذا كانوا بحاجة إلى مساعدة؟",
  "swahili": "Umeuliza kama wanahitaji msaada?"
},
{
  "norwegian": "Gutten som spiller gitar er veldig talentfull.",
  "russian": "Мальчик, который играет на гитаре, очень талантлив.",
  "english": "The boy playing the guitar is very talented.",
  "arabic": "الصبي الذي يعزف على الجيتار موهوب جدًا.",
  "swahili": "Mvulana anayepiga gitaa ni mwenye kipaji sana."
},
{
  "norwegian": "Vi hadde det travelt, så vi tok en taxi.",
  "russian": "Мы спешили, поэтому взяли такси.",
  "english": "We were in a hurry, so we took a taxi.",
  "arabic": "كنا في عجلة من أمرنا، لذا أخذنا سيارة أجرة.",
  "swahili": "Tulikuwa tunaharaka, kwa hivyo tulichukua teksi."
},
{
  "norwegian": "Hvis du ringer meg senere, kan vi avtale noe.",
  "russian": "Если ты позвонишь мне позже, мы можем что-то договорить.",
  "english": "If you call me later, we can arrange something.",
  "arabic": "إذا اتصلت بي لاحقًا، يمكننا ترتيب شيء ما.",
  "swahili": "Ukinipigia simu baadaye, tunaweza kupanga jambo."
},
{
  "norwegian": "Hun kjøpte en ny jakke, for den gamle var ødelagt.",
  "russian": "Она купила новую куртку, потому что старая была испорчена.",
  "english": "She bought a new jacket because the old one was ruined.",
  "arabic": "اشترت سترة جديدة لأن القديمة كانت تالفة.",
  "swahili": "Alinunua koti mpya kwa sababu ile ya zamani iliharibika."
},
{
  "norwegian": "Jeg sa at jeg ikke hadde tid til å møte dem.",
  "russian": "Я сказал, что у меня нет времени встретиться с ними.",
  "english": "I said that I didn’t have time to meet them.",
  "arabic": "قلت إنني ليس لدي وقت لمقابلتهم.",
  "swahili": "Nimesema kwamba sina muda wa kukutana nao."
},
{
  "norwegian": "Vet du om vi kan parkere her?",
  "russian": "Ты знаешь, можно ли нам припарковаться здесь?",
  "english": "Do you know if we can park here?",
  "arabic": "هل تعرف إذا كان بإمكاننا الوقوف هنا؟",
  "swahili": "Unajua kama tunaweza kuegesha hapa?"
},
{
  "norwegian": "Hunden som løper på plenen, tilhører naboen.",
  "russian": "Собака, которая бегает по лужайке, принадлежит соседу.",
  "english": "The dog running on the lawn belongs to the neighbor.",
  "arabic": "الكلب الذي يجري على العشب ينتمي إلى الجار.",
  "swahili": "Mbwa anayekimbia kwenye lawn ni wa jirani."
},
{
  "norwegian": "De bestemte seg for å bli hjemme, for det begynte å regne.",
  "russian": "Они решили остаться дома, потому что начался дождь.",
  "english": "They decided to stay home because it started raining.",
  "arabic": "قرروا البقاء في المنزل لأن المطر بدأ.",
  "swahili": "Waliamua kukaa nyumbani kwa sababu mvua ilianza kunyesha."
},
{
  "norwegian": "Vi måtte avlyse turen fordi været var dårlig.",
  "russian": "Нам пришлось отменить поездку, потому что погода была плохая.",
  "english": "We had to cancel the trip because the weather was bad.",
  "arabic": "كان علينا إلغاء الرحلة لأن الطقس كان سيئًا.",
  "swahili": "Tulibidi kufuta safari kwa sababu hali ya hewa ilikuwa mbaya."
},
{
  "norwegian": "Hvis du vil, kan vi spise middag ute.",
  "russian": "Если хочешь, мы можем поужинать вне дома.",
  "english": "If you want, we can have dinner out.",
  "arabic": "إذا كنت تريد، يمكننا تناول العشاء في الخارج.",
  "swahili": "Kama unataka, tunaweza kula chakula cha jioni nje."
},
  {
    "norwegian": "Jeg tror at hun ikke har forstått spørsmålet.",
    "russian": "Я думаю, что она не поняла вопрос.",
    "english": "I think that she didn’t understand the question.",
    "arabic": "أعتقد أنها لم تفهم السؤال.",
    "swahili": "Nadhani hakuelewa swali."
  },
  {
    "norwegian": "Kan du sjekke om det er ledige billetter?",
    "russian": "Ты можешь проверить, есть ли свободные билеты?",
    "english": "Can you check if there are any available tickets?",
    "arabic": "هل يمكنك التحقق إذا كانت هناك تذاكر متاحة؟",
    "swahili": "Unaweza kuangalia kama kuna tiketi zinazopatikana?"
  },
  {
    "norwegian": "Planten som står ved vinduet, trenger mer vann.",
    "russian": "Растение, которое стоит у окна, нуждается в воде.",
    "english": "The plant by the window needs more water.",
    "arabic": "النبات بجانب النافذة يحتاج إلى المزيد من الماء.",
    "swahili": "Mmea karibu na dirisha unahitaji maji zaidi."
  },
  {
    "norwegian": "De dro til stranden, men været ble overskyet.",
    "russian": "Они поехали на пляж, но погода стала пасмурной.",
    "english": "They went to the beach, but the weather turned cloudy.",
    "arabic": "ذهبوا إلى الشاطئ، لكن الطقس أصبح غائمًا.",
    "swahili": "Walikwenda pwani, lakini hali ya hewa ilibadilika na kuwa na mawingu."
  },
  {
    "norwegian": "Vi måtte vente fordi toget var forsinket.",
    "russian": "Нам пришлось ждать, потому что поезд задержался.",
    "english": "We had to wait because the train was delayed.",
    "arabic": "كان علينا الانتظار لأن القطار تأخر.",
    "swahili": "Tulilazimika kungoja kwa sababu gari moshi lilichelewa."
  },
  {
    "norwegian": "Hvis du vil lære mer, kan du lese denne boken.",
    "russian": "Если хочешь узнать больше, ты можешь прочитать эту книгу.",
    "english": "If you want to learn more, you can read this book.",
    "arabic": "إذا كنت تريد معرفة المزيد، يمكنك قراءة هذا الكتاب.",
    "swahili": "Ikiwa unataka kujifunza zaidi, unaweza kusoma kitabu hiki."
  },
  {
    "norwegian": "Jeg vet at de har invitert mange gjester.",
    "russian": "Я знаю, что они пригласили много гостей.",
    "english": "I know that they have invited many guests.",
    "arabic": "أعلم أنهم قد دعوا العديد من الضيوف.",
    "swahili": "Ninajua kwamba wamealika wageni wengi."
  },
  {
    "norwegian": "Vet du om han kommer i morgen?",
    "russian": "Ты знаешь, придёт ли он завтра?",
    "english": "Do you know if he is coming tomorrow?",
    "arabic": "هل تعرف إذا كان سيأتي غدًا؟",
    "swahili": "Unajua kama atakuja kesho?"
  },
  {
    "norwegian": "Bordet som står i stua, er gammelt men vakkert.",
    "russian": "Стол, который стоит в гостиной, старый, но красивый.",
    "english": "The table in the living room is old but beautiful.",
    "arabic": "الطاولة في غرفة المعيشة قديمة لكنها جميلة.",
    "swahili": "Meza iliyopo sebuleni ni ya zamani lakini ni nzuri."
  },
  {
    "norwegian": "Det begynte å regne, så vi måtte finne ly.",
    "russian": "Начался дождь, поэтому нам пришлось найти укрытие.",
    "english": "It started raining, so we had to find shelter.",
    "arabic": "بدأ المطر، لذا كان علينا العثور على مأوى.",
    "swahili": "Mvua ilianza kunyesha, kwa hivyo tulilazimika kutafuta hifadhi."
  },
  {
    "norwegian": "Hun lo fordi filmen var veldig morsom.",
    "russian": "Она смеялась, потому что фильм был очень смешным.",
    "english": "She laughed because the movie was very funny.",
    "arabic": "ضحكت لأن الفيلم كان مضحكًا جدًا.",
    "swahili": "Alicheka kwa sababu filamu ilikuwa ya kuchekesha sana."
  },
  {
    "norwegian": "Hvis vi drar nå, kan vi rekke toget.",
    "russian": "Если мы выйдем сейчас, мы успеем на поезд.",
    "english": "If we leave now, we can catch the train.",
    "arabic": "إذا غادرنا الآن، يمكننا اللحاق بالقطار.",
    "swahili": "Ikiwa tutatoka sasa, tunaweza kufikia treni."
  },
  {
    "norwegian": "Jeg vet at han ikke liker å stå opp tidlig.",
    "russian": "Я знаю, что он не любит вставать рано.",
    "english": "I know that he doesn’t like getting up early.",
    "arabic": "أعلم أنه لا يحب الاستيقاظ مبكرًا.",
    "swahili": "Najua kwamba hapendi kuamka mapema."
  },
  {
    "norwegian": "Om det blir for varmt, kan vi åpne vinduet.",
    "russian": "Если станет слишком жарко, мы можем открыть окно.",
    "english": "If it gets too hot, we can open the window.",
    "arabic": "إذا أصبح الجو حارًا جدًا، يمكننا فتح النافذة.",
    "swahili": "Ikiwa itakuwa moto sana, tunaweza kufungua dirisha."
  },
  {
    "norwegian": "Læreren som snakker med elevene, er ny på skolen.",
    "russian": "Учитель, который разговаривает с учениками, новый в школе.",
    "english": "The teacher talking to the students is new at the school.",
    "arabic": "المعلم الذي يتحدث مع الطلاب جديد في المدرسة.",
    "swahili": "Mwalimu anayezungumza na wanafunzi ni mpya shuleni."
  },
  {
    "norwegian": "Det var kaldt ute, så vi tok på oss varme klær.",
    "russian": "На улице было холодно, поэтому мы надели теплую одежду.",
    "english": "It was cold outside, so we put on warm clothes.",
    "arabic": "كان الجو باردًا في الخارج، لذا ارتدينا ملابس دافئة.",
    "swahili": "Ilikuwa baridi nje, kwa hivyo tulivaa nguo za joto."
  },
  {
    "norwegian": "Han smilte fordi han vant konkurransen.",
    "russian": "Он улыбался, потому что выиграл соревнование.",
    "english": "He smiled because he won the competition.",
    "arabic": "ابتسم لأنه فاز في المسابقة.",
    "swahili": "Alitabasamu kwa sababu alishinda mashindano."
  },
  {
    "norwegian": "Hvis du trenger hjelp, kan du spørre meg.",
    "russian": "Если тебе нужна помощь, ты можешь спросить меня.",
    "english": "If you need help, you can ask me.",
    "arabic": "إذا كنت بحاجة إلى مساعدة، يمكنك أن تسألني.",
    "swahili": "Ikiwa unahitaji msaada, unaweza kuniuliza."
  },
  {
    "norwegian": "Jeg vet at han liker å reise til nye steder.",
    "russian": "Я знаю, что он любит путешествовать в новые места.",
    "english": "I know that he likes traveling to new places.",
    "arabic": "أعلم أنه يحب السفر إلى أماكن جديدة.",
    "swahili": "Ninajua kwamba anapenda kusafiri kwenda sehemu mpya."
  },
  {
    "norwegian": "Har du spurt om det er mulig å endre datoen?",
    "russian": "Ты спросил, возможно ли изменить дату?",
    "english": "Did you ask if it is possible to change the date?",
    "arabic": "هل سألت إذا كان من الممكن تغيير التاريخ؟",
    "swahili": "Umeuliza kama inawezekana kubadilisha tarehe?"
  },
  {
    "norwegian": "Gutten som maler veggen, hjelper foreldrene sine.",
    "russian": "Мальчик, который красит стену, помогает своим родителям.",
    "english": "The boy painting the wall is helping his parents.",
    "arabic": "الصبي الذي يطلي الجدار يساعد والديه.",
    "swahili": "Mvulana anayepaka ukuta anasaidia wazazi wake."
  },
  {
    "norwegian": "Vi kom sent, for vi måtte vente på bussen.",
    "russian": "Мы пришли поздно, потому что нам пришлось ждать автобус.",
    "english": "We arrived late, for we had to wait for the bus.",
    "arabic": "وصلنا متأخرين، لأننا اضطررنا إلى انتظار الحافلة.",
    "swahili": "Tulifika kuchelewa, kwa kuwa tulilazimika kusubiri basi."
  },
  {
    "norwegian": "Hvis du skriver meldingen nå, får du svar raskere.",
    "russian": "Если ты напишешь сообщение сейчас, ты получишь ответ быстрее.",
    "english": "If you write the message now, you will get a faster reply.",
    "arabic": "إذا كتبت الرسالة الآن، ستحصل على رد أسرع.",
    "swahili": "Ikiwa utaandika ujumbe sasa, utapata jibu haraka."
  },
  {
    "norwegian": "Vi gikk til butikken, men den var allerede stengt.",
    "russian": "Мы пошли в магазин, но он уже был закрыт.",
    "english": "We went to the store, but it was already closed.",
    "arabic": "ذهبنا إلى المتجر، لكنه كان مغلقًا بالفعل.",
    "swahili": "Tulienda dukani, lakini lilikuwa limefungwa tayari."
  },
  {
    "norwegian": "Jeg sa at vi trenger mer tid til å gjøre ferdig prosjektet.",
    "russian": "Я сказал, что нам нужно больше времени, чтобы завершить проект.",
    "english": "I said that we need more time to finish the project.",
    "arabic": "قلت إننا بحاجة إلى المزيد من الوقت لإنهاء المشروع.",
    "swahili": "Nilisema kwamba tunahitaji muda zaidi kumaliza mradi."
  },
  {
    "norwegian": "Vet du om han har sendt e-posten allerede?",
    "russian": "Ты знаешь, отправил ли он уже электронное письмо?",
    "english": "Do you know if he has already sent the email?",
    "arabic": "هل تعرف إذا كان قد أرسل البريد الإلكتروني بالفعل؟",
    "swahili": "Je, unajua kama tayari ametuma barua pepe?"
  },
  {
    "norwegian": "Katten som sover på sofaen, er veldig søt.",
    "russian": "Кошка, которая спит на диване, очень милая.",
    "english": "The cat sleeping on the couch is very cute.",
    "arabic": "القطة التي تنام على الأريكة لطيفة جدًا.",
    "swahili": "Paka anayelala kwenye sofa ni mzuri sana."
  },
  {
    "norwegian": "De dro på fjellet, for de elsker å gå på tur.",
    "russian": "Они отправились в горы, потому что любят гулять.",
    "english": "They went to the mountains because they love hiking.",
    "arabic": "ذهبوا إلى الجبال لأنهم يحبون التنزه.",
    "swahili": "Walienda milimani kwa sababu wanapenda kutembea."
  },
  {
    "norwegian": "Vi måtte gå tidlig fordi vi hadde en avtale.",
    "russian": "Нам пришлось уйти рано, потому что у нас была встреча.",
    "english": "We had to leave early because we had an appointment.",
    "arabic": "كان علينا المغادرة مبكرًا لأن لدينا موعدًا.",
    "swahili": "Tulilazimika kuondoka mapema kwa sababu tulikuwa na miadi."
  },
  {
    "norwegian": "Hvis du lager kaffe, kan jeg ordne frokosten.",
    "russian": "Если ты сделаешь кофе, я приготовлю завтрак.",
    "english": "If you make coffee, I can prepare breakfast.",
    "arabic": "إذا صنعت القهوة، يمكنني تحضير الإفطار.",
    "swahili": "Ukitengeneza kahawa, naweza kuandaa kifungua kinywa."
  },
  {
    "norwegian": "Jeg tror at hun har mistet nøklene sine.",
    "russian": "Я думаю, что она потеряла свои ключи.",
    "english": "I think that she has lost her keys.",
    "arabic": "أعتقد أنها فقدت مفاتيحها.",
    "swahili": "Nadhani kwamba amepoteza funguo zake."
  },
  {
    "norwegian": "Kan du finne ut om de fortsatt er hjemme?",
    "russian": "Ты можешь выяснить, дома ли они ещё?",
    "english": "Can you find out if they are still home?",
    "arabic": "هل يمكنك معرفة ما إذا كانوا لا يزالون في المنزل؟",
    "swahili": "Je, unaweza kujua kama bado wako nyumbani?"
  },
  {
    "norwegian": "Boken som jeg lånte av deg, er veldig interessant.",
    "russian": "Книга, которую я одолжил у тебя, очень интересная.",
    "english": "The book I borrowed from you is very interesting.",
    "arabic": "الكتاب الذي استعرته منك مثير جدًا للاهتمام.",
    "swahili": "Kitabu nilichokikopa kwako kinavutia sana."
  },
  {
    "norwegian": "De ble overrasket, men de sa ingenting.",
    "russian": "Они удивились, но ничего не сказали.",
    "english": "They were surprised, but they said nothing.",
    "arabic": "لقد تفاجأوا، لكنهم لم يقولوا شيئًا.",
    "swahili": "Walishangaa, lakini hawakusema chochote."
  },
  {
    "norwegian": "Vi måtte vente lenge fordi køen var veldig lang.",
    "russian": "Нам пришлось долго ждать, потому что очередь была очень длинной.",
    "english": "We had to wait a long time because the line was very long.",
    "arabic": "كان علينا الانتظار لفترة طويلة لأن الطابور كان طويلًا جدًا.",
    "swahili": "Tulilazimika kusubiri muda mrefu kwa sababu foleni ilikuwa ndefu sana."
  },
  {
    "norwegian": "Hvis du blir med oss, kan vi ha det gøy sammen.",
    "russian": "Если ты пойдёшь с нами, мы сможем весело провести время вместе.",
    "english": "If you join us, we can have fun together.",
    "arabic": "إذا انضممت إلينا، يمكننا الاستمتاع معًا.",
    "swahili": "Ukiungana nasi, tunaweza kufurahi pamoja."
  },
  {
    "norwegian": "Jeg vet at de planlegger en stor fest til helgen.",
    "russian": "Я знаю, что они планируют большую вечеринку на выходных.",
    "english": "I know that they are planning a big party this weekend.",
    "arabic": "أعلم أنهم يخططون لحفلة كبيرة في نهاية هذا الأسبوع.",
    "swahili": "Ninajua kwamba wanapanga sherehe kubwa mwishoni mwa wiki hii."
  },
  {
    "norwegian": "Vet du om butikken åpner tidligere på søndager?",
    "russian": "Ты знаешь, открывается ли магазин раньше по воскресеньям?",
    "english": "Do you know if the store opens earlier on Sundays?",
    "arabic": "هل تعرف إذا كان المتجر يفتح في وقت مبكر أيام الأحد؟",
    "swahili": "Je, unajua kama duka linafunguliwa mapema Jumapili?"
  },
  {
    "norwegian": "Mannen som snakker med sjefen, er ny i bedriften.",
    "russian": "Мужчина, который разговаривает с начальником, новый в компании.",
    "english": "The man talking to the boss is new to the company.",
    "arabic": "الرجل الذي يتحدث مع المدير جديد في الشركة.",
    "swahili": "Mwanaume anayezungumza na bosi ni mpya katika kampuni."
  },
  {
    "norwegian": "Det regnet mye, så vi bestemte oss for å bli inne.",
    "russian": "Шел сильный дождь, поэтому мы решили остаться дома.",
    "english": "It rained a lot, so we decided to stay indoors.",
    "arabic": "هطلت أمطار غزيرة، لذا قررنا البقاء في الداخل.",
    "swahili": "Ilinyesha sana, kwa hiyo tuliamua kukaa ndani."
  },
  {
    "norwegian": "Hun ble glad fordi hun fikk gode nyheter.",
    "russian": "Она обрадовалась, потому что получила хорошие новости.",
    "english": "She was happy because she received good news.",
    "arabic": "كانت سعيدة لأنها تلقت أخبارًا جيدة.",
    "swahili": "Alifurahi kwa sababu alipokea habari njema."
  },
  {
    "norwegian": "Hvis vi starter nå, kan vi bli ferdige før middag.",
    "russian": "Если мы начнём сейчас, мы можем закончить до обеда.",
    "english": "If we start now, we can finish before lunch.",
    "arabic": "إذا بدأنا الآن، يمكننا الانتهاء قبل الغداء.",
    "swahili": "Tukianza sasa, tunaweza kumaliza kabla ya chakula cha mchana."
  },
  {
    "norwegian": "Jeg vet at han ikke liker å snakke foran mange folk.",
    "russian": "Я знаю, что он не любит говорить перед большим количеством людей.",
    "english": "I know that he doesn’t like speaking in front of many people.",
    "arabic": "أعلم أنه لا يحب التحدث أمام الكثير من الناس.",
    "swahili": "Ninajua kwamba hapendi kuzungumza mbele ya watu wengi."
  },
  {
    "norwegian": "Om det blir for mye, kan vi ta en pause.",
    "russian": "Если это станет слишком трудно, мы можем сделать перерыв.",
    "english": "If it gets too much, we can take a break.",
    "arabic": "إذا أصبح الأمر صعبًا جدًا، يمكننا أخذ استراحة.",
    "swahili": "Ikiwa itakuwa nyingi sana, tunaweza kuchukua mapumziko."
  },
  {
    "norwegian": "Kvinnen som hjelper barna, jobber som frivillig.",
    "russian": "Женщина, которая помогает детям, работает волонтёром.",
    "english": "The woman helping the children works as a volunteer.",
    "arabic": "المرأة التي تساعد الأطفال تعمل كمتطوعة.",
    "swahili": "Mwanamke anayesaidia watoto anafanya kazi ya kujitolea."
  },
  {
    "norwegian": "Det ble sent, så vi bestemte oss for å dra hjem.",
    "russian": "Стало поздно, поэтому мы решили поехать домой.",
    "english": "It got late, so we decided to go home.",
    "arabic": "تأخر الوقت، لذا قررنا العودة إلى المنزل.",
    "swahili": "Ilikuwa kuchelewa, kwa hivyo tuliamua kurudi nyumbani."
  },
  {
    "norwegian": "Han lo fordi vitsen var veldig morsom.",
    "russian": "Он смеялся, потому что шутка была очень смешной.",
    "english": "He laughed because the joke was very funny.",
    "arabic": "ضحك لأن النكتة كانت مضحكة جدًا.",
    "swahili": "Alicheka kwa sababu utani ulikuwa wa kuchekesha sana."
  },
  {
    "norwegian": "Hvis du vil høre musikk, kan jeg slå på radioen.",
    "russian": "Если ты хочешь послушать музыку, я могу включить радио.",
    "english": "If you want to listen to music, I can turn on the radio.",
    "arabic": "إذا كنت تريد الاستماع إلى الموسيقى، يمكنني تشغيل الراديو.",
    "swahili": "Kama unataka kusikiliza muziki, naweza kuwasha redio."
  },
  {
    "norwegian": "Jeg tror at de kommer tilbake i morgen.",
    "russian": "Я думаю, что они вернутся завтра.",
    "english": "I think that they will come back tomorrow.",
    "arabic": "أعتقد أنهم سيعودون غدًا.",
    "swahili": "Nadhani watarudi kesho."
  },
  {
    "norwegian": "Har du spurt om vi kan få en kopi av rapporten?",
    "russian": "Ты спросил, можем ли мы получить копию отчета?",
    "english": "Did you ask if we can get a copy of the report?",
    "arabic": "هل سألت إذا كان بإمكاننا الحصول على نسخة من التقرير؟",
    "swahili": "Je, umeuliza kama tunaweza kupata nakala ya ripoti hiyo?"
  },
  {
    "norwegian": "Gutten som bærer koffertene, er veldig sterk.",
    "russian": "Мальчик, который несёт чемоданы, очень сильный.",
    "english": "The boy carrying the suitcases is very strong.",
    "arabic": "الصبي الذي يحمل الحقائب قوي جدًا.",
    "swahili": "Mvulana anayebeba mabegi ni mwenye nguvu sana."
  },
  {
    "norwegian": "De spiste middag, men de var fortsatt sultne.",
    "russian": "Они поужинали, но всё равно остались голодными.",
    "english": "They had dinner, but they were still hungry.",
    "arabic": "تناولوا العشاء، لكنهم ما زالوا جائعين.",
    "swahili": "Walila chakula cha jioni, lakini bado walikuwa na njaa."
  },
  {
    "norwegian": "Hvis du øver hver dag, vil du bli flinkere.",
    "russian": "Если ты будешь тренироваться каждый день, ты станешь лучше.",
    "english": "If you practice every day, you will get better.",
    "arabic": "إذا تدربت كل يوم، ستتحسن.",
    "swahili": "Ukijifunza kila siku, utaimarika."
  },
  {
    "norwegian": "Vi dro til stranden, men været var ikke så bra.",
    "russian": "Мы отправились на пляж, но погода была не очень хорошей.",
    "english": "We went to the beach, but the weather wasn’t great.",
    "arabic": "ذهبنا إلى الشاطئ، لكن الطقس لم يكن جيدًا.",
    "swahili": "Tulienda pwani, lakini hali ya hewa haikuwa nzuri sana."
  },
  {
    "norwegian": "Jeg hørte at de har flyttet til en ny by.",
    "russian": "Я слышал, что они переехали в новый город.",
    "english": "I heard that they have moved to a new city.",
    "arabic": "سمعت أنهم انتقلوا إلى مدينة جديدة.",
    "swahili": "Nimesikia kwamba wamehamia mji mpya."
  },
  {
    "norwegian": "Vet du om vi har nok penger til å kjøpe det?",
    "russian": "Ты знаешь, хватит ли у нас денег, чтобы купить это?",
    "english": "Do you know if we have enough money to buy it?",
    "arabic": "هل تعرف إذا كان لدينا ما يكفي من المال لشرائه؟",
    "swahili": "Je, unajua kama tuna pesa za kutosha kununua?"
  },
  {
    "norwegian": "Blomsten som står på bordet, er en gave fra henne.",
    "russian": "Цветок, который стоит на столе, — это подарок от неё.",
    "english": "The flower on the table is a gift from her.",
    "arabic": "الزهرة التي على الطاولة هي هدية منها.",
    "swahili": "Ua lililoko mezani ni zawadi kutoka kwake."
  },
  {
    "norwegian": "Jeg ville lese mer, men jeg var for trøtt.",
    "russian": "Я хотел почитать ещё, но был слишком усталым.",
    "english": "I wanted to read more, but I was too tired.",
    "arabic": "كنت أريد أن أقرأ المزيد، لكنني كنت متعبًا جدًا.",
    "swahili": "Nilitaka kusoma zaidi, lakini nilikuwa nimechoka sana."
  },
  {
    "norwegian": "Hun lo fordi historien var veldig morsom.",
    "russian": "Она смеялась, потому что история была очень смешной.",
    "english": "She laughed because the story was very funny.",
    "arabic": "ضحكت لأن القصة كانت مضحكة جدًا.",
    "swahili": "Alicheka kwa sababu hadithi ilikuwa ya kuchekesha sana."
  },
  {
    "norwegian": "Hvis vi finner adressen, kan vi sende invitasjonen i dag.",
    "russian": "Если мы найдём адрес, мы сможем отправить приглашение сегодня.",
    "english": "If we find the address, we can send the invitation today.",
    "arabic": "إذا وجدنا العنوان، يمكننا إرسال الدعوة اليوم.",
    "swahili": "Tukipata anwani, tunaweza kutuma mwaliko leo."
  },
  {
    "norwegian": "Jeg tror at de har solgt huset sitt.",
    "russian": "Я думаю, что они продали свой дом.",
    "english": "I think that they have sold their house.",
    "arabic": "أعتقد أنهم باعوا منزلهم.",
    "swahili": "Nadhani wameuza nyumba yao."
  },
  {
    "norwegian": "Kan du fortelle meg om han kommer til møtet?",
    "russian": "Ты можешь сказать мне, придёт ли он на встречу?",
    "english": "Can you tell me if he will come to the meeting?",
    "arabic": "هل يمكنك أن تخبرني إذا كان سيأتي إلى الاجتماع؟",
    "swahili": "Unaweza kuniambia kama atakuja kwenye mkutano?"
  },
  {
    "norwegian": "Filmen som vi så i går, var veldig spennende.",
    "russian": "Фильм, который мы смотрели вчера, был очень захватывающим.",
    "english": "The movie we watched yesterday was very exciting.",
    "arabic": "الفيلم الذي شاهدناه أمس كان مثيرًا جدًا.",
    "swahili": "Filamu tuliyoangalia jana ilikuwa ya kusisimua sana."
  },
  {
    "norwegian": "Vi ville dra på ferie, men vi hadde ikke tid.",
    "russian": "Мы хотели поехать в отпуск, но у нас не было времени.",
    "english": "We wanted to go on vacation, but we didn’t have time.",
    "arabic": "أردنا الذهاب في إجازة، لكن لم يكن لدينا وقت.",
    "swahili": "Tulitaka kwenda likizo, lakini hatukuwa na muda."
  },
  {
    "norwegian": "Hun ble hjemme fordi hun følte seg dårlig.",
    "russian": "Она осталась дома, потому что плохо себя чувствовала.",
    "english": "She stayed home because she felt unwell.",
    "arabic": "بقيت في المنزل لأنها شعرت بتوعك.",
    "swahili": "Alikaa nyumbani kwa sababu alijisikia vibaya."
  },
  {
    "norwegian": "Hvis du ser en feil, må du si fra.",
    "russian": "Если ты увидишь ошибку, ты должен сообщить.",
    "english": "If you see a mistake, you must let me know.",
    "arabic": "إذا رأيت خطأ، يجب أن تخبرني.",
    "swahili": "Ukiiona makosa, lazima unijulishe."
  },
  {
    "norwegian": "Jeg vet at de planlegger å besøke oss snart.",
    "russian": "Я знаю, что они планируют навестить нас скоро.",
    "english": "I know that they are planning to visit us soon.",
    "arabic": "أعلم أنهم يخططون لزيارتنا قريبًا.",
    "swahili": "Ninajua kwamba wanapanga kututembelea hivi karibuni."
  },
  {
    "norwegian": "Har du hørt om de har fått en ny jobb?",
    "russian": "Ты слышал, получили ли они новую работу?",
    "english": "Have you heard if they got a new job?",
    "arabic": "هل سمعت إذا كانوا قد حصلوا على وظيفة جديدة؟",
    "swahili": "Umesikia kama wamepata kazi mpya?"
  },
  {
    "norwegian": "Bilen som står utenfor, er hans nye bil.",
    "russian": "Машина, которая стоит снаружи, — это его новая машина.",
    "english": "The car parked outside is his new car.",
    "arabic": "السيارة المتوقفة في الخارج هي سيارته الجديدة.",
    "swahili": "Gari lililoegeshwa nje ni gari lake jipya."
  },
  {
    "norwegian": "Det begynte å snø, så vi måtte gå inn.",
    "russian": "Начал идти снег, поэтому нам пришлось зайти внутрь.",
    "english": "It started snowing, so we had to go inside.",
    "arabic": "بدأ الثلج يتساقط، لذا كان علينا الدخول.",
    "swahili": "Ilianza kunyesha theluji, kwa hiyo tulilazimika kuingia ndani."
  },
  {
    "norwegian": "Han var trist fordi han mistet telefonen sin.",
    "russian": "Он был грустным, потому что потерял свой телефон.",
    "english": "He was sad because he lost his phone.",
    "arabic": "كان حزينًا لأنه فقد هاتفه.",
    "swahili": "Alikuwa na huzuni kwa sababu alipoteza simu yake."
  },
  {
    "norwegian": "Hvis du har tid, kan du hjelpe meg med oppgaven?",
    "russian": "Если у тебя есть время, ты можешь помочь мне с заданием?",
    "english": "If you have time, can you help me with the task?",
    "arabic": "إذا كان لديك وقت، هل يمكنك مساعدتي في المهمة؟",
    "swahili": "Ikiwa una wakati, unaweza kunisaidia na kazi?"
  },
  {
    "norwegian": "Jeg tror at hun har sendt invitasjonen allerede.",
    "russian": "Я думаю, что она уже отправила приглашение.",
    "english": "I think that she has already sent the invitation.",
    "arabic": "أعتقد أنها قد أرسلت الدعوة بالفعل.",
    "swahili": "Nadhani tayari ametuma mwaliko."
  },
  {
    "norwegian": "Om du finner ut noe, si fra til meg.",
    "russian": "Если ты что-то узнаешь, сообщи мне.",
    "english": "If you find out anything, let me know.",
    "arabic": "إذا اكتشفت أي شيء، أخبرني.",
    "swahili": "Ukigundua kitu chochote, niambie."
  },
  {
    "norwegian": "Hunden som bjeffer utenfor, tilhører naboen.",
    "russian": "Собака, которая лает снаружи, принадлежит соседу.",
    "english": "The dog barking outside belongs to the neighbor.",
    "arabic": "الكلب الذي ينبح في الخارج ينتمي إلى الجار.",
    "swahili": "Mbwa anayebweka nje ni wa jirani."
  },
  {
    "norwegian": "Vi ønsket å dra tidlig, men det regnet hele dagen.",
    "russian": "Мы хотели уехать рано, но весь день шёл дождь.",
    "english": "We wanted to leave early, but it rained all day.",
    "arabic": "كنا نريد المغادرة مبكرًا، لكن المطر استمر طوال اليوم.",
    "swahili": "Tulitaka kuondoka mapema, lakini ilinyesha mvua siku nzima."
  },
  {
    "norwegian": "Han var sint fordi de glemte å ringe ham.",
    "russian": "Он был зол, потому что они забыли ему позвонить.",
    "english": "He was angry because they forgot to call him.",
    "arabic": "كان غاضبًا لأنهم نسوا الاتصال به.",
    "swahili": "Alikasirika kwa sababu walimsahau kumpigia simu."
  },
  {
    "norwegian": "Hvis vi tar denne veien, kan vi komme fram raskere.",
    "russian": "Если мы пойдём этим путём, мы доберёмся быстрее.",
    "english": "If we take this route, we can get there faster.",
    "arabic": "إذا أخذنا هذا الطريق، يمكننا الوصول بشكل أسرع.",
    "swahili": "Tukichukua njia hii, tunaweza kufika haraka."
  },
  {
    "norwegian": "Jeg vet at de jobber med en ny plan.",
    "russian": "Я знаю, что они работают над новым планом.",
    "english": "I know that they are working on a new plan.",
    "arabic": "أعلم أنهم يعملون على خطة جديدة.",
    "swahili": "Ninajua kwamba wanashughulika na mpango mpya."
  },
  {
    "norwegian": "Har du sjekket om restauranten er åpen?",
    "russian": "Ты проверил, открыт ли ресторан?",
    "english": "Have you checked if the restaurant is open?",
    "arabic": "هل تحققت إذا كان المطعم مفتوحًا؟",
    "swahili": "Je, umeangalia kama mgahawa uko wazi?"
  },
  {
    "norwegian": "Kaken som står på bordet, er hjemmelaget.",
    "russian": "Торт, который стоит на столе, — домашний.",
    "english": "The cake on the table is homemade.",
    "arabic": "الكعكة التي على الطاولة محلية الصنع.",
    "swahili": "Keki iliyo mezani ni ya nyumbani."
  },
  {
    "norwegian": "De ville dra på kino, men filmen var utsolgt.",
    "russian": "Они хотели пойти в кино, но билеты были распроданы.",
    "english": "They wanted to go to the cinema, but the movie was sold out.",
    "arabic": "أرادوا الذهاب إلى السينما، لكن الفيلم كان قد نفد.",
    "swahili": "Walitaka kwenda sinema, lakini filamu ilikuwa imeuzwa zote."
  },
  {
    "norwegian": "Hvis det regner blir vi hjemme.",
    "russian": "Если пойдет дождь, мы останемся дома.",
    "english": "If it rains, we will stay home.",
    "arabic": "إذا أمطرت، سنبقى في المنزل.",
    "swahili": "Kikinyesha mvua, tutabaki nyumbani."
  },
  {
    "norwegian": "Han sa at han var trøtt.",
    "russian": "Он сказал, что устал.",
    "english": "He said that he was tired.",
    "arabic": "قال إنه كان متعبًا.",
    "swahili": "Alisema kwamba alikuwa amechoka."
  },
  {
    "norwegian": "Vet du om butikken er åpen?",
    "russian": "Ты знаешь, открыт ли магазин?",
    "english": "Do you know if the shop is open?",
    "arabic": "هل تعرف إذا كان المتجر مفتوحًا؟",
    "swahili": "Je, unajua kama duka liko wazi?"
  },
  {
    "norwegian": "Jenta som løp i parken er søsteren min.",
    "russian": "Девочка, которая бегала в парке, моя сестра.",
    "english": "The girl who was running in the park is my sister.",
    "arabic": "الفتاة التي كانت تركض في الحديقة هي أختي.",
    "swahili": "Msichana aliyekuwa anakimbia kwenye bustani ni dada yangu."
  },
  {
    "norwegian": "Vi ble hjemme, så vi så filmen sammen.",
    "russian": "Мы остались дома, поэтому посмотрели фильм вместе.",
    "english": "We stayed home, so we watched the movie together.",
    "arabic": "بقينا في المنزل، لذا شاهدنا الفيلم معًا.",
    "swahili": "Tulibaki nyumbani, kwa hivyo tuliangalia filamu pamoja."
  },
  {
    "norwegian": "Han kom ikke fordi han var syk.",
    "russian": "Он не пришел, потому что был болен.",
    "english": "He didn’t come because he was sick.",
    "arabic": "لم يأتِ لأنه كان مريضًا.",
    "swahili": "Hakuja kwa sababu alikuwa mgonjwa."
  },
  {
    "norwegian": "Hvis du vil kan vi gå nå.",
    "russian": "Если хочешь, мы можем пойти сейчас.",
    "english": "If you want, we can go now.",
    "arabic": "إذا كنت تريد، يمكننا الذهاب الآن.",
    "swahili": "Kama unataka, tunaweza kwenda sasa."
  },
  {
    "norwegian": "Jeg vet at han har mye arbeid.",
    "russian": "Я знаю, что у него много работы.",
    "english": "I know that he has a lot of work.",
    "arabic": "أعلم أن لديه الكثير من العمل.",
    "swahili": "Ninajua kwamba ana kazi nyingi."
  },
  {
    "norwegian": "Kan du si meg om toget er i rute?",
    "russian": "Ты можешь сказать мне, идет ли поезд по расписанию?",
    "english": "Can you tell me if the train is on time?",
    "arabic": "هل يمكنك أن تخبرني إذا كان القطار في الموعد؟",
    "swahili": "Unaweza kuniambia kama treni iko kwa wakati?"
  },
  {
    "norwegian": "Huset som vi så i går var veldig fint.",
    "russian": "Дом, который мы видели вчера, был очень красивым.",
    "english": "The house which we saw yesterday was very nice.",
    "arabic": "المنزل الذي رأيناه أمس كان جميلًا جدًا.",
    "swahili": "Nyumba tuliyoiona jana ilikuwa nzuri sana."
  },
  {
    "norwegian": "Han var trøtt, så han la seg tidlig.",
    "russian": "Он устал, поэтому лег спать рано.",
    "english": "He was tired, so he went to bed early.",
    "arabic": "كان متعبًا، لذا ذهب إلى الفراش مبكرًا.",
    "swahili": "Alikuwa amechoka, kwa hivyo akaenda kulala mapema."
  },
  {
    "norwegian": "De ble hjemme fordi det regnet.",
    "russian": "Они остались дома, потому что шел дождь.",
    "english": "They stayed home because it was raining.",
    "arabic": "بقوا في المنزل لأن الجو كان ممطرًا.",
    "swahili": "Walibaki nyumbani kwa sababu mvua ilikuwa inanyesha."
  },
  {
    "norwegian": "Hvis vi har tid kan vi besøke museet.",
    "russian": "Если у нас будет время, мы можем посетить музей.",
    "english": "If we have time, we can visit the museum.",
    "arabic": "إذا كان لدينا وقت، يمكننا زيارة المتحف.",
    "swahili": "Ikiwa tuna muda, tunaweza kutembelea jumba la makumbusho."
  },
  {
    "norwegian": "Jeg hørte at du skal på ferie snart.",
    "russian": "Я слышал, что ты скоро едешь в отпуск.",
    "english": "I heard that you are going on vacation soon.",
    "arabic": "سمعت أنك ستذهب في إجازة قريبًا.",
    "swahili": "Nimesikia kwamba utaenda likizo hivi karibuni."
  },
  {
    "norwegian": "Vet du om han allerede har spist?",
    "russian": "Ты знаешь, ел ли он уже?",
    "english": "Do you know if he has already eaten?",
    "arabic": "هل تعرف إذا كان قد أكل بالفعل؟",
    "swahili": "Unajua kama tayari amekula?"
  },
  {
    "norwegian": "Boken som ligger på bordet er min.",
    "russian": "Книга, которая лежит на столе, моя.",
    "english": "The book which is on the table is mine.",
    "arabic": "الكتاب الذي على الطاولة هو لي.",
    "swahili": "Kitabu kilichoko mezani ni changu."
  },
  {
    "norwegian": "Det er kaldt ute, så vi trenger varme klær.",
    "russian": "На улице холодно, поэтому нам нужна теплая одежда.",
    "english": "It is cold outside, so we need warm clothes.",
    "arabic": "الجو بارد في الخارج، لذا نحتاج إلى ملابس دافئة.",
    "swahili": "Ni baridi nje, kwa hiyo tunahitaji nguo za joto."
  },
  {
    "norwegian": "Han kom sent fordi bussen var forsinket.",
    "russian": "Он пришел поздно, потому что автобус задержался.",
    "english": "He arrived late because the bus was delayed.",
    "arabic": "وصل متأخرًا لأن الحافلة تأخرت.",
    "swahili": "Alifika kuchelewa kwa sababu basi lilichelewa."
  },
  {
    "norwegian": "Hvis du ikke kan komme gi meg beskjed.",
    "russian": "Если ты не сможешь прийти, дай мне знать.",
    "english": "If you can’t come, let me know.",
    "arabic": "إذا لم تستطع الحضور، أخبرني.",
    "swahili": "Kama huwezi kuja, niambie."
  },
  {
    "norwegian": "Jeg tror at vi trenger mer tid.",
    "russian": "Я думаю, что нам нужно больше времени.",
    "english": "I think that we need more time.",
    "arabic": "أعتقد أننا بحاجة إلى المزيد من الوقت.",
    "swahili": "Nadhani tunahitaji muda zaidi."
  },
  {
    "norwegian": "Har du spurt om hun vil være med oss?",
    "russian": "Ты спросил, пойдет ли она с нами?",
    "english": "Did you ask if she wants to join us?",
    "arabic": "هل سألت إذا كانت تريد الانضمام إلينا؟",
    "swahili": "Uliuliza kama anataka kujiunga nasi?"
  },
  {
    "norwegian": "Gutten som sykler der borte er broren min.",
    "russian": "Мальчик, который едет на велосипеде вон там, мой брат.",
    "english": "The boy who is cycling over there is my brother.",
    "arabic": "الصبي الذي يركب الدراجة هناك هو أخي.",
    "swahili": "Mvulana anayepanda baiskeli pale ni ndugu yangu."
  },
  {
    "norwegian": "Det begynte å regne, så vi dro hjem.",
    "russian": "Начался дождь, поэтому мы поехали домой.",
    "english": "It started raining, so we went home.",
    "arabic": "بدأت تمطر، لذلك ذهبنا إلى المنزل.",
    "swahili": "Ilinyesha mvua, kwa hivyo tulirudi nyumbani."
  },
  {
    "norwegian": "Hun ble sint fordi ingen hørte på henne.",
    "russian": "Она разозлилась, потому что никто ее не слушал.",
    "english": "She got angry because no one listened to her.",
    "arabic": "غضبت لأن لا أحد استمع إليها.",
    "swahili": "Alikasirika kwa sababu hakuna aliyemsikiliza."
  },
  {
    "norwegian": "Hvis du studerer hardt vil du lykkes.",
    "russian": "Если ты будешь усердно учиться, ты добьешься успеха.",
    "english": "If you study hard, you will succeed.",
    "arabic": "إذا درست بجد، ستنجح.",
    "swahili": "Ukisoma kwa bidii, utafanikiwa."
  },
  {
    "norwegian": "Jeg vet at de har kjøpt en ny bil.",
    "russian": "Я знаю, что они купили новую машину.",
    "english": "I know that they bought a new car.",
    "arabic": "أعلم أنهم اشتروا سيارة جديدة.",
    "swahili": "Ninajua kwamba wamenunua gari mpya."
  },
  {
    "norwegian": "Om du trenger hjelp bare si fra.",
    "russian": "Если тебе нужна помощь, просто скажи.",
    "english": "If you need help, just let me know.",
    "arabic": "إذا كنت بحاجة إلى مساعدة، فقط أخبرني.",
    "swahili": "Ukipata msaada tu niambie."
  },
  {
    "norwegian": "Læreren som underviser i matematikk er veldig streng.",
    "russian": "Учитель, который преподает математику, очень строгий.",
    "english": "The teacher who teaches math is very strict.",
    "arabic": "المعلم الذي يدرس الرياضيات صارم جدًا.",
    "swahili": "Mwalimu anayefundisha hesabu ni mkali sana."
  },
  {
    "norwegian": "Hun var glad, så hun smilte hele dagen.",
    "russian": "Она была счастлива, поэтому улыбалась весь день.",
    "english": "She was happy, so she smiled all day.",
    "arabic": "كانت سعيدة، لذا ابتسمت طوال اليوم.",
    "swahili": "Alikuwa na furaha, kwa hivyo alitabasamu siku nzima."
  },
  {
    "norwegian": "Vi spiste ute fordi vi ikke hadde tid til å lage mat.",
    "russian": "Мы поели вне дома, потому что у нас не было времени готовить.",
    "english": "We ate out because we didn't have time to cook.",
    "arabic": "تناولنا الطعام في الخارج لأننا لم يكن لدينا وقت للطهي.",
    "swahili": "Tulila nje kwa sababu hatukuwa na muda wa kupika."
  },
  {
    "norwegian": "Hvis du vil lese boka kan du låne den.",
    "russian": "Если ты хочешь прочитать книгу, ты можешь её одолжить.",
    "english": "If you want to read the book, you can borrow it.",
    "arabic": "إذا كنت تريد قراءة الكتاب، يمكنك استعارته.",
    "swahili": "Ukitaka kusoma kitabu, unaweza kukikopa."
  },
  {
    "norwegian": "Vi gikk til parken, og vi spilte fotball.",
    "russian": "Мы пошли в парк, и мы играли в футбол.",
    "english": "We went to the park, and we played football.",
    "arabic": "ذهبنا إلى الحديقة، ولعبنا كرة القدم.",
    "swahili": "Tulienda bustanini, na tukacheza mpira."
  },
  {
    "norwegian": "Han sa at han ikke hadde tid.",
    "russian": "Он сказал, что у него не было времени.",
    "english": "He said that he didn’t have time.",
    "arabic": "قال إنه لم يكن لديه وقت.",
    "swahili": "Alisema kwamba hakuwa na muda."
  },
  {
    "norwegian": "Vet du om det er varmt ute?",
    "russian": "Ты знаешь, тепло ли на улице?",
    "english": "Do you know if it is warm outside?",
    "arabic": "هل تعرف إذا كان الجو دافئًا في الخارج؟",
    "swahili": "Unajua kama nje ni joto?"
  },
  {
    "norwegian": "Kvinnen som står ved døra er min lærer.",
    "russian": "Женщина, которая стоит у двери, мой учитель.",
    "english": "The woman who is standing by the door is my teacher.",
    "arabic": "المرأة التي تقف عند الباب هي معلمتي.",
    "swahili": "Mwanamke anayesimama karibu na mlango ni mwalimu wangu."
  },
  {
    "norwegian": "Vi ble hjemme, for det var for sent å gå ut.",
    "russian": "Мы остались дома, потому что было слишком поздно выходить.",
    "english": "We stayed home, for it was too late to go out.",
    "arabic": "بقينا في المنزل، لأنه كان متأخرًا جدًا للخروج.",
    "swahili": "Tulibaki nyumbani, kwa kuwa ilikuwa imechelewa sana kutoka nje."
  },
  {
    "norwegian": "Han kom sent fordi han måtte jobbe overtid.",
    "russian": "Он пришел поздно, потому что ему пришлось работать сверхурочно.",
    "english": "He arrived late because he had to work overtime.",
    "arabic": "وصل متأخرًا لأنه كان عليه العمل لساعات إضافية.",
    "swahili": "Alifika kuchelewa kwa sababu alilazimika kufanya kazi za ziada."
  },
  {
    "norwegian": "Hvis du hjelper meg kan vi bli ferdige raskere.",
    "russian": "Если ты поможешь мне, мы закончим быстрее.",
    "english": "If you help me, we can finish faster.",
    "arabic": "إذا ساعدتني، يمكننا الانتهاء بشكل أسرع.",
    "swahili": "Ukinisaidia, tunaweza kumaliza haraka."
  },
  {
    "norwegian": "Jeg vet at hun bor i byen.",
    "russian": "Я знаю, что она живёт в городе.",
    "english": "I know that she lives in the city.",
    "arabic": "أعلم أنها تعيش في المدينة.",
    "swahili": "Ninajua kwamba anaishi mjini."
  },
  {
    "norwegian": "Kan du si meg om hun kommer i morgen?",
    "russian": "Ты можешь сказать мне, придёт ли она завтра?",
    "english": "Can you tell me if she is coming tomorrow?",
    "arabic": "هل يمكنك أن تخبرني إذا كانت ستأتي غدًا؟",
    "swahili": "Unaweza kuniambia kama anakuja kesho?"
  },
  {
    "norwegian": "Barna som leker i hagen er veldig glade.",
    "russian": "Дети, которые играют в саду, очень счастливы.",
    "english": "The children who are playing in the garden are very happy.",
    "arabic": "الأطفال الذين يلعبون في الحديقة سعداء جدًا.",
    "swahili": "Watoto wanaocheza bustanini wana furaha sana."
  },
  {
    "norwegian": "Han gikk til butikken, men den var stengt.",
    "russian": "Он пошел в магазин, но он был закрыт.",
    "english": "He went to the shop, but it was closed.",
    "arabic": "ذهب إلى المتجر، لكنه كان مغلقًا.",
    "swahili": "Alienda dukani, lakini ilikuwa imefungwa."
  },
  {
    "norwegian": "Hun var lei seg fordi hun mistet telefonen.",
    "russian": "Она была расстроена, потому что потеряла телефон.",
    "english": "She was upset because she lost her phone.",
    "arabic": "كانت حزينة لأنها فقدت هاتفها.",
    "swahili": "Alikasirika kwa sababu alipoteza simu yake."
  },
  {
    "norwegian": "Hvis vi reiser tidlig kan vi unngå trafikken.",
    "russian": "Если мы выедем рано, мы избежим пробок.",
    "english": "If we leave early, we can avoid the traffic.",
    "arabic": "إذا غادرنا مبكرًا، يمكننا تجنب الزحام.",
    "swahili": "Tukiondoka mapema, tunaweza kuepuka msongamano wa magari."
  },
  {
    "norwegian": "Jeg håper at du kan bli med på festen.",
    "russian": "Я надеюсь, что ты сможешь пойти на вечеринку.",
    "english": "I hope that you can join the party.",
    "arabic": "آمل أن تتمكن من الانضمام إلى الحفلة.",
    "swahili": "Natumaini kwamba unaweza kujiunga na sherehe."
  },
  {
    "norwegian": "Vet du om vi har møte i dag?",
    "russian": "Ты знаешь, у нас сегодня встреча?",
    "english": "Do you know if we have a meeting today?",
    "arabic": "هل تعرف إذا كان لدينا اجتماع اليوم؟",
    "swahili": "Unajua kama tuna mkutano leo?"
  },
  {
    "norwegian": "Mannen som reparerte bilen er mekaniker.",
    "russian": "Мужчина, который починил машину, механик.",
    "english": "The man who repaired the car is a mechanic.",
    "arabic": "الرجل الذي أصلح السيارة هو ميكانيكي.",
    "swahili": "Mwanaume aliyechukua gari ni fundi."
  },
  {
    "norwegian": "Vi dro til fjells, så vi fikk en fantastisk utsikt.",
    "russian": "Мы поднялись в горы, поэтому у нас был потрясающий вид.",
    "english": "We went to the mountains, so we got a fantastic view.",
    "arabic": "ذهبنا إلى الجبال، لذا حصلنا على منظر رائع.",
    "swahili": "Tulikwenda milimani, kwa hivyo tulipata mwonekano wa ajabu."
  },
  {
    "norwegian": "De ble hjemme fordi det var for mye snø.",
    "russian": "Они остались дома, потому что было слишком много снега.",
    "english": "They stayed home because there was too much snow.",
    "arabic": "بقوا في المنزل لأن هناك الكثير من الثلج.",
    "swahili": "Walibaki nyumbani kwa sababu kulikuwa na theluji nyingi."
  },
  {
    "norwegian": "Hvis du vil kan jeg hjelpe deg med leksene.",
    "russian": "Если хочешь, я могу помочь тебе с уроками.",
    "english": "If you want, I can help you with your homework.",
    "arabic": "إذا كنت تريد، يمكنني مساعدتك في الواجبات المنزلية.",
    "swahili": "Ukitaka naweza kukusaidia na kazi za nyumbani."
  },
  {
    "norwegian": "Jeg tror at vi må kjøpe mer melk.",
    "russian": "Я думаю, что нам нужно купить больше молока.",
    "english": "I think that we need to buy more milk.",
    "arabic": "أعتقد أننا بحاجة إلى شراء المزيد من الحليب.",
    "swahili": "Nadhani tunahitaji kununua maziwa zaidi."
  },
  {
    "norwegian": "Har du spurt om hun vil komme til middag?",
    "russian": "Ты спросил, придёт ли она на ужин?",
    "english": "Did you ask if she will come for dinner?",
    "arabic": "هل سألت إذا كانت ستأتي للعشاء؟",
    "swahili": "Uliuliza kama atakuja kwa chakula cha jioni?"
  },
  {
    "norwegian": "Gutten som leser boka er min bror.",
    "russian": "Мальчик, который читает книгу, мой брат.",
    "english": "The boy who is reading the book is my brother.",
    "arabic": "الصبي الذي يقرأ الكتاب هو أخي.",
    "swahili": "Mvulana anayesoma kitabu ni ndugu yangu."
  },
  {
    "norwegian": "Det regnet hele dagen, så vi ble inne.",
    "russian": "Целый день шёл дождь, поэтому мы остались дома.",
    "english": "It rained all day, so we stayed inside.",
    "arabic": "أمطرت طوال اليوم، لذا بقينا في الداخل.",
    "swahili": "Ilinyesha mvua siku nzima, kwa hiyo tulikaa ndani."
  },
  {
    "norwegian": "Hun ble glad fordi hun bestod eksamen.",
    "russian": "Она была рада, потому что сдала экзамен.",
    "english": "She was happy because she passed the exam.",
    "arabic": "كانت سعيدة لأنها اجتازت الامتحان.",
    "swahili": "Alifurahi kwa sababu alipita mtihani."
  },
  {
    "norwegian": "Hvis du har tid kan vi gå på kafé.",
    "russian": "Если у тебя есть время, мы можем сходить в кафе.",
    "english": "If you have time, we can go to the café.",
    "arabic": "إذا كان لديك وقت، يمكننا الذهاب إلى المقهى.",
    "swahili": "Ukiwa na muda, tunaweza kwenda kwenye mkahawa."
  },
  {
    "norwegian": "Jeg vet at han liker å trene.",
    "russian": "Я знаю, что ему нравится тренироваться.",
    "english": "I know that he likes to work out.",
    "arabic": "أعلم أنه يحب التمرين.",
    "swahili": "Ninajua kwamba anapenda kufanya mazoezi."
  },
  {
    "norwegian": "Om du ser noe rart, si fra til meg.",
    "russian": "Если ты заметишь что-то странное, скажи мне.",
    "english": "If you see something strange, tell me.",
    "arabic": "إذا رأيت شيئًا غريبًا، أخبرني.",
    "swahili": "Ukiona kitu cha ajabu, niambie."
  },
  {
    "norwegian": "Læreren som underviser i fysikk er veldig kunnskapsrik.",
    "russian": "Учитель, который преподаёт физику, очень знающий.",
    "english": "The teacher who teaches physics is very knowledgeable.",
    "arabic": "المعلم الذي يدرس الفيزياء على دراية كبيرة.",
    "swahili": "Mwalimu anayefundisha fizikia ana maarifa mengi."
  },
  {
    "norwegian": "Vi hadde en lang dag, så vi la oss tidlig.",
    "russian": "У нас был долгий день, поэтому мы легли спать рано.",
    "english": "We had a long day, so we went to bed early.",
    "arabic": "كان لدينا يوم طويل، لذا ذهبنا إلى الفراش مبكرًا.",
    "swahili": "Tulikuwa na siku ndefu, kwa hivyo tulienda kulala mapema."
  },
  {
    "norwegian": "Hvis du vil dra til stranden kan vi gjøre det i morgen.",
    "russian": "Если ты хочешь поехать на пляж, мы можем сделать это завтра.",
    "english": "If you want to go to the beach, we can do it tomorrow.",
    "arabic": "إذا كنت تريد الذهاب إلى الشاطئ، يمكننا القيام بذلك غدًا.",
    "swahili": "Ukitaka kwenda pwani, tunaweza kufanya hivyo kesho."
  },
  {
    "norwegian": "Vi laget middag, og vi inviterte vennene våre.",
    "russian": "Мы приготовили ужин и пригласили наших друзей.",
    "english": "We made dinner, and we invited our friends.",
    "arabic": "قمنا بتحضير العشاء ودعونا أصدقائنا.",
    "swahili": "Tulitengeneza chakula cha jioni, na tuliwaalika marafiki zetu."
  },
  {
    "norwegian": "Han sa at han skulle ringe senere.",
    "russian": "Он сказал, что позвонит позже.",
    "english": "He said that he would call later.",
    "arabic": "قال إنه سيتصل لاحقًا.",
    "swahili": "Alisema kwamba atapiga simu baadaye."
  },
  {
    "norwegian": "Vet du om bussen stopper her?",
    "russian": "Ты знаешь, останавливается ли здесь автобус?",
    "english": "Do you know if the bus stops here?",
    "arabic": "هل تعرف إذا كانت الحافلة تتوقف هنا؟",
    "swahili": "Unajua kama basi linapiga hapa?"
  },
  {
    "norwegian": "Hunden som løper i hagen tilhører naboen.",
    "russian": "Собака, которая бегает в саду, принадлежит соседу.",
    "english": "The dog that is running in the garden belongs to the neighbor.",
    "arabic": "الكلب الذي يجري في الحديقة ينتمي إلى الجار.",
    "swahili": "Mbwa anayekimbia bustanini ni wa jirani."
  },
  {
    "norwegian": "Vi gikk til butikken, for vi trengte melk.",
    "russian": "Мы пошли в магазин, потому что нам нужно было молоко.",
    "english": "We went to the store, for we needed milk.",
    "arabic": "ذهبنا إلى المتجر لأننا كنا بحاجة إلى الحليب.",
    "swahili": "Tulienda dukani, kwa sababu tulihitaji maziwa."
  },
  {
    "norwegian": "Hun kom sent fordi hun glemte tiden.",
    "russian": "Она пришла поздно, потому что забыла время.",
    "english": "She arrived late because she lost track of time.",
    "arabic": "وصلت متأخرة لأنها فقدت الإحساس بالوقت.",
    "swahili": "Alifika kuchelewa kwa sababu alisahau muda."
  },
  {
    "norwegian": "Hvis du studerer mer kan du få bedre karakterer.",
    "russian": "Если ты будешь больше учиться, ты получишь лучшие оценки.",
    "english": "If you study more, you can get better grades.",
    "arabic": "إذا درست أكثر، يمكنك الحصول على درجات أفضل.",
    "swahili": "Ukiendelea kusoma zaidi, unaweza kupata alama bora."
  },
  {
    "norwegian": "Jeg vet at han jobber i en bank.",
    "russian": "Я знаю, что он работает в банке.",
    "english": "I know that he works in a bank.",
    "arabic": "أعلم أنه يعمل في بنك.",
    "swahili": "Ninajua kwamba anafanya kazi katika benki."
  },
  {
    "norwegian": "Kan du fortelle meg om det er noe nytt?",
    "russian": "Ты можешь рассказать мне, есть ли что-то новое?",
    "english": "Can you tell me if there is anything new?",
    "arabic": "هل يمكنك أن تخبرني إذا كان هناك أي جديد؟",
    "swahili": "Unaweza kuniambia kama kuna chochote kipya?"
  },
  {
    "norwegian": "Jenta som sitter på benken er kusinen min.",
    "russian": "Девочка, которая сидит на скамейке, моя двоюродная сестра.",
    "english": "The girl sitting on the bench is my cousin.",
    "arabic": "الفتاة التي تجلس على المقعد هي ابنة عمي.",
    "swahili": "Msichana anayekaa kwenye benchi ni binamu yangu."
  },
  {
    "norwegian": "Han kjøpte en ny jakke, men den var for liten.",
    "russian": "Он купил новую куртку, но она оказалась слишком маленькой.",
    "english": "He bought a new jacket, but it was too small.",
    "arabic": "اشترى سترة جديدة، لكنها كانت صغيرة جدًا.",
    "swahili": "Alinunua koti mpya, lakini ilikuwa ndogo sana."
  },
  {
    "norwegian": "Vi dro hjem fordi vi var trøtte.",
    "russian": "Мы поехали домой, потому что были уставшими.",
    "english": "We went home because we were tired.",
    "arabic": "ذهبنا إلى المنزل لأننا كنا متعبين.",
    "swahili": "Tulienda nyumbani kwa sababu tulikuwa tumepata uchovu."
  },
  {
    "norwegian": "Hvis vi starter tidlig kan vi bli ferdige før lunsj.",
    "russian": "Если мы начнем рано, мы закончим до обеда.",
    "english": "If we start early, we can finish before lunch.",
    "arabic": "إذا بدأنا مبكرًا، يمكننا الانتهاء قبل الغداء.",
    "swahili": "Tukianza mapema, tunaweza kumaliza kabla ya chakula cha mchana."
  },
  {
    "norwegian": "Jeg tror at det vil regne senere.",
    "russian": "Я думаю, что позже пойдет дождь.",
    "english": "I think that it will rain later.",
    "arabic": "أعتقد أنه سيمطر لاحقًا.",
    "swahili": "Nadhani mvua itanyesha baadaye."
  },
  {
    "norwegian": "Vet du om han kommer på møtet?",
    "russian": "Ты знаешь, придёт ли он на встречу?",
    "english": "Do you know if he is coming to the meeting?",
    "arabic": "هل تعرف إذا كان سيأتي إلى الاجتماع؟",
    "swahili": "Unajua kama atakuja mkutanoni?"
  },
  {
    "norwegian": "Kvinnen som jobber på sykehuset er veldig vennlig.",
    "russian": "Женщина, которая работает в больнице, очень дружелюбная.",
    "english": "The woman who works at the hospital is very friendly.",
    "arabic": "المرأة التي تعمل في المستشفى ودودة جدًا.",
    "swahili": "Mwanamke anayefanya kazi hospitalini ni rafiki sana."
  },
  {
    "norwegian": "Vi gikk til fjorden, så vi kunne fiske.",
    "russian": "Мы пошли к фьорду, чтобы порыбачить.",
    "english": "We went to the fjord, so we could fish.",
    "arabic": "ذهبنا إلى الفجورد لكي نصطاد.",
    "swahili": "Tulienda kwenye fjord, kwa hivyo tunaweza kuvua samaki."
  },
  {
    "norwegian": "De dro til byen fordi de måtte handle mat.",
    "russian": "Они поехали в город, потому что им нужно было купить еду.",
    "english": "They went to the city because they needed to buy groceries.",
    "arabic": "ذهبوا إلى المدينة لأنهم كانوا بحاجة لشراء البقالة.",
    "swahili": "Walienda mjini kwa sababu walihitaji kununua mboga."
  },
  {
    "norwegian": "Hvis du er ferdig med oppgavene kan du slappe av.",
    "russian": "Если ты закончил задания, можешь отдохнуть.",
    "english": "If you are done with the tasks, you can relax.",
    "arabic": "إذا انتهيت من المهام، يمكنك الاسترخاء.",
    "swahili": "Ukiwa umemaliza kazi, unaweza kupumzika."
  },
  {
    "norwegian": "Jeg vet at han liker å se på film.",
    "russian": "Я знаю, что он любит смотреть фильмы.",
    "english": "I know that he likes to watch movies.",
    "arabic": "أعلم أنه يحب مشاهدة الأفلام.",
    "swahili": "Ninajua kwamba anapenda kuangalia filamu."
  },
  {
    "norwegian": "Om du ser et problem må du si fra til læreren.",
    "russian": "Если ты заметишь проблему, скажи учителю.",
    "english": "If you see a problem, you must tell the teacher.",
    "arabic": "إذا رأيت مشكلة، يجب أن تخبر المعلم.",
    "swahili": "Ukiona shida, lazima umwambie mwalimu."
  },
  {
    "norwegian": "Barna som spiller basketball er veldig gode.",
    "russian": "Дети, которые играют в баскетбол, очень хорошие игроки.",
    "english": "The children playing basketball are very good.",
    "arabic": "الأطفال الذين يلعبون كرة السلة جيدون جدًا.",
    "swahili": "Watoto wanaocheza mpira wa kikapu ni wazuri sana."
  },
  {
    "norwegian": "Det var mørkt, så vi tente lys.",
    "russian": "Было темно, поэтому мы зажгли свечи.",
    "english": "It was dark, so we lit candles.",
    "arabic": "كان الجو مظلمًا، لذا أشعلنا الشموع.",
    "swahili": "Kulikuwa na giza, kwa hivyo tuliwasha mishumaa."
  },
  {
    "norwegian": "Hun lo fordi hun hørte en morsom vits.",
    "russian": "Она смеялась, потому что услышала смешную шутку.",
    "english": "She laughed because she heard a funny joke.",
    "arabic": "ضحكت لأنها سمعت نكتة مضحكة.",
    "swahili": "Alicheka kwa sababu alisikia utani wa kuchekesha."
  },
  {
    "norwegian": "Hvis du følger med kan du lære mye.",
    "russian": "Если будешь внимательно слушать, можешь многому научиться.",
    "english": "If you pay attention, you can learn a lot.",
    "arabic": "إذا انتبهت، يمكنك تعلم الكثير.",
    "swahili": "Ukilipa umakini, unaweza kujifunza mengi."
  },
  {
    "norwegian": "Jeg vet at hun er veldig flink til å lage mat.",
    "russian": "Я знаю, что она очень хорошо готовит.",
    "english": "I know that she is very good at cooking.",
    "arabic": "أعلم أنها جيدة جدًا في الطهي.",
    "swahili": "Ninajua kwamba yeye ni mzuri sana kupika."
  },
  {
    "norwegian": "Har du spurt om han vil bli med på kino?",
    "russian": "Ты спросил, хочет ли он пойти в кино?",
    "english": "Did you ask if he wants to go to the cinema?",
    "arabic": "هل سألت إذا كان يريد الذهاب إلى السينما؟",
    "swahili": "Umeuliza kama anataka kwenda kwenye sinema?"
  },
  {
    "norwegian": "Mannen som bor i nabohuset er veldig hyggelig.",
    "russian": "Мужчина, который живёт в соседнем доме, очень приятный.",
    "english": "The man who lives next door is very nice.",
    "arabic": "الرجل الذي يعيش في المنزل المجاور لطيف جدًا.",
    "swahili": "Mwanaume anayeishi nyumba jirani ni mzuri sana."
  },
  {
    "norwegian": "Vi var sultne, så vi bestilte pizza.",
    "russian": "Мы были голодны, поэтому заказали пиццу.",
    "english": "We were hungry, so we ordered pizza.",
    "arabic": "كنا جائعين، لذا طلبنا بيتزا.",
    "swahili": "Tulikuwa na njaa, kwa hiyo tuliagiza pizza."
  },
  {
    "norwegian": "Hvis vi får tid, kan vi gå en tur i skogen.",
    "russian": "Если у нас будет время, мы можем прогуляться в лесу.",
    "english": "If we have time, we can go for a walk in the forest.",
    "arabic": "إذا كان لدينا وقت، يمكننا الذهاب في نزهة في الغابة.",
    "swahili": "Tukipata muda, tunaweza kwenda kutembea msituni."
  },
  {
    "norwegian": "Han kjøpte nye sko, for han hadde slitt ut de gamle.",
    "russian": "Он купил новые ботинки, потому что старые износились.",
    "english": "He bought new shoes, for his old ones were worn out.",
    "arabic": "اشترى أحذية جديدة لأن القديمة كانت مهترئة.",
    "swahili": "Alinunua viatu vipya, kwa kuwa vya zamani vilikuwa vimechakaa."
  },
  {
    "norwegian": "Jeg sa at jeg ville hjelpe deg med oppgaven.",
    "russian": "Я сказал, что помогу тебе с заданием.",
    "english": "I said that I would help you with the task.",
    "arabic": "قلت إنني سأساعدك في المهمة.",
    "swahili": "Nimesema kwamba nitakusaidia na kazi."
  },
  {
    "norwegian": "Vet du om de planlegger å komme i kveld?",
    "russian": "Ты знаешь, планируют ли они прийти сегодня вечером?",
    "english": "Do you know if they plan to come tonight?",
    "arabic": "هل تعرف إذا كانوا يخططون للمجيء الليلة؟",
    "swahili": "Unajua kama wanapanga kuja usiku wa leo?"
  },
  {
    "norwegian": "Katten som ligger på sofaen elsker å sove der.",
    "russian": "Кот, который лежит на диване, любит спать там.",
    "english": "The cat lying on the sofa loves to sleep there.",
    "arabic": "القط الذي يرقد على الأريكة يحب النوم هناك.",
    "swahili": "Paka anayelala kwenye sofa anapenda kulala hapo."
  },
  {
    "norwegian": "Vi tok en pause, for vi var slitne.",
    "russian": "Мы сделали перерыв, потому что устали.",
    "english": "We took a break, for we were tired.",
    "arabic": "أخذنا استراحة لأننا كنا متعبين.",
    "swahili": "Tulipumzika, kwa sababu tulikuwa na uchovu."
  },
  {
    "norwegian": "Hun ble hjemme fordi hun følte seg dårlig.",
    "russian": "Она осталась дома, потому что плохо себя чувствовала.",
    "english": "She stayed home because she felt unwell.",
    "arabic": "بقيت في المنزل لأنها شعرت بتوعك.",
    "swahili": "Alikaa nyumbani kwa sababu alijisikia vibaya."
  },
  {
    "norwegian": "Hvis du trener regelmessig, vil du føle deg bedre.",
    "russian": "Если ты будешь регулярно тренироваться, ты почувствуешь себя лучше.",
    "english": "If you exercise regularly, you will feel better.",
    "arabic": "إذا كنت تمارس الرياضة بانتظام، ستشعر بتحسن.",
    "swahili": "Ukifanya mazoezi kwa kawaida, utajisikia vizuri zaidi."
  },
  {
    "norwegian": "Jeg vet at han liker å gå på fjellturer.",
    "russian": "Я знаю, что ему нравится ходить в горные походы.",
    "english": "I know that he likes hiking in the mountains.",
    "arabic": "أعلم أنه يحب التنزه في الجبال.",
    "swahili": "Ninajua kwamba anapenda kupanda milima."
  },
  {
    "norwegian": "Kan du si meg om posten er kommet?",
    "russian": "Ты можешь сказать мне, пришла ли почта?",
    "english": "Can you tell me if the mail has arrived?",
    "arabic": "هل يمكنك أن تخبرني إذا وصلت البريد؟",
    "swahili": "Unaweza kuniambia kama barua imefika?"
  },
  {
    "norwegian": "Bilen som står utenfor huset vårt tilhører naboen.",
    "russian": "Машина, которая стоит у нашего дома, принадлежит соседу.",
    "english": "The car parked outside our house belongs to the neighbor.",
    "arabic": "السيارة المتوقفة خارج منزلنا تخص الجار.",
    "swahili": "Gari lililoko nje ya nyumba yetu ni la jirani."
  },
  {
    "norwegian": "De spiste middag, men de var fortsatt sultne.",
    "russian": "Они поужинали, но всё ещё были голодны.",
    "english": "They had dinner, but they were still hungry.",
    "arabic": "تناولوا العشاء، لكنهم ما زالوا جائعين.",
    "swahili": "Walila chakula cha jioni, lakini bado walikuwa na njaa."
  },
  {
    "norwegian": "Vi dro tidlig fordi vi ikke ville komme for sent.",
    "russian": "Мы ушли рано, потому что не хотели опоздать.",
    "english": "We left early because we didn’t want to be late.",
    "arabic": "غادرنا مبكرًا لأننا لم نرغب في التأخر.",
    "swahili": "Tuliondoka mapema kwa sababu hatukutaka kuchelewa."
  },
  {
    "norwegian": "Hvis du spør pent, kan du få hjelp.",
    "russian": "Если ты вежливо попросишь, тебе помогут.",
    "english": "If you ask nicely, you can get help.",
    "arabic": "إذا طلبت بلطف، يمكنك الحصول على المساعدة.",
    "swahili": "Ukiomba vizuri, unaweza kupata msaada."
  },
  {
    "norwegian": "Jeg tror at de allerede har løst problemet.",
    "russian": "Я думаю, что они уже решили проблему.",
    "english": "I think that they have already solved the problem.",
    "arabic": "أعتقد أنهم قد حلوا المشكلة بالفعل.",
    "swahili": "Nadhani tayari wametatua tatizo."
  },
  {
    "norwegian": "Vet du om biblioteket har åpent i dag?",
    "russian": "Ты знаешь, работает ли библиотека сегодня?",
    "english": "Do you know if the library is open today?",
    "arabic": "هل تعرف إذا كانت المكتبة مفتوحة اليوم؟",
    "swahili": "Unajua kama maktaba iko wazi leo?"
  },
  {
    "norwegian": "Jenta som leker med ballen, er søsteren min.",
    "russian": "Девочка, которая играет с мячом, моя сестра.",
    "english": "The girl playing with the ball is my sister.",
    "arabic": "الفتاة التي تلعب بالكرة هي أختي.",
    "swahili": "Msichana anayepiga mpira ni dada yangu."
  }
];