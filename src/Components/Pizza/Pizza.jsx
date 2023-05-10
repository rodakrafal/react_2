export const Pizza = ({pizza, onDelete, onEdit}) => {
    return (
        <tr>
            <th>{pizza.id}</th>
            <th>{pizza.name}</th>
            <th>{pizza.price}</th>
            <th>{pizza.description}</th>
            <th><img src={pizza.image} alt={pizza.name}/></th>
            <th>
                <button onClick={() => onDelete(pizza)} style={{backgroundColor: "red"}}>Delete</button>
                <button onClick={() => onEdit(pizza)} style={{backgroundColor: "orange"}}>Edit</button>
            </th>
        </tr>
    )
}