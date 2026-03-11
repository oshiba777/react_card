import { useState } from "react";
import cards from "../data.json";
import{Card} from "./Card"
import './Set.css';
export function Set() {
    const [step,setstep] = useState(0);
    return (
        <div>
            <h2>Название набора</h2>
            <Card front={cards[step].front} back={cards[step].back}/>
            <div className="control">
                <button>&lt;</button>
                <p>1/10</p>
                <button>&gt;</button>
            </div>
        </div>
    );
}
  