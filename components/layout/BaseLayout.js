

import Header from '../Header';
function Layout({ children }) {
  return (
    <>
      <style jsx>{`
        .content-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 70px 20px 20px 20px;
          padding: 10px 20px;
          background-color: #fff;
        }
      `}</style>
      <Header />
      <div className='content-container'>
        {children}
      </div>
    </>
  );
}
export default Layout;