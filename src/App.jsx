//ไฟล์นี้เราเรียกว่า Component
//ตัวโค้ดที่เราเรียกว่า JSX คือ HTML + React
import IotWoo from "./IotWoo"
import IotWow from "./IotWow"


function App() {
  return (
    <>
     <h1>Welcome to SAU</h1>
     <hr />
     <IotWoo />
     <IotWow />
     <IotWow />
     <IotWow />
    </>
    )
  }

export default App
