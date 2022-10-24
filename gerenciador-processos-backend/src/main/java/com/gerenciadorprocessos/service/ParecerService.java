package com.gerenciadorprocessos.service;

import com.gerenciadorprocessos.dto.ParecerDTO;
import com.gerenciadorprocessos.dto.ProcessoDTO;

/**
 * @author Giovanna Severo
 * @since 22/10/2022
 */
public interface ParecerService {
    void atribuirParecer(ParecerDTO dto);

    void  salvar(ParecerDTO dto);

}
