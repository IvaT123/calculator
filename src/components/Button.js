export default function Button(props) {
   
    return <input 
    type="button"
    value= {props.value}
    onClick={props.onClick}
    className={`w-25 border border-dark rounded-pill border-3 button-height fs-1  text-white ${props.data === "C" ? "bg-danger" : "bg-secondary"}`}
    />
}