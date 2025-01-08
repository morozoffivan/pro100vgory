<?php
// Функция для вывода ошибки и перенаправления обратно на форму
function show_error_and_redirect($error_message) {
    echo "<script>alert('{$error_message}'); window.location.href='index.html';</script>";
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']); // Получаем номер телефона
    $message = isset($_POST['message']) ? trim($_POST['message']) : ''; // Если сообщение пустое, принимаем его как пустую строку

    // Валидация имени
    if (empty($name)) {
        show_error_and_redirect("Пожалуйста, введите ваше имя.");
    }

    // Валидация номера телефона
    if (empty($phone)) {
        show_error_and_redirect("Пожалуйста, введите ваш номер телефона.");
    }

    // Отправка данных по email
    $to = "i@morozoffone.ru"; // Ваш email
    $subject = "Новая заявка с сайта";
    $body = "Имя: {$name}\nТелефон: {$phone}\nСообщение: {$message}";
    $headers = "From: info@plastilin123.ru\r\n"; // Используйте фиктивный email для отправки

    if (mail($to, $subject, $body, $headers)) {
        header("Location: index.html");
    } else {
        show_error_and_redirect("Произошла ошибка при отправке сообщения. Попробуйте позже.");
    }
} else {
    header("Location: index.html"); // Переадресация на страницу с формой
}
?>