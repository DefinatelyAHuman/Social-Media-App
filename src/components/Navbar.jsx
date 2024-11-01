import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <header
      className="p-3 text-bg-dark navbar"
      style={{ position: "sticky", top: 0 }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <ul className="nav mb-0">
            <li>
              <a href="/#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button type="button" className="btn btn-outline-light me-2">
            Login
          </button>
          <button type="button" className="btn btn-warning">
            Sign-up
          </button>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
