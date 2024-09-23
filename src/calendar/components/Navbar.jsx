export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; Alexander
      </span>

      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out"></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </nav>
  );
};
