import { cva } from "class-variance-authority";
import { twMerge } from 'tailwind-merge';

export const buttonStyles = cva(["transtion-color"],
{variants: {
    variant: {
        default:["bg-secondary","hover:bg-secondary-hover"],
        ghost:["hover:bg-gray-100"],
        dark:[
            "bg-secondary-dark",
            "hover:bg-secondary-dark-hover",
            "text-secondary"
        ]
    },
    size:{
        default: ["rounded", "p-2"],
        icons: ["rounded-full","w-10","h-10","flex","items-center","justify-center","p-2.5"]
    }
},
defaultVariants: {
    variant:"default",
    size:"default"
}
})

export function Button({variant,size,className, ...props}){
    return <><button {...props} className={twMerge(buttonStyles({variant,size}),className)} /></>;
}