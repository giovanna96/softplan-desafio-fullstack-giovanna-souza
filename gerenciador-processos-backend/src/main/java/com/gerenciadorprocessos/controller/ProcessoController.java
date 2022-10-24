package com.gerenciadorprocessos.controller;

import com.gerenciadorprocessos.Exception.RegraNegocioException;
import com.gerenciadorprocessos.dto.ProcessoDTO;
import com.gerenciadorprocessos.dto.ProcessoRespostaDTO;
import com.gerenciadorprocessos.dto.UsuarioDTO;
import com.gerenciadorprocessos.dto.UsuarioRespostaDTO;
import com.gerenciadorprocessos.model.MyUserDetail;
import com.gerenciadorprocessos.service.ProcessoService;
import com.gerenciadorprocessos.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.List;

/**
 * @author Giovanna Severo
 * @since 22/10/2022
 */
@RestController
@RequestMapping(value = "/processo")
public class ProcessoController {
    ProcessoService processoService;
    @Autowired
    public ProcessoController(ProcessoService processoService ){
        this.processoService = processoService;
    }

    @GetMapping("/listar")
    @PreAuthorize("hasAnyRole('ROLE_TRIADOR','ROLE_FINALIZADOR')")
    public ResponseEntity listarProcessos(){
        List<ProcessoRespostaDTO> listaProcessos = processoService.listarProcessos();
        if(!listaProcessos.isEmpty()){
            return ResponseEntity.ok(listaProcessos);
        }
        return ResponseEntity.noContent().build();

    }

    @GetMapping("/listar_sem_parecer")
    @PreAuthorize("hasRole('ROLE_FINALIZADOR')")
    public ResponseEntity listarProcessosSemParecer(HttpServletRequest request){
        Principal principal = request.getUserPrincipal();
        List<ProcessoRespostaDTO> listaProcessos = processoService.listarProcessosSemParecer(principal.getName());
        if(!listaProcessos.isEmpty()){
            return ResponseEntity.ok(listaProcessos);
        }
        return ResponseEntity.noContent().build();

    }

    @PostMapping("/salvar")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity salvar(@RequestBody ProcessoDTO processoDTO){
        try {
            processoService.salvar(processoDTO);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch (RegraNegocioException e){
            return ResponseEntity.badRequest().build();
        }
    }

}
