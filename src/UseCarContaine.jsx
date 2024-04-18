import { useEffect, useState } from "react"
import UserCard from "./UserCard"
import { useParams } from "react-router-dom"

function UseCarContaine() {
    const [characters, setCharacters] = useState([])
    const params = useParams()
    useEffect(() => {
        let pedido;
        if (params.categoria) {
            pedido = fetch("https://rickandmortyapi.com/api/character/?species=" + params.categoria)
        } else {
            pedido = fetch("https://rickandmortyapi.com/api/character")
        }
        pedido.then((res) => {
            return res.json()
        })
            .then((res) => {
                setCharacters(res.results)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [params.categoria])

    return (
        <>
            {characters.map((character) => {
                return <UserCard key={character.id} character={character} />
            })}
        </>
    )
}
export default UseCarContaine