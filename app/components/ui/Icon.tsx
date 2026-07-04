import { SvgIconComponent } from "@mui/icons-material";

type IconColor = "blue" | "red";

interface IconProps {
    icon: SvgIconComponent;
    color: IconColor;
}

const colorClasses: Record<IconColor, string> = {
    blue: "text-blue-800 hover:text-blue-900",
    red: "text-red-800 hover:text-red-900"
};

const IconWrapper = ({ icon: Icon, color }: IconProps) => {
    return (
        <Icon
            className={`transition-all ease duration-300 delay-150 ${colorClasses[color]}`}
            sx={{ cursor: "pointer" }}
/>
  );
};

export default IconWrapper;