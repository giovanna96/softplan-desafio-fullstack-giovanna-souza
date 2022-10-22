package com.gerenciadorprocessos.dto;

import com.gerenciadorprocessos.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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


    public static UsuarioRespostaDTO usuarioToDto(Usuario usuario){
        return UsuarioRespostaDTO.builder()
                .id(usuario.getId())
                .nome(usuario.getNome())
                .email(usuario.getEmail())
                .login(usuario.getLogin())
                .ativo(usuario.isUsuarioAtivo())
                .build();
    }
}
