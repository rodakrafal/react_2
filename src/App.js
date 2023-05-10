import './App.css';
import {useEffect, useState} from "react";
import {PizzaList} from "./Components/PizzaList/PizzaList";
import {PizzaForm} from "./Components/PizzaFrom/PizzaForm";

function App() {

    const [pizzaList, setPizzaList] = useState([]);
    const [pizza, setPizza] = useState(null);

    function getPizzas() {
        fetch("https://localhost:7190/api/Pizza")
            .then((res) => res.json())
            .then((data) => {
                    console.log(data);
                    setPizzaList(data);
                }
            )
            .catch((error) => console.log(error))
    }

    const onSubmit = (pizza) => {
        if (!pizza) {
            return;
        }
        console.log(pizza);

        fetch("https://localhost:7190/api/Pizza",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: pizza.name,
                    price: pizza.price,
                    description: pizza.description,
                    image: pizza.image,
                })
            }
        ).then((res) => res.json())
            .then((data) => {
                getPizzas();
            })
    }

    const onDelete = (pizza) => {
        if (!pizza) {
            return;
        }
        fetch(`https://localhost:7190/api/Pizza/${pizza.id}`, {
            method: "DELETE",
        }).then((res) => getPizzas()).catch((error) => window.alert(error))
    }

    const onEdit = (pizza) => {
        setPizza(pizza)
    }

    const onClear = () => {
        setPizza(null);
    }


    useEffect(() => {
        getPizzas();
    }, [])

    return (
        <div className="App">
            <PizzaForm pizza={pizza} onSubmit={onSubmit} onClear={onClear}/>
            <PizzaList pizzas={pizzaList} onDelete={onDelete} onEdit={onEdit}/>
        </div>
    );
}

export default App;
