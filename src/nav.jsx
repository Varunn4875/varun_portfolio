import './typed.css'
import { useEffect, useState } from 'react'

function Navigation({ theme = 'light', onToggleTheme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="main-navbar fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-soft">

      <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>

     
          {/* <img src="/vs.png" alt="VS Logo" className="brand-logo" /> */}

          <button className='vs'>VS</button> 

        

        <div className='hidden md:flex tw-md-flex items-center gap-8'>
          <a className='nav-link px-3 py-2 rounded-md' href='#About-me'>about me</a>
          <a className='nav-link px-2 py-1 rounded-md text-theme hover:text-[var(--accent-color)]' href='#projects'   onClick={() => setOpen(false)}>projects</a>
          <a className='nav-link px-3 py-2 rounded-md' href='/varuns.pdf' target='_blank' rel='noopener noreferrer'>resume</a>
          <a className='nav-link px-3 py-2 rounded-md' href='#contact'>get in touch</a>

          {/* Theme Button */}
          <button
            type='button'
            className='rounded-full border border-none bg-surface px-3 py-2 text-theme'
            onClick={onToggleTheme}
          >
            <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon'}`} />
          </button>
        </div>

        <button
          type='button'
          className='md:hidden tw-md-hidden inline-flex items-center justify-center rounded-md border border-soft bg-surface p-2 text-theme'
          onClick={() => setOpen(!open)}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'} text-xl`} />
        </button>
      </div>

      {open && (
        <div className='md:hidden px-4 pb-3'>
          <div className='flex flex-col gap-4 bg-surface border border-soft rounded-xl p-4'>

            <a className='nav-link px-2 py-1 rounded-md text-theme hover:text-[var(--accent-color)]' href='#About-me' onClick={() => setOpen(false)}>about me</a>
            <a className='nav-link px-2 py-1 rounded-md text-theme hover:text-[var(--accent-color)]' href='#projects'   onClick={() => setOpen(false)}>projects</a>
            <a className='nav-link px-2 py-1 rounded-md text-theme hover:text-[var(--accent-color)]' href='/varuns.pdf' target='_blank' rel='noopener noreferrer' onClick={() => setOpen(false)}>resume</a>
            <a className='nav-link px-2 py-1 rounded-md text-theme hover:text-[var(--accent-color)]' href='#contact' onClick={() => setOpen(false)}>get in touch</a>

            <div className='flex justify-end'>
              <button
                type='button'
                className='rounded-full border border-soft bg-surface px-3 py-2 text-theme'
                onClick={onToggleTheme}
              >
                <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon'}`} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
