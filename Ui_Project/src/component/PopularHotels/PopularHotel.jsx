import { ChevronRight,} from "lucide-react";
import HotelCard from './HotelCard';
const PopularHotel = () => {


    const hotels = [
        {
            name: "Ocean Bliss Resort",
            location: "Goa, India",
            price: "$120/night",
            rating: "4.6",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVILf2Dmrsa98LVyEQIUae9Zg1S4_RG-DGe1yn-776lA&s=10"
        },
        {
            name: "City Comfort Hotel",
            location: "Mumbai, India",
            price: "$95/night",
            rating: "4.3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOfLcEP0grJ3q6_0DCMG8zkP1OC1_hcNPugYk2gVQBA&s=10"
        },
        {
            name: "Mountain Retreat",
            location: "Manali, India",
            price: "$110/night",
            rating: "4.7",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIAq8fPqmayjJhWa5nrHCrc3JrnZUHaxMz7PHxzAA3Q&s=10"
        }
    ];

    return (
        <div className="p-15">

            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>Popular Hotels</h1>
                <a href='/' className='flex text-violet-600 font-medium'>View all <ChevronRight /> </a>
            </div>

            <div className="flex gap-4 mt-6">
                {hotels.map((hotel) => (
                    <HotelCard
                        key={hotel.name}
                        name={hotel.name}
                        location={hotel.location}
                        price={hotel.price}
                        rating={hotel.rating}
                        image={hotel.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default PopularHotel