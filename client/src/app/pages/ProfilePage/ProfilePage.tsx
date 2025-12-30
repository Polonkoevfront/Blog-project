import { Button, Form, Text } from '../../shared';
import { Navbar } from '../../widgets';
import cls from './ProfilePage.module.scss';
import { useState } from 'react';
import avatar from "../../shared/assets/png/avatar.png";
import camera from "../../shared/assets/svg/camera.svg";

export const ProfilePage = () => {
    const [active, setActive] = useState(false);

    const onClicker = () => {
        setActive(true)
    }

    return (
        <div className={cls.profile}>
            <Navbar />

            <Form className={cls.profile_info}>
                <div className={cls.profile_info_body}>
                    <Text as='h6' fz={24} fw={700}>Профиль</Text>

                    <div className={cls.info_elements_block}>
                        <div className={cls.info_item}>
                            <span>Username:</span>
                            <p>Test</p>
                        </div>
                        <div className={cls.info_item}>
                            <span>Почта:</span>
                            <p>Test</p>
                        </div><div className={cls.info_item}>
                            <span>Сайт:</span>
                            <p>Test</p>
                        </div><div className={cls.info_item}>
                            <span>Описание:</span>
                            <p>Test</p>
                        </div>
                    </div>
                </div>
            </Form>

            <Form className={cls.profile_info2}>
                <div className={cls.profile_body}>
                    <div className={cls.avatar_block}>
                        <Text className={cls.logo_txt} as='h6' fz={24} fw={700}>Изменить профиль</Text>
                        <div onClick={onClicker} className={cls.circle_avatar}>
                            {
                                active ?
                                    <img className={cls.img} src={camera} alt="" />
                                    : <img src={avatar} alt="" />
                            }
                        </div>
                    </div>
                    <div className={cls.elements_block}>
                        <div className={cls.input_label}>
                            <input placeholder='Username' type="username" />
                        </div>
                        <div className={cls.input_label}>
                            <input placeholder='Почта' type="email" />
                        </div>
                        <div className={cls.input_label}>
                            <input placeholder='Сайт' type="site" />
                        </div>
                        <div className={cls.label}>
                            <textarea placeholder='Описание' name="" ></textarea>
                        </div>
                        <Button variant='primary' size='huge'>Сохранить</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}