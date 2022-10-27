package com.gerenciadorprocessos.dto;

import com.gerenciadorprocessos.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UsuarioDTO {

    String nome;

    String email;

    String login;

    String senha;

    boolean ativo;

    String papeis;

    public Usuario toUsuario(){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return Usuario.builder()
                .nome(this.getNome())
                .email(this.getEmail())
                .login(this.getLogin())
                .senha(encoder.encode(this.getSenha()))
                .usuarioAtivo(this.isAtivo())
                .papeis(this.getPapeis()).build();
    }

}
