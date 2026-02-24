export default function PacceLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* P */}
      <path
        d="M0 0H6V24H0V0ZM6 0H12C14.2091 0 16 1.79086 16 4V8C16 10.2091 14.2091 12 12 12H6V0Z"
        fill="currentColor"
      />

      {/* A */}
      <path
        d="M19 24L25 0H29L35 24H29.5L28.5 20H25.5L24.5 24H19ZM26 16H28L27 8L26 16Z"
        fill="currentColor"
      />

      {/* C */}
      <path
        d="M38 12C38 5.37258 42.4772 0 48 0H52V5H48C45.2386 5 43 8.13401 43 12C43 15.866 45.2386 19 48 19H52V24H48C42.4772 24 38 18.6274 38 12Z"
        fill="currentColor"
      />

      {/* C */}
      <path
        d="M55 12C55 5.37258 59.4772 0 65 0H69V5H65C62.2386 5 60 8.13401 60 12C60 15.866 62.2386 19 65 19H69V24H65C59.4772 24 55 18.6274 55 12Z"
        fill="currentColor"
      />

      {/* E */}
      <path
        d="M72 0H88V5H78V9.5H86V14.5H78V19H88V24H72V0Z"
        fill="currentColor"
      />
    </svg>
  );
}
