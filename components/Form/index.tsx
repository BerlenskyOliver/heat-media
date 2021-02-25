
interface InputProps {
    name: string,
    type?: string,
    label: string,
    error?:any,
    defaultValue?: string,
    placeholder?: string, 
    onChange: (e: any) => void
}

export const Input = (
    {name, type="text", label, defaultValue, error, placeholder, onChange}
    : InputProps) => {
    return (
        <div>
            <label htmlFor={name} className="font-semibold uppercase text-gray-700 text-xs">{label}</label>
            <input 
            type={type} 
            value={defaultValue} 
            onChange={onChange}
            name={name}
            id={name} 
            className={`form-control bg-gray-100 mt-1 focus:outline-none`} 
            placeholder={placeholder} 
            />
        </div>
    )
}