const Header: React.FC = () => {
  return (
    <header className="sticky top-0 px-8 w-full h-16 text-white bg-blue-600 flex items-center justify-between">
      <span className="font-ubuntu tracking-widest">buyproducts.com</span>
      <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-blue-600">
        <span className="material-icons">face</span>
      </div>
    </header>
  );
};

export default Header;
