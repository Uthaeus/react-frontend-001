import { useEffect } from "react";
import { useForm } from "react-hook-form";

function ExampleFormC({ submitHandler}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => submitHandler(data);

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="example-form form-c">
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" {...register("firstName", { required: true, maxLength: 20 })} />
                {errors?.firstName && <span className="error">This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" {...register("lastName", { required: true, maxLength: 20 })} />
                {errors?.lastName && <span className="error">This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors?.email && <span className="error">This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input type="text" className="form-control" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                {errors?.mobileNumber && <span className="error">This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="FavoritePizza">Favorite Pizza</label>
                <select className="form-control" {...register("FavoritePizza", { required: true })}>
                    <option value="">Select a pizza</option>
                    <option value="Dominos">Dominos</option>
                    <option value="Pizza Hut">Pizza Hut</option>
                    <option value="Papa Johns">Papa Johns</option>
                    <option value="Little Caesars">Little Caesars</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="PizzaMakerUse">How frequently?</label>
                <input type='radio' {...register("PizzaMakerUse", { required: true })} value="Always" /> Always
                <input type='radio' {...register("PizzaMakerUse", { required: true })} value="Mostly" /> Mostly
                <input type='radio' {...register("PizzaMakerUse", { required: true })} value="Sometimes" /> Sometimes
                <input type='radio' {...register("PizzaMakerUse", { required: true })} value="Never" /> Never
            </div>

            <div className="form-group">
                <label htmlFor="FavoriteToppings">Favorite Toppings</label>
                <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Pepperoni" /> Pepperoni
                <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Sausage" /> Sausage
                <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Mushrooms" /> Mushrooms
                <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Onions" /> Onions
                <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Bacon" /> Bacon
                <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Extra Cheese" /> Extra Cheese
            </div>

            <div className="form-group">
                <label htmlFor="comments">Comments</label>
                <textarea className="form-control" rows={6} {...register("comments")} />
            </div>

            <button type="submit" className="form-btn">Submit</button>
        </form>
    );
}

export default ExampleFormC;