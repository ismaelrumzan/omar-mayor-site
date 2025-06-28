"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"

interface VolunteerModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
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

        {/* Form Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <iframe
            src="https://form.qomon.org/join-the-movement-0/"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: "none", minHeight: "600px" }}
            title="Omar Campaign Volunteer Form"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
