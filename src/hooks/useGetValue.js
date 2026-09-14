import { useState } from "react"

export const useGetValue = (initialState) => {
    const [formData, setformData] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setformData((prev) => ({ ...prev, [name]: value }))
    }

    return { formData, setformData, handleChange }
}