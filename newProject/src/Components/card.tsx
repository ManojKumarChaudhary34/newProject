interface Itype{
  name:string,
  age: number,
  address: string
}

const Detail=({name, age, address}:Itype)=>{
return(
  <>
  <h1>Name: {name}</h1>
  <h2>Age: {age}</h2>
  <h3>Address: {address}</h3>
  </>  
)
}
export default Detail