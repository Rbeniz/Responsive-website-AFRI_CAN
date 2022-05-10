import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React, {useState} from 'react'
import "./Components/Slider/Slider.css"
import dataSlider from "./Components/Slider/dataSlider"
import BtnSlider from "./Components/Slider/BtnSlider"


function App() {

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
                    style={{background: `url( /Imgs/img${index+1}.jpg ) center no-repeat fixed` }}
                    >
                            
                    
                    </div>
                )
            })
        }

        
      

      <div className="details">

            {/* <img src="./logo.png" alt="#" className="logo" /> */}
            
              <div className="illustration"></div>
              <div className="logo"></div>
              <p className="sub-title">AMAZING TRIPS</p>
              <div className="txt-box">
                <p className="txt1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam iusto eos dicta recusandae minima accusamus id vel consequuntur soluta.</p>
                <p className="learn-more">Learn more</p>
                 </div> 
             {    Array.from({length: 5}).map((item,index)=>{
                          return <p className="title"
                          style={{backgroundImage: `url( /Imgs/img${slideAnime.index}.jpg ) ` }}
                          >AFRI <br />Forest</p>
                          
                      })
                  }
        
      </div>


 

      <div className="navbar">

         <Navbar/>

          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
          <BtnSlider moveSlide={nextSlide} direction={"next"} />


          <div className="container-dots">
              {/* creation d'un tab vide to get index  */}

              <div className="line line1"></div>

                  {    Array.from({length: 5}).map((item,index)=>{
                          return <button 
                          className={slideAnime.index === index +1 ? "dot active" : "dot"} 
                          onClick={()=>moveDot(index+1)}
                          ></button> ;
                      })
                  }

              <div className="line line2"></div>
          </div>

                  <p className="title-suite">CAN</p>
      </div>

      <section>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, beatae! Culpa at aut officiis quasi, aperiam possimus consectetur facilis reprehenderit?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius velit porro at deleniti qui minima, ullam magni culpa eaque commodi sed perferendis possimus quisquam vitae earum eum impedit. Harum accusamus iste itaque corrupti temporibus consequatur omnis porro ut at atque ipsa quas, quos eligendi voluptate expedita esse distinctio nostrum officia repellat optio rem voluptas id et. Ipsum reiciendis inventore impedit consectetur, omnis cupiditate nostrum minima, eveniet iusto modi mollitia.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat facere itaque explicabo impedit dicta laudantium, sequi nisi saepe eveniet, nihil cumque perspiciatis reiciendis quaerat repellat! Inventore distinctio velit facilis sit sed. Distinctio, quos! Tempore, explicabo dolores nam magni rem quasi quod eius quibusdam, est temporibus hic libero debitis officiis minima expedita corrupti non commodi quia! Reiciendis optio, aspernatur ratione excepturi in voluptas aut error iste, cumque amet nostrum debitis numquam nemo dolorum nobis, facere suscipit assumenda? Corrupti porro sint vero, fugiat exercitationem pariatur quis aliquam maiores alias sunt voluptas commodi dignissimos minima beatae corporis nesciunt aperiam et quae eum? Animi incidunt laudantium possimus rerum accusantium soluta repellendus. Nam numquam suscipit nesciunt excepturi impedit sapiente culpa! Iusto natus, aut similique consequatur dicta obcaecati, delectus ipsam cupiditate voluptatibus impedit, quam perspiciatis temporibus. Consectetur vitae, voluptate natus alias saepe ipsa debitis ducimus autem! Aliquam fugiat quasi veritatis facere aperiam nihil accusamus laudantium aspernatur quod quae illo reiciendis deleniti cum, accusantium natus pariatur alias unde! Laudantium eveniet iste aut voluptate praesentium dolorem ratione accusamus officia, molestiae at aspernatur fuga inventore sint ex natus harum hic tempore! Aliquid suscipit ipsum nesciunt. Adipisci, repudiandae earum architecto deleniti nobis nulla quasi velit sint ducimus fugiat, fugit debitis!</p>
      </section>

    </div>
  );
}

export default App;
