<?php
  /**
  * Script para enviar o resultado do Diagnóstico de Maturidade.
  * Requer a biblioteca "PHP Email Form".
  */

  // Endereço de email da UNIGEX que enviará a mensagem (no-reply).
  $sending_email_address = 'no-reply@unigex.com.br'; 
  
  // Endereço para cópia oculta (seu gestor)
  $bcc_email_address = 'mmiranda@unigex.com.br';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  // --- Configuração do Email ---

  // 1. Para quem vai o email (o prospect)
  $contact->to = $_POST['email']; 
  
  // 2. Quem está enviando (sua empresa)
  $contact->from_name = 'UNIGEX - Diagnóstico de Maturidade';
  $contact->from_email = $sending_email_address;
  
  // 3. Adiciona a cópia oculta para o gestor
  $contact->bcc = $bcc_email_address;

  // 4. Assunto do email
  $contact->subject = 'Seu Diagnóstico de Maturidade de Gestão - UNIGEX';

  // **IMPORTANTE: Configure seu SMTP aqui para envio em produção**
  // Substitua com suas credenciais reais de SMTP para evitar que os emails caiam no spam.
  $contact->smtp = array(
    'host' => 'smtp.unigex.com.br',
    'username' => 'mmiranda@unigex.com.br', // Atualizado aqui também
    'password' => 'mnmn6767%',
    'port' => '587' // ou 465
  );


  // --- Corpo da Mensagem ---
  // Organiza os dados para o e-mail interno
  $contact->add_message( $_POST['email'], 'Email do Prospect');
  $contact->add_message( $_POST['phone'], 'Telefone do Prospect'); // Novo campo de telefone
  $contact->add_message( $_POST['message'], 'Diagnóstico Completo');

  // Envia o email e retorna o resultado para o front-end
  echo $contact->send();
?>