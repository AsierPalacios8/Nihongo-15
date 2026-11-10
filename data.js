// Contenido del plan "Japonés hablado en 4 semanas"
// r = rōmaji, jp = japonés (para la voz), es = significado, hear = frase que te dicen a ti
const WEEKS = [
  {
    title: "Cortesía y supervivencia",
    days: [
      { title: "Saludos", tip: "Ohayō solo se usa por la mañana. Konbanwa, al llegar por la noche.",
        challenge: "Saluda hoy a 3 personas con el saludo correcto según la hora.",
        phrases: [
          { r: "Ohayō gozaimasu", jp: "おはようございます", es: "Buenos días" },
          { r: "Konnichiwa", jp: "こんにちは", es: "Hola (de día)" },
          { r: "Konbanwa", jp: "こんばんは", es: "Buenas noches (al llegar)" },
          { r: "Oyasuminasai", jp: "おやすみなさい", es: "Buenas noches (al despedirse)" }
        ] },
      { title: "Gracias y perdón", tip: "Sumimasen vale para pedir perdón, llamar la atención y agradecer una molestia.",
        challenge: "Usa sumimasen y arigatō gozaimasu en una tienda.",
        phrases: [
          { r: "Arigatō gozaimasu", jp: "ありがとうございます", es: "Muchas gracias" },
          { r: "Sumimasen", jp: "すみません", es: "Perdón / disculpe" },
          { r: "Gomen nasai", jp: "ごめんなさい", es: "Lo siento (más personal)" }
        ] },
      { title: "No entiendo", tip: "Onegaishimasu = «por favor» al pedir algo. Pégalo detrás de lo que necesitas.",
        challenge: "Cuando no entiendas algo hoy, di «Mō ichido, yukkuri onegaishimasu».",
        phrases: [
          { r: "Hai / Iie", jp: "はい。いいえ。", es: "Sí / No" },
          { r: "Wakarimasen", jp: "わかりません", es: "No entiendo" },
          { r: "Mō ichido onegaishimasu", jp: "もう一度お願いします", es: "Otra vez, por favor" },
          { r: "Yukkuri onegaishimasu", jp: "ゆっくりお願いします", es: "Más despacio, por favor" }
        ] },
      { title: "Presentarte", tip: "X desu = «soy X / es X». Cambia el país por el tuyo si quieres.",
        challenge: "Preséntate a alguien del club con las 4 frases seguidas.",
        phrases: [
          { r: "Hajimemashite", jp: "はじめまして", es: "Encantado (la primera vez)" },
          { r: "Asier desu", jp: "アシエルです", es: "Soy Asier" },
          { r: "Supein kara kimashita", jp: "スペインから来ました", es: "Vengo de España" },
          { r: "Yoroshiku onegaishimasu", jp: "よろしくお願いします", es: "Un placer / cuento contigo" }
        ] },
      { title: "Pedir ayuda", tip: "Daijōbu desu sirve para «estoy bien» y para rechazar algo con educación.",
        challenge: "Rechaza algo hoy con «Daijōbu desu».",
        phrases: [
          { r: "Nihongo wa sukoshi dake desu", jp: "日本語は少しだけです", es: "Solo hablo un poco de japonés" },
          { r: "Eigo de ii desu ka?", jp: "英語でいいですか？", es: "¿Puede ser en inglés?" },
          { r: "Daijōbu desu", jp: "大丈夫です", es: "Estoy bien / no hace falta" }
        ] }
    ],
    weekend: "Preséntate en voz alta de corrido: Hajimemashite. Asier desu. Supein kara kimashita. Nihongo wa sukoshi dake desu. Yoroshiku onegaishimasu."
  },
  {
    title: "Supermercado y konbini",
    days: [
      { title: "Precio y dónde está", tip: "Ka al final convierte la frase en pregunta. Wa marca el tema: «el huevo… ¿dónde está?».",
        challenge: "Pregunta dónde está un producto en el súper.",
        phrases: [
          { r: "Kore wa ikura desu ka?", jp: "これはいくらですか？", es: "¿Cuánto cuesta esto?" },
          { r: "Kore o kudasai", jp: "これをください", es: "Esto, por favor" },
          { r: "Tamago wa doko desu ka?", jp: "卵はどこですか？", es: "¿Dónde están los huevos? (cambia la palabra)" }
        ] },
      { title: "La bolsa y la tarjeta", tip: "En caja te preguntan casi siempre lo mismo. Aprende a reconocerlo de oído.",
        challenge: "Responde en japonés a la pregunta de la bolsa.",
        phrases: [
          { r: "Fukuro wa goriyō desu ka?", jp: "袋はご利用ですか？", es: "¿Necesita bolsa?", hear: true },
          { r: "Hai, onegaishimasu", jp: "はい、お願いします", es: "Sí, por favor" },
          { r: "Iie, daijōbu desu", jp: "いいえ、大丈夫です", es: "No, gracias" },
          { r: "Pointo kādo wa omochi desu ka?", jp: "ポイントカードはお持ちですか？", es: "¿Tiene tarjeta de puntos?", hear: true },
          { r: "Motte imasen", jp: "持っていません", es: "No tengo" }
        ] },
      { title: "En el konbini", tip: "Si compras bentō te preguntarán si lo calientan.",
        challenge: "Compra algo en el konbini y pide palillos o cuchara.",
        phrases: [
          { r: "Atatamemasu ka?", jp: "温めますか？", es: "¿Se lo caliento?", hear: true },
          { r: "Ohashi / Supūn / Fōku", jp: "お箸。スプーン。フォーク。", es: "Palillos / cuchara / tenedor" },
          { r: "Ohashi o kudasai", jp: "お箸をください", es: "Palillos, por favor" }
        ] },
      { title: "Pagar", tip: "De = «con / mediante». Kādo de = con tarjeta.",
        challenge: "Paga hoy diciendo cómo quieres pagar.",
        phrases: [
          { r: "Kādo de onegaishimasu", jp: "カードでお願いします", es: "Con tarjeta, por favor" },
          { r: "Genkin de", jp: "現金で", es: "En efectivo" },
          { r: "Reshīto wa daijōbu desu", jp: "レシートは大丈夫です", es: "No necesito el tique" }
        ] },
      { title: "Productos básicos", tip: "~ wa arimasu ka? = «¿tienen ~?». Combínalo con cualquier producto.",
        challenge: "Pregunta si tienen un producto que no encuentres.",
        phrases: [
          { r: "Gyūnyū wa arimasu ka?", jp: "牛乳はありますか？", es: "¿Tienen leche?" },
          { r: "Mizu, gyūnyū, tamago", jp: "水。牛乳。卵。", es: "Agua, leche, huevos" },
          { r: "Toriniku, sakana, yasai", jp: "鶏肉。魚。野菜。", es: "Pollo, pescado, verdura" },
          { r: "Gohan, pan, kudamono", jp: "ご飯。パン。果物。", es: "Arroz, pan, fruta" }
        ] }
    ],
    weekend: "Haz una compra entera en japonés: Sumimasen, tamago wa doko desu ka? … Kādo de onegaishimasu."
  },
  {
    title: "Cafetería y restaurante",
    days: [
      { title: "Al entrar", tip: "A irasshaimase no hace falta responder: basta una sonrisa o un gesto.",
        challenge: "Di cuántos sois al entrar en un restaurante.",
        phrases: [
          { r: "Irasshaimase", jp: "いらっしゃいませ", es: "Bienvenido", hear: true },
          { r: "Nanmei sama desu ka?", jp: "何名様ですか？", es: "¿Cuántas personas?", hear: true },
          { r: "Hitori desu / Futari desu", jp: "一人です。二人です。", es: "Uno / Dos" }
        ] },
      { title: "Pedir un café", tip: "Fórmula: cosa + o + número + kudasai. Hitotsu (1), futatsu (2), mittsu (3).",
        challenge: "Pide un café diciendo tamaño y si es caliente o con hielo.",
        phrases: [
          { r: "Kōhī o hitotsu kudasai", jp: "コーヒーをひとつください", es: "Un café, por favor" },
          { r: "Hotto / Aisu", jp: "ホット。アイス。", es: "Caliente / Con hielo" },
          { r: "Esu / Emu / Eru saizu", jp: "エス、エム、エルサイズ", es: "Tamaño S / M / L" },
          { r: "Hitotsu, futatsu, mittsu", jp: "ひとつ、ふたつ、みっつ", es: "Uno, dos, tres (cosas)" }
        ] },
      { title: "¿Aquí o para llevar?", tip: "Muchas cafeterías también entienden «teikuauto» (take out).",
        challenge: "Responde si es para tomar aquí o para llevar.",
        phrases: [
          { r: "Kochira de omeshiagari desu ka?", jp: "こちらでお召し上がりですか？", es: "¿Para tomar aquí?", hear: true },
          { r: "Koko de", jp: "ここで", es: "Aquí" },
          { r: "Mochikaeri de", jp: "持ち帰りで", es: "Para llevar" }
        ] },
      { title: "En el restaurante", tip: "En Japón es normal llamar al camarero con un «¡Sumimasen!» en voz alta.",
        challenge: "Pide la recomendación de la casa.",
        phrases: [
          { r: "Sumimasen!", jp: "すみません！", es: "¡Perdone! (llamar al camarero)" },
          { r: "Osusume wa nan desu ka?", jp: "おすすめは何ですか？", es: "¿Qué me recomienda?" },
          { r: "Kore to kore o kudasai", jp: "これとこれをください", es: "Esto y esto, por favor" },
          { r: "Omizu o kudasai", jp: "お水をください", es: "Agua, por favor" }
        ] },
      { title: "Comer y pagar", tip: "Gochisōsama deshita al salir del restaurante queda muy bien.",
        challenge: "Di itadakimasu y gochisōsama deshita en tu próxima comida fuera.",
        phrases: [
          { r: "Itadakimasu", jp: "いただきます", es: "Antes de comer («que aproveche»)" },
          { r: "Oishii!", jp: "おいしい！", es: "¡Está rico!" },
          { r: "Okaikei onegaishimasu", jp: "お会計お願いします", es: "La cuenta, por favor" },
          { r: "Gochisōsama deshita", jp: "ごちそうさまでした", es: "Gracias por la comida (al terminar)" }
        ] }
    ],
    weekend: "Pide en una cafetería sin mirar el móvil: Aisu kōhī, emu saizu, hitotsu kudasai. Mochikaeri de."
  },
  {
    title: "Compañeros de trabajo",
    days: [
      { title: "Saludos del trabajo", tip: "Otsukaresama desu sirve para saludar, despedirte y reconocer el esfuerzo.",
        challenge: "Usa otsukaresama desu con todo el staff hoy.",
        phrases: [
          { r: "Otsukaresama desu", jp: "お疲れ様です", es: "Buen trabajo / hola o adiós entre compañeros" },
          { r: "Osaki ni shitsurei shimasu", jp: "お先に失礼します", es: "Me voy antes, con permiso" },
          { r: "Mata ashita", jp: "また明日", es: "Hasta mañana" }
        ] },
      { title: "Pedir favores", tip: "Tasukarimasu = «me salvas / me ayudas mucho». Suena muy natural.",
        challenge: "Pide un favor a un compañero y dale las gracias con tasukarimasu.",
        phrases: [
          { r: "Chotto matte kudasai", jp: "ちょっと待ってください", es: "Espera un momento, por favor" },
          { r: "Onegai dekimasu ka?", jp: "お願いできますか？", es: "¿Me puedes hacer el favor?" },
          { r: "Tasukarimasu", jp: "助かります", es: "Me ayudas mucho, gracias" }
        ] },
      { title: "En el entrenamiento", tip: "~mashō = «vamos a ~». Kyūkei shimashō = vamos a descansar.",
        challenge: "Da 2 instrucciones de entrenamiento en japonés.",
        phrases: [
          { r: "Mō ikkai", jp: "もう一回", es: "Una vez más" },
          { r: "Ii ne! / Sugoi!", jp: "いいね！すごい！", es: "¡Bien! / ¡Impresionante!" },
          { r: "Kyūkei shimashō", jp: "休憩しましょう", es: "Vamos a descansar" },
          { r: "Ganbatte!", jp: "頑張って！", es: "¡Ánimo, dale!" }
        ] },
      { title: "En la camilla", tip: "~ shite kudasai = «haz ~, por favor». Es la base para dar instrucciones.",
        challenge: "Usa una frase de fisio con un jugador.",
        phrases: [
          { r: "Daijōbu desu ka?", jp: "大丈夫ですか？", es: "¿Estás bien?" },
          { r: "Doko ga itai desu ka?", jp: "どこが痛いですか？", es: "¿Dónde te duele?" },
          { r: "Shinkokyū shite kudasai", jp: "深呼吸してください", es: "Respira hondo, por favor" },
          { r: "Chikara o nuite kudasai", jp: "力を抜いてください", es: "Relaja, por favor" }
        ] },
      { title: "Charla rápida", tip: "~ desu ne = «¿verdad?». Perfecto para empezar una conversación.",
        challenge: "Empieza una conversación con «Samui desu ne».",
        phrases: [
          { r: "Samui desu ne", jp: "寒いですね", es: "Hace frío, ¿eh?" },
          { r: "Shūmatsu wa nani o shimashita ka?", jp: "週末は何をしましたか？", es: "¿Qué hiciste el fin de semana?" },
          { r: "Shiai, ganbarimashō!", jp: "試合、頑張りましょう！", es: "¡A por el partido!" }
        ] }
    ],
    weekend: "Elige 3 frases de esta semana y úsalas el lunes en el club."
  }
];
