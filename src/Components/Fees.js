import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Fees = () => {
    const { translations } = useContext(LanguageContext);
    
    return (
        <section id="fees" className="section fees">
            <h1>{translations.fees.title}</h1>
            <p>{translations.fees.introduction}</p>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>{translations.fees.tableHeaders.service}</th>
                        <th>{translations.fees.tableHeaders.duration}</th>
                        <th>{translations.fees.tableHeaders.cost}</th>
                    </tr>
                    {translations.fees.services.map((item, index) => (
                        <tr key={index}>
                            <td>{item.service}</td>
                            <td>{item.duration}</td>
                            <td>{item.cost}</td>
                        </tr>
                    ))}
                </thead>
            </table>
        </section>
    );
};

export default Fees; 