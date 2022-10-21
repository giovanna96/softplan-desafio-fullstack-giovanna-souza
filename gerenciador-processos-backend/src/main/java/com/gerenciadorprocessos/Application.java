package com.gerenciadorprocessos;

import com.gerenciadorprocessos.model.Usuario;
import com.gerenciadorprocessos.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(UsuarioRepository usuario){
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return args -> {
			usuario.save(new Usuario(1l,"usuario-adm","usr_adm@email.com","usrAdm",encoder.encode("adm123"),true, "ROLE_ADMIN"));
			usuario.save(new Usuario(2l,"usuario-triador","usr_trd@email.com","usrTrd",encoder.encode("trd123"),true,"ROLE_TRIADOR"));
			usuario.save(new Usuario(3l,"usuario-finalizador","usr_fn@email.com","usrFnd",encoder.encode("fnd123"),true,"ROLE_FINALIZADOR"));
		};
	}
}
