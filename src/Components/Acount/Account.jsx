import "./account.css";
import Button from "../Button/Button";
const Account = (props) => {
  console.log("LAAAAAA", Number.isInteger(props.accountData.balance));
  return (
    <section>
      <div style={{ backgroundColor: `${props.accountData.color}` }}>
        <p>{props.accountData.name}</p>
        {Number.isInteger(props.accountData.balance) ? (
          <p>{props.accountData.balance}.00&nbsp; €</p>
        ) : (
          <p>{props.accountData.balance}&nbsp; €</p>
        )}
      </div>
      <table>
        {props.accountData.operations.map((operation, index) => {
          return (
            <tr key={index}>
              <td>{operation.date}</td>

              <td>{operation.description}</td>
              {Number.isInteger(operation.amount) ? (
                <td>{operation.amount}.00&nbsp; €</td>
              ) : (
                <td>{operation.amount}&nbsp; €</td>
              )}
            </tr>
          );
        })}
      </table>
      <Button />
    </section>
  );
};

export default Account;
