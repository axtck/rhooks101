import React, { FunctionComponent } from "react";
import SidebarLeft from "./components/Layout/SidebarLeft";
import Topbar from "./components/Layout/Topbar";
import Content from "./routes/MainRoutes";


interface AppProps { };

const App: FunctionComponent<AppProps> = () => {

  return (
    <div>
      <Topbar />

      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="position-fixed">
              <SidebarLeft />
            </div>
          </div>
          <div className="col-10">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
