import { useState } from 'react'

export const SecureContact = () => {
  const [showEmail, setShowEmail] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  const emailParts = ['masih', 'azizpour', 'gmail', 'com']
  const phoneParts = ['904', '993', '9351']

  const revealButtonClass = 'button button__secondary'
  const buttonInlineStyles = { padding: '4px 12px', fontSize: '14px' }

  return (
    <div className="contacts__content">
      <div className="contact">
        <span className="contact__label">Email:</span>
        {showEmail ? (
          <a
            href={`mailto:${emailParts[0]}.${emailParts[1]}@${emailParts[2]}.${emailParts[3]}`}
            className="contact__value"
          >
            {emailParts[0]}.{emailParts[1]}@{emailParts[2]}.{emailParts[3]}
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setShowEmail(true)}
            className={revealButtonClass}
            style={buttonInlineStyles}
          >
            Reveal Email
          </button>
        )}
      </div>

      <div className="contact">
        <span className="contact__label">Phone:</span>
        {showPhone ? (
          <a
            href={`tel:+1${phoneParts[0]}${phoneParts[1]}${phoneParts[2]}`}
            className="contact__value"
          >
            ({phoneParts[0]}) {phoneParts[1]}-{phoneParts[2]}
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setShowPhone(true)}
            className={revealButtonClass}
            style={buttonInlineStyles}
          >
            Reveal Phone
          </button>
        )}
      </div>

      <div className="contact">
        <span className="contact__label">Location:</span>
        <span className="contact__value">Jacksonville, FL</span>
      </div>
    </div>
  )
}
