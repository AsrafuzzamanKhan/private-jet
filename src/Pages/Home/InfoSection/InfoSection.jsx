import React from 'react';
import infoImg from '../../../assets/banner/airplane-sunset.jpg'

const InfoSection = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className="card lg:card-side   my-10">

                <div className="card-body">
                    <h2 className="card-title">GET TO KNOW US
                    </h2>
                    <h4>Our jetly save your time and give you comfort in flights</h4>
                    <p>Non augue egestas, commodo velit eget, vestibulum tellus. Curabitur vulputate justo elit, at elementum orci pulvinar vel. Pellentesque habitant morbi tristique. Pellentesque habitant morbi tristique. Ut non augue egestas, commodo velit eget, vestibulum tellus.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Contact us</button>
                    </div>
                </div>
                <figure><img src={infoImg} className='w-1/2' alt="Album" /></figure>
            </div>
        </div>
    );
};

export default InfoSection;