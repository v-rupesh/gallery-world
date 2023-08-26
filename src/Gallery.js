import React from 'react';

const Gallery = ({ data }) => {
    return (
        <div className="row">
            {data.map((image) => (
                <div key={image.id} className="col-sm-6 col-md-4 col-lg-3">
                    <img
                        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                        height="200"
                        width="250"
                        alt={image.title}
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
