import Link from 'next/link';

interface SidebarProps {
  className: string;
}

const Sidebar: React.FC<SidebarProps> = ({className}) => {
  return (
    <div className={className}>
      <nav className="flex flex-col ">
      <ul>
        <li className="my-10"><Link href="/"><a>Home</a></Link></li>
        <li className="my-10"><Link href="/about"><a>About</a></Link></li>
        <li className="my-10"><Link href="/products"><a>Products</a></Link></li>
        <li className="my-10"><Link href="/sale"><a>Sale</a></Link></li>
        <li className="my-10"><Link href="/contact"><a>Contact</a></Link></li>
      </ul>
      </nav>
    </div>
  )
};

export default Sidebar;
