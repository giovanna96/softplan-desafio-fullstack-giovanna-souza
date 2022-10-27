package com.gerenciadorprocessos.config;

import com.gerenciadorprocessos.dto.UsuarioRespostaDTO;
import com.gerenciadorprocessos.model.MyUserDetail;
import com.gerenciadorprocessos.model.Usuario;
import com.gerenciadorprocessos.repository.UsuarioRepository;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class JpaUserDetailService implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    public JpaUserDetailService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findByLogin(username);
        usuario.orElseThrow(() -> new BadCredentialsException("Usuário não cadastrado"));
        return usuario.map(MyUserDetail::new).get();
    }
    public UsuarioRespostaDTO findByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findByLogin(username);
        usuario.orElseThrow(() -> new BadCredentialsException("Usuário não cadastrado"));
        return UsuarioRespostaDTO.usuarioToDto(usuario.get());
    }
}
