import React from 'react';

const Fees = () => {
    return (
        <section id="fees" className="section fees">
            <h1>Fees</h1>
            <p>Please call or email if you have any questions or to book a free consultation. We also offer virtual
                physiotherapy.</p>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Duration</th>
                        <th>Cost</th>
                    </tr>
                    <tr>
                        <td>Initial Assessment</td>
                        <td>1 hour</td>
                        <td>$140</td>
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