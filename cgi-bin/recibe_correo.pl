#!/usr/bin/perl

use CGI qw(fatalsToBrowser warningsToBrowser);
use Data::Dumper;
use JSON;
use MIME::Lite;

my $p = new CGI;
print $p->header(-type => 'application/json', -charset => 'utf-8');

my $name 		= $p->param('name');
my $email 		= $p->param('email');
my $subject 	= $p->param('subject');
my $comments 	= $p->param('comments');
my %zSalida;
my %result;


my $mensaje = MIME::Lite->new (
    Subject => $subject,
    From    => $email ,
    To      => 'cristian.sanchez.salas@gmail.com',
    Type    => 'text/html',
    Data    => '<H1>'.$subject.'</H1><br>Mi nombre es '.$name.'<br/><br/>
    '.$comments.'<hr>'
);
if($mensaje->send()){
	$zSalida{'status'} = 'OK';  
	$zSalida{'message'} = 'El mensaje ha sido enviado con éxito. Pronto la escuela Bujinkan se comunicará con usted!';  
}else{
	$zSalida{'status'} = 'Error';  
	$zSalida{'message'} = 'No se a podido enviar el mensaje. Intente nuevamente';  
}

$result = encode_json \%zSalida;
utf8::decode($result);
print $result;

1;