import Image from "next/image";
import { LinkIcon, MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { signIn, signOut, useSession } from "next-auth/client"
import {useRouter} from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Video from "../pages/Video"

function Header() {
    //We use "useSession() hook" to access the current session state
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
    
    return (
        <header className="sticky top-0 z-50">
            {/* Top nav */}
            <div className="flex items-center bg-nara_red p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image className='z-30' 

                    //To do it programmatically we Anonymous inline function "()=>" to redirect to home page
                    //We Can use "Link to" or "NextJs Link" also to redirect to home page
                
                    onClick={()=> router.push('/')}
                    src='https://user-images.githubusercontent.com/62456972/119230938-6b4a1f00-baec-11eb-9650-30f35ff85cd7.jpg'
                    width={150}
                    height={40}
                    objectFit="contain"
                    className='cursor-pointer'
                    />
                </div>

                {/* Search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-blue-600 hover:bg-blue-800 text-white">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 text-black font-bold" type="text" placeholder="Search" />
                    <SearchIcon className='h-12 p-4' />
                </div>
                
                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    {/* First Custom Utility Class "link" created in globals.css*/}
                    <div onClick={ !session ? signIn : signOut } className="link">
                         <p className="hover:underline">
                             {/* We use back ticks for string interpolation */}
                            {session ? `Hello, ${session.user.name}` : "Sign In"}
                         </p>
                         <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div onClick={() => session && router.push("/orders")} className="cursor-pointer link">
                         <>Returns</>
                         <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    

                    {/* Cart Items */}
                    <div
                    onClick={()=>router.push('/checkout')}
                    className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-blue-600 text-center text-white rounded-full font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>

            </div>

            {/* Bottom Nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-nara_red-light text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p onClick={()=>router.push('/Video')} 
                className="link">Nara Video</p>
                <p onClick={()=>router.push('https://vijaynara58.github.io/FlippingCardProfile')} className="link">Nara Business</p>
                <p onClick={()=>router.push('https://vijaynara58.github.io/AnimatedButtons/')} className="link">Designed Buttons</p>
                <p onClick={()=>router.push('https://vijaynara58.github.io/loginformresponsive')} className="link hidden lg:inline-flex">Form Design</p>
                <p onClick={()=>router.push('https://vijaynara58.github.io/responsive-web')} className="link hidden lg:inline-flex">responsive-web</p>
                <p onClick={()=>router.push('https://contact-vijaynara-i38k5ri1i-vijaynara58.vercel.app/#contact')} className="link hidden lg:inline-flex">Contact Us</p>
                <p onClick={()=>router.push('https://contact-vijaynara-i38k5ri1i-vijaynara58.vercel.app/')} className="link hidden lg:inline-flex">Portfolio</p>
                <p onClick={()=>router.push('https://vijaynara58.github.io')} className="link hidden lg:inline-flex">Resume</p>
                <p onClick={()=>router.push('https://easyhotmail.wordpress.com')} className="link hidden lg:inline-flex">Wordpress blogs</p>
            </div>
        </header>
    )
}

export default Header

