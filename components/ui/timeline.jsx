export function Timeline({ children }) {
  return <div className="relative border-l border-gray-300">{children}</div>
}

export function TimelineItem({ children }) {
  return (
    <div className="mb-10 ml-6">
      <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white"></div>
      {children}
    </div>
  )
}

export function TimelineTime({ children }) {
  return <time className="mb-1 text-sm font-normal leading-none text-gray-400">{children}</time>
}

export function TimelineContent({ children }) {
  return <div className="mt-2">{children}</div>
}

export function TimelineTitle({ children }) {
  return <h3 className="text-lg font-semibold text-gray-900">{children}</h3>
}

export function TimelineDescription({ children }) {
  return <p className="text-base font-normal text-gray-500">{children}</p>
}
