import React, { FunctionComponent } from "react";
import SidebarLeft from "./components/Layout/SidebarLeft";
import Topbar from "./components/Layout/Topbar";
import Content from "./routes/MainRoutes";

interface AppProps { };

const App: FunctionComponent<AppProps> = () => {

  return (
    <React.Fragment>
      <Topbar />
      <div className="container mt-6">
        <div className="row justify-content-between">
          <div className="col-12 col-md-2">
            <div className="position-md-fixed">
              <SidebarLeft />
            </div>
          </div>
          <div className="col-12 col-md-10">
            <div className="container">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
