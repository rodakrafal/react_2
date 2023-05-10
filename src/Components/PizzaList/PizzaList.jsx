import {Pizza} from "../Pizza/Pizza";

export const PizzaList = ({pizzas, onDelete, onEdit}) => {

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Image
                    </th>
                    <th></th>
                </tr>
                {
                    pizzas ? pizzas.map(pizza => <Pizza pizza={pizza} key={pizza.id} onDelete={onDelete}
                                                        onEdit={onEdit}/>
                    ) : null
                }

                </tbody>
            </table>
        </>
    )
}