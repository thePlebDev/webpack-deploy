import { render } from 'react-dom';
import "./styles/index.scss";

import App from './Components/App'

render(<App/>,document.getElementById('root'))

const elvenShieldRecipe ={
    leatherStrips:2,
    ironIngot:1,
    refinedMoonstone:4
}


console.log(elvenShieldRecipe)
console.log("THIS IS LIVE RELOADING")