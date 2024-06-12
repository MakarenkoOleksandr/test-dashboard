import Customers from "./main/components/Customers";
import Dashboard from "./main/components/Dashboard";
import Help from "./main/components/Help";
import Income from "./main/components/Income";
import Product from "./main/components/Product";
import Promote from "./main/components/Promote";

const Main = ({ selectedMenu }) => {
  switch (selectedMenu) {
    case 0:
      return <Dashboard content={"Dashboard"} />;
    case 1:
      return <Product content={"Product"} />;
    case 2:
      return <Customers />;
    case 3:
      return <Income content={"Income"} />;
    case 4:
      return <Promote content={"Promote"} />;
    case 5:
      return <Help content={"Help"} />;

    default:
      return <Customers />;
  }
};

export default Main;
