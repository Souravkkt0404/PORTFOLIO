import React from 'react'

const ResumeCard = ({ title, subTitle, result, percentage, des, image }) => {
  return (
    <div className="w-full h-[460px] overflow-hidden rounded-3xl border border-[#2a3240] bg-[#09101a] shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition-transform duration-300 hover:-translate-y-1 hover:border-designColor">
      <div className="flex flex-col h-full md:flex-row md:items-stretch">
        {image && (
          <div className="relative w-full md:w-1/2 h-52 md:h-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          </div>
        )}

        <div className="flex flex-col justify-between gap-3 p-5 md:w-1/2 h-full">
          <div className="flex flex-col gap-3">
            <div>
              <span className="inline-flex rounded-full bg-designColor/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-designColor">
                Education
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">{subTitle}</p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              {result && (
                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400">
                    Result
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">{result}</p>
                </div>
              )}
              {percentage && (
                <div className="flex-1 rounded-3xl border border-white/10 bg-[#111827]/90 p-4 text-center backdrop-blur-sm">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400">
                    Percentage
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">{percentage}</p>
                </div>
              )}
            </div>
          </div>

          <p className="text-sm leading-7 text-gray-300">{des}</p>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard