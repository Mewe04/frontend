import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar from 'assets/avatar.jpg';

const Profile = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex justify-center flex-wrap gap-5 p-5 bg-white rounded-3xl border border-[#E2E8F0]">
        <div className="h-64 w-64 overflow-hidden rounded-full shadow-md">
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
    </div>
  );
};

export default Profile;
