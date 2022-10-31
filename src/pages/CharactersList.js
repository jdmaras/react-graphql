import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";
import "./CharactersList.css"

//naming your query and making it equal to the import from apollo/client


export default function CharactersList() {
    //this is the hook from the separate component making the query of
    // error - loading - data fom the useCharacters hook
    const { error, loading, data } = useCharacters()


    //we rewrote this call in a separate hook but this is how you would grab this
    //if you wanted to make the query in NOT a hook
    //const { error, loading, data } = useQuery(GET_CHARACTERS)
    console.log(error, loading, data)
    if (loading) return <div>spinner...</div>
    if (error) return <div>something went wrong</div>
    //if an error happens is going to be populated here
    //it's your catch
    //obj.error;

    //this is a boolean figuring if you're fetching the data / loading the data
    //is it true or not?
    //obj.loading;

    //actual data
    //obj.data;
    return (
        <div className="CharacterList">
            {data.characters.results.map(character => {
                return (
                    <Link to={`/${character.id}`}>
                        <img src={character.image} />
                        <h2>{character.name}</h2>
                    </Link>
                )
            })}
        </div>
    )
}