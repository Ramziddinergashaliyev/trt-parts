import { useState, useEffect } from "react";
import "./popupModal.scss";

export default function PopupModal({ delay = 60000 }) {
    const [show, setShow] = useState(false);
    const [done, setDone] = useState(false);
    const [form, setForm] = useState({ name: "", phone: "", email: "", comment: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (sessionStorage.getItem("popup_shown")) return;
        const t = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(t);
    }, []);

    if (!show) return null;

    const close = () => {
        sessionStorage.setItem("popup_shown", "1");
        setShow(false);
    };

    const change = (e) => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
        setErrors(er => ({ ...er, [e.target.name]: "" }));
    };

    const submit = (e) => {
        e.preventDefault();
        const err = {};
        if (!form.name.trim()) err.name = "Введите имя";
        if (!form.phone.trim()) err.phone = "Введите номер";
        if (!form.email.trim()) err.email = "Введите почту";
        else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Неверный формат почты";
        if (Object.keys(err).length) { setErrors(err); return; }
        setDone(true);
        setTimeout(close, 2500);
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
                    <form onSubmit={submit} noValidate>
                        <h2 className="pm-title">Форма обратной связи</h2>

                        <div className="pm-field">
                            <input className={`pm-input ${errors.name ? "error" : ""}`}
                                name="name" value={form.name} onChange={change} placeholder="Имя" />
                            {errors.name && <span className="pm-err">{errors.name}</span>}
                        </div>

                        <div className="pm-field">
                            <input className={`pm-input ${errors.phone ? "error" : ""}`}
                                name="phone" value={form.phone} onChange={change} placeholder="Номер" />
                            {errors.phone && <span className="pm-err">{errors.phone}</span>}
                        </div>

                        <div className="pm-field">
                            <input className={`pm-input ${errors.email ? "error" : ""}`}
                                name="email" type="email" value={form.email} onChange={change} placeholder="Электронная почта" />
                            {errors.email && <span className="pm-err">{errors.email}</span>}
                        </div>

                        <div className="pm-field">
                            <textarea className="pm-input pm-textarea"
                                name="comment" value={form.comment} onChange={change} placeholder="Комментарий" rows={4} />
                        </div>

                        <button type="submit" className="pm-btn">Оставить заявку →</button>
                    </form>
                )}
            </div>
        </div>
    );
}