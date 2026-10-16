// Contingut reconstruït a partir de fonts públiques autoritzades sobre l'Ona laietana
// i enriquit amb els annexes aportats (cronologia, obres clau, fonts documentals).
// Fonts: Viquipèdia (ca.wikipedia.org/wiki/Música_laietana), Cualia.es (Gernot Dudda, 2019),
// El Punt Avui, Rockdelux (2024), barcelona.cat, Spotify/Tidal (recopilatori Picap 2009),
// i els documents "El Rock Laietano: La Revolución Contracultural de Barcelona 1970–1980"
// i "Raíces de la Resistencia" (Annex 3).
// NOTA: el PDF original "rock_laieta_revisat.pdf" no es va trobar a /upload; vegeu el banner d'avís.

export type CategoriaArtista =
  | "Fusió"
  | "Rock progresiu"
  | "Cantautor"
  | "Rumba"
  | "Jazz"
  | "Postlaietà"
  | "Instrumental";

export interface Album {
  titol: string;
  any: number;
  segell?: string;
  nota?: string;
}

export interface Artista {
  id: string;
  nom: string;
  anyInici?: string;
  anyFi?: string;
  categoria: CategoriaArtista;
  funcio: string;
  integrants: string[];
  bio: string;
  destacat?: boolean;
  albums: Album[];
  color: string; // accent hex
}

export interface Esdeveniment {
  any: string;
  titol: string;
  descripcio: string;
  icona: "antecedent" | "fundacio" | "disc" | "canvi" | "declivi" | "llegat";
}

export interface FusioIngredient {
  id: string;
  nom: string;
  descripcio: string;
  referents: string[];
  grups: string[];
  temes: { titol: string; artista: string }[];
  color: string;
}

export interface Tratxa {
  pos: number;
  titol: string;
  artista: string;
  durada?: string;
}

export interface ObraClau {
  id: string;
  titol: string;
  artista: string;
  any: string;
  anySort: number;
  rellevancia: string;
  color: string;
}

export interface Citacio {
  text: string;
  autor: string;
  font: string;
}

export interface FontDocumental {
  titol: string;
  autor?: string;
  detall?: string;
  tipus: string;
  url?: string;
}

export interface FontEnLinia {
  nom: string;
  url: string;
  descripcio: string;
}

export const moviment = {
  titol: "Rock Laietà",
  subtitol: "Ona laietana · 1970 – 1980",
  lema: "El revulsiu que va canviar la música catalana",
  descripcio:
    "L'Ona laietana —també dita música laietana o, popularment, Rock Laietà— fou un moviment musical sorgit a la primera meitat dels anys 1970 a Barcelona. No fou un estil musical concret, sinó un moviment generacional: una fusió de jazz-rock progresiu, tradició catalana, flamenc i matisos cubano-brasilers que actuà com a revulsiu en la música del país, esdevingué el precedent directe del Rock Català dels anys 90 i fou, en sentit ple, una revolució contracultural barcelonina.",
  periode: "1970 – 1980 (nucli) · 1969 – 1997 (cicle ampli)",
  epicentre: "Sala Zeleste — Born, Barcelona",
  identitat:
    "El mot «laietà» evoca els laietans, poble ibèric preromà que habitava la regió de Barcelona: una manera de reivindicar una identitat catalana i mediterrània des de la modernitat. Alhora, el terme també remet a la proximitat de la Via Laietana amb la sala Zeleste, epicentre del moviment musical laietà a Barcelona.",
  identitatHero:
    "El mot «laietà» evoca els laietans, poble ibèric preromà que habitava la regió de Barcelona: una manera de reivindicar una identitat catalana i mediterrània des de la modernitat. Alhora, el terme també remet a la proximitat de la Via Laietana amb Zeleste, la sala barcelonina que esdevingué l'epicentre d'aquest moviment musical innovador.",
} as const;

export const manifest: Citacio[] = [
  {
    text:
      "La ona laietana no fou un estil musical concret, sinó un moviment generacional en el qual, durant la segona meitat dels anys setanta, Barcelona es va obrir a la fusió.",
    autor: "Rockdelux",
    font: "50 anys de l'ona laietana (2024)",
  },
  {
    text:
      "La música laietana actuà com a revulsiu en el cas català i obrí el camí a una escena pròpia.",
    autor: "Viquipèdia",
    font: "Música laietana",
  },
  {
    text:
      "A Zeleste es practicà la millor fusió d'Espanya, amb diferència. Succeí en una època en què no estàvem gaire acostumats a tenir músics virtuosos, i sobretot, professionals.",
    autor: "Gernot Dudda",
    font: "Cualia.es (2019)",
  },
  {
    text:
      "El precedent del Rock Català és l'Ona Laietana dels anys 70, promoguda per la sala Zeleste i emparentada amb la Nova Cançó.",
    autor: "Indicat",
    font: "Coneix els orígens del rock català",
  },
];

export type ContextIcon =
  | "landmark"
  | "music"
  | "users"
  | "globe"
  | "book"
  | "theater"
  | "calendar"
  | "disc"
  | "compass";

export interface ContextEnllacIntern {
  id: string;
  etiqueta: string;
}

export interface ContextEnllacExtern {
  url: string;
  etiqueta: string;
  font?: string;
}

export interface ContextBloc {
  id: string;
  titol: string;
  kicker: string;
  icona: ContextIcon;
  paragrafs: string[];
  enllacosInterns?: ContextEnllacIntern[];
  enllacosExterns?: ContextEnllacExtern[];
  destacat?: boolean;
}

export const contextHistoric: {
  titol: string;
  subtitol: string;
  intro: string;
  blocs: ContextBloc[];
  cos: string[];
} = {
  titol: "Tardofranquisme, transició i contracultura",
  subtitol: "Els anys decisius que van fer possible l'Ona Laietana",
  intro:
    "L'Ona laietana irromp en un moment històric decisiu, sobretot a nivell polític, a l'Espanya de començaments dels anys setanta: els darrers anys del franquisme i l'inici de la transició. Creix sobre el substrat de la Nova Cançó i del Grup de Folk, i dialoga amb fenòmens coetanis com el rock andaluz. És, en sentit ple, una revolució contracultural barcelonina. Expandiu els blocs següents per aprofundir en cadascun dels vessants del context.",
  blocs: [
    {
      id: "marc-politic",
      titol: "El marc polític: tardofranquisme i transició",
      kicker: "Política",
      icona: "landmark",
      destacat: true,
      paragrafs: [
        "L'Ona laietana neix i mor, cronològicament, dins del cicle 1969–1985 — és a dir, del darrer franquisme al primer socialisme en el poder. Aquesta coincidència no és anecdòtica: el moviment és fill directe de la contradicció entre una dictadura en decadència i una societat civil que, amb prudència però amb urgència, començava a ocupar espais de llibertat. La mort de Franco el 20 de novembre de 1975 arriba al bell mig del cicle, i les cinc edicions del Canet Rock (1975–1980) coincideixen, gairebé dia per dia, amb els cinc primers anys de la transició política.",
        "El marc legal continuava sent restrictiu. La Llei d'Associacions de 1964 obligava els grups musicals a constituir-se com a societats civils amb permís governatiu; la Llei de Premsa i Imprenta de 1966 (coneguda com a «Llei Fraga») havia abolit la censura prèvia sobre impremta però mantenia la censura sobre discos, espectacles i ràdio. Cada disc d'Edigsa havia de passar per la supervisió de la Delegació Nacional de Premsa; cada concert requerit autorització del Governador Civil. El català, prohibit en actes públics des de 1939, era tolerat en discs i recitals amb controls arbitraris.",
        "La paradoxal tolerància cap a la Nova Cançó és clau per entendre l'Ona: la dictadura va permetre — i de vegades va fomentar discretament — una cultura catalana «cívica» que considerava inofensiva, mentre reprimia la política explícita. Quan Sisa canta «Qualsevol nit pot sortir el sol» (1975) o Pau Riba edita Dioptria (1971), treballen dins d'aquest marge ambigu. Els anys 1975–1978 (de la mort del Caudillo a la Constitució) veuen néixer el pic creatiu del moviment: Tramuntana de Dharma (1977), Coses Nostres d'Iceberg (1976), Fred Pedralbes de Secta Sònica (1976).",
        "Els primers anys de democràcia van portar un optimisme cultural efímer: el català als instituts, la Generalitat restaurada (1977), l'Estatut de Sau (1979). Però també van portar la crisi econòmica de 1978-1982, l'agonia industrial barcelonina i l'arribada de la mogida madrilenya, que desplaçaria el centre cultural del país. Quan l'Ona mor — cap al 1980-1982 — mor amb ella una Barcelona encara no-olímpica, encara metàl·lic-industrial, encara republicana de fet.",
      ],
      enllacosInterns: [
        { id: "timeline", etiqueta: "Cronologia del moviment" },
        { id: "fonts", etiqueta: "Fonts documentals" },
      ],
      enllacosExterns: [
        {
          url: "https://ca.wikipedia.org/wiki/Transici%C3%B3_espanyola",
          etiqueta: "Transició espanyola",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Franquisme",
          etiqueta: "Franquisme (1939–1975)",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Llei_de_Premsa_i_Imprenta_de_1966",
          etiqueta: "Llei Fraga de Premsa (1966)",
          font: "Viquipèdia",
        },
      ],
    },
    {
      id: "nova-canco",
      titol: "El substrat: la Nova Cançó i el seu llegat",
      kicker: "Precedent",
      icona: "music",
      paragrafs: [
        "Sense la Nova Cançó, no hi ha Ona Laietana. La Nova Cançó neix al voltant de 1959-1961 amb els Setze Jutges (Mompel, Raimon, i els altres) i la constitució d'Edigsa el 29 de maig de 1961. És la primera vegada des del 1939 que el català entra a la indústria discogràfica — i la primera vegada que una generació de joves canta en català a cases i ateneus, abans que als escenaris públics.",
        "Per als músics que onze anys després formarien la ona laietana, la Nova Cançó és tant una impossibilitat com una herència. Una impossibilitat: el model de cantautor amb guitarra acústica els queda estret. Una herència: el català com a llengua de cançó moderna, Edigsa com a segell disponible, el circuit d'ateneus i festivals com a teixit. Sense «L'estaca» de Llach (1968) o «Al vent» de Raimon, sense Serrat i la seva polèmica abstenció a Eurovisió (1968), el públic que el 1975 ompliria Canet Rock no hauria existit.",
        "Maria del Mar Bonet és el cas paradigmàtic de trànsit entre els dos universos: provinent de la Nova Cançó balear, electritza el seu disc Maria del Mar (1974) amb l'acompanyament de l'Orquestra Mirasol i converteix la frontera en pont. Lluís Llach i Raimon, encara que no pertanyin estrictament a la ona, comparteixen públic, segell i, sobretot, un cert horitzó d'esperança política que el 1975 ja comença a fer-se realitat.",
      ],
      enllacosInterns: [
        { id: "edigsa", etiqueta: "Edigsa — el segell de la Nova Cançó" },
        { id: "artistes", etiqueta: "Grups i bandes laietanes" },
        { id: "grafo-relacions", etiqueta: "Veure relacions entre artistes" },
      ],
      enllacosExterns: [
        {
          url: "https://ca.wikipedia.org/wiki/Nova_Can%C3%A7%C3%B3",
          etiqueta: "Nova Cançó",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Els_Setze_Jutges",
          etiqueta: "Els Setze Jutges",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Llu%C3%ADs_Llach",
          etiqueta: "Lluís Llach",
          font: "Viquipèdia",
        },
      ],
    },
    {
      id: "grup-de-folk",
      titol: "El Grup de Folk: la tribu primigènia",
      kicker: "Precedent",
      icona: "users",
      paragrafs: [
        "El Grup de Folk (1968-1972) és el vertigen psiquiàtric-catalanista de l'Ona: una tribu d'adolescents i vintians — Sisa, Pau Riba, Ovidi Montllor, Oriol Tramvia, Carles Flavià, Josep Maria Carandina, Anna Maria Camps — que van voler fer freak folk en català. Els seus models eren Dylan, Donovan i el freak folk californià dels Love i els Jefferson Airplane; els seus escenaris, els happenings multitudinaris al Parc de la Ciutadella; la seva estètica, el catalanisme alternatiu que la Nova Cançó no havia gosat encara.",
        "La importància del Grup de Folk no rau en la seva discografia (escassa i sovint inèdita) sinó en haver normalitzat, per primera vegada a l'Espanya franquista, el català com a vehicle de contracultura musical jove. Aquí on Sisa i Pau Riba aprenen l'ofici; on neix el cabaret galàctic i la provocació poètica que més endavant caracteritzarà la ona. Sense el Grup de Folk no hi hauria hagut públic ni llenguatge per a Zeleste cinc anys més tard.",
        "La tribu es dissol cap al 1972-1973, just quan Zeleste obre les portes. La continuïtat és biogràfica: Sisa hi actua el primer any; Pau Riba hi edita els seus discs posteriors; Ovidi Montllor hi programa els seus recitals teatralitzats. La tribu primigènia es converteix en el nucli humà del nou ecosistema.",
      ],
      enllacosInterns: [
        { id: "parc-ciutadella", etiqueta: "Parc de la Ciutadella — lloc dels happenings" },
        { id: "persones", etiqueta: "Persones clau del moviment" },
        { id: "grafo-relacions", etiqueta: "Veure connexions de Sisa, Riba, Ovidi" },
      ],
      enllacosExterns: [
        {
          url: "https://ca.wikipedia.org/wiki/Grup_de_Folk",
          etiqueta: "Grup de Folk",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Jaume_Sisa",
          etiqueta: "Jaume Sisa",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Pau_Riba",
          etiqueta: "Pau Riba",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Ovidi_Montllor",
          etiqueta: "Ovidi Montllor",
          font: "Viquipèdia",
        },
      ],
    },
    {
      id: "rock-andaluz",
      titol: "El rock andaluz i les escenes coetànies",
      kicker: "Coetània",
      icona: "globe",
      paragrafs: [
        "L'Ona laietana no és l'únic intent de fusió rock + tradició autòctona a l'Espanya dels anys setanta. El rock andaluz — Triana (1974), Smash (1969-1979), Tabletom, Guadalquivir, Góngora, Veracruz — és el seu germà sudeny: fusió de rock progresiu amb flamenc i lletres en castellà amb voluntat poètica. El fenomen paral·lel més conegut internacionalment gràcies a la discografia posterior de Paco de Lucía i, molt més tard, de bands com Triana.",
        "La diferència clau entre els dos moviments rau en l'ecosistema. La ona laietana té un epicentre (Zeleste), un segell (Edigsa) i una xarxa social (la gauche divine) que el rock andaluz no té. Andalusia és geogràficament dispersa; el seu rock es queda sense sala i sense segell propis, i per això acaba publicant a segells majors (Movieplay, CBS) amb criteris més comercials. La ona, en canvi, manté una coherència estètica i industrial que el rock andaluz no aconsegueix.",
        "Altres escenes coetànies: el rock basc d'Errobi (1973-1979) i el seu llegendari Bolibar; l'escena madrilenya amb Las Grecas, Los Ñuflos i, més tard, la mogida; l'escena valenciana amb Al Tall, que connecta Nova Cançó i experimentació. Cap d'aquestes escenes no tindrà, però, la densitat de relacions ni la coherència mediterrània que definirà la ona laietana.",
      ],
      enllacosInterns: [
        { id: "cartografia", etiqueta: "Cartografia exhaustiva del moviment" },
        { id: "fusio", etiqueta: "De què està fet el so laietà?" },
      ],
      enllacosExterns: [
        {
          url: "https://ca.wikipedia.org/wiki/Rock_andaluz",
          etiqueta: "Rock andaluz",
          font: "Viquipèdia",
        },
        {
          url: "https://es.wikipedia.org/wiki/Triana_(grupo_musical)",
          etiqueta: "Triana (grup)",
          font: "Wikipedia",
        },
        {
          url: "https://es.wikipedia.org/wiki/Smash_(banda)",
          etiqueta: "Smash (banda)",
          font: "Wikipedia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Errobi",
          etiqueta: "Errobi (rock basc)",
          font: "Viquipèdia",
        },
      ],
    },
    {
      id: "gauche-divine",
      titol: "La gauche divine barcelonina",
      kicker: "Cultura",
      icona: "theater",
      paragrafs: [
        "La gauche divine no és un moviment musical. És la xarxa social que va fer possible l'Ona Laietana. Neix al voltant de la discoteca Bocaccio (carrer Muntaner 505, fundada per Oriol Regàs el 13 de febrer de 1967) i s'estén per la Barcelona burgesa-progressista dels anys seixanta-setanta: arquitectes (Oriol Bohigas, Òscar Tusquets, Lluís Clotet), actors (Teresa Cunillé, Josep Maria Flotats), editors (Jordi Balleste, Carlos Trías), editors discogràfics (Rafael Moll), promotors (Oriol Regàs, Víctor Jou), intel·lectuals (Josep Maria Carandina, Joan Barril), músics (Salvador Boada, Sisa, Pau Riba).",
        "L'aportació de la gauche divine a la ona és estructural: els seus membres comparteixen taules, projectes, consum cultural i, sobretot, capital social. Víctor Jou — arquitecte de formació, client habitual de Bocaccio — troba en aquesta xarxa el finançament i el públic inicial per a Zeleste. Rafael Moll — director executiu d'Edigsa — hi troba el criteri tècnic i empresarial. Sense la gauche divine, la ona hauria estat un fenomen marginal i efímer; amb ella, esdevé un ecosistema amb programa estable, segell propi i circuit de sales.",
        "La gauche divine té també una dimensió estètica: la seva Barcelona — la del Gòtic, el Born, Sant Gervasi — és la del disseny gràfic modernista (Massana, Claret), el cafè-teatre (Goya, Saló Torrent de les Flors), la premsa marginal (Els Marges, Destino, Tele/eXprés). És la Barcelona que Joan Barril o Josep Maria Espinàs retratarien en crònica: discreta, sofisticada, paradoxalment lliure sota la dictadura.",
      ],
      enllacosInterns: [
        { id: "bocaccio", etiqueta: "Discoteca Bocaccio (Ruta musical)" },
        { id: "zeleste", etiqueta: "Sala Zeleste" },
        { id: "persones", etiqueta: "Víctor Jou, Oriol Regàs, Rafael Moll" },
      ],
      enllacosExterns: [
        {
          url: "https://es.wikipedia.org/wiki/Bocaccio_(discoteca)",
          etiqueta: "Discoteca Bocaccio",
          font: "Wikipedia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Gauche_divine",
          etiqueta: "Gauche divine",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Josep_Maria_Espin%C3%A0s",
          etiqueta: "Josep Maria Espinàs",
          font: "Viquipèdia",
        },
      ],
    },
    {
      id: "referents-internacionals",
      titol: "Els referents internacionals del jazz-rock",
      kicker: "Internacional",
      icona: "disc",
      paragrafs: [
        "El programa musical de Zeleste reflectí les tendències internacionals —rock progresiu proper al jazz, en la línia de Mahavishnu Orchestra, Soft Machine o Miles Davis i els seus deixebles— però alhora serví com a vehicle d'expressió d'una realitat autòctona. Els referents interns dels músics laietans són, en primer lloc, el jazz-rock elèctric nord-americà i britànic del tombant dels anys setanta.",
        "Miles Davis és el punt d'inflexió: In a Silent Way (1969) i, sobretot, Bitches Brew (1970) trenquen la frontera entre jazz i rock i obren el camp per a la fusió. John McLaughlin amb la seva Mahavishnu Orchestra (The Inner Mounting Flame, 1971) demostra que la velocitat i el virtuosisme poden coexistir amb la complexitat rítmica. Soft Machine — amb Robert Wyatt, Kevin Ayers i Mike Ratledge — porta el cantorury-rock cap a un so de cançons conceptuals. Weather Report (1970-1986) amb Joe Zawinul i Wayne Shorter, i més tard Jaco Pastorius, redefineix el jazz com a música electrònica-improvisadora.",
        "Aquestes són les bandes sonores que Max Sunyer i Kitflus d'Iceberg, Joan Albert Amargós de Música Urbana i Fusioon, els membres de Dharma i de la Mirasol escoltaven, traduïen i volien imitar. La diferencia: no els basta amb la imitació. Hi afegeixen la sardana, el flamenc, la bossa, el son cubà, la cançó popular catalana. El resultat és una fusió que no és còpia sinó traducció: una manera mediterrània de fer jazz-rock.",
        "El prog-rock britànic (Yes, Genesis, King Crimson, Pink Floyd), el Canterbury scene (Caravan, Hatfield and the North) i el krautrock alemany (Can, Faust, Tangerine Dream) també formen part dels referents. Però el model triomfant és el del jazz-rock: el virtuosisme, l'estructura de suite, la improvisació amb base harmònica. És la línia que portarà, més tard, al postlaietanisme de Pegasus (1982-1997) i, indirectament, al jazz-funk de la movida catalana dels anys 80.",
      ],
      enllacosInterns: [
        { id: "fusio", etiqueta: "Ingredients de la fusió laietana" },
        { id: "artistes", etiqueta: "Bandes i discs clau" },
        { id: "obres", etiqueta: "Obres clau del moviment" },
      ],
      enllacosExterns: [
        {
          url: "https://ca.wikipedia.org/wiki/Miles_Davis",
          etiqueta: "Miles Davis",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Mahavishnu_Orchestra",
          etiqueta: "Mahavishnu Orchestra",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Soft_Machine",
          etiqueta: "Soft Machine",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Weather_Report",
          etiqueta: "Weather Report",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Canterbury_Scene",
          etiqueta: "Canterbury scene",
          font: "Viquipèdia",
        },
      ],
    },
    {
      id: "substrat-mediterrani",
      titol: "El substrat mediterrani i autòcton",
      kicker: "Autòcton",
      icona: "compass",
      paragrafs: [
        "El tret diferencial de la ona laietana respecte als seus models internacionals és el substrat mediterrani. La fusió no es queda en la imitació del jazz-rock nord-americà: hi afegeix sardana, cançó popular, cobla, flamenc, bossa nova, son cubà, i cançó mediterrània. És aquesta mixtura la que converteix una banda com la Companyia Elèctrica Dharma en alguna cosa més que un quartet de jazz-rock: Tramuntana (1977) sona, alhora, com Mahavishnu i com una cobla modernitzada.",
        "La funció identitària del català és fonamental. El 1975 encara no existeix TV3, no hi ha normalització lingüística als instituts, l'ús públic del català és restringit. Quan Sisa canta «Qualsevol nit pot sortir el sol» en català, no només fa una cançó: fa un acte de normalització cultural. El rock en català no existeix com a indústria abans de la ona; amb la ona neix com a possibilitat. El Rock Català dels anys 90 (Sopa de Cabra, Sau, Els Pets) no hauria existit sense aquest precedent.",
        "La Mediterrània funciona, per als laietans, no només com a geografia sinó com a programa estètic. Maria del Mar Bonet — balear però barcelonina d'adopció — n'és la figura més coherent: la seva fusió entre cançó popular mallorquina, mil·lès gregues, sardes turques, matisos sefardites i electrificació laietana és, potser, l'expressió més completa d'aquesta utopia mediterrània. El disc Maria del Mar (1974), amb l'acompanyament de l'Orquestra Mirasol, és la prova que la fusió pot ser alhora popular i experimental.",
      ],
      enllacosInterns: [
        { id: "fusio", etiqueta: "De què està fet el so laietà?" },
        { id: "edigsa", etiqueta: "Edigsa — el segell" },
        { id: "grafo-relacions", etiqueta: "Veure connexions de Maria del Mar Bonet" },
      ],
      enllacosExterns: [
        {
          url: "https://ca.wikipedia.org/wiki/Maria_del_Mar_Bonet",
          etiqueta: "Maria del Mar Bonet",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Sardana",
          etiqueta: "Sardana",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Cobla",
          etiqueta: "Cobla",
          font: "Viquipèdia",
        },
        {
          url: "https://ca.wikipedia.org/wiki/Rock_catal%C3%A0",
          etiqueta: "Rock català (anys 90)",
          font: "Viquipèdia",
        },
      ],
    },
    {
      id: "zeleste-vehicle",
      titol: "Zeleste i la sortida professional dels músics",
      kicker: "Vehicle",
      icona: "calendar",
      paragrafs: [
        "El 23 de maig de 1973, Víctor Jou — arquitecte de formació, client habitual de Bocaccio, nascut a la plaça Reial — inaugura la sala Zeleste al carrer de la Plateria (avui Argenteria), al Born. La sala, dissenyada per Santiago Roqueta en un antic magatzem, no és només un espai: és una empresa. Té programa estable diari, serveis tècnics propis, logística de gira i un segell discogràfic associat (Edigsa). És, en paraules del propi Jou, «la primera empresa cultural autòctona de la Barcelona moderna».",
        "Aquesta estructura empresarial és el que diferencia la ona laietana de qualsevol altra escena coetània. Sense Zeleste, Sisa hauria sigut un cantautor marginal; Dharma, una banda de província; Iceberg, virtuosos de garatge. Amb Zeleste, cada un d'ells accedeix a un circuit professional, a un segell que els edita i a un públic transversal — burgesia de Bocaccio, joves de la Mina, estudiants d'ESADE, treballadors del Poble Sec — que cap altra sala de l'època reunia.",
        "La funció de Zeleste com a vehicle d'expressió té dues vessants. En primer lloc, programa estable: jazz, rock, cançó mediterrània, música cubana — una coherència estètica mediterrània que dóna coherència al moviment. En segon lloc, formació professional: els músics de la ona no moren quan el moviment es dissol cap al 1980-1982; nodreixen la nova cançó, la pop dels 80, el flamenco-jazz, els arranjaments de la indústria. Pegasus (1982-1997), el postlaietanisme il·lustrat, n'és hereu directe. La sala sobreviu físicament fins al 1986 en aquesta ubicació; després migrarà a Almogàvers i, més tard, al Poble Espanyol, fins al seu tancament definitiu el 2020.",
      ],
      enllacosInterns: [
        { id: "zeleste", etiqueta: "Sala Zeleste (secció dedicada)" },
        { id: "ruta-musical", etiqueta: "Ruta musical per Barcelona" },
        { id: "llegat", etiqueta: "El llegat del moviment" },
      ],
      enllacosExterns: [
        {
          url: "https://es.wikipedia.org/wiki/Zeleste",
          etiqueta: "Sala Zeleste",
          font: "Wikipedia",
        },
        {
          url: "https://www.thenewbarcelonapost.com/en/zeleste-the-musical-refuge-of-70s-barcelona",
          etiqueta: "Zeleste, the musical refuge of 70s Barcelona",
          font: "The New Barcelona Post (2023)",
        },
        {
          url: "https://www.rtve.es/noticias/20241101/50-anys-zeleste-documental/16309464.shtml",
          etiqueta: "50 anys de Zeleste — documental RTVE (2024)",
          font: "RTVE",
        },
      ],
    },
  ],
  // Conserva l'estructura antiga (3 paràgrafs) per compatibilitat
  cos: [
    "L'Ona laietana irromp en un moment històric decisiu, sobretot a nivell polític, a l'Espanya de començaments dels anys setanta: els darrers anys del franquisme i l'inici de la transició.",
    "Creix sobre el substrat de la Nova Cançó i del Grup de Folk, i dialoga amb fenòmens coetanis com el rock andaluz: per a molts artistes el rock es quedava curt com a vehicle d'expressió i calia adoptar altres fórmules. És, en sentit ple, una revolució contracultural barcelonina.",
    "El repertori de Zeleste reflectí les tendències internacionals —rock progresiu proper al jazz, en la línia de Mahavishnu Orchestra, Soft Machine o Miles Davis i els seus deixebles— però alhora serví com a vehicle d'expressió d'una realitat autòctona.",
  ],
};

export const fusio: FusioIngredient[] = [
  {
    id: "jazzrock",
    nom: "Jazz-rock nord-americà",
    descripcio:
      "El virtuosisme i la fórmula del jazz-rock progresiu d'ultramar: ritmes compostos, improvisació i textura elèctrica.",
    referents: [
      "Mahavishnu Orchestra",
      "Soft Machine",
      "Miles Davis",
      "Herbie Hancock",
      "Chick Corea",
    ],
    grups: ["Iceberg", "Orquestra Mirasol", "Esqueixada Sniff", "Música Urbana", "Pegasus"],
    temes: [
      { titol: "La flamenca elèctrica", artista: "Iceberg" },
      { titol: "No Juguis amb Set Miralls", artista: "Orquestra Mirasol" },
    ],
    color: "#f59e0b",
  },
  {
    id: "tradicio",
    nom: "Tradició catalana",
    descripcio:
      "L'arrel mediterrània: sardana, cançó popular i una denominació d'origen que marca la identitat del so laietà.",
    referents: ["Sardana", "Cançó popular", "Denominació d'origen catalana"],
    grups: ["Companyia Elèctrica Dharma", "Toti Soler", "Orquestra Mirasol"],
    temes: [
      { titol: "Tramuntana", artista: "Companyia Elèctrica Dharma" },
      { titol: "Sardana flamenca", artista: "Toti Soler" },
    ],
    color: "#e11d48",
  },
  {
    id: "novacanco",
    nom: "Nova Cançó",
    descripcio:
      "L'herència de la cançó d'autor compromesa i en català, de la qual provenien molts dels músics que ompliren Zeleste.",
    referents: [
      "Ovidi Montllor",
      "Maria del Mar Bonet",
      "Quico Pi de la Serra",
    ],
    grups: ["Maria del Mar Bonet", "Ovidi Montllor", "Orquestra Mirasol"],
    temes: [{ titol: "Maria del Mar (1974)", artista: "Maria del Mar Bonet" }],
    color: "#d97706",
  },
  {
    id: "grupdefolk",
    nom: "Grup de Folk",
    descripcio:
      "L'ala més moderna i psicodèlica del folk català, bressol d'artistes com Sisa i Pau Riba.",
    referents: ["Sisa", "Pau Riba", "Germans Batiste", "Oriol Tràvia"],
    grups: ["Sisa", "Pau Riba"],
    temes: [
      { titol: "Qualsevol nit pot sortir el sol", artista: "Sisa" },
      { titol: "Dioptria", artista: "Pau Riba" },
    ],
    color: "#b45309",
  },
  {
    id: "flamenc",
    nom: "Flamenc",
    descripcio:
      "La fusió sense prejudicis: combinar flamenc, tradició catalana i detalls d'altres procedències, com demostrà la «Sardana flamenca».",
    referents: ["Toti Soler", "Sardana flamenca", "Gato Pérez"],
    grups: ["Toti Soler", "Gato Pérez", "Iceberg"],
    temes: [
      { titol: "Sardana flamenca", artista: "Toti Soler" },
      { titol: "La flamenca elèctrica", artista: "Iceberg" },
    ],
    color: "#9a3412",
  },
  {
    id: "cubabrazil",
    nom: "Matisos cubano-brasilers",
    descripcio:
      "Salsa, bossa i ritmes llatins que aportaren groove mediterrani i elegancia a la fórmula de l'Orquestra Mirasol.",
    referents: ["Salsa", "Bossa nova", "Salsa catalana"],
    grups: ["Orquestra Mirasol", "Gato Pérez"],
    temes: [{ titol: "Rumba dels 60s", artista: "Gato Pérez" }],
    color: "#a16207",
  },
  {
    id: "freejazz",
    nom: "Free jazz",
    descripcio:
      "Els cicles de free jazz a la cartellera de Zeleste: experimentació radical i gesta programadora per a l'època.",
    referents: ["Cicles de free jazz", "Tete Montoliu", "Improvisació col·lectiva"],
    grups: ["Tete Montoliu", "Jordi Sabatés", "Xavier Ribalta"],
    temes: [{ titol: "Vampyria", artista: "Tete Montoliu / Jordi Sabatés" }],
    color: "#7c2d12",
  },
  {
    id: "progeuro",
    nom: "Rock progresiu europeu",
    descripcio:
      "Les composicions llargues i la narrativa simfònica del prog europeu, filtrades per la sensibilitat mediterrània.",
    referents: ["Màquina!", "Iceberg", "Mini-òperes instrumentals"],
    grups: ["Màquina!", "Iceberg", "Pau Riba"],
    temes: [
      { titol: "Why?", artista: "Màquina!" },
      { titol: "Dioptria", artista: "Pau Riba" },
    ],
    color: "#92400e",
  },
];

export const zeleste = {
  titol: "Sala Zeleste",
  paper: "L'epicentre de l'Ona laietana",
  fundacio: "Maig de 1973",
  fundador: "Víctor Jou, arquitecte",
  ubicacio: "Carrer Platería (avui Argenteria), barri del Born, Barcelona",
  context: "Al costat de l'església de Santa Maria del Mar",
  pilars: [
    {
      nom: "Sala",
      descripcio:
        "Espai de concerts on actuen, l'endemà de la inauguració, Sloblo —el quintet de Gato Pérez— i, poc després, els Bueyes Madereros d'Eduard Altaba.",
    },
    {
      nom: "Revista",
      descripcio:
        "Publicació pròpia que articulà la conversa crítica entorn del moviment i la seva escena.",
    },
    {
      nom: "Segell",
      descripcio:
        "Segell discogràfic propi (línia Zeleste-Edigsa des de 1974) que professionalitzà la producció i distribució i donà continuitat al material.",
    },
  ],
  programacio:
    "La programació fou exemplar i variada: des de cicles de free jazz fins a actuacions de flamenco. Un cartell avui indiscutible que, en aquelles dates, era una autèntica gesta.",
  imatge: "/laieta/zeleste.png",
};

// === Cronologia essencial (Annex 1) ===
export const timeline: Esdeveniment[] = [
  {
    any: "1969–1970",
    titol: "Antecedents psicodèlics",
    descripcio:
      "Antecedents de psicodèlia i rock progresiu; aparició d'obres fundacionals com Miniatura i Why?, que preparen el terreny del moviment.",
    icona: "antecedent",
  },
  {
    any: "1970–1971",
    titol: "Maduració experimental",
    descripcio:
      "Maduració d'un discurs musical experimental a Barcelona que comença a articular una escena pròpia al voltant de la psicodèlia i la fusió.",
    icona: "antecedent",
  },
  {
    any: "1969–1971",
    titol: "Dioptria",
    descripcio:
      "Edició i difusió de Dioptria, de Pau Riba, referent cabdal del rock psicodèlic català i de la contracultura del país.",
    icona: "disc",
  },
  {
    any: "1973",
    titol: "Neix Zeleste",
    descripcio:
      "Fundació de Zeleste, epicentre del moviment. La sala esdevé el punt de trobada de la fusió barcelonina.",
    icona: "fundacio",
  },
  {
    any: "1974",
    titol: "Línia Zeleste-Edigsa",
    descripcio:
      "Aparició de la línia Zeleste-Edigsa, que professionalitza la producció i la distribució discogràfica del fenomen.",
    icona: "disc",
  },
  {
    any: "1974–1976",
    titol: "Consolidació de figures",
    descripcio:
      "Consolidació de Companyia Elèctrica Dharma, Gato Pérez, Iceberg, Orquestra Plateria, Tete Montoliu, Jordi Sabatés i altres figures principals del moviment.",
    icona: "disc",
  },
  {
    any: "1975",
    titol: "Primer Canet Rock",
    descripcio:
      "Primer Canet Rock; publicació de Qualsevol nit pot sortir el sol, de Jaume Sisa, disc i cançó emblemàtics de tota una generació.",
    icona: "disc",
  },
  {
    any: "1976",
    titol: "Continuïtat del festival",
    descripcio:
      "Continuïtat del festival i consolidació popular del discurs laietà, que assoleix plena maduresa creativa i de públic.",
    icona: "disc",
  },
  {
    any: "1977",
    titol: "Tramuntana i transformació",
    descripcio:
      "Gran àmbit d'èxit de la Companyia Elèctrica Dharma amb Tramuntana, síntesi perfecta entre folk català, progresiu i jazz-rock. Els canvis socials i polítics acceleren la transformació del context.",
    icona: "canvi",
  },
  {
    any: "1978",
    titol: "Final del Canet Rock",
    descripcio:
      "Final de Canet Rock i inici d'un declivi estètic del moviment; el punk comença a arrasar i els músics laietans perden espai.",
    icona: "declivi",
  },
  {
    any: "1980",
    titol: "Tancament del cicle",
    descripcio:
      "Tancament simbòlic del cicle laietà; emergència mediàtica de la Movida Madrilenya a escala estatal reorienta l'atenció cultural.",
    icona: "declivi",
  },
  {
    any: "Segles XX / XXI",
    titol: "Recuperació i homenatges",
    descripcio:
      "Recuperació, homenatges i revalorització del fenomen: recopilatoris, tributs i la memòria viva de Zeleste i l'Ona laietana.",
    icona: "llegat",
  },
];

export const artistes: Artista[] = [
  {
    id: "maquina",
    nom: "Màquina!",
    anyInici: "1968",
    anyFi: "1972",
    categoria: "Rock progresiu",
    funcio: "Pont yeyé ↔ avantguarda del setanta",
    integrants: [
      'Jordi Batiste «Tapi» (veu, baix)',
      "Enric Herrera (teclats)",
    ],
    bio:
      "El duo fundador —Jordi Batiste «Tapi» i Enric Herrera—, acompanyat per diversos col·laboradors, va publicar Why?, un disc de rock progresiu d'una ambició orquestral insòlita al sud d'Europa. Les actuacions del 1970 i, posteriorment, els concerts amb el bateria del futur Iceberg demostren la continuïtat interna entre «l'abans». Máquina! és el pont essencial entre la cultura yeyé de la primera Barcelona rock i l'avantguarda del setanta.",
    destacat: true,
    color: "#ca8a04",
    albums: [
      { titol: "Why?", any: 1970, nota: "Ambició orquestral insòlita al sud d'Europa" },
    ],
  },
  {
    id: "orquestra-mirasol",
    nom: "Orquestra Mirasol",
    anyInici: "1974",
    anyFi: "1977",
    categoria: "Fusió",
    funcio: "El primer so laietà",
    integrants: [
      "Ricard Roda",
      "Víctor Ammann",
      "Xavier Batllés",
      "Miquel Lizandra",
      "Pedrito Díaz",
    ],
    bio:
      "Fundada el 1974, la seva música desprèn per tots els poros la Barcelona de mitjan setanta. Trobà l'equilibri entre les influències del jazz-rock nord-americà, els accents mediterranis i els matisos cubano-brasilers. Vinculada decisivament a la modernització del discurs de Maria del Mar Bonet —amb ella, el seu disc Maria del Mar (1974) feu confluir la cançó mediterrània i l'elèctric experimental—, és la prova que l'ona laietana comparteix ADN amb certes franges de la Nova Cançó electrificada. Molts consideren «Salsa catalana» el primer disc realment laietà.",
    destacat: true,
    color: "#f59e0b",
    albums: [
      {
        titol: "Salsa catalana",
        any: 1974,
        segell: "Edigsa",
        nota: "Considerat el primer disc realment laietà",
      },
      { titol: "D'oca a oca i tira que et toca", any: 1975, segell: "Edigsa" },
      {
        titol: "La Boqueria",
        any: 1977,
        segell: "Edigsa",
        nota: "Com a Mirasol Colores",
      },
    ],
  },
  {
    id: "companyia-electrica-dharma",
    nom: "Companyia Elèctrica Dharma",
    anyInici: "1974",
    anyFi: "1978",
    categoria: "Fusió",
    funcio: "La síntesi perfecte del moviment",
    integrants: ["Fortunato Guerrero", "Joan Fortuny", "Josep Fortuny", "Enric Peidró"],
    bio:
      "Formada el 1974 i amb forts vincles a Zeleste, és potser l'exemple més complet, equilibrat i reeixit del rock laietà: fusiona folk català (sonoritats de cobla i oboes), rock progresiu, jazz-rock i textures mediterrànies i world music. Tramuntana (1977) n'és l'obra mestra i un punt culminant del moviment: va vendre milers de còpies i obrí la banda al circuit massiu. El concert al Pavelló d'Esports del Real Madrid davant milers d'assistents —amb operatiu de seguretat— demostrà que era un fenomen de masses malgrat l'alta complexitat artística del seu discurs.",
    destacat: true,
    color: "#e11d48",
    albums: [
      { titol: "Diumenge", any: 1975, nota: "Obre la porta al so del grup" },
      { titol: "L'Oucomballa", any: 1976, nota: "Més laietà que el primer" },
      {
        titol: "Tramuntana",
        any: 1977,
        nota: "Obra mestra; síntesi folk + progresiu + jazz-rock",
      },
      { titol: "L'àngel de la dansa", any: 1978, nota: "L'any del declivi" },
    ],
  },
  {
    id: "iceberg",
    nom: "Iceberg",
    anyInici: "1975",
    anyFi: "1979",
    categoria: "Rock progresiu",
    funcio: "Sostre tècnic del moviment",
    integrants: [
      "Max Sunyer (guitarra)",
      'Josep Mas «Kitflus» (teclats)',
      "Primi Sancho (baix)",
      "Jordi Colomer (bateria)",
    ],
    bio:
      "El quartet canònic del jazz-rock català. La seva lectura de la Mahavishnu Orchestra i Weather Report es traduí en un so de gran potència tècnica. L'LP Coses Nostres (1976) inclou «La flamenca elèctrica», composició que exemplifica la síntesi mediterrània del grup: estructura jazzística, fraseig andalús i distorsió de rock. Iceberg representa el sostre tècnic del moviment i, alhora, el punt on l'Ona comença a parlar un idioma incomprensible per al públic del carrer —distància que contribuiria, dos anys més tard, a l'agonia del projecte.",
    destacat: true,
    color: "#d97706",
    albums: [
      { titol: "Tutankhamon", any: 1975, nota: "Debut" },
      {
        titol: "Coses Nostres",
        any: 1976,
        nota: "Inclou «La flamenca elèctrica» — síntesi mediterrània",
      },
      { titol: "Instant", any: 1977 },
      { titol: "Arc de Cercle", any: 1978 },
    ],
  },
  {
    id: "secta-sonica",
    nom: "Secta Sònica",
    anyInici: "1976",
    anyFi: "1977",
    categoria: "Fusió",
    funcio: "Gran vèrtex del laietanisme",
    integrants: [
      "Gato Pérez",
      "Rafael Zaragoza",
      "Jordi Bonell",
      "Víctor Cortina",
    ],
    bio:
      "Fundada per dos integrants de Sloblo —Gato Pérez i Rafael Zaragoza—, amb Jordi Bonell i Víctor Cortina. Ens deuen dos LPs a cada qual millor, amb logres absolutament genuïns: un dels grans vèrtexs del laietanisme.",
    destacat: true,
    color: "#b45309",
    albums: [
      { titol: "Fred Pedralbes", any: 1976, segell: "Edigsa" },
      { titol: "Astroferia", any: 1977, segell: "Edigsa" },
    ],
  },
  {
    id: "gato-perez",
    nom: "Gato Pérez",
    anyInici: "1973",
    anyFi: "1978",
    categoria: "Rumba",
    funcio: "Pont contracultura ↔ música de carrer",
    integrants: ['Xavier Patricio Pérez «Gato» (veu, guitarra)', "Formacions variables"],
    bio:
      "Xavier Patricio Pérez (1951–1990), nascut a Buenos Aires i relacionat amb la cultura barcelonina. Figura fonamental i, potser, el definidor terminològic del moviment: se li atribueix l'encuny o la legitimació del concepte «Ona Laietana». Pont entre el rock progresiu, la rumba catalana i la poesia urbana, la seva evolució segueix la del propi moviment: des de Slobo o Secta Sònica passa a un llenguatge proper a la rumba urbana. Carabruta (1978) fou un gir; la seva influència traspassà les vendes i aportà una dimensió poètica, citadina i gitana a una música encara minoritària en certs sectors cultes. Model d'avantguarda popular.",
    destacat: true,
    color: "#9a3412",
    albums: [
      {
        titol: "Carabruta",
        any: 1978,
        segell: "Belter",
        nota: "Gir cap a la rumba; amb «Rumba dels 60's»",
      },
    ],
  },
  {
    id: "toti-soler",
    nom: "Toti Soler",
    anyInici: "1973",
    categoria: "Instrumental",
    funcio: "La fusió sense prejudicis",
    integrants: ["Toti Soler (guitarra)"],
    bio:
      "Ja hi era donant guerra abans que ningú. Autor de composicions de tanta qualitat com la «Sardana flamenca», peça instrumental del disc «El Gat Blanc» (1973): una demostració exemplar de fins on arribava la fusió, feta sense cap prejudici, combinant flamenc, tradició catalana i detalls d'altres procedències. Amb Jordi Sabatés formà també Om, formació de curt recorregut però de significació decisiva.",
    color: "#a16207",
    albums: [
      { titol: "El Gat Blanc", any: 1973, nota: "Amb «Sardana flamenca»" },
      {
        titol: "Dúos piano i guitarra (amb Jordi Sabatés)",
        any: 1973,
        nota: "Àlbum de duos",
      },
    ],
  },
  {
    id: "jordi-sabates",
    nom: "Jordi Sabatés",
    anyInici: "1971",
    anyFi: "2022",
    categoria: "Instrumental",
    funcio: "Pianista, precursor de l'ona",
    integrants: ["Jordi Sabatés (piano)"],
    bio:
      "Pianista essencial de l'ona laietana, precursor de tants altres companys. Col·laborà amb bandes com Picnic i Om, i amb cantautors com Ovidi Montllor, Maria del Mar Bonet i Quico Pi de la Serra, abans de formar el seu propi grup Jarka el 1971. Amb Toti Soler formà també Om. El 1974 publicà amb Tete Montoliu «Vampyria» (gravat a Gemma Estudis), simbiosi excel·lent entre jazz universal i avantguarda local.",
    color: "#7c2d12",
    albums: [
      { titol: "Jarka (grup propi)", any: 1971, nota: "Formació del grup" },
      { titol: "Dúos amb Toti Soler", any: 1973 },
      { titol: "Vampyria (amb Tete Montoliu)", any: 1974, nota: "Jazz universal + avantguarda — Gemma Estudis" },
    ],
  },
  {
    id: "tete-montoliu",
    nom: "Tete Montoliu",
    anyInici: "1974",
    categoria: "Jazz",
    funcio: "Pianista universal i escut internacional",
    integrants: ["Tete Montoliu (piano)"],
    bio:
      "El gran pianista universal del jazz català (1933–1997): company de gires de Dexter Gordon, Roland Kirk, Lionel Hampton i Ben Webster; el seu Live at the Village Gate de 1963 el consagrà a Nova York. Als anys setanta tornà a exercir de referent per a tota l'ona, i la font primera esmenta els seus enregistraments amb Sabatés (Vampyria, 1974, gravat a Gemma Estudis). La seva legitimitat internacional fou un escut i un model per a una escena que, d'altra manera, hauria pogut ser desprestigiada com a folklòrica provincial.",
    destacat: true,
    color: "#92400e",
    albums: [
      { titol: "Vampyria (amb Jordi Sabatés)", any: 1974, nota: "Gemma Estudis — simbiosi jazz + avantguarda" },
    ],
  },
  {
    id: "om",
    nom: "Om (Toti Soler i Jordi Sabatés)",
    anyInici: "1973",
    anyFi: "1974",
    categoria: "Instrumental",
    funcio: "Folk mediterrani + suite progresiva",
    integrants: ["Toti Soler (guitarra)", "Jordi Sabatés (piano)"],
    bio:
      "Formació de curt recorregut però de significació decisiva: el guitarrista Toti Soler i el pianista Jordi Sabatés, junts sota aquesta denominació, enllaçaren el folk mediterrani, la improvisació jazzística i l'estructura de suite progresiva. La participació de Soler a la guitarra de l'enregistrament de Dioptria situa Om com una de les mescles primordials del llenguatge laietà: virtuosisme, folklore i transgressió alhora.",
    color: "#a16207",
    albums: [],
  },
  {
    id: "fusioon",
    nom: "Fusioon",
    anyInici: "1974",
    categoria: "Fusió",
    funcio: "Jazz-rock → flamenco",
    integrants: [
      "Joan Albert Amargós (teclats)",
      "Carles Benavent (baix)",
      "Santi Arisa (bateria)",
    ],
    bio:
      "Projecte de fusió. Amargós i Benavent provenen del jazz-rock, però Benavent —un dels baixistes més reconeguts del país— acabaria sent una peça clau del circuit flamenco de l'època (Paco de Lucía). Les fonts consignen la presència de Fusioon en festivals com el de Granollers, al costat d'altres formacions del cercle de Barcelona.",
    color: "#92400e",
    albums: [],
  },
  {
    id: "musica-urbana",
    nom: "Música Urbana",
    anyInici: "1977",
    categoria: "Fusió",
    funcio: "Barcelona sona tan sofisticada com Londres",
    integrants: ["Jordi Bonell (guitarra)", "Joan Albert Amargós (teclats)"],
    bio:
      "Formació de fusió jazz-rock que va publicar Música Urbana i Iberia (1978). El seu interès és doble: mostra una Barcelona que sona tan sofisticada com Londres i, amb Iberia, exemplifica la via de la «muntanya sonora» —compassos de folk reinterpretats amb orquestració elèctrica.",
    color: "#854d0e",
    albums: [
      { titol: "Música Urbana", any: 1978 },
      { titol: "Iberia", any: 1978, nota: "«Muntanya sonora»: folk + orquestració elèctrica" },
    ],
  },
  {
    id: "xavier-ribalta",
    nom: "Xavier Ribalta",
    anyInici: "1958",
    categoria: "Jazz",
    funcio: "Pioner del jazz mediterrani barceloní",
    integrants: ["Xavier Ribalta (piano)"],
    bio:
      "Pianista i compositor, pioner d'un jazz mediterrani i barceloní des de finals dels cinquanta, amb àlbums de jazz flamenco-pop i, més tard, col·laboracions dins el cercle de la fusió. Menys mediàtic que Montoliu però igualment fonamental, connecta el circuit del jazz clàssic amb la curiositat de l'underground.",
    color: "#78350f",
    albums: [],
  },
  {
    id: "barcelona-traction",
    nom: "Barcelona Traction",
    anyInici: "1973",
    anyFi: "1975",
    categoria: "Fusió",
    funcio: "Art-pop barroc",
    integrants: ["Formació col·lectiva"],
    bio:
      "Dúo de pop barroc amb LP homònim (1975) dins la línia de la sala. La seva «Els carrusells de la calvície» és potser la cançó laietana de major reedició posterior: folk-fantasmagòric, veus superposades, un mite de l'Sgt. Pepper's de la Vall d'Hebron. Obra de culte tardà que resumeix la voluntat d'art-pop del moviment. Present al recopilatori «Música Laietana. Zeleste» amb «Sudamérica».",
    color: "#9a3412",
    albums: [
      { titol: "Barcelona Traction (LP)", any: 1975, nota: "Art-pop barroc — línia Zeleste" },
      { titol: "Presència al recopilatori Zeleste", any: 2009 },
    ],
  },
  {
    id: "bueyes-madereros",
    nom: "Bueyes Madereros",
    anyInici: "1973",
    categoria: "Fusió",
    funcio: "Grup primerenc de Zeleste",
    integrants: ["Eduard Altaba"],
    bio:
      "Grup format per Eduard Altaba el 1973, un dels primers a actuar a Zeleste poc després de la inauguració. Peça de carrera en la història primerenca de la sala.",
    color: "#78350f",
    albums: [],
  },
  {
    id: "esqueixada-sniff",
    nom: "Esqueixada Sniff",
    anyInici: "1975",
    categoria: "Fusió",
    funcio: "Capa professional d'instrumentistes",
    integrants: ["Joan Muntalà (guitarra)", "Formació col·lectiva"],
    bio:
      "Combo instrumentista que va publicar a través de la línia Zeleste-Edigsa el seu disc Som de la tèrbol? (1975). Sota un nom que és tot un programa —barreja de cuina popular i ironia hippy—, practica un jazz-rock català de seccions de vent, groove i humor conceptual, amb el guitarrista Joan Muntalà com a figura central. La seva existència confirma que el circuit no era només cosa de dues o tres estrelles: hi havia una capa professional d'instrumentistes joves altament qualificats. «Ocells» (1979) és un dels grans hitos del so laietà.",
    color: "#854d0e",
    albums: [
      { titol: "Som de la tèrbol?", any: 1975, segell: "Zeleste-Edigsa", nota: "Debut — jazz-rock de vent, groove i humor" },
      { titol: "En concert", any: 1979, nota: "En directe a Zeleste" },
      { titol: "Ocells", any: 1979, nota: "Gran hito del so laietà" },
    ],
  },
  {
    id: "orquestra-plateria",
    nom: "Orquestra Plateria",
    anyInici: "1974",
    categoria: "Fusió",
    funcio: "Projecte de ball cultiu",
    integrants: ["Formació col·lectiva"],
    bio:
      "Formació del ventall laietà que contribuí a fer del discurs laietà un fenomen popular i festiu —el projecte de ball cultiu del moviment—, en la línia de la consolidació de figures del 1974–1976.",
    color: "#b45309",
    albums: [],
  },
  {
    id: "altres-grups",
    nom: "Altres formacions de l'òrbita",
    anyInici: "1974",
    anyFi: "1979",
    categoria: "Fusió",
    funcio: "Teixit de l'escena",
    integrants: [
      "Blay Tritono",
      "Rondalla de la Costa",
      "Tropopausa",
    ],
    bio:
      "Al voltant de Zeleste es creà un teixit d'escena ample: bandes com Blay Tritono, la Rondalla de la Costa i Tropopausa completaren el ventall de formacions que feren de la Barcelona dels 70 un laboratori de fusió.",
    color: "#a1582c",
    albums: [],
  },
  {
    id: "pegasus",
    nom: "Pegasus",
    anyInici: "1982",
    anyFi: "1997",
    categoria: "Postlaietà",
    funcio: "Postlaietanisme il·lustrat",
    integrants: ["Membres hereus de la tradició de Zeleste"],
    bio:
      "Supergrup que partí de la tradició instrumental de Zeleste de Barcelona i avançà des del laietanisme cap a un «postlaietanisme il·lustrat»: un jazz de fusió que conquistà públic i crítica al llarg dels vuit discs que publicaren entre 1982 i 1997.",
    destacat: true,
    color: "#fbbf24",
    albums: [
      { titol: "Nuevos encuentros", any: 1982, nota: "Optimisme mediterrani" },
      { titol: "Comunicació", any: 1983, nota: "Jazz avançat" },
      { titol: "Searching", any: 1984 },
      {
        titol: "Montreux Jazz Festival",
        any: 1985,
        nota: "Registre de l'actuació al festival",
      },
      {
        titol: "Simfonia d'una gran ciutat",
        any: 1987,
        nota: "BSO per al film homònim de Walter Ruttman (1927)",
      },
      { titol: "Cóctel", any: 1988 },
      { titol: "El setè circle", any: 1990 },
      { titol: "Selva pagana", any: 1997, nota: "Sonoritat més lírica" },
    ],
  },
  {
    id: "sisa",
    nom: "Sisa",
    anyInici: "1970",
    categoria: "Cantautor",
    funcio: "Himne generacional i cabaret galàctic",
    integrants: ["Jaume Sisa"],
    bio:
      "Nascut el 1948 i és una de les figures més populars, carismàtiques i representatives de l'esperit laietà: teatre musical, experimentació, llum lírica, sarcasme i tendresa, amb una capacitat extraordinària per connectar amb públics diversos. Qualsevol nit pot sortir el sol (1975) simbolitza el fenomen —èxit immediat i transversal, himne de generació, un desig de llum enmig de la nit política. «El Cabaret Galàctic» resumeix el projecte: festiu, culte, oníric i popular; gairebé una definició del moviment.",
    color: "#ca8a04",
    albums: [
      { titol: "Música Dispersa", any: 1971 },
      { titol: "Orgia", any: 1973 },
      {
        titol: "Qualsevol nit pot sortir el sol",
        any: 1975,
        nota: "Himne de generació",
      },
      { titol: "Galeta Galàctica", any: 1976 },
      { titol: "La Catedral", any: 1977 },
    ],
  },
  {
    id: "pau-riba",
    nom: "Pau Riba",
    anyInici: "1969",
    categoria: "Cantautor",
    funcio: "Psicodèlia, provocació i llenguatge propi",
    integrants: ["Pau Riba"],
    bio:
      "Nascut el 1948 i mort el 2022, ocupa un lloc gairebé mític: alhora músic, compositor, performance, intel·lectual i provocador. Nét dels poetes Carles Riba i Clementina Arderiu, representà la versió més radical de l'avantguarda catalana —sofisticació poètica, experimentació sonora, crítica social i llibertat individual, en ruptura frontal amb la sensibilitat burgesa del seu entorn. Beví de Dylan, del folk anglosaxó, de la psicodèlia i de l'exotisme, però ho traduí en un llenguatge barceloní i català d'una singularitat molt alta: la dimensió contracultural del rock laietà.",
    destacat: true,
    color: "#b45309",
    albums: [
      {
        titol: "Miniatura",
        any: 1969,
        nota: "Pau Riba i col·lectiu — naixement de la psicodèlia espanyola",
      },
      {
        titol: "Dioptria",
        any: 1970,
        nota: "Obra major del rock psicodèlic en català; disc pioner",
      },
      {
        titol: "Jo, la Donya i el Gripau",
        any: 1971,
        nota: "Folk i experimental — etapa més àcida",
      },
      { titol: "Canet 1975 (directe)", any: 1975 },
      { titol: "De Riba a Riba (amb Big Ensemble)", any: 2016, nota: "Obra tardana" },
    ],
  },
];

// === Músics de sessió i nuclis menors (6.5.9) ===
export interface MusicSessio {
  nom: string;
  funcio: string;
  url?: string;
}

export const musicsSessio = {
  titol: "Músics de sessió i nuclis menors",
  sub: "La capa instrumentista que no va desaparèixer",
  valor:
    "Aquesta capa instrumentista explica per què, quan l'ona es va dissoldre, els seus músics no van desaparèixer: van nodrir la nova cançó, la pop de la dècada següent, el flamenco-jazz i els arranjaments de la indústria —un altre element del llegat silenciat del moviment.",
  musics: [
    {
      nom: "Joan Albert Amargós",
      funcio:
        "Teclista i arranjador; disc instrumental propi dins l'entorn Zeleste; més tard figura cabdal dels arranjaments de la pop catalana.",
      url: "https://ca.wikipedia.org/wiki/Joan_Albert_Amarg%C3%B3s",
    },
    {
      nom: "Carles Benavent",
      funcio: "Baix; pont entre l'ona, el jazz-rock i el flamenco de Paco de Lucía.",
      url: "https://es.wikipedia.org/wiki/Carles_Benavent",
    },
    {
      nom: "Xavier Batllés",
      funcio:
        "Bateria, vinculat a projectes del sector de fusió; present al concert de l'Auditori del 2022.",
      url: "https://ca.wikipedia.org/wiki/Iceberg_(grup)",
    },
    { nom: "Jordi Bonell", funcio: "Guitarrista de fusió.", url: "https://ca.wikipedia.org/wiki/Jordi_Bonell" },
    {
      nom: "Primi Sancho i Jordi Colomer",
      funcio: "La columna rítmica d'Iceberg.",
      url: "https://ca.wikipedia.org/wiki/Iceberg_(grup)",
    },
    {
      nom: 'Josep Mas «Kitflus»',
      funcio: "Teclista; futur productor de referència de la Barcelona pop.",
      url: "https://ca.wikipedia.org/wiki/Iceberg_(grup)",
    },
    {
      nom: "Manel Camp",
      funcio: "Pianista de jazz-fusió; membre de la xarxa d'instrumentistes.",
      url: "https://ca.wikipedia.org/wiki/Manel_Camp",
    },
    {
      nom: "Joan Muntalà",
      funcio: "Guitarra d'Esqueixada Sniff i habitual de l'estudi.",
      url: "https://www.efeeme.com/operacion-rescate-esqueixada-sniff",
    },
  ] as MusicSessio[],
};

// === Obres clau (Annex 2) ===
export const obresClaue: ObraClau[] = [
  {
    id: "miniatura",
    titol: "Miniatura",
    artista: "Pau Riba i col·lectiu",
    any: "1969",
    anySort: 1969,
    rellevancia: "Gènere seminal de la psicodèlia local.",
    color: "#b45309",
  },
  {
    id: "why",
    titol: "Why?",
    artista: "Màquina!",
    any: "1970",
    anySort: 1970,
    rellevancia:
      "Un dels primers grans àlbums del rock progressiu de qualitat a Barcelona.",
    color: "#ca8a04",
  },
  {
    id: "dioptria",
    titol: "Dioptria",
    artista: "Pau Riba",
    any: "1970–1971",
    anySort: 1970,
    rellevancia:
      "Fita cabdal del rock psicodèlic i de la contracultura catalana.",
    color: "#92400e",
  },
  {
    id: "vampyria",
    titol: "Vampyria",
    artista: "Tete Montoliu / Jordi Sabatés",
    any: "1974",
    anySort: 1974,
    rellevancia: "Simbiosi excel·lent entre jazz universal i avantguarda local.",
    color: "#7c2d12",
  },
  {
    id: "qualsevol-nit",
    titol: "Qualsevol nit pot sortir el sol",
    artista: "Jaume Sisa",
    any: "1975",
    anySort: 1975,
    rellevancia: "Disc i cançó emblemàtics del moviment i de tota una generació.",
    color: "#d97706",
  },
  {
    id: "coses-nostres",
    titol: "Coses Nostres",
    artista: "Iceberg",
    any: "1976",
    anySort: 1976,
    rellevancia: "Referent nacional del jazz-rock de qualitats elevades.",
    color: "#9a3412",
  },
  {
    id: "flamenca-electrica",
    titol: "La Flamenca Elèctrica",
    artista: "Iceberg",
    any: "1976",
    anySort: 1976,
    rellevancia:
      "Peça central de la seva producció; track emblemàtic de Coses Nostres (1976).",
    color: "#a16207",
  },
  {
    id: "tramuntana",
    titol: "Tramuntana",
    artista: "Companyia Elèctrica Dharma",
    any: "1977",
    anySort: 1977,
    rellevancia: "Síntesi perfecta entre folk català, progressiu i jazz-rock.",
    color: "#e11d48",
  },
];

export const recopilatori = {
  titol: "Música Laietana. Zeleste",
  segell: "Picap Records",
  any: 2009,
  cancons: 19,
  durada: "2 h 01 min",
  descripcio:
    "Recopilatori crucial per entendre el que es coïa musicalment a la Barcelona de mitjan anys setanta. Posa al pedestal que li correspon la sala Zeleste, epicentre del moviment. Recull 19 cançons (2 discs) dels grups i solistes que articularen l'ona laietana.",
  tracks: [
    { pos: 1, titol: "No Juguis amb Set Miralls", artista: "Orquestra Mirasol", durada: "6:59" },
    { pos: 2, titol: "Violentos los Correa", artista: "Secta Sònica", durada: "5:55" },
    { pos: 3, titol: "Sudamérica", artista: "Barcelona Traction", durada: "7:31" },
    { pos: 4, titol: "L'Oucomballa", artista: "Companyia Elèctrica Dharma", durada: "10:06" },
    { pos: 5, titol: "Agost", artista: "Música Urbana", durada: "6:58" },
    { pos: 6, titol: "Tot L'enyor de Demà", artista: "Jordi Sabatés", durada: "5:19" },
    { pos: 7, titol: "Saura I", artista: "Blay Tritono", durada: "9:36" },
    { pos: 8, titol: "Càntics de la Carn", artista: "Iceberg", durada: "11:19" },
    { pos: 9, titol: "Tango del Rosselló", artista: "Toni Xuclà", durada: "5:04" },
    { pos: 10, titol: "Odio en las Cavernas", artista: "Tropopausa", durada: "4:21" },
    { pos: 11, titol: "Ocells del Mediterrani", artista: "Esqueixada Sniff", durada: "6:08" },
    { pos: 12, titol: "La Rumba Criminal", artista: "Mirasol Colores", durada: "5:03" },
    { pos: 13, titol: "L'home Dibuixat", artista: "Orquestra Plateria", durada: "6:28" },
    { pos: 14, titol: "Roseta d'Olivella", artista: "La Rondalla de la Costa", durada: "2:59" },
    { pos: 15, titol: "Llàgrimes I Petons", artista: "Pau Riba", durada: "5:55" },
    { pos: 16, titol: "Rumba dels 60s", artista: "Gato Pérez", durada: "3:31" },
    { pos: 17, titol: "Bèstia", artista: "Oriol Tramvia", durada: "3:05" },
    { pos: 18, titol: "Sardana Flamenca", artista: "Toti Soler", durada: "4:29" },
    { pos: 19, titol: "Jo Vull Que M'acaricïis", artista: "Tete Montoliu", durada: "10:09" },
  ] as Tratxa[],
} as const;

// === Documents visuals ===
export interface DocumentVisual {
  id: string;
  titol: string;
  descripcio: string;
  tipus: "YouTube" | "RTVE" | "Enllaç";
  embedUrl?: string;
  urlExtern: string;
  etiqueta: string;
  color: string;
}

export const documentsVisuals: DocumentVisual[] = [
  {
    id: "angel-casas-tve",
    titol: "Documental d'Àngel Casas (TVE)",
    descripcio:
      "Reportatge televisiu que retrata l'efervescència de la sala Zeleste i l'Ona laietana, amb testimonis de primera mà del moviment barceloní dels 70.",
    tipus: "RTVE",
    embedUrl: "https://secure-embed.rtve.es/drmn/embed/video/6638249/",
    urlExtern: "https://www.rtve.es/play/",
    etiqueta: "RTVE Play",
    color: "#c86234",
  },
  {
    id: "canet-rock-1975",
    titol: "Concert Canet Rock 1975",
    descripcio:
      "Pau Riba, Sisa, Lole y Manuel, Orquestra Plateria, Iceberg i d'altres en l'edició fundacional del festival. Imatges en directe del cicle laietà al Complejo Egatop",
    tipus: "YouTube",
    embedUrl: "https://www.youtube.com/embed/SdzVPo4kgS0",
    urlExtern: "https://www.youtube.com/watch?v=SdzVPo4kgS0",
    etiqueta: "YouTube",
    color: "#d49b28",
  },
];

export const documentsVisualsEnllacos = [
  {
    nom: "Documental Àngel Casas — RTVE Play",
    url: "https://www.rtve.es/play/",
    tipus: "RTVE",
  },
  {
    nom: "Concert Canet Rock 1975 — YouTube",
    url: "https://www.youtube.com/watch?v=SdzVPo4kgS0",
    tipus: "YouTube",
  },
  {
    nom: "Música Laietana. Zeleste — Spotify",
    url: "https://open.spotify.com/album/3iKphHnXn5xLVzabQytEfR",
    tipus: "Spotify",
  },
  {
    nom: "Tribut a Zeleste i l'Ona Laietana — barcelona.cat",
    url: "https://www.barcelona.cat/barcelonacultura/en/barcelona-cultura/tribute-to-the-barcelona-of-zeleste-and-ona-laietana_1434464",
    tipus: "barcelona.cat",
  },
  {
    nom: "Primer encontre d'Ona Mediterrània — lwsn.net",
    url: "https://lwsn.net/musica/concerts/primer-encontre-de-ona-mediterrania/",
    tipus: "lwsn.net",
  },
  {
    nom: "Cartells — Concerts a Molins de Rei — lwsn.net",
    url: "https://lwsn.net/obra-grafica/cartells/concerts-a-molins-de-rei/",
    tipus: "lwsn.net · Cartells",
  },
];

// === Galeria de vídeos dels grups ===
export interface VideoGrup {
  id: string;
  grup: string;
  embedUrl: string;
  urlExtern: string;
}

export const galeriaVideos: VideoGrup[] = [
  {
    id: "fusioon-vid",
    grup: "Fusioon",
    embedUrl: "https://www.youtube.com/embed/YG4y7vI143g",
    urlExtern: "https://www.youtube.com/watch?v=YG4y7vI143g",
  },
  {
    id: "secta-sonica-vid",
    grup: "Secta Sònica",
    embedUrl: "https://www.youtube.com/embed/RLd0bU4oUoE",
    urlExtern: "https://www.youtube.com/watch?v=RLd0bU4oUoE",
  },
  {
    id: "maquina-vid",
    grup: "Màquina!",
    embedUrl: "https://www.youtube.com/embed/QUEtG3b-Soc",
    urlExtern: "https://www.youtube.com/watch?v=QUEtG3b-Soc",
  },
  {
    id: "mirasol-vid",
    grup: "Orquestra Mirasol",
    embedUrl: "https://www.youtube.com/embed/lh57ZzxmyVM",
    urlExtern: "https://www.youtube.com/watch?v=lh57ZzxmyVM",
  },
  {
    id: "dharma-vid",
    grup: "Companyia Elèctrica Dharma",
    embedUrl: "https://www.youtube.com/embed/KZ49VS7jf74",
    urlExtern: "https://www.youtube.com/watch?v=KZ49VS7jf74",
  },
  {
    id: "iceberg-vid",
    grup: "Iceberg",
    embedUrl: "https://www.youtube.com/embed/SwN2yZ8MduM",
    urlExtern: "https://www.youtube.com/watch?v=SwN2yZ8MduM",
  },
  {
    id: "gato-perez-vid",
    grup: "Gato Pérez",
    embedUrl: "https://www.youtube.com/embed/uZi-pOHFIU4",
    urlExtern: "https://www.youtube.com/watch?v=uZi-pOHFIU4",
  },
  {
    id: "toti-soler-vid",
    grup: "Toti Soler",
    embedUrl: "https://www.youtube.com/embed/gEa28CtNNzk",
    urlExtern: "https://www.youtube.com/watch?v=gEa28CtNNzk",
  },
  {
    id: "sabates-montoliu-vid",
    grup: "Jordi Sabatés i Tete Montoliu",
    embedUrl: "https://www.youtube.com/embed/9h9N_cgNGPg",
    urlExtern: "https://www.youtube.com/watch?v=9h9N_cgNGPg",
  },
  {
    id: "om-vid",
    grup: "Om (Toti Soler i Jordi Sabatés)",
    embedUrl: "https://www.youtube.com/embed/Y8oMDz3SUCw",
    urlExtern: "https://www.youtube.com/watch?v=Y8oMDz3SUCw",
  },
  {
    id: "musica-urbana-vid",
    grup: "Música Urbana",
    embedUrl: "https://www.youtube.com/embed/fp3dATVfAK0",
    urlExtern: "https://www.youtube.com/watch?v=fp3dATVfAK0",
  },
  {
    id: "barcelona-traction-vid",
    grup: "Barcelona Traction",
    embedUrl: "https://www.youtube.com/embed/Ajx41FaMm5o",
    urlExtern: "https://www.youtube.com/watch?v=Ajx41FaMm5o",
  },
  {
    id: "bueyes-madereros-vid",
    grup: "Bueyes Madereros",
    embedUrl: "https://www.youtube.com/embed/LlY3iZh18T8",
    urlExtern: "https://www.youtube.com/watch?v=LlY3iZh18T8",
  },
  {
    id: "esqueixada-sniff-vid",
    grup: "Esqueixada Sniff",
    embedUrl: "https://www.youtube.com/embed/LzCrqPiu_Gs",
    urlExtern: "https://www.youtube.com/watch?v=LzCrqPiu_Gs",
  },
  {
    id: "orquestra-plateria-vid",
    grup: "Orquestra Plateria",
    embedUrl: "https://www.youtube.com/embed/DHtT-C0SSzA",
    urlExtern: "https://www.youtube.com/watch?v=DHtT-C0SSzA",
  },
  {
    id: "pegasus-vid",
    grup: "Pegasus",
    embedUrl: "https://www.youtube.com/embed/jTRjBnWNQhs",
    urlExtern: "https://www.youtube.com/watch?v=jTRjBnWNQhs",
  },
  {
    id: "sisa-vid",
    grup: "Sisa",
    embedUrl: "https://www.youtube.com/embed/ExL9DTGk9hU",
    urlExtern: "https://www.youtube.com/watch?v=ExL9DTGk9hU",
  },
  {
    id: "pau-riba-vid",
    grup: "Pau Riba",
    embedUrl: "https://www.youtube.com/embed/j6eEgchoeLQ",
    urlExtern: "https://www.youtube.com/watch?v=j6eEgchoeLQ",
  },
];

export const llegat = {
  titol: "El llegat",
  introduccio:
    "Acabat el cicle laietà (tancament simbòlic el 1980 amb l'arribada de la Movida Madrilenya), la seva empremta perdura: en el postlaietanisme il·lustrat de Pegasus, en el naixement del Rock Català dels 90 i en la recuperació i homenatges dels segles XX i XXI.",
  hereus: [
    {
      nom: "Pegasus",
      descripcio:
        "Vuit discs entre 1982 i 1997 que portaren la fusió de Zeleste a festivals internacionals com Montreux i a bandes sonores per al cinema mut.",
    },
    {
      nom: "Rock Català (anys 90)",
      descripcio:
        "Sopa de Cabra, Sau, Sangtraït i Els Pets recullen el relleu d'una escena autòctona que l'Ona Laietana havia inaugurat dues dècades abans.",
    },
    {
      nom: "Recuperació i homenatges",
      descripcio:
        "Recopilatoris (Picap, 2009), tributs com el de 37 músics del 2024 i la memòria viva en fonts hemerogràfiques i enciclopèdiques revaloritzen el fenomen als segles XX i XXI.",
    },
  ],
  imatge: ["/laieta/vinyl.png", "/laieta/legacy.png"],
};

// === Fonts documentals consolidades (Annex 3) ===
export const fontsDocumentals = {
  primaries: [
    {
      titol: "El Rock Laietano: La Revolución Contracultural de Barcelona 1970–1980",
      tipus: "Font primària · Llibre",
      url: "https://www.google.com/search?q=%22El+Rock+Laietano%22+%22Revoluci%C3%B3n+Contracultural%22+Barcelona",
    },
    {
      titol:
        "Raíces de la Resistencia: Espacios, Figuras e Identidad en la Contracultura del Rock Laietano",
      tipus: "Font primària · Llibre",
      url: "https://www.google.com/search?q=%22Ra%C3%ADces+de+la+Resistencia%22+%22Rock+Laietano%22",
    },
  ] as FontDocumental[],
  secondaries: [
    {
      titol: "Barcelona, del rock progresivo a la música laietana",
      autor: "Àlex Gómez-Font",
      tipus: "Assaig",
      url: "https://www.amazon.com/Barcelona-progresivo-m%C3%BAsica-layetana-Zeleste/dp/8497434625",
    },
    {
      titol: "Premsa especialitzada en cultura underground i rock",
      detall: "Rockdelux, Onda Cero, El Nacional, La Vanguardia, Público, El Periódico",
      tipus: "Premsa especialitzada",
    },
    {
      titol: "Articles de memòria cultural sobre Zeleste i contracultura",
      detall:
        "EFEeme, The New Barcelona Post, Palau Robert, Fundació Joan Miró i entitats associades a la divulgació de la cultura barcelonina dels setanta",
      tipus: "Articles de memòria",
    },
    {
      titol: "Recursos enciclopèdics musicals i de memòria viva",
      detall:
        "La Fonoteca, Progarchives, Wikipedia, blogs especialitzats i fonts hemerogràfiques",
      tipus: "Recursos enciclopèdics",
    },
  ] as FontDocumental[],
};

export const fontsEnLinia: FontEnLinia[] = [
  {
    nom: "Viquipèdia — Música laietana",
    url: "https://ca.wikipedia.org/wiki/M%C3%BAsica_laietana",
    descripcio: "Article enciclopèdic de referència en català.",
  },
  {
    nom: "Cualia.es — La història de Zeleste i la música laietana (1973–1978)",
    url: "https://cualia.es/la-historia-de-zeleste-y-la-musica-layetana-1973-1978",
    descripcio: "Crònica detallada de Gernot Dudda (2019).",
  },
  {
    nom: "El Punt Avui — La història de Zeleste i l'Ona Laietana",
    url: "https://www.elpuntavui.cat/article/474780-la-historia-de-zeleste-i-lona-laietana.html",
    descripcio: "Article de Xavier Roca.",
  },
  {
    nom: "Spotify / Tidal — Música Laietana. Zeleste",
    url: "https://open.spotify.com/album/3iKphHnXn5xLVzabQytEfR",
    descripcio: "Recopilatori (Picap Records, 2009), 19 cançons, 2 h 01 min.",
  },
  {
    nom: "barcelona.cat — Tribut a Zeleste i l'Ona Laietana",
    url: "https://www.barcelona.cat/barcelonacultura/en/barcelona-cultura/tribute-to-the-barcelona-of-zeleste-and-ona-laietana_1434464",
    descripcio: "Espectacle tribut del 2024 amb 37 músics.",
  },
  {
    nom: "lwsn.net — Ona Mediterrània",
    url: "https://lwsn.net/",
    descripcio: "Arxiu digital sobre l'Ona Mediterrània: concerts, obra gràfica i cartells del moviment.",
  },
];

// === Bibliografia utilitzada ===
export interface ReferenciaBibliografica {
  id: string;
  autor: string;
  any: string;
  titol: string;
  tipus: string;
  editorial?: string;
  lloc?: string;
  url?: string;
}

export interface GrupBibliografic {
  id: string;
  titol: string;
  entrades: ReferenciaBibliografica[];
}

export const bibliografia: GrupBibliografic[] = [
  {
    id: "bib-monografies",
    titol: "Monografies i llibres de referència",
    entrades: [
      { id: "b1", autor: "Domínguez, Salvador", any: "2002", titol: "Bienvenido Mr. Rock. Los primeros grupos hispanos (1957-1975)", tipus: "Llibre", editorial: "Fundación Autor / SGAE", lloc: "Madrid" },
      { id: "b2", autor: "Domínguez, Salvador", any: "2004", titol: "Los hijos del rock. Los grupos hispanos (1975-1989)", tipus: "Llibre", editorial: "Fundación Autor / SGAE", lloc: "Madrid" },
      { id: "b3", autor: "Fouce, Héctor", any: "2006", titol: "El futuro ya está aquí. Música pop y cambio cultural en España (1978-1985)", tipus: "Llibre", editorial: "Velecio Editores", lloc: "Madrid" },
      { id: "b4", autor: "Gómez-Font, Àlex", any: "2008", titol: "Zeleste i la música laietana. Un passeig per la Barcelona musical dels anys setanta", tipus: "Llibre", editorial: "Pagès Editors", lloc: "Lleida" },
      { id: "b5", autor: "Gómez-Font, Àlex", any: "2011", titol: "Barcelona, del rock progresivo a la música layetana y Zeleste", tipus: "Llibre", editorial: "Editorial Milenio", lloc: "Lleida", url: "https://www.amazon.com/Barcelona-progresivo-m%C3%BAsica-layetana-Zeleste/dp/8497434625" },
      { id: "b6", autor: "Gonzalo, Jaime", any: "2013", titol: "La Ciudad Secreta. Sonidos experimentales en la Barcelona pre-olímpica 1971-1991", tipus: "Llibre", editorial: "Munster Records / Distrolux", lloc: "Madrid" },
      { id: "b7", autor: "Joni D. [Jesús Sahún]", any: "2010", titol: "Que pagui Pujol! Una crònica punk de la Barcelona dels 80", tipus: "Llibre", editorial: "La Ciutat Invisible Edicions", lloc: "Barcelona" },
      { id: "b8", autor: "Llansamà, Jordi", any: "2011", titol: "Harto de todo. Historia oral del punk en la ciudad de Barcelona (1979-1987)", tipus: "Llibre", editorial: "BCore Disc", lloc: "Barcelona" },
      { id: "b9", autor: "Malvido, Pau", any: "2004", titol: "Nosotros los malditos", tipus: "Llibre", editorial: "Editorial Anagrama", lloc: "Barcelona" },
      { id: "b10", autor: "Ordovás, Jesús", any: "1977", titol: "De qué va el Rrollo", tipus: "Llibre", editorial: "Editorial La Piqueta", lloc: "Madrid" },
      { id: "b11", autor: "Ordovás, Jesús", any: "1987", titol: "Historia de la música pop española", tipus: "Llibre", editorial: "Alianza Editorial", lloc: "Madrid" },
      { id: "b12", autor: "Papo, Alfredo", any: "1985", titol: "El jazz a Catalunya", tipus: "Llibre", editorial: "Edicions 62 / Llibres a l'Abast", lloc: "Barcelona" },
      { id: "b13", autor: "Quaggio, Giulia", any: "2014", titol: "La cultura en Transición. Reconciliación y política cultural en España, 1976-1986", tipus: "Llibre", editorial: "Alianza Editorial", lloc: "Madrid" },
      { id: "b14", autor: "Ribas, José", any: "2007", titol: "Los 70 a destajo: Ajoblanco y libertad", tipus: "Llibre", editorial: "RBA Libros", lloc: "Barcelona" },
      { id: "b15", autor: "Sierra i Fabra, Jordi", any: "1977", titol: "Història i poder del rock català", tipus: "Llibre", editorial: "Ediciones Edicomunicación [Reeditat per Enderrock, 2007]", lloc: "Barcelona" },
      { id: "b16", autor: "Val Ripollés, Fernán del", any: "2017", titol: "Rockeros insurgentes, modernos complacientes: juventud, rock y política en España (1975-1985)", tipus: "Llibre", editorial: "Fundación SGAE", lloc: "Madrid" },
      { id: "b17", autor: "Vilarós, Teresa M.", any: "1998", titol: "El mono del desencanto. Una crítica cultural de la Transición española (1973-1993)", tipus: "Llibre", editorial: "Siglo XXI de España Editores", lloc: "Madrid" },
    ],
  },
  {
    id: "bib-capitols",
    titol: "Capítols de llibres i catàlegs d'exposicions",
    entrades: [
      { id: "c1", autor: "Guillamon, J.; Nubla, V.; Riba, P. (coords.)", any: "1995", titol: "Alter Músiques Natives", tipus: "Catàleg", editorial: "Generalitat de Catalunya, Departament de Cultura (KRTU)", lloc: "Barcelona" },
      { id: "c2", autor: "Mainer, José-Carlos", any: "2006", titol: "La cultura de la Transición o la Transición como cultura", tipus: "Capítol", editorial: "Ediciones Península", lloc: "Barcelona" },
      { id: "c3", autor: "Turtós, Jordi", any: "1995", titol: "Progressius i laietans", tipus: "Capítol", editorial: "Generalitat de Catalunya, Departament de Cultura", lloc: "Barcelona" },
    ],
  },
  {
    id: "bib-articles",
    titol: "Articles de revistes acadèmiques",
    entrades: [
      { id: "a1", autor: "Gómez Vaquero, Laura", any: "2014", titol: "From Political to Industrial Vindication: Culture during the Spanish Transition through the Analysis of Three Music Documentaries", tipus: "Article", editorial: "Kamchatka. Revista de análisis cultural, 4", lloc: "pp. 9-35" },
      { id: "a2", autor: "Iglesias, Iván", any: "2024", titol: "Cosmopolitismo e hibridación en la música popular barcelonesa: la ona laietana (1973-1979)", tipus: "Article", editorial: "Debats. Revista de cultura, poder y sociedad, 138(1)", lloc: "pp. 27-44" },
      { id: "a3", autor: "Val Ripollés, F.; Martín Pérez Colman, C.", any: "2024", titol: "¿El rock ha muerto? ¡Viva la sociología del rock!", tipus: "Article", editorial: "Debats. Revista de cultura, poder y sociedad, 138(1)", lloc: "pp. 7-17" },
    ],
  },
  {
    id: "bib-tesis",
    titol: "Tesis doctorals i treballs acadèmics",
    entrades: [
      { id: "t1", autor: "Arribas García, Miguel", any: "2015", titol: "El jazz en Barcelona durante la Transición Española (1975-1982)", tipus: "TFM", editorial: "Universidad de Valladolid" },
      { id: "t2", autor: "Erra Picas, Jordi", any: "2014", titol: "El rock progressiu a Catalunya (1969-1973): La contracultura a principis dels anys setanta", tipus: "TFG", editorial: "Universitat de Barcelona" },
      { id: "t3", autor: "Güell Pagès, Pol", any: "2016", titol: "Barcelona 1970-1980: Un viatge per la contracultura i l'Ona Laietana", tipus: "TFG", editorial: "Universitat Autònoma de Barcelona" },
      { id: "t4", autor: "Muriana Reig, Ivan", any: "2017", titol: "La Catalunya punk: Una aproximació a l'articulació i desenvolupament del punk a Catalunya", tipus: "TFG", editorial: "Universitat Oberta de Catalunya (UOC)" },
      { id: "t5", autor: "Posa Guinea, Pablo", any: "2010", titol: "La música progresiva y underground en Barcelona: Una revisión musicológica", tipus: "Llibre", editorial: "Bubok Publishing", lloc: "Madrid" },
      { id: "t6", autor: "Val Ripollés, Fernán del", any: "2014", titol: "Rockeros insurgentes, modernos complacientes: juventud, rock y política en España (1975-1985)", tipus: "Tesi doctoral", editorial: "Universidad Complutense de Madrid" },
    ],
  },
  {
    id: "bib-premsa",
    titol: "Premsa històrica i publicacions periòdiques (Hemeroteca)",
    entrades: [
      { id: "p1", autor: "—", any: "1974-1980", titol: "Ajoblanco", tipus: "Revista", editorial: "Barcelona" },
      { id: "p2", autor: "—", any: "1975-1979", titol: "Disco Exprés", tipus: "Revista", editorial: "Pamplona/Madrid" },
      { id: "p3", autor: "—", any: "1994", titol: "El Temps", tipus: "Revista", editorial: "València" },
      { id: "p4", autor: "—", any: "1983-1985", titol: "La Luna de Madrid", tipus: "Revista", editorial: "Madrid" },
      { id: "p5", autor: "—", any: "1975-1979", titol: "Ozono", tipus: "Revista", editorial: "Madrid" },
      { id: "p6", autor: "—", any: "1973-1985", titol: "Popular 1", tipus: "Revista", editorial: "Barcelona" },
      { id: "p7", autor: "—", any: "1978-1981", titol: "Sal Común", tipus: "Revista", editorial: "Barcelona" },
      { id: "p8", autor: "—", any: "1974-1980", titol: "Star", tipus: "Revista", editorial: "Barcelona" },
      { id: "p9", autor: "—", any: "1974-1981", titol: "Vibraciones", tipus: "Revista", editorial: "Barcelona" },
    ],
  },
  {
    id: "bib-audiovisual",
    titol: "Documentals i fons audiovisuals",
    entrades: [
      { id: "d1", autor: "Arasanz, Daniel (dir.)", any: "2010", titol: "Venid a las cloacas. La historia de La Banda Trapera del Río", tipus: "Documental", editorial: "Magoproduction" },
      { id: "d2", autor: "Bellmunt, Francesc (dir.)", any: "1975", titol: "Canet Rock", tipus: "Documental", editorial: "Profilmes" },
      { id: "d3", autor: "Morrosko Vila-San-Juan (dir.)", any: "2010", titol: "Barcelona era una festa (underground 1970–1980)", tipus: "Documental TV", editorial: "TV3 / Séptimo Elemento" },
      { id: "d4", autor: "Turtós, Jordi (dir.)", any: "2011", titol: "To de re per a mandolina i clarinet", tipus: "Documental TV", editorial: "Televisió de Catalunya (TV3)" },
      { id: "d5", autor: "Dudda, Gernot", any: "2019", titol: "La historia de Zeleste y la música layetana (1973–1978)", tipus: "Web", editorial: "Cualia.es", url: "https://cualia.es/la-historia-de-zeleste-y-la-musica-layetana-1973-1978" },
      { id: "d6", autor: "Roca, Xavier", any: "2011", titol: "La història de Zeleste i l'Ona Laietana", tipus: "Article", editorial: "El Punt Avui", url: "https://www.elpuntavui.cat/article/474780-la-historia-de-zeleste-i-lona-laietana.html" },
      { id: "d7", autor: "Ayuntamiento de Barcelona", any: "2024", titol: "Tribute to the Barcelona of Zeleste and Ona Laietana [espectacle amb 37 músics]", tipus: "Web", editorial: "barcelona.cat", url: "https://www.barcelona.cat/barcelonacultura/en/barcelona-cultura/tribute-to-the-barcelona-of-zeleste-and-ona-laietana_1434464" },
    ],
  },
  {
    id: "bib-discografia",
    titol: "Discografia de referència seleccionada",
    entrades: [
      { id: "di1", autor: "Companyia Elèctrica Dharma", any: "1975", titol: "Diumenge [LP]", tipus: "LP", editorial: "Zeleste / Edigsa", lloc: "Barcelona" },
      { id: "di2", autor: "Ia & Batiste", any: "1975", titol: "Chichonera's Cat [LP]", tipus: "LP", editorial: "Òliva / Edigsa", lloc: "Barcelona" },
      { id: "di3", autor: "Màquina!", any: "1970", titol: "Why? [LP]", tipus: "LP", editorial: "Diábolo / Als 4 Vents", lloc: "Barcelona" },
      { id: "di4", autor: "Música Dispersa", any: "1970", titol: "Música Dispersa [LP]", tipus: "LP", editorial: "Diábolo / Als 4 Vents", lloc: "Barcelona" },
      { id: "di5", autor: "Música Urbana", any: "1976", titol: "Música Urbana [LP]", tipus: "LP", editorial: "Zeleste / Edigsa", lloc: "Barcelona" },
      { id: "di6", autor: "Orquestra Mirasol", any: "1974", titol: "Salsa catalana [LP]", tipus: "LP", editorial: "Zeleste / Edigsa", lloc: "Barcelona" },
      { id: "di7", autor: "Pau Riba", any: "1970", titol: "Diòptria I [LP]", tipus: "LP", editorial: "Concèntric", lloc: "Barcelona" },
      { id: "di8", autor: "Secta Sònica", any: "1976", titol: "Fred Pedralbes [LP]", tipus: "LP", editorial: "Zeleste / Edigsa", lloc: "Barcelona" },
      { id: "di9", autor: "Sisa", any: "1975", titol: "Qualsevol nit pot sortir el sol [LP]", tipus: "LP", editorial: "Zeleste / Edigsa", lloc: "Barcelona" },
      { id: "di10", autor: "Diversos Autors", any: "2009", titol: "Música Laietana – Zeleste [2 CD Compilation]", tipus: "Recopilatori", editorial: "Picap Records", lloc: "Barcelona", url: "https://open.spotify.com/album/3iKphHnXn5xLVzabQytEfR" },
    ],
  },
];

// === Les persones indispensables (fora de l'escenari) ===
export type CategoriaPersona =
  | "Gestió i producció"
  | "Imatge i escenografia"
  | "Publicacions i crònica"
  | "Memòria i recuperació";

export interface Persona {
  id: string;
  nom: string;
  funcio: string;
  categoria: CategoriaPersona;
  bio: string;
  destacar?: boolean;
  tags?: string[];
  color: string;
  url?: string;
}

export const personesIntro = {
  titol: "Les persones indispensables",
  subtitol: "Fora de l'escenari",
  lede: "Cap ecosistema contracultural no es sosté sense una estructura. A l'Ona Laietana, el nucli visible no era l'estrella: eren els qui fabricaven les condicions perquè l'estrella existís.",
  categories: [
    "Gestió i producció",
    "Imatge i escenografia",
    "Publicacions i crònica",
    "Memòria i recuperació",
  ] as CategoriaPersona[],
};

export const persones: Persona[] = [
  // --- 6.8.1 Gestió i producció musical ---
  {
    id: "victor-jou",
    nom: "Víctor Jou",
    funcio: "Fundador i motor de Zeleste",
    categoria: "Gestió i producció",
    bio:
      "La seva aposta personal —programació diària, el mitjà de casa-club, serveis tècnics propis i logística de gira— va ser l'aïllament empresarial que el règim no oferia. Sense Jou, no hi ha moviment: construeix l'ecosistema on la fusió es fa possible.",
    destacar: true,
    tags: ["Zeleste", "Programació", "Logística"],
    color: "#f59e0b",
    url: "https://es.wikipedia.org/wiki/Zeleste",
  },
  {
    id: "rafael-moll",
    nom: "Rafael Moll",
    funcio: "Productor i director executiu (Edigsa / Gasa)",
    categoria: "Gestió i producció",
    bio:
      "La mà industrial de Sisa, de la línia Zeleste-Edigsa i de bona part de les gravacions clau. El seu criteri tècnic i empresarial va fer professional allò que era artesà i donà al fenomen la solidesa d'una veritable discografia.",
    destacar: true,
    tags: ["Edigsa", "Gasa", "Producció"],
    color: "#e11d48",
    url: "https://cualia.es/la-historia-de-zeleste-y-la-musica-layetana-1973-1978",
  },
  {
    id: "josep-maria-espinals",
    nom: "Josep Maria Espinàs",
    funcio: "Escriptor, cronista i executiu a Edigsa",
    categoria: "Gestió i producció",
    bio:
      "Escriptor i cronista de la gauche divine que exercí funcions executives dins Edigsa. Anys més tard publicà unes memòries sobre la sala Zeleste, convertint en literatura el testimoni de primera mà.",
    tags: ["Gauche divine", "Edigsa", "Memòries"],
    color: "#d97706",
    url: "https://ca.wikipedia.org/wiki/Josep_Maria_Espin%C3%A0s",
  },
  {
    id: "santiago-roqueta",
    nom: "Santiago Roqueta",
    funcio: "Arquitecte del projecte inicial de Zeleste",
    categoria: "Gestió i producció",
    bio:
      "Arquitecte del projecte inicial de Zeleste: dona forma física a la intuïció de Jou. La sala com a espai —la seva acústica, la seva atmosfera— neix del seu traç.",
    tags: ["Arquitectura", "Espai"],
    color: "#b45309",
    url: "https://cualia.es/la-historia-de-zeleste-y-la-musica-layetana-1973-1978",
  },
  {
    id: "pebrots-la-trinca",
    nom: "Pebrots / La Trinca",
    funcio: "Estructura promotora i saber-faire teatral",
    categoria: "Gestió i producció",
    bio:
      "Josep Maria Mainat i els seus socis aportaren a Canet Rock l'estructura promotora, la infraestructura i el savoir-faire teatral: una prova més que a Barcelona la contracultura musical i l'espectacle festiu treballaven a l'espai.",
    tags: ["Canet Rock", "Promoció", "Teatre"],
    color: "#9a3412",
    url: "https://ca.wikipedia.org/wiki/La_Trinca",
  },
  {
    id: "gemma-estudis",
    nom: "Gemma Estudis (Sant Cugat)",
    funcio: "Estudi de gravació de referència",
    categoria: "Gestió i producció",
    bio:
      "L'estudi de Sant Cugat on es registraren discos cabdals. Els tècnics habituals donaren a les bandes una qualitat d'enregistrament comparable a la del mercat anglès.",
    tags: ["Estudi", "Sant Cugat", "So"],
    color: "#a16207",
  },
  // --- 6.8.2 Imatge i escenografia ---
  {
    id: "miquel-angel-llopart",
    nom: "Miquel Àngel Llopart",
    funcio: "Escenògraf, cartellista i artista visual",
    categoria: "Imatge i escenografia",
    bio:
      "Figura central de la imatge de Zeleste, dels espectacles de Sisa i dels cartells de l'ona. El llenguatge plàstic del moviment —psicodèlic, teatral, barroc— li deu molt.",
    destacar: true,
    tags: ["Cartells", "Escenografia", "Sisa"],
    color: "#92400e",
  },
  {
    id: "pau-riba-visual",
    nom: "Pau Riba (autor visual)",
    funcio: "Cartell polèmic per a Canet Rock",
    categoria: "Imatge i escenografia",
    bio:
      "El dossier consigna també un cartell polèmic seu per a Canet Rock, motiu de conflicte amb l'Església: la vessant visual i provocadora d'un autor també fonamental en la música.",
    tags: ["Canet Rock", "Cartell", "Polèmica"],
    color: "#ca8a04",
  },
  // --- 6.8.3 Publicacions, ràdio i crònica ---
  {
    id: "pepe-ribas",
    nom: "Pepe Ribas",
    funcio: "L'editor contracultural",
    categoria: "Publicacions i crònica",
    bio:
      "Revistes Ajoblanco i Star, llibres, còmic (El Rollo enmascarado i el circuit del còmic del underground nacional). Testimoni clau en exposicions posteriors i gran teixidor de la xarxa underground.",
    destacar: true,
    tags: ["Ajoblanco", "Star", "Còmic"],
    color: "#fbbf24",
    url: "https://ca.wikipedia.org/w/index.php?search=Pepe+Ribas+Ajoblanco",
  },
  {
    id: "pere-pons",
    nom: "Pere Pons",
    funcio: "Periodista i cronista de la gauche divine",
    categoria: "Publicacions i crònica",
    bio:
      "Periodista i autor, cronista de la gauche divine, citat a la primera font amb anàlisi del discurs «vampíric» de l'escena.",
    tags: ["Crònica", "Gauche divine"],
    color: "#b45309",
  },
  {
    id: "vazquez-montalban-terenci-moix",
    nom: "Vázquez Montalbán i Terenci Moix",
    funcio: "Intel·lectualització de l'escena",
    categoria: "Publicacions i crònica",
    bio:
      "Mitjançant articles i columnes, intel·lectualitzaren l'escena i donaren a l'ona la validació del discurs literari i sociològic que, d'altra manera, no hauria estat llegida només com a moda jove.",
    tags: ["Crítica", "Literatura", "Sociologia"],
    color: "#854d0e",
    url: "https://ca.wikipedia.org/wiki/Manuel_V%C3%A1zquez_Montalb%C3%A1n",
  },
  {
    id: "radios-mitjans",
    nom: "Ràdios i mitjans",
    funcio: "Megàfon i eclipsament",
    categoria: "Publicacions i crònica",
    bio:
      "La primera font subratlla el rol negatiu del pes mediàtic madrileny (Jesús Ordovás, Gonzalo Garrido) en l'eclipsament de Barcelona; per contra, alguns programes radiofònics de Ràdio Barcelona van fer de megàfon de l'escena local durant la tardor del moviment.",
    tags: ["Ràdio Barcelona", "Ordovás", "Garrido"],
    color: "#78350f",
    url: "https://es.wikipedia.org/wiki/Jes%C3%BAs_Ordov%C3%A1s",
  },
  {
    id: "fotografs",
    nom: "Fotògrafs de l'època",
    funcio: "Iconografia de la nit de Barcelona",
    categoria: "Publicacions i crònica",
    bio:
      "Colita, Manolo Laguillo i Manuel H. Huguet, entre d'altres, fixaren la iconografia de la nit de Barcelona i deliren a l'escena la memòria visual que encara avui la identifica.",
    tags: ["Colita", "Laguillo", "Huguet"],
    color: "#a1582c",
    url: "https://ca.wikipedia.org/wiki/Colita",
  },
  // --- 6.8.4 Memòria i recuperació ---
  {
    id: "alex-gomez-font",
    nom: "Àlex Gómez-Font",
    funcio: "Text fundacional del renaixement historiogràfic",
    categoria: "Memòria i recuperació",
    bio:
      "Autor de Barcelona, del rock progressiu a la música laietana (2011): el text fundacional del renaixement historiogràfic del fenomen i punt de partida de la seva revalorització contemporània.",
    destacar: true,
    tags: ["2011", "Historiografia"],
    color: "#f59e0b",
    url: "https://www.amazon.com/Barcelona-progresivo-m%C3%BAsica-layetana-Zeleste/dp/8497434625",
  },
  {
    id: "auditori-2022",
    nom: "Concerts de l'Auditori (2022) i homenatges",
    funcio: "Memòria viva de la ciutat",
    categoria: "Memòria i recuperació",
    bio:
      "Els concerts de l'Auditori del 2022 i els homenatges posteriors han convertit aquest patrimoni en memòria viva de la ciutat: el cicle laietà revisitat i celebrat al segle XXI.",
    tags: ["Auditori 2022", "Homenatges"],
    color: "#fbbf24",
    url: "https://www.barcelona.cat/barcelonacultura/en/barcelona-cultura/tribute-to-the-barcelona-of-zeleste-and-ona-laietana_1434464",
  },
];

// === Cartografia exhaustiva del moviment ===
export interface FitxaCartografia {
  id: string;
  nom: string;
  tipus: string;
  text: string;
  avis?: string;
  tags?: string[];
  color: string;
}

export interface Collectiu {
  id: string;
  nom: string;
  relacio: string;
  text: string;
  tags?: string[];
  color: string;
}

export const cartografia = {
  titol: "Cartografia exhaustiva del moviment",
  subtitol: "Bandes, col·lectius i projectes satèl·lits",
  apunt:
    "La ona va ser una constel·lació, no l'òrbita d'una estrella central. Grans solistes (Riba, Sisa), grans formacions de fusió (Dharma, Iceberg), projectes de ball cultiu (Plateria), combos d'estudi (Esqueixada Sniff, Música Dispersa), col·lectius teatrals (Grup de Folk) i veus autòctones limítrofes (Gato, Ovidi) van compartir els mateixos escenaris, els mateixos segells i el mateix públic.",
  nucli: {
    etiqueta: "Nucli discogràfic",
    sub: "Línia Zeleste-Edigsa, segons la font primera",
    centre: "Zeleste-Edigsa",
    bandes: [
      "Barcelona Traction",
      "Companyia Elèctrica Dharma",
      "Música Dispersa",
      "Orquestra Mirasol",
      "Jaume Sisa",
      "Jordi Sabatés",
      "Esqueixada Sniff",
      "Gato Pérez",
    ],
  },
  fitxes: [
    {
      id: "barcelona-traction-fx",
      nom: "Barcelona Traction",
      tipus: "Art-pop",
      text:
        "Dúo de pop barroca amb LP homònim (1975) dins la línia de la sala. La seva «Els carrusells de la calvície» és potser la cançó laietana de major reedició posterior: folk-fantasmagòric, veus superposades, un mite de l'Sgt. Pepper's de la Vall d'Hebron. Obra de culte tardà que resumeix la voluntat d'art-pop del moviment.",
      tags: ["LP 1975", "Art-pop", "Culte tardà"],
      color: "#f59e0b",
    },
    {
      id: "musica-dispersa-fx",
      nom: "Música Dispersa",
      tipus: "Combo instrumental",
      text:
        "Combo instrumental adscrit al mateix segell, amb material editat a Zeleste-Edigsa que lliga progressiu, jazz i melodies locals. Representa l'ala més anònima —i per tant més honesta— del cercle: música d'estudi i directes de qualitat, sense estrelatge mediàtic.",
      tags: ["Instrumental", "Estudi", "Sense estrelatge"],
      color: "#d97706",
    },
    {
      id: "orquestra-mirasol-fx",
      nom: "Orquestra Mirasol",
      tipus: "Folk i acompanyament",
      text:
        "Formació de folk i acompanyament vinculada decisivament a la modernització del discurs de Maria del Mar Bonet —amb ella, el seu disc Maria del Mar (1974) va fer confluir la cançó mediterrània i l'elèctric experimental—, publicada també dins el món de l'Edigsa. La Mirasol és la prova que l'ona laietana comparteix ADN amb certes franges de la Nova Cançó electrificada.",
      tags: ["Maria del Mar (1974)", "Nova Cançó electrificada"],
      color: "#e11d48",
    },
    {
      id: "slobo-secta-fx",
      nom: "Slobo i Secta Sònica",
      tipus: "Formacions prèvies",
      text:
        "Les dues formacions prèvies en què va militar Gato Pérez, exemples de la primera onada psicodèlica barcelonina que va donar pas a l'ona propiament dita.",
      tags: ["Gato Pérez", "Primera onada psicodèlica"],
      color: "#9a3412",
    },
  ] as FitxaCartografia[],
  collectius: [
    {
      id: "grup-de-folk",
      nom: "Grup de Folk",
      relacio: "Tribu primigènia",
      text:
        "La tribu primigènia —Ovidi Montllor, Jaume Sisa i Pau Riba, Oriol Tramvia, Carles Flavià, Josep Carles Cases i Anna Maria Camps, entre altres— que, a imitació de Dylan i del freak folk anglosaxó, van normalitzar el català de l'escena experimental, amb recitals multitudinaris al Parc de la Ciutadella i una lírica de protesta descomplexada.",
      tags: ["Dylan", "Parc de la Ciutadella", "Freak folk"],
      color: "#ca8a04",
    },
    {
      id: "maria-del-mar-bonet",
      nom: "Maria del Mar Bonet",
      relacio: "Frontera Nova Cançó ↔ ona laietana",
      text:
        "Des de la seva base balear, la seva connexió amb la Mirasol i el seu disc electrificat de 1974 la situen en la frontera entre Nova Cançó i ona laietana.",
      tags: ["Balear", "Disc 1974"],
      color: "#b45309",
    },
    {
      id: "llach-raimon",
      nom: "Lluís Llach i Raimon",
      relacio: "Referents en l'imaginari compartit",
      text:
        "No pertanyen a l'ona laietana, però l'aparició en contextos compartits (festivals, públic jove, normalització del català en concerts massius) els situa com a referents en el mateix imaginari de generacionalisme i repressió.",
      tags: ["Festivals", "Concerts massius"],
      color: "#92400e",
    },
    {
      id: "ovidi-montllor",
      nom: "Ovidi Montllor",
      relacio: "Figura bisagra",
      text:
        "La figura bisagra. Des del País Valencià però amb un vincle constant amb Barcelona —les seves col·laboracions amb Toti Soler, els seus recitals amb Flavià, la radicalitat formal de treballs com A L'Oriol (1972) i Ia (1973)—, encarna la fusió entre cançó de resistència i experimentació pop, precisament el que volia ser l'ona.",
      tags: ["A L'Oriol (1972)", "Ia (1973)", "Toti Soler"],
      color: "#7c2d12",
    },
  ] as Collectiu[],
};

// === Ruta musical per la Barcelona dels Setanta ===
export type RutaStatus = "existent" | "historic" | "transformat";
export type RutaTipus =
  | "sala"
  | "estudi"
  | "festival"
  | "teatre"
  | "espai_public"
  | "segell"
  | "club"
  | "discoteca";

export interface RutaLocation {
  id: string;
  nom: string;
  adreca: string;
  lat: number;
  lng: number;
  barri: string;
  status: RutaStatus;
  tipus: RutaTipus;
  anysActius: string;
  anyObertura?: number;
  anyTancament?: number;
  rellevancia: string;
  contextHistoric: string;
  artistesRelacionats: string[];
  foto?: string;
  fotoCaption?: string;
  ordreRuta?: number;
  noRuta?: boolean;
  linkExtern?: string;
}

export const rutaMusical = {
  titol: "Ruta musical per la Barcelona dels Setanta",
  subtitol: "Seguint els passos de l'Ona Laietana",
  intro:
    "La ona laietana no va ser un so: va ser un paisatge. Sales de concerts, estudis de gravació, segells, teatres, places i platges van formar una geografia cultural que es pot recórrer encara avui, seguint els passos dels qui van obrir el camí. Aquest mapa aixeca els 14 punts neuràlgics del moviment —els que sobreviuen, els que es van transformar i els que van desaparèixer— i proposa una ruta temàtica a peu pel centre de Barcelona, des de la plaça de Catalunya fins al carrer de l'Argenteria.",
  llegenda: {
    existent: "Encara existeix / actiu",
    historic: "Històric / desaparegut",
    transformat: "Transformat / reutilitzat",
  },
  ruta: {
    titol: "Seguint els passos de l'Ona Laietana",
    sub:
      "Ruta a peu pel centre de Barcelona · ~4,5 km · 10 parades · 1 tarda",
    descripcio:
      "Des de la plaça de Catalunya baixem per la Rambla fins al mar, pugem pel Born fins a la sala Zeleste, passem per l'edifici d'Edigsa, la discoteca Bocaccio, el Parc de la Ciutadella i els teatres que van programar la ona. Cada parada afegeix una capa de context històric: la Barcelona preolímpica, sota la dictadura i la transició, on el català i la fusió van néixer plegats.",
  },
  locations: [
    {
      id: "pl-catalunya",
      nom: "Plaça de Catalunya",
      adreca: "Plaça de Catalunya, 08002 Barcelona",
      lat: 41.3870,
      lng: 2.1700,
      barri: "Eixample / Ciutat Vella",
      status: "existent",
      tipus: "espai_public",
      anysActius: "Punt de trobada permanent",
      rellevancia:
        "El gran fòrum urbà on els joves de la contracultura barcelonina es trobaven abans i després dels concerts. Centre neuràlgic de la Barcelona que veia néixer la ona: el lloc on passava el trànsit entre l'Eixample burgès i la Rambla lúdica, i on els fans de Sisa, Riba i Dharma es reconeixien entre la multitud.",
      contextHistoric:
        "Punt de partida natural de la ruta. El 1970 la plaça ja feia dècades que era el cor de la ciutat i, amb l'arribada de la democràcia, esdevindria escenari de grans concerts i manifestacions. Per la ona laietana va ser abans que res un punt de trobada: el lloc on començava tota sortida cultural.",
      artistesRelacionats: ["Jaume Sisa", "Pau Riba", "Companyia Elèctrica Dharma"],
      ordreRuta: 1,
      linkExtern: "https://ca.wikipedia.org/wiki/Pla%C3%A7a_de_Catalunya_(Barcelona)",
    },
    {
      id: "edigsa",
      nom: "Edigsa — seus discogràfica",
      adreca: "Rambla de Catalunya, cantonada Gran Via de les Corts Catalanes (Pelleteria Sibèria), Barcelona",
      lat: 41.3872,
      lng: 2.1616,
      barri: "Eixample (Dreta de l'Eixample)",
      status: "historic",
      tipus: "segell",
      anyObertura: 1961,
      anyTancament: 1984,
      anysActius: "1961–1984",
      rellevancia:
        "L'Editora General Societat Anònima va ser el segell que va fer possible tota la Nova Cançó i, amb ella, l'ona laietana. Constituïda davant notari el 29 de maig de 1961 a la Pellateria Sibèria d'aquesta cantonada, va editar els primers discs de Sisa, Riba, Dharma, Màquina!, Iceberg, Sabatés, Gato Pérez i molts altres. El 1984, amb la dissolució de l'empresa, el fons va passar a ser gestionat per Picap, que encara avui custodia el catàleg laietana.",
      contextHistoric:
        "Segon pas de la ruta. La cantonada avui és un edifici d'oficines; però la història del segell que va donar veu al català a la cançó moderna va començar aquí. Els primers 45 rpm de la Nova Cançó (Els Segadors, 1961) i els primers LP laietans (Why?, 1972) porten la marca Edigsa.",
      artistesRelacionats: [
        "Màquina!",
        "Companyia Elèctrica Dharma",
        "Iceberg",
        "Jaume Sisa",
        "Pau Riba",
        "Gato Pérez",
        "Jordi Sabatés",
      ],
      ordreRuta: 2,
      linkExtern: "https://ca.wikipedia.org/wiki/Edigsa",
    },
    {
      id: "palau-musica",
      nom: "Palau de la Música Catalana",
      adreca: "Carrer Palau de la Música, 4-6, 08003 Barcelona",
      lat: 41.3855,
      lng: 2.1807,
      barri: "Sant Pere / Ciutat Vella",
      status: "existent",
      tipus: "teatre",
      anyObertura: 1908,
      anysActius: "Des de 1908",
      rellevancia:
        "Modernista, dissenyat per Domènech i Montaner, va acollir algunes de les vetllades més emblemàtiques de la Nova Cançó i, posteriorment, actuacions memorables de figures bisagra de la ona com Maria del Mar Bonet, Ovidi Montllor i Tete Montoliu. Tot i no ser la sala natural del rock laietà, va ser l'escenari institucional de les trobades entre la cançó tradicional i la modernitat elèctrica.",
      contextHistoric:
        "Tercera parada de la ruta. Construït el 1908 com a seu de l'Orfeó Català, el Palau era —i és— el gran saló musical del catalanisme. Quan la ona va començar a programar concerts més ambiciosos, aquest escenari va acollir algunes nits memorables.",
      artistesRelacionats: ["Maria del Mar Bonet", "Ovidi Montllor", "Tete Montoliu"],
      ordreRuta: 3,
      linkExtern: "https://ca.wikipedia.org/wiki/Palau_de_la_M%C3%BAsica_Catalana",
    },
    {
      id: "bocaccio",
      nom: "Discoteca Bocaccio",
      adreca: "Carrer de Muntaner, 505, 08022 Barcelona",
      lat: 41.3945,
      lng: 2.1565,
      barri: "Sant Gervasi / Eixample",
      status: "historic",
      tipus: "discoteca",
      anyObertura: 1967,
      anyTancament: 1985,
      anysActius: "1967–1985",
      rellevancia:
        "La cova de la gauche divine. Inaugurada per Oriol Regàs el 13 de febrer de 1967 al soterrani del número 505 del carrer de Muntaner, va ser el temple nocturn de la burgesia progressista barcelonina: cantants, actors, arquitectes, dissenyadors, editors i músics que compartien còctels, disbauxa i projectes. Molts artistes de la ona hi eren habituals, i bona part dels projectes discogràfics i teatrals dels anys setanta van néixer a les seves taules.",
      contextHistoric:
        "Quarta parada de la ruta (desviació per l'Eixample). La gauche divine no va ser un moviment musical, però sí la xarxa social que va sostenir la ona: el mateix Víctor Jou de Zeleste, els germans Regàs, Teresa Cunillé i molts artistes laietans eren clients habituals. La discoteca va tancar el juliol de 1985, just quan la ona ja s'apagava.",
      artistesRelacionats: ["Oriol Regàs", "Jaume Sisa", "Maria del Mar Bonet"],
      ordreRuta: 4,
      foto: "/laieta/ruta-bocaccio.png",
      fotoCaption: "Soterrani del carrer de Muntaner, 505: el temple de la gauche divine (1967–1985).",
      linkExtern: "https://es.wikipedia.org/wiki/Bocaccio_(discoteca)",
    },
    {
      id: "teatre-principal",
      nom: "Teatre Principal",
      adreca: "La Rambla, 27, 08002 Barcelona",
      lat: 41.3817,
      lng: 2.1738,
      barri: "Ciutat Vella (Rambla)",
      status: "existent",
      tipus: "teatre",
      anyObertura: 1847,
      anysActius: "Des de 1847",
      rellevancia:
        "El teatre més antic d'actuació de Barcelona encara en peu. Als anys setanta va reobrir les portes al nou públic jove i va acollir diversos recitals i espectacles que fusionaven cançó, teatre i música. La seva programació heterodoxa va fer de pont entre la tradició teatral catalana i l'escena experimental que alimentaria la ona.",
      contextHistoric:
        "Cinquena parada. Baixem de la plaça de Catalunya per la Rambla i ens aturem davant d'aquest teatre fundat el 1847. Al llarg del segle XX sempre ha estat programador de pont: entre el teatre comercial i el català, entre la cançó de varietats i el recital de autor.",
      artistesRelacionats: ["Ovidi Montllor", "Carles Flavià"],
      ordreRuta: 5,
      linkExtern: "https://ca.wikipedia.org/wiki/Teatre_Principal_(Barcelona)",
    },
    {
      id: "liceu",
      nom: "Gran Teatre del Liceu",
      adreca: "La Rambla, 51-59, 08002 Barcelona",
      lat: 41.3805,
      lng: 2.1737,
      barri: "Ciutat Vella (Rambla)",
      status: "existent",
      tipus: "teatre",
      anyObertura: 1847,
      anysActius: "Des de 1847 (reconstruït 1999)",
      rellevancia:
        "El gran teatre d'òpera de Barcelona. Als anys setanta, amb l'obertura programàtica de la transició, va començar a acollir alguna vetllada de cançó moderna. Però el seu paper real va ser simbòlic: la burgesia que el freqüentava era la mateixa que sostenia Edigsa i que es reunia a Bocaccio. La sala lírica del país formava part del mateix ecosistema que la ona.",
      contextHistoric:
        "Sisena parada de la ruta, molt a prop del Principal. El Liceu va patir el gran incendi de 1994 i va ser reconstruït; però als setanta era encara el centre de l'òpera catalana i un símbol compartit per tota la cultura urbana barcelonina.",
      artistesRelacionats: ["Maria del Mar Bonet", "Tete Montoliu"],
      ordreRuta: 6,
      linkExtern: "https://ca.wikipedia.org/wiki/Gran_Teatre_del_Liceu",
    },
    {
      id: "pl-reial",
      nom: "Plaça Reial i Jamboree",
      adreca: "Plaça Reial, 17 (Jamboree), 08002 Barcelona",
      lat: 41.3815,
      lng: 2.1752,
      barri: "Ciutat Vella (Gòtic)",
      status: "existent",
      tipus: "club",
      anyObertura: 1960,
      anysActius: "Jamboree des de 1960",
      rellevancia:
        "El Jamboree, al número 17 de la plaça Reial, és el club de jazz més antic d'Europa en actiu. Als anys seixanta i setanta va ser un dels escassos llocs on els músics de la ona podien sentir jazz en directe i tocar-hi: Tete Montoliu hi actuava sovint, i hi passava bona part dels músics de sessió laietans. La plaça Reial mateixa, neoclàssica i porticada, era punt de reunió permanent de la contracultura barcelonina.",
      contextHistoric:
        "Setena parada. Víctor Jou, fundador de Zeleste, va néixer a la plaça Reial —l'epicentre vital del qual arrencaria més tard la sala llegendària. Avui encara s'hi respira aquella barreja de turisme i bohemia que va caracteritzar la Barcelona dels setanta.",
      artistesRelacionats: ["Tete Montoliu", "Gato Pérez", "Toti Soler"],
      ordreRuta: 7,
      linkExtern: "https://ca.wikipedia.org/wiki/Pla%C3%A7a_Reial",
    },
    {
      id: "parc-ciutadella",
      nom: "Parc de la Ciutadella",
      adreca: "Passeig de Picasso, 08003 Barcelona",
      lat: 41.3884,
      lng: 2.1870,
      barri: "Ciutat Vella (La Ribera / Parc)",
      status: "existent",
      tipus: "espai_public",
      anyObertura: 1877,
      anysActius: "Espai públic des de 1877",
      rellevancia:
        "Aquí va tenir lloc la gran germinalització a l'aire lliure de la contracultura musical catalana. El Grup de Folk —format per Sisa, Riba, Ovidi Montllor, Oriol Tramvia, Carles Flavià, Josep Maria Carandina i Anna Maria Camps— hi va fer happenings multitudinaris a imitació de Dylan i del freak folk anglosaxó. Era el catalanisme boig dels anys 70: recitals gratuïts, multituds estirades a l'herba i, sovint, interventions policials.",
      contextHistoric:
        "Vuitena parada, després de pujar pel passeig de Colom. El parc va ser la gran resposta popular de la ona: el terreny on el moviment deixava de ser un fenomen de sala i es convertia en fenomen cultural de masses. Avui les manifestacions del 11 de Setembre hi continuen passant.",
      artistesRelacionats: [
        "Jaume Sisa",
        "Pau Riba",
        "Ovidi Montllor",
        "Grup de Folk",
        "Carles Flavià",
      ],
      ordreRuta: 8,
      linkExtern: "https://ca.wikipedia.org/wiki/Parc_de_la_Ciutadella",
    },
    {
      id: "carrer-argenteria",
      nom: "Carrer de l'Argenteria (antic carrer de la Plateria)",
      adreca: "Carrer de l'Argenteria, 08003 Barcelona",
      lat: 41.3850,
      lng: 2.1825,
      barri: "Ciutat Vella (La Ribera / Born)",
      status: "transformat",
      tipus: "espai_public",
      anysActius: "Carrer històric",
      rellevancia:
        "Aquest carrer estret i llarg del Born, que davalla des de Santa Maria del Mar fins a la plaça de Palau, era conegut fins als anys setanta com a «carrer de la Plateria», per l'ofici dels seus botiguers. Aquí, al número on ara hi ha locals comercials i restaurants, va obrir el 23 de maig de 1973 la primera sala Zeleste —punt de naixement de la ona laietana. El carrer va canviar de nom (i la sala, d'ubicació), però continua sent un dels carrers més densament musicals de Barcelona.",
      contextHistoric:
        "Novena parada, abans de la parada final. Avui el Born és barri de moda i museus; als anys setanta era encara el barri vell, poblat de magatzems i tallers. Aquella foscor i aquell realisme van ser decisius perquè la sala hi pogués instal·lar-se.",
      artistesRelacionats: ["Zeleste", "Víctor Jou"],
      ordreRuta: 9,
      linkExtern: "https://ca.wikipedia.org/wiki/Carrer_de_l%27Argenteria",
    },
    {
      id: "zeleste",
      nom: "Sala Zeleste (ubicació original)",
      adreca: "Carrer de la Plateria (avui Argenteria), 08003 Barcelona",
      lat: 41.3851,
      lng: 2.1830,
      barri: "Ciutat Vella (La Ribera / Born)",
      status: "historic",
      tipus: "sala",
      anyObertura: 1973,
      anyTancament: 1986,
      anysActius: "1973–1986 (ubicació original)",
      rellevancia:
        "L'epicentre absolut de la ona laietana. Fundada per Víctor Jou i dissenyada per Santiago Roqueta, va obrir el 23 de maig de 1973 i va tancar a aquesta ubicació el 1986 (després va tenir diverses reencarnacions, primer al carrer Almogàvers i, més tard, al Poble Espanyol). Aquí van tocar Sisa, Companyia Elèctrica Dharma, Iceberg, Gato Pérez, Barcelona Traction, Orquestra Mirasol, Maria del Mar Bonet, Màquina! i pràcticament tots els artistes de l'Edigsa. Zeleste era, literalment, la sala on la oa va nàixer i va morir.",
      contextHistoric:
        "Desena i última parada de la ruta. Víctor Jou, arquitecte de formació, va transformar un magatzem vell en un cafè-teatre-sala de concerts i va programar jazz, rock, cançó mediterrània i música cubana amb una coherència estètica mediterrània que va donar coherència al moviment. Avui aquesta adreça és un comerç; però la història del rock català comença aquí.",
      artistesRelacionats: [
        "Zeleste",
        "Víctor Jou",
        "Jaume Sisa",
        "Companyia Elèctrica Dharma",
        "Iceberg",
        "Gato Pérez",
        "Barcelona Traction",
        "Orquestra Mirasol",
        "Maria del Mar Bonet",
        "Màquina!",
        "Jordi Sabatés",
      ],
      ordreRuta: 10,
      foto: "/laieta/zeleste-1.jpg",
      fotoCaption: "Sala Zeleste al Born, epicentre de la ona laietana (1973–1986).",
      linkExtern: "https://es.wikipedia.org/wiki/Zeleste",
    },
    // === Punts fora de la ruta principal ===
    {
      id: "camp-de-la-bota",
      nom: "Camp de la Bota",
      adreca: "Passeig del Camp de la Bota, 08019 Barcelona (avui zona Fòrum)",
      lat: 41.4100,
      lng: 2.2225,
      barri: "Sant Martí (Poblenou / Diagonal Mar)",
      status: "historic",
      tipus: "festival",
      anysActius: "Anys 1970 (concerts a l'aire lliure)",
      rellevancia:
        "Antic camp militar a la platja del Poblenou, espai abandonat i mític on es van fer grans concerts gratuïts a l'aire lliure durant la transició. El Camp de la Bota és, en l'imaginari barceloní, el lloc on la ciutat acabava i on podia començar la festa. Avui el nom sobreviu en el passeig que voreja el Fòrum, però l'espai original va desaparèixer amb la construcció del Fòrum 2004.",
      contextHistoric:
        "Excursió fora de la ruta (cal transport). El Camp de la Bota representava, als anys 70, la frontera: la platja lliure, el descampat, el lloc sense vigilància. Molts dels grans concerts gratuïts de la transició hi van tenir lloc.",
      artistesRelacionats: ["Grup de Folk", "Jaume Sisa", "Pau Riba"],
      noRuta: true,
      foto: "/laieta/ruta-camp-bota.png",
      fotoCaption: "Platja i descampat del Camp de la Bota: la frontera lliure de la transició.",
      linkExtern: "https://ca.wikipedia.org/wiki/Camp_de_la_Bota",
    },
    {
      id: "canet-rock",
      nom: "Festival Canet Rock (Pla d'en Sala)",
      adreca: "Pla d'en Sala, Carrer Vía Cannetum, 08360 Canet de Mar",
      lat: 41.5896,
      lng: 2.5715,
      barri: "Canet de Mar (Maresme, 40 km al NE de BCN)",
      status: "existent",
      tipus: "festival",
      anyObertura: 1975,
      anyTancament: 1980,
      anysActius: "1975–1980 (i revifalla 2017–present)",
      rellevancia:
        "El gran festival a l'aire lliure del català. Cinc edicions entre 1975 i 1980 van reunir, al Pla d'en Sala de Canet de Mar, tots els grups de la ona laietana i de la cançó moderna: Sisa, Dharma, Iceberg, Mirasol, Barcelona Traction, Gato Pérez, Maria del Mar Bonet, Lluís Llach i molts altres. Va ser el Woodstock català —de fet, molts el coneixen així— i va marcar el punt més alt d'audiència i consciència col·lectiva del moviment. El festival va revifar el 2017 amb el mateix nom.",
      contextHistoric:
        "Excursió fora de la ruta (40 min en tren de Barcelona). Canet de Mar era —i és— un poble coster del Maresme amb forta tradició modernista i popular. El 1975, els darrers mesos del franquisme, milers de joves van omplir el Pla d'en Sala en un acte col·lectiu d'afirmació cultural.",
      artistesRelacionats: [
        "Jaume Sisa",
        "Companyia Elèctrica Dharma",
        "Iceberg",
        "Orquestra Mirasol",
        "Barcelona Traction",
        "Gato Pérez",
        "Maria del Mar Bonet",
        "Màquina!",
        "Jordi Sabatés",
      ],
      noRuta: true,
      foto: "/laieta/ruta-canet.png",
      fotoCaption: "Pla d'en Sala de Canet de Mar, epicentre del Canet Rock (1975–1980).",
      linkExtern: "https://ca.wikipedia.org/wiki/Canet_Rock",
    },
    {
      id: "cova-drac",
      nom: "La Cova del Drac",
      adreca: "Carrer de Vallmajor, 33, 08018 Barcelona",
      lat: 41.3966,
      lng: 2.1644,
      barri: "Sant Gervasi de Cassoles",
      status: "historic",
      tipus: "club",
      anysActius: "Anys 1950–1970",
      rellevancia:
        "La cova del Drac va ser un dels primers clubs de jazz de Barcelona, fundat als anys cinquanta i actiu durant dècades. Tete Montoliu hi va tocar sovint, com també altres figures del jazz català que van acabar formant músics de sessió per a la ona laietana. Era un local estret, fosc, amb programació estable de jazz modern i tradicional.",
      contextHistoric:
        "Excursió fora de la ruta (Sant Gervasi). La Cova del Drac va tancar fa anys, però el seu paper en la formació dels músics de la ona va ser fonamental: aquí va sonar Coltrane, Monk i el be-bop quan aquests noms eren a gairebé cap altra sala de la ciutat.",
      artistesRelacionats: ["Tete Montoliu", "Toti Soler", "Jordi Sabatés"],
      noRuta: true,
      linkExtern: "https://ca.wikipedia.org/wiki/La_Cova_del_Drac",
    },
    {
      id: "teatre-goya",
      nom: "Teatre Goya",
      adreca: "Carrer de Joaquín Costa, 68, 08001 Barcelona",
      lat: 41.3790,
      lng: 2.1645,
      barri: "Raval",
      status: "existent",
      tipus: "teatre",
      anyObertura: 1914,
      anysActius: "Des de 1914 (reformat diverses vegades)",
      rellevancia:
        "Saló clàssic del Raval, reformat diverses vegades al llarg del segle XX. Als anys setanta va programar espectacles híbrids —teatre, cançó, varietats— i va fer de pont entre la tradició del cafè-concert i els nous formats de cafè-teatre que acabarien a la sala Zeleste.",
      contextHistoric:
        "Excursió fora de la ruta (Raval). El Goya va ser un dels teatres que va donar el relleu generacional al teatre català: la generació que als anys setanta treballava aquí és la mateixa que omplia les taules de Bocaccio i el públic de Zeleste.",
      artistesRelacionats: ["Carles Flavià", "Ovidi Montllor"],
      noRuta: true,
      linkExtern: "https://ca.wikipedia.org/wiki/Teatre_Goya",
    },
  ] as RutaLocation[],
};

export interface NavItem {
  id: string;
  etiqueta: string;
}

export interface NavGrup {
  titol: string;
  descripcio: string;
  items: NavItem[];
}

export interface NavegacioAgrupada {
  trigger: string;
  cta: NavItem;
  grups: NavGrup[];
}

// Menú modern amb 6 categories agrupades + CTA "Escolta els discos"
export const navegacioAgrupada: NavegacioAgrupada = {
  trigger: "Explora el moviment",
  cta: { id: "recopilatori", etiqueta: "Escolta els discos" },
  grups: [
    {
      titol: "Artistes",
      descripcio: "Grups, músics i col·laboracions",
      items: [
        { id: "artistes", etiqueta: "Grups i bandes" },
        { id: "persones", etiqueta: "Persones indispensables" },
        { id: "grafo-relacions", etiqueta: "Grafo de relacions" },
      ],
    },
    {
      titol: "Discografia",
      descripcio: "Àlbums, cançons i recopilatoris",
      items: [
        { id: "obres", etiqueta: "Obres clau" },
        { id: "mosaic", etiqueta: "Mosaic discogràfic" },
        { id: "recopilatori", etiqueta: "Recopilatori" },
      ],
    },
    {
      titol: "Línia del temps",
      descripcio: "De 1969 fins al llegat actual",
      items: [
        { id: "timeline", etiqueta: "Cronologia" },
        { id: "llegat", etiqueta: "Llegat" },
        { id: "mort-ona-laietana", etiqueta: "Mort de l'Ona" },
      ],
    },
    {
      titol: "Barcelona musical",
      descripcio: "Sales, estudis i llocs històrics",
      items: [
        { id: "zeleste", etiqueta: "Sala Zeleste" },
        { id: "cartografia", etiqueta: "Cartografia" },
        { id: "ruta-musical", etiqueta: "Ruta musical" },
      ],
    },
    {
      titol: "Arxiu",
      descripcio: "Fotografies, vídeos i documents",
      items: [
        { id: "doc-visuals", etiqueta: "Documents visuals" },
        { id: "mapa-mental", etiqueta: "Mapa mental" },
      ],
    },
    {
      titol: "Context i fonts",
      descripcio: "Història, recerca i bibliografia",
      items: [
        { id: "manifest", etiqueta: "Manifest" },
        { id: "context", etiqueta: "Context històric" },
        { id: "fusio", etiqueta: "Fusió" },
        { id: "fonts", etiqueta: "Fonts i bibliografia" },
      ],
    },
  ],
};

// Llista plana d'ids de secció (per a IntersectionObserver i altres usos)
export const navegacioIds: string[] = navegacioAgrupada.grups.flatMap((g) =>
  g.items.map((i) => i.id),
);

// Compatibilitat amb codi existent (antic export pla)
export const navegacio = navegacioAgrupada.grups.flatMap((g) => g.items);
