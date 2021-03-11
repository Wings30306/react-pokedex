import React, {Component} from "react"
import Pokedex from "../Pokedex/Pokedex"

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array
}

function totalExperience(array) {
        let experience=0
        for (let i = 0; i<array.length; i++){
            experience += array[i]["base_experience"]
        }
        return experience
    }

class Pokegame extends Component {
    static defaultProps = {
        pokemonList: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }

    render() {
        let pokemonList = this.props.pokemonList
        console.log(pokemonList)
        const shuffledPokemonList = shuffle(pokemonList)
        console.log(shuffledPokemonList)
        let hand1 = []
        let hand2 = []
        for (let i=0; i < shuffledPokemonList.length; i++) {
            if (i % 2) {
                hand1.push(shuffledPokemonList[i])
            } else {
                hand2.push(shuffledPokemonList[i])
            }
        }

        let hand1experience = totalExperience(hand1)
        let hand2experience = totalExperience(hand2)
        
        return (
            <div className="Pokegame" >
                <h1>Let's play!</h1>
                <Pokedex pokemonList={hand1} isWinner={hand1experience > hand2experience} />
                <br />
                <Pokedex pokemonList={hand2} isWinner={hand1experience < hand2experience}/>
            </div>
        )
    }
}

export default Pokegame