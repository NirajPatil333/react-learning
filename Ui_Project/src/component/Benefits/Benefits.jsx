
import { Tag , ShieldCheck , Headset ,Calendar} from 'lucide-react';
const Benefits = () => {
    const benefits = [
  {
    icon: Tag,
    title: "Best Price Guarantee",
    description: "Get the best prices",
  },
  {
    icon: ShieldCheck,
    title: "Secure Booking",
    description: "Your data is safe with us",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "We are here to help",
  },
  {
    icon: Calendar,
    title: "Free Cancellation",
    description: "Cancel anytime for free",
  },
];
  return (
    <section className='grid grid-cols-4 px-6 py-4 bg-gray-200 rounded-2xl mx-15'> 
        {benefits.map((benefit)=>(
            <div key={benefit.title} className='flex items-center gap-3'>
              <benefit.icon className="h-6 w-6 text-violet-600 shrink-0"/>
              <div>
                <h3 className='text-lg font-bold'>{benefit.title}</h3>
                <p className='text-gray-700'>{benefit.description}</p>
              </div>
            </div>
        ))}
    </section>
    
  )
}

export default Benefits