export default function Interest({ data, setData, error }) {
    const { interests } = data;
    return (
        <div className="form-container">
            <label>
                <input type="checkbox" name="coding" 
                checked={interests.includes("coding")} 
                onChange={(e) => {
                    const {name, checked} = e.target;
                    setData({...data, interests: 
                    checked ? [...data.interests, name] : data.interests.filter((interest) => interest !== name) })
                }
                }/>
                Coding
            </label>
            <label>
                <input type="checkbox" name="music" 
                checked={interests.includes("music")} 
                onChange={(e) => {
                    const { name, checked } = e.target;
                    setData({...data, interests:
                    checked ? [...data.interests, name] : data.interests.filter((interest) => interest !== name)})
                }}
                />
                Music
            </label>
            <label>
                <input type="checkbox" name="sports" 
                checked={interests.includes("sports")} 
                onChange={(e) => {
                    const {name, checked} = e.target;
                    setData({...data, interests:
                    checked ? [...data.interests, name] : data.interests.filter((interest) => interest !== name)})
                }}
                />
                Sports
            </label>
            <p>{error.interests}</p>
        </div>
    )
}