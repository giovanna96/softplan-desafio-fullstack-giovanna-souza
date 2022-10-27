package com.gerenciadorprocessos.dto;

import com.gerenciadorprocessos.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UsuarioRespostaDTO {
    Long id;

    String nome;

    String email;

    String login;

    boolean ativo;

    String papeis;

    public static UsuarioRespostaDTO usuarioToDto(Usuario usuario){
        return UsuarioRespostaDTO.builder()
                .id(usuario.getId())
                .nome(usuario.getNome())
                .email(usuario.getEmail())
                .login(usuario.getLogin())
                .ativo(usuario.isUsuarioAtivo())
                .papeis(usuario.getPapeis())
                .build();
    }
}
