import { Heart , Star , MapPin } from "lucide-react";
const HotelCard = (props) => {
    return (
        <div className="w-80 overflow-hidden rounded-xl shadow-2xl">
            <div className="relative">
                <img src={props.image} alt={props.image} className="h-44 w-full object-cover"></img>
                <div className="absolute left-3 top-3 rounded-lg bg-white px-2 py-1 text-sm flex gap-1 items-center">
                    <p>{props.rating}</p>
                    <Star className="size-4"/>
                </div>
                <Heart className=" absolute right-3 top-3 size-7 text-white " />
            </div>
            <div className="p-3">
                <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl">{props.name}</h2>
                <p className="text-violet-600 text-md">{props.price}</p>
                </div>
                
                <p className="text-gray-500 flex items-center gap-2"><MapPin className="size-4"
                />{props.location}</p>
            </div>

        </div>
    )
}

export default HotelCard