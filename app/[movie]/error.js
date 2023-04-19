"use client"

const Error = ({error, reset}) => {
    return (
        <div>
            {error.message}
            <button onClick={() => reset()}>Reload</button>
        </div>
     );
}
 
export default Error;