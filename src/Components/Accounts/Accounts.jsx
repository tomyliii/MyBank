import "./accounts.css";
import Account from "../Acount/Account";
const Accounts = (props) => {
  console.log(props);
  return (
    <main>
      {props.accountsData.map((accountData, index) => {
        return <Account key={index} accountData={accountData} />;
      })}
    </main>
  );
};

export default Accounts;
