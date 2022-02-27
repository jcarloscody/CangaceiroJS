package com.josue.controlbook.service.exceptions;

public class DataIntegrityViolationExceptionn extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public DataIntegrityViolationExceptionn(String message, Throwable cause) {
		super(message, cause);
	}

	public DataIntegrityViolationExceptionn(String message) {
		super(message);
	}
}
