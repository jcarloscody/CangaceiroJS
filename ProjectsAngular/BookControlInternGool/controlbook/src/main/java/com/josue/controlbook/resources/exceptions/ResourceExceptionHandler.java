package com.josue.controlbook.resources.exceptions;

import javax.servlet.ServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.josue.controlbook.service.exceptions.DataIntegrityViolationExceptionn;
import com.josue.controlbook.service.exceptions.ObjectNotFoundException;

@ControllerAdvice
public class ResourceExceptionHandler {

	@ExceptionHandler(ObjectNotFoundException.class)
	public ResponseEntity<StandardError> objectNotFoundException(ObjectNotFoundException e, ServletRequest request){
		StandardError standardError = new StandardError(System.currentTimeMillis(),HttpStatus.NOT_FOUND.value() , e.getMessage());
		
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(standardError);
	}
	
	@ExceptionHandler(DataIntegrityViolationExceptionn.class)
	public ResponseEntity<StandardError> DataIntegrityViolationExceptionn(DataIntegrityViolationExceptionn e, ServletRequest request){
		StandardError standardError = new StandardError(System.currentTimeMillis(),HttpStatus.BAD_REQUEST.value() , e.getMessage());
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(standardError);
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<StandardError> MethodArgumentNotValidException(MethodArgumentNotValidException e, ServletRequest request){
		ValidationError validationError = new ValidationError(System.currentTimeMillis(),HttpStatus.BAD_REQUEST.value() , "validacao dos campos");
		
		for (FieldError f : e.getBindingResult().getFieldErrors()) {
			validationError.setErrors(f.getField(), f.getDefaultMessage());
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validationError);
	}
}
