export default function Profile() {
    return (
        <div className="form-container">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name..."/>
            <label>Age</label>
            <input type="number" placeholder="Your age" />
            <label>Email</label>
            <input type="text" placeholder="example@gmail.com" />
            
        </div>
    )
}