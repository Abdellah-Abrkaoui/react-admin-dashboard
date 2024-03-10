import './WidgetLg.css'

function WidgetLg() {

  const Button = ({ type }) => {
    return <button className={"WidgetLgBtn " + type}>{type}</button>
  }

  return (
    <div className='WidgetLg'>
      <h3 className="WidgetLgTitle">Latest Transictions</h3>
      <table className="WidgetLgTable">
        <tr className="WidgetLgTr">
          <th className="WidgetLgth">Customer</th>
          <th className="WidgetLgth">Date</th>
          <th className="WidgetLgth">Amount</th>
          <th className="WidgetLgth">Status</th>
        </tr>

        <tr className="WidgetLgTr">
          <td className="WidgetLgUser">
            <img src="/src/assets/pic.jpg" alt="" className="widgetSmImg" />
            <span className="WidgetLgUsername">Abdul ab</span>
          </td>
          <td className="WidgetLgDate">21/2/2024</td>
          <td className="WidgetLgAmount">$2,245</td>
          <td className="WidgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="WidgetLgUser">
          <img src="/src/assets/pic.jpg" alt="" className="widgetSmImg" />
            <span className="WidgetLgUsername">Abdul ab</span>
          </td>
          <td className="WidgetLgDate">21/2/2024</td>
          <td className="WidgetLgAmount">$2,245</td>
          <td className="WidgetLgStatus">
              <Button type="Declined"/>
          </td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="WidgetLgUser">
          <img src="/src/assets/pic.jpg" alt="" className="widgetSmImg" />
            <span className="WidgetLgUsername">Abdul ab</span>
          </td>
          <td className="WidgetLgDate">21/2/2024</td>
          <td className="WidgetLgAmount">$2,245</td>
          <td className="WidgetLgStatus">
              <Button type="Pending"/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
