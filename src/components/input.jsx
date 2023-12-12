
function Form({ inputValue, setInputValue }) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>
                โปรดใส่คำอธิฐาน : 
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                />
            </label>
        </form>
    );
}

export default Form;
