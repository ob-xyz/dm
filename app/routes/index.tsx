import logo from "~/../public/img/dm2.png";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="container">
      <div className="inner-container">
        <img src={logo} />
      </div>
    </div>
  );
}
