function Header() {
  return (
    <header className="bg-[#3b2f2f] text-[#f5f1e8] px-6 py-5 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        <h1 className="text-2xl md:text-3xl font-bold">
          News<span className="text-[#c49a6c]">Room</span>
        </h1>

        <span className="text-[#d6c8b8] text-sm hidden sm:block">
          Stay Informed • Stay Curious
        </span>

      </div>
    </header>
  )
}

export default Header