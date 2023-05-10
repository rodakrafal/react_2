import {useEffect, useState} from "react";
import "./style.css";

export const PizzaForm = ({pizza, onSubmit, onClear}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(1);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        if (pizza) {
            setName(pizza.name);
            setPrice(pizza.price);
            setDescription(pizza.description);
            setImage(pizza.image);
        } else {
            setName("");
            setPrice(1);
            setDescription("");
            setImage("");
        }

    }, [pizza])

    const handleSubmit = () => {
        if (name === "") {
            window.alert("name cannot be empty");
            return;
        }
        onSubmit({name, price, description, image})
    }

    return (
        <div>
            PizzaForm
            <form onSubmit={event => event.preventDefault()}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>

                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>

                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>

                    <label>Image</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div>
                    <button type="sumbit" value="submit" onClick={handleSubmit}> Submit</button>
                    <button type="reset" onClick={onClear}>Clear</button>
                </div>

            </form>
        </div>
    )
}