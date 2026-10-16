// === Mosaic interactiu · 20 portades dels millors discos ===

export type MosaicArquetip =
  | "cantautor-mascle" // Sisa, Pau Riba, Ovidi
  | "cantautora-femella" // Maria del Mar Bonet
  | "pianista" // Tete Montoliu, Jordi Sabatés
  | "guitarrista" // Toti Soler
  | "banda-instrumental" // Dharma, Iceberg, Mirasol
  | "rumba" // Gato Pérez
  | "duo-art-pop" // Barcelona Traction, Màquina!
  | "formacio-mescla"; // Secta Sònica, Música Urbana

export interface MosaicDisc {
  id: string;
  titol: string;
  artista: string;
  any: number;
  segell?: string;
  color: string;
  arquetip: MosaicArquetip;
  simbol: string; // símbol decoratiu per al tile (emoji o char simple)
  fotoArtista: string; // path generat per arquetip
  dades: string[]; // fets verificables (any, segell, formació, vendes)
  anecdota: string; // opinió / anècdota / recepció
  contextHistoric: string; // context històric del moment
  cita?: {
    text: string;
    autor: string;
    font: string;
  };
  escoltar?: {
    spotify?: string;
    youtube?: string;
    bandcamp?: string;
  };
}

export const mosaicIntro = {
  titol: "Mosaic discogràfic",
  subtitol: "Vint portades, vint històries",
  intro:
    "Vint discos que articulen el cicle laietà (1970–1978), del Why? de Màquina! a l'Iberia de Música Urbana. Cada portada amaga una història: l'anècdota del estudi, la recepció del públic, el context polític del moment. Clica una portada per obrir-ne la fitxa completa, amb la fotografia de l'artista, la cita històrica i els enllaços per escoltar-la a Spotify, YouTube o Bandcamp.",
};

export const mosaicDiscs: MosaicDisc[] = [
  {
    id: "why-maquina",
    titol: "Why?",
    artista: "Màquina!",
    any: 1970,
    segell: "Edigsa",
    color: "#ca8a04",
    arquetip: "duo-art-pop",
    simbol: "?",
    fotoArtista: "/laieta/mosaic-cover-why-maquina.jpg",
    dades: [
      "Disc: Why? (1970) — Edigsa",
      "Formació: Jordi Batiste «Tapi» (veu, baix) i Enric Herrera (teclats), amb col·laboradors variables",
      "Primer disc de rock progresiu d'ambició orquestral publicat al sud d'Europa",
      "Considerat el disc fundacional del rock laietà",
      "Portada: fotografia surrealista d'un croissant daurat amb un rellotge de butxaca antic incrustat al centre",
    ],
    anecdota:
      "La portada és ella mateixa un manifest: un croissant daurat amb un rellotge de butxaca antic incrustat al centre, com si fos el rostre del pa. És la imatge surrealista perfecta per un disc que barreja l'orgànic (el pa, la cuina mediterrània) amb el mecànic (el temps, el rellotge) — exactament el que la música fa a dins. Batiste i Herrera eren encara uns adolescents quan entraren a l'estudi. El títol Why? és un homenatge explícit al «Why?» dels Beatles (amb Tony Sheridan, gravat a Hamburg el 1961), però també un acte d'afirmació: «per què no, aquí, nosaltres?». L'ambició orquestral va sorprendre la crítica.",
    contextHistoric:
      "El 1970 és un any de efervescència underground barcelonina: el Grup de Folk encara actiu, els primers concerts de Màquina! a la sala la Cova del Drac, i la liberalització parcial del règim comença a permetre concerts de rock amb controls. Edigsa, segell de la Nova Cançó, es prepara per publicar el primer LP de rock elèctric en català.",
    cita: {
      text: "Màquina! és el pont essencial entre la cultura yeyé de la primera Barcelona rock i l'avantguarda del setanta.",
      autor: "Font primera del moviment",
      font: "Documentació interna del projecte",
    },
    escoltar: {
      spotify: "https://open.spotify.com/search/maquina%20why%201970",
      youtube: "https://www.youtube.com/results?search_query=maquina+why+1970",
    },
  },
  {
    id: "dioptria-pau-riba",
    titol: "Dioptria",
    artista: "Pau Riba",
    any: 1971,
    segell: "Edigsa",
    color: "#92400e",
    arquetip: "cantautor-mascle",
    simbol: "◎",
    fotoArtista: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/33630578a3b8.jpg",
    dades: [
      "Disc: Dioptria (1971) — Edigsa",
      "Cantautor: Pau Riba i Cruells (1948–2022)",
      "Nét dels poetes Carles Riba i Clementina Arderiu",
      "Considerat el disc més radical de l'avantguarda catalana del segle XX",
    ],
    anecdota:
      "Pau Riba escrigué Dioptria com una mena de suite psicodèlica en sis moviments, amb la col·laboració a la guitarra de Toti Soler i la producció de Joan Barthez. La censura franquista obligà a retallar-ne alguns fragments. La portada — un primer pla dels ulls de Riba — es convertí en icona generacional: era, literalment, una «diòptria» que mirava el món sencer.",
    contextHistoric:
      "El 1971 és l'any en què la generació de Pau Riba (nascuts 1948-1950) comença a publicar discs propis. Dioptria comparteix any amb Led Zeppelin IV i Sticky Fingers dels Stones: Riba sabia exactament amb quins referents internacionals dialogava.",
    cita: {
      text: "Pau Riba ocupà un lloc gairebé mític: alhora músic, compositor, performance, intel·lectual i provocador.",
      autor: "Documentació del projecte",
      font: "Síntesi biogràfica",
    },
    escoltar: {
      spotify: "https://open.spotify.com/search/pau%20riba%20dioptria",
      youtube: "https://www.youtube.com/results?search_query=pau+riba+dioptria",
    },
  },
  {
    id: "jarka-sabates",
    titol: "Jarka",
    artista: "Jordi Sabatés",
    any: 1971,
    segell: "Edigsa",
    color: "#7c2d12",
    arquetip: "pianista",
    simbol: "♪",
    fotoArtista: "/laieta/mosaic-cover-jarka-sabates.jpg",
    dades: [
      "Disc: Jarka (1971) — Edigsa",
      "Formació: Jordi Sabatés (piano) + grup",
      "Primer disc propi de Sabatés, precursor de l'ona laietana",
      "Sabatés col·laborà amb Picnic, Om, Maria del Mar Bonet i Ovidi Montllor",
    ],
    anecdota:
      "Jordi Sabatés és, potser, el músic més respectat tècnicament del cercle laietà: pianista de formació clàssica, va passar pel jazz i pel folk sense complexos. Jarka és el seu primer disc com a líder, i demostra la seva capacitat de combinar composicions líriques amb estructures de suite progresiva. La col·laboració posterior amb Tete Montoliu (Vampyria, 1974) en faria un dels pares del jazz modern català.",
    contextHistoric:
      "El 1971 és el any en què el jazz-rock català comença a definir-se: Sabatés publica Jarka, Màquina! té un any de vida, i el Grup de Folk encara programa happenings al Parc de la Ciutadella. La sala Zeleste encara no existeix — obrirà el 1973.",
    escoltar: {
      youtube: "https://www.youtube.com/results?search_query=jordi+sabates+jarka",
    },
  },
  {
    id: "chichonera-ia-batiste",
    titol: "Chichonera's Cat",
    artista: "Ia Batiste",
    any: 1975,
    segell: "Oliba / Edigsa",
    color: "#b45309",
    arquetip: "formacio-mescla",
    simbol: "✲",
    fotoArtista: "/laieta/mosaic-cover-chichonera-ia-batiste.jpg",
    dades: [
      "Disc: Chichonera's Cat (1975) — Oliba / Edigsa",
      "Formació: Ia Batiste (Jordi Batiste «Tapi», ex-Màquina!) + grup",
      "Segell: Oliba (subsegell d'Edigsa per a la línia Zeleste)",
      "Projecte en solitari de Jordi Batiste, veu i baix fundador de Màquina!",
    ],
    anecdota:
      "Chichonera's Cat és el primer projecte en solitari de Jordi Batiste «Tapi», veu i baix fundador de Màquina! (1970). Després de la dissolució de Màquina!, Batiste continua la recerca personal iniciada amb Why? (1970) — ara ja sense Enric Herrera — i publica aquest disc amb el segell Oliba (línia Zeleste-Edigsa dedicada a fusion i jazz-rock). El títol — Chichonera's Cat — és una imatgeria surrealista típica del moment, amb reminiscències del Sgt. Pepper's i del freak folk americà, que encaixa amb la línia art-pop de la sala.",
    contextHistoric:
      "El 1975 és l'any del primer Canet Rock (juliol) i de la mort de Franco (novembre). La Zeleste porta dos anys oberta i ha esdevingut epicentre estable d'un moviment que ja té programa diari i segell propi. Chichonera's Cat és hereu d'aquesta maduració: demostra que els músics de la primera fornada (Màquina! 1968-72) no havien desaparegut, sinó que evolucionaven cap a projectes individuals dins el mateix ecosistema.",
    escoltar: {
      youtube: "https://www.youtube.com/results?search_query=ia+batiste+chichonera+cat",
    },
  },
  {
    id: "el-gat-blanc-toti",
    titol: "El Gat Blanc",
    artista: "Toti Soler",
    any: 1973,
    segell: "Edigsa",
    color: "#a16207",
    arquetip: "guitarrista",
    simbol: "✶",
    fotoArtista: "/laieta/mosaic-cover-el-gat-blanc-toti.jpg",
    dades: [
      "Disc: El Gat Blanc (1973) — Edigsa",
      "Guitarrista: Antoni Soler i Picó (Toti Soler)",
      "Inclou «Sardana flamenca» — peça fundacional de la fusió laietana",
      "Membre d'Om amb Jordi Sabatés, col·laborador a Dioptria",
      "Portada: il·lustració expressionista d'una silueta blanca estilitzada (com un gat) sobre turons vermells i taronges, cel blau intens",
    ],
    anecdota:
      "La portada — una il·lustració pictòrica expressionista amb una silueta blanca estilitzada sobre turons vermells i cel blau intens — anticipa el programa del disc: pintar amb sons. «Sardana flamenca», peça central del disc, és potser l'exemple més pur de fusió sense prejudicis del moviment: una sardana tradicional catalana interpretada amb guitarra flamenca, amb harmonia jazzística i estructura de suite. La peça es convertí en referència obligada per a totes les generacions posteriors de guitarristes catalans. Toti Soler hi demostra que la fusió no havia de ser còpia nord-americana: podia ser invenció autòctona.",
    contextHistoric:
      "El 23 de maig de 1973 — dos mesos després de la publicació d'El Gat Blanc — s'inaugura la sala Zeleste al carrer de la Plateria (avui Argenteria). És el moment exacte en què el moviment laietana deixa de ser una efervescència i es converteix en ecosistema.",
    escoltar: {
      youtube: "https://www.youtube.com/results?search_query=toti+soler+sardana+flamenca",
    },
  },
  {
    id: "vampyria-montoliu-sabates",
    titol: "Vampyria",
    artista: "Tete Montoliu + Jordi Sabatés",
    any: 1974,
    segell: "Gemma Estudis",
    color: "#92400e",
    arquetip: "pianista",
    simbol: "𝄞",
    fotoArtista: "/laieta/mosaic-cover-vampyria-montoliu-sabates.jpg",
    dades: [
      "Disc: Vampyria (1974) — Gemma Estudis",
      "Duo: Tete Montoliu (1933–1997) + Jordi Sabatés (1948–2022)",
      "Simbiosi entre jazz universal i avantguarda local",
      "Tete Montoliu: company de gires de Dexter Gordon, Lionel Hampton, Ben Webster",
    ],
    anecdota:
      "Vampyria és el trobada de dos mons: el jazz internacional de Tete Montoliu (que havia actuat al Village Gate de Nova York el 1963) i l'avantguarda local de Jordi Sabatés. La gravació es féu als Gemma Estudis, un dels espais tècnicament més avançats de la Barcelona del moment. Per als músics laietans, Vampyria fou un escut: demostrava que el nivell tècnic local podia competir amb el dels grans.",
    contextHistoric:
      "El 1974 és l'any de la confirmació: Zeleste porta un any obert, Sisa publica Qualsevol nit pot sortir el sol (1975 proper), i la Companyia Elèctrica Dharma es forma al voltant d'aquell any. Vampyria arriba just abans del gran cicle 1975–1978.",
    escoltar: {
      spotify: "https://open.spotify.com/search/tete%20montoliu%20jordi%20sabates%20vampyria",
      youtube: "https://www.youtube.com/results?search_query=tete+montoliu+sabates+vampyria",
    },
  },
  {
    id: "salsa-catalana-mirasol",
    titol: "Salsa catalana",
    artista: "Orquestra Mirasol",
    any: 1974,
    segell: "Edigsa MIRASOL",
    color: "#f59e0b",
    arquetip: "banda-instrumental",
    simbol: "★",
    fotoArtista: "/laieta/mosaic-cover-salsa-catalana-mirasol.jpg",
    dades: [
      "Disc: Salsa catalana (1974) — Edigsa MIRASOL",
      "Formació: Ricard Roda, Víctor Ammann, Xavier Batllés, Miquel Lizandra, Pedrito Díaz",
      "Primer disc realment laietà segons la crítica",
      "Fusió jazz-rock + mediterrani + matisos cubano-brasilers",
      "Portada: fotografia en color dels 5 membres en un passadís amb portes blanques i màscares penjades",
    ],
    anecdota:
      "La portada — una fotografia en color dels 5 membres vestits a la moda setanta en un passadís amb màscares penjades a la paret — ja és ella mateixa un manifest: la formació es presenta com una colla, com un col·lectiu amb cara descoberta, no com a estrelles individuals. Molts consideren «Salsa catalana» el primer disc realment laietà. La combinació dels matisos cubano-brasilers aportats per Pedrito Díaz, amb l'estructura jazz-rock dels vents de Roda i Ammann, i la bateria de Xavier Batllés, va produir un so únicament mediterrani. El nom del grup — Orquestra Mirasol — juga amb el cel mediterrani i amb l'optimisme del primer postfranquisme cultural.",
    contextHistoric:
      "El 1974 és també l'any de la mort del dictador Francisco Franco — que arribaria el novembre de 1975. Salsa catalana es publica en el darrer any de franquisme, i la seva frescor mediterrària sembla anticipar l'optimisme democràtic que encara no s'ha materialitzat.",
    escoltar: {
      spotify: "https://open.spotify.com/search/orquestra%20mirasol%20salsa%20catalana",
      youtube: "https://www.youtube.com/results?search_query=orquestra+mirasol+salsa+catalana",
    },
  },
  {
    id: "maria-del-mar-bonet",
    titol: "Maria del Mar Bonet",
    artista: "Maria del Mar Bonet",
    any: 1971,
    segell: "Edigsa",
    color: "#e11d48",
    arquetip: "cantautora-femella",
    simbol: "❀",
    fotoArtista: "/laieta/mosaic-cover-maria-del-mar-bonet.jpg",
    dades: [
      "Disc: Maria del Mar Bonet (1971) — Edigsa",
      "Cantautora: Maria del Mar Bonet i Mir (n. 1947, Palma)",
      "Àlbum de debut en solitari",
      "Membre dels Setze Jutges des de 1968",
    ],
    anecdota:
      "Maria del Mar Bonet, provinent de la Nova Cançó balear, publica el 1971 el seu àlbum de debut homònim amb Edigsa. És el primer pas d’una trajectòria que, el 1974 amb el disc Maria del Mar i l’acompanyament de l’Orquestra Mirasol, confluiria la cançó mediterrània i l’elèctric experimental. Aquest primer disc, encara proper a la cançó d’autor, ja anuncia la sensibilitat mediterrània que caracteritzarà tota la seva obra posterior.",
    contextHistoric:
      "El 1971 la Nova Cançó encara és el marc de referència. Maria del Mar Bonet, amb 24 anys, publica el seu primer disc en solitari: una aposta personal dins un moviment on les dones cantautores eren minoria. L’àlbum estableix les bases d’una fusió mediterrània que tindria el seu punt culminant al 1974 amb la col·laboració amb la Mirasol.",
    escoltar: {
      spotify: "https://open.spotify.com/search/maria%20del%20mar%20bonet%201974",
      youtube: "https://www.youtube.com/results?search_query=maria+del+mar+bonet+1974",
    },
  },
  {
    id: "qualsevol-nit-sisa",
    titol: "Qualsevol nit pot sortir el sol",
    artista: "Jaume Sisa",
    any: 1975,
    segell: "Edigsa",
    color: "#854d0e",
    arquetip: "cantautor-mascle",
    simbol: "☀",
    fotoArtista: "/laieta/mosaic-cover-qualsevol-nit-sisa.jpg",
    dades: [
      "Disc: Qualsevol nit pot sortir el sol (1975) — Edigsa",
      "Cantautor: Jaume Sisa i Mestre (n. 1948)",
      "Himne de generació: èxit immediat i transversal",
      "Membre fundador del Grup de Folk (1968)",
    ],
    anecdota:
      "«Qualsevol nit pot sortir el sol» es convertí en himne generacional del primer postfranquisme: una crida a l'esperança que connectava amb el moment polític (la mort de Franco era imminent, el novembre de 1975). La cançó va tenir un èxit comercial que cap altre artista laietà repetiria, i va posar Sisa en el radar de la indústria. La carrera posterior de Sisa — amb el cabaret galàctic i l'òpera — confirma la seva ambició creativa.",
    contextHistoric:
      "El 1975 és l'any clau: mort de Franco el 20 de novembre, primer Canet Rock al juliol, eleccions democràtiques que s'anuncien per al juny de 1977. Qualsevol nit pot sortir el sol es publica just abans del canvi de règim, i funció com a banda sonora simbòlica de l'esperança col·lectiva.",
    cita: {
      text: "«Qualsevol nit pot sortir el sol» simbolitza el fenomen —èxit immediat i transversal, himne de generació, un desig de llum enmig de la nit política.",
      autor: "Documentació del projecte",
      font: "Síntesi crítica",
    },
    escoltar: {
      spotify: "https://open.spotify.com/search/sisa%20qualsevol%20nit%20pot%20sortir%20el%20sol",
      youtube: "https://www.youtube.com/results?search_query=sisa+qualsevol+nit+pot+sortir+el+sol",
    },
  },
  {
    id: "barcelona-traction-bt",
    titol: "Barcelona Traction",
    artista: "Barcelona Traction",
    any: 1975,
    segell: "Edigsa",
    color: "#f59e0b",
    arquetip: "duo-art-pop",
    simbol: "∇",
    fotoArtista: "/laieta/mosaic-cover-barcelona-traction.jpg",
    dades: [
      "Disc: Barcelona Traction (1975) — Edigsa",
      "Dúo d'art-pop barroc",
      "Inclou «Els carrusells de la calvície»",
      "Inclòs al recopilatori «Música Laietana. Zeleste» amb «Sudamérica»",
    ],
    anecdota:
      "El nom del grup — Barcelona Traction — és un homenatge a la companyia elèctrica que va il·luminar Barcelona els anys 20-30 del segle XX. «Els carrusells de la calvície», la peça més coneguda del disc, és una cançó folk-fantasmagòrica amb veus superposades que sembla un mite de l'Sgt. Pepper's de la Vall d'Hebron. Obra de culte tardà, redescoberta per la generació dels 90.",
    contextHistoric:
      "El 1975 és un any de gran productivitat: Sisa, Barcelona Traction, Maria del Mar Bonet, Gato Pérez — tots publiquen discs decisius. La mort de Franco al novembre no atura la indústria; al contrari, l'allibera.",
    escoltar: {
      spotify: "https://open.spotify.com/search/barcelona%20traction%20carrusells",
      youtube: "https://www.youtube.com/results?search_query=barcelona+traction+carrusells+calvicie",
    },
  },
  {
    id: "ocells-esqueixada",
    titol: "Ocells",
    artista: "Esqueixada Sniff",
    any: 1979,
    segell: "Edigsa",
    color: "#d97706",
    arquetip: "banda-instrumental",
    simbol: "≈",
    fotoArtista: "/laieta/mosaic-cover-ocells-esqueixada-sniff.jpg",
    dades: [
      "Disc: Ocells (1979) — Edigsa",
      "Formació: Joan Muntalà (guitarra) + formació col·lectiva",
      "Combo instrumentalista de la línia Zeleste-Edigsa",
      "Jazz-rock català de seccions de vent, groove i humor conceptual",
      "Un dels grans referents del so laietà",
    ],
    anecdota:
      "«Ocells» és un dels grans referents del so laietà. La peça, instrumentada amb seccions de vent, groove de jazz-rock i humor conceptual, esdevingué referent per a totes les generacions posteriors de músics catalans de fusió. Joan Muntalà, guitarrista central del grup, hi demostra un nivell d’arranjament que poques formacions europees del moment podien igualar.",
    contextHistoric:
      "El 1979 marca el començament del declivi de l'Ona laietana. Ocells és un dels darrers discs del moviment i, alhora, un dels més madurs: la banda ha après de Som de la tèrbol? (1975) i dels discs precedents, i ofereix aquí el seu millor moment creatiu.",
    escoltar: {
      spotify: "https://open.spotify.com/search/esqueixada%20sniff%20ocells",
      youtube: "https://www.youtube.com/results?search_query=esqueixada+sniff+ocells",
    },
  },
  {
    id: "diumenge-dharma",
    titol: "Diumenge",
    artista: "Companyia Elèctrica Dharma",
    any: 1975,
    segell: "Edigsa",
    color: "#e11d48",
    arquetip: "banda-instrumental",
    simbol: "✷",
    fotoArtista: "/laieta/mosaic-cover-diumenge-dharma.jpg",
    dades: [
      "Disc: Diumenge (1975) — Edigsa",
      "Formació: Fortunato Guerrero, Joan Fortuny, Josep Fortuny, Enric Peidró",
      "Primer disc de la Dharma",
      "Obre la porta al so del grup",
    ],
    anecdota:
      "Diumenge és el debut d'una banda que esdevindria la síntesi perfecte del moviment. El títol — Diumenge, el dia del descans i de la família — juga amb la contradicció entre la tradició catalana i la transgressió rock: els Dharma serien, dos anys més tard, la banda que portaria el rock laietà al Pavelló d'Esports del Real Madrid davant milers d'assistents.",
    contextHistoric:
      "Formada el 1974, la Dharma publica Diumenge el 1975 amb forts vincles a la sala Zeleste. És el començament d'un camí que els portaria a Tramuntana (1977), l'obra mestra del moviment.",
    escoltar: {
      spotify: "https://open.spotify.com/search/companyia%20electrica%20dharma%20diumenge",
      youtube: "https://www.youtube.com/results?search_query=companyia+electrica+dharma+diumenge",
    },
  },
  {
    id: "tutankhamon-iceberg",
    titol: "Tutankhamon",
    artista: "Iceberg",
    any: 1975,
    segell: "Movieplay",
    color: "#d97706",
    arquetip: "banda-instrumental",
    simbol: "◊",
    fotoArtista: "/laieta/mosaic-cover-tutankhamon-iceberg.jpg",
    dades: [
      "Disc: Tutankhamon (1975) — Movieplay",
      "Formació: Max Sunyer (guitarra), Josep Mas «Kitflus» (teclats), Primi Sancho (baix), Jordi Colomer (bateria)",
      "Debut d'Iceberg — quartet canònic del jazz-rock català",
      "Lectura de la Mahavishnu Orchestra i Weather Report",
      "Portada: il·lustració surrealista d'un iceberg gegant emergint de l'oceà, amb una ciutat antiga dins del gel, fons vermell",
    ],
    anecdota:
      "El títol — Tutankhamon — no és casual: Iceberg volia demostrar amb aquest primer disc que el jazz-rock català podia tenir l'ambició simbòlica del prog-rock britànic. La portada, amb un iceberg gegant emergint d'un oceà blau fosc i una ciutat antiga visible dins del gel sobre un cel vermell intens, enclou la mateixa ambició: una imatge fantàstica i psicodèlica que vol competir amb les millors portades europees del moment. Curiosament, el disc es va publicar amb el segell Movieplay (no pas Edigsa, com la majoria dels discs laietans), fet que confirma que la producció del moviment desbordava els límits del segell «de casa». La formació, amb Max Sunyer a la guitarra, és potser la més virtuosística del moviment.",
    contextHistoric:
      "El 1975 és també l'any del primer Canet Rock (juliol), on Iceberg encara no hi actua però la seva presència al circuit Zeleste és constant. La banda representa el vessant més tècnic del moviment. El fet que publiqui a Movieplay (i no a Edigsa) mostra que el rock laietà comença a tenir projecció estatal.",
    escoltar: {
      spotify: "https://open.spotify.com/search/iceberg%20tutankhamon",
      youtube: "https://www.youtube.com/results?search_query=iceberg+tutankhamon",
    },
  },
  {
    id: "coses-nostres-iceberg",
    titol: "Coses Nostres",
    artista: "Iceberg",
    any: 1976,
    segell: "Edigsa",
    color: "#d97706",
    arquetip: "banda-instrumental",
    simbol: "△",
    fotoArtista: "/laieta/mosaic-cover-coses-nostres-iceberg.jpg",
    dades: [
      "Disc: Coses Nostres (1976) — Edigsa",
      "Formació: Max Sunyer, Josep Mas «Kitflus», Primi Sancho, Jordi Colomer (i Xavier Batllés)",
      "Inclou «La flamenca elèctrica» — composició central",
      "Síntesi mediterrània: estructura jazzística + fraseig andalús + distorsió de rock",
    ],
    anecdota:
      "«La flamenca elèctrica» és potser la peça més representativa del moviment: una composició que exemplifica la síntesi mediterrània del grup — estructura jazzística, fraseig andalús i distorsió de rock, tot en una sola peça. Iceberg representa aquí el sostre tècnic del moviment i, alhora, el punt on l'Ona comença a parlar un idioma incomprensible per al públic del carrer.",
    contextHistoric:
      "El 1976 és un any de gran convulsió política: l'assumpte de Montejurra al maig, la legalització del PCE al Pasqua, i les primeres grans mobilitzacions democràtiques. Coses Nostres es publica en aquest context, i la seva complexitat musical sembla reflejar la complexitat política del moment.",
    escoltar: {
      spotify: "https://open.spotify.com/search/iceberg%20coses%20nostres%20la%20flamenca%20electrica",
      youtube: "https://www.youtube.com/results?search_query=iceberg+la+flamenca+electrica",
    },
  },
  {
    id: "fred-pedralbes-secta",
    titol: "Fred Pedralbes",
    artista: "Secta Sònica",
    any: 1976,
    segell: "Edigsa",
    color: "#b45309",
    arquetip: "formacio-mescla",
    simbol: "❄",
    fotoArtista: "/laieta/mosaic-cover-fred-pedralbes-secta-sonica.jpg",
    dades: [
      "Disc: Fred Pedralbes (1976) — Edigsa",
      "Formació: Gato Pérez, Rafael Zaragoza, Jordi Bonell, Víctor Cortina",
      "Primer LP de Secta Sònica",
      "Fundada per dos integrants de Slobo (Gato Pérez i Rafael Zaragoza)",
    ],
    anecdota:
      "El títol — Fred Pedralbes — juga amb el barri burgès de Pedralbes, com si la banda hi portés el fred (la contracultura) al cor de la Barcelona benestant. El disc és un dels vèrtexs del laietanisme: projecte curt però amb logres genuïns. Gato Pérez hi ja defineix la seva estètica que, dos anys més tard, evolucionaria cap a la rumba amb Carabruta.",
    contextHistoric:
      "El 1976 Secta Sònica publica el seu primer LP alhora que el segon d'Iceberg (Coses Nostres). És l'any del màxim rendiment creatiu de la ona. La banda es dissoldria el 1977 amb un segon LP, Astroferia.",
    escoltar: {
      youtube: "https://www.youtube.com/results?search_query=secta+sonica+fred+pedralbes",
    },
  },
  {
    id: "tramuntana-dharma",
    titol: "Tramuntana",
    artista: "Companyia Elèctrica Dharma",
    any: 1977,
    segell: "Edigsa",
    color: "#e11d48",
    arquetip: "banda-instrumental",
    simbol: "⛰",
    fotoArtista: "/laieta/mosaic-cover-tramuntana-dharma.jpg",
    dades: [
      "Disc: Tramuntana (1977) — Edigsa",
      "Formació: Fortunato Guerrero, Joan Fortuny, Josep Fortuny, Enric Peidró",
      "Obra mestra i punt culminant del moviment",
      "Concert al Pavelló d'Esports del Real Madrid davant milers d'assistents",
    ],
    anecdota:
      "Tramuntana és, per a molts, el gran disc del moviment: la síntesi perfecte de folk català (sonoritats de cobla i oboes), rock progresiu, jazz-rock i textures mediterrànies. El concert al Pavelló d'Esports del Real Madrid, davant milers d'assistents i amb operatiu de seguretat, demostrà que la Dharma era un fenomen de masses malgrat l'alta complexitat artística del seu discurs. Vendé milers de còpies i obrí la banda al circuit massiu.",
    contextHistoric:
      "El 1977 és l'any de les primeres eleccions democràtiques (15 de juny). Tramuntana es publica en aquest context de gran esperança política, i la seva mescla de tradició i modernitat sembla simbolitzar el moment: una identitat catalana que es reafirma i, alhora, s'obre al món.",
    cita: {
      text: "Tramuntana (1977) n'és l'obra mestra i un punt culminant del moviment: va vendre milers de còpies i obrí la banda al circuit massiu.",
      autor: "Documentació del projecte",
      font: "Síntesi crítica",
    },
    escoltar: {
      spotify: "https://open.spotify.com/search/companyia%20electrica%20dharma%20tramuntana",
      youtube: "https://www.youtube.com/results?search_query=companyia+electrica+dharma+tramuntana",
    },
  },
  {
    id: "la-boqueria-mirasol",
    titol: "La Boqueria",
    artista: "Orquestra Mirasol (Mirasol Colores)",
    any: 1977,
    segell: "Edigsa",
    color: "#e11d48",
    arquetip: "banda-instrumental",
    simbol: "◈",
    fotoArtista: "/laieta/mosaic-cover-la-boqueria-mirasol.jpg",
    dades: [
      "Disc: La Boqueria (1977) — Edigsa",
      "Com a Mirasol Colores",
      "Tercer disc de la formació",
      "Continuïtat del so mediterrani iniciat amb Salsa catalana",
    ],
    anecdota:
      "Amb La Boqueria, la Mirasol es transforma en Mirasol Colores i confirma la seva línia mediterrània. El títol — La Boqueria — és un homenatge al mercat més emblemàtic de Barcelona, símbol de la fusió de cultures i productes que caracteritza el so del grup. La carreira de la Mirasol seria, malauradament, curta: el 1977 és també l'any de la seva dissolució.",
    contextHistoric:
      "El 1977 és també l'any del segon Canet Rock, on la Mirasol hi actuà. La seva dissolució al final de l'any marca el començament de l'agonia del moviment, que es perllongaria fins al 1980.",
    escoltar: {
      spotify: "https://open.spotify.com/search/orquestra%20mirasol%20la%20boqueria",
      youtube: "https://www.youtube.com/results?search_query=orquestra+mirasol+la+boqueria",
    },
  },
  {
    id: "musica-urbana-mu",
    titol: "Música Urbana",
    artista: "Música Urbana",
    any: 1977,
    segell: "Edigsa",
    color: "#854d0e",
    arquetip: "formacio-mescla",
    simbol: "▦",
    fotoArtista: "/laieta/mosaic-cover-musica-urbana.jpg",
    dades: [
      "Disc: Música Urbana (1977) — Edigsa",
      "Formació: Jordi Bonell (guitarra), Joan Albert Amargós (teclats), i altres",
      "Primer disc de Música Urbana",
      "Barcelona sona tan sofisticada com Londres",
    ],
    anecdota:
      "Música Urbana demostra que Barcelona sona, el 1977, tan sofisticada com Londres. La formació — amb Jordi Bonell a la guitarra i Joan Albert Amargós als teclats — té un nivell tècnic comparable al de qualsevol banda europea del moment. El seu segon disc, Iberia (1978), exemplificaria la via de la «muntanya sonora»: compassos de folk reinterpretats amb orquestració elèctrica.",
    contextHistoric:
      "El 1977 és el pic de la ona, però també el començament de la seva fi. Música Urbana neix com a projecte tardà — alguns dels seus membres provenen de Secta Sònica i Fusioon — i demostra que la ona encara té capacitat de renovació.",
    escoltar: {
      spotify: "https://open.spotify.com/search/musica%20urbana%201977",
      youtube: "https://www.youtube.com/results?search_query=musica+urbana+barcelona",
    },
  },
  {
    id: "carabruta-gato",
    titol: "Carabruta",
    artista: "Gato Pérez",
    any: 1978,
    segell: "Belter",
    color: "#9a3412",
    arquetip: "rumba",
    simbol: "✺",
    fotoArtista: "/laieta/mosaic-cover-carabruta-gato.jpg",
    dades: [
      "Disc: Carabruta (1978) — Belter",
      "Cantautor: Xavier Patricio Pérez «Gato» (1951–1990)",
      "Gir cap a la rumba urbana amb «Rumba dels 60's»",
      "Pont entre rock progresiu, rumba catalana i poesia urbana",
    ],
    anecdota:
      "Carabruta marca el gir de Gato Pérez cap a la rumba. «Rumba dels 60's» es convertí en cançó de culte, i Gato passà de ser músic de Secta Sònica i Slobo a convertir-se en figura definidora de la rumba urbana barcelonina. Se li atribueix l'encuny o la legitimació del concepte «Ona Laietana». La seva mort el 1990, amb només 39 anys, va tallar una de les trajectòries més originals del moviment.",
    contextHistoric:
      "El 1978 és l'any de la Constitució espanyola (6 de desembre) i de l'inici de la crisi econòmica. Carabruta es publica en aquest context: el moviment comença a dissoldre's però encara pot generar projectes tan originals com aquest.",
    escoltar: {
      spotify: "https://open.spotify.com/search/gato%20perez%20carabruta%20rumba%20dels%2060",
      youtube: "https://www.youtube.com/results?search_query=gato+perez+rumba+60s",
    },
  },
  {
    id: "iberia-musica-urbana",
    titol: "Iberia",
    artista: "Música Urbana",
    any: 1978,
    segell: "Edigsa",
    color: "#854d0e",
    arquetip: "formacio-mescla",
    simbol: "♫",
    fotoArtista: "/laieta/mosaic-cover-iberia-musica-urbana.jpg",
    dades: [
      "Disc: Iberia (1978) — Edigsa",
      "Formació: Jordi Bonell, Joan Albert Amargós, i altres",
      "Segon i darrer disc de Música Urbana",
      "Exemplifica la «muntanya sonora»: folk + orquestració elèctrica",
    ],
    anecdota:
      "Iberia és potser el disc més ambiciós conceptualment del moviment: una «muntanya sonora» que reinterpretar compassos de folk amb orquestració elèctrica. La crítica el va rebre com una obra madura, però les vendes no van acompanyar la qualitat. La banda es dissoldria poc després, i alguns dels seus membres — especialment Joan Albert Amargós — esdevindrien figures cabdals dels arranjaments de la pop catalana dels 80 i 90.",
    contextHistoric:
      "El 1978 és l'any de la Constitució i de l'inici de l'agonia del moviment. Iberia es publica al bell mig d'aquest declivi, com a darrera gran obra de la ona. L'any següent, 1979, Esqueixada Sniff publicaria «Ocells» com a comiat, i el 1980 tindria lloc el darrer Canet Rock clàssic.",
    escoltar: {
      spotify: "https://open.spotify.com/search/musica%20urbana%20iberia",
      youtube: "https://www.youtube.com/results?search_query=musica+urbana+iberia",
    },
  },
];

export const mosaicStats = {
  total: mosaicDiscs.length,
  perDecade: {
    1970: mosaicDiscs.filter((d) => d.any === 1970).length,
    1971: mosaicDiscs.filter((d) => d.any === 1971).length,
    1972: mosaicDiscs.filter((d) => d.any === 1972).length,
    1973: mosaicDiscs.filter((d) => d.any === 1973).length,
    1974: mosaicDiscs.filter((d) => d.any === 1974).length,
    1975: mosaicDiscs.filter((d) => d.any === 1975).length,
    1976: mosaicDiscs.filter((d) => d.any === 1976).length,
    1977: mosaicDiscs.filter((d) => d.any === 1977).length,
    1978: mosaicDiscs.filter((d) => d.any === 1978).length,
  },
};
