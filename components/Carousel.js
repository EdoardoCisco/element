import Image from "next/image";
import {BsCaretLeftFill,BsCaretRightFill} from "react-icons/bs"   

const Carousel = ({list,state,setState,height,width,llen}) =>{

  // Callback per tornare indietro di uno in array circolare 
  const goBack = async (setState,state,list) =>{
    if((state -1)== -1) await setState(llen-1)
    else await setState(state-1)
    // console.log(state)
  };

  // Callback per tornare indietro di uno in array circolare 
  const goNext = async (setState,state,list) =>{
    if((state + 1) ==(llen)) await  setState(0)
    else await setState(state+1)
    // console.log(state)
  };

  return ( // BackButton -- Immagine -- NextButton 
    <div className="flex flex-row justify-center items-stretch h-1/3 w-full  ">
      <div className="hover:text-white text-black flex items-center justify-center" onClick={ async () => await goBack(setState,state,list)}>
        <BsCaretLeftFill size={40}/>
      </div>
      <Image src={list[state]} width={width} height={height}/>
      <div className="hover:text-white text-black flex items-center justify-center"  onClick={ async () => await goNext(setState,state,list)}>
        <BsCaretRightFill size={40}/>
      </div>
     </div>
  ) 
}
export default Carousel  
