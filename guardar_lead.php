<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if ($data && !empty($data['email'])) {
    $name = htmlspecialchars(trim($data['name'] ?? 'Amigo'));
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $nahual = htmlspecialchars(trim($data['nahual'] ?? 'No especificado'));
    $date = date('Y-m-d H:i:s');

    // 1. Guardar en archivo CSV privado en el servidor
    $csvFile = __DIR__ . '/leads_equilibrioastral.csv';
    $isNew = !file_exists($csvFile);
    $fp = fopen($csvFile, 'a');
    if ($isNew) {
        fputcsv($fp, ['Fecha', 'Nombre', 'Email', 'Nahual / Signo']);
    }
    fputcsv($fp, [$date, $name, $email, $nahual]);
    fclose($fp);

    // 2. Intentar enviar correo de notificación al administrador
    $adminEmail = 'viaro@equilibrioastral.com';
    $subject = "🌿 Nuevo Lead en Equilibrio Astral: $name ($nahual)";
    $message = "Has recibido un nuevo registro en tu sitio web:\n\n" .
               "Nombre: $name\n" .
               "Email: $email\n" .
               "Nahual calculado: $nahual\n" .
               "Fecha: $date\n\n" .
               "Revisa tu archivo leads_equilibrioastral.csv en Hostinger.";
    $headers = "From: web@equilibrioastral.com\r\nReply-To: $email\r\nX-Mailer: PHP/" . phpversion();
    @mail($adminEmail, $subject, $message, $headers);

    echo json_encode(['status' => 'success', 'message' => 'Lead guardado con éxito']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Datos incompletos']);
}
?>
