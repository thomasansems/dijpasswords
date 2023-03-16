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