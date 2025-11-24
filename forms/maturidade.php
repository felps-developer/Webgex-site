<?php
  /**
  * Script para enviar o resultado do Diagnóstico de Maturidade.
  * Requer a biblioteca "PHP Email Form".
  */

  // CORREÇÃO 1: O remetente DEVE ser o mesmo usuário da autenticação SMTP.
  $sending_email_address = 'smtp@webgex.com.br'; 
  
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
  $contact->from_email = $sending_email_address; // Agora usa smtp@webgex.com.br
  
  // CORREÇÃO 2: Usar o campo "Reply-To" para direcionar as respostas.
  // Quando o cliente clicar em "Responder", o email irá para no-reply@unigex.com.br.
  $contact->reply_to_email = 'no-reply@unigex.com.br';
  $contact->reply_to_name = 'UNIGEX (Não Responda)';

  // 3. Adiciona a cópia oculta para o gestor
  $contact->bcc = $bcc_email_address;

  // 4. Assunto do email
  $contact->subject = 'Seu Diagnóstico de Maturidade de Gestão - UNIGEX';

  // **Configuração SMTP CORRIGIDA**
  $contact->smtp = array(
    'host' => 'smtp3.xmailer.com.br',
    'username' => 'smtp@webgex.com.br',
    'password' => 'zWsRl8R412',
    'port' => '587',
    'encryption' => 'tls' // CORREÇÃO 3: Adicionado o tipo de criptografia para a porta 587.
  );

  // --- Corpo da Mensagem ---
  $contact->add_message( $_POST['email'], 'Email do Prospect');
  $contact->add_message( $_POST['phone'], 'Telefone do Prospect');
  $contact->add_message( $_POST['message'], 'Diagnóstico Completo');

  // Envia o email e retorna o resultado para o front-end
  echo $contact->send();
?>