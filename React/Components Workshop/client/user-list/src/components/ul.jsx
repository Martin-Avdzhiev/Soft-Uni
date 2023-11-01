import { useState } from "react";
import styles from '../css/ul.module.css'
export default function Ul(props) {
    let [isSelected, setIsSelected] = useState(true);

    return (
        <>
            <ul className={isSelected ? styles.selected : ""}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <button onClick={() => setIsSelected(!isSelected)}>Click me!</button>
        </>
    )
}