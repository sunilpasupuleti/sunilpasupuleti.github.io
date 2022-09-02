<?php
 header("Access-Control-Allow-Origin: *");
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// only for local machine


//Load composer's autoloader
require './vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    $smtpusername = $_POST['smtpusername'];
    $smtpfromname = $_POST['smtpfromname'];

    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to = $_POST['to'];
    $toname = $_POST['toname'];

    $adminemail  = $_POST['adminemail'];
    $adminsubject = $_POST['adminsubject'];
    $adminmessage  = $_POST['adminmessage'];

    $errormessage = '';
    $protocol = isset($_SERVER['SERVER_PROTOCOL']) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.0';
    $errorcode = 409;
    $okcode = 200;

    if(!isset($smtpusername) || !isset($smtpfromname)){
      $errormessage= "SMTP mail username and fromname required (key names are) </br></br>smtpusername </br> smtpfromname";
       header($protocol.' '.$errorcode.' '.$errormessage);
      exit;
    }

    if(!isset($subject) || !isset($message) || !isset($to) || !isset($toname)){
      echo "All fields required ! fields required are (key-names) </br></br> subject , </br> message ,</br> to , </br> toname";
      exit;
    }

    if(!isset($adminmessage) || !isset($adminsubject) || !isset($adminemail) ){
      echo "Admin fields required ! fields required are (key-names) </br></br> adminsubject , </br> adminmessage ,</br> adminemail ";
      exit;
    }

    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.webwizard.in';                  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = $smtpusername;                // SMTP username
    $mail->Password = 'Sunil@1234';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable SSL encryption, TLS also accepted with port 587
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom($smtpusername, $smtpfromname);
    $mail->addAddress($to, $toname);     // Add a recipient
    //$mail->addAddress('contact@example.com');               // Name is optional
    $mail->addReplyTo('sunil@webwizard.in', 'Reply mail');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    
    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $message;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();

    
    $mail->clearAllRecipients( );

    $mail->addAddress($adminemail);     // Add a recipient
    $mail->Subject = $adminsubject;
    $mail->Body    = $adminmessage;

    $mail->send();

    header($protocol.' '.$okcode.' '.'Your message sent successfully ! Thanking you - WebWizard 🥰');

} catch (Exception $e) {
    $internalerror = 500;
    header($protocol.' '.$internalerror.' '.'Message could not be sent. Try again later');
    // echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>