package com.gerenciadorprocessos.Exception;

/**
 * @author Giovanna Severo
 * @since 22/10/2022
 */
public class RegraNegocioException extends RuntimeException {
    public RegraNegocioException(String msg) {
        super(msg);
    }
}
