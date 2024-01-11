import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@radix-ui/themes'
import fullLogo from 'assets/FullLogo.svg'
import smallLogo from 'assets/SmallLogo.svg'
import avatar from 'assets/avatar.jpg'
import { Link } from 'react-router-dom'
import { links } from './data'

const Sidebar = () => {
	return (
		<div className='fixed left-0 top-0 flex flex-col items-center lg:items-start bg-[#1C2434] w-[72px] h-full py-6 px-[12px] lg:py-9 lg:px-5 lg:w-72'>
			<img
				src={fullLogo}
				alt='Семья: Сопровождение'
				className='hidden lg:block'
			/>
			<img src={smallLogo} alt='Семья: Сопровождение' className='lg:hidden' />
			<div className='flex items-center gap-4 mt-4'>
				<div className='w-12 h-12 overflow-hidden rounded-full shadow-md'>
					<img
						src={avatar}
						alt='User avatar'
						className='w-full h-full object-cover'
					/>
				</div>
				<span className='hidden lg:block font-medium text-xl text-white uppercase'>
					Admin
				</span>
			</div>
			<nav className='mt-7'>
				<ul>
					{links.map(link => (
						<li key={link.id} className='mt-2 mr-1'>
							<Link
								to={link.path}
								className='h-11 rounded-full flex items-center py-1 px-3 gap-3 text-white lg:rounded-sm'
							>
								<FontAwesomeIcon icon={link.icon} className='text-xl' />
								<span className='hidden lg:block capitalize'>{link.title}</span>
							</Link>
						</li>
					))}
					<li>
						<Button className='h-11 rounded-full flex items-center py-1 px-3 gap-3 text-white'>
							<FontAwesomeIcon icon={faRightToBracket} className='text-lg' />
							<span className='hidden lg:block'>Выйти</span>
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Sidebar
