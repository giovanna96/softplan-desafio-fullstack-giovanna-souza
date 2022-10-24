package com.gerenciadorprocessos.service;

import com.gerenciadorprocessos.dto.ProcessoDTO;
import com.gerenciadorprocessos.dto.ProcessoRespostaDTO;
import com.gerenciadorprocessos.model.Processo;

import java.util.List;

public interface ProcessoService {
    List<ProcessoRespostaDTO> listarProcessos();
    List<ProcessoRespostaDTO> listarProcessosSemParecer(String login);
    void salvar(ProcessoDTO dto);
}
