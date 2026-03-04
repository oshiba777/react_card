import { useState } from "react";
import cards from "../data.json";
import{Card} from "./Card"
export function Set() {
    const [step,setstep] = useState(0);
    return (
        <div>
            <h2>Название набора</h2>
            <Card front={cards[step].front} back={cards[step].back}/>
            <p>элемены управления</p>  
        </div>
    );
}
  