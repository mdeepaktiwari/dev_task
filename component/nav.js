import Link from "next/link";
import { HeartFilled } from "@ant-design/icons";

function Navigation() {
  return (
    <div className="d-flex align-items-center justify-content-between py-2 m-md-2 px-md-2 border-bottom-purple box-shadow-blur-nav">
      <div className="text-left">
        <h2 className="text-dark m-0">Frontend task</h2>
        <p className="text-muted cursive m-0 d-flex align-items-center">
          <span>made with</span> <HeartFilled className="mx-1" style={{color:"#822132"}}/> <span>by deepak...</span>
        </p>
      </div>
      <div className="px-2 py-1">
        <Link
          href="/"
          className="unline-hover mx-2 text-decoration-none text-secondary"
        >
          All Users
        </Link>
        <Link
          href="/adduser"
          className="unline-hover mx-2 text-decoration-none text-secondary"
        >
          Add users
        </Link>
        <Link
          href="/searchuser"
          className="unline-hover mx-2 text-decoration-none text-secondary"
        >
          In a hurry?
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
