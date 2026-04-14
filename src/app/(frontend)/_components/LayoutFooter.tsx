const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/adriandotdev',
    icon: (
      <svg width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adrianmarcelo/',
    icon: (
      <svg width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm14.25 11.27h-3v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v5.58z" />
      </svg>
    ),
  },
]

export default function LayoutFooter() {
  return (
    <footer
      className="bg-slate-950"
      style={{
        color: 'var(--theme-text, #fff)',
        marginTop: 'auto',
        borderTop: '1px solid var(--theme-elevation-700, #333)',
      }}
    >
      <div className="flex flex-col-reverse items-center xl:flex-row xl:justify-between xl:items-center px-14 py-14  gap-8 xl:gap-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center xl:justify-end gap-4 xl:items-start self-stretch">
          <div>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                style={{
                  display: 'inline-block',
                  margin: '0 0.75rem',
                  color: 'inherit',
                  transition: 'color 0.2s',
                  verticalAlign: 'middle',
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div style={{ fontSize: '0.95rem', opacity: 0.8 }}>
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-yellow-500 font-bold">Adrian</span>.
            <span className="text-yellow-900 font-bold">Dev</span>. All rights reserved.
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-100 xl:max-w-[450px] xl:items-end">
          <div>
            <label className="text-xl text-yellow-500 font-bold self-start" htmlFor="">
              Subscribe to Newsletter
            </label>
            <p>Get the latest articles and insights delivered straight to your inbox.</p>
          </div>
          <input
            type="email"
            className="bg-slate-50 py-3 px-4 w-full max-w-100 text-slate-950 xl:max-w-[450px] rounded-md placeholder:text-gray-400 focus:outline-none 
         focus:ring-4 
         focus:ring-yellow-500/50 
         focus:ring-offset-2 transition-all duration-300"
            placeholder="Email"
          />
          <button className="text-center bg-black text-white w-full p-3 rounded-lg font-semibold cursor-pointer hover:bg-slate-900 transition-colors duration-300 outline outline-slate-50/10">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  )
}
