import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Field from '../../ui/field/Field';
import Button from '../../ui/button/Button';
import ImageInput from 'components/ui/imageInput/ImageInput';

import avatar from 'assets/avatar.jpg';

const Profile = () => {
  return (
    <div className="flex flex-auto flex-wrap gap-2">
      <div className="flex flex-auto justify-center items-center flex-wrap gap-5 p-5 bg-white rounded-3xl border border-[#E2E8F0]">
        <div className="size-64 overflow-hidden rounded-full shadow-md">
          <img src={avatar} alt="User avatar" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="ml-5 break-words">
            <h2 className="font-bold text-3xl">Name</h2>
            <p className="text-3xl font-light">Role</p>
          </div>
          <div className="lg:text-lg">
            <div className="flex flex-row gap-3 items-center ml-5">
              <FontAwesomeIcon icon={faPhone} />
              <span>Тел: +7-960-867-87-39</span>
            </div>
            <div className="flex flex-row gap-3 items-center ml-5">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email: mewe04@mail.ru</span>
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-auto flex-col w-80 gap-2 bg-white rounded-3xl border border-[#E2E8F0]">
        <div className="p-4 border-b border-[#E2E8F0]">
          <h2>Изменить данные</h2>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <span>Телефон</span>
          <Field
            name="phone"
            autoCompelete="off"
            placeholder="Телефон"
            error={false}
            helperText="Введите корректный номер телефона"
          />
          <span>Email</span>
          <Field
            name="email"
            type="email"
            autoCompelete="off"
            placeholder="Телефон"
            error={false}
            helperText="Введите корректный Email"
          />
          <span>Пароль</span>
          <Field
            name="password"
            type="password"
            autoCompelete="off"
            placeholder="Пароль"
            error={false}
            helperText="Пароль должен быть больше 6 символов"
          />
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
      <div className="flex flex-auto flex-wrap bg-white rounded-3xl border border-[#E2E8F0]">
        <ImageInput />
      </div>
    </div>
  );
};

export default Profile;
