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
            <div className="row row-cols-2 mb-3">
                <div className="form-group col mb-1">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" {...register("firstName", { required: true, maxLength: 20 })} />
                    {errors?.firstName && <span className="error">This field is required</span>}
                </div>

                <div className="form-group col mb-1">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" {...register("lastName", { required: true, maxLength: 20 })} />
                    {errors?.lastName && <span className="error">This field is required</span>}
                </div>

                <div className="form-group col mb-1">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors?.email && <span className="error">This field is required</span>}
                </div>

                <div className="form-group col mb-1">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input type="text" className="form-control" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                    {errors?.mobileNumber && <span className="error">This field is required</span>}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="FavoritePizzaMaker">Favorite Pizza Maker</label>
                <select className="form-control" {...register("FavoritePizzaMaker", { required: true })}>
                    <option value="">Select a pizza maker</option>
                    <option value="Dominos">Dominos</option>
                    <option value="Pizza Hut">Pizza Hut</option>
                    <option value="Papa Johns">Papa Johns</option>
                    <option value="Little Caesars">Little Caesars</option>
                    <option value="Papa Murphy's">Papa Murphy's</option>
                    <option value="Marco's Pizza">Marco's Pizza</option>
                </select>
            </div>

            <div className="form-group m-3">
                <label htmlFor="PizzaMakerUse">How frequently do you use your favorite pizza maker when getting pizza?</label>
                <br />
                <input type='radio' {...register("PizzaMakerUse", { required: true })} value="Always" /> :Always
                <input type='radio' className="ms-3" {...register("PizzaMakerUse", { required: true })} value="Mostly" /> :Mostly
                <input type='radio' className="ms-3" {...register("PizzaMakerUse", { required: true })} value="Sometimes" /> :Sometimes
                <input type='radio' className="ms-3" {...register("PizzaMakerUse", { required: true })} value="Never" /> :Never
            </div>

            <div className="row mt-2">
                <div className="form-group col-md-5">
                    <label htmlFor="FavoriteToppings">Favorite Toppings:</label>

                    <div className="row mt-2">
                        <div className='col-sm-6 mb-1'>
                            <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Pepperoni" /> Pepperoni
                        </div>

                        <div className='col-sm-6 mb-1'>
                            <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Sausage" /> Sausage
                        </div>

                        <div className='col-sm-6 mb-1'>
                            <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Mushrooms" /> Mushrooms
                        </div>

                        <div className='col-sm-6 mb-1'>
                            <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Onions" /> Onions
                        </div>

                        <div className='col-sm-6 mb-1'>
                            <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Bacon" /> Bacon
                        </div>

                        <div className='col-sm-6 mb-1'>
                            <input type='checkbox' {...register("FavoriteToppings", { required: true })} value="Extra Cheese" /> Extra Cheese
                        </div>
                    </div>
                </div>

                <div className="form-group col-md-7">
                    <label htmlFor="comments">Comments</label>
                    <textarea className="form-control" rows={6} {...register("comments")} />
                </div>
            </div>

            <button type="submit" className="form-btn w-25 mt-3">Submit</button>
        </form>
    );
}

export default ExampleFormC;