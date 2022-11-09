import React, { Suspense } from 'react'
// import Navbar from 'components/Navbar';
// import MainContent from 'components/MainContent';
const LazyComponent = React.lazy(() => import('../components/Navbar'));
const LazyComponent1 = React.lazy(() => import('../components/MainContent'));
const home = () => (
  (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
        <LazyComponent1 />
      </Suspense>

      {/* <Navbar />
      <MainContent /> */}
    </div>)
)
export default home;
