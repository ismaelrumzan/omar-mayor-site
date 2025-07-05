"use client"

import { useEffect, useState } from "react"
// Added useState import
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"

interface VolunteerModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  // Added loading state for form
  const [isFormLoaded, setIsFormLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"

      // Preload the volunteer form when modal opens
      const link = document.createElement("link")
      link.rel = "prefetch"
      link.href = "https://form.qomon.org/join-the-movement-0/"
      document.head.appendChild(link)

      // Reset form loaded state when modal opens
      setIsFormLoaded(false)

      return () => {
        document.head.removeChild(link)
      }
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* ... existing backdrop code ... */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* ... existing header code ... */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Volunteer with Us
            </h2>
            <p className="text-gray-600 mt-1">
              Help us bring change to Edmonton
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Form Content with loading optimization */}
        <div className="relative overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Loading overlay */}
          {!isFormLoaded && (
            <div className="absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-3"></div>
                <p className="text-sm text-gray-600">
                  Loading volunteer form...
                </p>
              </div>
            </div>
          )}

          <iframe
            src="https://form.qomon.org/join-the-movement-0/"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: "none", minHeight: "600px" }}
            title="Omar Campaign Volunteer Form"
            loading="eager" // Changed from lazy to eager for faster loading
            onLoad={() => setIsFormLoaded(true)} // Handle load event
          />
        </div>
      </div>
    </div>
  )
}
