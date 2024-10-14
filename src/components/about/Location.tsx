import React from 'react'

const Location = () => {
  return (
    <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6485.636400211868!2d77.33967161921136!3d23.192964269577107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c5cfb02c2ab25%3A0x2bf4ee3f86e69901!2sTnp%20Lab!5e0!3m2!1sen!2sin!4v1728900367015!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
  )
}

export default Location