import './App.css';
import OfficeSpace from "./OfficeSpace";
function App() {
   const officeList = [
    {
      Type: "Office Space",
      Image: "https://thumbs.dreamstime.com/b/office-work-place-5879959.jpg",
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Type: "Office Space",
      Image: "https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg",
      Name: "Regus",
      Rent: 70000,
      Address: "Bangalore"
    }
  ];
  return (
      <div style={{ textAlign: 'center' }}>
        {officeList.map((item, index) => (
          <OfficeSpace key={index} item={item} />
        ))}
      </div>
  );
}

export default App;
