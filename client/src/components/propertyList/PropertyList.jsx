import React from 'react';
import './propertyList.css';
import useFetch from '../../hooks/useFetch';

function PropertyList() {
    const { data, loading, error } = useFetch("api/hotels/countByType");
    console.log(data);

    const images = [
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=",
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=",
        "https://r-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o="
    ];

    return (
        <div className='pList'>
            {loading ? (
                "Loading Please Wait"
            ) : (
                <>
                    {data && data.length > 0 && images.map((img, i) => {
                        const item = data[i];
                        if (!item) return null; // Skip if data[i] is undefined
                        return (
                            <div className="pListItem" key={i}>
                                <img
                                    src={img}
                                    alt=''
                                    className='pListImg'
                                />
                                <div className="pListTitle">
                                    <h1>{item.type}</h1>
                                    <h2>{item.count} {item.type}</h2>
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default PropertyList;