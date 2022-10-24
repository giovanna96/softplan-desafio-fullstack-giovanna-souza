package com.gerenciadorprocessos.controller;

import com.gerenciadorprocessos.Exception.RegraNegocioException;
import com.gerenciadorprocessos.dto.ParecerDTO;
import com.gerenciadorprocessos.dto.ProcessoDTO;
import com.gerenciadorprocessos.service.ParecerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Giovanna Severo
 * @since 22/10/2022
 */
@RestController
@RequestMapping(value = "/parecer")
public class ParecerController {

    ParecerService parecerService;

    @Autowired
    public ParecerController(ParecerService parecerService) {
        this.parecerService = parecerService;
    }

    @PostMapping("/atribuir")
    @PreAuthorize("hasRole('ROLE_TRIADOR')")
    public ResponseEntity atribuirParecer(@RequestBody ParecerDTO parecerDTO){
        try {
            parecerService.atribuirParecer(parecerDTO);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch (RegraNegocioException e){
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/salvar")
    @PreAuthorize("hasRole('ROLE_FINALIZADOR')")
    public ResponseEntity salvar(@RequestBody ParecerDTO parecerDTO){
        try {
            parecerService.atribuirParecer(parecerDTO);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch (RegraNegocioException e){
            return ResponseEntity.badRequest().build();
        }
    }
}
