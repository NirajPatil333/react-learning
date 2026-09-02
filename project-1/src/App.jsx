import React from 'react'
import Card from './component/Card'

const App = () => {

  const jobOpenings = [
  {
    BrandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tMdfSrgsO63wakpLT2kvAyjtvHHlDVbIWxoe9-mdjg&s",
    companyName: "Google",
    position: "Frontend Developer",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    BrandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAys1oz05qjcswHRM_17PFQTb08CAH4VdaesNvquS-Aw&s=10",
    companyName: "Microsoft",
    position: "Backend Developer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Bengaluru, India"
  },
  {
    BrandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsJcIJcNnsiHryqYsdrhFw_O0KWrATt0bUE2zvKa9_g&s=10",
    companyName: "Amazon",
    position: "Database Administrator",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Hyderabad, India"
  },
  {
    BrandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0lP2_kgCkHUWXDSmcPvGTYhE2XLv3amPV-aPYMxhrQ&s=10",
    companyName: "Meta",
    position: "UI/UX Designer",
    datePosted: "3 days ago",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    BrandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rApSjDXCOAsStw4_AN64xcOJJNOKor2lTOhPxChGPA&s=10",
    companyName: "Apple",
    position: "Full Stack Developer",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Mumbai, India"
  },
  {
    BrandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqRGb-neGJy-PR4tt1LBmSZaXyVbMPm0HW55koD8_Rg&s=10",
    companyName: "Netflix",
    position: "React Developer",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Chennai, India"
  },
  {
    BrandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuSb1asI5aTr7NOszh66cf0sqJRgp96qHhnH6WyczhA&s=10",
    companyName: "Adobe",
    position: "DevOps Engineer",
    datePosted: "3 weeks ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    BrandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpunUgf2FwwRgBsTqAw2B0KXeXuROKaPNgfAwyuuVLwg&s=10",
    companyName: "Spotify",
    position: "Data Analyst",
    datePosted: "1 day ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Delhi, India"
  }
];
console.log(jobOpenings);

  return (
    <div className='container'>
      {jobOpenings.map( (el,idx) =>{

        return   <div key={idx}>  
        <Card
        company = {el.companyName} 
        position ={el.position}
        brandLogo = {el.BrandLogo}
        datePosted ={el.datePosted}
        tag1 ={el.tag1}
        tag2 = {el.tag2}
        pay = {el.pay}
        location = {el.location}
        />
      </div>
      })}
    </div>
  )
}

export default App