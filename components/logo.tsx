export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <circle cx="20" cy="20" r="20" fill="#FA8072" />
        <path d="M20 8L24 16H16L20 8Z" fill="white" opacity="0.9" />
        <path
          d="M12 18C12 18 14 22 20 26C26 22 28 18 28 18C28 18 26 14 20 14C14 14 12 18 12 18Z"
          fill="white"
          opacity="0.8"
        />
        <circle cx="20" cy="20" r="3" fill="white" />
        <path
          d="M16 28C16 28 17 30 20 32C23 30 24 28 24 28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs> */}
      </svg>
      <span className="font-serif text-2xl font-bold text-[#FA8072]">DreamTrips</span>
    </div>
  )
}
