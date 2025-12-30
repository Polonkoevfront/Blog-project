import { FC, FormHTMLAttributes, ReactNode } from 'react';
import cls from './Form.module.scss';
import { classNames } from '../../lib/classNames';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    className?: string;
}

export const Form: FC<FormProps> = (props) => {
    const { children, className = '', onSubmit } = props;

    return (
        <form onSubmit={onSubmit} className={classNames(cls.form, {}, [className])}>
            {children}
        </form>
    )
}