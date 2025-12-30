import { Route, Routes } from "react-router";
import { HomePage, LoginPage, ProfilePage, RegisterPage } from "../../pages";

export const Routing = () => {
    return (
        <>
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/fullpost" element={<Routing />} />
                {/* <Route path="/profile" element={<ProfilePage />} /> */}
                {/* <Route path="/profile" element={<ProfilePage />} /> */}

            </Routes>
        </>
    )
}