import { Package } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="/" aria-label="Product Explorer home">
          <span className="navbar__logo" aria-hidden="true">
            <Package size={20} />
          </span>
          Product Explorer
        </a>
      </div>
    </header>
  );
}
