import { useState } from "react";

import Button from "../Customer-button";
import FootButtons from "../Foot-button";
import customers from "../../../props/customers";

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 8;
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, 256000);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="main">
      <section className="customers">
        <div className="customers__head">
          <h2 className="customers__head-title">All Customers</h2>
          <span className="customers__head-active">Active Members</span>
          <input
            type="search"
            className="customers__head-search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="customers__list">
          <div className="customers__list-items name">
            <div className="customers__list-title">Customer Name</div>
            {filteredCustomers.map((customer, index) => (
              <div className="customers__list-item" key={index}>
                {customer.name}
              </div>
            ))}
          </div>
          <div className="customers__list-items company">
            <div className="customers__list-title">Company</div>
            {filteredCustomers.map((customer, index) => (
              <div className="customers__list-item" key={index}>
                {customer.company}
              </div>
            ))}
          </div>
          <div className="customers__list-items number">
            <div className="customers__list-title">Phone Number</div>
            {filteredCustomers.map((customer, index) => (
              <div className="customers__list-item" key={index}>
                {customer.phoneNumber}
              </div>
            ))}
          </div>
          <div className="customers__list-items email">
            <div className="customers__list-title">Email</div>
            {filteredCustomers.map((customer, index) => (
              <div className="customers__list-item" key={index}>
                {customer.email}
              </div>
            ))}
          </div>
          <div className="customers__list-items country">
            <div className="customers__list-title">Country</div>
            {filteredCustomers.map((customer, index) => (
              <div className="customers__list-item" key={index}>
                {customer.country}
              </div>
            ))}
          </div>
          <div className="customers__list-items status">
            <div className="customers__list-title">Status</div>
            {filteredCustomers.map((customer, index) => (
              <div className="customers__list-item" key={index}>
                <Button status={customer.status} />
              </div>
            ))}
          </div>
        </div>
        <div className="customers__list-mobile">
          {filteredCustomers.map((customer, index) => (
            <div className="customers__list-items" key={index}>
              <div className="customers__list-item">{customer.name}</div>
              <div className="customers__list-item">{customer.company}</div>
              <div className="customers__list-item">{customer.phoneNumber}</div>
              <div className="customers__list-item">{customer.email}</div>
              <div className="customers__list-item">{customer.country}</div>
              <div className="customers__list-item">
                <Button status={customer.status} />
              </div>
            </div>
          ))}
        </div>
        <div className="customers__foot">
          <div className="customers__foot-content">
            Showing data {startEntry} to {endEntry} of 256K entries
          </div>
          <FootButtons
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </main>
  );
};

export default Customers;
