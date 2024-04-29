import React, { useState, useEffect } from 'react';

function App() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/Vendor%20Management%20System%20With%20Performance%20Metrics/vendors/GetAllVendorsListApi/');
        const responseData = await response.json();
        console.log(responseData)

        if (responseData && responseData.Result) {
          // If the response contains 'Result', assume it's the data we need
          setVendors(responseData.Result);
          setLoading(false);
        } else {
          console.error('Error: Response data structure is not as expected');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Vendors List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact Details</th>
              <th>Address</th>
              <th>Vendor Code</th>
              <th>On-Time Delivery Rate</th>
              <th>Quality Rating Average</th>
              <th>Average Response Time</th>
              <th>Fulfillment Rate</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={index}>
                <td>{vendor.name}</td>
                <td>{vendor.contact_details}</td>
                <td>{vendor.address}</td>
                <td>{vendor.vendor_code}</td>
                <td>{vendor.on_time_delivery_rate}</td>
                <td>{vendor.quality_rating_avg}</td>
                <td>{vendor.average_response_time}</td>
                <td>{vendor.fulfillment_rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
