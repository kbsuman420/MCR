export default function Profile({data, setData, error}) {
    const {name, age, email} = data;
    
    return (
        <div className="form-container">
            {/* <p>{name + age + email}</p> */}
            <label>Name:</label>
            <input type="text" placeholder="Enter your name..." value={name} onChange={(e) => setData({...data, name: e.target.value})}/>
            <p>{error.name}</p>
            <label>Age</label>
            <input type="number" placeholder="Your age" value={age} onChange={(e) => setData({...data, age: e.target.value})} />
            <p>{error.age}</p>
            <label>Email</label>
            <input type="text" placeholder="example@gmail.com" value={email} onChange={(e) => setData({...data, email: e.target.value})} />
            <p>{error.email}</p>
        </div>
    )
}