import { useState } from "react";
import cards from "../data.json";
import{Card} from "./Card"
import './Set.css';
import{useLocation} from "react-router-dom"

export function Set() {
    const location = useLocation()
    const set = location.state
    cards = cards.filter((item)=>(item.setName === set))

    const [step,setStep] = useState(0);
    const handleNext = () => {
        if(step < cards.length -1){
        setStep(step +1);
        }
    }
     const handlePrev = () => {
        if(step > 0){
        setStep(step -1);
        }
    }
    
    return (
        <div>
            <h2>Название набора</h2>
            <Card front={cards[step].front} back={cards[step].back} key={cards[step].id}/>
            <div className="control">
                <button  
                disabled = {step == 0 ? true : false}
                onClick={handlePrev}>&lt;</button>
                <p>{step +1} / {cards.length} </p>
                <button 
                disabled ={step == cards.length -1 ? true:false}
                onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
}
  