import React, { useState,useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import GaugeChart from 'react-gauge-chart'


function About() {
  var now  = " 15:00:00";
var then = " 14:20:00";

var ms = moment(now," HH:mm:ss").diff(moment(then," HH:mm:ss"));
var d = moment.duration(ms);
var s = d.minutes();
  const current = new Date();

  const [timeStart, settimeStart] = useState("");
  const [timeFinish, settimeFinish] = useState("");
  const [timer, settimer] = useState(0);

   const [repo, setRepo] = useState("");
   const [QST, setQST] = useState([]);
const handledata = () => {
    const url = `http://localhost:5001/add_data`
    const Credentials = { Poste,QST,score,timer}
    axios.post(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message, data } = result;
           
        })
        .catch(err => {
            console.log(err)
        })
      }
      const handletimer = () => {
        settimeStart(`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`)
        var ms = moment(timeFinish,"HH:mm:ss").diff(moment(timeStart,"HH:mm:ss"));
        var d = moment.duration(ms);
        var s = d.minutes();
        settimer(s)
        console.log(timer)

          }
      
  // Properties
  const [showResults, setShowResults] = useState(false);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [Poste, setPoste] = useState("");
 
  useEffect(() => {
    console.log('test tijngsdfsd',s)
    
    console.log("start time",timeStart);
    console.log("finishc time",timeFinish);
    console.log("timer",timer)
    settimeFinish(`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`)
    console.log(repo)
    console.log(Poste)
    console.log(QST)
    setPoste(localStorage.getItem("Poste"))
  }, [timeStart,timeFinish,repo,Poste,QST,timer]);

  const questions = [
    {
      text: "Le message et/ou la  communication sur les aspects sant?? et s??curit?? des aliments de nos produits finis se d??finit comme :",
      options: [
        { id: 0, text: "Innovant, utilisation des m??thodes et outils modernes  (r??seaux sociaux internes , intranet , implication de tous dans la diffusion du message) , s'appuie sur les leaders d'opinion internes, va au d??la de la vie d'entreprise en int??grant des valeurs 'responsables' de l'entreprise et des parties int??ress??es", isCorrect: false },
        { id: 1, text: "Evolutif : Affichage g??n??ral ,rappel des consignes en cas de r??clamations ", isCorrect: false },
        { id: 2, text: "Participatif : en plus de l'affichage ,r??unions d'??quipe regulieres avec les rappels des faits marquants et suivi par l'encadrement terrain", isCorrect: false },
        { id: 3, text: "Classique : Affichage , d??claration 'qualit??' comme demand?? par les normes", isCorrect: true },
        { id: 4, text: "Adapt?? : Diffusion par plusieurs canaux officiels et informels ,explicite concernant les objectifs / valeur et les indicateurs de terrain ", isCorrect: true },
      ],
    },
    {
      text: "En quoi consiste la formation des employ??s sur les dangers et les risques en mati??re des s??curit??s des aliments ?",
      options: [
        { id: 0, text: "Au d??la des bases sur les bonnes pratiques , des cas concrets sont abord??s et des mises en situations permettant d'??valuer la bonne compr??hension des risques, les employ??s apportent eux-m??mes des ??l??ments suppl??mentaires pour alimenter les formations en y int??grant de nouveaux risques d??tect??s", isCorrect: true },
        { id: 1, text: "Tous les membres du personnel ne sont pas oblig??s d'assister et il existe peu d'enregistrements sur les formations r??alis??ses (Pas de test formel de comp??tence et de la compr??hension)", isCorrect: false },
        { id: 2, text: "Un syst??me formel de formation existe (formation initiale et de recyclage ), les employ??s comprennent les r??gles g??n??rales de la s??curit?? des aliments ,mais ne les respectent pas toujours.", isCorrect: false },
        { id: 3, text: "les programmes de formation sont adapt??s en continu en fonction de l'??volution de l'??quipe .Les bonnes pratiques sont largement suivies (selon des indicateurs document??s)", isCorrect: false },
        { id: 4, text: "Pas de formation ou formation ?? la conformit?? uniquement (BPH,principes g??n??raux HACCP ,etc.)", isCorrect: false },
      ],
    },
    {
      text: "En terme de syst??me d'alerte , laquelle des propositions suivantes serait la plus adapt??e ?",
      options: [
        { id: 0, text: "Il est vivement encourg?? de faire remonter les d??viations ?? tous les niveaux de la hi??archie et des revues r??guli??ires sont assur??es pour d??montrer le bon suivi de ces actions , le syst??me anonyme ou non en fonction du degr?? est en place et fonctionnel.", isCorrect: true },
        { id: 1, text: "Un syst??me d'alerte a ??t?? mis en place ?? la demande de clients mais reste peu utilis?? et plut??t formel.", isCorrect: false },
        { id: 2, text: "Un outil d'alerte a ??t?? mis en place et un affichage en attente,toutefois il n'est pas bien vu dans l'entreprise de faire de la d??lation.", isCorrect: false },
        { id: 3, text: "Le personnel a pris l'habititude de remonter a ses responsables hi??rarchiques ,toutes les activit??s d??viantes de mani??re informelle et leur fait confiance pour le suivi.", isCorrect: false },
        { id: 4, text: "Pas de syst??me de lanceur d'alerte en place les employ??s ne sont pas inform??s.", isCorrect: false },
      ],
    },
    {
      text: "Les indicateurs li??s ?? la bonne application des pratiques de s??curit?? des aliments par le personnel sont : ",
      options: [
        { id: 0, text: "Evolitifs et adapt??s ?? la collecte des donn??es li??s aux r??sultats en mati??re d'hygi??ne , de recurrence des ??carts , des ??valuations des personnes sur la base d'entretienet des questionnaires d'evaluations permettant de mesurer 'application des proc??dures mais ??galement l'agilit??.", isCorrect: false },
        { id: 1, text: "D??crits et suivis sur la base des inspections hygi??ne en atelier, des audits , r??clamations.", isCorrect: true },
        { id: 2, text: "Essentiellement suivis via la r??alisation des formations internes et ??valuations sur base des grilles de comp??tences.", isCorrect: false },
        { id: 3, text: "Clairement ??tablis sur un ensemble de mesures du comportement et des r??sultats en mati??re d'hygi??ne d'??fficacit?? des bonnes pratiques.", isCorrect: false },
        { id: 4, text: "Vagements d??finis , inclus dans les indicateurs de r??clamations et d'hyg??ne", isCorrect: false },
      ],
    },
    {
      text: "En mati??re de formation des encadrants de terrain et des op??rateurs , laquelle de ces affirmations serait la plus repr??sentative de votre situation :",
      options: [
        { id: 0, text: "La formation en mati??re s??curit?? des aliments fait partie int??grante des r??les de supervision et s'est adapt??e ?? des domaines sp??cifiques, mais tous les superviseurs sont en mesures d'expliquer les principaux domaines de risque .Les formations sont int??ressantes etv stimulent leur personnel ?? participer. Ils agissent toujours comme de bons exemples  en tant que 'multiplicateurs' de connissances en mati??re de s??curit?? des aliments et encouragent leurs ??quipes op??rationnels ?? agir de mani??re proactive.", isCorrect: false },
        { id: 1, text: "Aucun syst??me de formations formel n'existe : certaines sessions ad hoc sont organisn??es ,tous les superviseurs ne sont pas pr??sents et peu d'enregistrements formels. Pas de test documente de comp??tence et de compr??hension", isCorrect: true },
        { id: 2, text: "La soci??t?? reste en  mode r??actif , mais ?? mis en place un syst??me formel de formation et de d??veloppement du personnel , le syst??me reste en g??n??ral sans r??le ni responsabilit??s sp??cifi??s en mati??re de s??curit?? sanitaire des aliments. Le mat??riel de formation couvre les bases mais ne traite toujours pas des risques et des cons??quences possibles. ", isCorrect: true },
        { id: 3, text: "Des messages proactifs sur la s??curit?? sanitaire des aliments sont int??gr??s aux communications r??guli??re de la haute direction et diffus??s .Syst??me formel de formation ?? la gestion en place et mis en ??uvre. Le mat??riel de formation souligne l'importance de la s??curit?? des aliments pour le personnel ainsi que pour l'??quipement et les pratiques de base en mettant sur les risques et leurs cons??quences ??ventuelles ", isCorrect: false },
        { id: 4, text: "Mat??riels de formation inexistants ou mal produits , contenus faibles ou non adapt??s ?? l'entreprise .Accent ??ducatif limit?? aux comp??tences techniques ou se concentre uniquement ou principalement sur l'hygi??ne du personnel .On consid??re la s??curit?? des aliments comme une pratique qui ne n??cissite pas de formation th??orique.", isCorrect: false },
      ],
    },
    {
      text: "Comment d??crirez vous le niveau de connaissance de la mission / vision de l'entreprise en mati??re de s??curit?? des aliments ?",
      options: [
        { id: 0, text: "Tous les membres de l'encadrement et l'ensemble du personnel ?? tous les niveaux sont capables de placer leurs propres objectifs dans le cadrec des missions et vision de l'entreprise en mati??re de s??curit?? des aliments ,hygi??ne , am??lioration de la sant?? du consommateur.", isCorrect: false },
        { id: 1, text: "La vision / politique de l'entreprise sont diffus??es ,des objectifs g??n??raux sont disponibles , L'encadrement connait ses propres objectifs sans focus particulier sur la s??curit?? des aliments .", isCorrect: true },
        { id: 2, text: "Les objectifs de s??curit?? des aliments sont clairement d??crites dans la politique / engagements diffus??s et compris : r??f??rence par exemple ?? la sant?? des consommateurs ,?? l'engagement dans l'am??lioration nutritionnelle, etc???.", isCorrect: false },
        { id: 3, text: "La s??curit?? des aliments est une valeur fondamentale de l'entreprise : des actions en mati??re d'am??lioration sont men??es , L'encadrement et le personnel peuvent les ??noncer clairement (dernier investissement en la meti??re ou d??cision prise).", isCorrect: false },
        { id: 4, text: "Le personnel et l'encadrement ont connaissances qu'une politique existe sans plus de d??tail.", isCorrect: false },
      ],
    },{
      text: "En tenant compte des disparit??s et de l'historique de chacun . Comment d??finirez vous l'engagement du personnel de production?",
      options: [
        { id: 0, text: "Personnel hautement engag?? et motiv?? ,les employ??s s'inspirent les uns des autres pour faire de leur mieux et souhaitent identifier ce qu'ils peuvent faire pour les uatres, Interet actif manifeste pour l'am??lioration continue de la s??curit?? des aliments :-incitations r??compenses pour la conformit?? et application coh??rente des normes internes , encouragements des suggestions d'am??lioration ", isCorrect: false },
        { id: 1, text: "Assez neutre : n'appr??cie pas vraiment ses taches mais s'en accomode .Les agents de maitrise sont responsables de l'??laboration et de l'application des proc??dures . Le personnel fait ce qu'il pense etre appropri?? en fonction de ce qui lui est impos??.", isCorrect: true },
        { id: 2, text: "Relativement engag?? : fier de travailler dans l'entreprise sans toutefois en parler aux autres .Doute de l'importance du risque pos?? par la s??curit?? des aliments et de l'??fficacit?? des r??glementations et des exigences en mati??re d'hygi??ne des aliments sur le mode 'On a toujours fait comme ??a'", isCorrect: false },
        { id: 3, text: "Engag??: ressent entre une partie vitale de l'entreprise ;sentiment d'accomplissement dans ses taches . L'engagement des employ??s est accept?? pour aider ?? se conformer ?? la r??glementation .elaboration des proc??dures en mati??re de s??curit?? des aliments avec la participation du personnel ?? qui on offre la possibilit?? de commenter une fois termin??e", isCorrect: false },
        { id: 4, text: "Principalement d??sengag?? : travaillant principalement par crainte de perdre son emploi : pas particulierement satisfait ni enthousiasm?? par ses t??ches.", isCorrect: false },
      ],
    },{
      text: "D'apr??s vous l'engagement de la direction en mati??re de s??curit?? des aliments est il:",
      options: [
        { id: 0, text: "En Coh??rence avec les valeurs de l'entreprise et ses diregeants depuis une longue p??riode en allant au d??la des attentes clients ", isCorrect: false },
        { id: 1, text: "Adapt?? et ??volitif en fonction des demandes des clients et des possibilit??s financi??res ", isCorrect: true },
        { id: 2, text: "Encore limit?? pour des multiples raisons de moyens financiers ,de march??s , techniques ", isCorrect: false },
        { id: 3, text: "en nette am??lioration s'appyant sur des d??cisions successives et des projets qui ne sont pas directement demand??s par les clients", isCorrect: false },
        { id: 4, text: "Conforme aux demandes explicites des clients et des autorit??s ", isCorrect: false },
      ],
    },{
      text: "Au regard de la s??curit?? des aliments , comment la relation entre les parties prenentes (fournisseurs ,Agences d'in??rime???.) est-elle g??r??e?",
      options: [
        { id: 0, text: "Analyse de performance des prestataires est mise en place des plans d'am??lioration continue sont ??tablis et des collaborations pour am??liorer les objectifs communs ", isCorrect: false },
        { id: 1, text: "Les parties prenentes / prestataires cherchent uniquement ?? se conformer aux exigences minimales (l??gales)", isCorrect: true },
        { id: 2, text: "La s??lection et l'??valuation des parties prenentes /prestataires int??grent des indicateurs en mati??re de SA et sont revus quant cela est possible . Les connissances de certains prestataires / fournissuers des probl??mes li??s ?? la s??curit?? des aliments sont faibles .Confusion fr??quente entre probl??me qualit?? et probl??me li?? ?? la s??curit?? des aliments.", isCorrect: false },
        { id: 3, text: "Les objectifs communs en mati??re de s??curit?? des aliments sont discut??s afin d'??tre en coh??rence aussi bien sur des aspects pratiques (tenues , corps ??trangers,???.) que sur les valeurs.", isCorrect: false },
        { id: 4, text: "Aucun outil ou m??canisme n'est mis en place pour la surveillance de la conformit?? des accords avec les prestataires en mati??re de SA", isCorrect: false },
      ],
    },{
      text: "Sur la derni??re ann??e; pourriez vous identifier le nombre de signalement de risque produits / non-conformit?? identifi??e en production par les op??rateurs?",
      options: [
        { id: 0, text: "Quasi syst??matiquement lors de chaque r??union de production / d'??quipe des retours d'informations et des propositions sont fatales et suivies", isCorrect: false },
        { id: 1, text: "??  li??s ?? des probl??mes de production / qualit?? ??galement ", isCorrect: true },
        { id: 2, text: "Plus d'une dizaine de diff??rentes importances (indiquant des propositions d'am??lioration)", isCorrect: false },
        { id: 3, text: "plus d'une vingtaine et ou tr??s r??gulierement ", isCorrect: false },
        { id: 4, text: "Aucun signalement (malgr?? des NC identifi??es lors d'audits internes / externes )", isCorrect: false },
      ],
    },{
      text: "A quel stade de l'approche manag??riale des RH serez vous concernant la composante mission et adaptabilitr??:",
      options: [
        { id: 0, text: "Il existe des strat??gies tr??s sophostiqu??es et intr??gr??s ?? court et ?? long terme  RH. La strat??gie est continuellement examin??e pour s'assurer qu'elle est en phase avec l'entreprise et qu'elle ??vite le risque . Les employ??s sont attir??s par cette organisation en raison de sa r??putation de culture de ressources humaines diversifi??e. Les employ??es re??oivent des informations en temps r??el sur les performances afin de pouvoir des mesures imm??diates pour s'adapter.", isCorrect: false },
        { id: 1, text: "Les strat??gies concernant les talents critiques et les fonctions d'apprentissage (acquisition de talents , developpement et gestion de la performance ) sont g??r??es par des projets mais ne sont pas int??gr??s. Les RH commencent ?? s'engader de mani??re plus proactive dans l'entreprise , mais les efforts ne sont pas coh??rents et le changement tend ?? se faire lentement . Une plus grande appr??ciation de la participation des employ??s au developpement et ?? la carri??re commence ?? ??merger.", isCorrect: true },
        { id: 2, text: "Les processus cl??s d'apprentissage et de gestion des talents commencent ?? s'int??grer au fur et ?? mesure que l'organisation reconnait la n??c??ssit?? d'une plus grande adaptabilit?? . La cascade d'objectifs organisationnels comme moyen de guider les objectifs individuels ou d'??quipe et le d??veloppement commence ?? devenir omnipr??sente . Les employ??s sont plus responsables de diriger leur d??veloppement et leur carri??re avec l'appui des RH", isCorrect: false },
        { id: 3, text: "Tous les aspects (attraction des talents ,d??veloppement , promotion ,mobilit??s, engagement et r??compenses) sont li??s les uns aux autres afin d'accroitre le rendement de l'entreprise . L'exploitationde talents interne devient plus faible . Les employ??s font preuve d'une grande responsabilit?? pour tirer part de ce que l'organisation fournit au travesr des RH", isCorrect: false },
        { id: 4, text: "Une strat??gie globale d'apprentissage 'a minima' oriente les efforts de l'??quipe des ressources humaines ,L'??quipe des ressources humaines est en grande partie en mode 'r??actif' pour les processus (recrutement , formation, int??gration, conformit?? ,etc???) . Les RH sont per??ues par les employ??s comme passifs pour faire progresser leur d??veloppement et leur carri??re . Une grande partie des besoins en formation sont obligatoires.", isCorrect: false },
      ],
    },{
      text: "En mati??re de s??curit?? des aliments ,quel serait le niveau de compr??hension des risques par la direction et l'encadrement ?",
      options: [
        { id: 0, text: "Des messages proactifs sur la s??curit?? des aliments sont int??gr??s aux communications r??guli??res de la direction. La direction est impliqu??e dans toute discussion li??e ?? des risques et des mesures de contr??le. L'organisation dispose d'un syst??me pour ??valuer la compr??hension et les performances des employ??s", isCorrect: false },
        { id: 1, text: "L'encadrement peut comprendre les sujets li??s ?? la SA, mais consid??re que cela rel??ve de la responsabilit?? des ??quipes qualit??,.Les discussions li??es aux actions en cas de risques ??mergnts doivent etre valid??es par la direction.", isCorrect: true },
        { id: 2, text: "Tout les cadres sont form??s ?? l'HACCP ,Formation supl??mentaire sur les risques critiques pour la s??curit?? sanitaire des aliments ?M??canisme de communication mis en place pour tenir les dirigents inform??s des problemes li??s ?? la SA", isCorrect: false },
        { id: 3, text: "La directio et l'encadrement sont impliqu??s dans l'analyse de risque et la prise de d??cision concernant la SA. L'encadrement participe ?? toutes les sessions de formation li??es aux risques et aux r??unions de suivi des plans d'actions", isCorrect: false },
        { id: 4, text: "Le concept de la s??curit?? des aliments n'est pas int??gr?? par la direction qui d??l??gue enti??rement au service qualit?? ", isCorrect: false },
      ],
    },{
      text: "Comment placez vous l'implication des ressources humaines dans le processus de s??curit?? des aliments:",
      options: [
        { id: 0, text: "Sont int??gr??es au processus dans son ensemble et ont une d??marche active dans la s??lection et l'accompagnement des ressources ", isCorrect: false },
        { id: 1, text: "Peu de relations , le service qualit?? assure la gestion de l'hygi??ne", isCorrect: true },
        { id: 2, text: "G??rent de mani??re proactive , dans le respect des valeurs et des missions de l'entreprise ,afin de d??tecter les d??faillances et adapter les postes / personnes .Organisent de mani??re globale la communication , les ??valuations et la coordination pour mettre en confiance le personnel ", isCorrect: false },
        { id: 3, text: "Participent aux r??unions pour l'??valuation des comp??tences et les retours d'information de la production / service qualit??", isCorrect: false },
        { id: 4, text: "Assurant le suivi documentaire des formations hygi??ne ,font un suivi avec les agences d'int??rim et g??rent la budget formation ", isCorrect: false },
      ],
    },{
      text: "En mati??re d'implication du management et de l'encadrement , lequelle de ces affirmations serait la plus proche de la situation actuelle ?",
      options: [
        { id: 0, text: "Les dirigents donnent l'exemple et encouragent les comportements souhaites de la part de leur personnel en mati??re de s??curit?? des aliments conform??ment ?? la r??glementation . Les dirig??ants contestent et punissent les mauvaises pratiques d'hygi??ne ", isCorrect: false },
        { id: 1, text: "Le minimum d'investissement est assur?? pour respecter la r??glementation en mode r??actif", isCorrect: true },
        { id: 2, text: "Le personnel est encourag?? fr??quement ?? appliquer les proc??dures de s??curit?? des aliments par la direction qui ne manque pas d'expliquer pourquoi cela est necessaire et met en avant les bonnes pratiques .Par exemple :int??ret actif ??vident pour la s??curit?? des aliments ; leadership des ressources humaines ?? travers de bons exemples", isCorrect: false },
        { id: 3, text: "Les dirigents ont du mal ?? incarner des comportements mod??les en mati??re de s??curit?? des aliments . Les mauvaises pratiques en mati??re de s??curit?? des aliments restent incontest??es et aucun commentaire n'est fourni concernant les comportements en mati??re d'hygi??ne . par exemple la direction ne respecte pas les r??gles relatives aux vetements de protection.", isCorrect: false },
        { id: 4, text: "Manque d'initiative et de motivation de la part de l'entreprise -faible pr??sence / direction de l'entreprise sur le lieu de travail en ce qui concerne la s??curit?? des aliments,sauf lors d'inspections ou d'audits externes ", isCorrect: false },
      ],
    },{
      text: "Comment percevez-vous de mani??re globale,la capacit?? de vos employ??s dans la gestion des changements , des crises et dans la r??solution des probl??mes li??s ?? la s??curit?? des aliments:",
      options: [
        { id: 0, text: "Les cas de gestion de crises ou tests r??alis??s par le pass?? ont montr?? une bonne volont?? de la part des employ??s. Bien qu'un manque d'initiative soit constat?? cela sans freiner les changement qu'il sont suivis", isCorrect: false },
        { id: 1, text: "L'encadrement assure la gestion , le personnel n'est pas en mesure de prendre les d??cisions en cas de changements ", isCorrect: true },
        { id: 2, text: "Le syst??me en place permet ?? tout le personnel de prendre les initiatives et de s'adapter de mani??re coh??rente aux changements induits. Des exemples r??centes permettent de le d??montrer ", isCorrect: false },
        { id: 3, text: "Les agents de maitrise assurent de mani??re r??active les adaptations ou les gestions de crises mais pas au niveau personnel de production", isCorrect: false },
        { id: 4, text: "Certains employ??s ont montr?? des capacit??s ?? s'adapter aux changements rapides mais une majorit?? (encadrement de terrain inclus ) ??vitent les initiatives", isCorrect: false },
      ],
    },{
      text: "Comment qualifieriez vous la compr??hension par les employ??s des responsabilit??s et des autorit??s en mati??re de s??curit?? des aliments?",
      options: [
        { id: 0, text: "La description des t??ches et des responsabilitr??s sont assez claires, tout ??cart est identifi?? et enregistr?? . L'autorit?? de blocage est assur??e mais les d??cisions restent ?? la charge de la hi??rarchie", isCorrect: false },
        { id: 1, text: "Les t??ches unitaires en terme de production ont ??t?? transmises ,la s??curit?? des aliments est assur??e par le contr??le qualit?? ", isCorrect: true },
        { id: 2, text: "responsabilit??s et autorit??s sont suffisament d??crites dans la documentation mais elles sont completes par la coordination avec les uatres services en interface et la communication transversale est ??galement suur??e par la pro-activit?? ", isCorrect: false },
        { id: 3, text: "Les fiches des postes indiquent les ??tapes ?? assurer pour la bonne conduite des op??rations et les controles sp??cifiques (HACCP,Hygi??ne ). En cas de d??viations , il y a devoir d'informations ?? la hi??rarchie", isCorrect: false },
        { id: 4, text: "Les controles et les op??rations ?? effectuer ont ??t?? d??finis , l'encadrement et le service qualit?? orienter en cas de besoins .Si les activit??s ne sont pas d??crites aucune action / intervention ne doit etre assur??e.", isCorrect: false },
      ],
    },{
      text: "Combien pourriez vous citer d'actions / d??cisions confirmant les valeurs en mati??re de s??curit?? des aliments (investissement, changement , organisation , relations clients , gammes de produits???.)?",
      options: [
        { id: 0, text: "plus de 5", isCorrect: false },
        { id: 1, text: "Aucune (ou pas clairement li??e)", isCorrect: true },
        { id: 2, text: "Toutes ( ou presque = la composante sant?? sant?? consommateur est toujours li??e)", isCorrect: false },
        { id: 3, text: "3 ?? 5", isCorrect: false },
        { id: 4, text: "1 ou 2", isCorrect: false },
      ],
    },{
      text: "Quel serait le niveau d'agilit?? de votre syst??me en place ?",
      options: [
        { id: 0, text: "Adaptatif : le syst??me et les supports pr??voient des niveaux de tol??rences pour les modifications ponctuelles et les autorit??s sont d??finies", isCorrect: false },
        { id: 1, text: "Evolutif : Affichage g??n??ral ,rappel des consignes en cas de r??clamations ", isCorrect: true },
        { id: 2, text: "Participatif : en plus de l'affichage ,r??unions d'??quipe regulieres avec les rappels des faits marquants et suivi par l'encadrement terrain", isCorrect: false },
        { id: 3, text: "Classique : Affichage , d??claration 'qualit??' comme demand?? par les normes", isCorrect: false },
        { id: 4, text: "Adapt?? : Diffusion par plusieurs canaux officiels et informels ,explicite concernant les objectifs / valeur et les indicateurs de terrain ", isCorrect: false },
      ],
    },{
      text: "Parmi ces indicateurs quels sont ceux dont vous disposez pour le suivi de la Culture du risque ?",
      options: [
        { id: 0, text: "Nombre de presqu'incidents d??chets/ non conformit??s internes d??tect??es / conformit?? d??s la premi??re fois", isCorrect: false },
        { id: 1, text: "Conformit?? inspection hygi??ne / r??alisation des formations", isCorrect: true },
        { id: 2, text: "Conformit?? d??s la premi??re fois / niveau de r??currence / nombre de rapports de consignes", isCorrect: false },
        { id: 3, text: "Conformit?? inspection hygi??ne / r??clamations / nombre de presqu'incidents / lames de surfaces ", isCorrect: false },
        { id: 4, text: "Conformit?? inspection hygi??ne / r??alisation formation / non conformit??s interne / r??clamations ", isCorrect: false },
      ],
    },{
      text: "Quelle est la position au regard du syst??me de r??compense concernant les bonnes pratiques en s??curit?? des aliments?",
      options: [
        { id: 0, text: "Le bon ??tat d'esprit de la mjorit?? du personnel ne n??cissite pas une r??connaissance sp??ciale pour les comportements conformes", isCorrect: false },
        { id: 1, text: "Pas de syst??me de r??compense ou d'encouragement ", isCorrect: true },
        { id: 2, text: "Un syst??me de r??compense ou d'encouragement nuirait ?? l'ambiance g??n??rale et se justifie pas pour l'accomplissement de taches pr??vues dans les fiches de poste", isCorrect: false },
        { id: 3, text: "Une politique de reconnaissance reconnue comme juste et transparente est mise en place vaec un volet sp??cifique pour la SA", isCorrect: false },
        { id: 4, text: "Ploitique de reconnaissance tr??s g??n??rale sur plusieurs aspects (productivit??s, r??clamation???.) mais assez transparente ( non individialis??e)", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    
  };
  const previous=()=> {
    
    

    if (currentQuestion>0) {
      setCurrentQuestion(currentQuestion -1);
    } 
    
  };
  const next=()=> {
    
    

    if (currentQuestion<20) {
      setCurrentQuestion(currentQuestion +1);
    } 
    
    if(currentQuestion==18){
      BT()
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  function BT() {
    var x = document.getElementById("BT");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
  }
  

  return (
    <div  style={{backgroundImage: 
      "url('images/cheese3.jpg')",
             height:'100%',
             marginTop:'0px',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
             overflowX:"scroll",
             position:"absolute",
             width:"100%"}}>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div style={{backgroundImage: 
          "url('images/cheese3.jpg')",
                 height:'100%',
                 marginTop:'0px',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 overflowX:"scroll",
                 position:"absolute",
                 width:"100%"}}>
                  <table   style={{width:"100 %",marginLeft:'20%'}}> <center><tr><td><h1 style={{color:"white",backgroundColor:"grey"}}>Resultats Finale</h1>
          <h2 style={{color:"white",backgroundColor:"grey"}}>
            {score} corrects sur {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2></td><td>  <td style={{width:"200px",height:'200px'}} rowSpan={5}> <GaugeChart id="gauge-chart2" 
                           colors={['#FF5F6D', '#FFC371','#25CF00']}
                           
  nrOfLevels={20} 
  percent={  score / questions.length} 
  needleColor="grey"
  textColor="blue"
/>               </td></td></tr></center></table>
          
          <div >
                    <Table className=' responsivetable table-striped table-hover table-bordered' style={{backgroundColor:"#EDEDED",width:"95%",marginLeft:"2%"}}>
                        <thead>
                            <tr>
                                <th style={{width:"50%"}}>Question
                               
                                
                                </th>
                                <th style={{width:"50%"}}>Votre r??ponce 
                                </th>
                              
                            </tr>
                        </thead>
                        <tbody>
              <tr> 
                
                <td colSpan={3} style={{backgroundColor:"blue"}}>cat1</td></tr>
                          <tr>
                           
                            
                          <td>{QST[1]}</td><td>{QST[0]}</td></tr>
                          <tr><td>{QST[3]}</td><td>{QST[2]}</td></tr>
                          <tr><td>{QST[5]}</td><td>{QST[4]}</td></tr>
                          <tr><td>{QST[7]}</td><td>{QST[6]}</td></tr>
                          <tr> <td colSpan={3} >cat1</td></tr>
                          <tr>
                           
                            
                            
                          <td>{QST[9]}</td><td>{QST[8]}</td></tr>
                          <tr><td>{QST[11]}</td><td>{QST[10]}</td></tr>
                          <tr><td>{QST[13]}</td><td>{QST[12]}</td></tr>
                          <tr><td>{QST[15]}</td><td>{QST[14]}</td></tr>
                          <tr> <td colSpan={3} >cat1</td></tr>
                          <tr>
                           
                           
                          <td>{QST[17]}</td><td>{QST[16]}</td></tr>
                          <tr><td>{QST[19]}</td><td>{QST[18]}</td></tr>
                          <tr><td>{QST[21]}</td><td>{QST[20]}</td></tr>
                          <tr><td>{QST[23]}</td><td>{QST[22]}</td></tr>
                          <tr> <td colSpan={3} >cat1</td></tr>
                          <tr>
                           
                            
                            
                          <td>{QST[25]}</td><td>{QST[24]}</td></tr>
                          <tr><td>{QST[27]}</td><td>{QST[26]}</td></tr>
                          <tr><td>{QST[29]}</td><td>{QST[28]}</td></tr>
                          <tr><td>{QST[31]}</td><td>{QST[30]}</td></tr>
                          <tr> <td colSpan={3} >cat1</td></tr>
                          <tr>
                           
                            
                           
                          <td>{QST[33]}</td><td>{QST[32]}</td></tr>
                          <tr><td>{QST[35]}</td><td>{QST[34]}</td></tr>
                          <tr><td>{QST[37]}</td><td>{QST[36]}</td></tr>
                          <tr><td>{QST[39]}</td><td>{QST[38]}</td></tr>
                                     
                        </tbody>
                        
                    </Table>
                   
                </div>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="quiz_box" style={{marginTop:"0%"}} >
          {/* Current Question  */}
          <header>
          <div class="title">Auto-??valuation Food safety Culture</div>
          </header>
          <h3 className="question-text"style={{textAlign: 'center'}}>{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                style={{background: "aliceblue",
                  border: "1px solid #84c5fe",borderRadius:"5px", padding:" 8px 15px",
                  fontSize: "17px",
                  marginBottom: "15px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  hover:"backgroundColor:red"
                }}
                  key={option.id}
                  //onClick={() => optionClicked(option.isCorrect)}
                  onClick={()=>(setQST(current => [...current, option.text,questions[currentQuestion].text]))+console.log("QST",QST)+optionClicked(option.isCorrect)}
                  
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          <footer>
          <div class="total_que">
          Question: {currentQuestion + 1} sur {questions.length}

            </div>

          <Button variant="primary" style={{backgroundColor:"#2596be",marginLeft:"60%"}} onClick={() =>previous()}>Pr??c??dent</Button>

          <Button variant="success"  onClick={() =>next()}>Suivant</Button>
          <div id="BT" style={{display: 'none' }}>

          <Button variant="warning"  onClick={() => setShowResults(true)+handletimer()+handledata()}>Terminer</Button>
          </div>
          </footer>
        </div>
        
      )}
    </div>
    
  );
}

export default About;
