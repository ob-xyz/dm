import logo from "~/../public/img/ja.png";

export default function Index() {
  return (
    <div className="container">
      <div className="inner-container">
        <img src={logo} />
      <a className="in" href="https://app.jeffamzn.com/subscription/form">Subscribe</a>
      </div>
    </div>
  );
}