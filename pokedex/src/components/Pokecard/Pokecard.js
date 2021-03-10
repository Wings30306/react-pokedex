import React, {
    Component
} from "react"
import "./Pokecard.css"

/**
 * Helper function to create 3-digit id
 */
function threeDigitID(id) {
    let idAsString = id.toString()
    if (idAsString.length === 1) {
        return "00" + idAsString
    } else if (idAsString.length === 2) {
        return "0" + idAsString
    }
    return idAsString
}

function imageString(id) {
    return "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + threeDigitID(id) + ".png"
}

class Pokecard extends Component {
    render() {
        return ( 
            <div className = "Pokecard card" >
                <h1 className = "Pokecard-title">{this.props.pokemon.name}</h1> 
                <img src={imageString(this.props.pokemon.id)} alt={this.props.pokemon.name} />
                <p>Type: {this.props.pokemon.type}</p>
                <p>EXP: {this.props.pokemon.base_experience}</p>
            </div>
        )
    }
}

export default Pokecard