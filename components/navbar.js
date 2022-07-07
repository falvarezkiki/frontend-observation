import Link from 'next/link';

export default function Navbar(){
    return(
        <nav>
            <Link href= '/'>
           <a className='font-black text-lg'>Home</a> 
            </Link>
    
            
            <Link href= '/studyCase'>
            <a className='font-black text-lg'>Study Case</a>
            </Link>

            <style jsx>
                {`
                nav {
                    padding-top: 10px;
                }
                a{
                    padding: 0 10px;
                }
                `}
            </style>
        </nav>
    )
}