import Button from 'components/ui/button/Button';
import Field from 'components/ui/field/Field';

const people = [
  {
    name: 'Иванов Иван Иванович',
    age: 14,
    category: 'Профилактическая работа с семьей',
    placeAccounting: 'Учет в ОСЗН',
    dateRegistration: '12.02.2023',
    dateDeRegistration: ''
  },
  {
    name: 'Колесников Денис Васильевич',
    age: 16,
    category: 'Профилактическая беседа',
    placeAccounting: 'Учет в ОСЗН',
    dateRegistration: '6.07.2023',
    dateDeRegistration: '10.12.2023'
  },
  {
    name: 'Карпов Александр Александрович',
    age: 14,
    category: 'Профилактическая работа с семьей',
    placeAccounting: 'Учет в ОСЗН',
    dateRegistration: '5.05.2023',
    dateDeRegistration: ''
  }
];

const Family = () => {
  return (
    <div className="flex flex-auto flex-wrap gap-2">
      <div className="flex flex-auto h-24 gap-5 p-5 bg-white rounded-3xl border border-[#E2E8F0]">
        <Field type="search" />
        <div className="w-60">
          <Button>Найти</Button>
        </div>
      </div>
      <div className="flex flex-auto gap-5 p-5 bg-white rounded-3xl border border-[#E2E8F0] overflow-x-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300">
        <table className="w-[100vw] divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ф.И.О., возраст
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Категория
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Место учета
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Дата постановки
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Дата снятия
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {people.map((person) => (
              <tr key={person.name}>
                <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                  {person.name}, {person.age}
                </td>
                <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                  {person.category}
                </td>
                <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                  {person.placeAccounting}
                </td>
                <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                  {person.dateRegistration}
                </td>
                <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                  {person.dateDeRegistration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Редактировать
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Family;
