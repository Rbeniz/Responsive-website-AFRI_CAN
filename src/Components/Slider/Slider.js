import React, {useState} from 'react'
import "./Slider.css"
import dataSlider from "./dataSlider"
import BtnSlider from "./BtnSlider"

export default function Slider() {

    const [slideAnime,setSlideAnime] = useState({
        index :1,
        inProgress: false
    })

    const nextSlide =()=>{

        if( slideAnime.index !== dataSlider.length  && !slideAnime.inProgress ){

            setSlideAnime({index: slideAnime.index+1 ,
                inProgress: true})

             // prevenir les spams to avoid pbs
            setTimeout(()=>{
                //it takes the value of index before the MAJ (l'incrementation)
                setSlideAnime({index: slideAnime.index+1 ,
                    inProgress: false})
            },400) 
        }
        else if(slideAnime.index === dataSlider.length && !slideAnime.inProgress){

            setSlideAnime({index: 1 ,
                inProgress: true})

              setTimeout(()=>{
                setSlideAnime({index: 1 ,
                    inProgress: false})
            },400) 
        }
    }
    const prevSlide =()=>{

        if( slideAnime.index !== 1 && !slideAnime.inProgress){

            setSlideAnime({index: slideAnime.index-1 ,
                inProgress: true})

            setTimeout(()=>{
                setSlideAnime({index: slideAnime.index-1 ,
                     inProgress: false})
            },400) 
        }
        else if(slideAnime.index === 1 && !slideAnime.inProgress){

            setSlideAnime({index: 5 ,
                inProgress: true})

             setTimeout(()=>{
                setSlideAnime({index: 5 ,
                    inProgress: false})
            },400) 
        }
    }

    const moveDot = index =>{
        setSlideAnime({index: index ,
                    inProgress: false})
    }



  return (
    <div className='container-slider'>

        {
            dataSlider.map((obj,index)=>{
                return(
                    <div key={obj.id}
                    className={ slideAnime.index === index+1 ? "slide active-anim" : "slide" }
                    style={{backgroundImage: `url( /Imgs/img${index+1}.jpg )` }}
                    >
                        hello
                    </div>
                )
            })
        }

        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <BtnSlider moveSlide={nextSlide} direction={"next"} />

        <div className="container-dots">
             {/* creation d'un tab vide to get index  */}
            {    Array.from({length: 5}).map((item,index)=>{
                    return <button 
                    className={slideAnime.index === index +1 ? "dot active" : "dot"} 
                    onClick={()=>moveDot(index+1)}
                    ></button> ;
                })
            }
         </div>


    </div>
  )
}
