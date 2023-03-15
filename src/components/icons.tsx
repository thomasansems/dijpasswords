import { SVGProps } from "react"

export const Plus = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={36}
        height={36}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12.75 11.25V5a.75.75 0 1 0-1.5 0v6.25H5a.75.75 0 1 0 0 1.5h6.25V19a.76.76 0 0 0 .75.75.75.75 0 0 0 .75-.75v-6.25H19a.75.75 0 0 0 .75-.75.76.76 0 0 0-.75-.75h-6.25Z"
            fill="currentColor"
        />
    </svg>
)

export const Trash = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5.166 10.153A2 2 0 0 1 7.16 8h9.68a2 2 0 0 1 1.994 2.153l-.692 9A2 2 0 0 1 16.148 21H7.852a2 2 0 0 1-1.994-1.847l-.692-9Z"
            stroke="currentColor"
            strokeWidth={2}
        />
        <path
            d="M19.5 5h-15"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
        />
        <path
            d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h-4V3Z"
            stroke="currentColor"
            strokeWidth={2}
        />
    </svg>
)

