import React, { useState } from 'react'

export const FormDemo4 = () => {

    const data = [
        {
            country: "India",
            cities: ["Delhi", "Mumbai", "Kolkata"]
        },
        {
            country: "USA",
            cities: ["New York", "Washington", "Los Angeles"]
        },
        {
            country: "UK",
            cities: ["London", "Manchester", "Birmingham"]
        }
    ]
    const [selectedCountry, setselectedCountry] = useState("")

  return (
    <div>
        <h2>Form Demo 4</h2>
        <select onChange={(e)=>{setselectedCountry(e.target.value)}}>
            {
                data.map((d)=>{
                    return <option value={d.country}>{d.country}</option>
                })
            }
        </select>
        {selectedCountry}
        <select>
            {
                data.map((d)=>{
                    if(d.country === selectedCountry){
                        return d.cities.map((city)=>{
                            return <option value={city}>{city}</option>
                        })
                    }
                })
            }
        </select>
    </div>
  )
}
