import AndijanMap from "../../components/AndijanMap/AndijanMap";
import Heading from "../../components/Header/Heading";
import "./roomOrders.scss";
import Department from "../../components/Dropdown/Department";
import Apartment from "../../components/Dropdown/Apartment";

function RoomOrders(props) {
  return (
    <div className="room_orders_page">
      <div className="room_orders_wrapper">
        <div className="room_orders_header">
          <Heading title="Xonalar joylashuvi" />
        </div>
        <div className="room_orders_body">
          <div className="room_orders_filters">
            <Department />
            <Apartment />
            <button className="room_number">Xona raqami</button>
          </div>
          <AndijanMap />
        </div>
      </div>
    </div>
  );
}

export default RoomOrders;
