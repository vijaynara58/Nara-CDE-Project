import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";


function CheckoutProduct({
    id, 
    title, 
    price, 
    rating,
    description, 
    category, 
    image,
    hasPremium
}) {


    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {
            id, 
            title, 
            price, 
            rating,
            description, 
            category, 
            image,
            hasPremium
        }
        //Push Item into redux
        dispatch(addToBasket(product));
        }
        //Remove the Item from Redux
        const removeItemFromBasket = () => {
            dispatch(removeFromBasket({ id }))
    }
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* Middle Section */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                    .fill()
                    .map((_, i)=> (
                        <StarIcon key={i} className="h-5  text-blue-600" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="GBP" />
                {hasPremium && (
                    <div className="flex items-center space-x-2">
                        <img 
                        className="w-12"
                        loading="lazy"
                        src="https://user-images.githubusercontent.com/62456972/119232197-4c4e8b80-baf2-11eb-9250-9a04f5330812.jpg"
                        alt="premium" />
                        <p className="text-xs text-blue-300">Free Next-day Delivery</p>
                    </div>
                )}
            </div>
            {/* Right add/remove buttons */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct

