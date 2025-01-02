import React from 'react';

const Fees = () => {
  return (
    <section id="fees" className="section fees">
      <h1>Fees</h1>
      <p>Here's an overview of our pricing for services offered:</p>
      <br />
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Duration</th>
            <th>Cost</th>
          </tr>
          <tr>
            <td>Phone Consult</td>
            <td>5-10 minutes</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td>Initial Assessment</td>
            <td>1 hour</td>
            <td>$135</td>
          </tr>
          <tr>
            <td>Standard Session</td>
            <td>30 minutes</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Standard Session</td>
            <td>45 minutes</td>
            <td>$120</td>
          </tr>
          <tr>
            <td>Standard Session</td>
            <td>60 minutes</td>
            <td>$140</td>
          </tr>
        </thead>
      </table>
    </section>
  );
};

export default Fees; 