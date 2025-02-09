import React from 'react'

export default function page() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">Evenza</div>
          <a href='https://app.evenza.xyz' target='_blank' className="cta-button">Get Started</a>
        </nav>
        <div className="hero">
          <h1 className='font-bold'>Host Events, Effortlessly</h1>
          <p className='font-semibold opacity-70'> Evenza makes event planning and hosting simple, modern, and fun.</p>
          <a href='https://app.evenza.xyz' target='_blank' className="cta-button font-bold text-2xl">Create Event</a>
        </div>
      </header>

      <section id="features" className="features">
        <h2 className='text-4xl font-bold'>Why Choose Evenza?</h2>
        <div className="feature-cards">
          <div className="card flex-grow">
            <h3 className='font-semibold text-lg'>Easy Setup</h3>
            <p>Create and manage events in minutes with our intuitive interface.</p>
          </div>
          <div className="card flex-grow">
            <h3 className='font-semibold text-lg'>Customizable</h3>
            <p>Tailor your events to match your brand and style.</p>
          </div>
          <div className="card flex-grow">
            <h3 className='font-semibold text-lg'>Web.2 & Web.3 support</h3>
            <p>We respect your privacy - Use Evenza with your social links or crypto wallet.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Evenza. All rights reserved.</p>
      </footer>
    </>
  )
}
