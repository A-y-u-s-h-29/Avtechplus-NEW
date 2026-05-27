import React from 'react'

function CapabilityDocument() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-20 md:py-32 px-5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
          Page Under{" "}
          <span className="text-orange-500">Development</span>
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>

      </div>
    </section>
  )
}

export default CapabilityDocument
