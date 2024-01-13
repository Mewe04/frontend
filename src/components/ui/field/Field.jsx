import { memo } from 'react';

export default memo(({ error = false, helperText = '', ...rest }) => {
  return (
    <div className="w-full">
      <input
        {...rest}
        className={`w-full h-12 rounded-xl p-4 ring-1 ring-inset ${
          error ? 'ring-red-500' : 'ring-gray-200'
        } focus:outline-none focus:ring-gray-400`}
      />
      <p className="mt-1 ml-2 text-xs font-bold text-red-600">{helperText}</p>
    </div>
  );
});
