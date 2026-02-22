export default function PacceLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* P */}
      <path
        d="M0 0H8V14H14C18.4183 14 22 10.4183 22 6C22 2.68629 19.3137 0 16 0H8H0V24H8V14"
        fill="currentColor"
      />
      <path
        d="M8 0V6H14C14 3.79086 12.2091 0 10 0H8Z"
        fill="currentColor"
      />
      <rect x="8" y="3" width="6" height="8" rx="1" fill="currentColor" />

      {/* A */}
      <path
        d="M32 24L38 0H46L52 24H44L43 20H37L36 24H32ZM38 16H42L40 6L38 16Z"
        fill="currentColor"
      />

      {/* C */}
      <path
        d="M58 12C58 5.37258 63.3726 0 70 0H76V6H70C66.6863 6 64 8.68629 64 12C64 15.3137 66.6863 18 70 18H76V24H70C63.3726 24 58 18.6274 58 12Z"
        fill="currentColor"
      />

      {/* C */}
      <path
        d="M82 12C82 5.37258 87.3726 0 94 0H100V6H94C90.6863 6 88 8.68629 88 12C88 15.3137 90.6863 18 94 18H100V24H94C87.3726 24 82 18.6274 82 12Z"
        fill="currentColor"
      />

      {/* E */}
      <path
        d="M106 0H124V6H112V9H122V15H112V18H124V24H106V0Z"
        fill="currentColor"
      />
    </svg>
  );
}
