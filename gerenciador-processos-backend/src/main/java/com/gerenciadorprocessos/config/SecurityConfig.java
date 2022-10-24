package com.gerenciadorprocessos.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

/**
 * @author Giovanna Severo
 * @since 20/10/2022
 */

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

    @Autowired
    JpaUserDetailService jpaUserDetailService;


    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable().cors().configurationSource(corsConfigurationSource()).and()
                .authorizeRequests(authorize -> authorize
                        .antMatchers("/h2-console/**").permitAll()
                        .mvcMatchers("/").permitAll()
                        .anyRequest().authenticated())
                .userDetailsService(jpaUserDetailService)
                .headers(headers->headers.frameOptions().sameOrigin())
                .httpBasic();

        return http.build();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.applyPermitDefaultValues();
        config.addAllowedOrigin("*");
        config.addAllowedHeader("Content-Type");
        config.addAllowedHeader("x-xsrf-token");
        config.addAllowedHeader("Authorization");
        config.addAllowedHeader("Access-Control-Allow-Headers");
        config.addAllowedHeader("Origin");
        config.addAllowedHeader("Accept");
        config.addAllowedHeader("X-Requested-With");
        config.addAllowedHeader("Access-Control-Request-Method");
        config.addAllowedHeader("Access-Control-Request-Headers");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("PATCH");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("DELETE");
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
