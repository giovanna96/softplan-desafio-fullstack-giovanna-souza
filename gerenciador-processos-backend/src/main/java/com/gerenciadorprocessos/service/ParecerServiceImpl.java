package com.gerenciadorprocessos.service;

import com.gerenciadorprocessos.Exception.RegraNegocioException;
import com.gerenciadorprocessos.dto.ParecerDTO;
import com.gerenciadorprocessos.model.Parecer;
import com.gerenciadorprocessos.repository.ParecerRepository;
import com.gerenciadorprocessos.repository.ProcessoRepository;
import com.gerenciadorprocessos.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Giovanna Severo
 * @since 22/10/2022
 */

@Service
public class ParecerServiceImpl implements ParecerService{
    private final UsuarioRepository usuarioRepository;
    private final ParecerRepository parecerRepository;
    private final ProcessoRepository processoRepository;

    @Autowired
    public ParecerServiceImpl(UsuarioRepository usuarioRepository, ParecerRepository parecerRepository, ProcessoRepository processoRepository) {
        this.usuarioRepository = usuarioRepository;
        this.parecerRepository = parecerRepository;
        this.processoRepository = processoRepository;
    }

    @Override
    public void atribuirParecer(ParecerDTO dto) {
        validaDadosParecer(dto);
        List<Parecer> listaParecer = new ArrayList<Parecer>();
        dto.getResponsavelParecer().forEach(responsavel -> listaParecer.add(Parecer.builder()
                .usuarioResponsavel(usuarioRepository.findById(responsavel).get()).build()));
        listaParecer.forEach(parecer -> parecer.setProcesso(processoRepository.findById(dto.getIdProcesso()).get()));
        parecerRepository.saveAll(listaParecer);
    }

    @Override
    public void salvar(ParecerDTO dto) {
        Parecer parecer = dto.toParecer();
        parecer.setProcesso(processoRepository.findById(dto.getIdProcesso()).get());
        parecerRepository.save(parecer);
    }

    private void validaDadosParecer(ParecerDTO dto){
        if(dto.getResponsavelParecer().isEmpty()){
            throw  new RegraNegocioException("Campo obrigatório: Usuários");
        }
    }
}
