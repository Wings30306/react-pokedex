import React, {
    Component
} from "react"
import "./Pokecard.css"

/**
 * Helper function to create 3-digit id
 */
let threeDigitID = (id) => (id <= 999 ? `00${id}`.slice(-3): id)

function imageString(id) {
    return "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + threeDigitID(id) + ".png"
}

class Pokecard extends Component {
    render() {
        return ( 
            <div className = "Pokecard card" >
                <h2 className = "Pokecard-title">{this.props.pokemon.name}</h2> 
                <img src={imageString(this.props.pokemon.id)} alt={this.props.pokemon.name} />
                <p>Type: {this.props.pokemon.type}</p>
                <p>EXP: {this.props.pokemon.base_experience}</p>
            </div>
        )
    }
}

export default Pokecard