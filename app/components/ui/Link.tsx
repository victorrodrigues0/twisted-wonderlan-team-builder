import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface linkProps {
    label?: string,
    textColor?: string,
    hrefLink: string,
    icon?: LucideIcon,
    sizeIcon?: number,
    children?: ReactNode
}

const Link = ({label = "default", textColor = 'text-accent', hrefLink, icon: Icon, sizeIcon, children}: linkProps) => {
return(
    <a 
    href={hrefLink} 
    className={`${textColor} text-[20px] hover:text-accent-hover transition-all
         ease duration-200 delay-75`}
    >
        {children ? children : (Icon ? <Icon size={20} /> : label)}
    </a>
)
}

export default Link;