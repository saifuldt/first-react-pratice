import React from 'react';

class Header extends React.Component {
    render() {
        return <nav>
            <ul className='flex gap-1 text-xl justify-center pt-4 uppercase font-bold'>
                <li className='bg-gray-200 py-1 px-4 rounded-md hover:underline hover:underline-offset-8 hover:decoration-8'>
                    <a id='home' href='#'>Home</a>
                </li>
                <li className='bg-gray-200 py-1 px-4 rounded-md hover:underline hover:underline-offset-8 hover:decoration-8'>
                    <a href='#'>About</a>
                </li>
                <li className='bg-gray-200 py-1 px-4 rounded-md hover:underline hover:underline-offset-8 hover:decoration-8'>
                    <a href='#'>Contact</a>
                </li>
                <li className='bg-gray-200 py-1 px-4 rounded-md hover:underline hover:underline-offset-8 hover:decoration-8'>
                    <a href='#'>Service</a>
                </li>
            </ul>
        </nav>;
    }
}


export default Header;