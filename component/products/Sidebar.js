import React from "react";
import { Form } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import SidebarCategory from "./SidebarCategory";
import PriceRange from "./PriceRange";

function Sidebar() {
  return (
    <div id="sidebar-container" className="w-100 border border-muted bg-input rounded-2 ">
      <section id="sidebar-search" className="py-3 px-2 border">
        <Form className="d-flex position-relative">
          <Form.Control
            type="search"
            placeholder="دنبال چی میگردی؟"
            className="w-100 py-2  bg-nav border-0"
            aria-label="sidbar-Search"
            style={{ paddingRight: "3rem" }}
          />
          <CiSearch className="fs-3 position-absolute top-50 end-0 translate-middle text-dark-color" />
        </Form>
      </section>
      <section
        id="sidebar-category"
        className="py-3 px-2 border text-dark-color "
      >
        <SidebarCategory />
      </section>
      <section
        id="sidebar-category-priceRange"
        className="py-3 px-2 border text-dark-color "
      >
        <PriceRange />
      </section>
      <section
        id="sidebar-switch"
        className="py-3 px-2 border text-dark-color "
      >
        <Form className="px-4">
          <Form.Check
            type="switch"
            id="sidebar-available-switch"
            label="نمایش کالاهای موجود"
          />
        </Form>
      </section>
    </div>
  );
}

export default Sidebar;
