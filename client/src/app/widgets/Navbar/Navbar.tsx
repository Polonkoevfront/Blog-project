import { AppLink } from '../../provider';
import { Button } from '../../shared';
import cls from './Navbar.module.scss';
import arrow_top2 from "../../shared/assets/svg/arrow_top2.svg";
import { useState } from 'react';
import { PopUp } from '../PopUp/PopUp';
import { AddPost } from '../AddPost/AddPost';

export const Navbar = () => {
    const [active, setActive] = useState(false);
    const isAuth = true;

    const clickAvatarPopup = () => {
        setActive(true);
    };

    return (
        <nav className={cls.navbar}>
            <AppLink to="/">
                <div className={cls.circle}></div>
            </AppLink>
            <div className={cls.btns_block}>
                {
                    isAuth ? (
                        <div style={{ display: "flex", gap: '20px' }}>
                            <AppLink to="/">
                                <Button size='big' variant='primary'>Добавить пост</Button>
                            </AppLink>
                            <div style={{ display: "flex" }}>
                                <div style={{ width: "35px", height: "35px", borderRadius: "50%", background: "black" }}></div>
                                <img style={{ marginLeft: "7px", marginTop: "15px" }} src={arrow_top2} alt="" onClick={clickAvatarPopup} />
                                {
                                    active ? (
                                        <PopUp />
                                    ) : (
                                        ""
                                    )
                                }
                            </div>
                        </div>
                    ) : (
                        <>
                            <Button size='small' variant='primary'>
                                <AppLink className={cls.btn_text} to="/login">
                                    Войти
                                </AppLink>
                            </Button>
                            <Button className={cls.btn} size='normal' variant='outline'>
                                <AppLink className={cls.btn_text2} to="/register">
                                    Регистрация
                                </AppLink>
                            </Button>
                        </>
                    )
                }
            </div>
        </nav>
    )
}