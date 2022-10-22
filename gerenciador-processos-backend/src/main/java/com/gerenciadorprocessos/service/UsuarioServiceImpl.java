package com.gerenciadorprocessos.service;

import com.gerenciadorprocessos.Exception.RegraNegocioException;
import com.gerenciadorprocessos.dto.UsuarioDTO;
import com.gerenciadorprocessos.dto.UsuarioRespostaDTO;
import com.gerenciadorprocessos.model.Usuario;
import com.gerenciadorprocessos.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService{

    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    @Transactional
    public void salvar(UsuarioDTO usuarioDTO) {
        validaUsuario(usuarioDTO.toUsuario());
        usuarioRepository.save(usuarioDTO.toUsuario());
    }

    @Override
    public List<UsuarioRespostaDTO> listarUsuarios() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        List<UsuarioRespostaDTO> usuariosResposta = new ArrayList<UsuarioRespostaDTO>();
        usuarios.forEach(usuario -> usuariosResposta.add(UsuarioRespostaDTO.usuarioToDto(usuario)));
        return usuariosResposta;
    }

    @Override
    @Transactional
    public void atualizaUsuario(Long id, UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioDTO.toUsuario();
        usuario.setId(id);
        validaUsuario(usuario);
        usuarioRepository.save(usuario);
    }

    @Override
    @Transactional
    public void excluir(Long id) {
        usuarioRepository.deleteById(id);
    }

    private void validaUsuario(Usuario usuario){
        validaCamposObrigatorios(usuario);
        validaEmail(usuario);
        validaLogin(usuario);
    }

    private void validaEmail(Usuario usuario){
        Optional<Usuario> usuarioEmail = usuarioRepository.findByEmail(usuario.getEmail());
        if(usuarioEmail.isPresent() && usuarioEmail.get().getId() != usuario.getId()){
            throw new RegraNegocioException("Já existe um usuário cadastrado com o Email informado.");
        }
    }

    private void validaLogin(Usuario usuario){
        Optional<Usuario> usuarioLogin = usuarioRepository.findByEmail(usuario.getLogin());
        if(usuarioLogin.isPresent() && usuarioLogin.get().getId() != usuario.getId()){
            throw new RegraNegocioException("Já existe um usuário cadastrado com o Login informado.");
        }
    }

    private void validaCamposObrigatorios(Usuario usuario){
        if (usuario.getLogin()==null || usuario.getLogin().trim().equals("")){
            throw new RegraNegocioException("Login: Campo obrigatório não informado");
        }

        if (usuario.getNome()==null || usuario.getNome().trim().equals("")){
            throw new RegraNegocioException("Nome: Campo obrigatório não informado");
        }

        if (usuario.getEmail()==null || usuario.getEmail().trim().equals("")){
            throw new RegraNegocioException("Email: Campo obrigatório não informado");
        }
    }
}
