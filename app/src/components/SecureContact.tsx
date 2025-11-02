import { useState } from 'react'

type SecureContactProps = {
  className?: string
}

export const SecureContact = ({ className = '' }: SecureContactProps) => {
  const [showEmail, setShowEmail] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  const emailParts = ['masih', 'azizpour', 'gmail', 'com']
  const phoneParts = ['904', '993', '9351']

  const rootClassName = ['secure-contact', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="secure-contact__row">
        <span className="secure-contact__label">Email</span>
        {showEmail ? (
          <a
            href={`mailto:${emailParts[0]}.${emailParts[1]}@${emailParts[2]}.${emailParts[3]}`}
            className="secure-contact__value"
          >
            {emailParts[0]}.{emailParts[1]}@{emailParts[2]}.{emailParts[3]}
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setShowEmail(true)}
            className="button secure-contact__button"
          >
            Reveal Email
          </button>
        )}
      </div>

      <div className="secure-contact__row">
        <span className="secure-contact__label">Phone</span>
        {showPhone ? (
          <a href={`tel:+1${phoneParts.join('')}`} className="secure-contact__value">
            ({phoneParts[0]}) {phoneParts[1]}-{phoneParts[2]}
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setShowPhone(true)}
            className="button secure-contact__button"
          >
            Reveal Phone
          </button>
        )}
      </div>

      <div className="secure-contact__row">
        <span className="secure-contact__label">Location</span>
        <span className="secure-contact__value">Jacksonville, FL</span>
      </div>
    </div>
  )
}
