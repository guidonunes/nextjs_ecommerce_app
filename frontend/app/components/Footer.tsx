export default function Footer() {
  return (
    <footer className="bg-[#31394c] mt-12 shadow-md">
      <div className="container mx-auto p-6 text-center text-white">
        © {new Date().getFullYear()} Next<span className="text-red-500">Store</span>. All rights reserved.
      </div>

    </footer>
  )
}
