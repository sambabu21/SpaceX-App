export default function Tile({ name,type,status }){
    return (
        <tr>
            <td>{name}</td>
            <td>{type}</td>
            <td>{status}</td>
        </tr>
    )
}