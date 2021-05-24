import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from '../slices/basketSlice'

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {

const dispatch = useDispatch();

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [hasPremium] = useState(Math.random() < 0.5)

    const addItemToBasket = () => {
        const product = { id, title, price, rating, description, category, image, hasPremium }
        //Sending the product as an action to the redux store ... the basket slice
        dispatch(addToBasket(product))
    }

    return (
        <div className="relative flex flex-col m-5 bg-white-600 z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-blue-400">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" />

            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <StarIcon className="h-5 text-blue-600" />
                ))}    
            </div>
            {/* Line Clamp makes the description to converge to 2 lines with breakpoints in the end if needed, hover the mouse over line-clamp in code to see the Actual CSS used */}
            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
              <Currency quantity={price} currency="GBP" />
            </div>  

            {hasPremium && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://user-images.githubusercontent.com/62456972/119232197-4c4e8b80-baf2-11eb-9250-9a04f5330812.jpg" alt="Premium" />
                    <p className="text-xs text-blue-300">Free Next-day Delivery</p>
                </div>
            )}
            {/* I will use another Custom Made Utility class named "button" here, it can be found in globals.css */}
            <button 
            onClick={addItemToBasket}
            className="mt-auto button">Add To Basket</button>
        </div>
    )
}

export default Product
