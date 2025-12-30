import { Button } from '../../shared';
import { Form } from '../../shared/ui/Form/Form';
import { Text } from '../../shared/ui/Text/Text';
import { Navbar } from '../../widgets';
import cls from './RegisterPage.module.scss';

export const RegisterPage = () => {
    return (
        <div className={cls.register}>
            <Navbar />

            <div className={cls.container}>

                <Form className={cls.register_form}>
                    <div className={cls.elements_block}>
                        <Text as='h6' fz={24} fw={700}>Регистрация</Text>
                        <div style={{ marginTop: "-63px" }}>
                            <div className={cls.label}>
                                <input placeholder='EMAIL' type="email" />
                            </div>
                            <div className={cls.label}>
                                <input placeholder='Password' type="password" />
                            </div>
                            <div className={cls.label}>
                                <input placeholder='Confirm Password' type="password" />
                            </div>

                            <Button size='more' variant='primary'>Регистрация</Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}