import Link from "next/link"

function Navbar(){
    return (<>
    <div className="flex flex-row justify-evenly w-full text-xs sm:text-lg">
        <Link className="hover:text-purple-300  flex items-center" href={'/'} >Home</Link>
        <Link className="hover:text-purple-300 flex items-center" href={'/buy'} >Shop</Link>
        <Link className="hover:text-purple-300 flex items-center " href={'/about'} >About Us</Link>
        <Link className="hover:text-purple-300 flex items-center " href={'/contact'} >Contact</Link>
    </div>
    </>)
}

export default function Header() {
    return (<>
    <div className="flex flex-row gap-2 bg-blue-500">
        <img className="w-48 h-20 mx-5" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInUloAnTQp1aup5VhVxmSXm18VGl0wzQAb_L8Rf0vv7f5iOg6E8iRvg8V25U4zmLMQzw&usqp=CAU'} />
        <Navbar/>
    </div>
    
    </>)
}