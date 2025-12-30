import { Button } from '../../shared';
import { Form } from '../../shared/ui/Form/Form';
import { Text } from '../../shared/ui/Text/Text';
import { Navbar } from '../../widgets';
import cls from './LoginPage.module.scss';

export const LoginPage = () => {
    return (
        <div className={cls.login}>
            <Navbar />

            <div className={cls.container}>

                <Form className={cls.login_form}>
                    <div className={cls.elements_block}>
                        <Text className={cls.txt} as='h6' fz={24} fw={700}>Войти</Text>
                        <div style={{ marginTop: "-63px" }}>
                            <div className={cls.label}>
                                <input placeholder='EMAIL' type="email" />
                            </div>
                            <div className={cls.label}>
                                <input placeholder='Password' type="password" />
                            </div>

                            <Button size='more' variant='primary'>Войти</Button>
                        </div>
                    </div>
                </Form>
            </div>

        </div>
    )
}