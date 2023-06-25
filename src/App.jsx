import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Accounts from "./Components/Accounts/Accounts";
import accountsTransactions from "./assets/accountsTransactions.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="wrapper">
        <Accounts accountsData={accountsTransactions} />
      </div>
    </>
  );
}

export default App;
