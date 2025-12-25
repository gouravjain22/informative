import TemporaryDrawer from "../common/drawer/TemporaryDrawer";

export default function Navbar(prob) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar ">
        
        <div className="container container-fluid">
          <TemporaryDrawer/>
          <a className="navbar-brand" href="/">
            {prob.title}
          </a>
        </div>
      </nav>
    </div>
  );
}
