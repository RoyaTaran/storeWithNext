import React from "react";
import withToggle from "../HOCs/withToggle";
import MobileHeader from "./MobileHeader";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import MenuMobileSize from "./MenuMobilSize"
import { Container} from "react-bootstrap";
function Header({ isShow, toggleHandler }) {

  return (
    <>
      <MenuMobileSize isShow={isShow} toggleHandler={toggleHandler} />

      <header className="pt-5">
        <Container>
          {/* topbar and navbar for width<992*/}
          <MobileHeader isShow={isShow} toggleHandler={toggleHandler} />

          {/* topbar and navbar for width>1024 */}
          <Topbar />

          <Navbar />
        </Container>
      </header>
    </>
  );
}

export default withToggle(Header);
