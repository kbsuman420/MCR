import { useState } from "react"
import Interest from "./components/Interests"
import Profile from "./components/Profile"
import Setting from "./components/Setting"

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Profile",
      component: Profile
    },
    {
      name: "Interest",
      component: Interest
    }, 
    {
      name: "Setting",
      component: Setting
    }
  ]

    const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div className="container">
      <div className="tab-container">
        {tabs.map((tab, index) => (
          <span className="tab-header" key={index} onClick={() => setActiveTab(index)}>{tab.name}</span>
        ))}
      </div>
      <div className="component-container">
        <ActiveTabComponent />
      </div>
    </div>
  )
}
