'use client'

import { useRouter } from "next/navigation"

export const ButtonReturn = ({ text }) => {
    const router = useRouter()
    return <button onClick={() => router.back()}>{text}</button>
}