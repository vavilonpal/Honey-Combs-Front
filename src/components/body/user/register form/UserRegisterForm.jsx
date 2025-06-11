import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import InputField from "./InputField";
import {registerUser} from "../../../../api/users-api/UserAuthAPI"; // Предположительно твой компонент input'а

export default function UserRegisterForm({ onSubmit }) {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        fullName: '',
        passwordConfirm: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};

        // Username
        if (!formData.username.trim()) {
            newErrors.username = 'Username is empty';
        } else if (formData.username.length < 4 || formData.username.length > 20) {
            newErrors.username = 'Length of username should be within 4 and 20 chars';
        }

        // Email
        if (!formData.email.trim()) {
            newErrors.email = 'Email is empty';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Incorrect email';
        }

        // Password
        if (!formData.password.trim()) {
            newErrors.password = 'Password is empty';
        }

        if (!formData.passwordConfirm.trim()) {
            newErrors.passwordConfirm = 'Confirm password is empty';
        } else if (formData.password !== formData.passwordConfirm) {
            newErrors.passwordConfirm = 'Passwords do not match';
        }

        // Full Name
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is empty';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            const requestBody = {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                passwordConfirm: formData.passwordConfirm,
                fullName: formData.fullName
            };

            const response = await registerUser(requestBody);
            onSubmit?.(formData);
            navigate("/login");
        } catch (error) {
            console.error(error);
            await Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: error?.response?.data?.message || "Unknown error"
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Регистрация</h2>

            <InputField
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={errors.username}
            />

            <InputField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                type="email"
            />

            <InputField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
            />

            <InputField
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                type="password"
            />

            <InputField
                label="Confirm Password"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                error={errors.passwordConfirm}
                type="password"
            />

            <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
                Зарегистрироваться
            </button>
        </form>
    );
}
