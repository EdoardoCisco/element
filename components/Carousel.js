import Image from "next/image";
import {BsCaretLeftFill,BsCaretRightFill} from "react-icons/bs"   

const Carousel = ({list,state,setState,height,width}) =>{

  // Callback per tornare indietro di uno in array circolare 
  const goBack = (setState,state,list) =>{
    if(state==0) setState(list.lenght)
    else setState(state-1)
  };

  // Callback per tornare indietro di uno in array circolare 
  const goNext = (setState,state,list) =>{
    if(state==list.lenght) setState(0)
    else setState(state+1)
  };

  return ( // BackButton -- Immagine -- NextButton 
    <div className="flex flex-row justify-center items-stretch h-1/3 w-full  ">
      <div className="hover:text-white text-black flex items-center justify-center" onClick={() => goBack(setState,state,list)}>
        <BsCaretLeftFill size={40}/>
      </div>
      <Image src={list[state]} width={width} height={height}/>
      <div className="hover:text-white text-black flex items-center justify-center"  onClick={() => goNext(setState,state,list)}>
        <BsCaretRightFill size={40}/>
      </div>
     </div>
  ) 
}
export default Carousel  
