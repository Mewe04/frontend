import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import bg from 'assets/image.svg';

const ImageInput = () => {
  const onDrop = useCallback(async (acceptedFiles) => {
    let file = acceptedFiles[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log('Upload image');
    };
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { 'image/*': [] },
    noKeyboard: true
  });

  return (
    <div className="flex flex-col h-[50vh] p-5 justify-between w-full rounded-md text-center">
      <p className="font-semibold text-lg md:text-xl">Загрузите ваш файл</p>
      <p className="font-thin text-xs mt-2">Файл должен быть формата Jpeg, png...</p>
      <div
        {...getRootProps({
          className:
            'mt-4 w-full h-full flex flex-col justify-center items-center cursor-pointer border border-dashed border-[#E2E8F0] rounded-md'
        })}>
        <input {...getInputProps({ name: 'image' })} />
        <img src={bg} className="max-w-1/3 mt-4" />
        <div className="text-slate-400 md:text-md mt-4 text-sm flex flex-col gap-2">
          <p>Перетащите изображение сюда</p>
          <p>Или</p>
          <p>Нажмите для выбора</p>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
