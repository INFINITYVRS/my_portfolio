export function Footer() {
  return (
    <footer className="py-10 border-t border-gray-800 mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© {new Date().getFullYear()} VIJAY RAJ SHEKHAR. All rights reserved.</p>
          </div>
          <div>
            <p className="text-gray-400">Build with Love</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
