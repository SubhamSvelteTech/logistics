import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    disabled?: boolean,
    handleClick?: MouseEventHandler<HTMLButtonElement>
}