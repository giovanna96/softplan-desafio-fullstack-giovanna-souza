package com.gerenciadorprocessos.service;

import com.gerenciadorprocessos.Exception.RegraNegocioException;
import com.gerenciadorprocessos.dto.ProcessoDTO;
import com.gerenciadorprocessos.dto.ProcessoRespostaDTO;
import com.gerenciadorprocessos.model.Parecer;
import com.gerenciadorprocessos.model.Processo;
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
public class ProcessoServiceImpl implements ProcessoService{

    private final ProcessoRepository processoRepository;


    @Autowired
    public ProcessoServiceImpl(ProcessoRepository processoRepository) {
        this.processoRepository = processoRepository;
    }

    @Override
    public List<ProcessoRespostaDTO> listarProcessos() {
        List<Processo> listaProcessos =  processoRepository.findAll();
        List<ProcessoRespostaDTO> listaProcessoDTO = new ArrayList<ProcessoRespostaDTO>();
        listaProcessos.forEach(processo -> listaProcessoDTO.add(ProcessoRespostaDTO.processoToDTO(processo)));
        return listaProcessoDTO;
    }

    @Override
    public List<ProcessoRespostaDTO> listarProcessosSemParecer(String login) {
        List<Processo> listaProcessos =  processoRepository.findAllSemParecer(login);
        List<ProcessoRespostaDTO> listaProcessoDTO = new ArrayList<ProcessoRespostaDTO>();
        listaProcessos.forEach(processo -> listaProcessoDTO.add(ProcessoRespostaDTO.processoToDTO(processo)));
        return listaProcessoDTO;
    }

    @Override
    public void salvar(ProcessoDTO dto) {
        processoRepository.save(dto.toProcesso());
    }

}
