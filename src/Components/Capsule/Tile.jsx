export default function Tile({ name,type,status,handleClick }){
    return (
        <tr onClick={handleClick}>
            <td>{name}</td>
            <td>{type}</td>
            <td>{status}</td>
        </tr>
    )
}