export default function Links() {
  const links = [
    { name: 'GitHub', url: 'https://github.com/AnjanTH' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anjan-t-h-326210269/' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Anjan_th_7064/' },
  ]

  return (
    <section id="links" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Professional Links</h2>
        <div className="flex justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
