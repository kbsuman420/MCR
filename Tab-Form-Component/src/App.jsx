import { useState } from "react"
import Interest from "./components/Interests"
import Profile from "./components/Profile"
import Setting from "./components/Setting"

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "light"
  })
  const [error, setError]  = useState({})

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {}
        if(data.name.length <= 3) {
          err.name = "Name should be more than 2"
        }
        if(data.age < 18) {
          err.age = "Age must have 18 years";
        }
        if(data.email.length <= 5) {
          err.email = "Invalid email"
        }
        setError(err)
        return err.name || err.age || err.email ? false : true;
      }
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if(data.interests.length < 1) {
          err.interests = "Choose atleast one interest"
        }
        setError(err);
        return err.interests ? false : true;
      }
    }, 
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        return true;
      }
    }
  ]

  const handlePrev =  () => {
    setActiveTab((prev) => prev - 1);
  }
  const handleNext  = () => {
    if(tabs[activeTab].validate()) {
      setActiveTab(prev => prev + 1);
    }
  }

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div className="main-container">
      <div className="container">
        <div className="tab-container">
          {tabs.map((tab, index) => (
            <span className={"tab-header " + `tab-header-${index}`}
            key={index} 
            onClick={() => {
              if(tabs[activeTab].validate()){
                setActiveTab(index)}}
              }
              >{tab.name}</span>
          ))}
        </div>
        <div className="component-container">
          <ActiveTabComponent data={data} setData={setData} error={error}/>
        </div>
        <div className="button-container">
          {activeTab > 0 && <button type="submit" className="btn" onClick={handlePrev}>Previous</button>}
          {activeTab < 2 && <button type="submit" className="btn next-button" onClick={handleNext}>Next</button>}
          {activeTab == 2 && <button type="submit" className="btn">Submit</button>}
        </div>
      </div>
    </div>
  )
}
