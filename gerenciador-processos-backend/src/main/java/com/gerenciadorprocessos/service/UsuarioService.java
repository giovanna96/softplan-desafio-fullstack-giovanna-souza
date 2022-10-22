package com.gerenciadorprocessos.service;

import com.gerenciadorprocessos.dto.UsuarioDTO;
import com.gerenciadorprocessos.dto.UsuarioRespostaDTO;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UsuarioService {

    void salvar(UsuarioDTO usuarioDTO);

    List<UsuarioRespostaDTO> listarUsuarios();

    void atualizaUsuario(Long id, UsuarioDTO usuarioDTO);

    void excluir(Long id);

}
