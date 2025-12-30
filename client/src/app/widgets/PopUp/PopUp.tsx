import { AppLink } from '../../provider';
import { Button } from '../../shared';
import cls from './PopUp.module.scss';

export const PopUp = () => {

    const onClickLogout = () => {

    };

    return (
        <ul className={cls.popup}>
            <AppLink className={cls.profile} to="/profile">
                <li className={cls.profile}>Профиль</li>
            </AppLink>
            <li onClick={onClickLogout}>Выйти</li>
            <li>Настройки</li>
        </ul>
    )
};