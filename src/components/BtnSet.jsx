import { Link } from "react-router-dom";

import'./BtnSet.Css';

export function Btnset({name}){
    return <li className="list-set__item">
        <Link className="list-set__btn" to="/set" stste={{set:name}}>
        {name}
        </Link>
    </li>
}
