import { ToastContainer } from 'react-toastify'

import "react-toastify/dist/ReactToastify.css";

const Error = () => {
    return (
      <div>
        <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick  rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="night" />
      </div>
    );
  };
  
  export default Error;