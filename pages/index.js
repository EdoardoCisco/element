import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";

const LogoGroup = {
  backgroundImage:"url('/logo/logo1.jpg')",
  height:"auto",
  width:"auto",
};
//layout:"fill",(()=>
const fotoFade = [
  { image: <img src="/foto/photo000.jpg"></img> },
  { image: <img src="/foto/photo001.jpg"></img> },
  { image: <img src="/foto/photo002.jpg"></img> },
  { image: <img src="/foto/photo003.jpg"></img> },
  { image: <img src="/foto/photo004.jpg"></img> },
  { image: <img src="/foto/photo005.jpg"></img> },
  { image: <img src="/foto/photo006.jpg"></img> },
  { image: <img src="/foto/photo007.jpg"></img> },
  { image: <img src="/foto/photo008.jpg"></img> },
  { image: <img src="/foto/photo009.jpg"></img> },
  { image: <img src="/foto/photo010.jpg"></img> },
  { image: <img src="/foto/photo011.jpg"></img> },
  { image: <img src="/foto/photo012.jpg"></img> },
  { image: <img src="/foto/photo013.jpg"></img> },
  { image: <img src="/foto/photo014.jpg"></img> },
  { image: <img src="/foto/photo015.jpg"></img> },
];

const fotoPath = [
  "/foto/photo000.jpg",
  "/foto/photo001.jpg",
  "/foto/photo002.jpg",
  "/foto/photo003.jpg",
  "/foto/photo004.jpg",
  "/foto/photo005.jpg",
  "/foto/photo006.jpg",
  "/foto/photo007.jpg",
  "/foto/photo008.jpg",
  "/foto/photo009.jpg",
  "/foto/photo010.jpg",
  "/foto/photo011.jpg",
  "/foto/photo012.jpg",
  "/foto/photo013.jpg",
  "/foto/photo014.jpg",
];
const locPath = [
  "/locandine/photo001.jpg",
  "/locandine/photo002.jpg",
  "/locandine/photo003.jpg",
  "/locandine/photo004.jpg",
  "/locandine/photo005.jpg",
  "/locandine/photo006.jpg",
  "/locandine/photo007.jpg",
  "/locandine/photo008.jpg",
  "/locandine/photo009.jpg",
  "/locandine/photo010.jpg",

];

//export default class YoutubeVideo 

export default function elementPage(){
  const [btnImg, setBtnImg] = useState(0) //var per img  
  const [btnLoc, setBtnLoc] = useState(0) //var per img  
  
//  render() {
  
    const opts = {
      height: "auto",
      width: "auto",
      playerVars: {
        autoplay: 0,
      },
_onReady(event) {
  event.target.pauseVideo();
}
    }
 
  return (
  <div className="w-screen bg-bgElement">
    <div className="flex flex-col items-center space-y-16">
      <div>
      <p className="text-justify text-white px-6 pw-2 max-w-7xl font-sans bg-no-repeat bg-center bg-opacity-40" style={LogoGroup} >
        La band fonda le basi nel 2014, trovando radici nella provincia vicentina.
        Fin dagli albori, spinti dal desiderio di creare qualcosa di autentico iniziano a scrivere musica propria.
        Nel 2015 il trio formato da Sebastiano Fracasso (vocals & guitar), Giulio Zonin (bass), Elia Rolenti (drums)
        si completa con l’inserimento del chitarrista lead e secondo cantante Emanuele Tonin.
        La band al completo inizia fin da subito a calcare i palchi della zona e non solo.<br/>

        Nel settembre 2015 (all’età di 16/17 anni) dopo la prima esperienza in studio pubblicano un Ep contenente i primi 4 pezzi della band,
        che esce di produzione dopo pochi mesi.
        Nel 2016 partecipano al Vicenza Rock Contest vincendo il premio “miglior band Metal”.
        Nel 2017 pubblicano il primo singolo e videoclip “My disgrace”.
        Nel 2018, grazie ad un finanziamento musicraiser della fanbase, registrano e pubblicano il loro primo full length album “We Are What We Are”,
        contenente dieci pezzi, registrato in Produzioni fantasma (VI), 
        presentato al Bocciodromo di Vicenza. Il sound fresco e moderno di We Are What We Are viene apprezzato sopratutto dal pubblico e dagli ascoltatori.<br/>

        Grazie al primo disco la band si fa conoscere in tutto il centro nord Italia, continuando ininterrottamente per due anni l’attività live.
        Fra i primi posti negli ascolti internazionali, dopo l’Italia, si trovano Spagna, Ungheria, Canada e Usa.
        Dal 2019 entrano nel bill ufficiale Orion Agency, guidati da Matteo Baroni.<br/>

        Nel 2020 esce il singolo e videoclip “Borderline”, linea di confine che segna il passaggio della band ad un nuovo capitolo della sua esistenza.
        Dal 2021 ad oggi iniziano la stesura del nuovo disco, con termine dei lavori al 2022. 
        Questo nuovo lavoro discografico li impegna nella creazione di uno stile compositivo e sonoro completamente autentico.
        Gli Element dal 2015 hanno collezzionato decine di live in locali ed open air, condividendo il palco con nomi come Tom Angelripper, Onkel Tom (Sodom), Fleshgod Apocalypse, Methedras, Ulvedharr, Kanseil, Sinphobia, A Tear Beyond e altri.
      </p>
     </div>
     
     <YouTube videoId="9ZBjtsx7Th0" 
            opts={opts}/>
      <div className="flex flex-row items-center justify-between space-x-10">
        <img src ='photoBandWrote.jpg' className="w-auto h-auto"></img>
        <p className="text-gray-50 font-sans px-6 pw-2 max-w-7xl">
          <strong>Backline Element: 4 componenti</strong><br/><br/>
           {'\u2022'}3 voci (una principale e 2 cori)<br/>
           {'\u2022'}2 chitarre (testata personale)<br/>
           {'\u2022'}basso (testata personale)<br/>
           {'\u2022'}batteria<br/><br/>  
            Utilizziamo basi elettroniche gestite direttamente dal batterista con tablet (jack da 3,5 mm).
        </p>
     </div>
     <div>
      <button onClick={async ()=> {setBtnImg((btnImg+1)%fotoPath.length)}} className="text-orange-50">RIGHT</button>
      <img src={fotoPath[btnImg]}className="w-auto h-auto"></img>
      <button onClick={async ()=> { if (btnImg == 0 ) {setBtnImg(fotoPath.length - 1)} else setBtnImg( (btnImg-1))}} className="text-orange-50">LEFT</button>
     </div>
      <div>

      <button onClick={async ()=> {setBtnLoc((btnLoc+1)%fotoPath.length)}} className="text-orange-50">RIGHT</button>
      <img src={locPath[btnLoc]}className="w-auto h-auto"></img>
      <button onClick={async ()=> { if (btnLoc == 0 ) {setBtnLoc(fotoPath.length - 1)} else setBtnLoc( (btnLoc-1))}} className="text-orange-50">LEFT</button>
      </div>
      <div className="flex flex-row items-center justify-between space-x-14">
          <a href="">
          
          </a>
      </div>
    </div>
  </div>
  );
  
}

//<div>
//          <img src={fotoPath[1]}></img>
//        </div>
//        <div>
//          <img src={fotoPath[2]}></img>
//        </div>
//        <div>
//          <img src={fotoPath[3]}></img>
//        </div>
      // {LogoGroup.icon}

   //    Utilizziamo basi elettroniche gestite direttamente dal batterista con tablet (jack da 3,5 mm).