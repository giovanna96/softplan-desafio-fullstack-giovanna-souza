package com.gerenciadorprocessos.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Giovanna Severo
 * @since 20/10/2022
 */
@RestController
public class AplicacaoController {


    @GetMapping("/homeAdm")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String homeAdm() {
        return ("<h1>Bem vindo a Tela Admin!</h1>");
    }

    @GetMapping("/homeTrd")
    @PreAuthorize("hasRole('ROLE_TRIADOR')")
    public String homeTrd() {
        return ("<h1>Bem vindo a Tela Triador!</h1>");
    }

    @GetMapping("/homeFnd")
    @PreAuthorize("hasRole('ROLE_FINALIZADOR')")
    public String homeFnd() {
        return ("<h1>Bem vindo a Tela Finalizador!</h1>");
    }
}
