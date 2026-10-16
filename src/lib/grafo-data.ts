// === Grafo de connexions entre artistes ===
// Mapa navegable de relacions: bandes, músics, discos, sales i persones.

export type NodeType =
  | "banda"
  | "musica"
  | "disc"
  | "sala"
  | "persona";

export type EdgeType =
  | "membre" // musician → banda
  | "disc_de" // disc → banda
  | "gravat_a" // disc → sala/estudi
  | "actuacio" // banda → sala
  | "colaboracio" // musician ↔ musician o banda ↔ banda
  | "influencia" // banda → banda o musica → musica
  | "manager" // persona → sala/banda
  | "productor"; // persona → disc

export interface GrafoNode {
  id: string;
  nom: string;
  tipus: NodeType;
  any?: number;
  anyFi?: number;
  subtipus?: string; // p.ex. "sala", "estudi", "festival", "segell"
  bio: string;
  importanca: 1 | 2 | 3; // 1=petit, 2=mitjà, 3=gran (radi del node)
  linkExtern?: string;
}

export interface GrafoEdge {
  source: string;
  target: string;
  type: EdgeType;
  any?: number;
  nota?: string;
}

// Colors per tipus de node (paleta magenta vintage complementària)
export const NODE_COLORS: Record<NodeType, string> = {
  banda: "#80296F", // magenta vintage principal
  musica: "#495F4D", // verd oliva
  disc: "#c2410c", // taronja cremat
  sala: "#5e7a85", // blau acer
  persona: "#7c2d12", // marró fosc
};

export const EDGE_COLORS: Record<EdgeType, string> = {
  membre: "#80296F", // magenta
  disc_de: "#c2410c", // taronja
  gravat_a: "#5e7a85", // blau
  actuacio: "#7a4f5c", // magenta suau
  colaboracio: "#495F4D", // verd
  influencia: "#92400e", // ambre fosc
  manager: "#7c2d12", // marró
  productor: "#a16207", // ambre
};

export const NODE_LABEL: Record<NodeType, string> = {
  banda: "Banda / Grup",
  musica: "Músic / Solista",
  disc: "Disc",
  sala: "Sala / Estudi / Lloc",
  persona: "Persona clau",
};

export const EDGE_LABEL: Record<EdgeType, string> = {
  membre: "Membre de",
  disc_de: "Disc de",
  gravat_a: "Gravat a",
  actuacio: "Actuació a",
  colaboracio: "Col·laboració",
  influencia: "Influència",
  manager: "Gestor / Fundador",
  productor: "Productor",
};

export const grafoIntro = {
  titol: "Grafo de connexions",
  subtitol: "La xarxa viva del moviment",
  intro:
    "L'Ona Laietana no va ser una llista de noms: va ser una xarxa de músics que tocaven junts a sales compartides, gravaven als mateixos estudis, s'influïen mútuament i eren produïts pel mateix cercle. Aquest mapa navegable de relacions permet explorar aquesta constel·lació: seleccioneu un node i apareixeran els seus companys de banda, col·laboradors, discs i sales. Feu servir els filtres per aïllar un sol tipus de node (discos, músics, sales) o un sol tipus de relació (membre, col·laboració, influència).",
};

// === NODES (~75) ===
export const grafoNodes: GrafoNode[] = [
  // --- Bandes (16) ---
  { id: "g-maquina", nom: "Màquina!", tipus: "banda", any: 1968, anyFi: 1972, bio: "Pont yeyé ↔ avantguarda del setanta. Why? (1970) va ser el primer disc de rock progresiu d'ambició orquestral del país.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/M%C3%A0quina!" },
  { id: "g-mirasol", nom: "Orquestra Mirasol", tipus: "banda", any: 1974, anyFi: 1977, bio: "El primer so laietana. Troba l'equilibri entre jazz-rock, accents mediterranis i matisos cubano-brasilers. «Salsa catalana» (1974) és considerat el primer disc realment laietà.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Orquestra_Mirasol" },
  { id: "g-dharma", nom: "Companyia Elèctrica Dharma", tipus: "banda", any: 1974, anyFi: 1978, bio: "La síntesi perfecte del moviment. Tramuntana (1977) n'és l'obra mestra: folk català + rock progresiu + jazz-rock + textures mediterrànies.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Companyia_El%C3%A8ctrica_Dharma" },
  { id: "g-iceberg", nom: "Iceberg", tipus: "banda", any: 1975, anyFi: 1979, bio: "Sostre tècnic del moviment. Coses Nostres (1976) i «La flamenca elèctrica» defineixen la síntesi mediterrània del grup.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Iceberg_(grup)" },
  { id: "g-secta-sonica", nom: "Secta Sònica", tipus: "banda", any: 1976, anyFi: 1977, bio: "Gran vèrtex del laietanisme. Fundada per dos integrants de Slobo (Gato Pérez i Rafael Zaragoza), amb Jordi Bonell i Víctor Cortina. Fred Pedralbes i Astroferia són dos LPs essencials.", importanca: 2, linkExtern: "https://ca.wikipedia.org/wiki/Secta_S%C3%B2nica" },
  { id: "g-slobo", nom: "Slobo", tipus: "banda", any: 1972, anyFi: 1973, bio: "Formació prèvia en què va militar Gato Pérez, exemple de la primera onada psicodèlica barcelonina.", importanca: 1 },
  { id: "g-om", nom: "Om", tipus: "banda", any: 1973, anyFi: 1974, bio: "Duo de Toti Soler i Jordi Sabatés. Folk mediterrani + suite progresiva + improvisació jazzística. Significació decisiva malgrat el curt recorregut.", importanca: 2 },
  { id: "g-fusioon", nom: "Fusioon", tipus: "banda", any: 1974, anyFi: 1976, bio: "Projecte de fusió jazz-rock → flamenco. Amargós i Benavent provenen del jazz-rock; Benavent acabarà al circuit flamenco de Paco de Lucía.", importanca: 2, linkExtern: "https://ca.wikipedia.org/wiki/Fusioon" },
  { id: "g-musica-urbana", nom: "Música Urbana", tipus: "banda", any: 1977, anyFi: 1978, bio: "Barcelona sona tan sofisticada com Londres. Iberia exemplifica la via de la «muntanya sonora».", importanca: 2, linkExtern: "https://ca.wikipedia.org/wiki/M%C3%BAsica_Urbana" },
  { id: "g-barcelona-traction", nom: "Barcelona Traction", tipus: "banda", any: 1973, anyFi: 1975, bio: "Dúo d'art-pop barroc. «Els carrusells de la calvície» és potser la cançó laietana de major reedició posterior.", importanca: 2 },
  { id: "g-esqueixada-sniff", nom: "Esqueixada Sniff", tipus: "banda", any: 1975, anyFi: 1979, bio: "Combo instrumentalista de la línia Zeleste-Edigsa. Joan Muntalà, guitarra. «Ocells» (1979) és un hito del so laietà.", importanca: 2 },
  { id: "g-plateria", nom: "Orquestra Plateria", tipus: "banda", any: 1974, bio: "Projecte de ball cultiu del moviment. Festiu i popular.", importanca: 1 },
  { id: "g-bueyes", nom: "Bueyes Madereros", tipus: "banda", any: 1973, bio: "Grup primerenc de Zeleste. Format per Eduard Altaba el 1973, un dels primers a actuar-hi.", importanca: 1 },
  { id: "g-pegasus", nom: "Pegasus", tipus: "banda", any: 1982, anyFi: 1997, bio: "Postlaietanisme il·lustrat. 8 discs entre 1982 i 1997. Hereu de la tradició instrumental de Zeleste.", importanca: 2, linkExtern: "https://ca.wikipedia.org/wiki/Pegasus_(grup)" },
  { id: "g-maria-del-mar", nom: "Maria del Mar Bonet", tipus: "banda", any: 1974, bio: "Frontera Nova Cançó ↔ ona laietana. El seu disc Maria del Mar (1974), amb la Mirasol, féu confluir la cançó mediterrània i l'elèctric experimental.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Maria_del_Mar_Bonet" },
  { id: "g-grup-folk", nom: "Grup de Folk", tipus: "banda", any: 1968, anyFi: 1972, bio: "Tribu primigènia: Sisa, Pau Riba, Ovidi Montllor, Oriol Tramvia, Carles Flavià, Anna Maria Camps. Happenings multitudinaris al Parc de la Ciutadella.", importanca: 2 },

  // --- Músics / Solistes (18) ---
  { id: "m-jordi-batiste", nom: "Jordi Batiste «Tapi»", tipus: "musica", any: 1968, bio: "Veu i baix de Màquina!. Pioner de la veu rock en català.", importanca: 2 },
  { id: "m-enric-herrera", nom: "Enric Herrera", tipus: "musica", any: 1968, bio: "Teclats de Màquina!. Pare del teclat progressiu barceloní.", importanca: 1 },
  { id: "m-ricard-roda", nom: "Ricard Roda", tipus: "musica", any: 1974, bio: "Saxofonista de Mirasol.", importanca: 1 },
  { id: "m-victor-ammann", nom: "Víctor Ammann", tipus: "musica", any: 1974, bio: "Membre de Mirasol.", importanca: 1 },
  { id: "m-xavier-batlles", nom: "Xavier Batllés", tipus: "musica", any: 1974, bio: "Bateria. Present a Mirasol i Iceberg. Músic de sessió de fusió.", importanca: 2 },
  { id: "m-miquel-lizandra", nom: "Miquel Lizandra", tipus: "musica", any: 1974, bio: "Membre de Mirasol.", importanca: 1 },
  { id: "m-pedrito-diaz", nom: "Pedrito Díaz", tipus: "musica", any: 1974, bio: "Percussionista de Mirasol. Aporta els matisos cubano-brasilers.", importanca: 1 },
  { id: "m-fortunato", nom: "Fortunato Guerrero", tipus: "musica", any: 1974, bio: "Membre fundador de Dharma.", importanca: 1 },
  { id: "m-joan-fortuny", nom: "Joan Fortuny", tipus: "musica", any: 1974, bio: "Saxo i flauta de Dharma.", importanca: 2 },
  { id: "m-josep-fortuny", nom: "Josep Fortuny", tipus: "musica", any: 1974, bio: "Bateria de Dharma.", importanca: 1 },
  { id: "m-enric-peidro", nom: "Enric Peidró", tipus: "musica", any: 1974, bio: "Membre de Dharma.", importanca: 1 },
  { id: "m-max-sunyer", nom: "Max Sunyer", tipus: "musica", any: 1975, bio: "Guitarra elèctrica d'Iceberg. Virtuós del so Mahavishnu.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Max_Sunyer" },
  { id: "m-kitflus", nom: "Josep Mas «Kitflus»", tipus: "musica", any: 1975, bio: "Teclats d'Iceberg.", importanca: 2 },
  { id: "m-primi-sancho", nom: "Primi Sancho", tipus: "musica", any: 1975, bio: "Baix d'Iceberg.", importanca: 1 },
  { id: "m-jordi-colomer", nom: "Jordi Colomer", tipus: "musica", any: 1975, bio: "Bateria d'Iceberg.", importanca: 1 },
  { id: "m-gato-perez", nom: "Gato Pérez", tipus: "musica", any: 1973, anyFi: 1978, bio: "Xavier Patricio Pérez (1951–1990), nascut a Buenos Aires. Se li atribueix l'encuny del concepte «Ona Laietana». Pont rock-rumba-poesia urbana. Membre de Slobo, Secta Sònica i en solitari.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Gato_P%C3%A9rez" },
  { id: "m-rafael-zaragoza", nom: "Rafael Zaragoza", tipus: "musica", any: 1972, bio: "Company de Gato Pérez a Slobo i Secta Sònica.", importanca: 1 },
  { id: "m-jordi-bonell", nom: "Jordi Bonell", tipus: "musica", any: 1976, bio: "Guitarrista de fusió. Secta Sònica i Música Urbana. Músic de sessió cabdal.", importanca: 2, linkExtern: "https://ca.wikipedia.org/wiki/Jordi_Bonell" },
  { id: "m-victor-cortina", nom: "Víctor Cortina", tipus: "musica", any: 1976, bio: "Membre de Secta Sònica.", importanca: 1 },
  { id: "m-joan-amargos", nom: "Joan Albert Amargós", tipus: "musica", any: 1974, bio: "Teclista i arranjador. Fusioon i Música Urbana. Més tard figura cabdal dels arranjaments de la pop catalana.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Joan_Albert_Amarg%C3%B3s" },
  { id: "m-carles-benavent", nom: "Carles Benavent", tipus: "musica", any: 1974, bio: "Baix. Fusioon → circuit flamenco de Paco de Lucía. Un dels baixistes més reconeguts del país.", importanca: 3, linkExtern: "https://es.wikipedia.org/wiki/Carles_Benavent" },
  { id: "m-santi-arisa", nom: "Santi Arisa", tipus: "musica", any: 1974, bio: "Bateria de Fusioon.", importanca: 1 },
  { id: "m-joan-muntala", nom: "Joan Muntalà", tipus: "musica", any: 1975, bio: "Guitarrista central d'Esqueixada Sniff.", importanca: 2 },
  { id: "m-eduard-altaba", nom: "Eduard Altaba", tipus: "musica", any: 1973, bio: "Fundador de Bueyes Madereros. Músic i compositor.", importanca: 1 },
  { id: "m-tete-montoliu", nom: "Tete Montoliu", tipus: "musica", any: 1960, anyFi: 1997, bio: "Pianista universal del jazz català. Company de gires de Dexter Gordon, Roland Kirk, Lionel Hampton i Ben Webster. Vampyria (1974) amb Sabatés. Escut internacional de l'ona.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Tete_Montoliu" },
  { id: "m-toti-soler", nom: "Toti Soler", tipus: "musica", any: 1973, bio: "Guitarrista de fusió. «Sardana flamenca» (1973) és peça fundacional. Membre d'Om amb Sabatés. Col·laborador a Dioptria.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Toti_Soler" },
  { id: "m-jordi-sabates", nom: "Jordi Sabatés", tipus: "musica", any: 1971, anyFi: 2022, bio: "Pianista precursor. Jarka, Om, duos amb Toti Soler i Tete Montoliu. Vampyria (1974) gravat a Gemma Estudis.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Jordi_Sabat%C3%A9s" },
  { id: "m-sisa", nom: "Jaume Sisa", tipus: "musica", any: 1970, bio: "Himne generacional i cabaret galàctic. «Qualsevol nit pot sortir el sol» (1975). Membre del Grup de Folk.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Jaume_Sisa" },
  { id: "m-pau-riba", nom: "Pau Riba", tipus: "musica", any: 1969, anyFi: 2022, bio: "Psicodèlia, provocació i llenguatge propi. Dioptria (1971). Nét dels poetes Carles Riba i Clementina Arderiu. Membre del Grup de Folk.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Pau_Riba" },
  { id: "m-xavier-ribalta", nom: "Xavier Ribalta", tipus: "musica", any: 1958, bio: "Pianista, pioner d'un jazz mediterrani barceloní des de finals dels cinquanta. Connecta el circuit del jazz clàssic amb l'underground.", importanca: 2 },
  { id: "m-ovidi-montllor", nom: "Ovidi Montllor", tipus: "musica", any: 1970, anyFi: 1995, bio: "Figura bisagra. A L'Oriol (1972) i Ia (1973). Col·laboracions amb Toti Soler i Carles Flavià. Membre del Grup de Folk.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Ovidi_Montllor" },

  // --- Discos (24) ---
  { id: "d-why", nom: "Why?", tipus: "disc", any: 1970, bio: "Màquina!. Rock progresiu d'ambició orquestral insòlita al sud d'Europa.", importanca: 2 },
  { id: "d-salsa-catalana", nom: "Salsa catalana", tipus: "disc", any: 1974, bio: "Orquestra Mirasol. Considerat el primer disc realment laietà.", importanca: 3 },
  { id: "d-oca-oca", nom: "D'oca a oca i tira que et toca", tipus: "disc", any: 1975, bio: "Orquestra Mirasol.", importanca: 1 },
  { id: "d-la-boqueria", nom: "La Boqueria", tipus: "disc", any: 1977, bio: "Mirasol Colores. Tercer disc de la formació.", importanca: 1 },
  { id: "d-diumenge", nom: "Diumenge", tipus: "disc", any: 1975, bio: "Dharma. Obre la porta al so del grup.", importanca: 1 },
  { id: "d-oucomballa", nom: "L'Oucomballa", tipus: "disc", any: 1976, bio: "Dharma. Més laietà que el primer.", importanca: 2 },
  { id: "d-tramuntana", nom: "Tramuntana", tipus: "disc", any: 1977, bio: "Dharma. Obra mestra; síntesi folk + progresiu + jazz-rock. Punt culminant del moviment.", importanca: 3 },
  { id: "d-angel-dansa", nom: "L'àngel de la dansa", tipus: "disc", any: 1978, bio: "Dharma. L'any del declivi.", importanca: 1 },
  { id: "d-tutankhamon", nom: "Tutankhamon", tipus: "disc", any: 1975, bio: "Iceberg. Debut.", importanca: 1 },
  { id: "d-coses-nostres", nom: "Coses Nostres", tipus: "disc", any: 1976, bio: "Iceberg. Inclou «La flamenca elèctrica» — síntesi mediterrània.", importanca: 2 },
  { id: "d-fred-pedralbes", nom: "Fred Pedralbes", tipus: "disc", any: 1976, bio: "Secta Sònica. Primer LP.", importanca: 2 },
  { id: "d-astroferia", nom: "Astroferia", tipus: "disc", any: 1977, bio: "Secta Sònica. Segon LP.", importanca: 2 },
  { id: "d-carabruta", nom: "Carabruta", tipus: "disc", any: 1978, bio: "Gato Pérez. Gir cap a la rumba; amb «Rumba dels 60's».", importanca: 2 },
  { id: "d-el-gat-blanc", nom: "El Gat Blanc", tipus: "disc", any: 1973, bio: "Toti Soler. Inclou «Sardana flamenca» — peça fundacional de la fusió sense prejudicis.", importanca: 3 },
  { id: "d-vampyria", nom: "Vampyria", tipus: "disc", any: 1974, bio: "Tete Montoliu + Jordi Sabatés. Gravat a Gemma Estudis. Simbiosi jazz universal + avantguarda local.", importanca: 3 },
  { id: "d-musica-urbana", nom: "Música Urbana", tipus: "disc", any: 1977, bio: "Música Urbana. Barcelona sona tan sofisticada com Londres.", importanca: 2 },
  { id: "d-iberia", nom: "Iberia", tipus: "disc", any: 1978, bio: "Música Urbana. «Muntanya sonora»: folk + orquestració elèctrica.", importanca: 2 },
  { id: "d-bcn-traction", nom: "Barcelona Traction", tipus: "disc", any: 1975, bio: "Barcelona Traction. Art-pop barroc.", importanca: 2 },
  { id: "d-qualsevol-nit", nom: "Qualsevol nit pot sortir el sol", tipus: "disc", any: 1975, bio: "Sisa. Èxit immediat i transversal, himne de generació.", importanca: 3 },
  { id: "d-dioptria", nom: "Dioptria", tipus: "disc", any: 1971, bio: "Pau Riba. Psicodèlia catalana radical.", importanca: 3 },
  { id: "d-maria-del-mar", nom: "Maria del Mar", tipus: "disc", any: 1974, bio: "Maria del Mar Bonet, amb la Mirasol. Confluir entre cançó mediterrània i elèctric experimental.", importanca: 3 },
  { id: "d-som-terbol", nom: "Som de la tèrbol?", tipus: "disc", any: 1975, bio: "Esqueixada Sniff. Jazz-rock català de seccions de vent i humor conceptual.", importanca: 2 },
  { id: "d-ocells", nom: "Ocells", tipus: "disc", any: 1979, bio: "Esqueixada Sniff. Hito del so laietà.", importanca: 2 },
  { id: "d-a-l-oriol", nom: "A L'Oriol", tipus: "disc", any: 1972, bio: "Ovidi Montllor. Radicalitat formal. Col·laboració amb Toti Soler.", importanca: 2 },

  // --- Sales / Estudis / Llocs (6) ---
  { id: "s-zeleste", nom: "Sala Zeleste", tipus: "sala", any: 1973, anyFi: 1986, subtipus: "sala de concerts", bio: "L'epicentre absolut. Fundada per Víctor Jou i dissenyada per Santiago Roqueta el 1973. Aquí van tocar pràcticament tots els artistes de l'ona.", importanca: 3, linkExtern: "https://es.wikipedia.org/wiki/Zeleste" },
  { id: "s-edigsa", nom: "Edigsa", tipus: "sala", any: 1961, anyFi: 1984, subtipus: "segell discogràfic", bio: "L'Editora General Societat Anònima. El segell de la Nova Cançó i de l'ona laietana. Va editar els primers discs de Sisa, Riba, Dharma, Màquina!, Iceberg, etc.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Edigsa" },
  { id: "s-gemma-estudis", nom: "Gemma Estudis", tipus: "sala", any: 1970, anyFi: 1980, subtipus: "estudi de gravació", bio: "Estudi de gravació barceloní on es va gravar Vampyria (1974) de Tete Montoliu i Jordi Sabatés. Un dels espais tècnics fonamentals del moviment.", importanca: 2 },
  { id: "s-bocaccio", nom: "Discoteca Bocaccio", tipus: "sala", any: 1967, anyFi: 1985, subtipus: "discoteca / social", bio: "El temple de la gauche divine. Carrer Muntaner 505. La xarxa social que va sostenir l'ona. Fundada per Oriol Regàs el 13 de febrer de 1967.", importanca: 2, linkExtern: "https://es.wikipedia.org/wiki/Bocaccio_(discoteca)" },
  { id: "s-canet-rock", nom: "Festival Canet Rock", tipus: "sala", any: 1975, anyFi: 1980, subtipus: "festival a l'aire lliure", bio: "El Woodstock català. Pla d'en Sala, Canet de Mar. Cinc edicions 1975-1980 van reunir tota l'ona.", importanca: 3, linkExtern: "https://ca.wikipedia.org/wiki/Canet_Rock" },
  { id: "s-parc-ciutadella", nom: "Parc de la Ciutadella", tipus: "sala", subtipus: "espai públic", bio: "Lloc de grans happenings del Grup de Folk a l'aire lliure. Recitals gratuïts, multituds i sovint intervenció policial.", importanca: 2 },

  // --- Persones clau (6) ---
  { id: "p-victor-jou", nom: "Víctor Jou", tipus: "persona", any: 1973, bio: "Arquitecte, fundador i motor de Zeleste. La seva aposta personal va fer possible l'ecosistema laietà. Sense Jou, no hi ha moviment.", importanca: 3, linkExtern: "https://es.wikipedia.org/wiki/Zeleste" },
  { id: "p-rafael-moll", nom: "Rafael Moll", tipus: "persona", any: 1961, bio: "Productor i director executiu d'Edigsa/Gasa. La mà industrial de Sisa i de la línia Zeleste-Edigsa. Va fer professional allò que era artesà.", importanca: 2 },
  { id: "p-josep-maria-espinals", nom: "Josep Maria Espinàs", tipus: "persona", any: 1961, bio: "Escriptor i cronista de la gauche divine. Funcions executives dins Edigsa. Memòries sobre Zeleste.", importanca: 2, linkExtern: "https://ca.wikipedia.org/wiki/Josep_Maria_Espin%C3%A0s" },
  { id: "p-santiago-roqueta", nom: "Santiago Roqueta", tipus: "persona", any: 1973, bio: "Dissenyador de la sala Zeleste. Va transformar un magatzem vell en cafè-teatre-sala de concerts.", importanca: 1 },
  { id: "p-oriol-regas", nom: "Oriol Regàs", tipus: "persona", any: 1967, bio: "Empresari i promotor cultural. Fundador de Bocaccio (1967) i figura clau de la gauche divine barcelonina.", importanca: 2 },
  { id: "p-carles-flavia", nom: "Carles Flavià", tipus: "persona", any: 1968, bio: "Showman i actor. Membre del Grup de Folk i col·laborador d'Ovidi Montllor. Persona clau de l'escena teatralitzada laietana.", importanca: 1 },
];

// === EDGES (~120) ===
export const grafoEdges: GrafoEdge[] = [
  // Membre (músic → banda)
  { source: "m-jordi-batiste", target: "g-maquina", type: "membre", any: 1968 },
  { source: "m-enric-herrera", target: "g-maquina", type: "membre", any: 1968 },
  { source: "m-ricard-roda", target: "g-mirasol", type: "membre", any: 1974 },
  { source: "m-victor-ammann", target: "g-mirasol", type: "membre", any: 1974 },
  { source: "m-xavier-batlles", target: "g-mirasol", type: "membre", any: 1974 },
  { source: "m-miquel-lizandra", target: "g-mirasol", type: "membre", any: 1974 },
  { source: "m-pedrito-diaz", target: "g-mirasol", type: "membre", any: 1974 },
  { source: "m-fortunato", target: "g-dharma", type: "membre", any: 1974 },
  { source: "m-joan-fortuny", target: "g-dharma", type: "membre", any: 1974 },
  { source: "m-josep-fortuny", target: "g-dharma", type: "membre", any: 1974 },
  { source: "m-enric-peidro", target: "g-dharma", type: "membre", any: 1974 },
  { source: "m-max-sunyer", target: "g-iceberg", type: "membre", any: 1975 },
  { source: "m-kitflus", target: "g-iceberg", type: "membre", any: 1975 },
  { source: "m-primi-sancho", target: "g-iceberg", type: "membre", any: 1975 },
  { source: "m-jordi-colomer", target: "g-iceberg", type: "membre", any: 1975 },
  { source: "m-xavier-batlles", target: "g-iceberg", type: "membre", any: 1976, nota: "També a Mirasol" },
  { source: "m-gato-perez", target: "g-slobo", type: "membre", any: 1972 },
  { source: "m-rafael-zaragoza", target: "g-slobo", type: "membre", any: 1972 },
  { source: "m-gato-perez", target: "g-secta-sonica", type: "membre", any: 1976 },
  { source: "m-rafael-zaragoza", target: "g-secta-sonica", type: "membre", any: 1976 },
  { source: "m-jordi-bonell", target: "g-secta-sonica", type: "membre", any: 1976 },
  { source: "m-victor-cortina", target: "g-secta-sonica", type: "membre", any: 1976 },
  { source: "m-toti-soler", target: "g-om", type: "membre", any: 1973 },
  { source: "m-jordi-sabates", target: "g-om", type: "membre", any: 1973 },
  { source: "m-joan-amargos", target: "g-fusioon", type: "membre", any: 1974 },
  { source: "m-carles-benavent", target: "g-fusioon", type: "membre", any: 1974 },
  { source: "m-santi-arisa", target: "g-fusioon", type: "membre", any: 1974 },
  { source: "m-jordi-bonell", target: "g-musica-urbana", type: "membre", any: 1977 },
  { source: "m-joan-amargos", target: "g-musica-urbana", type: "membre", any: 1977 },
  { source: "m-joan-muntala", target: "g-esqueixada-sniff", type: "membre", any: 1975 },
  { source: "m-eduard-altaba", target: "g-bueyes", type: "membre", any: 1973 },
  { source: "m-sisa", target: "g-grup-folk", type: "membre", any: 1968 },
  { source: "m-pau-riba", target: "g-grup-folk", type: "membre", any: 1968 },
  { source: "m-ovidi-montllor", target: "g-grup-folk", type: "membre", any: 1968 },
  { source: "p-carles-flavia", target: "g-grup-folk", type: "membre", any: 1968, nota: "Showman" },

  // Disc de (disc → banda)
  { source: "d-why", target: "g-maquina", type: "disc_de", any: 1970 },
  { source: "d-salsa-catalana", target: "g-mirasol", type: "disc_de", any: 1974 },
  { source: "d-oca-oca", target: "g-mirasol", type: "disc_de", any: 1975 },
  { source: "d-la-boqueria", target: "g-mirasol", type: "disc_de", any: 1977 },
  { source: "d-diumenge", target: "g-dharma", type: "disc_de", any: 1975 },
  { source: "d-oucomballa", target: "g-dharma", type: "disc_de", any: 1976 },
  { source: "d-tramuntana", target: "g-dharma", type: "disc_de", any: 1977 },
  { source: "d-angel-dansa", target: "g-dharma", type: "disc_de", any: 1978 },
  { source: "d-tutankhamon", target: "g-iceberg", type: "disc_de", any: 1975 },
  { source: "d-coses-nostres", target: "g-iceberg", type: "disc_de", any: 1976 },
  { source: "d-fred-pedralbes", target: "g-secta-sonica", type: "disc_de", any: 1976 },
  { source: "d-astroferia", target: "g-secta-sonica", type: "disc_de", any: 1977 },
  { source: "d-carabruta", target: "m-gato-perez", type: "disc_de", any: 1978, nota: "Disc en solitari de Gato Pérez" },
  { source: "d-el-gat-blanc", target: "m-toti-soler", type: "disc_de", any: 1973, nota: "Disc en solitari de Toti Soler" },
  { source: "d-vampyria", target: "m-tete-montoliu", type: "disc_de", any: 1974, nota: "A duo amb Sabatés" },
  { source: "d-vampyria", target: "m-jordi-sabates", type: "disc_de", any: 1974, nota: "A duo amb Tete" },
  { source: "d-musica-urbana", target: "g-musica-urbana", type: "disc_de", any: 1977 },
  { source: "d-iberia", target: "g-musica-urbana", type: "disc_de", any: 1978 },
  { source: "d-bcn-traction", target: "g-barcelona-traction", type: "disc_de", any: 1975 },
  { source: "d-qualsevol-nit", target: "m-sisa", type: "disc_de", any: 1975 },
  { source: "d-dioptria", target: "m-pau-riba", type: "disc_de", any: 1971 },
  { source: "d-maria-del-mar", target: "g-maria-del-mar", type: "disc_de", any: 1974 },
  { source: "d-som-terbol", target: "g-esqueixada-sniff", type: "disc_de", any: 1975 },
  { source: "d-ocells", target: "g-esqueixada-sniff", type: "disc_de", any: 1979 },
  { source: "d-a-l-oriol", target: "m-ovidi-montllor", type: "disc_de", any: 1972 },

  // Gravat a (disc → sala/estudi)
  { source: "d-vampyria", target: "s-gemma-estudis", type: "gravat_a", any: 1974 },
  { source: "d-why", target: "s-edigsa", type: "gravat_a", any: 1970, nota: "Segell Edigsa" },
  { source: "d-salsa-catalana", target: "s-edigsa", type: "gravat_a", any: 1974 },
  { source: "d-tramuntana", target: "s-edigsa", type: "gravat_a", any: 1977 },
  { source: "d-fred-pedralbes", target: "s-edigsa", type: "gravat_a", any: 1976 },
  { source: "d-qualsevol-nit", target: "s-edigsa", type: "gravat_a", any: 1975 },
  { source: "d-dioptria", target: "s-edigsa", type: "gravat_a", any: 1971 },

  // Actuacions (banda → sala)
  { source: "g-maquina", target: "s-zeleste", type: "actuacio", any: 1973, nota: "Actuació primerenca" },
  { source: "g-mirasol", target: "s-zeleste", type: "actuacio", any: 1974 },
  { source: "g-dharma", target: "s-zeleste", type: "actuacio", any: 1974 },
  { source: "g-iceberg", target: "s-zeleste", type: "actuacio", any: 1975 },
  { source: "g-secta-sonica", target: "s-zeleste", type: "actuacio", any: 1976 },
  { source: "g-barcelona-traction", target: "s-zeleste", type: "actuacio", any: 1973 },
  { source: "g-esqueixada-sniff", target: "s-zeleste", type: "actuacio", any: 1975 },
  { source: "g-bueyes", target: "s-zeleste", type: "actuacio", any: 1973, nota: "Un dels primers a actuar-hi" },
  { source: "g-fusioon", target: "s-zeleste", type: "actuacio", any: 1974 },
  { source: "g-musica-urbana", target: "s-zeleste", type: "actuacio", any: 1977 },
  { source: "g-plateria", target: "s-zeleste", type: "actuacio", any: 1974 },
  { source: "g-maria-del-mar", target: "s-zeleste", type: "actuacio", any: 1974 },
  { source: "m-tete-montoliu", target: "s-zeleste", type: "actuacio", any: 1973 },
  { source: "m-toti-soler", target: "s-zeleste", type: "actuacio", any: 1973 },
  { source: "m-jordi-sabates", target: "s-zeleste", type: "actuacio", any: 1973 },
  { source: "m-sisa", target: "s-zeleste", type: "actuacio", any: 1973 },
  { source: "m-pau-riba", target: "s-zeleste", type: "actuacio", any: 1973 },
  { source: "m-gato-perez", target: "s-zeleste", type: "actuacio", any: 1973 },
  { source: "g-grup-folk", target: "s-parc-ciutadella", type: "actuacio", any: 1970, nota: "Happenings multitudinaris" },

  // Canet Rock — actuacions
  { source: "g-dharma", target: "s-canet-rock", type: "actuacio", any: 1975 },
  { source: "g-iceberg", target: "s-canet-rock", type: "actuacio", any: 1975 },
  { source: "g-mirasol", target: "s-canet-rock", type: "actuacio", any: 1975 },
  { source: "m-sisa", target: "s-canet-rock", type: "actuacio", any: 1975 },
  { source: "m-pau-riba", target: "s-canet-rock", type: "actuacio", any: 1975 },
  { source: "g-maria-del-mar", target: "s-canet-rock", type: "actuacio", any: 1976 },
  { source: "g-barcelona-traction", target: "s-canet-rock", type: "actuacio", any: 1976 },
  { source: "g-secta-sonica", target: "s-canet-rock", type: "actuacio", any: 1976 },

  // Col·laboracions (músic ↔ músic, banda ↔ banda)
  { source: "m-tete-montoliu", target: "m-jordi-sabates", type: "colaboracio", any: 1974, nota: "Vampyria (a duo)" },
  { source: "m-toti-soler", target: "m-jordi-sabates", type: "colaboracio", any: 1973, nota: "Om + duos" },
  { source: "m-toti-soler", target: "m-ovidi-montllor", type: "colaboracio", any: 1972, nota: "Guitarra a A L'Oriol i Dioptria" },
  { source: "g-maria-del-mar", target: "g-mirasol", type: "colaboracio", any: 1974, nota: "Disc Maria del Mar amb la Mirasol" },
  { source: "m-toti-soler", target: "m-tete-montoliu", type: "colaboracio", any: 1973, nota: "Cercle dels grans instrumentistes" },
  { source: "m-joan-amargos", target: "m-carles-benavent", type: "colaboracio", any: 1974, nota: "Fusioon i circuit posterior" },
  { source: "m-jordi-bonell", target: "m-joan-amargos", type: "colaboracio", any: 1977, nota: "Música Urbana" },
  { source: "m-gato-perez", target: "m-rafael-zaragoza", type: "colaboracio", any: 1972, nota: "Slobo i Secta Sònica" },
  { source: "m-sisa", target: "m-pau-riba", type: "colaboracio", any: 1968, nota: "Grup de Folk — esquerra psiquiàtrica" },
  { source: "m-ovidi-montllor", target: "p-carles-flavia", type: "colaboracio", any: 1970, nota: "Recitals teatralitzats" },

  // Influències
  { source: "g-maquina", target: "g-iceberg", type: "influencia", any: 1970, nota: "El bateria del futur Iceberg ve de Màquina!" },
  { source: "m-tete-montoliu", target: "g-iceberg", type: "influencia", nota: "Jazz com a referent tècnic" },
  { source: "m-tete-montoliu", target: "m-jordi-sabates", type: "influencia", nota: "Pianista universal → precursor local" },
  { source: "g-maquina", target: "g-dharma", type: "influencia", nota: "Continuïtat interna de l'avantguarda" },
  { source: "m-pau-riba", target: "m-sisa", type: "influencia", nota: "Provocació → cabaret galàctic" },
  { source: "m-xavier-ribalta", target: "m-tete-montoliu", type: "influencia", nota: "Pioners del jazz mediterrani" },
  { source: "g-fusioon", target: "g-iceberg", type: "influencia", nota: "Jazz-rock català paral·lel" },
  { source: "g-slobo", target: "g-secta-sonica", type: "influencia", nota: "Formacions prèvies → Secta Sònica" },
  { source: "g-dharma", target: "g-pegasus", type: "influencia", nota: "Postlaietanisme hereu" },

  // Manager / Fundador / Productor
  { source: "p-victor-jou", target: "s-zeleste", type: "manager", any: 1973, nota: "Fundador" },
  { source: "p-santiago-roqueta", target: "s-zeleste", type: "manager", any: 1973, nota: "Dissenyador" },
  { source: "p-rafael-moll", target: "s-edigsa", type: "manager", any: 1961, nota: "Director executiu" },
  { source: "p-josep-maria-espinals", target: "s-edigsa", type: "manager", any: 1961, nota: "Executiu" },
  { source: "p-oriol-regas", target: "s-bocaccio", type: "manager", any: 1967, nota: "Fundador" },
  { source: "p-rafael-moll", target: "d-qualsevol-nit", type: "productor", any: 1975, nota: "Producció de Sisa" },
  { source: "p-rafael-moll", target: "d-tramuntana", type: "productor", any: 1977, nota: "Producció de Dharma" },
  { source: "p-rafael-moll", target: "d-salsa-catalana", type: "productor", any: 1974, nota: "Producció de Mirasol" },

  // Connexions socials (músics freqüentaven Bocaccio)
  { source: "p-victor-jou", target: "s-bocaccio", type: "actuacio", nota: "Client habitual de la gauche divine" },
  { source: "m-sisa", target: "s-bocaccio", type: "actuacio", nota: "Client habitual" },
  { source: "m-pau-riba", target: "s-bocaccio", type: "actuacio", nota: "Client habitual" },
  { source: "g-maria-del-mar", target: "s-bocaccio", type: "actuacio", nota: "Clienta habitual" },
];

export const grafoStats = {
  totalNodes: grafoNodes.length,
  totalEdges: grafoEdges.length,
  perTipus: {
    banda: grafoNodes.filter((n) => n.tipus === "banda").length,
    musica: grafoNodes.filter((n) => n.tipus === "musica").length,
    disc: grafoNodes.filter((n) => n.tipus === "disc").length,
    sala: grafoNodes.filter((n) => n.tipus === "sala").length,
    persona: grafoNodes.filter((n) => n.tipus === "persona").length,
  },
};
