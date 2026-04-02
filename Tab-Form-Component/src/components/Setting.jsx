export default function Setting({ data, setData }) {
    const { theme } = data;
    return (
        <div>
            <label>
                <input type="radio" name="dark" checked={theme === "dark"} onChange={() => setData({...data, theme: "dark"})}/>
                Dark
            </label>
            <label>
                <input type="radio" name="light" checked={theme === "light"} onChange={() => setData({...data, theme:"light"})}/>
                Light
            </label>
        </div>
    )
}