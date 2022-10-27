package com.gerenciadorprocessos.controller;

import com.gerenciadorprocessos.Exception.RegraNegocioException;
import com.gerenciadorprocessos.config.JpaUserDetailService;
import com.gerenciadorprocessos.dto.UsuarioDTO;
import com.gerenciadorprocessos.dto.UsuarioRespostaDTO;
import com.gerenciadorprocessos.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Giovanna Severo
 * @since 20/10/2022
 */
@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController {
    UsuarioService usuarioService;
    JpaUserDetailService detailsService;
    @Autowired
    public UsuarioController(UsuarioService usuarioService, JpaUserDetailService detailsService ){
        this.usuarioService = usuarioService;
        this.detailsService = detailsService;
    }

    @GetMapping("/verificar")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_TRIADOR','ROLE_FINALIZADOR')")
    public ResponseEntity verificarUsuario(@RequestParam String login){
        UsuarioRespostaDTO usuario = detailsService.findByUsername(login);
        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/listar")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity listarUsuarios(){
        List<UsuarioRespostaDTO> listaUsuarios = usuarioService.listarUsuarios();
        if(!listaUsuarios.isEmpty()){
            return ResponseEntity.ok(listaUsuarios);
        }
        return ResponseEntity.noContent().build();

    }

    @PostMapping("/salvar")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity salvar(@RequestBody UsuarioDTO usuarioDTO){
        try {
            usuarioService.salvar(usuarioDTO);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch (RegraNegocioException e){
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/atualizar")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity atualizar(@RequestParam(value = "id") Long id, @RequestBody UsuarioDTO usuarioDTO){
        try {
            usuarioService.atualizaUsuario(id,usuarioDTO);
            return ResponseEntity.ok().build();
        }catch (RegraNegocioException e){
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/excluir")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity excluir(@RequestParam(value = "id") Long id){
        try {
            usuarioService.excluir(id);
            return ResponseEntity.ok().build();
        }catch (RegraNegocioException e){
            return ResponseEntity.badRequest().build();
        }
    }

}
