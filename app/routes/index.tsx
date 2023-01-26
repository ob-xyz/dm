import logo from "~/../public/img/dm2.png";

export default function Index() {
  return (
    <div className="container">
      <div className="inner-container">
        <img src={logo} />
        <p>(invite only)</p>
      </div>
    </div>
  );
}
