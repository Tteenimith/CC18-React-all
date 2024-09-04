import { useState } from "react"

export default function ProductFrom(){
    const [input,setInput] = useState({
        title :'',
        description :'',
        price :'',
        category:''
    })
    const category =  [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]

       const hdlChange = e => {
        setInput(prv =>({...prv, [e.target.name]:e.target.value}))
        // console.log(input)
       }

       const hdlSubmit = async e => {
        e.preventDefault()
        // alert(JSON.stringify(input))
        for(let key in input){
            if(!input[key].trim()){
              return alert('Please check input')
                
            }
        }
        const resp = await fetch('https://fakestoreapi.com/products',{
            method : 'POST',
            body : JSON.stringify({...input, price: +input.price})
        })
        const result = await resp.json()
        console.log(result)
       }

    return(
        <>

        <h1 className="text-2xl border-b-2 mt-4">Product From</h1>
        <form className="flex flex-col gap-4 p-4 w-3/4 border mx-auto mt-6 "
        onSubmit={hdlSubmit}>
            <label className="flex">Title : 
                <input className="ms-3 border flex-grow " 
                name='title'
                value={input.title}
                onChange={hdlChange}/> 

            </label>
            <label className="flex">Description : 
                <input className="ms-3 border flex-grow " 
                name='description'
                value={input.description}
                onChange={hdlChange}/> 
            </label>
            <label className="flex">Price : 
                <input className="ms-3 border flex-grow " 
                name="price"
                value={input.price}
                onChange={hdlChange}/> 
            </label>
            <label className="flex">Category : 
                    <select className="ms-3 border flex-grow " 
                    name="category"
                    value={input.category}
                    onChange={hdlChange} >
                       
                    <option value="" disabled={true}>Pls Select..</option>
                    {category.map((el)=>(<option>{el}</option>))}
                    </select> 
            </label>
            <button className="bg-pink-400 ">Add Product</button>
        </form>
        </>
    )
}