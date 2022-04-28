export default function Input (data) {
    
    return <input 
    type="text" 
    readOnly
    value={data.data}
    className={data.className}
    

    />
}