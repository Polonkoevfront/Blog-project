import { FC, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '../../lib/classNames';

type ButtonVariant = "primary" | "outline";
type ButtonSize = "small" | "normal" | "big" | "more" | "huge";

interface ButtonProps {
    children: ReactNode;
    variant: ButtonVariant;
    size: ButtonSize;
    className?: string;
    onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary: cls.primary,
    outline: cls.outline,
}

const sizeClasses: Record<ButtonSize, string> = {
    small: cls.small,
    normal: cls.normal,
    big: cls.big,
    more: cls.more,
    huge: cls.huge,
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, className = "", variant = "primary", size = "normal", onClick } = props;

    const classes = [
        variant && variantClasses[variant],
        size && sizeClasses[size],
        className
    ]

    return (
        <button className={classNames(cls.btn, {}, classes)}>
            {children}
        </button>
    )
}