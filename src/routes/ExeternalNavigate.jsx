import { useEffect } from "react"

const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    window.location.href = to
  }, [to])

  return null // No UI component is needed
}

export default ExternalRedirect
