import React from 'react';
import Navbars from '../../common/Navbars';

const NotFound = () => {
    return (
        <div>
            <Navbars />
            <div className='pt-10 '>
        <div className='container mx-auto'>
          <div className=''>
            <div className=' text-center'>
              <div className='space-y-2'>
                <h1 className='text-9xl  font-bold tracking-wider text-purple-500 '>404</h1>
                
                <h2 className='text-2xl font-semibold font-[Poppins] '>OPPS! That page was not found!</h2>
                <p className='text-base font-[Poppins]'>
                  Sorry but the page you are looking for does not exist, have
                  been removed, name changed or is temporarity unavailable.
                </p>
                {/* <Link
                  to={process.env.PUBLIC_URL + '/'}
                  className='digicel-button btn btn-primary'
                >
                  Back to Home
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default NotFound;