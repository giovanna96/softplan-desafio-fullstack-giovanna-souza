package com.gerenciadorprocessos.service;

import com.gerenciadorprocessos.Exception.RegraNegocioException;
import com.gerenciadorprocessos.dto.ParecerDTO;
import com.gerenciadorprocessos.dto.ProcessoDTO;
import com.gerenciadorprocessos.model.Parecer;
import com.gerenciadorprocessos.repository.ParecerRepository;
import com.gerenciadorprocessos.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ParecerServiceImpl implements ParecerService{
    private final UsuarioRepository usuarioRepository;
    private final ParecerRepository parecerRepository;

    @Autowired
    public ParecerServiceImpl(UsuarioRepository usuarioRepository, ParecerRepository parecerRepository) {
        this.usuarioRepository = usuarioRepository;
        this.parecerRepository = parecerRepository;
    }

    @Override
    public void atribuirParecer(ParecerDTO dto) {
        validaDadosParecer(dto);
        List<Parecer> listaParecer = new ArrayList<Parecer>();
        dto.getResponsavelParecer().forEach(responsavel -> listaParecer.add(Parecer.builder()
                .usuarioResponsavel(usuarioRepository.findById(responsavel).get()).build()));
        parecerRepository.saveAll(listaParecer);
    }

    private void validaDadosParecer(ParecerDTO dto){
        if(dto.getResponsavelParecer().isEmpty()){
            throw  new RegraNegocioException("Campo obrigatório: Usuários");
        }
    }
}
