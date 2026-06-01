/* =====================================================================
   Gedeelde spelersdata voor alle voetbalspellen.
   Wordt ingeladen met <script src="data.js"></script> op elke spelpagina.
   Pas hier 1x aan en het geldt voor ALLE spellen.
   ===================================================================== */

// Alle voetballers
const PLAYERS = [
    "Lionel Messi","Cristiano Ronaldo","Kylian Mbappé","Erling Haaland","Neymar Jr",
    "Vinícius Jr","Jude Bellingham","Kevin De Bruyne","Mohamed Salah","Robert Lewandowski",
    "Luka Modrić","Harry Kane","Karim Benzema","Antoine Griezmann","Pedri","Rúben Dias",
    "Virgil van Dijk","Thibaut Courtois","Bukayo Saka","Phil Foden","Rodri","Son Heung-min",
    "Joshua Kimmich","Jamal Musiala","Lautaro Martínez","Rafael Leão","Federico Valverde",
    "Achraf Hakimi","Frenkie de Jong","Memphis Depay","Diego Maradona","Pelé","Zinédine Zidane",
    "Johan Cruyff","Ronaldinho","David Beckham","Andrés Iniesta","Xavi","Andrea Pirlo",
    "Steven Gerrard","Thierry Henry","Paolo Maldini","Ronaldo Nazário","Roberto Baggio",
    "Marco van Basten","Ruud Gullit","Francesco Totti","Iker Casillas","Wesley Sneijder",
    "Arjen Robben",
    "Toni Kroos","Sergio Ramos","Gerard Piqué","Sergio Busquets","Manuel Neuer",
    "Thomas Müller","Florian Wirtz","Declan Rice","Martin Ødegaard","Bruno Fernandes",
    "Marcus Rashford","Casemiro","Ousmane Dembélé","Riyad Mahrez","Sadio Mané",
    "Bernardo Silva","João Félix","Rodrygo","Khvicha Kvaratskhelia","Victor Osimhen",
    "Nicolò Barella","Theo Hernández","Alphonso Davies","Trent Alexander-Arnold","Alisson Becker",
    "Gianluigi Donnarumma","Aurélien Tchouaméni","Eduardo Camavinga","Gavi","Lamine Yamal",
    "Cole Palmer","Kai Havertz","İlkay Gündoğan","Paulo Dybala","Ángel Di María",
    "Luis Suárez","Gareth Bale","Sergio Agüero","Wayne Rooney","Frank Lampard",
    "Kaká","Ryan Giggs","Didier Drogba","Samuel Eto'o","Carles Puyol",
    "Zlatan Ibrahimović","Roberto Carlos","Franz Beckenbauer","Lothar Matthäus","Romário"
  ];

// Per speler: [positie, ...eigenschappen]. Positie wordt NIET als hint getoond.
const TAGS = {
    "Lionel Messi":["aanvaller","WK-winnaar","Ballon d'Or","heel technisch","dribbelkoning","linkspoot"],
    "Cristiano Ronaldo":["aanvaller","razendsnel","koelbloedige afmaker","kopsterk","Ballon d'Or"],
    "Kylian Mbappé":["aanvaller","razendsnel","WK-winnaar","koelbloedige afmaker"],
    "Erling Haaland":["spits","koelbloedige afmaker","fysiek sterk","razendsnel"],
    "Neymar Jr":["aanvaller","heel technisch","dribbelkoning","vrije trappen"],
    "Vinícius Jr":["vleugelaanvaller","razendsnel","dribbelkoning","Champions League-winnaar"],
    "Jude Bellingham":["middenvelder","heel compleet","sterke passer","jong talent"],
    "Kevin De Bruyne":["middenvelder","geniale passer","vrije trappen","spelverdeler"],
    "Mohamed Salah":["vleugelaanvaller","razendsnel","koelbloedige afmaker","linkspoot"],
    "Robert Lewandowski":["spits","koelbloedige afmaker","kopsterk","goaltjesdief"],
    "Luka Modrić":["middenvelder","geniale passer","Ballon d'Or","heel technisch"],
    "Harry Kane":["spits","koelbloedige afmaker","sterke passer","kopsterk"],
    "Karim Benzema":["spits","heel technisch","Ballon d'Or","koelbloedige afmaker"],
    "Antoine Griezmann":["aanvaller","WK-winnaar","heel technisch","hardwerkend"],
    "Pedri":["middenvelder","heel technisch","jong talent","spelverdeler"],
    "Rúben Dias":["verdediger","leider achterin","kopsterk","fysiek sterk"],
    "Virgil van Dijk":["verdediger","kopsterk","leider achterin","fysiek sterk"],
    "Thibaut Courtois":["keeper","lang","sterke reflexen","betrouwbaar"],
    "Bukayo Saka":["vleugelaanvaller","snel","dribbelaar","jong talent"],
    "Phil Foden":["aanvaller","heel technisch","dribbelaar","linkspoot"],
    "Rodri":["verdedigende middenvelder","Ballon d'Or","slim","sterke passer"],
    "Son Heung-min":["vleugelaanvaller","razendsnel","tweebenig","koelbloedige afmaker"],
    "Joshua Kimmich":["middenvelder","sterke passer","slim","veelzijdig"],
    "Jamal Musiala":["middenvelder","dribbelkoning","heel technisch","jong talent"],
    "Lautaro Martínez":["spits","WK-winnaar","koelbloedige afmaker","fel"],
    "Rafael Leão":["vleugelaanvaller","razendsnel","dribbelaar","linkspoot"],
    "Federico Valverde":["middenvelder","hardwerkend","hard schot","veelzijdig"],
    "Achraf Hakimi":["rechtsback","razendsnel","aanvallend","sterke voorzet"],
    "Frenkie de Jong":["middenvelder","heel technisch","spelverdeler","dribbelaar"],
    "Memphis Depay":["aanvaller","hard schot","vrije trappen","linkspoot"],
    "Diego Maradona":["aanvaller","WK-winnaar","dribbelkoning","legende","linkspoot"],
    "Pelé":["aanvaller","WK-winnaar","legende","koelbloedige afmaker"],
    "Zinédine Zidane":["middenvelder","WK-winnaar","heel technisch","legende","Ballon d'Or"],
    "Johan Cruyff":["aanvaller","legende","heel technisch","Ballon d'Or","visionair"],
    "Ronaldinho":["aanvaller","WK-winnaar","dribbelkoning","heel technisch","showman"],
    "David Beckham":["middenvelder","geniale passer","vrije trappen","rechtspoot"],
    "Andrés Iniesta":["middenvelder","WK-winnaar","heel technisch","spelverdeler"],
    "Xavi":["middenvelder","WK-winnaar","geniale passer","spelverdeler"],
    "Andrea Pirlo":["middenvelder","WK-winnaar","geniale passer","vrije trappen"],
    "Steven Gerrard":["middenvelder","hard schot","leider","box-to-box"],
    "Thierry Henry":["aanvaller","WK-winnaar","razendsnel","koelbloedige afmaker"],
    "Paolo Maldini":["verdediger","legende","elegant","leider achterin"],
    "Ronaldo Nazário":["spits","WK-winnaar","razendsnel","dribbelaar","koelbloedige afmaker"],
    "Roberto Baggio":["aanvaller","heel technisch","vrije trappen","elegant"],
    "Marco van Basten":["spits","koelbloedige afmaker","kopsterk","Ballon d'Or"],
    "Ruud Gullit":["aanvaller","Ballon d'Or","fysiek sterk","veelzijdig"],
    "Francesco Totti":["aanvaller","WK-winnaar","heel technisch","clublegende"],
    "Iker Casillas":["keeper","WK-winnaar","sterke reflexen","legende"],
    "Wesley Sneijder":["middenvelder","hard schot","geniale passer","vrije trappen"],
    "Arjen Robben":["vleugelaanvaller","razendsnel","dribbelaar","naar binnen kappen","linkspoot"],
    "Toni Kroos":["middenvelder","WK-winnaar","geniale passer","rustig"],
    "Sergio Ramos":["verdediger","WK-winnaar","kopsterk","leider","fel"],
    "Gerard Piqué":["verdediger","WK-winnaar","slim","opbouwend"],
    "Sergio Busquets":["verdedigende middenvelder","WK-winnaar","slim","spelverdeler"],
    "Manuel Neuer":["keeper","WK-winnaar","meevoetballend","sterke reflexen"],
    "Thomas Müller":["aanvaller","WK-winnaar","slim","ruimtevinder"],
    "Florian Wirtz":["middenvelder","heel technisch","jong talent","creatief"],
    "Declan Rice":["middenvelder","hardwerkend","fysiek sterk","box-to-box"],
    "Martin Ødegaard":["middenvelder","heel technisch","spelverdeler","creatief"],
    "Bruno Fernandes":["middenvelder","geniale passer","hard schot","penalty's"],
    "Marcus Rashford":["aanvaller","razendsnel","linkspoot","dribbelaar"],
    "Casemiro":["verdedigende middenvelder","fysiek sterk","hardwerkend","leider"],
    "Ousmane Dembélé":["vleugelaanvaller","WK-winnaar","tweebenig","razendsnel","dribbelaar"],
    "Riyad Mahrez":["vleugelaanvaller","heel technisch","linkspoot","dribbelaar"],
    "Sadio Mané":["vleugelaanvaller","razendsnel","koelbloedige afmaker","hardwerkend"],
    "Bernardo Silva":["middenvelder","heel technisch","dribbelaar","hardwerkend"],
    "João Félix":["aanvaller","heel technisch","creatief","jong talent"],
    "Rodrygo":["vleugelaanvaller","snel","dribbelaar","koelbloedig in grote duels"],
    "Khvicha Kvaratskhelia":["vleugelaanvaller","dribbelkoning","linkspoot","creatief"],
    "Victor Osimhen":["spits","razendsnel","kopsterk","koelbloedige afmaker"],
    "Nicolò Barella":["middenvelder","hardwerkend","box-to-box","fel"],
    "Theo Hernández":["linksback","razendsnel","aanvallend","hard schot"],
    "Alphonso Davies":["linksback","razendsnel","aanvallend","dribbelaar"],
    "Trent Alexander-Arnold":["rechtsback","geniale passer","vrije trappen","aanvallend"],
    "Alisson Becker":["keeper","sterke reflexen","meevoetballend","betrouwbaar"],
    "Gianluigi Donnarumma":["keeper","lang","sterke reflexen","jong"],
    "Aurélien Tchouaméni":["verdedigende middenvelder","fysiek sterk","slim","opbouwend"],
    "Eduardo Camavinga":["middenvelder","veelzijdig","dribbelaar","jong talent"],
    "Gavi":["middenvelder","hardwerkend","fel","jong talent"],
    "Lamine Yamal":["vleugelaanvaller","dribbelkoning","jong talent","linkspoot"],
    "Cole Palmer":["aanvaller","koelbloedig","penalty's","creatief"],
    "Kai Havertz":["aanvaller","lang","veelzijdig","technisch"],
    "İlkay Gündoğan":["middenvelder","slim","timing in de box","sterke passer"],
    "Paulo Dybala":["aanvaller","WK-winnaar","heel technisch","linkspoot","vrije trappen"],
    "Ángel Di María":["vleugelaanvaller","WK-winnaar","geniale passer","dribbelaar"],
    "Luis Suárez":["spits","koelbloedige afmaker","fel","sluw"],
    "Gareth Bale":["vleugelaanvaller","razendsnel","hard schot","kopsterk"],
    "Sergio Agüero":["spits","koelbloedige afmaker","laag zwaartepunt","snel"],
    "Wayne Rooney":["aanvaller","fysiek sterk","hard schot","veelzijdig"],
    "Frank Lampard":["middenvelder","doelpunten vanuit het middenveld","hard schot","goede timing"],
    "Kaká":["middenvelder","WK-winnaar","razendsnel","Ballon d'Or","heel technisch"],
    "Ryan Giggs":["vleugelaanvaller","dribbelaar","clublegende","linkspoot"],
    "Didier Drogba":["spits","fysiek sterk","kopsterk","koelbloedig in finales"],
    "Samuel Eto'o":["spits","razendsnel","koelbloedige afmaker","fel"],
    "Carles Puyol":["verdediger","WK-winnaar","kopsterk","leider","fel"],
    "Zlatan Ibrahimović":["spits","lang","technisch","acrobatisch","showman"],
    "Roberto Carlos":["linksback","WK-winnaar","hard schot","vrije trappen","razendsnel"],
    "Franz Beckenbauer":["verdediger","WK-winnaar","legende","elegant","libero"],
    "Lothar Matthäus":["middenvelder","WK-winnaar","hard schot","leider","Ballon d'Or"],
    "Romário":["spits","WK-winnaar","koelbloedige afmaker","laag zwaartepunt","sluw"]
  };

// Gestopte / overleden spelers (voor het 'oud-spelers' schuifje)
const RETIRED = new Set([
    "Diego Maradona","Pelé","Zinédine Zidane","Johan Cruyff","Ronaldinho","David Beckham",
    "Andrés Iniesta","Xavi","Andrea Pirlo","Steven Gerrard","Thierry Henry","Paolo Maldini",
    "Ronaldo Nazário","Roberto Baggio","Marco van Basten","Ruud Gullit","Francesco Totti",
    "Iker Casillas","Wesley Sneijder","Arjen Robben","Toni Kroos","Gerard Piqué","Gareth Bale",
    "Sergio Agüero","Wayne Rooney","Frank Lampard","Kaká","Ryan Giggs","Didier Drogba",
    "Samuel Eto'o","Carles Puyol","Zlatan Ibrahimović","Roberto Carlos","Franz Beckenbauer",
    "Lothar Matthäus","Romário"
  ]);

/* ---------- gedeelde helpers ---------- */
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=(Math.random()*(i+1))|0;[a[i],a[j]]=[a[j],a[i]];}return a;}

// Lijst spelers op basis van het oud-spelers schuifje
function getPool(includeRetired){
  return includeRetired ? PLAYERS : PLAYERS.filter(p=>!RETIRED.has(p));
}

// Tot 3 willekeurige eigenschappen (positie overgeslagen) - gebruikt door beide spellen
function hintsFor(name, count){
  const tags = TAGS[name];
  if(!tags) return ["wereldster"];
  const [pos,...rest] = tags;
  return shuffle(rest).slice(0, count||3);
}

/* ---------- code/seed-helpers (voor hetzelfde bord op 2 telefoons) ---------- */
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // geen I en O, om verwarring te voorkomen

// genereer een willekeurige code (alleen letters)
function genCode(n){ n = n || 5; let s=''; for(let i=0;i<n;i++) s += CODE_ALPHABET[(Math.random()*CODE_ALPHABET.length)|0]; return s; }

// string -> 32-bit getal (deterministisch)
function strHash(str){
  let h = 1779033703 ^ str.length;
  for(let i=0;i<str.length;i++){ h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h<<13)|(h>>>19); }
  return (h ^ (h>>>16)) >>> 0;
}
// zaadje -> herhaalbare random-functie
function mulberry32(a){ return function(){ a|=0; a=(a+0x6D2B79F5)|0; let t=Math.imul(a^(a>>>15),1|a); t=(t+Math.imul(t^(t>>>7),61|t))^t; return ((t^(t>>>14))>>>0)/4294967296; }; }

// schud een lijst op basis van een code -> zelfde code = zelfde volgorde op elk apparaat
function seededShuffle(arr, seedStr){
  const rnd = mulberry32(strHash(String(seedStr).toUpperCase()));
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}