package com.josue.controlbook.resources.exceptions;

import javax.servlet.ServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.josue.controlbook.service.exceptions.ObjectNotFoundException;

@ControllerAdvice
public class ResourceExceptionHandler {

	@ExceptionHandler(ObjectNotFoundException.class)
	public ResponseEntity<StandardError> objectNotFoundException(ObjectNotFoundException e, ServletRequest request){
		StandardError standardError = new StandardError(System.currentTimeMillis(),HttpStatus.NOT_FOUND.value() , e.getMessage());
		
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(standardError);
	}
}
