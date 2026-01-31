import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// ⚠️ Replace with your API Gateway URL after deployment
const API_URL = import.meta.env.VITE_EARLY_ACCESS_API || '/api/early-access'

function EarlyAccessForm() {
  const [email, setEmail] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || status === 'loading') return
    
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch(`${API_URL}?email=${encodeURIComponent(email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setMessage(data.message || 'You\'re on the list!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setMessage('')
  }

  return (
    <motion.div
      className="early-access-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Gradient accent glow behind the card */}
      <div className="early-access-glow" />
      
      {/* Glass card content */}
      <div className="early-access-content">
        {/* Heading */}
        <motion.h2
          className="early-access-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Get Early Access
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="early-access-subtext"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          Join the first users shaping the future.
        </motion.p>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            /* Success State */
            <motion.div
              key="success"
              className="early-access-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="early-access-success-icon">✓</div>
              <p className="early-access-success-message">{message}</p>
              <button 
                type="button" 
                onClick={resetForm}
                className="early-access-reset-btn"
              >
                Add another email
              </button>
            </motion.div>
          ) : (
            /* Form State */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="early-access-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {/* Email Input */}
              <div className={`early-access-input-wrapper ${isFocused ? 'focused' : ''} ${status === 'error' ? 'error' : ''}`}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => { setIsFocused(true); if (status === 'error') resetForm(); }}
                  onBlur={() => setIsFocused(false)}
                  className="early-access-input"
                  disabled={status === 'loading'}
                  required
                />
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <motion.p
                  className="early-access-error"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {message}
                </motion.p>
              )}

              {/* CTA Button */}
              <button 
                type="submit" 
                className={`early-access-cta ${status === 'loading' ? 'loading' : ''}`}
                disabled={status === 'loading'}
              >
                <span className="early-access-cta-text">
                  {status === 'loading' ? 'Joining...' : 'Notify Me'}
                </span>
                <div className="early-access-cta-gradient" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Helper text */}
        {status !== 'success' && (
          <motion.p
            className="early-access-helper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            No spam. Only launch updates.
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}

export default EarlyAccessForm

