<?php
namespace Niko\Exception;

class ControllerSocketException extends \Exception
{
    public function __construct($message='', $code=0, Exception $previous=null)
    {
        $lastError = socket_last_error();

        parent::__construct(sprintf(
            '%s - %s (%d)',
            $message,
            socket_strerror($lastError),
            $lastError
        ), $code ?: $lastError, $previous);
    }
}
