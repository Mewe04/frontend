import { memo } from 'react';

export default memo(({ children, ...rest }) => (
  <button
    {...rest}
    className="p-2 border bg-[#3C50E0] text-white rounded-xl d-xl gap-2 transition duration-300 hover:bg-[#3244c7] focus:outline-none">
    {children}
  </button>
));
