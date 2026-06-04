import { useState, useEffect } from "react";
import "./popupModal.scss";
import { useGetValue } from "../../hooks/useGetValue";
import { useCreateContactMutation } from "../../context/api/contactApi";

const initialState = {
    name: "",
    phone: "",
    email: "",
    comment: "",
};

export default function PopupModal({ delay = 10000 }) {
    const [show, setShow] = useState(false);
    const [done, setDone] = useState(false);
    const { formData, setFormData, handleChange } = useGetValue(initialState);
    const [createMassage, { isLoading, isError, error }] = useCreateContactMutation();

    useEffect(() => {
        if (sessionStorage.getItem("popup_shown")) return;
        const t = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(t);
    }, [delay]);

    if (!show) return null;

    const close = () => {
        sessionStorage.setItem("popup_shown", "1");
        setShow(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMassage(formData).unwrap();
            setFormData(initialState);
            setDone(true);
            setTimeout(close, 2500);
        } catch (err) {
            console.error("Xatolik:", err);
        }
    };

    return (
        <div className="pm-overlay" onClick={close}>
            <div className="pm-modal" onClick={e => e.stopPropagation()}>
                <button className="pm-close" onClick={close}>✕</button>

                {done ? (
                    <div className="pm-success">
                        <div className="pm-success__icon">✓</div>
                        <h3>Спасибо!</h3>
                        <p>Ваша заявка принята. Мы свяжемся с вами в ближайшее время.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2 className="pm-title">Форма обратной связи</h2>

                        <div className="pm-field">
                            <input className="pm-input"
                                name="name" value={formData.name} onChange={handleChange} placeholder="Имя" />
                        </div>

                        <div className="pm-field">
                            <input className="pm-input"
                                name="phone" value={formData.phone} onChange={handleChange} placeholder="Номер" />
                        </div>

                        <div className="pm-field">
                            <input className="pm-input"
                                name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Электронная почта" />
                        </div>

                        <div className="pm-field">
                            <textarea className="pm-input pm-textarea"
                                name="comment" value={formData.comment} onChange={handleChange} placeholder="Комментарий" rows={4} />
                        </div>

                        {isError && (
                            <div className="pm-error-box">
                                ⚠️ {error?.data?.message || "Xatolik yuz berdi. Qaytadan urinib ko'ring."}
                            </div>
                        )}

                        <button className="pm-btn" disabled={isLoading}>
                            {isLoading ? "Отправка..." : "Оставить заявку →"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}