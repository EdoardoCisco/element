import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";
import Carousel from "../components/Carousel.js";

const LogoGroup = {
  backgroundImage:"url('/logo/logo1.jpg')",
  height:"auto",
  width:"auto",
};

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


export default function elementPage() {
  const [btnImg, setBtnImg] = useState(0) //var per img  
  const [btnLoc, setBtnLoc] = useState(0) //var per img  
  
  
    const opts = {
      height: " ",
      width: " ",
      playerVars: {
        autoplay: 0,
      },
_onReady(event) {
  event.target.pauseVideo();
}

    }

  return (
  <div className="w-screen bg-bgElement">
      <div className="flex flex-col items-center space-y-16 pt-10">
        <div className="flex flex-row items-center gap-x-48 ">
          <Image className=" shadow-none" src="/logo/logo1.jpg" width={220} height={200} />
        </div>
      <div>
        <p className="text-justify text-white px-6 pw-2 max-w-7xl font-sans bg-no-repeat bg-center bg-opacity-40" style={LogoGroup} >
            La band fonda le basi nel 2014, trovando radici nella provincia vicentina.
            Fin dagli albori, spinti dal desiderio di creare qualcosa di autentico iniziano a scrivere musica propria.
            Nel 2015 il trio formato da Sebastiano Fracasso (vocals & guitar), Giulio Zonin (bass), Elia Rolenti (drums)
            si completa con l’inserimento del chitarrista lead e secondo cantante Emanuele Tonin.
            La band al completo inizia fin da subito a calcare i palchi della zona e non solo.<br />

            Nel settembre 2015 (all’età di 16/17 anni) dopo la prima esperienza in studio pubblicano un Ep contenente i primi 4 pezzi della band,
            che esce di produzione dopo pochi mesi.
            Nel 2016 partecipano al Vicenza Rock Contest vincendo il premio “miglior band Metal”.
            Nel 2017 pubblicano il primo singolo e videoclip “My disgrace”.
            Nel 2018, grazie ad un finanziamento musicraiser della fanbase, registrano e pubblicano il loro primo full length album “We Are What We Are”,
            contenente dieci pezzi, registrato in Produzioni fantasma (VI),
            presentato al Bocciodromo di Vicenza. Il sound fresco e moderno di We Are What We Are viene apprezzato sopratutto dal pubblico e dagli ascoltatori.<br />

            Grazie al primo disco la band si fa conoscere in tutto il centro nord Italia, continuando ininterrottamente per due anni l’attività live.
            Fra i primi posti negli ascolti internazionali, dopo l’Italia, si trovano Spagna, Ungheria, Canada e Usa.
            Dal 2019 entrano nel bill ufficiale Orion Agency, guidati da Matteo Baroni.<br/>

           Nel 2020 esce il singolo e videoclip “Borderline”, linea di confine che segna il passaggio della band ad un nuovo capitolo della sua esistenza.
           Dal 2021 ad oggi iniziano la stesura del nuovo disco, con termine dei lavori al 2022. 
           Questo nuovo lavoro discografico li impegna nella creazione di uno stile compositivo e sonoro completamente autentico.
           Gli Element dal 2015 hanno collezzionato decine di live in locali ed open air, condividendo il palco con nomi come Tom Angelripper, Onkel Tom (Sodom), Fleshgod Apocalypse, Methedras, Ulvedharr, Kanseil, Sinphobia, A Tear Beyond e altri.
       </p>
     </div>
     
     <YouTube videoId="9ZBjtsx7Th0"  />

      <div className="flex flex-row items-center justify-between space-x-10">
        <p className="text-gray-50 font-sans px-6 pw-2 max-w-7xl">
          <strong>Backline Element: 4 componenti</strong><br/><br/>
           {'\u2022'}3 voci (una principale e 2 cori)<br/>
           {'\u2022'}2 chitarre (testata personale)<br/>
           {'\u2022'}basso (testata personale)<br/>
           {'\u2022'}batteria<br/><br/>  
            Utilizziamo basi elettroniche gestite direttamente dal batterista con tablet (jack da 3,5 mm).
        </p>
      </div>
        <Carousel
          className="flex justify-center my-10"
          list={fotoPath}
          state={btnImg}
          setState={setBtnImg}
          width={900}
          height={500}
          llen={15}
        />

        <Carousel
          className="flex justify-center my-10"
          list={locPath}
          state={btnLoc}
          setState={setBtnLoc}
          width={400}
          height={600}
          llen={10}
        />
      </div>
    </div>)
}
        //<img src ='photoBandWrote.jpg' className="w-auto h-auto"></img>
//className="max-h-fit max-w-fit min-h-fit min-w-fit"