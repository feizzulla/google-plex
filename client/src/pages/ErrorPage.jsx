import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Ошибка доступа</h1>
      <p>Вы будете перенаправлены на страницу логина через 3 секунды...</p>
    </div>
  );
}

export default ErrorPage;
